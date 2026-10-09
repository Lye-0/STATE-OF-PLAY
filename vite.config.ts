import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { catalogPlugin } from './scripts/vite-catalog.ts';
import { reactOptimizeDependencies } from './scripts/vite-dependencies.ts';
const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as { version: string };
export default defineConfig({
  base: './',
  plugins: [catalogPlugin()],
  optimizeDeps: { include: reactOptimizeDependencies },
  define: { __APP_VERSION__: JSON.stringify(version) },
  // Review snapshots are generated evidence, not live application sources.
  // Watching their copied source trees can exhaust OS file-watch handles.
  server: { host: '127.0.0.1', port: 5173, watch: { ignored: ['**/.test-output/**', '**/docs/**'] } },
  preview: { host: '127.0.0.1', port: 4173 },
  build: { target: 'es2022', outDir: 'dist', emptyOutDir: true, chunkSizeWarningLimit: 2100 }
});
