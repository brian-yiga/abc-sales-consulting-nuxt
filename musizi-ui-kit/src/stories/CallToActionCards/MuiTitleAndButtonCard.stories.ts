import type { Meta, StoryObj } from '@storybook/vue3';
import MuiTitleAndButtonCard from '@/components/CallToActionCards/MuiTitleAndButtonCard.vue';

const meta: Meta<typeof MuiTitleAndButtonCard> = {
  title: 'Cards/MuiTitleAndButtonCard',
  component: MuiTitleAndButtonCard,
  tags: ['autodocs'],
  argTypes: {
    url: { control: 'text', description: 'The URL for the button' },
    default: { control: 'text', description: 'Content to be passed into the default slot (the title)' },
  },
};

export default meta;

type Story = StoryObj<typeof MuiTitleAndButtonCard>;

export const Default: Story = {
  args: {
    default: 'Are you ready to step up your family business?',
    url: '#',
  },
};

export const CustomTitle: Story = {
  args: {
    default: 'Limited Spots Available - Sign Up Today!',
    url: '#',
  },
};

export const CustomURL: Story = {
  args: {
    default: 'Learn More and Register',
    url: 'https://example.com/events',
  },
};
