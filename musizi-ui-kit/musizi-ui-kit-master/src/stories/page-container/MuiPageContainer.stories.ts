import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiPageContainer } from '@components/page-container'

const meta = {
  title: 'Layout/MuiPageContainer',
  component: MuiPageContainer,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'main', 'article'],
      description: 'HTML element to render as',
    },
    wide: {
      control: 'boolean',
      description:
        'Use wider container with reduced horizontal padding on large viewports (lg:px-6 xl:px-8 instead of lg:px-8 xl:px-10)',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MuiPageContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { MuiPageContainer },
    setup() {
      return { args }
    },
    template: `
      <MuiPageContainer v-bind="args">
        <div class="bg-gray-100 p-8 rounded-lg">
          <h2 class="font-poppins text-xl font-bold mb-4">Page Container</h2>
          <p class="font-sans">This content is centered with a max-width of 1280px and responsive side padding. Resize the viewport to see the padding adjust.</p>
        </div>
      </MuiPageContainer>
    `,
  }),
}

export const AsSection: Story = {
  args: {
    as: 'section',
  },
  render: (args) => ({
    components: { MuiPageContainer },
    setup() {
      return { args }
    },
    template: `
      <MuiPageContainer v-bind="args">
        <div class="bg-gray-100 p-8 rounded-lg">
          <h2 class="font-poppins text-xl font-bold mb-4">Section Element</h2>
          <p class="font-sans">This container renders as a &lt;section&gt; element for semantic HTML.</p>
        </div>
      </MuiPageContainer>
    `,
  }),
}

export const AsMain: Story = {
  args: {
    as: 'main',
  },
  render: (args) => ({
    components: { MuiPageContainer },
    setup() {
      return { args }
    },
    template: `
      <MuiPageContainer v-bind="args">
        <div class="bg-gray-100 p-8 rounded-lg">
          <h2 class="font-poppins text-xl font-bold mb-4">Main Element</h2>
          <p class="font-sans">This container renders as a &lt;main&gt; element for semantic HTML.</p>
        </div>
      </MuiPageContainer>
    `,
  }),
}

export const Wide: Story = {
  args: {
    wide: true,
  },
  render: (args) => ({
    components: { MuiPageContainer },
    setup() {
      return { args }
    },
    template: `
      <MuiPageContainer v-bind="args">
        <div class="bg-gray-100 p-8 rounded-lg">
          <h2 class="font-poppins text-xl font-bold mb-4">Wide Container</h2>
          <p class="font-sans">This container uses reduced horizontal padding on large viewports (lg:px-6 xl:px-8), allowing content to be slightly wider.</p>
        </div>
      </MuiPageContainer>
    `,
  }),
}

export const WithMultipleChildren: Story = {
  render: (args) => ({
    components: { MuiPageContainer },
    setup() {
      return { args }
    },
    template: `
      <MuiPageContainer v-bind="args">
        <div class="bg-maroon text-white p-6 rounded-lg mb-4">
          <h2 class="font-poppins text-xl font-bold">Hero Section</h2>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg mb-4">
          <h3 class="font-poppins text-lg font-bold mb-2">Content Section</h3>
          <p class="font-sans">The container provides consistent horizontal padding for all child elements.</p>
        </div>
        <div class="bg-cool-grey text-white p-6 rounded-lg">
          <h3 class="font-poppins text-lg font-bold">Footer Section</h3>
        </div>
      </MuiPageContainer>
    `,
  }),
}
