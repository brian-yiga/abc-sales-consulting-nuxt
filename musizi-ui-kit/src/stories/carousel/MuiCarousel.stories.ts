import type { Meta, StoryObj } from '@storybook/vue3'
import MuiCarousel from '@/components/carousel/MuiCarousel.vue'
import MuiCarouselItem from '@/components/carousel/MuiCarouselItem.vue'

const meta: Meta<typeof MuiCarousel> = {
  title: 'Components/MuiCarousel',
  component: MuiCarousel,
  tags: ['autodocs'],
  argTypes: {
    autoplay: {
      control: 'boolean',
      description: 'Enable autoplay - automatically advances slides',
    },
    autoplayDelay: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Autoplay delay in milliseconds',
    },
    autoscroll: {
      control: 'boolean',
      description: 'Enable continuous auto-scrolling instead of snapping',
    },
    autoscrollSpeed: {
      control: { type: 'number', min: 0.5, max: 5, step: 0.5 },
      description: 'Auto-scroll speed',
    },
    showArrows: {
      control: 'boolean',
      description: 'Show navigation arrows',
    },
    showDots: {
      control: 'boolean',
      description: 'Show navigation dots',
    },
    loop: {
      control: 'boolean',
      description: 'Enable looping',
    },
    containerClass: {
      control: 'text',
      description: 'Classes to apply to the carousel container (e.g., "gap-4 md:gap-8")',
    },
  },
  decorators: [
    () => ({
      template: '<div style="max-width: 1200px; margin: 0 auto;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// Sample images for stories
const sampleImages = [
  {
    src: 'https://placehold.co/1200x600/C10230/FFFFFF?text=Slide+1',
    alt: 'Slide 1',
  },
  {
    src: 'https://placehold.co/1200x600/75308C/FFFFFF?text=Slide+2',
    alt: 'Slide 2',
  },
  {
    src: 'https://placehold.co/1200x600/54565A/FFFFFF?text=Slide+3',
    alt: 'Slide 3',
  },
  {
    src: 'https://placehold.co/1200x600/1E3A5F/FFFFFF?text=Slide+4',
    alt: 'Slide 4',
  },
]

export const Default: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      return { args, sampleImages }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 400px;">
        <MuiCarouselItem
          v-for="(image, index) in sampleImages"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          variant="image"
        />
      </MuiCarousel>
    `,
  }),
  args: {
    showArrows: true,
    showDots: true,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel show-arrows show-dots loop>
  <MuiCarouselItem
    src="/images/slide-1.jpg"
    alt="Slide 1"
    variant="image"
  />
  <MuiCarouselItem
    src="/images/slide-2.jpg"
    alt="Slide 2"
    variant="image"
  />
  <MuiCarouselItem
    src="/images/slide-3.jpg"
    alt="Slide 3"
    variant="image"
  />
</MuiCarousel>`,
      },
    },
  },
}

export const WithContentOverlay: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      const slides = [
        {
          src: 'https://placehold.co/1200x600/C10230/FFFFFF',
          alt: 'Welcome slide',
          title: 'Welcome to Musizi University',
          description: 'Empowering minds, shaping futures. Join our community of learners and leaders.',
          cta: { label: 'Learn More', href: '/about' },
        },
        {
          src: 'https://placehold.co/1200x600/75308C/FFFFFF',
          alt: 'Programs slide',
          title: 'World-Class Programs',
          description: 'Discover our diverse range of undergraduate and graduate programs designed for success.',
          cta: { label: 'View Programs', href: '/programs' },
        },
        {
          src: 'https://placehold.co/1200x600/54565A/FFFFFF',
          alt: 'Campus slide',
          title: 'Modern Campus Facilities',
          description: 'State-of-the-art facilities designed to support your academic journey.',
          cta: { label: 'Take a Tour', href: '/campus' },
        },
      ]
      return { args, slides }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 500px;">
        <MuiCarouselItem
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.src"
          :alt="slide.alt"
          :title="slide.title"
          :description="slide.description"
          :cta="slide.cta"
          variant="content"
        />
      </MuiCarousel>
    `,
  }),
  args: {
    showArrows: true,
    showDots: true,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel show-arrows show-dots loop>
  <MuiCarouselItem
    src="/images/hero-1.jpg"
    alt="Welcome slide"
    title="Welcome to Musizi University"
    description="Empowering minds, shaping futures."
    :cta="{ label: 'Learn More', href: '/about' }"
    variant="content"
  />
  <MuiCarouselItem
    src="/images/hero-2.jpg"
    alt="Programs slide"
    title="World-Class Programs"
    description="Discover our diverse range of programs."
    :cta="{ label: 'View Programs', href: '/programs' }"
    variant="content"
  />
</MuiCarousel>`,
      },
    },
  },
}

export const WithButtonOverlay: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      const slides = [
        {
          src: 'https://placehold.co/1200x600/C10230/FFFFFF',
          alt: 'Admissions',
          cta: { label: 'Apply Now', href: '/admissions' },
        },
        {
          src: 'https://placehold.co/1200x600/75308C/FFFFFF',
          alt: 'Events',
          cta: { label: 'View Events', href: '/events' },
        },
        {
          src: 'https://placehold.co/1200x600/54565A/FFFFFF',
          alt: 'Contact',
          cta: { label: 'Contact Us', href: '/contact' },
        },
      ]
      return { args, slides }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 400px;">
        <MuiCarouselItem
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.src"
          :alt="slide.alt"
          :cta="slide.cta"
          variant="button"
        />
      </MuiCarousel>
    `,
  }),
  args: {
    showArrows: true,
    showDots: true,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel show-arrows show-dots loop>
  <MuiCarouselItem
    src="/images/cta-1.jpg"
    alt="Admissions"
    :cta="{ label: 'Apply Now', href: '/admissions' }"
    variant="button"
  />
  <MuiCarouselItem
    src="/images/cta-2.jpg"
    alt="Events"
    :cta="{ label: 'View Events', href: '/events' }"
    variant="button"
  />
</MuiCarousel>`,
      },
    },
  },
}

export const Autoplay: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      return { args, sampleImages }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 400px;">
        <MuiCarouselItem
          v-for="(image, index) in sampleImages"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          variant="image"
        />
      </MuiCarousel>
    `,
  }),
  args: {
    autoplay: true,
    autoplayDelay: 3000,
    showArrows: true,
    showDots: true,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel autoplay :autoplay-delay="3000" show-arrows show-dots loop>
  <MuiCarouselItem
    src="/images/slide-1.jpg"
    alt="Slide 1"
    variant="image"
  />
  <MuiCarouselItem
    src="/images/slide-2.jpg"
    alt="Slide 2"
    variant="image"
  />
</MuiCarousel>`,
      },
    },
  },
}

export const AutoScroll: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      return { args, sampleImages }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 400px;">
        <MuiCarouselItem
          v-for="(image, index) in sampleImages"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          variant="image"
        />
      </MuiCarousel>
    `,
  }),
  args: {
    autoscroll: true,
    autoscrollSpeed: 1,
    showArrows: false,
    showDots: true,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel autoscroll :autoscroll-speed="1" show-dots loop>
  <MuiCarouselItem
    src="/images/slide-1.jpg"
    alt="Slide 1"
    variant="image"
  />
  <MuiCarouselItem
    src="/images/slide-2.jpg"
    alt="Slide 2"
    variant="image"
  />
</MuiCarousel>`,
      },
    },
  },
}

export const NoNavigation: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      return { args, sampleImages }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 400px;">
        <MuiCarouselItem
          v-for="(image, index) in sampleImages"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          variant="image"
        />
      </MuiCarousel>
    `,
  }),
  args: {
    showArrows: false,
    showDots: false,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel :show-arrows="false" :show-dots="false" loop>
  <MuiCarouselItem
    src="/images/slide-1.jpg"
    alt="Slide 1"
    variant="image"
  />
  <MuiCarouselItem
    src="/images/slide-2.jpg"
    alt="Slide 2"
    variant="image"
  />
</MuiCarousel>`,
      },
    },
  },
}

export const MultipleItemsPerView: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      const cards = [
        { src: 'https://placehold.co/400x300/C10230/FFFFFF?text=Card+1', alt: 'Card 1' },
        { src: 'https://placehold.co/400x300/75308C/FFFFFF?text=Card+2', alt: 'Card 2' },
        { src: 'https://placehold.co/400x300/54565A/FFFFFF?text=Card+3', alt: 'Card 3' },
        { src: 'https://placehold.co/400x300/1E3A5F/FFFFFF?text=Card+4', alt: 'Card 4' },
        { src: 'https://placehold.co/400x300/2D5016/FFFFFF?text=Card+5', alt: 'Card 5' },
        { src: 'https://placehold.co/400x300/8B4513/FFFFFF?text=Card+6', alt: 'Card 6' },
      ]
      return { args, cards }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 300px;">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="basis-[calc(33.333%-11px)] shrink-0"
        >
          <MuiCarouselItem
            :src="card.src"
            :alt="card.alt"
            variant="image"
          />
        </div>
      </MuiCarousel>
    `,
  }),
  args: {
    showArrows: true,
    showDots: true,
    loop: true,
    containerClass: 'gap-4',
  },
  parameters: {
    docs: {
      source: {
        code: `<!-- For multiple items per view, wrap items and use containerClass for gap -->
<MuiCarousel show-arrows show-dots loop container-class="items-start flex-row -ms-2">
  <div class="shrink-0 ps-2 basis-1/3">
    <MuiCarouselItem src="/images/card-1.jpg" alt="Card 1" variant="image" />
  </div>
  <div class="shrink-0 ps-2 basis-1/3">
    <MuiCarouselItem src="/images/card-2.jpg" alt="Card 2" variant="image" />
  </div>
  <div class="shrink-0 ps-2 basis-1/3">
    <MuiCarouselItem src="/images/card-3.jpg" alt="Card 3" variant="image" />
  </div>
</MuiCarousel>`,
      },
    },
  },
}

export const MixedVariants: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      return { args }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 500px;">
        <MuiCarouselItem
          src="https://placehold.co/1200x600/C10230/FFFFFF"
          alt="Image only slide"
          variant="image"
        />
        <MuiCarouselItem
          src="https://placehold.co/1200x600/75308C/FFFFFF"
          alt="Content slide"
          title="Featured Content"
          description="This slide has a title, description, and a call-to-action button."
          :cta="{ label: 'Learn More', href: '#' }"
          variant="content"
        />
        <MuiCarouselItem
          src="https://placehold.co/1200x600/54565A/FFFFFF"
          alt="Button slide"
          :cta="{ label: 'Click Here', href: '#' }"
          variant="button"
        />
      </MuiCarousel>
    `,
  }),
  args: {
    showArrows: true,
    showDots: true,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel show-arrows show-dots loop>
  <!-- Image only variant -->
  <MuiCarouselItem
    src="/images/slide-1.jpg"
    alt="Image only slide"
    variant="image"
  />

  <!-- Content variant with title, description, and CTA -->
  <MuiCarouselItem
    src="/images/slide-2.jpg"
    alt="Content slide"
    title="Featured Content"
    description="This slide has a title, description, and a CTA button."
    :cta="{ label: 'Learn More', href: '/about' }"
    variant="content"
  />

  <!-- Button variant with just a CTA -->
  <MuiCarouselItem
    src="/images/slide-3.jpg"
    alt="Button slide"
    :cta="{ label: 'Click Here', href: '/action' }"
    variant="button"
  />
</MuiCarousel>`,
      },
    },
  },
}

export const CustomContent: Story = {
  render: (args) => ({
    components: { MuiCarousel, MuiCarouselItem },
    setup() {
      return { args }
    },
    template: `
      <MuiCarousel v-bind="args" style="height: 500px;">
        <!-- Custom variant with full control -->
        <MuiCarouselItem variant="custom">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #C10230, #75308C); display: flex; align-items: center; justify-content: center; color: white;">
            <div style="text-align: center; padding: 2rem;">
              <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">Custom Slide</h2>
              <p style="font-size: 1.125rem; max-width: 600px;">This slide uses the custom variant for complete control over the content.</p>
            </div>
          </div>
        </MuiCarouselItem>

        <!-- Slot usage with content variant -->
        <MuiCarouselItem
          variant="content"
          title="Slot with Overlay"
          description="This slide uses a slot for the image while keeping the content overlay."
          :cta="{ label: 'Learn More', href: '#' }"
        >
          <img
            src="https://placehold.co/1200x600/1E3A5F/FFFFFF?text=Custom+Image"
            alt="Custom image"
            class="mui-carousel-item__image"
          />
        </MuiCarouselItem>

        <!-- Another custom slide -->
        <MuiCarouselItem variant="custom">
          <div style="width: 100%; height: 100%; background: #54565A; display: flex; align-items: center; justify-content: center;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem; max-width: 900px; color: white;">
              <div style="display: flex; flex-direction: column; justify-content: center;">
                <h3 style="font-size: 1.75rem; font-weight: bold; margin-bottom: 1rem;">Split Layout</h3>
                <p>Custom variant allows any layout - text, images, videos, or interactive content.</p>
              </div>
              <img
                src="https://placehold.co/400x300/C10230/FFFFFF?text=Image"
                alt="Side image"
                style="border-radius: 8px; width: 100%; height: auto;"
              />
            </div>
          </div>
        </MuiCarouselItem>
      </MuiCarousel>
    `,
  }),
  args: {
    showArrows: true,
    showDots: true,
    loop: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiCarousel show-arrows show-dots loop>
  <!-- Custom variant: full control via slot -->
  <MuiCarouselItem variant="custom">
    <div class="my-custom-slide">
      <h2>Custom Slide</h2>
      <p>Any content you want</p>
    </div>
  </MuiCarouselItem>

  <!-- Slot with content variant: custom image, built-in overlay -->
  <MuiCarouselItem
    variant="content"
    title="Slot with Overlay"
    description="Custom image with built-in content overlay"
    :cta="{ label: 'Learn More', href: '#' }"
  >
    <NuxtImg
      src="/images/hero.jpg"
      alt="Hero image"
      class="mui-carousel-item__image"
    />
  </MuiCarouselItem>

  <!-- Custom variant with complex layout -->
  <MuiCarouselItem variant="custom">
    <div class="split-layout">
      <div class="text-content">
        <h3>Split Layout</h3>
        <p>Any layout is possible</p>
      </div>
      <NuxtImg src="/images/side.jpg" alt="Side image" />
    </div>
  </MuiCarouselItem>
</MuiCarousel>`,
      },
    },
  },
}
