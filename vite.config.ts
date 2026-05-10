import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url' // මේ පේළිය අනිවාර්යයෙන්ම තියෙන්න ඕනේ
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// ES Modules වලදී __dirname ලබා ගැනීමට අවශ්‍ය කෝඩ් එක
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Figma assets resolve කරන්න පාවිච්චි කරන custom function එක
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // Vercel deployment සඳහා base එක '/' විය යුතුමයි
  base: '/', 
  
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  assetsInclude: ['**/*.svg', '**/*.csv'],
  
  build: {
    outDir: 'dist',
  },
})