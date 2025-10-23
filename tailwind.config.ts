import type { Config } from 'tailwindcss';
import lynxPreset from '@lynx-js/tailwind-preset';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [lynxPreset],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        background: {
          50: '#232323',
          100: '#202020',
          200: '#1f1f1f',
          300: '#1a1a1a',
          primary: '#181818',
          secondary: '#151515',
          600: '#121212',
          nav: '#0f0f0f',
          800: '#0c0c0c',
          900: '#080808',
        },
      },
    },
  },
  plugins: [],
};

export default config;