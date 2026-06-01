import type { Meta, StoryObj } from '@storybook/vue3'
import MuiPageBannerText from '@components/banner/MuiPageBannerText.vue'
import type { ResponsiveImage } from '@components/banner/types'

const meta: Meta<typeof MuiPageBannerText> = {
  title: 'Banners/MuiPageBannerText',
  component: MuiPageBannerText,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: {
      control: 'object',
      description: 'Responsive background image configuration',
    },
    overlayColor: {
      control: 'text',
      description: 'Background overlay color (Tailwind color name)',
    },
    showScrollIndicator: {
      control: 'boolean',
      description: 'Show scroll indicator on mobile',
    },
  },
}

export default meta

type Story = StoryObj<typeof MuiPageBannerText>

const defaultBackgroundImage: ResponsiveImage = {
  small: '/img/banners/donate-small.jpg',
  medium: '/img/banners/donate-medium.jpg',
  large: '/img/banners/donate-large.jpg',
  alt: 'Donate banner',
}

export const Default: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    overlayColor: 'maroon',
    showScrollIndicator: true,
  },
  render: (args) => ({
    components: { MuiPageBannerText },
    setup() {
      return { args }
    },
    template: `
      <MuiPageBannerText v-bind="args">
        <template #caption>Donate</template>
        <template #title>Empower. Engage. Elevate: Donate and Drive Change</template>
        <template #subcaption>Donate now and be a part of the Musizi University legacy!</template>
        <template #default>
          <p>Your contribution makes a difference in the lives of students across Africa.</p>
        </template>
      </MuiPageBannerText>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiPageBannerText
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  overlay-color="maroon"
  show-scroll-indicator
>
  <template #caption>Donate</template>
  <template #title>Empower. Engage. Elevate: Donate and Drive Change</template>
  <template #subcaption>Donate now and be a part of the Musizi University legacy!</template>
  <template #default>
    <p>Your contribution makes a difference in the lives of students across Africa.</p>
  </template>
</MuiPageBannerText>`,
      },
    },
  },
}

export const WithoutContent: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    overlayColor: 'maroon',
  },
  render: (args) => ({
    components: { MuiPageBannerText },
    setup() {
      return { args }
    },
    template: `
      <MuiPageBannerText v-bind="args">
        <template #caption>About Us</template>
        <template #title>Building Tomorrow's Leaders</template>
      </MuiPageBannerText>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiPageBannerText
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  overlay-color="maroon"
>
  <template #caption>About Us</template>
  <template #title>Building Tomorrow's Leaders</template>
</MuiPageBannerText>`,
      },
    },
  },
}

export const WithSubCaption: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
  },
  render: (args) => ({
    components: { MuiPageBannerText },
    setup() {
      return { args }
    },
    template: `
      <MuiPageBannerText v-bind="args">
        <template #caption>Programs</template>
        <template #title>Graduate Programs</template>
        <template #subcaption>Explore our world-class graduate education</template>
      </MuiPageBannerText>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiPageBannerText
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
>
  <template #caption>Programs</template>
  <template #title>Graduate Programs</template>
  <template #subcaption>Explore our world-class graduate education</template>
</MuiPageBannerText>`,
      },
    },
  },
}

export const NoScrollIndicator: Story = {
  args: {
    backgroundImage: defaultBackgroundImage,
    showScrollIndicator: false,
  },
  render: (args) => ({
    components: { MuiPageBannerText },
    setup() {
      return { args }
    },
    template: `
      <MuiPageBannerText v-bind="args">
        <template #caption>Contact</template>
        <template #title>Get in Touch</template>
        <template #default>
          <p>We'd love to hear from you. Reach out to learn more about our programs.</p>
        </template>
      </MuiPageBannerText>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiPageBannerText
  :background-image="{ small: '/images/banner-sm.jpg', large: '/images/banner.jpg', alt: 'Banner' }"
  :show-scroll-indicator="false"
>
  <template #caption>Contact</template>
  <template #title>Get in Touch</template>
  <template #default>
    <p>We'd love to hear from you. Reach out to learn more about our programs.</p>
  </template>
</MuiPageBannerText>`,
      },
    },
  },
}
