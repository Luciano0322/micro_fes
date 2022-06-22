import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
const deps = require("./package.json").dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3500,
  },
  plugins: [
    react(),
    federation({
      name: 'card_picker',
      filename: 'remoteEntry.js',
      exposes: {
        './CardPicker': './src/CardPicker',
      },
      shared: {
        ...deps,
        ui: {
          singleton: true,
          requiredVersion: deps["react-dom"]
        }
      }
    })
  ],
  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       federation({
  //         name: 'card_picker',
  //         filename: 'remoteEntry.js',
  //         exposes: {
  //           './CardPicker': './src/CardPicker',
  //         },
  //         shared: {
  //           ...deps,
  //           ui: {
  //             singleton: true,
  //             requiredVersion: deps["react-dom"]
  //           }
  //         }
  //       })
  //     ]
  //   }
  // }
})
