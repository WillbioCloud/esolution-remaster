import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // O Tailwind v4 é injetado como um plugin nativo do Vite aqui
  ],
  server: {
    // Permite o host do preview ao vivo (apenas dev server; não afeta o build).
    allowedHosts: ['.e2b.app'],
  },
})
