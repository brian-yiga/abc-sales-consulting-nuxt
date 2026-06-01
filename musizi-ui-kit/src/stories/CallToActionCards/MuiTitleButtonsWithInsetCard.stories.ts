import type { Meta, StoryObj } from '@storybook/vue3';
import MuiTitleButtonsWithInsetCard from '@/components/CallToActionCards/MuiTitleButtonsWithInsetCard.vue';

const meta: Meta<typeof MuiTitleButtonsWithInsetCard> = {
  title: 'Cards/MuiTitleButtonsWithInsetCard',
  component: MuiTitleButtonsWithInsetCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MuiTitleButtonsWithInsetCard>;

export const Default: Story = {
  args: {},
};
