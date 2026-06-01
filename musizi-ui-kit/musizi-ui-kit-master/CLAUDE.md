# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace context

This repo is part of the Northgreen TNGS workspace at `~/dev/`. For workspace tooling, conventions, and prod access, see:

- `~/dev/CLAUDE.md` — workspace conventions, prod-access overview
- `~/dev/docs/onboarding.md` — daily commands (`nw start ui-kit`, worktrees, etc.)
- `~/dev/docs/k8s-operations.md` — production K3s runbook

**This app:**
- Local Storybook: `http://localhost:6006`
- Production (Storybook): `apps-musizi/mui-vue-storybook`
- No DB — UI library only
- Published to GitHub Packages (`@northgreenug/musizi-ui-kit`) via `pnpm publish` on GitHub Release

## Role

You are an expert frontend developer and designer who understands how to implement design systems that scale. This project creates reusable components consumed by other projects, so prioritize:
- Consistency and maintainability
- Clear APIs and documentation
- Proper exports for tree-shaking
- Design tokens that can be customized by consumers

## Project Overview

Musizi UI Kit is a Vue 3 component library with Storybook for component development and documentation. Components are built with TypeScript and styled with Tailwind CSS v4. The library is published to GitHub Packages for use by other Musizi University web projects.

This project uses **pnpm** (pinned via `packageManager`); `pnpm publish` is the publish path to GitHub Packages.

## Commands

```bash
pnpm install           # Install dependencies (use corepack enable first)
pnpm run storybook     # Run Storybook dev server on port 6006
pnpm run dev           # Run Vite dev server
pnpm run build         # Type-check and build for production
pnpm run build:lib     # Build library for distribution (includes CSS)
pnpm run test:unit     # Run unit tests with Vitest
pnpm run test:e2e:dev  # Run Cypress e2e tests against dev server
pnpm run lint          # Lint and fix with ESLint
pnpm run format        # Format with Prettier
```

## Architecture

### Component Structure

Each component lives in `src/components/<name>/` with this structure:
- `<Name>.vue` - Main component
- `index.ts` - Exports component and types
- `types.ts` - TypeScript interfaces and types

Components export from their index: `export { default as Button } from './Button.vue'`

### Attribute Inheritance

All components must support attribute inheritance to allow consumers to merge classes and pass through attributes. Every component should include:

```vue
<template>
  <div v-bind="$attrs" class="internal-classes">
    <!-- content -->
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>
```

This enables consumers to write `<MuiComponent class="custom-class" />` and have `custom-class` merged with the component's internal classes.

### Path Aliases

Configured in both `vite.config.ts` and `tsconfig.json`:
- `@/*` → `./src/*`
- `@components/*` → `./src/components/*`
- `@stories/*` → `./src/stories/*`
- `@utils/*` → `./src/utils/*`

### Storybook

Stories are in `src/stories/` following the `*.stories.ts` pattern. Uses `@storybook/vue3-vite`.

## Design System

### CSS Architecture

The library is designed to work seamlessly with consumer apps without CSS conflicts.

**Key principle:** The library does NOT include Tailwind utilities, preflight, or base theme.
The consumer app provides these via `@import "tailwindcss"` and generates only the utilities it needs.

### Exports for Consumers

| Export | Purpose |
|--------|---------|
| `./theme.css` | Tailwind v4 theme extensions via `@theme` (colors, fonts, fontSize) |
| `./styles.css` | Component-scoped styles only (no utilities, no preflight) |
| `./fonts.css` | Google Fonts imports for Open Sans and Poppins |
| `./typography.css` | Optional: `.mui-text--*` responsive typography classes |

### Consumer Setup

```css
/* Consumer's main.css */
@import "tailwindcss";
@import "@northgreenug/musizi-ui-kit/theme.css";
@import "@northgreenug/musizi-ui-kit/styles.css";
@import "@northgreenug/musizi-ui-kit/fonts.css";

/* Required: Tell Tailwind to scan the UI kit for utility classes used in templates */
@source "../../node_modules/@northgreenug/musizi-ui-kit/dist/**/*.js";
```

**Important notes:**
- `@source` must come after all `@import` statements
- Adjust the `@source` path based on your CSS file location relative to node_modules
- `typography.css` is optional - only import if you use `.mui-text--*` classes

### Typography System

Typography uses a mobile-first responsive scale with automatic viewport adaptation.
Font sizes use `rem` for accessibility (respects user browser settings).
Line heights are unitless for proportional scaling.

| Class | Font | Mobile | Tablet/Desktop |
|-------|------|--------|----------------|
| `.mui-text--display-1` | Poppins Bold | 2.6875rem/1.2 | 3.75rem/1.2 |
| `.mui-text--display-2` | Poppins Bold | 2.4375rem/1.2 | 3.0625rem/1.2 |
| `.mui-text--display-3` | Poppins Bold | 1.9375rem/1.2 | 2.4375rem/1.2 |
| `.mui-text--headline-1` | Poppins Bold | 1.5625rem/1.2 | 1.9375rem/1.2 |
| `.mui-text--headline-2` | Poppins Bold | 1.25rem/1.2 | 1.5625rem/1.2 |
| `.mui-text--headline-3` | Poppins Bold | 1rem/1.5 | 1.25rem/1.2 (desktop) |
| `.mui-text--body` | Open Sans | 1rem/1.5 | 1rem/1.5 |
| `.mui-text--small-1` | Open Sans | 0.8125rem/1.54 | 0.8125rem/1.54 |
| `.mui-text--small-2` | Open Sans | 0.6875rem/1.55 | 0.6875rem/1.55 |
| `.mui-text--small-3` | Open Sans | 0.625rem/1.5 | 0.625rem/1.5 |

Breakpoints: Mobile < 768px, Tablet/Desktop >= 768px, Desktop >= 1024px

### Colors

- `maroon` - #C10230 (primary brand color)
- `cool-grey` - #54565A
- `purple` - #75308C

### Fonts

- `font-sans` - Open Sans (body text)
- `font-poppins` - Poppins (headings, display text)

## IDE Setup

VSCode with Volar extension (disable Vetur). Use `vue-tsc` for type checking Vue files.
