import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = (process.env.GITHUB_REPOSITORY || '').split('/')[1] || ''
const isPages = process.env.GITHUB_ACTIONS === 'true'

// In local dev: './'  |  On GitHub Pages: '/<repo>/'
export default defineConfig({
  plugins: [react()],
  base: isPages ? `/${repo}/` : './',
})
