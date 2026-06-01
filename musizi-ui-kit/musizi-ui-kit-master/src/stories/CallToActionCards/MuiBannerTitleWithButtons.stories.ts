import type { Meta, StoryObj } from '@storybook/vue3';
import MuiBannerTitleWithButtons from '@/components/CallToActionCards/MuiBannerTitleWithButtons.vue';

const meta: Meta<typeof MuiBannerTitleWithButtons> = {
  title: 'Banners/MuiBannerTitleWithButtons',
  component: MuiBannerTitleWithButtons,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MuiBannerTitleWithButtons>;

export const Default: Story = {
  args: {},
};
