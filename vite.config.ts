import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'
import {resolve} from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      errorRecovery: true,
      targets: browserslistToTargets(browserslist()),
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
})
