import type { Config } from 'postcss-load-config';
import lynxPreset from '@lynx-js/tailwind-preset';

const config: Config = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.ts'
    },
    autoprefixer: {},
  }
};

export default config;
