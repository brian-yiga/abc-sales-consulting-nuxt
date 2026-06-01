import type { Meta, StoryObj } from '@storybook/vue3'
import MuiBannerVideoModal from '@components/banner/MuiBannerVideoModal.vue'
import type { ResponsiveImage } from '@components/banner/types'

const meta: Meta<typeof MuiBannerVideoModal> = {
  title: 'Banners/MuiBannerVideoModal',
  component: MuiBannerVideoModal,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: {
      control: 'object',
      description: 'Responsive background image configuration',
    },
    videoThumbnail: {
      control: 'object',
      description: 'Video thumbnail/play button image configuration',
    },
  },
}

export default meta

type Story = StoryObj<typeof MuiBannerVideoModal>

const defaultBackgroundImage: ResponsiveImage = {
  small: '/img/banners/family-enterprises-banner-sm.jpg',
  large: '/img/banners/family-enterprises-banner-lg.jpg',
  alt: 'Family enterprises banner',
}

const defaultVideoThumbnail: ResponsiveImage = {
  small: '/img/banners/family-enterprises-video-sm.png',
  large: '/img/banners/family-enterprises-video-lg.png',
  alt: 'Play video',
}

export const Default: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    videoThumbnail: defaultVideoThumbnail,
  },
  render: (args) => ({
    components: { MuiBannerVideoModal },
    setup() {
      const onPlay = () => {
        console.log('Play video clicked - open your modal here')
        alert('Video play clicked! Implement your modal logic here.')
      }
      return { args, onPlay }
    },
    template: `
      <MuiBannerVideoModal v-bind="args" @play="onPlay">
        Families in Business Programme 2024
      </MuiBannerVideoModal>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerVideoModal
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
  :video-thumbnail="{ small: '/images/video-sm.png', large: '/images/video-lg.png', alt: 'Play video' }"
  @play="openVideoModal"
>
  Families in Business Programme 2024
</MuiBannerVideoModal>`,
      },
    },
  },
}

export const CustomTitle: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    videoThumbnail: defaultVideoThumbnail,
  },
  render: (args) => ({
    components: { MuiBannerVideoModal },
    setup() {
      const onPlay = () => console.log('Play clicked')
      return { args, onPlay }
    },
    template: `
      <MuiBannerVideoModal v-bind="args" @play="onPlay">
        <span class="text-yellow-300">Watch</span> Our Story
      </MuiBannerVideoModal>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerVideoModal
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
  :video-thumbnail="{ small: '/images/video-sm.png', large: '/images/video-lg.png', alt: 'Play video' }"
  @play="openVideoModal"
>
  <span class="text-yellow-300">Watch</span> Our Story
</MuiBannerVideoModal>`,
      },
    },
  },
}
