import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiFooterContacts from '../MuiFooterContacts.vue'

describe('MuiFooterContacts', () => {
  it('renders the component', () => {
    const wrapper = mount(MuiFooterContacts)

    expect(wrapper.find('.footer-contacts-container').exists()).toBe(true)
  })

  it('applies default containerClasses when not provided', () => {
    const wrapper = mount(MuiFooterContacts)

    const container = wrapper.find('.footer-contacts-container')
    expect(container.classes()).toContain('bg-maroon')
    expect(container.classes()).toContain('text-white')
  })

  it('applies custom containerClasses when provided', () => {
    const wrapper = mount(MuiFooterContacts, {
      props: {
        containerClasses: ['bg-purple', 'text-zinc-800', 'py-8'],
      },
    })

    const container = wrapper.find('.footer-contacts-container')
    expect(container.classes()).toContain('bg-purple')
    expect(container.classes()).toContain('text-zinc-800')
    expect(container.classes()).toContain('py-8')
    expect(container.classes()).not.toContain('bg-maroon')
  })

  it('applies no extra classes when containerClasses is empty array', () => {
    const wrapper = mount(MuiFooterContacts, {
      props: {
        containerClasses: [],
      },
    })

    const container = wrapper.find('.footer-contacts-container')
    expect(container.classes()).not.toContain('bg-maroon')
    expect(container.classes()).not.toContain('text-white')
  })

  it('renders the "Contact Us" heading', () => {
    const wrapper = mount(MuiFooterContacts)

    expect(wrapper.text()).toContain('Contact Us')
  })

  it('renders the email link with correct href', () => {
    const wrapper = mount(MuiFooterContacts)

    const emailLink = wrapper.find('a[href="mailto:info@musizi.ac.ug"]')
    expect(emailLink.exists()).toBe(true)
    expect(emailLink.text()).toBe('info@musizi.ac.ug')
  })

  it('renders phone numbers', () => {
    const wrapper = mount(MuiFooterContacts)
    const text = wrapper.text()

    expect(text).toContain('+256')
    expect(text).toContain('753')
    expect(text).toContain('136473')
    expect(text).toContain('704')
    expect(text).toContain('415029')
  })

  it('renders the address', () => {
    const wrapper = mount(MuiFooterContacts)

    expect(wrapper.text()).toContain("Plot 5B, Kindergarten Close, Ministers' Village, Ntinda, Kampala, Uganda")
  })

  it('renders the Google Maps link with correct href and target', () => {
    const wrapper = mount(MuiFooterContacts)

    const mapsLink = wrapper.find('a[href="https://maps.app.goo.gl/nVXkwdJyQHR2kfK48"]')
    expect(mapsLink.exists()).toBe(true)
    expect(mapsLink.attributes('target')).toBe('_blank')
    expect(mapsLink.text()).toBe('View on Google Maps')
  })
})
