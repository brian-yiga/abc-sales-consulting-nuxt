// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-22',
  devtools: {
    enabled: true,
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',

    '@nuxtjs/eslint-module',
    '@nuxtjs/sitemap',
    'nuxt-icon',
  ],
  build: {
    transpile: ['vue-resizer'],
  },
  vite: {
    optimizeDeps: {
      exclude: ['@northgreenug/musizi-ui-kit'],
    },
  },

  css: [
    '~/assets/css/index.css',
  ],
  content: {
    documentDriven: true,
  },
  postcss: {
    plugins: {
      'postcss-import': {},

      '@tailwindcss/postcss': {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production,
    },
  },
  site: {
    url: 'https://abcsalesconsulting.net',
  },

  nitro: {
    prerender: {
      failOnError: false, 
      crawlLinks: true
    }
  },
});
