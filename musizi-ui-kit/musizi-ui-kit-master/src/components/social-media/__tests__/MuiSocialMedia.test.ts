import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiSocialMedia from '../MuiSocialMedia.vue'

describe('MuiSocialMedia', () => {
  it('renders as an anchor element', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'linkedin',
        href: 'https://linkedin.com/test',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
  })

  it('sets href attribute correctly', () => {
    const href = 'https://linkedin.com/company/test'
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'linkedin',
        href,
      },
    })

    expect(wrapper.attributes('href')).toBe(href)
  })

  it('opens link in new window with target="_blank"', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'youtube',
        href: 'https://youtube.com/test',
      },
    })

    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('sets rel="noopener noreferrer" for security', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'instagram',
        href: 'https://instagram.com/test',
      },
    })

    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')
  })

  it('auto-generates aria-label from platform', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'linkedin',
        href: 'https://linkedin.com/test',
      },
    })

    expect(wrapper.attributes('aria-label')).toBe('LinkedIn')
  })

  it('uses custom aria-label when provided', () => {
    const customLabel = 'Follow us on LinkedIn'
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'linkedin',
        href: 'https://linkedin.com/test',
        ariaLabel: customLabel,
      },
    })

    expect(wrapper.attributes('aria-label')).toBe(customLabel)
  })

  it('applies CSS variables for color', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'facebook',
        href: 'https://facebook.com/test',
        color: '#1877F2',
      },
    })

    const style = wrapper.attributes('style')
    expect(style).toContain('--mui-social-color: #1877F2')
  })

  it('applies CSS variables for hover color', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'twitter',
        href: 'https://twitter.com/test',
        hoverColor: '#ff0000',
      },
    })

    const style = wrapper.attributes('style')
    expect(style).toContain('--mui-social-hover-color: #ff0000')
  })

  it('uses default colors when not specified', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'tiktok',
        href: 'https://tiktok.com/test',
      },
    })

    const style = wrapper.attributes('style')
    expect(style).toContain('--mui-social-color: currentColor')
    expect(style).toContain('--mui-social-hover-color: white')
  })

  it('has the mui-social-media class', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'linkedin',
        href: 'https://linkedin.com/test',
      },
    })

    expect(wrapper.classes()).toContain('mui-social-media')
  })

  it('renders MuiIcon component', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'youtube',
        href: 'https://youtube.com/test',
      },
    })

    expect(wrapper.findComponent({ name: 'MuiIcon' }).exists()).toBe(true)
  })

  describe('platform to icon mapping', () => {
    const platforms = [
      { platform: 'linkedin', label: 'LinkedIn' },
      { platform: 'youtube', label: 'YouTube' },
      { platform: 'instagram', label: 'Instagram' },
      { platform: 'facebook', label: 'Facebook' },
      { platform: 'twitter', label: 'Twitter' },
      { platform: 'tiktok', label: 'TikTok' },
    ] as const

    platforms.forEach(({ platform, label }) => {
      it(`maps ${platform} to correct aria-label`, () => {
        const wrapper = mount(MuiSocialMedia, {
          props: {
            platform,
            href: `https://${platform}.com/test`,
          },
        })

        expect(wrapper.attributes('aria-label')).toBe(label)
      })
    })
  })

  describe('size prop', () => {
    it('uses md (32px) as default size', () => {
      const wrapper = mount(MuiSocialMedia, {
        props: {
          platform: 'linkedin',
          href: 'https://linkedin.com/test',
        },
      })

      const icon = wrapper.findComponent({ name: 'MuiIcon' })
      expect(icon.props('size')).toBe(32)
    })

    it('maps sm to 24px', () => {
      const wrapper = mount(MuiSocialMedia, {
        props: {
          platform: 'linkedin',
          href: 'https://linkedin.com/test',
          size: 'sm',
        },
      })

      const icon = wrapper.findComponent({ name: 'MuiIcon' })
      expect(icon.props('size')).toBe(24)
    })

    it('maps lg to 48px', () => {
      const wrapper = mount(MuiSocialMedia, {
        props: {
          platform: 'linkedin',
          href: 'https://linkedin.com/test',
          size: 'lg',
        },
      })

      const icon = wrapper.findComponent({ name: 'MuiIcon' })
      expect(icon.props('size')).toBe(48)
    })

    it('accepts custom numeric size', () => {
      const wrapper = mount(MuiSocialMedia, {
        props: {
          platform: 'linkedin',
          href: 'https://linkedin.com/test',
          size: 64,
        },
      })

      const icon = wrapper.findComponent({ name: 'MuiIcon' })
      expect(icon.props('size')).toBe(64)
    })
  })

  it('supports attribute inheritance', () => {
    const wrapper = mount(MuiSocialMedia, {
      props: {
        platform: 'linkedin',
        href: 'https://linkedin.com/test',
      },
      attrs: {
        'data-testid': 'social-link',
        id: 'linkedin-link',
      },
    })

    expect(wrapper.attributes('data-testid')).toBe('social-link')
    expect(wrapper.attributes('id')).toBe('linkedin-link')
  })
})
