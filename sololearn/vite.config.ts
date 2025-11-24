import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API requests to backend
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from pre-bundling
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Use @ for src path
    },
  },
});
