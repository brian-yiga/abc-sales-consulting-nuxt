# =============================================================================
# Stage 1: Install dependencies
# =============================================================================
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies via pnpm (pinned via packageManager field in package.json)
RUN corepack enable && pnpm install --frozen-lockfile

# =============================================================================
# Stage 2: Build Storybook
# =============================================================================
FROM node:20-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Storybook static site
RUN corepack enable && pnpm run build-storybook

# =============================================================================
# Stage 3: Production runtime (nginx)
# =============================================================================
FROM nginx:alpine AS runner

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# nginx runs as non-root by default in alpine image
EXPOSE 80

# Health check for Kubernetes probes
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
