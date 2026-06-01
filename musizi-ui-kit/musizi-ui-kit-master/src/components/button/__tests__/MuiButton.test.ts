import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiButton from '../MuiButton.vue'

describe('MuiButton', () => {
  it('renders as button element by default', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Click me',
      },
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('a').exists()).toBe(false)
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders as anchor element when href is provided', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Learn More',
        href: '/about',
      },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(false)
    expect(wrapper.find('a').attributes('href')).toBe('/about')
    expect(wrapper.text()).toBe('Learn More')
  })

  it('renders as button when as="button" is set even with href', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Submit',
        href: '/submit',
        as: 'button',
      },
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('a').exists()).toBe(false)
  })

  it('renders as anchor when as="a" is set without href', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Link',
        as: 'a',
      },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('applies black-stroke variant by default', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Default',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn')
  })

  it('applies white-stroke variant correctly', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'White Stroke',
        variant: 'white-stroke',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--white-stroke')
  })

  it('applies red-fill variant correctly', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Red Fill',
        variant: 'red-fill',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--red-fill')
  })

  it('applies white-fill variant correctly', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'White Fill',
        variant: 'white-fill',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--white-fill')
  })

  it('applies all-white variant correctly', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'All White',
        variant: 'all-white',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--all-white')
  })

  it('applies small size correctly', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Small',
        size: 'small',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--small')
  })

  it('applies medium-small size correctly', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Medium Small',
        size: 'medium-small',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--medium-small')
  })

  it('applies large size correctly', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Large',
        size: 'large',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--large')
  })

  it('applies wide class when wide prop is true', () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Wide Button',
        wide: true,
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('w-full')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Click me',
      },
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('emits click event when anchor is clicked', async () => {
    const wrapper = mount(MuiButton, {
      props: {
        label: 'Click me',
        href: '/page',
      },
    })

    await wrapper.find('a').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
