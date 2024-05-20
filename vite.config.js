import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: '',
  base: '/expo/',
  publicDir: ['public', 'public/screens', 'public/screens/em-breve'],
  build: {
    assetsInclude: ['screens/**', 'screens/em-breve/**']
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
