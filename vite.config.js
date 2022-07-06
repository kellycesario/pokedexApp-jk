import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve('src', 'components'),
      "@assets": path.resolve('public', 'assets'),
      "@utils": path.resolve('src', 'utils'),
      "@hooks": path.resolve('src', 'hooks')
    }
  }
})