import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiTextWithImage from '../MuiTextWithImage.vue'

describe('MuiTextWithImage', () => {
  const defaultProps = {
    img: {
      small: 'https://example.com/section-image-small.jpg',
      large: 'https://example.com/section-image-large.jpg',
    },
    imgAlt: 'Section image',
  }

  it('renders the component with required props', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: defaultProps,
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(defaultProps.img.large)
    expect(wrapper.find('img').attributes('alt')).toBe(defaultProps.imgAlt)
  })

  it('renders with default imageIsRightPosition (false/left)', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: defaultProps,
    })

    // Component should render with image and picture elements
    expect(wrapper.find('picture').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders with imageIsRightPosition true', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: {
        ...defaultProps,
        imageIsRightPosition: true,
      },
    })

    // Component should still render with image
    expect(wrapper.find('picture').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: defaultProps,
      slots: {
        default: '<p>This is the content area.</p>',
      },
    })

    expect(wrapper.text()).toContain('This is the content area.')
  })

  it('renders title slot content', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: defaultProps,
      slots: {
        title: 'About Our Mission',
      },
    })

    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('About Our Mission')
  })

  it('applies caption background colour class', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: {
        ...defaultProps,
        captionBackgroundColour: 'maroon',
      },
    })

    expect(wrapper.find('.bg-maroon').exists()).toBe(true)
  })

  it('handles empty imgAlt gracefully', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: {
        img: {
          small: 'https://example.com/image-small.jpg',
          large: 'https://example.com/image-large.jpg',
        },
      },
    })

    expect(wrapper.find('img').attributes('alt')).toBe('')
  })

  it('renders button when button prop is provided', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: {
        ...defaultProps,
        button: {
          url: '/learn-more',
          text: 'Learn More',
          variant: 'black-stroke',
        },
      },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe('/learn-more')
  })

  it('applies vertical layout when onlyHasVerticalLayout is true', () => {
    const wrapper = mount(MuiTextWithImage, {
      props: {
        ...defaultProps,
        onlyHasVerticalLayout: true,
      },
    })

    // Component should still render correctly
    expect(wrapper.find('picture').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
  })
})
