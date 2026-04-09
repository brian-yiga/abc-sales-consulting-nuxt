# Dockerizing Nuxt 3 Projects for Kubernetes

**Version:** 2.0
**Date:** December 2024
**Applies to:** Nuxt 3 SSR applications with private GitHub Packages

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Create Dockerfile](#step-1-create-dockerfile)
4. [Step 2: Create .dockerignore](#step-2-create-dockerignore)
5. [Step 3: Create GitHub Actions Workflow](#step-3-create-github-actions-workflow)
6. [Step 4: Configure GitHub Repository Secrets](#step-4-configure-github-repository-secrets)
7. [Step 5: Create Kubernetes Manifest](#step-5-create-kubernetes-manifest)
8. [Step 6: Push and Verify](#step-6-push-and-verify)
9. [Step 7: Test the Deployment](#step-7-test-the-deployment)
10. [Troubleshooting](#troubleshooting)
11. [Quick Reference](#quick-reference)

---

## Overview

This guide covers dockerizing Nuxt 3 SSR applications that use private packages from GitHub Packages (e.g., `@northgreenug/musizi-ui-kit`) and deploying them to a K3s Kubernetes cluster.

### Key Challenges Addressed

1. **Private package authentication** - GitHub Packages requires authentication tokens
2. **npm ci vs npm install** - Version mismatches between local and container npm
3. **Multi-stage builds** - Keeping final image small and secure
4. **Security** - Not exposing tokens in final image
5. **Repository secrets** - Organization secrets require paid GitHub plan for private repos

### Repositories This Applies To

| Repository | Domain | Notes |
|------------|--------|-------|
| `musizi-uni` | musizi.ac.ug | Main university website |
| `musizi-business` | business.musizi.ac.ug | School of Business |
| `musizi-wings` | wings.musizi.ac.ug | Wings program |
| `musizi-health` | health.musizi.ac.ug | School of Health |
| `musizi-foundation` | musizifoundation.org | Musizi Foundation |

> **Note:** For `musizi-assets` (mailassets.musizi.ac.ug), see the separate guide: `dockerizing-musizi-assets.md`

---

## Prerequisites

Before starting, ensure you have:

- [ ] Access to the GitHub repository settings (for adding secrets)
- [ ] GitHub Personal Access Token (PAT) with `read:packages` and `write:packages` scopes
- [ ] SSH access to the K3s server (IP: `46.224.10.180`)
- [ ] The `apps-musizi` namespace exists in K8s
- [ ] The `ghcr-secret` pull secret exists in the namespace

### Local Development Setup

For local `npm install` to work with private packages, create a `.npmrc` file in the project root (this file is gitignored):

```bash
echo '@northgreenug:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}' > .npmrc
```

Then set your GitHub token:
```bash
export GITHUB_TOKEN=ghp_your_token_here
```

Add this export to your `~/.zshrc` or `~/.bashrc` to make it permanent.

### Important Notes

> **Organization Secrets Limitation:** On GitHub's free plan, organization secrets only work with public repositories. For private repositories, you must add secrets to each repository individually.

---

## Step 1: Create Dockerfile

Create a `Dockerfile` in the root of your Nuxt project:

```dockerfile
# =============================================================================
# Stage 1: Install dependencies
# =============================================================================
FROM node:20-alpine AS deps

# GitHub token for private packages (passed via --build-arg in CI)
ARG GITHUB_TOKEN

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Configure npm for GitHub Packages authentication (overwrite .npmrc with actual token)
RUN if [ -n "$GITHUB_TOKEN" ]; then \
      echo "@northgreenug:registry=https://npm.pkg.github.com" > .npmrc; \
      echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc; \
    fi

# Install dependencies based on lockfile present
# NOTE: Using `npm install` instead of `npm ci` to avoid version mismatch issues
# between local npm and container npm versions
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Remove .npmrc with token after install (security)
RUN rm -f .npmrc

# =============================================================================
# Stage 2: Build the application
# =============================================================================
FROM node:20-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Nuxt application
RUN npm run build

# =============================================================================
# Stage 3: Production runtime
# =============================================================================
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nuxtjs

# Copy built output from builder
COPY --from=builder --chown=nuxtjs:nodejs /app/.output /app/.output

USER nuxtjs

EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

# Health check for Kubernetes probes
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", ".output/server/index.mjs"]
```

### Why `npm install` instead of `npm ci`?

`npm ci` requires exact match between `package.json` and `package-lock.json`. When your local npm version differs from the container's npm version (e.g., local npm 11.x vs container npm 10.x), the lock file format may be incompatible, causing errors like:

```
npm error `npm ci` can only install packages when your package.json and package-lock.json are in sync
npm error Missing: @types/node@25.0.3 from lock file
```

Using `npm install` is more forgiving and regenerates the lock file if needed.

---

## Step 2: Create .dockerignore and Update .gitignore

### .dockerignore

Create a `.dockerignore` file to exclude unnecessary files from the build context:

```
node_modules
.nuxt
.output
.git
.github
*.md
.env*
.vscode
.idea
coverage
.npmrc
```

### .gitignore

Add `.npmrc` to your `.gitignore` to prevent committing tokens:

```bash
echo ".npmrc" >> .gitignore
```

> **Why gitignore .npmrc?** The `.npmrc` file contains `${GITHUB_TOKEN}` for local development. If committed, it could conflict with CI/CD and doesn't add value since Docker creates its own `.npmrc` during build.

---

## Step 3: Create GitHub Actions Workflow

Create the directory structure and workflow file:

```bash
mkdir -p .github/workflows
```

Create `.github/workflows/deploy.yaml` with the following content.

**Important:** You must update the placeholders marked with `CHANGE_ME` for your specific repository.

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - master
  workflow_dispatch:

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: northgreenug/CHANGE_ME  # e.g., musizi-business

jobs:
  build:
    name: Build and Push
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=raw,value=latest,enable={{is_default_branch}}
            type=sha,prefix=sha-,format=short

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
          platforms: linux/amd64
          build-args: |
            GITHUB_TOKEN=${{ secrets.NPM_TOKEN }}

  deploy:
    name: Deploy to K3s
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Set up kubectl
        uses: azure/setup-kubectl@v3
        with:
          version: 'v1.28.0'

      - name: Configure Kubeconfig
        run: |
          mkdir -p ~/.kube
          echo "${{ secrets.PROD_KUBECONFIG }}" | base64 -d > ~/.kube/config
          sed -i "s/127.0.0.1/${{ secrets.PROD_IP }}/g" ~/.kube/config
          chmod 600 ~/.kube/config

      - name: Update deployment
        run: |
          kubectl set image deployment/CHANGE_ME \
            app=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:sha-${GITHUB_SHA::7} \
            -n apps-musizi

      - name: Wait for rollout
        run: |
          kubectl rollout status deployment/CHANGE_ME -n apps-musizi --timeout=300s

      - name: Verify health
        run: |
          RS=$(kubectl get deployment CHANGE_ME -n apps-musizi -o jsonpath='{.status.updatedReplicas}')
          echo "Updated replicas: $RS"
          kubectl run health-check --rm -i --restart=Never --image=busybox -n apps-musizi -- wget -qO- http://CHANGE_ME-svc:80 > /dev/null
          echo "Deployment healthy"
```

### Values to Replace

Search for `CHANGE_ME` and replace with the correct values:

| Repository | IMAGE_NAME | Deployment | Service |
|------------|------------|------------|---------|
| musizi-uni | `northgreenug/musizi-uni` | `musizi-uni` | `musizi-uni-svc` |
| musizi-business | `northgreenug/musizi-business` | `musizi-business` | `musizi-business-svc` |
| musizi-wings | `northgreenug/musizi-wings` | `musizi-wings` | `musizi-wings-svc` |
| musizi-health | `northgreenug/musizi-health` | `musizi-health` | `musizi-health-svc` |
| musizi-foundation | `northgreenug/musizi-foundation` | `musizi-foundation` | `musizi-foundation-svc` |

---

## Step 4: Configure GitHub Repository Secrets

Since organization secrets don't work with private repositories on the free GitHub plan, you must add secrets to **each repository individually**.

### 4.1 Create a GitHub Personal Access Token (One Time)

You only need to create this once - the same token is used for all repositories.

1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Configure:
   - **Name:** `Musizi CI/CD - Packages Access`
   - **Expiration:** No expiration (or set a long duration)
   - **Scopes:** Select only:
     - [x] `read:packages`
     - [x] `write:packages`
4. Click **Generate token**
5. **Copy the token immediately** - you won't see it again!

### 4.2 Get PROD_KUBECONFIG Value

SSH to your K3s server and run:

```bash
ssh root@46.224.10.180

# On Linux:
cat /etc/rancher/k3s/k3s.yaml | base64 -w 0
```

Copy the entire output (it's one very long line).

### 4.3 Add Secrets to Repository

For each repository:

1. Go to the repository on GitHub
2. Click **Settings** (tab at the top)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `NPM_TOKEN` | Your GitHub PAT from step 4.1 | For downloading private packages |
| `PROD_KUBECONFIG` | Base64 string from step 4.2 | For connecting to K3s |
| `PROD_IP` | `46.224.10.180` | K3s server address |

---

## Step 5: Create Kubernetes Manifest

Create a `manifests/` directory and add your deployment manifest.

### 5.1 K8s Manifest Template

Create `manifests/<app-name>.yaml` using this template. Replace all placeholders:

- `CHANGE_ME` - App name (e.g., `musizi-business`)
- `CHANGE_ME_DOMAIN` - Domain with Host matching (e.g., `business.musizi.ac.ug`)
- `CHANGE_ME_TLS_SECRET` - TLS secret name (e.g., `musizi-tls-secret` or `foundation-tls-secret`)

> **Note:** All apps use the `apps-musizi` namespace.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: CHANGE_ME
  namespace: apps-musizi
  labels:
    app: CHANGE_ME
spec:
  replicas: 1
  selector:
    matchLabels:
      app: CHANGE_ME
  template:
    metadata:
      labels:
        app: CHANGE_ME
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: app
          image: ghcr.io/northgreenug/CHANGE_ME:latest
          ports:
            - containerPort: 3000
          resources:
            requests:
              memory: "64Mi"
              cpu: "50m"
            limits:
              memory: "256Mi"
              cpu: "300m"
          livenessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 30
          readinessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: CHANGE_ME-svc
  namespace: apps-musizi
spec:
  selector:
    app: CHANGE_ME
  ports:
    - port: 80
      targetPort: 3000
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: CHANGE_ME-ingress
  namespace: apps-musizi
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`CHANGE_ME_DOMAIN`)
      kind: Rule
      services:
        - name: CHANGE_ME-svc
          port: 80
  tls:
    secretName: CHANGE_ME_TLS_SECRET
```

### 5.2 Values to Replace

| Repository | CHANGE_ME | CHANGE_ME_DOMAIN | CHANGE_ME_TLS_SECRET |
|------------|-----------|------------------|----------------------|
| musizi-uni | `musizi-uni` | `musizi.ac.ug`) \|\| Host(`www.musizi.ac.ug` | `musizi-tls-secret` |
| musizi-business | `musizi-business` | `business.musizi.ac.ug` | `musizi-tls-secret` |
| musizi-wings | `musizi-wings` | `wings.musizi.ac.ug` | `musizi-tls-secret` |
| musizi-health | `musizi-health` | `health.musizi.ac.ug` | `musizi-tls-secret` |
| musizi-foundation | `musizi-foundation` | `musizifoundation.org`) \|\| Host(`www.musizifoundation.org` | `foundation-tls-secret` |

### 5.3 Apply the Manifest

Apply to your K3s cluster:

```bash
kubectl apply -f manifests/<app-name>.yaml
```

Verify the deployment:

```bash
# Check pods
kubectl get pods -n apps-musizi -l app=<app-name>

# Check service
kubectl get svc -n apps-musizi | grep <app-name>

# Check ingress route
kubectl get ingressroute -n apps-musizi | grep <app-name>
```

---

## Step 6: Push and Verify

### 6.1 Commit and Push

```bash
git add Dockerfile .dockerignore .github/workflows/deploy.yaml manifests/
git commit -m "feat: add Docker and CI/CD configuration for K3s deployment"
git push
```

### 6.2 Monitor the Build

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Watch the "Build and Deploy" workflow

### 6.3 Expected Results

| Job | First Run | After K8s Deployment Exists |
|-----|-----------|------------------------------|
| **Build and Push** | ✅ Succeeds | ✅ Succeeds |
| **Deploy to K3s** | ❌ Fails (deployment doesn't exist) | ✅ Succeeds |

The deploy job will fail on the first run because the Kubernetes deployment doesn't exist yet. This is expected! Apply the K8s manifest first, then subsequent pushes will deploy automatically.

### 6.4 Verify Image in GHCR

After a successful build:

1. Go to your GitHub organization: https://github.com/orgs/northgreenug/packages
2. You should see the new container image listed
3. Or check in the repository under **Packages** in the right sidebar

---

## Step 7: Test the Deployment

### 7.1 Local Testing with /etc/hosts

On your **local machine**, temporarily point the domain to your server to test before DNS cutover:

```bash
sudo nano /etc/hosts
```

Add the appropriate entry for your subdomain:

```
46.224.10.180 business.musizi.ac.ug
```

### 7.2 Test with curl

```bash
# Test HTTPS (skip SSL verification since cert may not be ready)
curl -k -s https://business.musizi.ac.ug | head -5

# Check response headers
curl -k -s -I https://business.musizi.ac.ug | head -10
```

Expected: HTML response with `x-powered-by: Nuxt` header.

### 7.3 Test in Browser

Open `https://business.musizi.ac.ug` in your browser.

**Expected behavior:**
- You may see an SSL warning (certificate isn't valid until DNS cutover) - click "Advanced" → "Proceed anyway"
- The site should load from your K3s cluster

### 7.4 Clean Up Hosts File

After testing, remove the entry:

```bash
# On macOS:
sudo sed -i '' '/business\.musizi\.ac\.ug/d' /etc/hosts

# On Linux:
sudo sed -i '/business\.musizi\.ac\.ug/d' /etc/hosts
```

Verify cleanup:

```bash
grep musizi /etc/hosts || echo "Cleanup successful"
```

---

## Troubleshooting

### Error: `npm ci` lock file mismatch

```
npm error `npm ci` can only install packages when your package.json and package-lock.json are in sync
```

**Solution:** The Dockerfile uses `npm install` instead of `npm ci` to avoid this. If you still see issues:

```bash
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "fix: regenerate package-lock.json"
git push
```

### Error: 401 Unauthorized for GitHub Packages

```
npm error 401 Unauthorized - GET https://npm.pkg.github.com/download/@northgreenug/...
```

**Causes:**
1. Token expired or invalid
2. Token lacks `read:packages` scope
3. `NPM_TOKEN` secret not set in repository

**Solution:**
1. Verify the secret exists in repository settings
2. Generate a new token if expired
3. Ensure token has `read:packages` scope

### Error: Deploy job fails with "deployment not found"

```
error: deployments.apps "musizi-business" not found
```

**Cause:** The Kubernetes deployment doesn't exist yet.

**Solution:** Apply the K8s manifest first:

```bash
kubectl apply -f manifests/musizi-business.yaml
```

### Error: kubectl connection refused

```
Unable to connect to the server: dial tcp: lookup 127.0.0.1: no such host
```

**Cause:** `PROD_KUBECONFIG` or `PROD_IP` secret is incorrect.

**Solution:**
1. Regenerate the kubeconfig: `cat /etc/rancher/k3s/k3s.yaml | base64 -w 0`
2. Verify the IP: `46.224.10.180`
3. Update the secrets in repository settings

### Error: ImagePullBackOff

```
Failed to pull image "ghcr.io/northgreenug/...": unauthorized
```

**Cause:** The `ghcr-secret` doesn't exist or has wrong credentials.

**Solution:** Recreate the pull secret:

```bash
kubectl delete secret ghcr-secret -n apps-musizi

kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USER \
  --docker-password=YOUR_GITHUB_PAT \
  --docker-email=YOUR_EMAIL \
  -n apps-musizi
```

### Build takes too long

**Solution:** The workflow includes BuildKit caching. First build will be slow; subsequent builds use cache.

---

## Quick Reference

### Files to Create/Update

| File | Action | Purpose |
|------|--------|---------|
| `Dockerfile` | Create | Multi-stage build for Nuxt 3 SSR |
| `.dockerignore` | Create | Exclude unnecessary files from build context |
| `.gitignore` | Update | Add `.npmrc` to prevent committing tokens |
| `.github/workflows/deploy.yaml` | Create | CI/CD pipeline for build and deploy |
| `manifests/<app-name>.yaml` | Create | K8s Deployment, Service, IngressRoute |

### Secrets to Add (Per Repository)

| Secret | Purpose | Value |
|--------|---------|-------|
| `NPM_TOKEN` | Download private packages | Your GitHub PAT |
| `PROD_KUBECONFIG` | Deploy to K8s cluster | Base64-encoded kubeconfig |
| `PROD_IP` | K3s server address | `46.224.10.180` |

### Repository Configuration Table

All apps deploy to the `apps-musizi` namespace.

| Repository | IMAGE_NAME | Deployment | Service | Domain | TLS Secret |
|------------|------------|------------|---------|--------|------------|
| musizi-uni | `northgreenug/musizi-uni` | `musizi-uni` | `musizi-uni-svc` | `musizi.ac.ug` | `musizi-tls-secret` |
| musizi-business | `northgreenug/musizi-business` | `musizi-business` | `musizi-business-svc` | `business.musizi.ac.ug` | `musizi-tls-secret` |
| musizi-wings | `northgreenug/musizi-wings` | `musizi-wings` | `musizi-wings-svc` | `wings.musizi.ac.ug` | `musizi-tls-secret` |
| musizi-health | `northgreenug/musizi-health` | `musizi-health` | `musizi-health-svc` | `health.musizi.ac.ug` | `musizi-tls-secret` |
| musizi-foundation | `northgreenug/musizi-foundation` | `musizi-foundation` | `musizi-foundation-svc` | `musizifoundation.org` | `foundation-tls-secret` |

### Checklist Per Repository

**Setup Phase:**
- [ ] Create `Dockerfile` in repository root
- [ ] Create `.dockerignore` in repository root
- [ ] Add `.npmrc` to `.gitignore`
- [ ] Create `.github/workflows/deploy.yaml`
- [ ] Replace all `CHANGE_ME` placeholders in workflow

**Secrets Phase:**
- [ ] Add `NPM_TOKEN` repository secret
- [ ] Add `PROD_KUBECONFIG` repository secret
- [ ] Add `PROD_IP` repository secret

**Kubernetes Phase:**
- [ ] Create `manifests/<app-name>.yaml`
- [ ] Replace all placeholders: `CHANGE_ME`, `CHANGE_ME_DOMAIN`, `CHANGE_ME_TLS_SECRET`
- [ ] Apply manifest: `kubectl apply -f manifests/<app-name>.yaml`
- [ ] Verify pod is running: `kubectl get pods -n apps-musizi`

**Verification Phase:**
- [ ] Commit and push to master
- [ ] Verify build succeeds in Actions tab
- [ ] Verify deploy job succeeds
- [ ] Verify image appears in GitHub Container Registry

**Testing Phase:**
- [ ] Add entry to `/etc/hosts` for local testing
- [ ] Test with `curl -k https://<domain>`
- [ ] Test in browser (accept SSL warning)
- [ ] Verify `x-powered-by: Nuxt` header
- [ ] Remove `/etc/hosts` entry after testing
