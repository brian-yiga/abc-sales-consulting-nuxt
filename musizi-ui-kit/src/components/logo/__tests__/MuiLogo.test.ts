import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiLogoBusiness from '../MuiLogoBusiness.vue'
import MuiLogoFoundation from '../MuiLogoFoundation.vue'
import MuiLogoHealth from '../MuiLogoHealth.vue'
import MuiLogoMu from '../MuiLogoMu.vue'
import MuiLogoUniversity from '../MuiLogoUniversity.vue'
import MuiLogoWings from '../MuiLogoWings.vue'

const logoComponents = [
  { name: 'MuiLogoBusiness', component: MuiLogoBusiness, className: 'mui-logo-business' },
  { name: 'MuiLogoFoundation', component: MuiLogoFoundation, className: 'mui-logo-foundation' },
  { name: 'MuiLogoHealth', component: MuiLogoHealth, className: 'mui-logo-health' },
  { name: 'MuiLogoMu', component: MuiLogoMu, className: 'mui-logo-mu' },
  { name: 'MuiLogoUniversity', component: MuiLogoUniversity, className: 'mui-logo-university' },
  { name: 'MuiLogoWings', component: MuiLogoWings, className: 'mui-logo-wings' },
]

describe.each(logoComponents)('$name', ({ component, className }) => {
  it('renders the component', () => {
    const wrapper = mount(component)

    expect(wrapper.find('.mui-logo').exists()).toBe(true)
    expect(wrapper.find(`.${className}`).exists()).toBe(true)
  })

  it('renders an SVG element', () => {
    const wrapper = mount(component)

    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has inline-block class', () => {
    const wrapper = mount(component)

    const container = wrapper.find('.mui-logo')
    expect(container.classes()).toContain('inline-block')
  })

  it('renders with default dimensions when no props are provided', () => {
    const wrapper = mount(component)

    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBeDefined()
    expect(svg.attributes('height')).toBeDefined()
  })

  it('does not set CSS custom properties when no props are provided', () => {
    const wrapper = mount(component)

    const container = wrapper.find('.mui-logo')
    const style = container.attributes('style') || ''
    expect(style).not.toContain('--mui-logo-width')
    expect(style).not.toContain('--mui-logo-height')
  })

  it('sets --mui-logo-width CSS custom property when width is provided', () => {
    const wrapper = mount(component, {
      props: {
        width: 200,
      },
    })

    const container = wrapper.find('.mui-logo')
    expect(container.attributes('style')).toContain('--mui-logo-width: 200px')
  })

  it('sets --mui-logo-height CSS custom property when height is provided', () => {
    const wrapper = mount(component, {
      props: {
        height: 100,
      },
    })

    const container = wrapper.find('.mui-logo')
    expect(container.attributes('style')).toContain('--mui-logo-height: 100px')
  })

  it('sets both CSS custom properties when width and height are provided', () => {
    const wrapper = mount(component, {
      props: {
        width: 200,
        height: 100,
      },
    })

    const container = wrapper.find('.mui-logo')
    const style = container.attributes('style')
    expect(style).toContain('--mui-logo-width: 200px')
    expect(style).toContain('--mui-logo-height: 100px')
  })

  it('only sets --mui-logo-width when only width is provided', () => {
    const wrapper = mount(component, {
      props: {
        width: 200,
      },
    })

    const container = wrapper.find('.mui-logo')
    const style = container.attributes('style') || ''
    expect(style).toContain('--mui-logo-width: 200px')
    expect(style).not.toContain('--mui-logo-height')
  })

  it('only sets --mui-logo-height when only height is provided', () => {
    const wrapper = mount(component, {
      props: {
        height: 100,
      },
    })

    const container = wrapper.find('.mui-logo')
    const style = container.attributes('style') || ''
    expect(style).not.toContain('--mui-logo-width')
    expect(style).toContain('--mui-logo-height: 100px')
  })
})
