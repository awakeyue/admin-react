import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 同步tsconfig paths到vite alias
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
