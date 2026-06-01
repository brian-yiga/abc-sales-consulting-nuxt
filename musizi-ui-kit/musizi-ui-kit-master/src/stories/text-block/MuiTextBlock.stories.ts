import type { Meta, StoryObj } from '@storybook/vue3'
import { MuiTextBlock } from '@components/text-block'

const meta = {
  title: 'Components/MuiTextBlock',
  component: MuiTextBlock,
  tags: ['autodocs'],
  argTypes: {
    titleClass: {
      control: 'text',
      description: 'Additional CSS classes for the title element (e.g., to override typography)',
    },
    bodyClass: {
      control: 'text',
      description: 'Additional CSS classes for the body element',
    },
    button: {
      control: 'object',
      description: 'Optional button configuration',
    },
  },
} satisfies Meta<typeof MuiTextBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { MuiTextBlock },
    setup() {
      return { args }
    },
    template: `
      <MuiTextBlock v-bind="args">
        <template #title>Welcome to Musizi University</template>
        <template #body>
          <p>Musizi University is a leading institution committed to excellence in education, research, and community service. We prepare students to be leaders and innovators in their chosen fields.</p>
        </template>
      </MuiTextBlock>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTextBlock>
  <template #title>Welcome to Musizi University</template>
  <template #body>
    <p>Musizi University is a leading institution committed to excellence in education, research, and community service. We prepare students to be leaders and innovators in their chosen fields.</p>
  </template>
</MuiTextBlock>`,
      },
    },
  },
}

export const WithButton: Story = {
  args: {
    button: {
      label: 'View Programs',
      href: '/programs',
    },
  },
  render: (args) => ({
    components: { MuiTextBlock },
    setup() {
      return { args }
    },
    template: `
      <MuiTextBlock v-bind="args">
        <template #title>Discover Our Programs</template>
        <template #body>
          <p>Explore our diverse range of undergraduate and postgraduate programs designed to meet the demands of the modern workforce.</p>
        </template>
      </MuiTextBlock>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTextBlock :button="{ label: 'View Programs', href: '/programs' }">
  <template #title>Discover Our Programs</template>
  <template #body>
    <p>Explore our diverse range of undergraduate and postgraduate programs designed to meet the demands of the modern workforce.</p>
  </template>
</MuiTextBlock>`,
      },
    },
  },
}

export const WithExternalLink: Story = {
  args: {
    button: {
      label: 'Contact Us',
      href: 'https://example.com/contact',
      external: true,
    },
  },
  render: (args) => ({
    components: { MuiTextBlock },
    setup() {
      return { args }
    },
    template: `
      <MuiTextBlock v-bind="args">
        <template #title>Partner With Us</template>
        <template #body>
          <p>We welcome partnerships with organizations and institutions worldwide. Together, we can create meaningful impact in education and research.</p>
        </template>
      </MuiTextBlock>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTextBlock :button="{ label: 'Contact Us', href: 'https://example.com/contact', external: true }">
  <template #title>Partner With Us</template>
  <template #body>
    <p>We welcome partnerships with organizations and institutions worldwide. Together, we can create meaningful impact in education and research.</p>
  </template>
</MuiTextBlock>`,
      },
    },
  },
}

export const WithBlackStrokeButton: Story = {
  args: {
    button: {
      label: 'Apply Now',
      href: '/apply',
      variant: 'black-stroke',
    },
  },
  render: (args) => ({
    components: { MuiTextBlock },
    setup() {
      return { args }
    },
    template: `
      <MuiTextBlock v-bind="args">
        <template #title>Join Our Community</template>
        <template #body>
          <p>Become part of a vibrant academic community that values diversity, innovation, and excellence.</p>
        </template>
      </MuiTextBlock>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTextBlock :button="{ label: 'Apply Now', href: '/apply', variant: 'black-stroke' }">
  <template #title>Join Our Community</template>
  <template #body>
    <p>Become part of a vibrant academic community that values diversity, innovation, and excellence.</p>
  </template>
</MuiTextBlock>`,
      },
    },
  },
}

export const RichBodyContent: Story = {
  render: (args) => ({
    components: { MuiTextBlock },
    setup() {
      return { args }
    },
    template: `
      <MuiTextBlock v-bind="args">
        <template #title>Our Mission and Vision</template>
        <template #body>
          <p>At Musizi University, we are dedicated to providing <strong>transformative education</strong> that empowers students to reach their full potential.</p>
          <ul>
            <li>Academic excellence</li>
            <li>Cutting-edge research</li>
            <li>Meaningful community engagement</li>
          </ul>
          <p>Through our innovative programs and dedicated faculty, we prepare the next generation of leaders.</p>
        </template>
      </MuiTextBlock>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTextBlock>
  <template #title>Our Mission and Vision</template>
  <template #body>
    <p>At Musizi University, we are dedicated to providing <strong>transformative education</strong> that empowers students to reach their full potential.</p>
    <ul>
      <li>Academic excellence</li>
      <li>Cutting-edge research</li>
      <li>Meaningful community engagement</li>
    </ul>
    <p>Through our innovative programs and dedicated faculty, we prepare the next generation of leaders.</p>
  </template>
</MuiTextBlock>`,
      },
    },
  },
}

export const CustomTitleClass: Story = {
  args: {
    titleClass: 'mui-text--display-1',
  },
  render: (args) => ({
    components: { MuiTextBlock },
    setup() {
      return { args }
    },
    template: `
      <MuiTextBlock v-bind="args">
        <template #title>Featured Announcement</template>
        <template #body>
          <p>Use the titleClass prop to apply different typography or custom styles to the title.</p>
        </template>
      </MuiTextBlock>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTextBlock title-class="mui-text--display-1">
  <template #title>Featured Announcement</template>
  <template #body>
    <p>Use the titleClass prop to apply different typography or custom styles to the title.</p>
  </template>
</MuiTextBlock>`,
      },
    },
  },
}

export const CustomBodyClass: Story = {
  args: {
    bodyClass: 'mui-text--small-1',
  },
  render: (args) => ({
    components: { MuiTextBlock },
    setup() {
      return { args }
    },
    template: `
      <MuiTextBlock v-bind="args">
        <template #title>Small Print Section</template>
        <template #body>
          <p>Use the bodyClass prop to apply different typography or custom styles to the body text.</p>
        </template>
      </MuiTextBlock>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<MuiTextBlock body-class="mui-text--small-1">
  <template #title>Small Print Section</template>
  <template #body>
    <p>Use the bodyClass prop to apply different typography or custom styles to the body text.</p>
  </template>
</MuiTextBlock>`,
      },
    },
  },
}
