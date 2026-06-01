import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiFooterCredits from '../MuiFooterCredits.vue'

describe('MuiFooterCredits', () => {
  it('renders the component', () => {
    const wrapper = mount(MuiFooterCredits)

    expect(wrapper.find('.footer-credits-container').exists()).toBe(true)
  })

  it('applies default containerClasses when not provided', () => {
    const wrapper = mount(MuiFooterCredits)

    const container = wrapper.find('.footer-credits-container')
    expect(container.classes()).toContain('text-white')
    expect(container.classes()).toContain('py-7')
  })

  it('applies structural classes regardless of containerClasses', () => {
    const wrapper = mount(MuiFooterCredits)

    const container = wrapper.find('.footer-credits-container')
    expect(container.classes()).toContain('grid')
    expect(container.classes()).toContain('grid-cols-2')
    expect(container.classes()).toContain('text-xs')
  })

  it('applies custom containerClasses when provided', () => {
    const wrapper = mount(MuiFooterCredits, {
      props: {
        containerClasses: ['text-zinc-800', 'py-4'],
      },
    })

    const container = wrapper.find('.footer-credits-container')
    expect(container.classes()).toContain('text-zinc-800')
    expect(container.classes()).toContain('py-4')
    expect(container.classes()).not.toContain('text-white')
  })

  it('applies no extra classes when containerClasses is empty array', () => {
    const wrapper = mount(MuiFooterCredits, {
      props: {
        containerClasses: [],
      },
    })

    const container = wrapper.find('.footer-credits-container')
    expect(container.classes()).not.toContain('text-white')
    expect(container.classes()).not.toContain('py-7')
    // Structural classes should still be present
    expect(container.classes()).toContain('grid')
  })

  it('renders copyright text', () => {
    const wrapper = mount(MuiFooterCredits)

    expect(wrapper.text()).toContain('All Rights Reserved')
  })

  it('renders the designer link with correct href and target', () => {
    const wrapper = mount(MuiFooterCredits)

    const designerLink = wrapper.find('a[href="https://www.1010avenue.com/"]')
    expect(designerLink.exists()).toBe(true)
    expect(designerLink.attributes('target')).toBe('_blank')
    expect(designerLink.text()).toBe('Designed by 10/10 Ave')
  })

  it('applies correct styling classes to designer link', () => {
    const wrapper = mount(MuiFooterCredits)

    const designerLink = wrapper.find('a[href="https://www.1010avenue.com/"]')
    expect(designerLink.classes()).toContain('font-poppins')
    expect(designerLink.classes()).toContain('uppercase')
    expect(designerLink.classes()).toContain('font-bold')
  })
})
