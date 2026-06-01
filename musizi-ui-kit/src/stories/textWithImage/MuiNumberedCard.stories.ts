import type { Meta, StoryObj } from '@storybook/vue3'
import MuiNumberedCard from '@/components/textWithImage/MuiNumberedCard.vue'

const meta: Meta<typeof MuiNumberedCard> = {
  title: 'Cards/MuiNumberedCard',
  component: MuiNumberedCard,
  tags: ['autodocs'],
  argTypes: {
    imgSrc: {
      control: 'text',
      description: 'URL or path to the card image',
    },
    imgAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    imagePosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the image relative to the content',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { MuiNumberedCard },
    setup() {
      return { args }
    },
    template: `
      <MuiNumberedCard v-bind="args">
        <p>This is the card content that appears below the title. It supports any HTML content through the default slot.</p>
      </MuiNumberedCard>
    `,
  }),
  args: {
    imgSrc: 'https://placehold.co/400x300',
    imgAlt: 'Card image',
    title: 'Feature Title',
    imagePosition: 'right',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiNumberedCard
  img-src="/images/card.jpg"
  img-alt="Card image"
  title="Feature Title"
  image-position="right"
>
  <p>This is the card content that appears below the title.</p>
</MuiNumberedCard>`,
      },
    },
  },
}

export const ImageLeft: Story = {
  render: (args) => ({
    components: { MuiNumberedCard },
    setup() {
      return { args }
    },
    template: `
      <MuiNumberedCard v-bind="args">
        <p>When imagePosition is set to "left", the image appears on the left side of the content.</p>
        <ul class="list-disc list-inside mt-2">
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
      </MuiNumberedCard>
    `,
  }),
  args: {
    imgSrc: 'https://placehold.co/400x300',
    imgAlt: 'Card image',
    title: 'Image on Left',
    imagePosition: 'left',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiNumberedCard
  img-src="/images/card.jpg"
  img-alt="Card image"
  title="Image on Left"
  image-position="left"
>
  <p>When imagePosition is set to "left", the image appears on the left side.</p>
  <ul class="list-disc list-inside mt-2">
    <li>Feature one</li>
    <li>Feature two</li>
    <li>Feature three</li>
  </ul>
</MuiNumberedCard>`,
      },
    },
  },
}

export const ImageRight: Story = {
  render: (args) => ({
    components: { MuiNumberedCard },
    setup() {
      return { args }
    },
    template: `
      <MuiNumberedCard v-bind="args">
        <p>The default position places the image on the right side, suitable for card grids.</p>
      </MuiNumberedCard>
    `,
  }),
  args: {
    imgSrc: 'https://placehold.co/400x300',
    imgAlt: 'Card image',
    title: 'Image on Right',
    imagePosition: 'right',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiNumberedCard
  img-src="/images/card.jpg"
  img-alt="Card image"
  title="Image on Right"
  image-position="right"
>
  <p>The default position places the image on the right side.</p>
</MuiNumberedCard>`,
      },
    },
  },
}

export const MultipleCards: Story = {
  render: () => ({
    components: { MuiNumberedCard },
    template: `
      <div class="flex flex-wrap gap-6">
        <MuiNumberedCard
          img-src="https://placehold.co/400x300"
          img-alt="Card 1"
          title="First Card"
        >
          <p>Content for the first card.</p>
        </MuiNumberedCard>
        <MuiNumberedCard
          img-src="https://placehold.co/400x300"
          img-alt="Card 2"
          title="Second Card"
        >
          <p>Content for the second card.</p>
        </MuiNumberedCard>
        <MuiNumberedCard
          img-src="https://placehold.co/400x300"
          img-alt="Card 3"
          title="Third Card"
        >
          <p>Content for the third card.</p>
        </MuiNumberedCard>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<div class="flex flex-wrap gap-6">
  <MuiNumberedCard img-src="/images/card1.jpg" img-alt="Card 1" title="First Card">
    <p>Content for the first card.</p>
  </MuiNumberedCard>
  <MuiNumberedCard img-src="/images/card2.jpg" img-alt="Card 2" title="Second Card">
    <p>Content for the second card.</p>
  </MuiNumberedCard>
  <MuiNumberedCard img-src="/images/card3.jpg" img-alt="Card 3" title="Third Card">
    <p>Content for the third card.</p>
  </MuiNumberedCard>
</div>`,
      },
    },
  },
}
