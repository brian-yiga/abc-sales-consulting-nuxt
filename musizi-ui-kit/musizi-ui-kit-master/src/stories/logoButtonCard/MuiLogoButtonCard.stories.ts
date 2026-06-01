import type { Meta, StoryObj } from '@storybook/vue3'
import MuiLogoButtonCard from '@/components/logoButtonCard/MuiLogoButtonCard.vue'
import { MuiLogoFoundation, MuiLogoUniversity, MuiLogoBusiness } from '@/components/logo'

const meta: Meta<typeof MuiLogoButtonCard> = {
  title: 'Content/MuiLogoButtonCard',
  component: MuiLogoButtonCard,
  tags: ['autodocs'],
  argTypes: {
    button: {
      control: 'object',
      description:
        'Button configuration with text, href, and optional external (opens in new window)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { MuiLogoButtonCard, MuiLogoFoundation },
    setup() {
      return { args }
    },
    template: `
      <MuiLogoButtonCard v-bind="args">
        <template #Image>
          <MuiLogoFoundation :width="250" />
        </template>
        <template #Text>
          <div class="mui-text--headline-2 uppercase">
            <span class="font-light">
              Intentional Success
            </span>
            <br>
            Enduring Legacies
          </div>
        </template>
      </MuiLogoButtonCard>
    `,
  }),
  args: {
    button: {
      text: 'Learn More',
      href: '/foundation',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiLogoButtonCard :button="{ text: 'Learn More', href: '/foundation' }">
  <template #Image>
    <MuiLogoFoundation :width="250" />
  </template>
  <template #Text>
    <div class="mui-text--headline-2 uppercase">
      <span class="font-light">Intentional Success</span>
      <br>
      Enduring Legacies
    </div>
  </template>
</MuiLogoButtonCard>`,
      },
    },
  },
}

export const WithUniversityLogo: Story = {
  render: (args) => ({
    components: { MuiLogoButtonCard, MuiLogoUniversity },
    setup() {
      return { args }
    },
    template: `
      <MuiLogoButtonCard v-bind="args">
        <template #Image>
          <MuiLogoUniversity :width="250" />
        </template>
        <template #Text>
          <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Excellence in</p>
          <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Education</p>
        </template>
      </MuiLogoButtonCard>
    `,
  }),
  args: {
    button: {
      text: 'Explore Programs',
      href: '/programs',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiLogoButtonCard :button="{ text: 'Explore Programs', href: '/programs' }">
  <template #Image>
    <MuiLogoUniversity :width="250" />
  </template>
  <template #Text>
    <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Excellence in</p>
    <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Education</p>
  </template>
</MuiLogoButtonCard>`,
      },
    },
  },
}

export const WithBusinessLogo: Story = {
  render: (args) => ({
    components: { MuiLogoButtonCard, MuiLogoBusiness },
    setup() {
      return { args }
    },
    template: `
      <MuiLogoButtonCard v-bind="args">
        <template #Image>
          <MuiLogoBusiness :width="250" />
        </template>
        <template #Text>
          <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Building</p>
          <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Future Leaders</p>
        </template>
      </MuiLogoButtonCard>
    `,
  }),
  args: {
    button: {
      text: 'Partner With Us',
      href: '/partnerships',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiLogoButtonCard :button="{ text: 'Partner With Us', href: '/partnerships' }">
  <template #Image>
    <MuiLogoBusiness :width="250" />
  </template>
  <template #Text>
    <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Building</p>
    <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Future Leaders</p>
  </template>
</MuiLogoButtonCard>`,
      },
    },
  },
}

export const CustomBackgroundColor: Story = {
  render: (args) => ({
    components: { MuiLogoButtonCard, MuiLogoFoundation },
    setup() {
      return { args }
    },
    template: `
      <MuiLogoButtonCard v-bind="args" class="bg-purple">
        <template #Image>
          <MuiLogoFoundation :width="250" />
        </template>
        <template #Text>
          <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Innovation &amp;</p>
          <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Excellence</p>
        </template>
      </MuiLogoButtonCard>
    `,
  }),
  args: {
    button: {
      text: 'Discover',
      href: '/about',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiLogoButtonCard
  :button="{ text: 'Discover', href: '/about' }"
  class="bg-purple"
>
  <template #Image>
    <MuiLogoFoundation :width="250" />
  </template>
  <template #Text>
    <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Innovation &</p>
    <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Excellence</p>
  </template>
</MuiLogoButtonCard>`,
      },
    },
  },
}

export const WithBackgroundImage: Story = {
  render: (args) => ({
    components: { MuiLogoButtonCard, MuiLogoFoundation },
    setup() {
      return { args }
    },
    template: `
      <MuiLogoButtonCard v-bind="args" style="background-image: url('https://placehold.co/1200x600/333333/666666')">
        <template #Image>
          <MuiLogoFoundation :width="250" />
        </template>
        <template #Text>
          <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Intentional Success</p>
          <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Enduring Legacies</p>
        </template>
      </MuiLogoButtonCard>
    `,
  }),
  args: {
    button: {
      text: 'Learn More',
      href: '/foundation',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiLogoButtonCard
  :button="{ text: 'Learn More', href: '/foundation' }"
  style="background-image: url('/images/bg.jpg')"
>
  <template #Image>
    <MuiLogoFoundation :width="250" />
  </template>
  <template #Text>
    <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Intentional Success</p>
    <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Enduring Legacies</p>
  </template>
</MuiLogoButtonCard>`,
      },
    },
  },
}

export const ExternalLink: Story = {
  render: (args) => ({
    components: { MuiLogoButtonCard, MuiLogoFoundation },
    setup() {
      return { args }
    },
    template: `
      <MuiLogoButtonCard v-bind="args">
        <template #Image>
          <MuiLogoFoundation :width="250" />
        </template>
        <template #Text>
          <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Visit Our</p>
          <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Partner Site</p>
        </template>
      </MuiLogoButtonCard>
    `,
  }),
  args: {
    button: {
      text: 'Open in New Tab',
      href: 'https://example.com',
      external: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiLogoButtonCard :button="{ text: 'Open in New Tab', href: 'https://example.com', external: true }">
  <template #Image>
    <MuiLogoFoundation :width="250" />
  </template>
  <template #Text>
    <p class="mui-text--headline-2 font-poppins uppercase tracking-wide">Visit Our</p>
    <p class="mui-text--headline-1 font-poppins font-bold uppercase tracking-wide">Partner Site</p>
  </template>
</MuiLogoButtonCard>`,
      },
    },
  },
}

export const MultipleCards: Story = {
  render: () => ({
    components: { MuiLogoButtonCard, MuiLogoFoundation, MuiLogoUniversity, MuiLogoBusiness },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        <MuiLogoButtonCard :button="{ text: 'Learn More', href: '/foundation' }">
          <template #Image>
            <MuiLogoFoundation :width="200" />
          </template>
          <template #Text>
            <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Intentional Success</p>
            <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Enduring Legacies</p>
          </template>
        </MuiLogoButtonCard>

        <MuiLogoButtonCard :button="{ text: 'Explore', href: '/university' }" class="bg-purple">
          <template #Image>
            <MuiLogoUniversity :width="200" />
          </template>
          <template #Text>
            <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Excellence in</p>
            <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Education</p>
          </template>
        </MuiLogoButtonCard>

        <MuiLogoButtonCard :button="{ text: 'Partner', href: '/business' }" class="bg-cool-grey">
          <template #Image>
            <MuiLogoBusiness :width="200" />
          </template>
          <template #Text>
            <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Building</p>
            <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Future Leaders</p>
          </template>
        </MuiLogoButtonCard>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
  <MuiLogoButtonCard :button="{ text: 'Learn More', href: '/foundation' }">
    <template #Image>
      <MuiLogoFoundation :width="200" />
    </template>
    <template #Text>
      <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Intentional Success</p>
      <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Enduring Legacies</p>
    </template>
  </MuiLogoButtonCard>

  <MuiLogoButtonCard :button="{ text: 'Explore', href: '/university' }" class="bg-purple">
    <template #Image>
      <MuiLogoUniversity :width="200" />
    </template>
    <template #Text>
      <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Excellence in</p>
      <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Education</p>
    </template>
  </MuiLogoButtonCard>

  <MuiLogoButtonCard :button="{ text: 'Partner', href: '/business' }" class="bg-cool-grey">
    <template #Image>
      <MuiLogoBusiness :width="200" />
    </template>
    <template #Text>
      <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Building</p>
      <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Future Leaders</p>
    </template>
  </MuiLogoButtonCard>
</div>`,
      },
    },
  },
}
