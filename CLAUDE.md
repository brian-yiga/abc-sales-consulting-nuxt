# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Musizi University website - a Nuxt 3 application using document-driven content mode. The site is for a private liberal arts college in Uganda.

## Commands

```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Architecture

**Content-Driven Pages**: Uses `@nuxt/content` with `documentDriven: true`. Markdown files in `content/` automatically become pages. The `index.md` uses frontmatter for SEO metadata and renders Vue components via MDC syntax (e.g., `::home-page`).

**Component Mapping**: Content components live in `components/content/`. The `::home-page` directive in markdown maps to `components/content/HomePage.vue`.

**UI Kit**: Uses `@northgreenug/musizi-ui-kit` which provides:
- Tailwind preset with theme (colors, fonts, font sizes) - configured in `tailwind.config.js`
- Fonts CSS (Open Sans, Poppins, Material Icons from Google Fonts)
- Typography CSS with responsive text classes (`mui-text--display-1`, `mui-text--headline-1`, `mui-text--body`, etc.)
- Vue components imported individually: `import { MuiButton, MuiIcon } from '@northgreenug/musizi-ui-kit'`

**Theme (from preset)**:
- Colors: `maroon`, `cool-grey`, `purple`
- Fonts: `font-sans` (Open Sans), `font-poppins` (Poppins)
- Font sizes: `text-display-1`, `text-headline-1`, `text-body`, `text-small-1`, etc.

## Key Files

- `app.vue` - Root component with SEO meta setup
- `nuxt.config.ts` - Nuxt configuration including modules and PostCSS
- `tailwind.config.js` - Tailwind config with Musizi preset
- `content/index.md` - Homepage content with frontmatter metadata
