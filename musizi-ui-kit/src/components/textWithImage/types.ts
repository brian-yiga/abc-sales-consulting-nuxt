export type ImagePosition = 'left' | 'right'

export interface ProfileCardProps {
  imgSrc: string
  imgAlt: string
  title: string
  description: string
  url?: string
  buttonText?: string
}

export interface NumberedCardProps {
  imgSrc: string
  imgAlt?: string
  title: string
  imagePosition?: ImagePosition
}

export type CaptionBackgroundColour = 'white' | 'red' | 'maroon' | 'slate'

export type DefaultTitleStyle = 'bold' | 'light'

export interface ResponsiveImage {
  small: string
  large: string
}

export type TextWithImageButtonVariant = 'black-stroke' | 'white-stroke' | 'red-fill' | 'white-fill'

export interface TextWithImageButtonProps {
  url: string
  text: string
  variant?: TextWithImageButtonVariant
}

export interface TextWithImageProps {
  img: ResponsiveImage
  imgAlt?: string
  imageIsRightPosition?: boolean
  onlyHasVerticalLayout?: boolean
  captionBackgroundColour?: CaptionBackgroundColour
  defaultTitleStyle?: DefaultTitleStyle
  button?: TextWithImageButtonProps
  imageContainerClasses?: string[]
  textContainerClasses?: string[]
  containerClasses?: string[]
  titleClasses?: string[]
  minHeight?: string
}
