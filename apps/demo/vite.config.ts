import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@monorepo-starter/core': path.resolve(__dirname, '../../packages/core/dist/index.js'),
      '@monorepo-starter/utils': path.resolve(__dirname, '../../packages/utils/dist/index.js'),
      '@monorepo-starter/vue': path.resolve(__dirname, '../../packages/vue/dist/index.es.js')
    }
  },
  define: {
    global: 'globalThis'
  }
})