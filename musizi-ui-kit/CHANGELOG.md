# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2025-12-20

### Added

- **TextWithImage Components** - New consolidated components for text and image layouts:
  - `MuiProfileCard` - Profile/person card with image, title, description, and optional link
  - `MuiNumberedCard` - Card with image and content, configurable image position
  - `MuiTextWithImage` - Text section with image, configurable image position
- **CallToActionCards Components** - Cards for promotional content:
  - `MuiBannerTitleWithButtons` - Banner with title and action buttons
  - `MuiTextAndButtonCard` - Text content card with button
  - `MuiTextDateButtonCard` - Article card with date and button
  - `MuiTitleAndButtonCard` - Title card with action button
  - `MuiTitleButtonsWithInsetCard` - Title with buttons and inset content
- **TextContent Components** - Text display components:
  - `MuiBlockQuoteYear` - Block quote with year highlight
  - `MuiNumberedDigitCard` - Numbered card with title and content
- **Footer Components** - Footer building blocks:
  - `MuiFooter` - Main footer component
  - `MuiFooterContacts` - Contact information section
  - `MuiFooterCopyright` - Copyright section
  - `MuiFooterForm` - Newsletter form section
  - `MuiFooterMenuBlock` - Menu block for footer navigation
- Unit tests for TextWithImage components (20 tests)
- TypeScript interfaces for all new components

### Changed

- **BREAKING:** All exported components now require `Mui` prefix
- Refactored Header and Footer components to use standard Vue APIs (removed Nuxt dependencies)
- Consolidated 6 textWithImage components into 3 reusable components with `imagePosition` prop

### Removed

- Old textWithImage components (foundersCard, staffItemCard, numberedCard, numberedCardImageLeft, imageRightRedTitle, textWithImageLeft)

## [0.2.1] - 2025-12-20

### Added

- TypeScript declaration files for full IDE autocompletion and type checking
- Bundled `.d.ts` file with all component types and interfaces exported

### Fixed

- Corrected package name to `@northgreenug/musizi-ui-kit` for GitHub Packages
- Reduced package size from 10.8 MB to 23.6 kB by excluding storybook assets

## [0.2.0] - 2025-12-20

### Added

- Eight new banner components for building hero sections and promotional areas:
  - `MuiBannerInsetCard` - Banner with an inset content card
  - `MuiBannerVideoModal` - Banner with video modal trigger
  - `MuiBannerWithBleeding` - Full-bleed banner with edge-to-edge imagery
  - `MuiBannerWithSlash` - Banner with diagonal slash design element
  - `MuiBlurredBackgroundBanner` - Banner with blurred background effect
  - `MuiBlurredTitleOnlyBanner` - Minimal banner with blurred background
  - `MuiPageBannerText` - Text-focused page banner
  - `MuiTopStripBanner` - Compact top-of-page banner strip
- Props-based customization for all banner components:
  - `ResponsiveImage` - Responsive background images (small/medium/large breakpoints)
  - `BannerAction` - Configurable button actions with URL and external link support
  - Theme and layout props for visual customization
- Library build configuration with ES and UMD output formats
- Main entry point (`src/index.ts`) with all component exports
- TypeScript type exports for `ResponsiveImage`, `BannerAction`, and `BannerTheme`

### Changed

- **BREAKING:** All exported components now use the `Mui` prefix:
  - `Button` → `MuiButton`
  - `Header` → `MuiHeader`
  - `Icon` → `MuiIcon`
- Improved TypeScript types for button sub-components

### Removed

- Unused dependencies (`@iconify/vue`, `swiper`)
- Non-reusable page layout components (`BannerInsetImage`, `BannerVideoStrip`, `BannerNoVideoTitleOnly`)
- Events folder (`EventItems`, `YoutubeStrip`)

## [0.1.0] - 2024-XX-XX

### Added

- Initial release
- `Button` component with multiple variants (black-stroke, white-stroke, red-fill, white-fill, icon variants)
- `Header` component
- `Icon` component using Material Icons
