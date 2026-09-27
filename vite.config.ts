import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'whosaheb.github.io', // Relative base URL ensures perfect compatibility with GitHub Pages
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
