import type { Meta, StoryObj } from '@storybook/vue3';
import MuiTextDateButtonCard from '@/components/CallToActionCards/MuiTextDateButtonCard.vue';

const meta: Meta<typeof MuiTextDateButtonCard> = {
  title: 'Cards/MuiTextDateButtonCard',
  component: MuiTextDateButtonCard,
  tags: ['autodocs'],
  argTypes: {
    article: {
      description: 'The article data object',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MuiTextDateButtonCard>;

const baseArticle = {
  title: 'Sample Article Title',
  description:
    'This is a sample description for the article card. It provides a brief overview of the content.',
  url: '',
  imgUrl: '',
  date: new Date(2024, 7, 21).toISOString(),
  isVideo: false,
};

export const Default: Story = {
  args: {
    article: baseArticle,
  },
};

export const WithVideo: Story = {
  args: {
    article: {
      ...baseArticle,
      title: 'Video Article',
      isVideo: true,
      url: 'https://www.example.com/video',
    },
  },
};

export const NoImage: Story = {
  args: {
    article: {
      ...baseArticle,
      imgUrl: '',
      title: 'Article Without Image',
      description: 'This article does not have an image.',
    },
  },
};
