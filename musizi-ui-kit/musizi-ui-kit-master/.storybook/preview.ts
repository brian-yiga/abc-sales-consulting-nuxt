import type { Preview } from '@storybook/vue3';
import '../src/styles/fonts.css';
import './storybook.compiled.css';  // Pre-compiled Tailwind CSS (built by storybook:css script)
import '../src/styles/index.css';  // Component-specific styles
import '../src/styles/typography.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
