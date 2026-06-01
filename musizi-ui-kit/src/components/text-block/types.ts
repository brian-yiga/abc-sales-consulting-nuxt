import type { ButtonProps } from '../button/types'

export interface TextBlockButtonProps {
  label: string
  href?: string
  variant?: ButtonProps['variant']
  external?: boolean
}

export interface TextBlockProps {
  /**
   * Additional CSS classes to apply to the title element.
   * Use this to override the default typography (e.g., 'mui-text--display-1').
   */
  titleClass?: string
  /**
   * Additional CSS classes to apply to the body element.
   * Use this to override the default typography (e.g., 'mui-text--small-1').
   */
  bodyClass?: string
  /**
   * Optional button configuration.
   * When provided, renders a MuiButton below the body.
   */
  button?: TextBlockButtonProps
}
