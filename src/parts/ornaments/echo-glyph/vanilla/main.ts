import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="echo-glyph"]');
if (!element) throw new Error('Missing Echo Glyph root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
