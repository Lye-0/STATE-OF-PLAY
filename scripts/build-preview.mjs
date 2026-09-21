/** Standalone viewing copy. The project and ZIP remain split into HTML/CSS/JS files. */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let html = await readFile(resolve(root, 'index.html'), 'utf8');
for (const file of ['css/base.css', 'css/objects.css']) {
  const css = await readFile(resolve(root, file), 'utf8');
  html = html.replace(`<link rel="stylesheet" href="${file}">`, `<style>\n${css}\n</style>`);
}
for (const file of ['js/motion.js', 'js/objects.js', 'js/audio.js', 'js/app.js']) html = html.replace(`  <script src="${file}" defer></script>\n`, '');
const scripts = await Promise.all(['js/motion.js', 'js/objects.js', 'js/audio.js', 'js/app.js'].map(file => readFile(resolve(root, file), 'utf8')));
html = html.replace('</body>', scripts.map(code => `<script>\n${code.replace(/<\/script/gi, '<\\/script')}\n</script>`).join('\n') + '\n</body>');
const icon = await readFile(resolve(root, 'assets/favicon.svg'), 'utf8');
html = html.replace('href="assets/favicon.svg"', `href="data:image/svg+xml,${encodeURIComponent(icon)}"`);
const target = process.argv[2] ? resolve(process.cwd(), process.argv[2]) : resolve(root, 'preview.html');
await writeFile(target, html);
console.log(`Preview written to ${target}`);
