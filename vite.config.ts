import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/prapets-site-react-ts/', // Adicione esta linha
  plugins: [react()],
  
})
