import type { Meta, StoryObj } from '@storybook/vue3'
import MuiTopStripBanner from '@components/banner/MuiTopStripBanner.vue'
import type { ResponsiveImage } from '@components/banner/types'

const meta: Meta<typeof MuiTopStripBanner> = {
  title: 'Banners/MuiTopStripBanner',
  component: MuiTopStripBanner,
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'object',
      description: 'Responsive image configuration',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Caption box theme',
    },
    compact: {
      control: 'boolean',
      description: 'Use compact caption height',
    },
  },
}

export default meta

type Story = StoryObj<typeof MuiTopStripBanner>

const defaultImage: ResponsiveImage = {
  small: '/img/banners/header-leadership-small.jpg',
  medium: '/img/banners/header-leadership-medium.jpg',
  large: '/img/banners/header-leadership-large.jpg',
  alt: 'Our Leadership at Musizi University',
}

export const Default: Story = {
  args: {
    image: defaultImage,
    theme: 'light',
    compact: false,
  },
  render: (args) => ({
    components: { MuiTopStripBanner },
    setup() {
      return { args }
    },
    template: `
      <MuiTopStripBanner v-bind="args">
        <template #caption>An Experienced Team</template>
        <template #title>Leadership</template>
        <template #default>
          <p>Our leadership team is comprised of experienced professionals with a mix of academic and business backgrounds and a proven track record of making an impact.</p>
        </template>
      </MuiTopStripBanner>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTopStripBanner
  :image="{ small: '/images/header-sm.jpg', large: '/images/header-lg.jpg', alt: 'Leadership' }"
  theme="light"
>
  <template #caption>An Experienced Team</template>
  <template #title>Leadership</template>
  <template #default>
    <p>Our leadership team is comprised of experienced professionals.</p>
  </template>
</MuiTopStripBanner>`,
      },
    },
  },
}

export const DarkTheme: Story = {
  args: {
    image: defaultImage,
    theme: 'dark',
    compact: false,
  },
  render: (args) => ({
    components: { MuiTopStripBanner },
    setup() {
      return { args }
    },
    template: `
      <MuiTopStripBanner v-bind="args">
        <template #caption>Our Story</template>
        <template #title>About Us</template>
        <template #default>
          <p>Learn about our mission and vision for the future of education.</p>
        </template>
      </MuiTopStripBanner>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTopStripBanner
  :image="{ small: '/images/header-sm.jpg', large: '/images/header-lg.jpg', alt: 'About Us' }"
  theme="dark"
>
  <template #caption>Our Story</template>
  <template #title>About Us</template>
  <template #default>
    <p>Learn about our mission and vision for the future of education.</p>
  </template>
</MuiTopStripBanner>`,
      },
    },
  },
}

export const Compact: Story = {
  args: {
    image: defaultImage,
    theme: 'light',
    compact: true,
  },
  render: (args) => ({
    components: { MuiTopStripBanner },
    setup() {
      return { args }
    },
    template: `
      <MuiTopStripBanner v-bind="args">
        <template #caption>Quick Info</template>
        <template #title>Contact</template>
        <template #default>
          <p>Get in touch with us today.</p>
        </template>
      </MuiTopStripBanner>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTopStripBanner
  :image="{ small: '/images/header-sm.jpg', large: '/images/header-lg.jpg', alt: 'Contact' }"
  theme="light"
  compact
>
  <template #caption>Quick Info</template>
  <template #title>Contact</template>
  <template #default>
    <p>Get in touch with us today.</p>
  </template>
</MuiTopStripBanner>`,
      },
    },
  },
}
