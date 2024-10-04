import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'chrome89',
  },
  plugins: [
    federation({
      filename: 'remoteEntry.js',
      name: 'remote',
      exposes: {
        './remote-button': './src/components/Button.tsx',
      },
      remotes: {},
      // shared: {
      //   react: {
      //     requiredVersion: '^18.2.0', // Replace with the actual version from package.json
      //     singleton: true,
      //   },
      // },
      shared: ['react', 'react-dom'],
      shareStrategy: 'version-first', 
    }),
    react(),
  ],
})
