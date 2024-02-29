import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "Kasa-DK-OC-IW-P8" : "/", // This is the subpath of your project, e.g. /Kasa-DK-OC-IW-P8/,
  server: {historyApiFallback: true}// This is for the react-router-dom to work properly
})
