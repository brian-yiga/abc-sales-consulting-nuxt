# Dockerizing musizi-mailassets for Kubernetes

**Version:** 1.0
**Date:** December 2024
**Applies to:** Static file hosting (nginx) for mailassets.musizi.ac.ug

---

## Overview

This guide covers dockerizing the `musizi-mailassets` repository, which serves static files (email signature images) via nginx. Unlike the other Musizi repositories which use Nuxt 3, this is a simple nginx container.

### Key Differences from Nuxt Apps

| Aspect | Nuxt Apps | musizi-mailassets |
|--------|-----------|---------------|
| Base Image | node:20-alpine | nginx:alpine |
| Port | 3000 | 80 |
| Build Process | Multi-stage with npm | Single stage, copy files |
| NPM_TOKEN | Required | Not required |

---

## Prerequisites

Before starting, ensure you have:

- [ ] Access to the GitHub repository settings (for adding secrets)
- [ ] SSH access to the K3s server
- [ ] Static files ready in the repository (e.g., email signature images)

---

## Step 1: Create Dockerfile

Create a `Dockerfile` in the root of the repository:

```dockerfile
FROM nginx:alpine

# Copy static files to nginx html directory
COPY public /usr/share/nginx/html

# Custom nginx config for proper caching
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    location / { \
        expires 30d; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1
```

### Directory Structure

Your repository should have this structure:

```
musizi-mailassets/
├── Dockerfile
├── .dockerignore
├── .github/
│   └── workflows/
│       └── deploy.yaml
└── public/
    └── signature.png    # Your static files go here
```

---

## Step 2: Create .dockerignore

Create a `.dockerignore` file:

```
.git
.github
*.md
.vscode
.idea
```

---

## Step 3: Create GitHub Actions Workflow

Create the directory and workflow file:

```bash
mkdir -p .github/workflows
```

Create `.github/workflows/deploy.yaml`:

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - master
  workflow_dispatch:

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: northgreenug/musizi-mailassets

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
          kubectl set image deployment/musizi-mailassets \
            app=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:sha-${GITHUB_SHA::7} \
            -n apps-musizi

      - name: Wait for rollout
        run: |
          kubectl rollout status deployment/musizi-mailassets -n apps-musizi --timeout=300s

      - name: Verify health
        run: |
          kubectl run health-check --rm -i --restart=Never --image=busybox -n apps-musizi -- wget -qO- http://musizi-mailassets-svc:80 > /dev/null
          echo "Deployment healthy"
```

---

## Step 4: Configure GitHub Repository Secrets

Go to the repository on GitHub → Settings → Secrets and variables → Actions.

Add these secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `PROD_KUBECONFIG` | Base64-encoded kubeconfig | For connecting to K3s |
| `PROD_IP` | `46.224.10.180` | K3s server address |

> **Note:** Unlike Nuxt apps, `NPM_TOKEN` is not required since there are no private npm packages.

### Getting PROD_KUBECONFIG

SSH to your K3s server and run:

```bash
cat /etc/rancher/k3s/k3s.yaml | base64 -w 0
```

Copy the entire output.

---

## Step 5: Create Kubernetes Manifest

Create a `manifests/musizi-mailassets.yaml` file in the repository:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: musizi-mailassets
  namespace: apps-musizi
  labels:
    app: musizi-mailassets
spec:
  replicas: 1
  selector:
    matchLabels:
      app: musizi-mailassets
  template:
    metadata:
      labels:
        app: musizi-mailassets
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: app
          image: ghcr.io/northgreenug/musizi-mailassets:latest
          ports:
            - containerPort: 80
          resources:
            requests:
              memory: "8Mi"
              cpu: "5m"
            limits:
              memory: "32Mi"
              cpu: "50m"
          livenessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 5
            periodSeconds: 30
          readinessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 3
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: musizi-mailassets-svc
  namespace: apps-musizi
spec:
  selector:
    app: musizi-mailassets
  ports:
    - port: 80
      targetPort: 80
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: musizi-mailassets-ingress
  namespace: apps-musizi
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`mailassets.musizi.ac.ug`)
      kind: Rule
      services:
        - name: musizi-mailassets-svc
          port: 80
  tls:
    secretName: musizi-tls-secret
```

### Apply the Manifest

Apply to your K3s cluster:

```bash
kubectl apply -f manifests/musizi-mailassets.yaml
```

Verify the deployment:

```bash
kubectl get pods -n apps-musizi -l app=musizi-mailassets
kubectl get svc -n apps-musizi | grep assets
kubectl get ingressroute -n apps-musizi | grep assets
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

1. Go to the repository on GitHub
2. Click the **Actions** tab
3. Watch the "Build and Deploy" workflow

### 6.3 Expected Results

| Job | First Run | After K8s Deployment Exists |
|-----|-----------|------------------------------|
| **Build and Push** | ✅ Succeeds | ✅ Succeeds |
| **Deploy to K3s** | ❌ Fails (deployment doesn't exist) | ✅ Succeeds |

---

## Step 7: Test the Deployment

### 7.1 Local Testing with /etc/hosts

On your local machine, temporarily point the domain to your server:

```bash
sudo nano /etc/hosts
```

Add:

```
46.224.10.180 mailassets.musizi.ac.ug
```

### 7.2 Test in Browser or curl

```bash
# Test with curl (skip SSL verification since cert isn't ready yet)
curl -k https://mailassets.musizi.ac.ug/signature.png -o /dev/null -w "%{http_code}\n"
# Expected: 200
```

Or open `https://mailassets.musizi.ac.ug/signature.png` in your browser (accept the SSL warning).

### 7.3 Clean Up Hosts File

After testing, remove the entry:

```bash
sudo sed -i '' '/mailassets\.musizi\.ac\.ug/d' /etc/hosts
```

---

## Troubleshooting

### Error: 404 Not Found

**Cause:** Files not in the correct location.

**Solution:** Ensure static files are in the `public/` directory, not the root.

### Error: Deploy job fails with "deployment not found"

**Cause:** The Kubernetes deployment doesn't exist yet.

**Solution:** Apply the K8s manifest first:

```bash
kubectl apply -f manifests/musizi-mailassets.yaml
```

### Error: kubectl connection refused

**Cause:** `PROD_KUBECONFIG` or `PROD_IP` secret is incorrect.

**Solution:**
1. Regenerate the kubeconfig: `cat /etc/rancher/k3s/k3s.yaml | base64 -w 0`
2. Verify the IP matches your server
3. Update the secrets in repository settings

---

## Checklist

- [ ] Create `Dockerfile` in repository root
- [ ] Create `.dockerignore` in repository root
- [ ] Create `.github/workflows/deploy.yaml`
- [ ] Add static files to `public/` directory
- [ ] Add `PROD_KUBECONFIG` repository secret
- [ ] Add `PROD_IP` repository secret
- [ ] Create `manifests/musizi-mailassets.yaml`
- [ ] Apply K8s manifest to cluster
- [ ] Commit and push to master
- [ ] Verify build succeeds in Actions tab
- [ ] Verify deploy job succeeds
- [ ] Test with /etc/hosts locally
- [ ] Clean up /etc/hosts after testing
