export type MenuBreakpoint = 'sm' | 'md' | 'lg' | 'xl'

export interface HeaderBlurBgButton {
  /**
   * Text displayed on the button
   */
  text: string
  /**
   * URL for the button link
   */
  href?: string
}

export interface HeaderBlurBgMenuLink {
  /**
   * Display text for the menu link
   */
  text: string
  /**
   * URL destination for the link
   */
  href: string
}

export interface HeaderBlurBgProps {
  /**
   * Button configuration. If not provided, no button is rendered.
   * When a menu is present, the button is hidden on mobile and appears
   * inside the mobile overlay instead.
   */
  button?: HeaderBlurBgButton

  /**
   * Array of menu links to render as `<a>` tags. When provided, the component
   * renders the menu internally — no `#menu` slot needed.
   */
  menuLinks?: HeaderBlurBgMenuLink[]

  /**
   * Breakpoint at which the mobile hamburger menu switches to an inline
   * desktop menu. Defaults to `'lg'` (1024px).
   */
  menuBreakpoint?: MenuBreakpoint

  /**
   * Breakpoint at which the compact "Mu" logo switches to the full logo
   * provided via the `#logo` slot. Defaults to `'md'` (768px).
   */
  logoBreakpoint?: MenuBreakpoint
}

/**
 * ## Slots
 *
 * - `#logo` — Logo content displayed on the left
 * - `#menu` — Optional navigation menu (fallback when `menuLinks` is not provided). When present:
 *   - Desktop (>= menuBreakpoint): rendered inline between logo and button
 *   - Mobile (< menuBreakpoint): rendered in an overlay beneath the header, with the button below it
 *   - The component applies default white-text menu styling to slot content
 *   - Body scroll is locked (`overflow-hidden`) while the mobile menu is open
 *
 * ## v-model
 *
 * - `v-model:menuOpen` — Two-way binding for the mobile menu open state (boolean, default `false`)
 *
 * ## Exposed methods
 *
 * - `closeMenu()` — Programmatically close the mobile menu
 */
export type HeaderBlurBgDocumentation = never
