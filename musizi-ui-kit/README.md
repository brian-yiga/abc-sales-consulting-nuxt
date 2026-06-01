# Musizi UI Kit

A Vue 3 component library for Musizi University web projects. Built with TypeScript and Tailwind CSS v4.

## Requirements

- **Vue** ^3.4.0
- **Tailwind CSS** ^4.1.0

## Installation

```bash
npm install @northgreenug/musizi-ui-kit
```

> **Note:** This package is published to GitHub Packages. You may need to configure npm to use the GitHub registry for the `@northgreenug` scope.

## Usage

### 1. Configure Tailwind CSS

> **Required:** Your project must have Tailwind CSS v4.1+ installed and configured.

Import the Musizi theme and styles in your main CSS file:

```css
/* In your main CSS file (e.g., assets/css/main.css) */
@import "tailwindcss";
@import "@northgreenug/musizi-ui-kit/theme.css";
@import "@northgreenug/musizi-ui-kit/styles.css";
@import "@northgreenug/musizi-ui-kit/fonts.css";

/* Required: Tell Tailwind to scan the UI kit for utility classes */
@source "../../node_modules/@northgreenug/musizi-ui-kit/dist/**/*.js";
```

> **Important:**
> - The `@source` directive must come after all `@import` statements
> - Adjust the relative path based on your CSS file's location (the example assumes `assets/css/main.css`)
> - The UI kit does NOT include Tailwind utilities or preflight - your app provides these via `@import "tailwindcss"`

This adds the Musizi theme (colors, fonts, fontSize) to your Tailwind configuration. You can use these values in your templates:

- **Colors:** `text-maroon`, `bg-cool-grey`, `border-purple`
- **Fonts:** `font-sans` (Open Sans), `font-poppins` (Poppins)
- **Font Sizes:** `text-display-1`, `text-headline-1`, `text-body`, `text-small-1`, etc.

### 2. Load Fonts

The fonts are already imported if you followed step 1. Alternatively:

**Option A** - Import in JavaScript:
```js
import '@northgreenug/musizi-ui-kit/fonts.css'
```

**Option B** - Load fonts yourself (self-hosting, different CDN, etc.):
- **Open Sans** (weights: 300-800)
- **Poppins** (weights: 400, 600, 700)
- **Material Icons**

### 3. Load Typography (Optional)

Import the typography CSS for responsive text utility classes:

```css
/* In your main CSS file */
@import "@northgreenug/musizi-ui-kit/typography.css";
```

Or in JavaScript:
```js
import '@northgreenug/musizi-ui-kit/typography.css'
```

This automatically applies body typography (`Open Sans 16/24`) to the `<body>` element and provides semantic typography classes that adapt to viewport size:

```html
<h1 class="mui-text--display-1">Large Hero Title</h1>
<h2 class="mui-text--headline-1">Section Heading</h2>
<p class="mui-text--body">Body text content...</p>
<small class="mui-text--small-1">Fine print</small>
```

| Class | Font | Mobile | Tablet/Desktop |
|-------|------|--------|----------------|
| `.mui-text--display-1` | Poppins Bold | 2.6875rem/1.2 | 3.75rem/1.2 |
| `.mui-text--display-2` | Poppins Bold | 2.4375rem/1.2 | 3.0625rem/1.2 |
| `.mui-text--display-3` | Poppins Bold | 1.9375rem/1.2 | 2.4375rem/1.2 |
| `.mui-text--headline-1` | Poppins Bold | 1.5625rem/1.2 | 1.9375rem/1.2 |
| `.mui-text--headline-2` | Poppins Bold | 1.25rem/1.2 | 1.5625rem/1.2 |
| `.mui-text--headline-3` | Poppins Bold | 1rem/1.5 | 1.25rem/1.2 |
| `.mui-text--body` | Open Sans | 1rem/1.5 | 1rem/1.5 |
| `.mui-text--small-1` | Open Sans | 0.8125rem/1.54 | 0.8125rem/1.54 |
| `.mui-text--small-2` | Open Sans | 0.6875rem/1.55 | 0.6875rem/1.55 |
| `.mui-text--small-3` | Open Sans | 0.625rem/1.5 | 0.625rem/1.5 |

*Font sizes use `rem` for accessibility (respects user browser settings). Line heights are unitless for proportional scaling.*

### 4. Register Components

#### Option A: Vue Plugin (Global Registration)

```js
import { createApp } from 'vue'
import MusiziUIKit from '@northgreenug/musizi-ui-kit'
import App from './App.vue'

const app = createApp(App)
app.use(MusiziUIKit)
app.mount('#app')
```

Then use components directly in templates:

```vue
<template>
  <MuiButton label="Click me" variant="red-fill" />
</template>
```

#### Option B: Individual Imports (Tree-Shakeable)

```vue
<script setup lang="ts">
import { MuiButton, MuiIcon } from '@northgreenug/musizi-ui-kit'
</script>

<template>
  <MuiButton label="Learn More" variant="black-stroke" />
  <MuiIcon icon="arrow_forward" />
</template>
```

## Components

### Button

```vue
<MuiButton
  label="Click me"
  variant="red-fill"
  size="medium"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | Button text |
| `variant` | `string` | `'black-stroke'` | `'black-stroke'`, `'white-stroke'`, `'red-fill'`, `'white-fill'`, `'right-icon-no-fill'`, `'right-icon-red-fill'`, `'icon-only'` |
| `size` | `string` | `'medium'` | `'small'`, `'medium'`, `'large'` |
| `icon` | `string` | - | Material Icon name (for icon variants) |
| `wide` | `boolean` | `false` | Full-width button |

### Icon

```vue
<MuiIcon icon="home" size="24" color="#C10230" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | required | Material Icon name |
| `size` | `number` | - | Icon size in pixels |
| `color` | `string` | - | Icon color |

### Banner Components

- `MuiBannerInsetCard` - Banner with inset card overlay
- `MuiBannerVideoModal` - Banner with video modal trigger
- `MuiBannerWithBleeding` - Full-bleed banner with bleeding edges
- `MuiBannerWithSlash` - Banner with diagonal slash design
- `MuiBlurredBackgroundBanner` - Banner with blurred background
- `MuiBlurredTitleOnlyBanner` - Minimal banner with blurred title
- `MuiPageBannerText` - Page header banner with text
- `MuiTopStripBanner` - Thin top strip banner

### Layout Components

- `MuiHeader` - Site header with navigation
- `MuiNewsletter` - Newsletter signup form (MailerLite integration)

### Card Components

- `MuiProfileCard` - Profile/team member card with image
- `MuiNumberedCard` - Card with numbered indicator
- `MuiTextWithImage` - Text content with accompanying image
- `MuiNumberedDigitCard` - Card with large digit display
- `MuiBlockQuoteYear` - Block quote with year indicator

### Call-to-Action Components

- `MuiBannerTitleWithButtons` - CTA banner with title and buttons
- `MuiTextAndButtonCard` - Card with text and button
- `MuiTextDateButtonCard` - Card with text, date, and button
- `MuiTitleAndButtonCard` - Card with title and button
- `MuiTitleButtonsWithInsetCard` - CTA with inset card design

## TypeScript

All components are fully typed. Import types as needed:

```ts
import type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ResponsiveImage,
  BannerAction,
  BannerTheme,
  ImagePosition,
  ProfileCardProps,
  NumberedCardProps,
  TextWithImageProps,
} from '@northgreenug/musizi-ui-kit'
```

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
npm install
```

### Commands

```bash
npm run storybook      # Run Storybook on port 6006
npm run dev            # Run Vite dev server
npm run build          # Type-check and build for production
npm run build:lib      # Build library for distribution
npm run test:unit      # Run unit tests with Vitest
npm run test:e2e:dev   # Run Cypress e2e tests
npm run lint           # Lint and fix with ESLint
npm run format         # Format with Prettier
```

### Local Development with Consumer Projects

When developing the UI kit alongside consumer projects (e.g., the Musizi University website), use [yalc](https://github.com/wclr/yalc) to link a local version without publishing.

#### One-time Setup

Install yalc globally:

```bash
npm install -g yalc
```

#### Workflow

**Option A: Combined Development (Recommended)**

Run Storybook and yalc watcher together:

```bash
npm run dev:lib
```

This starts Storybook on port 6006 and watches for file changes, automatically rebuilding and pushing to linked consumer projects.

**Option B: Manual Commands**

```bash
npm run yalc:publish   # Build and publish to local yalc store
npm run yalc:push      # Build and push updates to linked projects
npm run yalc:watch     # Watch for changes and auto-push
```

#### Consumer Project Setup

In your consumer project:

```bash
# Add the local package
yalc add @northgreenug/musizi-ui-kit

# When done, switch back to published version
yalc remove @northgreenug/musizi-ui-kit
npm install
```

#### Notes

- The `.yalc` folder and `yalc.lock` are gitignored in consumer projects
- Don't commit `package.json` changes that reference `file:.yalc/...`
- Use `yalc:push` (not `yalc:publish`) to auto-update linked projects
- For Nuxt projects, you may need to restart the dev server or clear `.nuxt` cache after updates

### IDE Setup

[VS Code](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (disable Vetur if installed).

## License

MIT
