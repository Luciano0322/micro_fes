import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'rspack_remote'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'rspack_remote',
          exposes: {
            './button': './src/components/Button.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
