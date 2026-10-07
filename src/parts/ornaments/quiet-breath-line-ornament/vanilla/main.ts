import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="quiet-breath-line-ornament"]');
if (!element) throw new Error('Missing Quiet Breath Line Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
