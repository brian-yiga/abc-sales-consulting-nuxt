import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiSocialMedia } from '@components/social-media'

const meta = {
  title: 'Core/MuiSocialMedia',
  component: MuiSocialMedia,
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: 'select',
      options: ['linkedin', 'youtube', 'instagram', 'facebook', 'twitter', 'tiktok'],
      description: 'Social media platform',
    },
    href: {
      control: 'text',
      description: 'Link URL',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 24, 32, 48, 64],
      description: 'Icon size - sm (24px), md (32px), lg (48px), or custom number',
    },
    color: {
      control: 'color',
      description: 'Icon color (default: currentColor)',
    },
    hoverColor: {
      control: 'color',
      description: 'Icon color on hover (default: white)',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label (auto-generated from platform if not provided)',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof MuiSocialMedia>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    platform: 'linkedin',
    href: 'https://www.linkedin.com/company/musizi-university-foundation',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    platform: 'youtube',
    href: 'https://www.youtube.com/channel/UCgWBBZJTs1fnvrlR5bFXTgQ',
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    platform: 'instagram',
    href: 'https://www.instagram.com/musiziu/',
    size: 'sm',
  },
}

export const CustomSize: Story = {
  args: {
    platform: 'facebook',
    href: 'https://facebook.com',
    size: 64,
  },
}

export const CustomColors: Story = {
  args: {
    platform: 'twitter',
    href: 'https://twitter.com',
    size: 'lg',
    color: 'var(--color-cool-grey)',
    hoverColor: 'var(--color-maroon)',
  },
}

export const AllPlatforms: Story = {
  render: () => ({
    components: { MuiSocialMedia },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <MuiSocialMedia platform="linkedin" href="#" size="lg" />
        <MuiSocialMedia platform="youtube" href="#" size="lg" />
        <MuiSocialMedia platform="instagram" href="#" size="lg" />
        <MuiSocialMedia platform="facebook" href="#" size="lg" />
        <MuiSocialMedia platform="twitter" href="#" size="lg" />
        <MuiSocialMedia platform="tiktok" href="#" size="lg" />
      </div>
    `,
  }),
}

export const FooterExample: Story = {
  render: () => ({
    components: { MuiSocialMedia },
    template: `
      <div style="display: flex; gap: 16px; justify-content: center;">
        <MuiSocialMedia
          platform="linkedin"
          href="https://www.linkedin.com/company/musizi-university-foundation"
          size="lg"
          color="var(--color-cool-grey)"
          hover-color="white"
        />
        <MuiSocialMedia
          platform="youtube"
          href="https://www.youtube.com/channel/UCgWBBZJTs1fnvrlR5bFXTgQ"
          size="lg"
          color="var(--color-cool-grey)"
          hover-color="white"
        />
        <MuiSocialMedia
          platform="instagram"
          href="https://www.instagram.com/musiziu/"
          size="lg"
          color="var(--color-cool-grey)"
          hover-color="white"
        />
      </div>
    `,
  }),
}
