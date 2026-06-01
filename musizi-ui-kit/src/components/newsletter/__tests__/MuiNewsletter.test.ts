import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiNewsletter from '../MuiNewsletter.vue'

describe('MuiNewsletter', () => {
  const defaultProps = {
    formId: 'testFormId123',
  }

  beforeEach(() => {
    // Reset window.ml before each test
    delete (window as Window & { ml?: unknown }).ml
  })

  afterEach(() => {
    // Clean up any scripts added to the document
    document.body.innerHTML = ''
  })

  it('renders the component with required formId prop', () => {
    const wrapper = mount(MuiNewsletter, {
      props: defaultProps,
    })

    expect(wrapper.find('.newsletter-container').exists()).toBe(true)
    expect(wrapper.find('.ml-embedded').exists()).toBe(true)
  })

  it('sets the correct data-form attribute from formId prop', () => {
    const wrapper = mount(MuiNewsletter, {
      props: {
        formId: 'customFormId',
      },
    })

    expect(wrapper.find('.ml-embedded').attributes('data-form')).toBe('customFormId')
  })

  it('applies default containerClasses (bg-maroon) when not provided', () => {
    const wrapper = mount(MuiNewsletter, {
      props: defaultProps,
    })

    const container = wrapper.find('.newsletter-container')
    expect(container.classes()).toContain('bg-maroon')
  })

  it('applies custom containerClasses when provided', () => {
    const wrapper = mount(MuiNewsletter, {
      props: {
        ...defaultProps,
        containerClasses: ['bg-purple', 'rounded-lg'],
      },
    })

    const container = wrapper.find('.newsletter-container')
    expect(container.classes()).toContain('bg-purple')
    expect(container.classes()).toContain('rounded-lg')
    expect(container.classes()).not.toContain('bg-maroon')
  })

  it('applies no extra classes when containerClasses is empty array', () => {
    const wrapper = mount(MuiNewsletter, {
      props: {
        ...defaultProps,
        containerClasses: [],
      },
    })

    const container = wrapper.find('.newsletter-container')
    expect(container.classes()).not.toContain('bg-maroon')
    expect(container.classes()).not.toContain('bg-purple')
  })

  it('renders title and description', () => {
    const wrapper = mount(MuiNewsletter, {
      props: defaultProps,
    })

    expect(wrapper.find('.newsletter-title').exists()).toBe(true)
    expect(wrapper.find('.newsletter-description').exists()).toBe(true)
  })

  it('initializes MailerLite script on mount', async () => {
    const appendChildSpy = vi.spyOn(document.body, 'appendChild')

    mount(MuiNewsletter, {
      props: defaultProps,
    })

    expect(appendChildSpy).toHaveBeenCalled()
    const scriptArg = appendChildSpy.mock.calls[0][0] as HTMLScriptElement
    expect(scriptArg.tagName).toBe('SCRIPT')
    expect(scriptArg.textContent).toContain('mailerlite.com/js/universal.js')

    appendChildSpy.mockRestore()
  })

  it('does not reinitialize MailerLite if window.ml already exists', () => {
    // Simulate MailerLite already loaded
    ;(window as Window & { ml?: unknown }).ml = vi.fn()

    const appendChildSpy = vi.spyOn(document.body, 'appendChild')

    mount(MuiNewsletter, {
      props: defaultProps,
    })

    expect(appendChildSpy).not.toHaveBeenCalled()

    appendChildSpy.mockRestore()
  })
})
