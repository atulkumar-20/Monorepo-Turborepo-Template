import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@shared/ui': resolve(__dirname, '../../packages/ui/dist'),
      '@shared/utils': resolve(__dirname, '../../packages/utils/dist'),
    },
  },
});
