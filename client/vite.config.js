import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5555',
        changeOrigin: true, // Change the origin of the request to the target URL
        secure: false,      // Allow proxying to servers with self-signed SSL certificates
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the `/api` prefix
      },
    },
  },
});
