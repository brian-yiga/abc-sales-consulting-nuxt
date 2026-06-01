import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiPattern from '../MuiPattern.vue'

describe('MuiPattern', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(MuiPattern)

    expect(wrapper.find('.pattern-container').exists()).toBe(true)
  })

  it('renders a single strip by default', () => {
    const wrapper = mount(MuiPattern)

    const strips = wrapper.findAll('.pattern-container > div')
    expect(strips.length).toBe(1)
  })

  it('renders the correct number of strips when specified', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 3,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    expect(strips.length).toBe(3)
  })

  it('applies correct height class to each strip', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 2,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    strips.forEach((strip) => {
      expect(strip.classes()).toContain('h-[59px]')
    })
  })

  it('applies correct background-repeat class to each strip', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 2,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    strips.forEach((strip) => {
      expect(strip.classes()).toContain('bg-repeat-x')
    })
  })

  it('applies background image style to strips', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 1,
      },
    })

    const strip = wrapper.find('.pattern-container > div')
    const style = strip.attributes('style')
    expect(style).toContain('background-image')
  })

  it('applies different background position offsets for each strip', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 2,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    const positions = strips.map((strip) => strip.attributes('style'))

    // First strip should have 0 offset
    expect(positions[0]).toContain('background-position-x: -0px')
    // Second strip should have different offset (half pattern width)
    expect(positions[1]).toContain('background-position-x: -704px')
  })

  it('distributes offsets evenly based on strip count', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 4,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    const positions = strips.map((strip) => strip.attributes('style'))

    // 4 strips = 25% intervals (0, 352, 704, 1056)
    expect(positions[0]).toContain('background-position-x: -0px')
    expect(positions[1]).toContain('background-position-x: -352px')
    expect(positions[2]).toContain('background-position-x: -704px')
    expect(positions[3]).toContain('background-position-x: -1056px')
  })

  it('uses 33% intervals for 3 strips', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 3,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    const positions = strips.map((strip) => strip.attributes('style'))

    // 3 strips = 33% intervals (0, ~469, ~939)
    expect(positions[0]).toContain('background-position-x: -0px')
    expect(positions[1]).toMatch(/background-position-x: -469(\.\d+)?px/)
    expect(positions[2]).toMatch(/background-position-x: -938(\.\d+)?px/)
  })

  it('handles zero strips gracefully', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 0,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    expect(strips.length).toBe(0)
  })

  it('handles large number of strips', () => {
    const wrapper = mount(MuiPattern, {
      props: {
        strips: 10,
      },
    })

    const strips = wrapper.findAll('.pattern-container > div')
    expect(strips.length).toBe(10)
  })
})
