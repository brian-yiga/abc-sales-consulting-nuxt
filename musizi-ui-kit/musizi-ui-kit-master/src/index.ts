// Styles (bundled into musizi-ui-kit.css)
import './styles/index.css'

// Components
export * from './components/banner'
export * from './components/button'
export * from './components/CallToActionCards'
export * from './components/carousel'
export * from './components/footer'
export * from './components/logo'
export * from './components/newsletter'
export * from './components/header'
export * from './components/icon'
export * from './components/page-container'
export * from './components/social-media'
export * from './components/pattern'
export * from './components/textContent'
export * from './components/textWithImage'
export * from './components/logoButtonCard'
export * from './components/header-blur-bg'
export * from './components/text-block'

// Re-export types for convenience
export type {
  ResponsiveImage,
  BannerAction,
  BannerTheme,
} from './components/banner/types'

export type {
  ImagePosition,
  ProfileCardProps,
  NumberedCardProps,
  TextWithImageProps,
} from './components/textWithImage/types'

export type {
  CarouselItemVariant,
  CarouselItemCta,
  CarouselItemProps,
  CarouselOrientation,
  CarouselProps,
} from './components/carousel/types'

export type { PageContainerProps } from './components/page-container/types'

// Vue plugin for global registration
import type { App } from 'vue'
import { MuiButton } from './components/button'
import { MuiIcon } from './components/icon'
import { MuiHeader } from './components/header'
import {
  MuiLogoBusiness,
  MuiLogoFoundation,
  MuiLogoHealth,
  MuiLogoUniversity,
  MuiLogoWings,
} from './components/logo'
import { MuiNewsletter, MuiNewsletterButtonLink } from './components/newsletter'
import { MuiPattern } from './components/pattern'
import { MuiProfileCard, MuiNumberedCard, MuiTextWithImage } from './components/textWithImage'
import { MuiLogoButtonCard } from './components/logoButtonCard'
import { MuiCarousel, MuiCarouselItem } from './components/carousel'
import { MuiFooterContacts, MuiFooterCredits } from './components/footer'
import { MuiHeaderBlurBg } from './components/header-blur-bg'
import { MuiPageContainer } from './components/page-container'
import { MuiSocialMedia } from './components/social-media'
import { MuiTextBlock } from './components/text-block'

export default {
  install(app: App) {
    app.component('MuiButton', MuiButton)
    app.component('MuiIcon', MuiIcon)
    app.component('MuiHeader', MuiHeader)
    app.component('MuiLogoBusiness', MuiLogoBusiness)
    app.component('MuiLogoFoundation', MuiLogoFoundation)
    app.component('MuiLogoHealth', MuiLogoHealth)
    app.component('MuiLogoUniversity', MuiLogoUniversity)
    app.component('MuiLogoWings', MuiLogoWings)
    app.component('MuiNewsletter', MuiNewsletter)
    app.component('MuiNewsletterButtonLink', MuiNewsletterButtonLink)
    app.component('MuiPattern', MuiPattern)
    app.component('MuiProfileCard', MuiProfileCard)
    app.component('MuiNumberedCard', MuiNumberedCard)
    app.component('MuiTextWithImage', MuiTextWithImage)
    app.component('MuiLogoButtonCard', MuiLogoButtonCard)
    app.component('MuiCarousel', MuiCarousel)
    app.component('MuiCarouselItem', MuiCarouselItem)
    app.component('MuiFooterContacts', MuiFooterContacts)
    app.component('MuiFooterCredits', MuiFooterCredits)
    app.component('MuiHeaderBlurBg', MuiHeaderBlurBg)
    app.component('MuiPageContainer', MuiPageContainer)
    app.component('MuiSocialMedia', MuiSocialMedia)
    app.component('MuiTextBlock', MuiTextBlock)
  },
}
