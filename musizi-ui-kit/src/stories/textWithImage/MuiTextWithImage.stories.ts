import type { Meta, StoryObj } from '@storybook/vue3'
import MuiTextWithImage from '@/components/textWithImage/MuiTextWithImage.vue'

const sampleImage = {
  small: 'https://placehold.co/400x300',
  large: 'https://placehold.co/800x600',
}

const meta: Meta<typeof MuiTextWithImage> = {
  title: 'Content/MuiTextWithImage',
  component: MuiTextWithImage,
  tags: ['autodocs'],
  argTypes: {
    img: {
      control: 'object',
      description: 'Responsive image object with small and large URLs',
    },
    imgAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    imageIsRightPosition: {
      control: 'boolean',
      description: 'Position the image on the right side',
    },
    onlyHasVerticalLayout: {
      control: 'boolean',
      description: 'Use vertical (stacked) layout instead of side-by-side',
    },
    captionBackgroundColour: {
      control: 'select',
      options: ['white', 'red', 'maroon', 'slate'],
      description: 'Background colour for the caption area',
    },
    defaultTitleStyle: {
      control: 'select',
      options: ['bold', 'light'],
      description: 'Title style preset (bold: uppercase with font-bold, light: font-light)',
    },
    button: {
      control: 'object',
      description: 'Optional button with url, text, and variant',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <template #title>About Our Mission</template>
        <p>This is the content area where you can add any text, lists, or other HTML elements. The slot accepts any content you need to display alongside the image.</p>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Section image',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Section image"
>
  <template #title>About Our Mission</template>
  <p>This is the content area where you can add any text, lists, or other HTML elements.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const ImageRight: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <template #title>Our Vision</template>
        <p>When the image is positioned on the right, the text content appears first on desktop. This creates visual variety when alternating between sections.</p>
        <p class="mt-4">You can include multiple paragraphs and other content elements.</p>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Section image',
    imageIsRightPosition: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Section image"
  image-is-right-position
>
  <template #title>Our Vision</template>
  <p>When the image is positioned on the right, the text content appears first on desktop.</p>
  <p class="mt-4">You can include multiple paragraphs and other content elements.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const WithButton: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <template #title>Learn More</template>
        <p>This section includes a call-to-action button that links to another page.</p>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Section image',
    button: {
      url: '/learn-more',
      text: 'Discover More',
      variant: 'red-fill',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Section image"
  :button="{ url: '/learn-more', text: 'Discover More', variant: 'red-fill' }"
>
  <template #title>Learn More</template>
  <p>This section includes a call-to-action button that links to another page.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const MaroonBackground: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <template #title>Featured Story</template>
        <p class="text-white">With a maroon background, the text automatically becomes white for better contrast. This variant is great for highlighting important sections.</p>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Featured image',
    captionBackgroundColour: 'maroon',
    button: {
      url: '/read-more',
      text: 'Read More',
      variant: 'white-stroke',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Featured image"
  caption-background-colour="maroon"
  :button="{ url: '/read-more', text: 'Read More', variant: 'white-stroke' }"
>
  <template #title>Featured Story</template>
  <p class="text-white">With a maroon background, the text becomes white for better contrast.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const SlateBackground: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <template #title>Our History</template>
        <p class="text-white">The slate background provides a modern, professional look while maintaining readability.</p>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'History image',
    captionBackgroundColour: 'slate',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="History image"
  caption-background-colour="slate"
>
  <template #title>Our History</template>
  <p class="text-white">The slate background provides a modern, professional look.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const VerticalLayout: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <div class="max-w-2xl mx-auto">
        <MuiTextWithImage v-bind="args">
          <template #title>Stacked Layout</template>
          <p>When onlyHasVerticalLayout is true, the image and text stack vertically instead of side-by-side. This is useful for narrower containers or mobile-first designs.</p>
        </MuiTextWithImage>
      </div>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Vertical layout image',
    onlyHasVerticalLayout: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Vertical layout image"
  only-has-vertical-layout
>
  <template #title>Stacked Layout</template>
  <p>When onlyHasVerticalLayout is true, the image and text stack vertically.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const WithRichContent: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <template #title>Academic Programs</template>
        <p>Our programs are designed to provide comprehensive education:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li>Bachelor's degree programs</li>
          <li>Master's programs</li>
          <li>Professional certifications</li>
          <li>Continuing education</li>
        </ul>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Academic programs',
    button: {
      url: '/programs',
      text: 'View Programs',
      variant: 'black-stroke',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Academic programs"
  :button="{ url: '/programs', text: 'View Programs', variant: 'black-stroke' }"
>
  <template #title>Academic Programs</template>
  <p>Our programs are designed to provide comprehensive education:</p>
  <ul class="list-disc list-inside mt-4 space-y-2">
    <li>Bachelor's degree programs</li>
    <li>Master's programs</li>
    <li>Professional certifications</li>
    <li>Continuing education</li>
  </ul>
</MuiTextWithImage>`,
      },
    },
  },
}

export const NoTitle: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <p>This section has no title slot, so the heading element is not rendered. The content appears directly without a heading.</p>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Section without title',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Section without title"
>
  <p>This section has no title slot, so the heading element is not rendered.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const AlternatingLayout: Story = {
  render: () => ({
    components: { MuiTextWithImage },
    setup() {
      return { sampleImage }
    },
    template: `
      <div class="space-y-8">
        <MuiTextWithImage
          :img="sampleImage"
          img-alt="First section"
        >
          <template #title>First Section</template>
          <p>Content for the first section with image on the left.</p>
        </MuiTextWithImage>

        <MuiTextWithImage
          :img="sampleImage"
          img-alt="Second section"
          :image-is-right-position="true"
          caption-background-colour="maroon"
        >
          <template #title>Second Section</template>
          <p class="text-white">Content for the second section with image on the right and maroon background.</p>
        </MuiTextWithImage>

        <MuiTextWithImage
          :img="sampleImage"
          img-alt="Third section"
          :button="{ url: '/contact', text: 'Contact Us', variant: 'red-fill' }"
        >
          <template #title>Third Section</template>
          <p>Content for the third section with a call-to-action button.</p>
        </MuiTextWithImage>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-8">
  <MuiTextWithImage
    :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
    img-alt="First section"
  >
    <template #title>First Section</template>
    <p>Content for the first section with image on the left.</p>
  </MuiTextWithImage>

  <MuiTextWithImage
    :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
    img-alt="Second section"
    image-is-right-position
    caption-background-colour="maroon"
  >
    <template #title>Second Section</template>
    <p class="text-white">Content for the second section with image on the right.</p>
  </MuiTextWithImage>

  <MuiTextWithImage
    :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
    img-alt="Third section"
    :button="{ url: '/contact', text: 'Contact Us', variant: 'red-fill' }"
  >
    <template #title>Third Section</template>
    <p>Content for the third section with a call-to-action button.</p>
  </MuiTextWithImage>
</div>`,
      },
    },
  },
}

export const LightTitle: Story = {
  render: (args) => ({
    components: { MuiTextWithImage },
    setup() {
      return { args }
    },
    template: `
      <MuiTextWithImage v-bind="args">
        <template #title>Light Title Style</template>
        <p>This section uses the light title style with font-light instead of font-bold.</p>
      </MuiTextWithImage>
    `,
  }),
  args: {
    img: sampleImage,
    imgAlt: 'Light title example',
    defaultTitleStyle: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiTextWithImage
  :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
  img-alt="Light title example"
  default-title-style="light"
>
  <template #title>Light Title Style</template>
  <p>This section uses the light title style with font-light instead of font-bold.</p>
</MuiTextWithImage>`,
      },
    },
  },
}

export const AllButtonVariants: Story = {
  render: () => ({
    components: { MuiTextWithImage },
    setup() {
      return { sampleImage }
    },
    template: `
      <div class="space-y-8">
        <MuiTextWithImage
          :img="sampleImage"
          img-alt="Black stroke button"
          :button="{ url: '#', text: 'Black Stroke', variant: 'black-stroke' }"
        >
          <template #title>Black Stroke Button</template>
          <p>Default button variant with black outline.</p>
        </MuiTextWithImage>

        <MuiTextWithImage
          :img="sampleImage"
          img-alt="Red fill button"
          :image-is-right-position="true"
          :button="{ url: '#', text: 'Red Fill', variant: 'red-fill' }"
        >
          <template #title>Red Fill Button</template>
          <p>Solid red button for primary actions.</p>
        </MuiTextWithImage>

        <MuiTextWithImage
          :img="sampleImage"
          img-alt="White stroke button"
          caption-background-colour="maroon"
          :button="{ url: '#', text: 'White Stroke', variant: 'white-stroke' }"
        >
          <template #title>White Stroke Button</template>
          <p class="text-white">White outline button for dark backgrounds.</p>
        </MuiTextWithImage>

        <MuiTextWithImage
          :img="sampleImage"
          img-alt="White fill button"
          :image-is-right-position="true"
          caption-background-colour="slate"
          :button="{ url: '#', text: 'White Fill', variant: 'white-fill' }"
        >
          <template #title>White Fill Button</template>
          <p class="text-white">Solid white button for dark backgrounds.</p>
        </MuiTextWithImage>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-8">
  <!-- Black Stroke Button -->
  <MuiTextWithImage
    :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
    img-alt="Black stroke button"
    :button="{ url: '#', text: 'Black Stroke', variant: 'black-stroke' }"
  >
    <template #title>Black Stroke Button</template>
    <p>Default button variant with black outline.</p>
  </MuiTextWithImage>

  <!-- Red Fill Button -->
  <MuiTextWithImage
    :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
    img-alt="Red fill button"
    image-is-right-position
    :button="{ url: '#', text: 'Red Fill', variant: 'red-fill' }"
  >
    <template #title>Red Fill Button</template>
    <p>Solid red button for primary actions.</p>
  </MuiTextWithImage>

  <!-- White Stroke Button (on maroon background) -->
  <MuiTextWithImage
    :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
    img-alt="White stroke button"
    caption-background-colour="maroon"
    :button="{ url: '#', text: 'White Stroke', variant: 'white-stroke' }"
  >
    <template #title>White Stroke Button</template>
    <p class="text-white">White outline button for dark backgrounds.</p>
  </MuiTextWithImage>

  <!-- White Fill Button (on slate background) -->
  <MuiTextWithImage
    :img="{ small: '/images/small.jpg', large: '/images/large.jpg' }"
    img-alt="White fill button"
    image-is-right-position
    caption-background-colour="slate"
    :button="{ url: '#', text: 'White Fill', variant: 'white-fill' }"
  >
    <template #title>White Fill Button</template>
    <p class="text-white">Solid white button for dark backgrounds.</p>
  </MuiTextWithImage>
</div>`,
      },
    },
  },
}
