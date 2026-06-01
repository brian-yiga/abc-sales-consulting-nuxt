import type { Meta, StoryObj } from '@storybook/vue3'
import MuiBlurredBackgroundBanner from '@components/banner/MuiBlurredBackgroundBanner.vue'
import type { ResponsiveImage } from '@components/banner/types'

const meta: Meta<typeof MuiBlurredBackgroundBanner> = {
  title: 'Banners/MuiBlurredBackgroundBanner',
  component: MuiBlurredBackgroundBanner,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: {
      control: 'object',
      description: 'Responsive background image configuration',
    },
    overlayColor: {
      control: 'color',
      description: 'Background overlay color',
    },
    showScrollIndicator: {
      control: 'boolean',
      description: 'Show scroll indicator on mobile',
    },
  },
}

export default meta

type Story = StoryObj<typeof MuiBlurredBackgroundBanner>

const defaultBackgroundImage: ResponsiveImage = {
  small: '/img/banners/list-banner-small.jpg',
  medium: '/img/banners/list-banner-medium.jpg',
  large: '/img/banners/list-banner.jpg',
  alt: 'List banner background',
}

export const Default: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    overlayColor: '#5e024f',
    showScrollIndicator: true,
  },
  render: (args) => ({
    components: { MuiBlurredBackgroundBanner },
    setup() {
      return { args }
    },
    template: `
      <MuiBlurredBackgroundBanner v-bind="args">
        <template #caption>Why We Do This</template>
        <template #title>It Matters, For A Better World</template>
        <template #default>
          <p>Welcome to Musizi University Foundation, dedicated to shaping the future of African leadership through higher education. Your support empowers the next generation of African leaders through increasing access to high quality, hands on education. Join us in making a lasting impact.</p>
        </template>
      </MuiBlurredBackgroundBanner>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBlurredBackgroundBanner
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  overlay-color="#5e024f"
  show-scroll-indicator
>
  <template #caption>Why We Do This</template>
  <template #title>It Matters, For A Better World</template>
  <template #default>
    <p>Welcome to Musizi University Foundation, dedicated to shaping the future.</p>
  </template>
</MuiBlurredBackgroundBanner>`,
      },
    },
  },
}

export const WithoutScrollIndicator: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    showScrollIndicator: false,
  },
  render: (args) => ({
    components: { MuiBlurredBackgroundBanner },
    setup() {
      return { args }
    },
    template: `
      <MuiBlurredBackgroundBanner v-bind="args">
        <template #caption>Our Mission</template>
        <template #title>Empowering Future Leaders</template>
        <template #default>
          <p>Through education and mentorship, we build the leaders of tomorrow.</p>
        </template>
      </MuiBlurredBackgroundBanner>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBlurredBackgroundBanner
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  :show-scroll-indicator="false"
>
  <template #caption>Our Mission</template>
  <template #title>Empowering Future Leaders</template>
  <template #default>
    <p>Through education and mentorship, we build the leaders of tomorrow.</p>
  </template>
</MuiBlurredBackgroundBanner>`,
      },
    },
  },
}

export const CustomOverlayColor: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    overlayColor: '#1a365d',
  },
  render: (args) => ({
    components: { MuiBlurredBackgroundBanner },
    setup() {
      return { args }
    },
    template: `
      <MuiBlurredBackgroundBanner v-bind="args">
        <template #caption>Join Us</template>
        <template #title>Be Part of the Change</template>
        <template #default>
          <p>Your contribution makes a difference in the lives of students across Africa.</p>
        </template>
      </MuiBlurredBackgroundBanner>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiBlurredBackgroundBanner
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  overlay-color="#1a365d"
>
  <template #caption>Join Us</template>
  <template #title>Be Part of the Change</template>
  <template #default>
    <p>Your contribution makes a difference in the lives of students across Africa.</p>
  </template>
</MuiBlurredBackgroundBanner>`,
      },
    },
  },
}
