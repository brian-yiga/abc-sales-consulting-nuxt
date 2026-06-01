export type CarouselItemVariant = 'image' | 'content' | 'button' | 'custom'

export interface CarouselItemCta {
  label: string
  href?: string
}

export interface CarouselItemProps {
  /**
   * The variant of the carousel item
   * - 'image': Just an image (default)
   * - 'content': Image with title, description, and optional CTA
   * - 'button': Image with just a CTA button overlay
   * - 'custom': Full control via slot - provide your own content
   */
  variant?: CarouselItemVariant
  /**
   * Image source URL (not required for 'custom' variant)
   */
  src?: string
  /**
   * Image alt text for accessibility (not required for 'custom' variant)
   */
  alt?: string
  /**
   * Title text (for 'content' variant)
   */
  title?: string
  /**
   * Description text (for 'content' variant)
   */
  description?: string
  /**
   * Call-to-action button (for 'content' and 'button' variants)
   */
  cta?: CarouselItemCta
}

export type CarouselOrientation = 'horizontal' | 'vertical'

export interface CarouselProps {
  /**
   * Enable autoplay - automatically advances slides
   */
  autoplay?: boolean
  /**
   * Autoplay delay in milliseconds (default: 4000)
   */
  autoplayDelay?: number
  /**
   * Enable continuous auto-scrolling instead of snapping
   */
  autoscroll?: boolean
  /**
   * Auto-scroll speed (default: 1)
   */
  autoscrollSpeed?: number
  /**
   * Show navigation arrows (default: false)
   */
  showArrows?: boolean
  /**
   * Show navigation dots (default: false)
   */
  showDots?: boolean
  /**
   * Carousel orientation
   */
  orientation?: CarouselOrientation
  /**
   * Enable looping (default: true)
   */
  loop?: boolean
  /**
   * Number of items to show per view (default: 1)
   */
  itemsPerView?: number | 'auto'
  /**
   * Classes to apply to the carousel container element.
   * Use this to add gap classes (e.g., 'gap-4 md:gap-8') or other styling.
   */
  containerClass?: string | string[] | Record<string, boolean>
}
