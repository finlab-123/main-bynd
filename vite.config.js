import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://bynd-backend-owi6.onrender.com',
        changeOrigin: true
      }
    },
    allowedHosts: [
      "unmoved-vivien-nonapproachable.ngrok-free.dev",
      "f2d6-2401-4900-1c66-c1e6-b43b-8e52-da53-9cf.ngrok-free.app",
      "6a35-2401-4900-1c66-c1e6-b43b-8e52-da53-9cf.ngrok-free.app"
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  plugins: [
    react()
  ],
})
