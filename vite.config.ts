import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    appType: 'mpa',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'dev-rewrite-mpa',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/impressum') req.url = '/impressum/index.html';
            if (req.url === '/datenschutz') req.url = '/datenschutz/index.html';
            next();
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          impressum: path.resolve(__dirname, 'impressum/index.html'),
          datenschutz: path.resolve(__dirname, 'datenschutz/index.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
