/** @type {import('tailwindcss').Config} */
import { muziziPreset } from '@northgreenug/musizi-ui-kit';

export default {
  presets: [muziziPreset],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
    './app.vue',
    './musizi-ui-kit/dist/**/*.js',
  ],
};
