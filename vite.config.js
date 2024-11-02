import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Reposourcer/' // Reemplaza "nombre-del-repo" con el nombre real de tu repositorio
})
