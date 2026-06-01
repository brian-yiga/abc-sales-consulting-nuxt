export interface LogoButtonCardProps {
  /**
   * Button configuration
   */
  button: {
    /**
     * Button text label
     */
    text: string
    /**
     * Button link URL
     */
    href: string
    /**
     * Opens link in new window/tab (optional, defaults to false)
     */
    external?: boolean
  }
}
