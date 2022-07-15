import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@components": path.resolve('src', 'components'),
      "@assets": path.resolve('public', 'assets'),
      "@services": path.resolve('src', 'services'),
      "@hooks": path.resolve('src', 'hooks'),
      "@context": path.resolve('src', 'context'),
      "@utils": path.resolve('src', 'utils')
    }
  }
})