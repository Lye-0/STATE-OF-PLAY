const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { OBJECTS } = require('../js/motion.js');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
test('page contains exactly ten accessible native switches', () => {
  const switches = [...html.matchAll(/<button\b[^>]*role="switch"[^>]*>/g)].map(m => m[0]);
  assert.equal(switches.length, 10);
  for (const config of OBJECTS) {
    const button = switches.find(text => text.includes(`data-id="${config.id}"`));
    assert.ok(button, config.id);
    assert.ok(button.includes(`aria-checked="${config.initial}"`));
    assert.match(button, /aria-label="[^"]+"/);
    assert.match(button, /aria-describedby="[^"]+"/);
  }
});
test('every linked local resource exists', () => {
  const links = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m => m[1]);
  for (const file of links) assert.ok(fs.existsSync(path.join(root, file)), file);
});
test('page has no remote fonts, images, scripts or runtime dependencies', () => {
  assert.doesNotMatch(html, /(?:src|href)="https?:\/\//);
  for (const file of ['css/base.css', 'css/objects.css', 'js/app.js', 'js/objects.js']) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    assert.doesNotMatch(text, /(?:https?:\/\/|@import\s|fetch\()/);
  }
});
test('source stays separated, includes responsive and reduced-motion styling', () => {
  assert.equal((html.match(/<link rel="stylesheet"/g) || []).length, 2);
  assert.equal((html.match(/<script src=/g) || []).length, 4);
  const css = fs.readFileSync(path.join(root, 'css/base.css'), 'utf8');
  assert.match(css, /prefers-reduced-motion/); assert.match(css, /max-width:600px/);
  assert.match(css, /touch-action:pan-y/); assert.match(css, /focus-visible/);
});
test('every ID is unique', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length);
});
