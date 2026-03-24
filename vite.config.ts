import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
})
