import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import MuiHeaderBlurBg from '@components/header-blur-bg/MuiHeaderBlurBg.vue'
import { MuiLogoBusiness, MuiLogoUniversity } from '@components/logo'

const meta: Meta<typeof MuiHeaderBlurBg> = {
  title: 'Layout/MuiHeaderBlurBg',
  component: MuiHeaderBlurBg,
  tags: ['autodocs'],
  argTypes: {
    button: {
      control: 'object',
      description: 'Button configuration with text and href properties',
    },
    menuLinks: {
      control: 'object',
      description: 'Array of menu links to render internally',
    },
    menuBreakpoint: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Breakpoint at which mobile menu switches to desktop inline menu',
    },
    logoBreakpoint: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Breakpoint at which the compact logo switches to the full logo slot',
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="background: linear-gradient(135deg, #C10230 0%, #75308C 100%); min-height: 200px; padding: 0;">
          <story />
        </div>
      `,
    }),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoUniversity :width="200" />
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {
    button: {
      text: 'GET IN TOUCH',
      href: '/contact',
    },
  },
}

export const WithoutButton: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoUniversity :width="200" />
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {},
}

export const CustomButtonText: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoUniversity :width="200" />
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {
    button: {
      text: 'APPLY NOW',
      href: '/apply',
    },
  },
}

/**
 * Example usage with the source code shown below.
 */
export const SourceCodeExample: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoUniversity :width="200" />
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {
    button: {
      text: 'GET IN TOUCH',
      href: '/contact',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <MuiHeaderBlurBg :button="{ text: 'GET IN TOUCH', href: '/contact' }">
    <template #logo>
      <MuiLogoUniversity :width="200" />
    </template>
  </MuiHeaderBlurBg>
</template>

<script setup>
import { MuiHeaderBlurBg } from '@musizi/ui-kit'
import { MuiLogoUniversity } from '@musizi/ui-kit'
</script>
`,
        language: 'html',
      },
    },
  },
}

/**
 * Using the Business School logo in the header.
 */
export const WithBusinessLogo: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoBusiness },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoBusiness :width="200" />
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {
    button: {
      text: 'GET IN TOUCH',
      href: '/contact',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <MuiHeaderBlurBg :button="{ text: 'GET IN TOUCH', href: '/contact' }">
    <template #logo>
      <MuiLogoBusiness :width="200" />
    </template>
  </MuiHeaderBlurBg>
</template>

<script setup>
import { MuiHeaderBlurBg } from '@musizi/ui-kit'
import { MuiLogoBusiness } from '@musizi/ui-kit'
</script>
`,
        language: 'html',
      },
    },
  },
}

/**
 * Header with a navigation menu using the `menuLinks` prop. On desktop (lg+),
 * the menu appears inline between the logo and button. On mobile, a hamburger
 * button toggles an overlay panel beneath the header.
 */
export const WithMenu: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoUniversity :width="200" />
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {
    button: {
      text: 'GET IN TOUCH',
      href: '/contact',
    },
    menuLinks: [
      { text: 'About', href: '/about' },
      { text: 'Programs', href: '/programs' },
      { text: 'News', href: '/news' },
      { text: 'Contact', href: '/contact' },
    ],
  },
}

/**
 * Demonstrates external control of the mobile menu via `v-model:menuOpen`.
 * Click the "Toggle Menu Externally" button to open/close the menu from outside.
 */
export const WithMenuVModel: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      const menuOpen = ref(false)
      return { args, menuOpen }
    },
    template: `
      <div>
        <MuiHeaderBlurBg v-bind="args" v-model:menuOpen="menuOpen">
          <template #logo>
            <MuiLogoUniversity :width="200" />
          </template>
        </MuiHeaderBlurBg>
        <div style="padding: 16px; display: flex; align-items: center; gap: 12px;">
          <button
            @click="menuOpen = !menuOpen"
            style="padding: 8px 16px; background: white; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
          >
            Toggle Menu Externally
          </button>
          <span style="color: white;">menuOpen: {{ menuOpen }}</span>
        </div>
      </div>
    `,
  }),
  args: {
    button: {
      text: 'GET IN TOUCH',
      href: '/contact',
    },
    menuLinks: [
      { text: 'About', href: '/about' },
      { text: 'Programs', href: '/programs' },
      { text: 'News', href: '/news' },
    ],
  },
}

/**
 * Menu via slot for custom rendering. The `#menu` slot is used as a fallback
 * when `menuLinks` is not provided.
 */
export const WithMenuSlot: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoUniversity :width="200" />
        </template>
        <template #menu>
          <ul>
            <li><a href="#">Custom Item 1</a></li>
            <li><a href="#">Custom Item 2</a></li>
          </ul>
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {
    button: {
      text: 'GET IN TOUCH',
      href: '/contact',
    },
  },
}

/**
 * Demonstrates using `menuBreakpoint="md"` so the desktop inline menu
 * appears at 768px instead of the default 1024px.
 */
export const WithMdBreakpoint: Story = {
  render: (args) => ({
    components: { MuiHeaderBlurBg, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiHeaderBlurBg v-bind="args">
        <template #logo>
          <MuiLogoUniversity :width="200" />
        </template>
      </MuiHeaderBlurBg>
    `,
  }),
  args: {
    button: {
      text: 'GET IN TOUCH',
      href: '/contact',
    },
    menuLinks: [
      { text: 'About', href: '/about' },
      { text: 'Programs', href: '/programs' },
      { text: 'News', href: '/news' },
      { text: 'Contact', href: '/contact' },
    ],
    menuBreakpoint: 'md',
  },
}
