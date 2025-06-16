
import { defineConfig } from "vitest/config";
import vue from '@vitejs/plugin-vue'
import {resolve} from 'node:path';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
   root: ".", //Define the root
   resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
});

