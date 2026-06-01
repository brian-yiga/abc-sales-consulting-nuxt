import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiPattern } from '@components/pattern'

const meta = {
  title: 'Core/MuiPattern',
  component: MuiPattern,
  tags: ['autodocs'],
  argTypes: {
    strips: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Number of pattern strips to display',
    },
  },
} satisfies Meta<typeof MuiPattern>

export default meta
type Story = StoryObj<typeof meta>

export const SingleStrip: Story = {
  args: {
    strips: 1,
  },
}

export const DoubleStrip: Story = {
  args: {
    strips: 2,
  },
}

export const TripleStrip: Story = {
  args: {
    strips: 3,
  },
}

export const FiveStrips: Story = {
  args: {
    strips: 5,
  },
}
