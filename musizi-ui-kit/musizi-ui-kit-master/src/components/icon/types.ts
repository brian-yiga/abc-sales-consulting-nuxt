export interface IconProps {
  /** Material Icons font icon name (e.g., "arrow_forward") */
  icon?: string
  /** Iconify icon name (e.g., "mdi:linkedin") - takes precedence over icon */
  name?: string
  /** Icon size in pixels */
  size?: number
  /** Icon color (CSS color value) */
  color?: string
}
