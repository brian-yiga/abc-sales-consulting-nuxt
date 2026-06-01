import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiCarouselItem from '../MuiCarouselItem.vue'

describe('MuiCarouselItem', () => {
  const defaultProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Test image',
  }

  describe('image variant (default)', () => {
    it('renders with default image variant', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: defaultProps,
      })

      expect(wrapper.find('.mui-carousel-item').exists()).toBe(true)
      expect(wrapper.find('img').exists()).toBe(true)
    })

    it('renders image with correct src and alt', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: defaultProps,
      })

      const img = wrapper.find('img')
      expect(img.attributes('src')).toBe('https://example.com/image.jpg')
      expect(img.attributes('alt')).toBe('Test image')
    })

    it('does not render overlay elements for image variant', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'image',
        },
      })

      expect(wrapper.find('.mui-carousel-item__overlay').exists()).toBe(false)
      expect(wrapper.find('.mui-carousel-item__button-overlay').exists()).toBe(false)
    })
  })

  describe('content variant', () => {
    const contentProps = {
      ...defaultProps,
      variant: 'content' as const,
      title: 'Welcome Title',
      description: 'This is a description text',
      cta: {
        label: 'Learn More',
        href: '/about',
      },
    }

    it('renders with content variant', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: contentProps,
      })

      expect(wrapper.find('.mui-carousel-item__content-wrapper').exists()).toBe(true)
      expect(wrapper.find('.mui-carousel-item__overlay').exists()).toBe(true)
    })

    it('renders title when provided', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: contentProps,
      })

      const title = wrapper.find('.mui-carousel-item__title')
      expect(title.exists()).toBe(true)
      expect(title.text()).toBe('Welcome Title')
    })

    it('renders description when provided', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: contentProps,
      })

      const description = wrapper.find('.mui-carousel-item__description')
      expect(description.exists()).toBe(true)
      expect(description.text()).toBe('This is a description text')
    })

    it('renders CTA button with correct href and label', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: contentProps,
      })

      const cta = wrapper.find('.mui-carousel-item__cta')
      expect(cta.exists()).toBe(true)
      expect(cta.attributes('href')).toBe('/about')
      expect(cta.text()).toBe('Learn More')
    })

    it('does not render title when not provided', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'content',
          description: 'Only description',
        },
      })

      expect(wrapper.find('.mui-carousel-item__title').exists()).toBe(false)
      expect(wrapper.find('.mui-carousel-item__description').exists()).toBe(true)
    })

    it('does not render description when not provided', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'content',
          title: 'Only title',
        },
      })

      expect(wrapper.find('.mui-carousel-item__title').exists()).toBe(true)
      expect(wrapper.find('.mui-carousel-item__description').exists()).toBe(false)
    })

    it('does not render CTA when not provided', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'content',
          title: 'Title only',
        },
      })

      expect(wrapper.find('.mui-carousel-item__cta').exists()).toBe(false)
    })

    it('uses # as default href when cta.href is not provided', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'content',
          cta: {
            label: 'Click Me',
          },
        },
      })

      const cta = wrapper.find('.mui-carousel-item__cta')
      expect(cta.attributes('href')).toBe('#')
    })
  })

  describe('button variant', () => {
    const buttonProps = {
      ...defaultProps,
      variant: 'button' as const,
      cta: {
        label: 'Apply Now',
        href: '/apply',
      },
    }

    it('renders with button variant', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: buttonProps,
      })

      expect(wrapper.find('.mui-carousel-item__button-wrapper').exists()).toBe(true)
      expect(wrapper.find('.mui-carousel-item__button-overlay').exists()).toBe(true)
    })

    it('renders CTA button with correct href and label', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: buttonProps,
      })

      const cta = wrapper.find('.mui-carousel-item__cta')
      expect(cta.exists()).toBe(true)
      expect(cta.attributes('href')).toBe('/apply')
      expect(cta.text()).toBe('Apply Now')
    })

    it('does not render title or description', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...buttonProps,
          title: 'Should not show',
          description: 'Should not show either',
        },
      })

      expect(wrapper.find('.mui-carousel-item__title').exists()).toBe(false)
      expect(wrapper.find('.mui-carousel-item__description').exists()).toBe(false)
    })

    it('does not render CTA when not provided', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'button',
        },
      })

      expect(wrapper.find('.mui-carousel-item__cta').exists()).toBe(false)
    })
  })

  describe('image rendering across variants', () => {
    it('renders image in image variant', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'image',
        },
      })

      expect(wrapper.find('.mui-carousel-item__image').exists()).toBe(true)
    })

    it('renders image in content variant', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'content',
        },
      })

      expect(wrapper.find('.mui-carousel-item__image').exists()).toBe(true)
    })

    it('renders image in button variant', () => {
      const wrapper = mount(MuiCarouselItem, {
        props: {
          ...defaultProps,
          variant: 'button',
        },
      })

      expect(wrapper.find('.mui-carousel-item__image').exists()).toBe(true)
    })
  })
})
