import type { Meta, StoryObj } from '@storybook/vue3'
import MuiBannerWithSlash from '@components/banner/MuiBannerWithSlash.vue'
import type { ResponsiveImage, BannerAction } from '@components/banner/types'

const meta: Meta<typeof MuiBannerWithSlash> = {
  title: 'Banners/MuiBannerWithSlash',
  component: MuiBannerWithSlash,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: {
      control: 'object',
      description: 'Responsive background image configuration',
    },
    action: {
      control: 'object',
      description: 'Action button configuration',
    },
  },
}

export default meta

type Story = StoryObj<typeof MuiBannerWithSlash>

const defaultBackgroundImage: ResponsiveImage = {
  small: '/img/banners/banner-sm.jpg',
  medium: '/img/banners/banner-lg.jpg',
  large: '/img/banners/banner-lg.jpg',
  alt: 'Banner with slash overlay',
}

const defaultAction: BannerAction = {
  label: 'Our Programs',
  url: '/programs',
}

export const Default: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    action: defaultAction,
  },
  render: (args) => ({
    components: { MuiBannerWithSlash },
    setup() {
      const onActionClick = (action: BannerAction) => {
        console.log('Action clicked:', action)
      }
      return { args, onActionClick }
    },
    template: `
      <MuiBannerWithSlash v-bind="args" @action-click="onActionClick">
        <template #title>Intentional Success, Enduring Legacies</template>
      </MuiBannerWithSlash>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerWithSlash
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
  :action="{ label: 'Our Programs', url: '/programs' }"
  @action-click="handleAction"
>
  <template #title>Intentional Success, Enduring Legacies</template>
</MuiBannerWithSlash>`,
      },
    },
  },
}

export const WithExternalLink: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    action: {
      label: 'Learn More',
      url: 'https://example.com',
      external: true,
    },
  },
  render: (args) => ({
    components: { MuiBannerWithSlash },
    setup() {
      return { args }
    },
    template: `
      <MuiBannerWithSlash v-bind="args">
        <template #title>Discover Our Vision</template>
      </MuiBannerWithSlash>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerWithSlash
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
  :action="{ label: 'Learn More', url: 'https://example.com', external: true }"
>
  <template #title>Discover Our Vision</template>
</MuiBannerWithSlash>`,
      },
    },
  },
}

export const WithoutAction: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
  },
  render: (args) => ({
    components: { MuiBannerWithSlash },
    setup() {
      return { args }
    },
    template: `
      <MuiBannerWithSlash v-bind="args">
        <template #title>Building Future Leaders</template>
      </MuiBannerWithSlash>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerWithSlash
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
>
  <template #title>Building Future Leaders</template>
</MuiBannerWithSlash>`,
      },
    },
  },
}
