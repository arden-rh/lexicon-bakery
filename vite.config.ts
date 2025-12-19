import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Now works with @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_config.scss" as *;\n`
      }
    }
  }
})
