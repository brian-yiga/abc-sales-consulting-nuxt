import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiNewsletterButtonLink } from '@components/newsletter'

const meta = {
  title: 'Other/MuiNewsletterButtonLink',
  component: MuiNewsletterButtonLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A simplified newsletter signup component that links to an external form. Uses a button instead of an embedded form for simpler integration.

## Usage

This component is ideal when you want to direct users to an external signup form rather than embedding the form directly on the page.
`,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text displayed above the description',
    },
    description: {
      control: 'text',
      description: 'The description text displayed below the title',
    },
    buttonLabel: {
      control: 'text',
      description: 'The label for the button',
    },
    buttonHref: {
      control: 'text',
      description: 'The URL the button links to (required)',
    },
  },
} satisfies Meta<typeof MuiNewsletterButtonLink>

export default meta
type Story = StoryObj<typeof meta>

const TEST_FORM_URL = 'https://example.com/newsletter-signup'

export const Default: Story = {
  args: {
    buttonHref: TEST_FORM_URL,
    class: 'bg-maroon p-8',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Default view with maroon background.',
      },
    },
  },
}

export const CustomText: Story = {
  args: {
    title: 'Join Our Community',
    description: 'Subscribe to receive the latest news and updates from our team.',
    buttonLabel: 'Sign Up Now',
    buttonHref: TEST_FORM_URL,
    class: 'bg-maroon p-8',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Example with custom title, description, and button label.',
      },
    },
  },
}

export const CustomBackground: Story = {
  args: {
    buttonHref: TEST_FORM_URL,
    class: 'bg-purple p-8',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Example with a custom purple background.',
      },
    },
  },
}
