import type { Meta, StoryObj } from '@storybook/vue3';
import MuiHeader from '@/components/header/MuiHeader.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import HeaderMenuItem from '@/components/header/HeaderMenuItem.vue';

interface MenuItem {
  text: string;
  url: string;
  desc?: string;
  childrenItems?: MenuItem[];
}

const meta: Meta<typeof MuiHeader> = {
  title: 'Layout/MuiHeader',
  component: MuiHeader,
  subcomponents: { HeaderMenu, HeaderMenuItem },
  argTypes: {
    logoSrc: { control: 'text', description: 'Path to the logo image' },
    logoAlt: { control: 'text', description: 'Alt text for the logo' },
    logoUrl: { control: 'text', description: 'URL the logo links to' },
    ctaUrl: { control: 'text', description: 'URL for the CTA button' },
    ctaText: { control: 'text', description: 'Text for the CTA button' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems: MenuItem[] = [
  { text: 'Home', url: '/' },
  { text: 'Academics', url: '/academics' },
  { text: 'Admissions', url: '/admissions' },
  {
    text: 'Priorities',
    url: '/priorities',
    childrenItems: [
      { text: 'Priority One', url: '/priorities/one' },
      { text: 'Priority Two', url: '/priorities/two' },
    ],
  },
  { text: 'Contact', url: '/contact' },
];

export const Default: Story = {
  render: (args) => ({
    components: { MuiHeader, HeaderMenu, HeaderMenuItem },
    setup() {
      return { args, menuItems };
    },
    template: `
      <MuiHeader
        :logo-src="args.logoSrc"
        :logo-alt="args.logoAlt"
        :logo-url="args.logoUrl"
        :cta-url="args.ctaUrl"
        :cta-text="args.ctaText"
      >
        <template #menu>
          <HeaderMenu :menu-items="menuItems" />
        </template>
      </MuiHeader>
    `,
  }),
  args: {
    logoSrc: '/img/musizi-logo.svg',
    logoAlt: 'Logo',
    logoUrl: '/',
    ctaUrl: '/donate',
    ctaText: 'Donate',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiHeader
  logo-src="/img/musizi-logo.svg"
  logo-alt="Logo"
  logo-url="/"
  cta-url="/donate"
  cta-text="Donate"
>
  <template #menu>
    <HeaderMenu :menu-items="menuItems" />
  </template>
</MuiHeader>`,
      },
    },
  },
};

export const WithoutCta: Story = {
  render: (args) => ({
    components: { MuiHeader, HeaderMenu },
    setup() {
      return { args, menuItems };
    },
    template: `
      <MuiHeader
        :logo-src="args.logoSrc"
        :logo-alt="args.logoAlt"
      >
        <template #menu>
          <HeaderMenu :menu-items="menuItems" />
        </template>
      </MuiHeader>
    `,
  }),
  args: {
    logoSrc: '/img/musizi-logo.svg',
    logoAlt: 'Logo',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiHeader
  logo-src="/img/musizi-logo.svg"
  logo-alt="Logo"
>
  <template #menu>
    <HeaderMenu :menu-items="menuItems" />
  </template>
</MuiHeader>`,
      },
    },
  },
};

export const CustomCta: Story = {
  render: (args) => ({
    components: { MuiHeader, HeaderMenu },
    setup() {
      return { args, menuItems };
    },
    template: `
      <MuiHeader :logo-src="args.logoSrc">
        <template #menu>
          <HeaderMenu :menu-items="menuItems" />
        </template>
        <template #cta>
          <a href="/apply" class="hidden btn btn--big lg:block">Apply Now</a>
        </template>
      </MuiHeader>
    `,
  }),
  args: {
    logoSrc: '/img/musizi-logo.svg',
  },
  parameters: {
    docs: {
      source: {
        code: `<MuiHeader logo-src="/img/musizi-logo.svg">
  <template #menu>
    <HeaderMenu :menu-items="menuItems" />
  </template>
  <template #cta>
    <a href="/apply" class="hidden btn btn--big lg:block">Apply Now</a>
  </template>
</MuiHeader>`,
      },
    },
  },
};
