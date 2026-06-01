import type { Meta, StoryObj } from '@storybook/vue3'
import MuiCarouselItem from '@/components/carousel/MuiCarouselItem.vue'

const meta: Meta<typeof MuiCarouselItem> = {
  title: 'Components/MuiCarouselItem',
  component: MuiCarouselItem,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['image', 'content', 'button', 'custom'],
      description:
        'The variant of the carousel item. Use "custom" for full control via slot.',
    },
    src: {
      control: 'text',
      description: 'Image source URL (not required for custom variant)',
    },
    alt: {
      control: 'text',
      description: 'Image alt text for accessibility (not required for custom variant)',
    },
    title: {
      control: 'text',
      description: 'Title text (for content variant)',
    },
    description: {
      control: 'text',
      description: 'Description text (for content variant)',
    },
    cta: {
      control: 'object',
      description: 'Call-to-action button (for content and button variants)',
    },
  },
  decorators: [
    () => ({
      template: '<div style="max-width: 800px; height: 400px;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const ImageOnly: Story = {
  args: {
    variant: 'image',
    src: 'https://placehold.co/1200x600/C10230/FFFFFF?text=Image+Variant',
    alt: 'Sample image',
  },
}

export const WithContent: Story = {
  args: {
    variant: 'content',
    src: 'https://placehold.co/1200x600/75308C/FFFFFF',
    alt: 'Content slide',
    title: 'Welcome to Musizi University',
    description:
      'Empowering minds, shaping futures. Join our community of learners and leaders dedicated to excellence.',
    cta: {
      label: 'Learn More',
      href: '/about',
    },
  },
}

export const WithButtonOnly: Story = {
  args: {
    variant: 'button',
    src: 'https://placehold.co/1200x600/54565A/FFFFFF',
    alt: 'Button slide',
    cta: {
      label: 'Apply Now',
      href: '/admissions',
    },
  },
}

export const ContentWithoutCta: Story = {
  args: {
    variant: 'content',
    src: 'https://placehold.co/1200x600/1E3A5F/FFFFFF',
    alt: 'Content without CTA',
    title: 'Our Mission',
    description:
      'To provide quality education that transforms lives and builds communities through knowledge, innovation, and service.',
  },
}

export const ContentTitleOnly: Story = {
  args: {
    variant: 'content',
    src: 'https://placehold.co/1200x600/2D5016/FFFFFF',
    alt: 'Title only slide',
    title: 'Excellence in Education',
    cta: {
      label: 'Discover',
      href: '/programs',
    },
  },
}

/**
 * The custom variant gives you full control over the carousel item content via
 * the default slot. This is useful when you need to use custom image components
 * like NuxtImg, or want completely custom content.
 */
export const CustomVariant: Story = {
  render: () => ({
    components: { MuiCarouselItem },
    template: `
      <MuiCarouselItem variant="custom">
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #C10230, #75308C); display: flex; align-items: center; justify-content: center; color: white;">
          <div style="text-align: center; padding: 2rem;">
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">Custom Content</h2>
            <p>This slide uses the custom variant with completely custom HTML content.</p>
          </div>
        </div>
      </MuiCarouselItem>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<!-- Full control with custom variant -->
<MuiCarouselItem variant="custom">
  <NuxtImg
    src="/images/hero.jpg"
    alt="Hero image"
    class="mui-carousel-item__image"
  />
</MuiCarouselItem>

<!-- Or any custom content -->
<MuiCarouselItem variant="custom">
  <div class="my-custom-slide">
    <h2>Custom Content</h2>
    <p>Any HTML content you want</p>
  </div>
</MuiCarouselItem>`,
      },
    },
  },
}

/**
 * You can also use slots with the existing variants to replace just the image
 * while keeping the overlay content. This is useful when you want to use
 * NuxtImg or other custom image components but still use the built-in overlays.
 */
export const SlotWithContentVariant: Story = {
  render: () => ({
    components: { MuiCarouselItem },
    template: `
      <MuiCarouselItem
        variant="content"
        title="Custom Image Source"
        description="This slide uses a slot to provide a custom image element while keeping the content overlay."
        :cta="{ label: 'Learn More', href: '#' }"
      >
        <img
          src="https://placehold.co/1200x600/1E3A5F/FFFFFF?text=Custom+Image+Element"
          alt="Custom image"
          class="mui-carousel-item__image"
        />
      </MuiCarouselItem>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<!-- Use slot to provide custom image with content variant -->
<MuiCarouselItem
  variant="content"
  title="Custom Image Source"
  description="Use NuxtImg or any custom image component"
  :cta="{ label: 'Learn More', href: '#' }"
>
  <NuxtImg
    src="/images/hero.jpg"
    alt="Hero image"
    class="mui-carousel-item__image"
    loading="lazy"
    placeholder
  />
</MuiCarouselItem>`,
      },
    },
  },
}

/**
 * The slot also works with the button variant, allowing you to use custom
 * image components while keeping the button overlay.
 */
export const SlotWithButtonVariant: Story = {
  render: () => ({
    components: { MuiCarouselItem },
    template: `
      <MuiCarouselItem
        variant="button"
        :cta="{ label: 'Apply Now', href: '/admissions' }"
      >
        <img
          src="https://placehold.co/1200x600/8B4513/FFFFFF?text=Custom+Image+Element"
          alt="Custom image"
          class="mui-carousel-item__image"
        />
      </MuiCarouselItem>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<!-- Use slot to provide custom image with button variant -->
<MuiCarouselItem
  variant="button"
  :cta="{ label: 'Apply Now', href: '/admissions' }"
>
  <NuxtImg
    src="/images/cta-bg.jpg"
    alt="Call to action background"
    class="mui-carousel-item__image"
  />
</MuiCarouselItem>`,
      },
    },
  },
}
