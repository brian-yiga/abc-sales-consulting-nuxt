# Musizi University Website

Nuxt 3 website for Musizi University. Uses `@northgreenug/musizi-ui-kit` for shared components and theming.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000

## Local Development with UI Kit

When developing the `@northgreenug/musizi-ui-kit` alongside this project, use [yalc](https://github.com/wclr/yalc) to link a local version without publishing.

### One-time Setup

Install yalc globally:

```bash
npm install -g yalc
```

### Workflow

1. In the UI kit directory, build and publish locally:

```bash
npm run build:lib
yalc publish
```

2. In this project, start dev with the local UI kit:

```bash
npm run dev:local-ui
```

3. After making changes to the UI kit:

```bash
# In the UI kit directory
npm run build:lib && yalc push
```

The `push` command automatically updates all projects using the local package.

### Switching Back to Published Version

```bash
npm run dev:published-ui
```

### npm Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with published UI kit |
| `npm run dev:local-ui` | Link local UI kit and start dev server |
| `npm run dev:published-ui` | Unlink local UI kit, install published version, and start dev server |

### Troubleshooting

If changes from `yalc push` aren't reflected:

1. Stop the dev server
2. Clear the Nuxt cache: `rm -rf .nuxt`
3. Restart: `npm run dev`

### Notes

- The `.yalc` folder and `yalc.lock` are gitignored
- Don't commit `package.json` changes that reference `file:.yalc/...`
- Run `yalc push` (not `publish`) to auto-update linked projects

## Production

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Generate static site:

```bash
npm run generate
```
