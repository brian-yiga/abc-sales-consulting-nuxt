import type { Meta, StoryObj } from '@storybook/vue3'
import MuiProfileCard from '@/components/textWithImage/MuiProfileCard.vue'

const meta: Meta<typeof MuiProfileCard> = {
  title: 'Cards/MuiProfileCard',
  component: MuiProfileCard,
  tags: ['autodocs'],
  argTypes: {
    imgSrc: {
      control: 'text',
      description: 'URL or path to the profile image',
    },
    imgAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    title: {
      control: 'text',
      description: 'Name or title of the person',
    },
    description: {
      control: 'text',
      description: 'Bio or description text',
    },
    url: {
      control: 'text',
      description: 'Optional URL to link to (makes image and button clickable)',
    },
    buttonText: {
      control: 'text',
      description: 'Text for the action button (only shown if url is provided)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imgSrc: 'https://placehold.co/300x245',
    imgAlt: 'Profile photo',
    title: 'Jane Doe',
    description: 'Jane is an experienced professional with expertise in her field. She brings over 15 years of experience to the team.',
    url: '/team/jane-doe',
    buttonText: 'Read more',
  },
}

export const WithoutLink: Story = {
  args: {
    imgSrc: 'https://placehold.co/300x245',
    imgAlt: 'Profile photo',
    title: 'John Smith',
    description: 'John is a dedicated team member who contributes to the organization\'s success.',
  },
}

export const WithCustomSlot: Story = {
  render: (args) => ({
    components: { MuiProfileCard },
    setup() {
      return { args }
    },
    template: `
      <MuiProfileCard v-bind="args">
        <div class="flex gap-2 mt-4">
          <a href="mailto:jane@example.com" class="underline">Email</a>
          <a href="https://linkedin.com" class="underline">LinkedIn</a>
        </div>
      </MuiProfileCard>
    `,
  }),
  args: {
    imgSrc: 'https://placehold.co/300x245',
    imgAlt: 'Profile photo',
    title: 'Jane Doe',
    description: 'Contact Jane through her social links below.',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiProfileCard
  img-src="/images/profile.jpg"
  img-alt="Profile photo"
  title="Jane Doe"
  description="Contact Jane through her social links below."
>
  <div class="flex gap-2 mt-4">
    <a href="mailto:jane@example.com" class="underline">Email</a>
    <a href="https://linkedin.com" class="underline">LinkedIn</a>
  </div>
</MuiProfileCard>`,
      },
    },
  },
}

export const LongDescription: Story = {
  args: {
    imgSrc: 'https://placehold.co/300x245',
    imgAlt: 'Profile photo',
    title: 'Dr. Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: '/team/sarah-johnson',
    buttonText: 'View full profile',
  },
}
