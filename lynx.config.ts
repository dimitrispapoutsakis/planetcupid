import { defineConfig } from '@lynx-js/rspeedy';

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginSass } from '@rsbuild/plugin-sass';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
    pluginTypeCheck(),
    pluginSass(),
  ],
  resolve: {
    alias: {
      '@': './src',
      react$: require.resolve('@lynx-js/react/compat'),
    },
  },
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: false
        }),
      ],
    },
  },
});
