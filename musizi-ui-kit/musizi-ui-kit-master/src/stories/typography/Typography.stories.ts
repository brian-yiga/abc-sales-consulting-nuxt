import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

// Typography showcase component
const TypographyShowcase = {
  name: 'TypographyShowcase',
  props: {
    variant: {
      type: String,
      required: true,
    },
    sampleText: {
      type: String,
      default: 'The quick brown fox jumps over the lazy dog',
    },
  },
  setup(props: { variant: string; sampleText: string }) {
    return () =>
      h('div', { style: { padding: '16px 0' } }, [
        h('p', { class: props.variant }, props.sampleText),
        h(
          'code',
          {
            style: {
              display: 'block',
              marginTop: '8px',
              fontSize: '12px',
              color: '#666',
              fontFamily: 'monospace',
            },
          },
          `.${props.variant}`,
        ),
      ])
  },
}

// Full typography scale component
const TypographyScale = {
  name: 'TypographyScale',
  setup() {
    const styles = [
      { class: 'mui-text--display-1', label: 'Display 1', sample: 'Display 1' },
      { class: 'mui-text--display-2', label: 'Display 2', sample: 'Display 2' },
      { class: 'mui-text--display-3', label: 'Display 3', sample: 'Display 3' },
      { class: 'mui-text--headline-1', label: 'Headline 1', sample: 'Headline 1' },
      { class: 'mui-text--headline-2', label: 'Headline 2', sample: 'Headline 2' },
      { class: 'mui-text--headline-3', label: 'Headline 3', sample: 'Headline 3' },
      {
        class: 'mui-text--body',
        label: 'Body',
        sample: 'Body text for paragraphs and general content.',
      },
      { class: 'mui-text--small-1', label: 'Small 1', sample: 'Small 1 for captions' },
      { class: 'mui-text--small-2', label: 'Small 2', sample: 'Small 2 for labels' },
      { class: 'mui-text--small-3', label: 'Small 3', sample: 'Small 3 for fine print' },
    ]

    return () =>
      h(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px' } },
        styles.map((style) =>
          h(
            'div',
            {
              key: style.class,
              style: { borderBottom: '1px solid #eee', paddingBottom: '16px' },
            },
            [
              h('p', { class: style.class }, style.sample),
              h(
                'code',
                {
                  style: {
                    display: 'block',
                    marginTop: '8px',
                    fontSize: '12px',
                    color: '#666',
                    fontFamily: 'monospace',
                  },
                },
                `.${style.class}`,
              ),
            ],
          ),
        ),
      )
  },
}

// Page example component
const TypographyPageExample = {
  name: 'TypographyPageExample',
  setup() {
    return () =>
      h('article', { style: { maxWidth: '800px' } }, [
        h('h1', { class: 'mui-text--display-2' }, 'Welcome to Musizi University'),
        h(
          'p',
          { class: 'mui-text--headline-2', style: { marginTop: '8px', color: '#54565A' } },
          'Building Tomorrow\'s Leaders Through Excellence in Education',
        ),
        h('hr', { style: { margin: '32px 0', border: 'none', borderTop: '1px solid #eee' } }),
        h('h2', { class: 'mui-text--headline-1', style: { marginBottom: '16px' } }, 'About Us'),
        h(
          'p',
          { class: 'mui-text--body', style: { marginBottom: '16px' } },
          'Musizi University is committed to providing quality education that transforms lives and communities. Our programs are designed to equip students with the knowledge and skills needed to succeed in today\'s competitive world.',
        ),
        h(
          'p',
          { class: 'mui-text--body', style: { marginBottom: '24px' } },
          'With state-of-the-art facilities and a dedicated faculty, we offer a learning environment that fosters innovation, creativity, and critical thinking.',
        ),
        h(
          'h3',
          { class: 'mui-text--headline-2', style: { marginBottom: '12px' } },
          'Our Programs',
        ),
        h(
          'p',
          { class: 'mui-text--body', style: { marginBottom: '16px' } },
          'We offer undergraduate and postgraduate programs across various disciplines including Business, Health Sciences, Education, and Technology.',
        ),
        h(
          'p',
          { class: 'mui-text--small-1', style: { color: '#666' } },
          'Last updated: December 2024',
        ),
        h('hr', { style: { margin: '32px 0', border: 'none', borderTop: '1px solid #eee' } }),
        h(
          'footer',
          { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
          [
            h(
              'p',
              { class: 'mui-text--small-2', style: { color: '#666' } },
              '© 2024 Musizi University. All rights reserved.',
            ),
            h(
              'p',
              { class: 'mui-text--small-3', style: { color: '#999' } },
              'Privacy Policy | Terms of Service',
            ),
          ],
        ),
      ])
  },
}

const meta: Meta = {
  title: 'Foundation/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Responsive typography classes that automatically adapt to viewport size. Uses `rem` for accessibility and unitless line-heights for proportional scaling. Import `@northgreenug/musizi-ui-kit/typography.css` to use these classes.',
      },
    },
  },
}

export default meta

type Story = StoryObj

export const AllStyles: Story = {
  name: 'All Typography Styles',
  render: () => ({
    components: { TypographyScale },
    template: '<TypographyScale />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Complete typography scale showing all available styles.',
      },
    },
  },
}

export const Display1: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template: '<TypographyShowcase variant="mui-text--display-1" sample-text="Display 1" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Poppins Bold — Mobile: 2.6875rem (43px)/1.2 → Desktop: 3.75rem (60px)/1.2',
      },
    },
  },
}

export const Display2: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template: '<TypographyShowcase variant="mui-text--display-2" sample-text="Display 2" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Poppins Bold — Mobile: 2.4375rem (39px)/1.2 → Desktop: 3.0625rem (49px)/1.2',
      },
    },
  },
}

export const Display3: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template: '<TypographyShowcase variant="mui-text--display-3" sample-text="Display 3" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Poppins Bold — Mobile: 1.9375rem (31px)/1.2 → Desktop: 2.4375rem (39px)/1.2',
      },
    },
  },
}

export const Headline1: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template: '<TypographyShowcase variant="mui-text--headline-1" sample-text="Headline 1" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Poppins Bold — Mobile: 1.5625rem (25px)/1.2 → Desktop: 1.9375rem (31px)/1.2',
      },
    },
  },
}

export const Headline2: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template: '<TypographyShowcase variant="mui-text--headline-2" sample-text="Headline 2" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Poppins Bold — Mobile: 1.25rem (20px)/1.2 → Desktop: 1.5625rem (25px)/1.2',
      },
    },
  },
}

export const Headline3: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template: '<TypographyShowcase variant="mui-text--headline-3" sample-text="Headline 3" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Poppins Bold — Mobile: 1rem (16px)/1.5 → Desktop: 1.25rem (20px)/1.2',
      },
    },
  },
}

export const Body: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template:
      '<TypographyShowcase variant="mui-text--body" sample-text="Body text is used for paragraphs and general content. It provides excellent readability for longer passages." />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Open Sans Regular — All breakpoints: 1rem (16px)/1.5. Applied to `<body>` by default.',
      },
    },
  },
}

export const Small1: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template:
      '<TypographyShowcase variant="mui-text--small-1" sample-text="Small 1 for captions and secondary text" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Open Sans Regular — All breakpoints: 0.8125rem (13px)/1.54',
      },
    },
  },
}

export const Small2: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template:
      '<TypographyShowcase variant="mui-text--small-2" sample-text="Small 2 for labels and metadata" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Open Sans Regular — All breakpoints: 0.6875rem (11px)/1.55',
      },
    },
  },
}

export const Small3: Story = {
  render: () => ({
    components: { TypographyShowcase },
    template:
      '<TypographyShowcase variant="mui-text--small-3" sample-text="Small 3 for fine print and disclaimers" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Open Sans Regular — All breakpoints: 0.625rem (10px)/1.5',
      },
    },
  },
}

export const PageExample: Story = {
  name: 'Page Layout Example',
  render: () => ({
    components: { TypographyPageExample },
    template: '<TypographyPageExample />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example of typography styles used together in a typical page layout.',
      },
    },
  },
}
