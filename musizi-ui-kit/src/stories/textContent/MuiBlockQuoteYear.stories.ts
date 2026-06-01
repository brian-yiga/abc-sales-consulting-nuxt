import type { Meta, StoryObj } from '@storybook/vue3';
import MuiBlockQuoteYear from '@/components/textContent/MuiBlockQuoteYear.vue';

interface MuiBlockQuoteYearArgs {
  colourClassName: string;
  year: string;
  default: string;
}

const meta: Meta<typeof MuiBlockQuoteYear> = {
  title: 'Content/MuiBlockQuoteYear',
  component: MuiBlockQuoteYear,
  argTypes: {
    colourClassName: {
      control: 'select',
      options: ['bg-orange-600', 'bg-blue-600', 'bg-green-600', 'bg-purple-600'],
    },
    year: { control: 'text' },
    default: { control: 'text', name: 'Content' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story<MuiBlockQuoteYearArgs> = (args) => ({
  components: { MuiBlockQuoteYear },
  setup() {
    return { args };
  },
  template: `
    <MuiBlockQuoteYear v-bind="args">
      <div v-html="args.default"></div>
    </MuiBlockQuoteYear>
  `,
});

export const Default: Story = {
  render: Template,
  args: {
    year: '2023',
    colourClassName: 'bg-orange-600',
    default: `<p>Musizi Educational Services incorporated in Uganda.</p>`,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiBlockQuoteYear year="2023" colour-class-name="bg-orange-600">
  <p>Musizi Educational Services incorporated in Uganda.</p>
</MuiBlockQuoteYear>`,
      },
    },
  },
};

export const BlueYear: Story = {
  render: Template,
  args: {
    ...Default.args,
    year: '2024',
    colourClassName: 'bg-blue-600',
    default: `<p>Another important year with different styling.</p>`,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiBlockQuoteYear year="2024" colour-class-name="bg-blue-600">
  <p>Another important year with different styling.</p>
</MuiBlockQuoteYear>`,
      },
    },
  },
};

export const GreenYear: Story = {
  render: Template,
  args: {
    ...Default.args,
    year: '2025',
    colourClassName: 'bg-green-600',
    default: `<p>Highlighting the current year.</p>`,
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiBlockQuoteYear year="2025" colour-class-name="bg-green-600">
  <p>Highlighting the current year.</p>
</MuiBlockQuoteYear>`,
      },
    },
  },
};
