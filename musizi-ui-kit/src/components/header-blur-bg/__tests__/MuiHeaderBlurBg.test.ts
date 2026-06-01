import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import MuiHeaderBlurBg from '../MuiHeaderBlurBg.vue'

const sampleLinks = [
  { text: 'About', href: '/about' },
  { text: 'News', href: '/news' },
  { text: 'Contact', href: '/contact' },
]

describe('MuiHeaderBlurBg', () => {
  beforeEach(() => {
    document.body.classList.remove('overflow-hidden')
  })

  // ---- EXISTING TESTS ----

  it('renders the header element', () => {
    const wrapper = mount(MuiHeaderBlurBg)
    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('applies blur background styles via Tailwind classes', () => {
    const wrapper = mount(MuiHeaderBlurBg)
    const header = wrapper.find('header')
    expect(header.classes()).toContain('bg-white/20')
    expect(header.classes()).toContain('backdrop-blur-[10px]')
  })

  it('renders logo slot content', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { logo: '<div class="test-logo">Logo</div>' },
    })
    expect(wrapper.find('.test-logo').exists()).toBe(true)
    expect(wrapper.find('.test-logo').text()).toBe('Logo')
  })

  it('renders button when button.text is provided', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'GET IN TOUCH' } },
    })
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toContain('GET IN TOUCH')
  })

  it('does not render button when button prop is not provided', () => {
    const wrapper = mount(MuiHeaderBlurBg)
    expect(wrapper.find('button').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(false)
  })

  it('does not render button when button.text is empty', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: '' } },
    })
    expect(wrapper.findAll('button')).toHaveLength(0)
  })

  it('passes button.href to the button', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'Contact Us', href: '/contact' } },
    })
    const anchor = wrapper.find('a')
    expect(anchor.exists()).toBe(true)
    expect(anchor.attributes('href')).toBe('/contact')
  })

  it('renders button with all-white variant and medium-small size', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'Click Me' } },
    })
    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--all-white')
    expect(button.classes()).toContain('btn--medium-small')
  })

  it('uses flexbox layout with space-between', () => {
    const wrapper = mount(MuiHeaderBlurBg)
    const header = wrapper.find('header')
    expect(header.classes()).toContain('flex')
    expect(header.classes()).toContain('items-center')
    expect(header.classes()).toContain('justify-between')
  })

  // ---- Menu slot tests (backwards compat) ----

  it('does not render hamburger when no menu slot is provided', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'CTA' } },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(1)
    expect(buttons[0].classes()).toContain('btn--all-white')
  })

  it('renders hamburger button when menu slot is provided', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'CTA' } },
      slots: { menu: '<nav class="test-menu">Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    expect(hamburger.exists()).toBe(true)
  })

  it('mobile overlay is hidden by default', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav class="test-menu">Menu</nav>' },
    })
    const overlays = wrapper.findAll('.top-full')
    expect(overlays).toHaveLength(0)
  })

  it('shows mobile overlay when hamburger is clicked', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav class="test-menu">Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    const overlay = wrapper.find('.top-full')
    expect(overlay.exists()).toBe(true)
  })

  it('toggles open and close on multiple clicks', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav class="test-menu">Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect(wrapper.find('.top-full').exists()).toBe(true)
    await hamburger.trigger('click')
    expect(wrapper.find('.top-full').exists()).toBe(false)
    await hamburger.trigger('click')
    expect(wrapper.find('.top-full').exists()).toBe(true)
  })

  it('supports v-model:menuOpen two-way binding', async () => {
    const Parent = {
      components: { MuiHeaderBlurBg },
      template: `
        <MuiHeaderBlurBg v-model:menuOpen="open">
          <template #menu><nav>Menu</nav></template>
        </MuiHeaderBlurBg>
      `,
      data() { return { open: false } },
    }
    const wrapper = mount(Parent)
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect((wrapper.vm as Record<string, unknown>).open).toBe(true)
    await hamburger.trigger('click')
    expect((wrapper.vm as Record<string, unknown>).open).toBe(false)
  })

  it('updates aria-expanded attribute on hamburger', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav>Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    expect(hamburger.attributes('aria-expanded')).toBe('false')
    await hamburger.trigger('click')
    expect(hamburger.attributes('aria-expanded')).toBe('true')
  })

  it('exposes closeMenu() method that closes the menu', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav>Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect(wrapper.find('.top-full').exists()).toBe(true)
    ;(wrapper.vm as unknown as { closeMenu: () => void }).closeMenu();
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.top-full').exists()).toBe(false)
  })

  // ---- Button visibility with menu ----

  it('shows button at all sizes when no menu slot is provided', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'CTA' } },
    })
    const buttonContainer = wrapper.find('button.btn--all-white').element.closest('div')
    expect(buttonContainer?.className).toContain('flex')
    expect(buttonContainer?.className).not.toContain('hidden')
  })

  it('hides header button on mobile when menu slot exists', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'CTA' } },
      slots: { menu: '<nav>Menu</nav>' },
    })
    const headerButton = wrapper.find('header').find('button.btn--all-white')
    const buttonContainer = headerButton.element.closest('div')
    expect(buttonContainer?.className).toContain('hidden')
    expect(buttonContainer?.className).toContain('lg:flex')
  })

  it('shows button inside mobile overlay when menu is open', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { button: { text: 'CTA' } },
      slots: { menu: '<nav>Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    const overlay = wrapper.find('.top-full')
    expect(overlay.exists()).toBe(true)
    const overlayButton = overlay.find('button.btn--all-white')
    expect(overlayButton.exists()).toBe(true)
  })

  // ---- Body overflow management ----

  it('adds overflow-hidden to body when menu opens', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav>Menu</nav>' },
    })
    expect(document.body.classList.contains('overflow-hidden')).toBe(false)
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect(document.body.classList.contains('overflow-hidden')).toBe(true)
  })

  it('removes overflow-hidden from body when menu closes', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav>Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect(document.body.classList.contains('overflow-hidden')).toBe(true)
    await hamburger.trigger('click')
    expect(document.body.classList.contains('overflow-hidden')).toBe(false)
  })

  it('removes overflow-hidden on unmount if menu was open', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { menu: '<nav>Menu</nav>' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect(document.body.classList.contains('overflow-hidden')).toBe(true)
    wrapper.unmount()
    expect(document.body.classList.contains('overflow-hidden')).toBe(false)
  })

  // ---- menuLinks prop tests ----

  it('renders menu from menuLinks prop', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks },
    })
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
    const links = nav.findAll('a')
    expect(links).toHaveLength(3)
    expect(links[0].text()).toBe('About')
    expect(links[0].attributes('href')).toBe('/about')
    expect(links[1].text()).toBe('News')
    expect(links[2].text()).toBe('Contact')
  })

  it('shows hamburger when menuLinks is provided', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    expect(hamburger.exists()).toBe(true)
  })

  it('does not show hamburger when menuLinks is empty array', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: [] },
    })
    expect(wrapper.find('button[aria-label="Toggle menu"]').exists()).toBe(false)
  })

  it('renders menuLinks in mobile overlay when open', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    const overlay = wrapper.find('.top-full')
    const links = overlay.findAll('a')
    expect(links).toHaveLength(3)
    expect(links[0].text()).toBe('About')
  })

  it('auto-closes menu when a link in overlay is clicked', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect(wrapper.find('.top-full').exists()).toBe(true)

    const overlayLink = wrapper.find('.top-full a')
    await overlayLink.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.top-full').exists()).toBe(false)
  })

  it('auto-closes menu when overlay button is clicked', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, button: { text: 'CTA' } },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    expect(wrapper.find('.top-full').exists()).toBe(true)

    const overlayButton = wrapper.find('.top-full button.btn--all-white')
    await overlayButton.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.top-full').exists()).toBe(false)
  })

  // ---- menuBreakpoint prop tests ----

  it('defaults to lg breakpoint classes when menuBreakpoint is not set', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, button: { text: 'CTA' } },
    })
    const nav = wrapper.find('nav')
    expect(nav.classes()).toContain('lg:flex')
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    expect(hamburger.classes()).toContain('lg:hidden')
    const buttonContainer = wrapper.find('header').find('button.btn--all-white').element.closest('div')
    expect(buttonContainer?.className).toContain('lg:flex')
  })

  it('uses md breakpoint classes when menuBreakpoint is md', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, button: { text: 'CTA' }, menuBreakpoint: 'md' },
    })
    const nav = wrapper.find('nav')
    expect(nav.classes()).toContain('md:flex')
    expect(nav.classes()).not.toContain('lg:flex')
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    expect(hamburger.classes()).toContain('md:hidden')
    expect(hamburger.classes()).not.toContain('lg:hidden')
  })

  it('uses sm breakpoint classes when menuBreakpoint is sm', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, menuBreakpoint: 'sm' },
    })
    const nav = wrapper.find('nav')
    expect(nav.classes()).toContain('sm:flex')
  })

  it('sets data-menu-bp attribute to the prop value', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, menuBreakpoint: 'xl' },
    })
    const root = wrapper.find('[data-menu-bp]')
    expect(root.attributes('data-menu-bp')).toBe('xl')
  })

  it('sets data-menu-bp to lg by default', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks },
    })
    const root = wrapper.find('[data-menu-bp]')
    expect(root.attributes('data-menu-bp')).toBe('lg')
  })

  it('applies breakpoint class to mobile overlay', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, menuBreakpoint: 'md' },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    const overlay = wrapper.find('.top-full')
    expect(overlay.classes()).toContain('md:hidden')
    expect(overlay.classes()).not.toContain('lg:hidden')
  })

  // ---- logoBreakpoint prop tests ----

  it('defaults to md breakpoint for logo switching', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      slots: { logo: '<div class="test-logo">Logo</div>' },
    })
    const spans = wrapper.findAll('.flex.items-center > span')
    // Small logo span: block md:hidden
    expect(spans[0].classes()).toContain('block')
    expect(spans[0].classes()).toContain('md:hidden')
    // Full logo span: hidden md:block
    expect(spans[1].classes()).toContain('hidden')
    expect(spans[1].classes()).toContain('md:block')
  })

  it('uses sm breakpoint for logo when logoBreakpoint is sm', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { logoBreakpoint: 'sm' },
      slots: { logo: '<div class="test-logo">Logo</div>' },
    })
    const spans = wrapper.findAll('.flex.items-center > span')
    expect(spans[0].classes()).toContain('sm:hidden')
    expect(spans[0].classes()).not.toContain('md:hidden')
    expect(spans[1].classes()).toContain('sm:block')
    expect(spans[1].classes()).not.toContain('md:block')
  })

  it('uses lg breakpoint for logo when logoBreakpoint is lg', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { logoBreakpoint: 'lg' },
      slots: { logo: '<div class="test-logo">Logo</div>' },
    })
    const spans = wrapper.findAll('.flex.items-center > span')
    expect(spans[0].classes()).toContain('lg:hidden')
    expect(spans[1].classes()).toContain('lg:block')
  })

  it('menuLinks takes precedence over menu slot', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks },
      slots: { menu: '<nav class="slot-menu">Slot</nav>' },
    })
    // Should render the prop-driven menu, not the slot
    expect(wrapper.find('.slot-menu').exists()).toBe(false)
    const nav = wrapper.find('nav')
    expect(nav.findAll('a')).toHaveLength(3)
  })

  it('hides header button on mobile when menuLinks provided', () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, button: { text: 'CTA' } },
    })
    const headerButton = wrapper.find('header').find('button.btn--all-white')
    const buttonContainer = headerButton.element.closest('div')
    expect(buttonContainer?.className).toContain('hidden')
  })

  it('shows button in overlay when menuLinks and button provided', async () => {
    const wrapper = mount(MuiHeaderBlurBg, {
      props: { menuLinks: sampleLinks, button: { text: 'CTA' } },
    })
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')
    await hamburger.trigger('click')
    const overlay = wrapper.find('.top-full')
    expect(overlay.find('button.btn--all-white').exists()).toBe(true)
  })
})
