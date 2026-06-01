import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type ButtonSize = 'small' | 'medium-small' | 'medium' | 'large'

export type ButtonNoIconVariant = 'black-stroke' | 'white-stroke' | 'red-fill' | 'white-fill' | 'all-white'

export type ButtonWithIconVariant = 'right-icon-no-fill' | 'right-icon-red-fill'

export type ButtonVariant = ButtonNoIconVariant | ButtonWithIconVariant | 'icon-only'

/**
 * Element type for the button. Can be:
 * - Native elements: 'button' | 'a'
 * - Vue component (e.g., NuxtLink, RouterLink)
 */
export type ButtonElement = 'button' | 'a' | Component

export interface ButtonProps {
  label: string
  size?: ButtonSize
  variant?: ButtonVariant
  wide?: boolean
  icon?: string
  /**
   * URL for the button link. When provided, renders as an anchor element by default.
   */
  href?: string
  /**
   * Route location for router components (RouterLink, NuxtLink).
   * Use this instead of `href` when using a router component via the `as` prop.
   */
  to?: RouteLocationRaw
  /**
   * Element or component to render. Defaults to 'a' when href/to is provided, otherwise 'button'.
   * Pass a router component for client-side navigation.
   * @example
   * // With NuxtLink (Nuxt apps - import from #components)
   * import { NuxtLink } from '#components'
   * <MuiButton :as="NuxtLink" to="/about" label="About" />
   * // With RouterLink (Vue Router apps)
   * import { RouterLink } from 'vue-router'
   * <MuiButton :as="RouterLink" to="/about" label="About" />
   */
  as?: ButtonElement
  /**
   * When true, opens the link in a new window/tab (adds target="_blank").
   * Only applies when rendered as an anchor element.
   */
  external?: boolean
}

export interface ButtonNoIconProps {
  label: string
  size?: ButtonSize
  variant?: ButtonNoIconVariant
  wide?: boolean
  href?: string
  to?: RouteLocationRaw
  as?: ButtonElement
  external?: boolean
}

export interface ButtonWithIconProps {
  label: string
  icon?: string
  variant?: ButtonWithIconVariant
  href?: string
  to?: RouteLocationRaw
  as?: ButtonElement
  external?: boolean
}

export interface ButtonIconOnlyProps {
  icon?: string
  size?: ButtonSize
  href?: string
  to?: RouteLocationRaw
  as?: ButtonElement
  external?: boolean
}
