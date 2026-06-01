import type { Meta, StoryObj } from '@storybook/vue3'
import MuiBannerInsetCard from '@components/banner/MuiBannerInsetCard.vue'
import type { ResponsiveImage, BannerAction } from '@components/banner/types'

const meta: Meta<typeof MuiBannerInsetCard> = {
  title: 'Banners/MuiBannerInsetCard',
  component: MuiBannerInsetCard,
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

type Story = StoryObj<typeof MuiBannerInsetCard>

const defaultBackgroundImage: ResponsiveImage = {
  small: '/img/banners/banner-sm.jpg',
  medium: '/img/banners/banner-lg.jpg',
  large: '/img/banners/banner.jpeg',
  alt: 'Banner background',
}

const defaultAction: BannerAction = {
  label: 'Programmes',
  url: '/schools',
}

export const Default: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    action: defaultAction,
  },
  render: (args) => ({
    components: { MuiBannerInsetCard },
    setup() {
      const onActionClick = (action: BannerAction) => {
        console.log('Action clicked:', action)
      }
      return { args, onActionClick }
    },
    template: `
      <MuiBannerInsetCard v-bind="args" @action-click="onActionClick">
        <template #title>
          <div>GIVING YOU</div>
          <div class="font-bold">WINGS FOR LIFE</div>
        </template>
      </MuiBannerInsetCard>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerInsetCard
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  :action="{ label: 'Programmes', url: '/schools' }"
  @action-click="handleAction"
>
  <template #title>
    <div>GIVING YOU</div>
    <div class="font-bold">WINGS FOR LIFE</div>
  </template>
</MuiBannerInsetCard>`,
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
    components: { MuiBannerInsetCard },
    setup() {
      return { args }
    },
    template: `
      <MuiBannerInsetCard v-bind="args">
        <template #title>
          <div>DISCOVER</div>
          <div class="font-bold">OUR PROGRAMS</div>
        </template>
      </MuiBannerInsetCard>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerInsetCard
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  :action="{ label: 'Learn More', url: 'https://example.com', external: true }"
>
  <template #title>
    <div>DISCOVER</div>
    <div class="font-bold">OUR PROGRAMS</div>
  </template>
</MuiBannerInsetCard>`,
      },
    },
  },
}

export const WithoutAction: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
  },
  render: (args) => ({
    components: { MuiBannerInsetCard },
    setup() {
      return { args }
    },
    template: `
      <MuiBannerInsetCard v-bind="args">
        <template #title>
          <div>WELCOME TO</div>
          <div class="font-bold">MUSIZI UNIVERSITY</div>
        </template>
      </MuiBannerInsetCard>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerInsetCard
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
>
  <template #title>
    <div>WELCOME TO</div>
    <div class="font-bold">MUSIZI UNIVERSITY</div>
  </template>
</MuiBannerInsetCard>`,
      },
    },
  },
}
