import type { Meta, StoryObj } from '@storybook/vue3'
import MuiBannerWithBleeding from '@components/banner/MuiBannerWithBleeding.vue'
import type { ResponsiveImage, BannerAction } from '@components/banner/types'

const meta: Meta<typeof MuiBannerWithBleeding> = {
  title: 'Banners/MuiBannerWithBleeding',
  component: MuiBannerWithBleeding,
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

type Story = StoryObj<typeof MuiBannerWithBleeding>

const defaultBackgroundImage: ResponsiveImage = {
  small: '/img/banners/cybersecurity-sm.jpg',
  large: '/img/banners/cybersecurity-lg.jpg',
  alt: 'Cybersecurity program banner',
}

const defaultAction: BannerAction = {
  label: 'Read more',
  url: '/programmes/cybersecurity',
}

export const Default: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    action: defaultAction,
  },
  render: (args) => ({
    components: { MuiBannerWithBleeding },
    setup() {
      const onActionClick = (action: BannerAction) => {
        console.log('Action clicked:', action)
      }
      return { args, onActionClick }
    },
    template: `
      <MuiBannerWithBleeding v-bind="args" @action-click="onActionClick">
        <template #title>The Cybersecurity Programme</template>
        <template #default>
          <p>The Cybersecurity Programme equips professionals to be prepared to address the growing challenges associated with privacy and security encountered by businesses in and entering the technology industries in Uganda.</p>
          <p>This program provides targeted training for CEOs, CTOs, CIOs, and IT professionals for firms and agencies of all scales. Participants will learn the tools and strategies necessary to protect their businesses from cyberthreats and be prepared to excel in a technology-centred world.</p>
        </template>
      </MuiBannerWithBleeding>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerWithBleeding
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
  :action="{ label: 'Read more', url: '/programmes/cybersecurity' }"
  @action-click="handleAction"
>
  <template #title>The Cybersecurity Programme</template>
  <template #default>
    <p>The Cybersecurity Programme equips professionals to address growing challenges.</p>
    <p>This program provides targeted training for CEOs, CTOs, CIOs, and IT professionals.</p>
  </template>
</MuiBannerWithBleeding>`,
      },
    },
  },
}

export const WithoutAction: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
  },
  render: (args) => ({
    components: { MuiBannerWithBleeding },
    setup() {
      return { args }
    },
    template: `
      <MuiBannerWithBleeding v-bind="args">
        <template #title>Our Vision</template>
        <template #default>
          <p>Building tomorrow's leaders through education and innovation.</p>
        </template>
      </MuiBannerWithBleeding>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerWithBleeding
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
>
  <template #title>Our Vision</template>
  <template #default>
    <p>Building tomorrow's leaders through education and innovation.</p>
  </template>
</MuiBannerWithBleeding>`,
      },
    },
  },
}

export const WithExternalLink: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    action: {
      label: 'Learn More',
      url: 'https://example.com/program',
      external: true,
    },
  },
  render: (args) => ({
    components: { MuiBannerWithBleeding },
    setup() {
      return { args }
    },
    template: `
      <MuiBannerWithBleeding v-bind="args">
        <template #title>Partner Program</template>
        <template #default>
          <p>Join our network of partners making a difference in education.</p>
        </template>
      </MuiBannerWithBleeding>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBannerWithBleeding
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner-lg.jpg', alt: 'Banner' }"
  :action="{ label: 'Learn More', url: 'https://example.com/program', external: true }"
>
  <template #title>Partner Program</template>
  <template #default>
    <p>Join our network of partners making a difference in education.</p>
  </template>
</MuiBannerWithBleeding>`,
      },
    },
  },
}
