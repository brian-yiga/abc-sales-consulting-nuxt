import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiLogoButtonCard from '../MuiLogoButtonCard.vue'

describe('MuiLogoButtonCard', () => {
  const defaultProps = {
    button: {
      text: 'Learn More',
      href: '/about',
    },
  }

  it('renders the component with required props', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: defaultProps,
    })

    expect(wrapper.find('.logo-button-card').exists()).toBe(true)
  })

  it('renders the button with correct text and href', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: defaultProps,
    })

    const button = wrapper.find('a')
    expect(button.exists()).toBe(true)
    expect(button.attributes('href')).toBe('/about')
    expect(wrapper.text()).toContain('Learn More')
  })

  it('renders Image slot content', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: defaultProps,
      slots: {
        Image: '<img src="/logo.png" alt="Logo" />',
      },
    })

    expect(wrapper.find('.logo-button-card__image img').exists()).toBe(true)
    expect(wrapper.find('.logo-button-card__image img').attributes('src')).toBe('/logo.png')
  })

  it('renders Text slot content', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: defaultProps,
      slots: {
        Text: '<p>Custom text content</p>',
      },
    })

    expect(wrapper.find('.logo-button-card__text').text()).toContain('Custom text content')
  })

  it('applies default styling via Tailwind classes', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: defaultProps,
    })

    const card = wrapper.find('.logo-button-card')
    expect(card.exists()).toBe(true)
  })

  it('renders with both Image and Text slots', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: defaultProps,
      slots: {
        Image: '<div class="test-logo">Logo</div>',
        Text: '<div class="test-text">Tagline</div>',
      },
    })

    expect(wrapper.find('.test-logo').exists()).toBe(true)
    expect(wrapper.find('.test-text').exists()).toBe(true)
  })

  it('has correct structure with image, text, and button sections', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: defaultProps,
    })

    expect(wrapper.find('.logo-button-card__image').exists()).toBe(true)
    expect(wrapper.find('.logo-button-card__text').exists()).toBe(true)
    expect(wrapper.find('.logo-button-card__button').exists()).toBe(true)
  })

  it('supports external links', () => {
    const wrapper = mount(MuiLogoButtonCard, {
      props: {
        button: {
          text: 'External Link',
          href: 'https://example.com',
          external: true,
        },
      },
    })

    expect(wrapper.find('.logo-button-card').exists()).toBe(true)
    expect(wrapper.text()).toContain('External Link')
  })
})
