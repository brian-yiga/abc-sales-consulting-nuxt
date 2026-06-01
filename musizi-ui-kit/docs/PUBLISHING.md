# Publishing Musizi UI Kit to GitHub Packages

This guide covers how to publish the Musizi UI Kit Vue component library to GitHub Packages and set up automatic publishing on every release.

## Table of Contents

1. [Overview](#overview)
2. [Project Setup](#project-setup)
3. [GitHub Packages Configuration](#github-packages-configuration)
4. [Manual Publishing](#manual-publishing)
5. [Automatic Publishing with GitHub Actions](#automatic-publishing-with-github-actions)
6. [Consumer Setup](#consumer-setup)
7. [Troubleshooting](#troubleshooting)

---

## Overview

The Musizi UI Kit will be published as `@northgreenug/musizi-ui-kit` to GitHub Packages. This allows private distribution within your organization while keeping the package close to your source code.

**What gets published:**
- Compiled ES and UMD module bundles
- TypeScript type declarations
- CSS files (theme, fonts, typography, component styles)

**What consumers need:**
- Vue 3.4+
- Tailwind CSS 4+ (configured to scan the package)

---

## Project Setup

### 1. Create the Library Entry Point

Create `src/index.ts` to export all components:

```typescript
// src/index.ts
export * from './components/button'
export * from './components/icon'
export * from './components/header'
// ... other components

// Export a Vue plugin for global registration (optional)
import type { App } from 'vue'
import { MuiButton } from './components/button'
import { MuiIcon } from './components/icon'
import { MuiHeader } from './components/header'

export default {
  install(app: App) {
    app.component('MuiButton', MuiButton)
    app.component('MuiIcon', MuiIcon)
    app.component('MuiHeader', MuiHeader)
  }
}
```

### 2. Update `vite.config.ts`

Add library build configuration:

```typescript
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), vueJsx(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@stories': fileURLToPath(new URL('./src/stories', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MusiziUiKit',
      fileName: (format) => `musizi-ui-kit.${format}.js`,
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['vue'],
      output: {
        // Global variable name for UMD build
        globals: {
          vue: 'Vue',
        },
        // Preserve CSS in a separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'musizi-ui-kit.css'
          return assetInfo.name || 'asset'
        },
      },
    },
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Empty outDir before building
    emptyOutDir: true,
  },
})
```

### 3. Update `package.json`

Update your `package.json` with the following changes:

```json
{
  "name": "@northgreenug/musizi-ui-kit",
  "version": "0.1.0",
  "description": "Musizi University UI Component Library",
  "type": "module",
  "files": [
    "dist/*.js",
    "dist/*.js.map",
    "dist/*.css",
    "dist/*.d.ts"
  ],
  "main": "./dist/musizi-ui-kit.umd.js",
  "module": "./dist/musizi-ui-kit.es.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/musizi-ui-kit.es.js",
      "require": "./dist/musizi-ui-kit.umd.js"
    },
    "./theme.css": "./dist/theme.css",
    "./fonts.css": "./dist/fonts.css",
    "./typography.css": "./dist/typography.css",
    "./styles.css": "./dist/musizi-ui-kit.css"
  },
  "sideEffects": [
    "**/*.css"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/northgreenug/musizi-ui-kit.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "peerDependencies": {
    "tailwindcss": "^4.1.0",
    "vue": "^3.4.0"
  },
  "scripts": {
    "build:lib": "vite build && vue-tsc --declaration --emitDeclarationOnly --outDir dist && cp src/styles/fonts.css dist/fonts.css && cp src/styles/theme.css dist/theme.css && npx @tailwindcss/cli -i src/styles/typography.build.css -o dist/typography.css --minify",
    "prepublishOnly": "npm run build:lib"
  }
}
```

### 4. Create `tsconfig.lib.json`

Create a dedicated TypeScript config for library builds:

```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "noEmit": false,
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "emitDeclarationOnly": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*", "src/stories/**/*", "src/router/**/*", "src/views/**/*", "src/App.vue", "src/main.ts"]
}
```

**Key changes:**
- `name`: Scoped package name for GitHub Packages
- `files`: Only include the `dist` folder in the published package
- `main`, `module`, `types`, `exports`: Define entry points for different module systems
- `publishConfig`: Points to GitHub Packages registry
- `peerDependencies`: Vue and Tailwind CSS are peer dependencies (not bundled)
- `build:lib`: New script to build the library with type declarations and CSS files
- `prepublishOnly`: Automatically builds before publishing

### 5. Create `.npmrc` in Project Root

Create `.npmrc` to configure the npm registry for publishing:

```
@northgreenug:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 6. Add `.npmrc` to `.gitignore` (Optional)

If you're concerned about accidentally committing tokens, you can use an environment variable approach. However, the `.npmrc` above uses `${GITHUB_TOKEN}` which is safe to commit.

---

## GitHub Packages Configuration

### 1. Create a Personal Access Token (PAT)

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Give it a descriptive name: `musizi-ui-kit-publish`
4. Set expiration as needed (or no expiration for CI)
5. Select scopes:
   - `write:packages` - Upload packages
   - `read:packages` - Download packages
   - `delete:packages` - (Optional) Delete package versions
6. Click **Generate token**
7. **Copy the token immediately** - you won't see it again!

### 2. Add Token as Repository Secret (for CI/CD)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your Personal Access Token
6. Click **Add secret**

> **Note:** You can also use the built-in `GITHUB_TOKEN` in GitHub Actions, but it has limitations for cross-repository access.

### 3. Configure Repository Permissions

Ensure your repository has packages enabled:

1. Go to repository **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests** (if needed)

---

## Manual Publishing

### First-Time Setup

```bash
# Set your GitHub token
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx

# Login to GitHub Packages
npm login --registry=https://npm.pkg.github.com
# Username: your-github-username
# Password: your-personal-access-token
# Email: your-email@example.com
```

### Publish

```bash
# Build the library
npm run build:lib

# Publish to GitHub Packages
npm publish
```

### Versioning

Before publishing updates, bump the version:

```bash
# Patch release (0.1.0 → 0.1.1)
npm version patch

# Minor release (0.1.0 → 0.2.0)
npm version minor

# Major release (0.1.0 → 1.0.0)
npm version major

# Then publish
npm publish
```

---

## Automatic Publishing with GitHub Actions

Every push to `master` triggers the unified CI/Publish/Deploy pipeline in `.github/workflows/deploy.yaml`. No manual release creation is needed.

### How It Works

```
push to master
       |
       v
  [quality-gate]  ── lint, test, build:lib
       |
    ┌──┴──┐
    v     v
[publish] [build-storybook]
    |          |
    |     [deploy-storybook]
    v
  (bump patch, npm publish, push commit+tag, create GH release)
```

1. **quality-gate** — runs lint, unit tests, and `build:lib`. Uploads `dist/` as an artifact.
2. **publish** — downloads the artifact, bumps the patch version, commits the version change, tags it, pushes back to `master`, publishes to GitHub Packages, and creates a GitHub Release with auto-generated notes.
3. **build-storybook** / **deploy-storybook** — builds the Storybook Docker image and deploys to K3s (runs in parallel with publish).

### Infinite-Loop Prevention

- Pushes via `GITHUB_TOKEN` do **not** trigger new workflow runs (GitHub Actions design).
- As a secondary guard, the `publish` job skips when the commit message starts with `chore(release):`.

### Minor and Major Version Bumps

The auto-publish always bumps **patch**. For minor or major bumps, do it manually before pushing:

```bash
# Bump to the desired version locally
npm version minor --no-git-tag-version   # or: npm version major --no-git-tag-version

# Commit with the chore(release): prefix so CI skips auto-bump
git add package.json package-lock.json
git commit -m "chore(release): v$(node -p 'require(\"./package.json\").version')"
git tag "v$(node -p 'require(\"./package.json\").version')"
git push origin master --tags

# Then publish manually or let the next real push trigger auto-publish
npm publish
```

### Verification

```bash
# Watch the workflow run
gh run watch

# Check published versions
npm view @northgreenug/musizi-ui-kit versions --registry=https://npm.pkg.github.com

# Check GitHub Releases
gh release list --limit 3
```

---

## Consumer Setup

### 1. Configure npm to Use GitHub Packages

In the consuming project, create `.npmrc`:

```
@northgreenug:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. Set Up Authentication

**Option A: Environment Variable (Recommended for CI)**

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
npm install @northgreenug/musizi-ui-kit
```

**Option B: npm login**

```bash
npm login --registry=https://npm.pkg.github.com --scope=@northgreenug
```

### 3. Install the Package

```bash
npm install @northgreenug/musizi-ui-kit
```

### 4. Configure CSS Imports (Tailwind CSS v4)

The library uses Tailwind CSS v4, which uses CSS-based configuration. In your main CSS file, add the following imports:

```css
/* main.css */
@import "tailwindcss";
@import "@northgreenug/musizi-ui-kit/theme.css";
@import "@northgreenug/musizi-ui-kit/styles.css";
@import "@northgreenug/musizi-ui-kit/fonts.css";

/* Required: Tell Tailwind to scan the UI kit for utility classes used in templates */
@source "../../node_modules/@northgreenug/musizi-ui-kit/dist/**/*.js";
```

**Important notes:**
- `@source` must come after all `@import` statements
- Adjust the `@source` path based on your CSS file location relative to `node_modules`
- `typography.css` is optional - only import if you use `.mui-text--*` classes:
  ```css
  @import "@northgreenug/musizi-ui-kit/typography.css";
  ```

### 5. Use Components

**Individual Component Import (Tree-shakable):**

```vue
<script setup lang="ts">
import { MuiButton, MuiIcon, MuiHeader } from '@northgreenug/musizi-ui-kit'
</script>

<template>
  <MuiHeader :links="navLinks" />
  <MuiButton label="Click me" variant="red-fill" size="medium" />
  <MuiIcon name="mdi:home" />
</template>
```

**Global Registration (Vue Plugin):**

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import MusiziUiKit from '@northgreenug/musizi-ui-kit'

const app = createApp(App)
app.use(MusiziUiKit)
app.mount('#app')
```

Then use in templates:

```vue
<template>
  <MuiButton label="Click me" variant="red-fill" />
  <MuiIcon name="mdi:home" />
</template>
```

**Import Types:**

```typescript
import type {
  ResponsiveImage,
  BannerAction,
  BannerTheme,
  CarouselItemProps,
  PageContainerProps
} from '@northgreenug/musizi-ui-kit'
```

---

## Troubleshooting

### "404 Not Found" when installing

- Ensure `.npmrc` is correctly configured with the scope
- Verify your `GITHUB_TOKEN` has `read:packages` permission
- Check that the package name matches exactly (case-sensitive)

### "403 Forbidden" when publishing

- Ensure your `GITHUB_TOKEN` has `write:packages` permission
- Verify the package name scope matches your GitHub organization/username
- Check that the repository URL in `package.json` is correct

### "Package version already exists"

- Bump the version before publishing: `npm version patch`
- GitHub Packages doesn't allow overwriting existing versions

### TypeScript types not found

- Ensure `vue-tsc --declaration --emitDeclarationOnly --outDir dist` runs successfully
- Check that `types` field in `package.json` points to the correct file
- Verify `dist/index.d.ts` exists after building

### Tailwind styles not applying

- Ensure your CSS file includes the `@source` directive pointing to the UI kit
- Verify the `@source` path is correct relative to your CSS file location
- Check that both projects use compatible Tailwind v4 versions
- Make sure you've imported `theme.css` before `styles.css`

### GitHub Actions workflow not triggering

- Verify the workflow file is in `.github/workflows/`
- Check the branch/tag patterns match your push
- Review the Actions tab for any error messages

---

## Summary

| Task | Command/Action |
|------|----------------|
| Build library | `npm run build:lib` |
| Manual publish | `npm publish` |
| Auto-publish (patch) | Push to `master` — CI handles everything |
| Bump minor version | `npm version minor --no-git-tag-version`, commit with `chore(release):` prefix |
| Bump major version | `npm version major --no-git-tag-version`, commit with `chore(release):` prefix |

For questions or issues, refer to:
- [GitHub Packages Documentation](https://docs.github.com/en/packages)
- [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)
- [npm package.json exports](https://nodejs.org/api/packages.html#exports)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
