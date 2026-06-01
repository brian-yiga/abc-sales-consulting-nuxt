export interface PageContainerProps {
  /**
   * HTML tag to render the container as.
   * @default 'div'
   */
  as?: 'div' | 'section' | 'main' | 'article'

  /**
   * Use wider container with reduced horizontal padding on large viewports.
   * When true, uses lg:px-6 xl:px-8 instead of lg:px-8 xl:px-10.
   * @default false
   */
  wide?: boolean
}
