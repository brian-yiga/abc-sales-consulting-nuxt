import type { StorybookConfig } from '@storybook/vue3-vite'
import tailwindcss from '@tailwindcss/vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    // Remove vite-plugin-dts from Storybook builds (it's only needed for library builds)
    config.plugins = config.plugins?.filter(
      (plugin) => plugin && 'name' in plugin && plugin.name !== 'vite:dts',
    )

    // Explicitly add Tailwind CSS Vite plugin for production builds
    // This ensures @apply directives in component <style> blocks are compiled
    config.plugins = config.plugins || []
    config.plugins.push(tailwindcss())

    return config
  },
}

export default config
