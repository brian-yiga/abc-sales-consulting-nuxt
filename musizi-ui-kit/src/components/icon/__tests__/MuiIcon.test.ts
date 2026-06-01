import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiIcon from '../MuiIcon.vue'

describe('MuiIcon', () => {
  describe('Material Icons (icon prop)', () => {
    it('renders a span element with material-icons class', () => {
      const wrapper = mount(MuiIcon, {
        props: {
          icon: 'ios_share',
        },
      })

      const span = wrapper.find('span.material-icons')
      expect(span.exists()).toBe(true)
    })

    it('renders icon name as text content', () => {
      const wrapper = mount(MuiIcon, {
        props: {
          icon: 'arrow_forward',
        },
      })

      expect(wrapper.text()).toBe('arrow_forward')
    })

    it('applies size as fontSize style', () => {
      const wrapper = mount(MuiIcon, {
        props: {
          icon: 'ios_share',
          size: 48,
        },
      })

      const span = wrapper.find('span.material-icons')
      expect(span.attributes('style')).toContain('font-size: 48px')
    })

    it('applies color style', () => {
      const wrapper = mount(MuiIcon, {
        props: {
          icon: 'ios_share',
          color: '#C10230',
        },
      })

      const span = wrapper.find('span.material-icons')
      const style = span.attributes('style') ?? ''
      expect(style).toMatch(/color:/)
    })
  })

  describe('Iconify Icons (name prop)', () => {
    it('renders Iconify Icon component when name prop is used', () => {
      const wrapper = mount(MuiIcon, {
        props: {
          name: 'mdi:linkedin',
        },
      })

      // Should not have material-icons span
      expect(wrapper.find('span.material-icons').exists()).toBe(false)
    })

    it('does not have material-icons class when using name prop', () => {
      const wrapper = mount(MuiIcon, {
        props: {
          name: 'mdi:linkedin',
        },
      })

      expect(wrapper.find('.material-icons').exists()).toBe(false)
    })

    it('name prop takes precedence over icon prop', () => {
      const wrapper = mount(MuiIcon, {
        props: {
          icon: 'ios_share',
          name: 'mdi:linkedin',
        },
      })

      // Should not render Material Icons span
      expect(wrapper.find('span.material-icons').exists()).toBe(false)
    })
  })
})
