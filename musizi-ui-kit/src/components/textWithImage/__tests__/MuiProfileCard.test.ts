import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiProfileCard from '../MuiProfileCard.vue'

describe('MuiProfileCard', () => {
  const defaultProps = {
    imgSrc: 'https://example.com/image.jpg',
    imgAlt: 'Test profile image',
    title: 'John Doe',
    description: 'A short bio about John Doe.',
  }

  it('renders the component with required props', () => {
    const wrapper = mount(MuiProfileCard, {
      props: defaultProps,
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(defaultProps.imgSrc)
    expect(wrapper.find('img').attributes('alt')).toBe(defaultProps.imgAlt)
    expect(wrapper.find('h3').text()).toBe(defaultProps.title)
    expect(wrapper.text()).toContain(defaultProps.description)
  })

  it('renders image without link when url is not provided', () => {
    const wrapper = mount(MuiProfileCard, {
      props: defaultProps,
    })

    const imgParent = wrapper.find('img').element.parentElement
    expect(imgParent?.tagName).not.toBe('A')
  })

  it('renders image with link when url is provided', () => {
    const wrapper = mount(MuiProfileCard, {
      props: {
        ...defaultProps,
        url: '/profile/john-doe',
      },
    })

    const link = wrapper.find('a[href="/profile/john-doe"]')
    expect(link.exists()).toBe(true)
    expect(link.find('img').exists()).toBe(true)
  })

  it('shows button with text when url and buttonText are provided', () => {
    const wrapper = mount(MuiProfileCard, {
      props: {
        ...defaultProps,
        url: '/profile/john-doe',
        buttonText: 'Read more',
      },
    })

    const button = wrapper.find('.profile-card-button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Read more')
    expect(button.attributes('href')).toBe('/profile/john-doe')
  })

  it('does not show button when buttonText is not provided', () => {
    const wrapper = mount(MuiProfileCard, {
      props: {
        ...defaultProps,
        url: '/profile/john-doe',
      },
    })

    expect(wrapper.find('.profile-card-button').exists()).toBe(false)
  })

  it('renders slot content', () => {
    const wrapper = mount(MuiProfileCard, {
      props: defaultProps,
      slots: {
        default: '<div class="custom-slot">Custom content</div>',
      },
    })

    expect(wrapper.find('.custom-slot').exists()).toBe(true)
    expect(wrapper.find('.custom-slot').text()).toBe('Custom content')
  })

  it('has correct CSS classes for title', () => {
    const wrapper = mount(MuiProfileCard, {
      props: defaultProps,
    })

    const title = wrapper.find('h3')
    expect(title.classes()).toContain('profile-card-title')
    expect(title.classes()).toContain('font-poppins')
    expect(title.classes()).toContain('uppercase')
  })
})
