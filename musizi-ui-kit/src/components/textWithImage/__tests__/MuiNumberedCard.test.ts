import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiNumberedCard from '../MuiNumberedCard.vue'

describe('MuiNumberedCard', () => {
  const defaultProps = {
    imgSrc: 'https://example.com/card-image.jpg',
    imgAlt: 'Card image',
    title: 'Feature Title',
  }

  it('renders the component with required props', () => {
    const wrapper = mount(MuiNumberedCard, {
      props: defaultProps,
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(defaultProps.imgSrc)
    expect(wrapper.find('img').attributes('alt')).toBe(defaultProps.imgAlt)
    expect(wrapper.find('h2').text()).toBe(defaultProps.title)
  })

  it('renders with default imagePosition (right)', () => {
    const wrapper = mount(MuiNumberedCard, {
      props: defaultProps,
    })

    const container = wrapper.find('.bg-white')
    expect(container.classes()).toContain('basis-[calc(33.33%-1.5rem)]')
  })

  it('renders with imagePosition left', () => {
    const wrapper = mount(MuiNumberedCard, {
      props: {
        ...defaultProps,
        imagePosition: 'left',
      },
    })

    const container = wrapper.find('.bg-white')
    expect(container.classes()).toContain('lg:grid')
    expect(container.classes()).toContain('lg:grid-cols-2')
    expect(container.classes()).toContain('lg:col-span-2')
  })

  it('renders slot content', () => {
    const wrapper = mount(MuiNumberedCard, {
      props: defaultProps,
      slots: {
        default: '<p>Card content goes here</p>',
      },
    })

    expect(wrapper.find('.prose').exists()).toBe(true)
    expect(wrapper.find('.prose').text()).toBe('Card content goes here')
  })

  it('has correct CSS classes for title', () => {
    const wrapper = mount(MuiNumberedCard, {
      props: defaultProps,
    })

    const title = wrapper.find('h2')
    expect(title.classes()).toContain('numbered-card-title')
    expect(title.classes()).toContain('font-poppins')
    expect(title.classes()).toContain('font-semibold')
  })

  it('handles empty imgAlt gracefully', () => {
    const wrapper = mount(MuiNumberedCard, {
      props: {
        imgSrc: 'https://example.com/image.jpg',
        title: 'Test Title',
      },
    })

    expect(wrapper.find('img').attributes('alt')).toBe('')
  })
})
