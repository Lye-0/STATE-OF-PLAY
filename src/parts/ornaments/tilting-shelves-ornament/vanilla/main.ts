import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="tilting-shelves-ornament"]');
if (!element) throw new Error('Missing Tilting Shelves Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
