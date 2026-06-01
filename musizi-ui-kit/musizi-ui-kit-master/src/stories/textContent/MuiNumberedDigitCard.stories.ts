import type { Meta, StoryObj } from '@storybook/vue3';
import MuiNumberedDigitCard from '@/components/textContent/MuiNumberedDigitCard.vue';

interface MuiNumberedDigitCardArgs {
  number: string;
  title: string;
  default: string;
}

const meta: Meta<typeof MuiNumberedDigitCard> = {
  title: 'Cards/MuiNumberedDigitCard',
  component: MuiNumberedDigitCard,
  argTypes: {
    number: { control: 'text' },
    title: { control: 'text' },
    default: { control: 'text' },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A card that displays a number and a title, with an optional description.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story<MuiNumberedDigitCardArgs> = (args) => ({
  components: { MuiNumberedDigitCard },
  setup() {
    return { args };
  },
  template: `
    <MuiNumberedDigitCard v-bind="args">
      <div v-html="args.default"></div>
    </MuiNumberedDigitCard>
  `,
});

export const Default: Story = {
  render: Template,
  args: {
    number: '1',
    title: 'Donate to the Student Seed Capital Fund',
    default: `<p>Your financial contribution will directly fund grants awarded to deserving students, enabling them to pursue their projects and make a tangible impact.</p>`,
  },
};

export const SecondCard: Story = {
  render: Template,
  args: {
    number: '2',
    title: 'Volunteer Your Time',
    default: `<p>Share your expertise and mentor students as they develop their projects and entrepreneurial skills.</p>`,
  },
};
