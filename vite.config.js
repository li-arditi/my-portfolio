import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/my-portfolio/',
  optimizeDeps: {
    include: ['react-pdf', 'pdfjs-dist'],
    exclude: ['canvas']
  },
  resolve: {
    alias: {
      canvas: '/dev/null', // points to nothing
    },
  },
  build: {
    rollupOptions: {
      external: ['canvas'], // pdfjs tries to import canvas in non-browser envs
    },
  },
})
