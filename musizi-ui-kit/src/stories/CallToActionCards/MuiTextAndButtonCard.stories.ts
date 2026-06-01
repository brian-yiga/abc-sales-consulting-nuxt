import type { Meta, StoryObj } from '@storybook/vue3'
import MuiTextAndButtonCard from '@/components/CallToActionCards/MuiTextAndButtonCard.vue'

const meta: Meta<typeof MuiTextAndButtonCard> = {
  title: 'Cards/MuiTextAndButtonCard',
  component: MuiTextAndButtonCard,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text',
      description: 'The main text content of the card (uses the default slot)',
    },
  },
}

export default meta

type Story = StoryObj<typeof MuiTextAndButtonCard>

const defaultText = `
By supporting the development of these structures, you will help create a thriving environment that nurtures every aspect of our students' university experience. We are dedicated to empowering our students to become the Musizi trees of their communities.

Your support in developing these campus aspects will directly impact the quality of education we provide, empowering our students to reach their full potential. Join us in shaping the future of our university and enabling our students to make a meaningful difference in the world.
`

export const Default: Story = {
  args: {
    default: defaultText,
  },
}

export const ShortText: Story = {
  args: {
    default: 'Support our cause and donate today!',
  },
}
