import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiFooterContacts } from '@components/footer'

const meta = {
  title: 'Layout/MuiFooterContacts',
  component: MuiFooterContacts,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Footer contact information section with email, phone numbers, address, and a Google Maps link button.

## Usage

The component displays contact information for Musizi University Foundation with a responsive layout:
- On mobile: centered text with stacked content
- On desktop: two-column grid with contact info on left and map button on right

## Customization

Use the \`containerClasses\` prop to customize the container styling. The default classes provide a maroon background with white text and vertical padding.
`,
      },
    },
  },
  argTypes: {
    containerClasses: {
      control: 'object',
      description:
        'Array of CSS classes to apply to the container (e.g., background colors, text colors, padding)',
    },
  },
} satisfies Meta<typeof MuiFooterContacts>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    containerClasses: ['bg-maroon', 'text-white', 'py-11'],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default styling with maroon background, white text, and vertical padding.',
      },
    },
  },
}

export const CustomBackground: Story = {
  args: {
    containerClasses: ['bg-purple', 'text-white', 'py-11'],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Example with a purple background using the `containerClasses` prop.',
      },
    },
  },
}

export const NoBackground: Story = {
  args: {
    containerClasses: ['text-zinc-800', 'py-11'],
  },
  decorators: [
    () => ({
      template:
        '<div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);"><story /></div>',
    }),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Without a background color, allowing the parent to provide styling. Note the text color is changed to dark for visibility.',
      },
    },
  },
}
