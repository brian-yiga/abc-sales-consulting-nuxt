import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiFooterCredits } from '@components/footer'

const meta = {
  title: 'Layout/MuiFooterCredits',
  component: MuiFooterCredits,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Footer credits section displaying copyright notice and designer attribution.

## Usage

A simple two-column footer section with:
- Copyright notice on the left
- Designer credit link on the right

## Customization

Use the \`containerClasses\` prop to customize text color and padding.
`,
      },
    },
  },
  argTypes: {
    containerClasses: {
      control: 'object',
      description: 'Array of CSS classes to apply to the container (e.g., text colors, padding)',
    },
  },
} satisfies Meta<typeof MuiFooterCredits>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    containerClasses: ['text-white', 'py-7'],
  },
  decorators: [
    () => ({
      template: '<div class="bg-maroon"><story /></div>',
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default styling with white text and vertical padding, shown on maroon background.',
      },
    },
  },
}

export const DarkText: Story = {
  args: {
    containerClasses: ['text-zinc-800', 'py-7'],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'With dark text for use on light backgrounds.',
      },
    },
  },
}

export const CustomPadding: Story = {
  args: {
    containerClasses: ['text-white', 'py-4'],
  },
  decorators: [
    () => ({
      template: '<div class="bg-purple"><story /></div>',
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'With reduced padding on a purple background.',
      },
    },
  },
}
