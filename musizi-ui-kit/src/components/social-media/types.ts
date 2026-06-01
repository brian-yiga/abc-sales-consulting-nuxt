export type SocialPlatform = 'linkedin' | 'youtube' | 'instagram' | 'facebook' | 'twitter' | 'tiktok'

export type SocialSize = 'sm' | 'md' | 'lg' | number

export interface SocialMediaProps {
  /** Social media platform (maps to corresponding icon) */
  platform: SocialPlatform
  /** Link URL */
  href: string
  /** Icon size - 'sm' (24px), 'md' (32px), 'lg' (48px), or custom number */
  size?: SocialSize
  /** Icon color (CSS color value). Default: 'currentColor' */
  color?: string
  /** Icon color on hover (CSS color value). Default: 'white' */
  hoverColor?: string
  /** Accessibility label. Auto-generated from platform if not provided */
  ariaLabel?: string
}
