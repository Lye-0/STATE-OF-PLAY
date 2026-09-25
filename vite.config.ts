import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { catalogPlugin } from './scripts/vite-catalog.ts';
const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as { version: string };
export default defineConfig({
  base: './',
  plugins: [catalogPlugin()],
  define: { __APP_VERSION__: JSON.stringify(version) },
  server: { host: '127.0.0.1', port: 5173 },
  preview: { host: '127.0.0.1', port: 4173 },
  build: { target: 'es2022', outDir: 'dist', emptyOutDir: true, chunkSizeWarningLimit: 2100 }
});
