import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiNewsletterButtonLink from '../MuiNewsletterButtonLink.vue'
import MuiButton from '../../button/MuiButton.vue'

describe('MuiNewsletterButtonLink', () => {
  const defaultProps = {
    buttonHref: 'https://example.com/signup',
  }

  it('renders the component with required buttonHref prop', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: defaultProps,
    })

    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.findComponent(MuiButton).exists()).toBe(true)
  })

  it('renders default title when not provided', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: defaultProps,
    })

    expect(wrapper.find('h3').text()).toBe('Get Updates, Stay Informed')
  })

  it('renders custom title when provided', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: {
        ...defaultProps,
        title: 'Join Our Newsletter',
      },
    })

    expect(wrapper.find('h3').text()).toBe('Join Our Newsletter')
  })

  it('renders default description when not provided', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: defaultProps,
    })

    expect(wrapper.find('p').text()).toBe('Get updates from Musizi University.')
  })

  it('renders custom description when provided', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: {
        ...defaultProps,
        description: 'Subscribe for the latest news.',
      },
    })

    expect(wrapper.find('p').text()).toBe('Subscribe for the latest news.')
  })

  it('renders default buttonLabel when not provided', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: defaultProps,
    })

    const button = wrapper.findComponent(MuiButton)
    expect(button.props('label')).toBe('Subscribe')
  })

  it('renders custom buttonLabel when provided', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: {
        ...defaultProps,
        buttonLabel: 'Sign Up Now',
      },
    })

    const button = wrapper.findComponent(MuiButton)
    expect(button.props('label')).toBe('Sign Up Now')
  })

  it('passes correct props to MuiButton', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: defaultProps,
    })

    const button = wrapper.findComponent(MuiButton)
    expect(button.props('href')).toBe('https://example.com/signup')
    expect(button.props('variant')).toBe('white-stroke')
    expect(button.props('size')).toBe('large')
    expect(button.props('external')).toBe(true)
  })

  it('supports attribute inheritance for class', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: defaultProps,
      attrs: {
        class: 'bg-maroon p-8',
      },
    })

    expect(wrapper.classes()).toContain('bg-maroon')
    expect(wrapper.classes()).toContain('p-8')
  })

  it('supports attribute inheritance for other attributes', () => {
    const wrapper = mount(MuiNewsletterButtonLink, {
      props: defaultProps,
      attrs: {
        'data-testid': 'newsletter-link',
        id: 'my-newsletter',
      },
    })

    expect(wrapper.attributes('data-testid')).toBe('newsletter-link')
    expect(wrapper.attributes('id')).toBe('my-newsletter')
  })
})
