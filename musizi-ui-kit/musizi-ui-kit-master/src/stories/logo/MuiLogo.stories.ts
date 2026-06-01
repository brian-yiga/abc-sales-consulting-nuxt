import type { Meta, StoryObj } from '@storybook/vue3'
import {
  MuiLogoBusiness,
  MuiLogoFoundation,
  MuiLogoHealth,
  MuiLogoMu,
  MuiLogoUniversity,
  MuiLogoWings,
} from '@components/logo'

const meta = {
  title: 'Core/MuiLogo',
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 50, max: 500, step: 10 },
      description: 'Width of the logo in pixels. If only width is set, height scales proportionally.',
    },
    height: {
      control: { type: 'number', min: 50, max: 500, step: 10 },
      description: 'Height of the logo in pixels. If only height is set, width scales proportionally.',
    },
  },
} satisfies Meta

export default meta

export const Business: StoryObj<typeof MuiLogoBusiness> = {
  render: (args) => ({
    components: { MuiLogoBusiness },
    setup() {
      return { args }
    },
    template: '<MuiLogoBusiness v-bind="args" />',
  }),
  args: {},
}

export const BusinessCustomWidth: StoryObj<typeof MuiLogoBusiness> = {
  render: (args) => ({
    components: { MuiLogoBusiness },
    setup() {
      return { args }
    },
    template: '<MuiLogoBusiness v-bind="args" />',
  }),
  args: {
    width: 300,
  },
}

export const BusinessCustomHeight: StoryObj<typeof MuiLogoBusiness> = {
  render: (args) => ({
    components: { MuiLogoBusiness },
    setup() {
      return { args }
    },
    template: '<MuiLogoBusiness v-bind="args" />',
  }),
  args: {
    height: 80,
  },
}

export const BusinessCustomDimensions: StoryObj<typeof MuiLogoBusiness> = {
  render: (args) => ({
    components: { MuiLogoBusiness },
    setup() {
      return { args }
    },
    template: '<MuiLogoBusiness v-bind="args" />',
  }),
  args: {
    width: 300,
    height: 80,
  },
}

export const Foundation: StoryObj<typeof MuiLogoFoundation> = {
  render: (args) => ({
    components: { MuiLogoFoundation },
    setup() {
      return { args }
    },
    template: '<MuiLogoFoundation v-bind="args" />',
  }),
  args: {},
}

export const Health: StoryObj<typeof MuiLogoHealth> = {
  render: (args) => ({
    components: { MuiLogoHealth },
    setup() {
      return { args }
    },
    template: '<MuiLogoHealth v-bind="args" />',
  }),
  args: {},
}

export const Mu: StoryObj<typeof MuiLogoMu> = {
  render: (args) => ({
    components: { MuiLogoMu },
    setup() {
      return { args }
    },
    template: '<MuiLogoMu v-bind="args" />',
  }),
  args: {},
}

export const University: StoryObj<typeof MuiLogoUniversity> = {
  render: (args) => ({
    components: { MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: '<MuiLogoUniversity v-bind="args" />',
  }),
  args: {},
}

export const Wings: StoryObj<typeof MuiLogoWings> = {
  render: (args) => ({
    components: { MuiLogoWings },
    setup() {
      return { args }
    },
    template: '<MuiLogoWings v-bind="args" />',
  }),
  args: {},
}

export const AllLogos: StoryObj = {
  render: () => ({
    components: {
      MuiLogoBusiness,
      MuiLogoFoundation,
      MuiLogoHealth,
      MuiLogoMu,
      MuiLogoUniversity,
      MuiLogoWings,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px; font-weight: bold;">Business</p>
          <MuiLogoBusiness />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-weight: bold;">Foundation</p>
          <MuiLogoFoundation />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-weight: bold;">Health</p>
          <MuiLogoHealth />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-weight: bold;">MU</p>
          <MuiLogoMu />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-weight: bold;">University</p>
          <MuiLogoUniversity />
        </div>
        <div>
          <p style="margin-bottom: 8px; font-weight: bold;">Wings</p>
          <MuiLogoWings />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<!-- All available logo components -->
<MuiLogoBusiness />
<MuiLogoFoundation />
<MuiLogoHealth />
<MuiLogoMu />
<MuiLogoUniversity />
<MuiLogoWings />

<!-- With custom width (height scales proportionally) -->
<MuiLogoBusiness :width="300" />

<!-- With custom height (width scales proportionally) -->
<MuiLogoBusiness :height="80" />

<!-- With both width and height -->
<MuiLogoBusiness :width="300" :height="80" />`,
      },
    },
  },
}
