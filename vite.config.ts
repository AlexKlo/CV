import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./",  // Добавляем базовый путь
  plugins: [react()]
})