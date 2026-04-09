# Migration Guide: musizi.ac.ug to Hetzner K3s

**Version:** 1.0
**Date:** December 2024
**Status:** Draft - Pending Review
**Target Environment:** Hetzner Cloud K3s Cluster (shared with tngsops.com)
**Domain:** musizi.ac.ug

---

## Table of Contents

1. [Overview](#overview)
2. [Pre-Migration Checklist](#pre-migration-checklist)
3. [Phase 1: Cloudflare Setup](#phase-1-cloudflare-setup)
4. [Phase 2: SSL Certificate Configuration](#phase-2-ssl-certificate-configuration)
5. [Phase 3: Dockerizing Applications](#phase-3-dockerizing-applications)
6. [Phase 4: Kubernetes Deployment](#phase-4-kubernetes-deployment)
7. [Phase 5: Pre-Cutover Testing](#phase-5-pre-cutover-testing)
8. [Phase 6: DNS Cutover](#phase-6-dns-cutover)
9. [Phase 7: CI/CD Pipeline](#phase-7-cicd-pipeline)
10. [Phase 8: Post-Migration Verification](#phase-8-post-migration-verification)
11. [Rollback Procedure](#rollback-procedure)
12. [Appendix: Manifests](#appendix-manifests)

---

## Overview

### Current State

| Component | Current Host | Technology |
|-----------|--------------|------------|
| musizi.ac.ug | Vercel | Nuxt 3 SSR |
| business.musizi.ac.ug | Vercel | Nuxt 3 SSR |
| wings.musizi.ac.ug | Vercel | Nuxt 3 SSR |
| health.musizi.ac.ug | Vercel | Nuxt 3 SSR |
| mailassets.musizi.ac.ug | cPanel (46.4.13.75) | Static files |
| DNS | cPanel Zone Editor | BIND |
| Domain Registrar | registry.ug | - |

### Target State

| Component | Target Host | Technology |
|-----------|-------------|------------|
| All subdomains | Hetzner K3s | Docker containers |
| DNS | Cloudflare | Proxied (Orange Cloud) |
| SSL | Let's Encrypt | Wildcard via cert-manager |
| Ingress | Traefik | IngressRoute CRDs |
| CI/CD | GitHub Actions | Auto-deploy on master push |

### Expected Downtime

- **Target:** < 1 hour
- **Strategy:** Keep Vercel active as fallback for 48 hours post-migration

---

## Pre-Migration Checklist

Before starting, ensure you have:

- [ ] SSH access to K3s server
- [ ] GitHub PAT with `write:packages` scope
- [ ] Access to Cloudflare account
- [ ] Access to registry.ug for nameserver changes
- [ ] Access to cPanel for DNS export
- [ ] All 4 Nuxt app repositories ready in `northgreenug` org
- [ ] Mail asset image file ready

---

## Phase 1: Cloudflare Setup

**Objective:** Import DNS records to Cloudflare without changing nameservers yet.

### 1.1 Add Domain to Cloudflare

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Add a Site**
3. Enter `musizi.ac.ug`
4. Select **Free** plan (or your preferred plan)
5. Click **Continue**

> **Note:** Cloudflare will automatically scan and detect your existing DNS records. No need to export from cPanel - Cloudflare queries your current nameservers and imports records automatically.

### 1.2 Review Auto-Detected Records

Cloudflare will display the records it found. Verify these critical records were detected:

- **MX** record pointing to `SMTP.GOOGLE.COM`
- **TXT** records (SPF, DMARC, google-site-verification)
- **DKIM** records (`default._domainkey`, `google._domainkey`, `mailjet._domainkey`, `mlsend._domainkey`)
- **CNAME** records for email services (`em3359`, `mta`)

If any records are missing, you can query them manually using `dig`:
```bash
dig musizi.ac.ug TXT +noall +answer
dig default._domainkey.musizi.ac.ug TXT +noall +answer
```

### 1.3 DNS Record Cleanup

After reviewing, clean up records:

#### ✅ KEEP (Critical for Email & Auth)

| Type | Name | Value | Notes |
|------|------|-------|-------|
| MX | @ | SMTP.GOOGLE.COM (priority 1) | Google Workspace |
| MX | @ | Other Google MX records | Keep all MX records |
| TXT | @ | `v=spf1...` | SPF record (long string with google, mlsend, etc.) |
| TXT | @ | `google-site-verification=...` | Google verification |
| TXT | `default._domainkey` | DKIM for Google | |
| TXT | `mailjet._domainkey` | DKIM for Mailjet | |
| TXT | `mlsend._domainkey` | DKIM for MailerLite | |
| CNAME | `em3359` | SendGrid verification | |
| CNAME | `mta` | MailerSend | |
| CNAME | `*.comodoca.com` | SSL validation | Delete after Let's Encrypt works |

#### ❌ DELETE (cPanel Bloat)

| Type | Name | Reason |
|------|------|--------|
| A/CNAME | `ftp` | cPanel FTP - not needed |
| A/CNAME | `cpanel` | cPanel access |
| A/CNAME | `whm` | WHM access |
| A/CNAME | `webmail` | cPanel webmail (using Gmail) |
| A/CNAME | `webdisk` | cPanel WebDisk |
| A/CNAME | `cpcontacts` | cPanel contacts |
| A/CNAME | `cpcalendars` | cPanel calendars |
| A/CNAME | `autoconfig` | Email autodiscover (conflicts with Gmail) |
| A/CNAME | `autodiscover` | Email autodiscover (conflicts with Gmail) |
| A | `@` | Will recreate pointing to Hetzner |
| A | `mailassets` | Will recreate pointing to Hetzner |

#### ⏸️ DO NOT CHANGE YET

Leave these pointing to Vercel for now:
- Any existing A/CNAME records for `www`, `business`, `wings`, `health`
- We'll update these in Phase 6

### 1.4 Configure Cloudflare SSL/TLS

1. Go to **SSL/TLS** > **Overview**
2. Set encryption mode to **Full (Strict)**
3. Go to **SSL/TLS** > **Edge Certificates**
4. Enable **Always Use HTTPS** (handles HTTP→HTTPS redirect)

### 1.5 Note Cloudflare Nameservers

After clicking "Continue to activation", Cloudflare will display the nameservers assigned to your domain:

| New (Cloudflare) | Old (to remove) |
|------------------|-----------------|
| `ethan.ns.cloudflare.com` | `ns1.africaonecloud.com` |
| `suzanne.ns.cloudflare.com` | `ns2.africaonecloud.com` |

**Save these** - you'll need them in Phase 6.

> ⚠️ **DO NOT change nameservers at registry.ug yet!** Wait until Phase 6. Click "Continue" to finish setup - Cloudflare will show the domain as "Pending" until nameservers are changed, which is expected.

---

## Phase 2: SSL Certificate Configuration

**Objective:** Configure cert-manager to issue wildcard certificate for musizi.ac.ug.

### 2.1 Update Cloudflare API Token

Your existing API token (used for tngsops.com certificates) needs permission for musizi.ac.ug.

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Find your existing token (the one used for cert-manager)
3. Click **Edit**
4. Under **Zone Resources**, add:
   - **Include** > **Specific zone** > `musizi.ac.ug`
5. Click **Continue to summary** > **Update token**

> **Alternative:** If you prefer isolation, create a new token for musizi.ac.ug only and create a separate Secret/ClusterIssuer. See [Appendix: Alternative Certificate Setup](#alternative-separate-api-token).

### 2.2 Create Certificate Resource

SSH to your K3s server, create the namespace, and create the certificate:

```bash
ssh root@YOUR_SERVER_IP

# Create namespace first
kubectl create namespace apps-musizi

# Create certificate
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: musizi-wildcard-cert
  namespace: apps-musizi
spec:
  secretName: musizi-tls-secret
  issuerRef:
    name: cloudflare-issuer
    kind: ClusterIssuer
  commonName: musizi.ac.ug
  dnsNames:
    - "musizi.ac.ug"
    - "*.musizi.ac.ug"
EOF
```

### 2.3 Verify Certificate Issuance

```bash
# Check certificate status
kubectl get certificate -n apps-musizi

# Check challenges (should show "pending" state)
kubectl get challenges -n apps-musizi
```

**Expected output before Phase 6:**
```
NAME                   READY   SECRET              AGE
musizi-wildcard-cert   False   musizi-tls-secret   2m
```

> ⚠️ **Certificate will show `READY: False` until Phase 6.** This is expected because:
> 1. Cert-manager creates DNS-01 challenge TXT records in Cloudflare
> 2. Let's Encrypt queries DNS to verify the challenge
> 3. But your nameservers still point to `africaonecloud.com`, not Cloudflare
> 4. So Let's Encrypt can't see the challenge records yet
>
> **Verify in Cloudflare:** Check your DNS dashboard - you should see `_acme-challenge` TXT records created by cert-manager.
>
> **Action:** Proceed to Phase 3. Certificate will auto-complete after DNS cutover in Phase 6.

---

## Phase 3: Dockerizing Applications

### 3.1 Nuxt 3 Dockerfile

Add this Dockerfile to the root of each Nuxt app repository (`musizi-uni`, `musizi-business`, `musizi-wings`, `musizi-health`):

**File:** `Dockerfile`

```dockerfile
# =============================================================================
# Stage 1: Install dependencies
# =============================================================================
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies based on lockfile present
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

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

### 3.2 Add .dockerignore

**File:** `.dockerignore`

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
```

### 3.3 Mail Assets Repository

Create a new repository for the static mail asset:

```bash
# On your local machine
mkdir musizi-assets
cd musizi-assets
git init

# Create public directory and add your image
mkdir public
# Copy your signature image to public/
# e.g., cp ~/path/to/signature.png public/

# Create Dockerfile
cat > Dockerfile << 'EOF'
FROM nginx:alpine

# Copy static files
COPY public /usr/share/nginx/html

# Add custom nginx config for proper caching
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
EOF

# Create .dockerignore
cat > .dockerignore << 'EOF'
.git
*.md
EOF

# Commit and push
git add .
git commit -m "feat: initial mail assets setup"
git branch -M master
git remote add origin https://github.com/northgreenug/musizi-assets.git
git push -u origin master
```

### 3.4 Build and Push Images (Manual First Time)

For the initial deployment, build and push images manually. CI/CD will handle subsequent deploys.

```bash
# Login to GHCR
echo $GITHUB_PAT | docker login ghcr.io -u YOUR_GITHUB_USER --password-stdin

# For each repository, build and push:
# Example for musizi-uni:
cd musizi-uni
docker build -t ghcr.io/northgreenug/musizi-uni:latest .
docker push ghcr.io/northgreenug/musizi-uni:latest

# Repeat for musizi-business, musizi-wings, musizi-health, musizi-assets
```

---

## Phase 4: Kubernetes Deployment

### 4.1 Create Namespace and Secrets

SSH to your K3s server:

```bash
ssh root@YOUR_SERVER_IP

# Create namespace
kubectl create namespace apps-musizi

# Create GHCR pull secret
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USER \
  --docker-password=YOUR_GITHUB_PAT \
  --docker-email=YOUR_EMAIL \
  -n apps-musizi
```

### 4.2 Apply Kubernetes Manifests

Create the manifest file on the server:

```bash
cat > /opt/k3s-configs/musizi-stack.yaml << 'EOF'
# =============================================================================
# Certificate (if not already created in Phase 2)
# =============================================================================
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: musizi-wildcard-cert
  namespace: apps-musizi
spec:
  secretName: musizi-tls-secret
  issuerRef:
    name: cloudflare-issuer
    kind: ClusterIssuer
  commonName: musizi.ac.ug
  dnsNames:
    - "musizi.ac.ug"
    - "*.musizi.ac.ug"

---
# =============================================================================
# 1. Main Website (musizi.ac.ug)
# =============================================================================
apiVersion: apps/v1
kind: Deployment
metadata:
  name: musizi-uni
  namespace: apps-musizi
  labels:
    app: musizi-uni
spec:
  replicas: 1
  selector:
    matchLabels:
      app: musizi-uni
  template:
    metadata:
      labels:
        app: musizi-uni
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: app
          image: ghcr.io/northgreenug/musizi-uni:latest
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
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
---
apiVersion: v1
kind: Service
metadata:
  name: musizi-uni-svc
  namespace: apps-musizi
spec:
  selector:
    app: musizi-uni
  ports:
    - port: 80
      targetPort: 3000
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: musizi-uni-ingress
  namespace: apps-musizi
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`musizi.ac.ug`) || Host(`www.musizi.ac.ug`)
      kind: Rule
      services:
        - name: musizi-uni-svc
          port: 80
  tls:
    secretName: musizi-tls-secret

---
# =============================================================================
# 2. Business Subdomain (business.musizi.ac.ug)
# =============================================================================
apiVersion: apps/v1
kind: Deployment
metadata:
  name: musizi-business
  namespace: apps-musizi
  labels:
    app: musizi-business
spec:
  replicas: 1
  selector:
    matchLabels:
      app: musizi-business
  template:
    metadata:
      labels:
        app: musizi-business
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: app
          image: ghcr.io/northgreenug/musizi-business:latest
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
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
---
apiVersion: v1
kind: Service
metadata:
  name: musizi-business-svc
  namespace: apps-musizi
spec:
  selector:
    app: musizi-business
  ports:
    - port: 80
      targetPort: 3000
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: musizi-business-ingress
  namespace: apps-musizi
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`business.musizi.ac.ug`)
      kind: Rule
      services:
        - name: musizi-business-svc
          port: 80
  tls:
    secretName: musizi-tls-secret

---
# =============================================================================
# 3. Wings Subdomain (wings.musizi.ac.ug)
# =============================================================================
apiVersion: apps/v1
kind: Deployment
metadata:
  name: musizi-wings
  namespace: apps-musizi
  labels:
    app: musizi-wings
spec:
  replicas: 1
  selector:
    matchLabels:
      app: musizi-wings
  template:
    metadata:
      labels:
        app: musizi-wings
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: app
          image: ghcr.io/northgreenug/musizi-wings:latest
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
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
---
apiVersion: v1
kind: Service
metadata:
  name: musizi-wings-svc
  namespace: apps-musizi
spec:
  selector:
    app: musizi-wings
  ports:
    - port: 80
      targetPort: 3000
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: musizi-wings-ingress
  namespace: apps-musizi
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`wings.musizi.ac.ug`)
      kind: Rule
      services:
        - name: musizi-wings-svc
          port: 80
  tls:
    secretName: musizi-tls-secret

---
# =============================================================================
# 4. Health Subdomain (health.musizi.ac.ug)
# =============================================================================
apiVersion: apps/v1
kind: Deployment
metadata:
  name: musizi-health
  namespace: apps-musizi
  labels:
    app: musizi-health
spec:
  replicas: 1
  selector:
    matchLabels:
      app: musizi-health
  template:
    metadata:
      labels:
        app: musizi-health
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: app
          image: ghcr.io/northgreenug/musizi-health:latest
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
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
---
apiVersion: v1
kind: Service
metadata:
  name: musizi-health-svc
  namespace: apps-musizi
spec:
  selector:
    app: musizi-health
  ports:
    - port: 80
      targetPort: 3000
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: musizi-health-ingress
  namespace: apps-musizi
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`health.musizi.ac.ug`)
      kind: Rule
      services:
        - name: musizi-health-svc
          port: 80
  tls:
    secretName: musizi-tls-secret

---
# =============================================================================
# 5. Mail Assets (mailassets.musizi.ac.ug)
# =============================================================================
apiVersion: apps/v1
kind: Deployment
metadata:
  name: musizi-assets
  namespace: apps-musizi
  labels:
    app: musizi-assets
spec:
  replicas: 1
  selector:
    matchLabels:
      app: musizi-assets
  template:
    metadata:
      labels:
        app: musizi-assets
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: app
          image: ghcr.io/northgreenug/musizi-assets:latest
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
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 3
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
---
apiVersion: v1
kind: Service
metadata:
  name: musizi-assets-svc
  namespace: apps-musizi
spec:
  selector:
    app: musizi-assets
  ports:
    - port: 80
      targetPort: 80
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: musizi-assets-ingress
  namespace: apps-musizi
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`mailassets.musizi.ac.ug`)
      kind: Rule
      services:
        - name: musizi-assets-svc
          port: 80
  tls:
    secretName: musizi-tls-secret
EOF
```

Apply the manifests:

```bash
kubectl apply -f /opt/k3s-configs/musizi-stack.yaml
```

### 4.3 Verify Deployment

```bash
# Check all pods are running
kubectl get pods -n apps-musizi

# Expected output:
NAME                               READY   STATUS    RESTARTS   AGE
musizi-uni-xxxxx                  1/1     Running   0          1m
musizi-business-xxxxx              1/1     Running   0          1m
musizi-wings-xxxxx                 1/1     Running   0          1m
musizi-health-xxxxx                1/1     Running   0          1m
musizi-assets-xxxxx                1/1     Running   0          1m

# Check services
kubectl get svc -n apps-musizi

# Check ingress routes
kubectl get ingressroute -n apps-musizi

# Check certificate
kubectl get certificate -n apps-musizi
```

---

## Phase 5: Pre-Cutover Testing

**Objective:** Test the K3s deployment before switching DNS.

### 5.1 Local /etc/hosts Testing

On your **local machine** (not the server), temporarily point the domains to your Hetzner IP:

```bash
# Edit hosts file (requires sudo/admin)
sudo nano /etc/hosts

# Add these lines (replace with your Hetzner IP)
YOUR_HETZNER_IP musizi.ac.ug
YOUR_HETZNER_IP www.musizi.ac.ug
YOUR_HETZNER_IP business.musizi.ac.ug
YOUR_HETZNER_IP wings.musizi.ac.ug
YOUR_HETZNER_IP health.musizi.ac.ug
YOUR_HETZNER_IP mailassets.musizi.ac.ug
```

### 5.2 Test Each Site

Open a browser and test:

1. `https://musizi.ac.ug` - Main site loads
2. `https://www.musizi.ac.ug` - Redirects or loads correctly
3. `https://business.musizi.ac.ug` - Business portal loads
4. `https://wings.musizi.ac.ug` - Wings portal loads
5. `https://health.musizi.ac.ug` - Health portal loads
6. `https://mailassets.musizi.ac.ug/YOUR_IMAGE.png` - Image loads

> **Note:** You may see SSL warnings since the certificate is for Cloudflare-proxied traffic. This is expected during testing.

### 5.3 Test from Server (Internal)

```bash
# Test each service internally
kubectl exec -it -n apps-musizi deployment/musizi-uni -- wget -qO- http://localhost:3000 | head -20
kubectl exec -it -n apps-musizi deployment/musizi-assets -- wget -qO- http://localhost:80 | head -5
```

### 5.4 Remove Test Hosts Entries

After testing, remove the entries from `/etc/hosts`:

```bash
sudo nano /etc/hosts
# Remove the musizi.ac.ug lines you added
```

---

## Phase 6: DNS Cutover

**Objective:** Switch DNS to Cloudflare and point to Hetzner.

> ⚠️ **This is the point of no return.** Ensure Phase 5 testing passed.

### 6.1 Update DNS Records in Cloudflare

Go to Cloudflare Dashboard > musizi.ac.ug > DNS:

#### Create/Update A Record for Root Domain

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | @ | YOUR_HETZNER_IP | Proxied (Orange) |

#### Create CNAME Records for Subdomains

| Type | Name | Target | Proxy Status |
|------|------|--------|--------------|
| CNAME | www | musizi.ac.ug | Proxied (Orange) |
| CNAME | business | musizi.ac.ug | Proxied (Orange) |
| CNAME | wings | musizi.ac.ug | Proxied (Orange) |
| CNAME | health | musizi.ac.ug | Proxied (Orange) |
| A | mailassets | YOUR_HETZNER_IP | Proxied (Orange) |

> **Why CNAME?** All subdomains point to the root A record. Traefik uses the `Host` header to route traffic to the correct service. This simplifies management - if Hetzner IP changes, you only update one record.

### 6.2 Change Nameservers at registry.ug

1. Log into [registry.ug](https://registry.ug) (or your registrar portal)
2. Navigate to domain management for `musizi.ac.ug`
3. Find **Nameservers** or **DNS Settings**
4. Replace current nameservers with Cloudflare's:

| Action | Nameserver |
|--------|------------|
| ✅ Add | `ethan.ns.cloudflare.com` |
| ✅ Add | `suzanne.ns.cloudflare.com` |
| ❌ Remove | `ns1.africaonecloud.com` |
| ❌ Remove | `ns2.africaonecloud.com` |

5. Save changes

### 6.3 Monitor Propagation

```bash
# Check nameserver propagation
dig NS musizi.ac.ug +short

# Should eventually show Cloudflare nameservers
# This can take 5 minutes to 48 hours (usually < 1 hour)

# Check A record propagation
dig A musizi.ac.ug +short
# Should show Cloudflare proxy IP (104.x.x.x or 172.x.x.x)
```

### 6.4 Verify Certificate

Once DNS propagates, the certificate from Phase 2 will auto-complete. Verify:

```bash
# Certificate should now show READY: True
kubectl get certificate -n apps-musizi

# Challenges should disappear (completed)
kubectl get challenges -n apps-musizi

# If certificate still not ready after 10 minutes, check events
kubectl describe certificate musizi-wildcard-cert -n apps-musizi

# Check cert-manager logs for errors
kubectl logs -n infra -l app=cert-manager --tail=100 | grep musizi
```

---

## Phase 7: CI/CD Pipeline

### 7.1 GitHub Actions Workflow

Add this workflow to each Nuxt repository:

**File:** `.github/workflows/deploy.yaml`

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - master
  workflow_dispatch:

env:
  REGISTRY: ghcr.io
  # Change IMAGE_NAME per repository:
  # musizi-uni, musizi-business, musizi-wings, musizi-health, musizi-assets
  IMAGE_NAME: northgreenug/musizi-uni

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
            type=sha,prefix=,format=short

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
    environment: production

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
          # Change deployment name per repository:
          # musizi-uni, musizi-business, musizi-wings, musizi-health, musizi-assets
          kubectl set image deployment/musizi-uni \
            app=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:sha-${GITHUB_SHA::7} \
            -n apps-musizi

      - name: Wait for rollout
        run: |
          kubectl rollout status deployment/musizi-uni -n apps-musizi --timeout=300s

      - name: Verify health
        run: |
          sleep 10
          POD=$(kubectl get pod -n apps-musizi -l app=musizi-uni -o jsonpath='{.items[0].metadata.name}')
          kubectl exec -n apps-musizi $POD -- wget -qO- http://localhost:3000 > /dev/null
          echo "✅ Deployment healthy"
```

### 7.2 Repository-Specific Changes

For each repository, update these values in the workflow:

| Repository | IMAGE_NAME | Deployment Name |
|------------|------------|-----------------|
| musizi-uni | `northgreenug/musizi-uni` | `musizi-uni` |
| musizi-business | `northgreenug/musizi-business` | `musizi-business` |
| musizi-wings | `northgreenug/musizi-wings` | `musizi-wings` |
| musizi-health | `northgreenug/musizi-health` | `musizi-health` |
| musizi-assets | `northgreenug/musizi-assets` | `musizi-assets` |

### 7.3 Add GitHub Secrets

For each repository, add these secrets in **Settings > Secrets and variables > Actions**:

| Secret | Value |
|--------|-------|
| `PROD_KUBECONFIG` | Base64-encoded kubeconfig from K3s server |
| `PROD_IP` | Your Hetzner server IP |

To get the kubeconfig:

```bash
ssh root@YOUR_SERVER_IP
cat /etc/rancher/k3s/k3s.yaml | base64 -w 0
# Copy the entire output
```

---

## Phase 8: Post-Migration Verification

### 8.1 Functional Testing

Test all sites from multiple devices/networks:

- [ ] `https://musizi.ac.ug` loads correctly
- [ ] `https://www.musizi.ac.ug` loads correctly
- [ ] `https://business.musizi.ac.ug` loads correctly
- [ ] `https://wings.musizi.ac.ug` loads correctly
- [ ] `https://health.musizi.ac.ug` loads correctly
- [ ] `https://mailassets.musizi.ac.ug/YOUR_IMAGE.png` loads correctly
- [ ] HTTP automatically redirects to HTTPS
- [ ] SSL certificate shows valid (Let's Encrypt)

### 8.2 Email Verification

- [ ] Send test email from Google Workspace
- [ ] Check email signature images load
- [ ] Verify SPF/DKIM passes (check email headers)
- [ ] Test receiving email

Use [mail-tester.com](https://www.mail-tester.com/) to verify email deliverability.

### 8.3 Monitoring

```bash
# Watch pod status
kubectl get pods -n apps-musizi -w

# Check logs for any errors
kubectl logs -n apps-musizi -l app=musizi-uni --tail=50
kubectl logs -n apps-musizi -l app=musizi-business --tail=50
kubectl logs -n apps-musizi -l app=musizi-wings --tail=50
kubectl logs -n apps-musizi -l app=musizi-health --tail=50
kubectl logs -n apps-musizi -l app=musizi-assets --tail=50

# Check resource usage
kubectl top pods -n apps-musizi
```

### 8.4 Keep Vercel Active (48 hours)

**Do NOT disable Vercel deployments for 48 hours** in case rollback is needed.

After 48 hours of stable operation:
1. Disable auto-deploy on Vercel for each project
2. Optionally delete Vercel projects

---

## Rollback Procedure

If critical issues occur during or after migration:

### Quick Rollback (< 5 minutes)

1. **In Cloudflare DNS**, update records to point back to Vercel:
   - Delete the A record for `@`
   - Change CNAME targets back to Vercel URLs (e.g., `musizi-uni.vercel.app`)

2. Vercel will resume serving traffic within minutes

### Nameserver Rollback (if changed)

If you already changed nameservers at registry.ug:

1. Log into registry.ug
2. Change nameservers back to original (cPanel or Vercel's)
3. Wait for propagation (can take up to 48 hours)

> **Tip:** Keep the original nameserver values noted before making changes.

---

## Appendix: Manifests

### Alternative: Separate API Token

If you prefer a separate Cloudflare API token for musizi.ac.ug:

```bash
# 1. Create new API token in Cloudflare with musizi.ac.ug zone only

# 2. Create a separate secret
kubectl create secret generic cloudflare-musizi-token \
  --from-literal=api-token=YOUR_NEW_TOKEN \
  --namespace infra

# 3. Create a separate ClusterIssuer
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: cloudflare-issuer-musizi
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com
    privateKeySecretRef:
      name: letsencrypt-musizi-key
    solvers:
    - dns01:
        cloudflare:
          apiTokenSecretRef:
            name: cloudflare-musizi-token
            key: api-token
EOF

# 4. Update Certificate to use new issuer
# Change issuerRef.name to: cloudflare-issuer-musizi
```

### Resource Summary

| Component | CPU Request | CPU Limit | Memory Request | Memory Limit |
|-----------|-------------|-----------|----------------|--------------|
| musizi-uni | 50m | 300m | 64Mi | 256Mi |
| musizi-business | 50m | 300m | 64Mi | 256Mi |
| musizi-wings | 50m | 300m | 64Mi | 256Mi |
| musizi-health | 50m | 300m | 64Mi | 256Mi |
| musizi-assets | 5m | 50m | 8Mi | 32Mi |
| **Total** | **205m** | **1.25 cores** | **264Mi** | **1.056Gi** |

### Useful Commands

```bash
# Restart all deployments
kubectl rollout restart deployment -n apps-musizi

# Scale a deployment
kubectl scale deployment musizi-uni --replicas=2 -n apps-musizi

# View events
kubectl get events -n apps-musizi --sort-by='.lastTimestamp'

# Debug a failing pod
kubectl describe pod POD_NAME -n apps-musizi
kubectl logs POD_NAME -n apps-musizi --previous

# Force pull new image
kubectl rollout restart deployment/musizi-uni -n apps-musizi
```

---

## Summary

This guide covers the complete migration of musizi.ac.ug from cPanel/Vercel to Kubernetes on Hetzner with Cloudflare DNS.

**Key Changes:**
1. DNS management moves from cPanel to Cloudflare
2. All applications containerized and deployed to K3s
3. SSL certificates managed by cert-manager with Let's Encrypt
4. CI/CD via GitHub Actions for automated deployments
5. Vercel retained as fallback for 48 hours

**Estimated Migration Time:** 2-4 hours (excluding DNS propagation)

**Post-Migration:**
- Monitor Cloudflare analytics for traffic patterns
- Watch K8s logs for application errors
- Verify email deliverability
- Delete Vercel projects after 48 hours of stability
