/** @type {import('tailwindcss').Config} */
import nesting from '@tailwindcss/nesting'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', '.storybook/**/*', './src/**/*.css'],
  plugins: [nesting],
}
