import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiButton } from '@components/button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Core/MuiButton',
  component: MuiButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button text content',
      required: true,
    },
    size: {
      control: 'select',
      options: ['small', 'medium-small', 'medium', 'large'],
      description: 'Size of the button',
    },
    variant: {
      control: 'select',
      options: [
        'black-stroke',
        'white-stroke',
        'red-fill',
        'white-fill',
        'all-white',
        'right-icon-no-fill',
        'right-icon-red-fill',
        'icon-only',
      ],
      description: 'Visual style variant of the button',
    },
    wide: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    icon: {
      control: 'text',
      description:
        'Icon to display on the buttons with correct variant. Use [material icons](https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web)',
    },
    href: {
      control: 'text',
      description: 'URL for the button link. When provided, renders as an anchor element.',
    },
    external: {
      control: 'boolean',
      description: 'When true, opens the link in a new window/tab (adds target="_blank")',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof MuiButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    label: 'label',
  },
}

export const BlackStroke: Story = {
  args: {
    label: 'Label',
    variant: 'black-stroke',
  },
}

export const WhiteStroke: Story = {
  args: {
    label: 'Label',
    variant: 'white-stroke',
  },
}

export const RedFill: Story = {
  args: {
    label: 'Label',
    variant: 'red-fill',
  },
}

export const WhiteFill: Story = {
  args: {
    label: 'WhiteFill',
    variant: 'white-fill',
  },
}

export const AllWhite: Story = {
  args: {
    label: 'All White',
    variant: 'all-white',
  },
}

export const Wide: Story = {
  args: {
    label: 'Wide Button',
    wide: true,
  },
}

export const RightIcon: Story = {
  args: {
    label: 'Right Icon',
    variant: 'right-icon-red-fill',
  },
}

export const RightIconNoFill: Story = {
  args: {
    label: 'Right Icon No Fill',
    variant: 'right-icon-no-fill',
  },
}

export const IconOnly: Story = {
  args: {
    label: 'Icon',
    variant: 'icon-only',
    icon: 'arrow_forward',
  },
}

export const IconOnlyCustomIcon: Story = {
  args: {
    label: 'Icon',
    variant: 'icon-only',
    icon: 'menu',
    size: 'medium',
  },
}

export const IconOnlySmall: Story = {
  args: {
    label: 'Icon',
    variant: 'icon-only',
    icon: 'close',
    size: 'small',
  },
}

export const IconOnlyMediumSmall: Story = {
  args: {
    label: 'Icon',
    variant: 'icon-only',
    icon: 'search',
    size: 'medium-small',
  },
}

export const IconOnlyLarge: Story = {
  args: {
    label: 'Icon',
    variant: 'icon-only',
    icon: 'play_arrow',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    label: 'Small ',
    size: 'small',
    wide: false,
  },
}

export const MediumSmall: Story = {
  args: {
    label: 'Medium Small',
    size: 'medium-small',
    wide: false,
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
    wide: false,
  },
}

export const AsLink: Story = {
  args: {
    label: 'Visit Website',
    href: 'https://example.com',
  },
}

export const ExternalLink: Story = {
  args: {
    label: 'Open in New Tab',
    href: 'https://example.com',
    external: true,
  },
}

export const ExternalLinkRedFill: Story = {
  args: {
    label: 'External Link',
    href: 'https://example.com',
    external: true,
    variant: 'red-fill',
  },
}
