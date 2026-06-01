import type { Meta, StoryObj } from '@storybook/vue3'
import MuiBlurredTitleOnlyBanner from '@components/banner/MuiBlurredTitleOnlyBanner.vue'
import type { ResponsiveImage } from '@components/banner/types'

const meta: Meta<typeof MuiBlurredTitleOnlyBanner> = {
  title: 'Banners/MuiBlurredTitleOnlyBanner',
  component: MuiBlurredTitleOnlyBanner,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main heading text for the banner',
    },
    isOffset: {
      control: 'boolean',
      description: 'Whether to apply offset padding to the banner content',
    },
    backgroundImage: {
      control: 'object',
      description: 'Responsive background image configuration',
    },
  },
}

export default meta

type Story = StoryObj<typeof MuiBlurredTitleOnlyBanner>

const defaultBackgroundImage: ResponsiveImage = {
  small: '/img/banners/staff-page-header-bg-small.jpg',
  medium: '/img/banners/staff-page-header-bg-medium.jpg',
  large: '/img/banners/staff-page-header-bg-large.jpg',
  alt: 'Staff page header background',
}

export const Default: Story = {
  args: {
    title: 'News',
    isOffset: false,
    backgroundImage: defaultBackgroundImage,
  },
}

export const WithOffset: Story = {
  args: {
    title: 'Join Our Team',
    isOffset: true,
    backgroundImage: defaultBackgroundImage,
  },
}

export const WithSlot: Story = {
  args: {
    isOffset: false,
    backgroundImage: defaultBackgroundImage,
  },
  render: (args) => ({
    components: { MuiBlurredTitleOnlyBanner },
    setup() {
      return { args }
    },
    template: `
      <MuiBlurredTitleOnlyBanner v-bind="args">
        <span class="text-yellow-300">Custom Title</span> Content
      </MuiBlurredTitleOnlyBanner>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBlurredTitleOnlyBanner
  :background-image="{ small: '/images/header-sm.jpg', large: '/images/header-lg.jpg', alt: 'Header' }"
>
  <span class="text-yellow-300">Custom Title</span> Content
</MuiBlurredTitleOnlyBanner>`,
      },
    },
  },
}

export const CustomImages: Story = {
  args: {
    title: 'Custom Backgrounds',
    isOffset: false,
    backgroundImage: {
      small: '/img/banners/cybersecurity-sm.jpg',
      medium: '/img/banners/cybersecurity-lg.jpg',
      large: '/img/banners/cybersecurity-lg.jpg',
      alt: 'Cybersecurity banner',
    },
  },
}
