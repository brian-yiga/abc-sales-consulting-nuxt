/**
 * Responsive image configuration for banners
 */
export interface ResponsiveImage {
  /** Image URL for small screens (< 640px) */
  small?: string
  /** Image URL for medium screens (640px - 1024px) */
  medium?: string
  /** Image URL for large screens (> 1024px) */
  large: string
  /** Alt text for accessibility */
  alt?: string
}

/**
 * Action button/link configuration
 */
export interface BannerAction {
  /** Display text for the action button */
  label: string
  /** Optional URL - if provided, renders as a link */
  url?: string
  /** Whether the link opens in a new tab (only applies when url is provided) */
  external?: boolean
}

/**
 * Common banner props shared across multiple components
 */
export interface BaseBannerProps {
  /** Responsive background image configuration */
  backgroundImage: ResponsiveImage
}

/**
 * Banner with action button props
 */
export interface ActionBannerProps extends BaseBannerProps {
  /** Optional action button configuration */
  action?: BannerAction
}

/**
 * Theme variant options for banners
 */
export type BannerTheme = 'light' | 'dark'

/**
 * CSS custom properties for responsive background images
 */
export interface BackgroundImageCssVars {
  '--img-sm': string
  '--img-md'?: string
  '--img-lg': string
}

/**
 * Helper function to generate CSS variables for responsive background images
 */
export function createBackgroundImageVars(image: ResponsiveImage): BackgroundImageCssVars {
  return {
    '--img-sm': `url('${image.small || image.large}')`,
    '--img-md': image.medium ? `url('${image.medium}')` : undefined,
    '--img-lg': `url('${image.large}')`,
  }
}
