import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/components/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/stories/**'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@stories': fileURLToPath(new URL('./src/stories', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MusiziUIKit',
      fileName: (format) => `musizi-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'musizi-ui-kit.css'
          return assetInfo.name || 'asset'
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
