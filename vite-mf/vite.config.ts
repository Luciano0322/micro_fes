import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'vite-mf', // 和webpack相同
      filename: 'remoteEntry.js', // 入口檔案名，也與webpack做法相同
      exposes: {
        './InfoCard': './src/components/InfoCard.tsx'
      },
      shared: ['react'] 
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
