import type { Config } from 'postcss-load-config';

const config: Config = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.ts'
    },
    autoprefixer: {},
  }
};

export default config;
