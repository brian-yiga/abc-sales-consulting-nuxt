import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiIcon } from '@components/icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Core/MuiIcon',
  component: MuiIcon,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Material icon name. See [material icons](https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web)',
    },
    name: {
      control: 'text',
      description: 'Iconify icon name (e.g., "mdi:linkedin"). See [Iconify](https://icon-sets.iconify.design/). Takes precedence over `icon`.',
    },
    size: {
      control: { type: 'number', min: 16, max: 96, step: 8 },
      description: 'Icon size in pixels',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
  },
} satisfies Meta<typeof MuiIcon>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    icon: 'ios_share',
    size: 24,
    color: '#000000',
  },
}

export const Large: Story = {
  args: {
    icon: 'ios_share',
    size: 48,
    color: '#000000',
  },
}

export const Colored: Story = {
  args: {
    icon: 'ios_share',
    size: 24,
    color: '#C10230',
  },
}

// Iconify examples
export const IconifyIcon: Story = {
  args: {
    name: 'simple-icons:linkedin',
    size: 32,
    color: '#0A66C2',
  },
}

export const IconifyLarge: Story = {
  args: {
    name: 'simple-icons:youtube',
    size: 48,
    color: '#FF0000',
  },
}

export const IconifySocialIcons: Story = {
  render: () => ({
    components: { MuiIcon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <MuiIcon name="simple-icons:linkedin" :size="32" color="#0A66C2" />
        <MuiIcon name="simple-icons:youtube" :size="32" color="#FF0000" />
        <MuiIcon name="simple-icons:instagram" :size="32" color="#E4405F" />
        <MuiIcon name="simple-icons:facebook" :size="32" color="#1877F2" />
        <MuiIcon name="simple-icons:x" :size="32" color="#000000" />
        <MuiIcon name="simple-icons:tiktok" :size="32" />
      </div>
    `,
  }),
}
