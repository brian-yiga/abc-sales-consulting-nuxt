import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiNewsletter } from '@components/newsletter'

const meta = {
  title: 'Other/MuiNewsletter',
  component: MuiNewsletter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Newsletter signup form with MailerLite integration. Uses container queries to automatically adapt layout based on available space.

## Finding your Form ID

The \`formId\` prop is required and must match your MailerLite embedded form. To find it:

1. Log in to your [MailerLite account](https://dashboard.mailerlite.com)
2. Navigate to **Forms** → **Embedded forms**
3. Select your form and click **Edit**
4. Look for the embed code snippet
5. Find the \`data-form\` attribute value (e.g., \`"zkmYYw"\`)

Example embed code from MailerLite:
\`\`\`html
<div class="ml-embedded" data-form="zkmYYw"></div>
\`\`\`

The value \`zkmYYw\` is your \`formId\`.
`,
      },
    },
  },
  argTypes: {
    formId: {
      control: 'text',
      description: 'The MailerLite embedded form ID (required)',
    },
    containerClasses: {
      control: 'object',
      description: 'Array of CSS classes to apply to the container (e.g., background colors)',
    },
  },
} satisfies Meta<typeof MuiNewsletter>

export default meta
type Story = StoryObj<typeof meta>

const TEST_FORM_ID = 'zkmYYw'

export const Default: Story = {
  args: {
    formId: TEST_FORM_ID,
    containerClasses: ['bg-maroon'],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Full width view with default maroon background. Displays horizontal layout when container is 700px or wider.',
      },
    },
  },
}

export const NarrowContainer: Story = {
  args: {
    formId: TEST_FORM_ID,
    containerClasses: ['bg-maroon'],
  },
  decorators: [
    () => ({
      template: '<div style="max-width: 400px;"><story /></div>',
    }),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'In a narrow container (400px), the form displays in vertical layout.',
      },
    },
  },
}

export const CustomBackground: Story = {
  args: {
    formId: TEST_FORM_ID,
    containerClasses: ['bg-purple'],
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Example with a custom purple background using the `containerClasses` prop.',
      },
    },
  },
}

export const NoBackground: Story = {
  args: {
    formId: TEST_FORM_ID,
    containerClasses: [],
  },
  decorators: [
    () => ({
      template: '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem;"><story /></div>',
    }),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'With an empty `containerClasses` array, the component has no background, allowing the parent to provide styling.',
      },
    },
  },
}
