import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="hinged-cells-ornament"]');
if (!element) throw new Error('Missing Hinged Cells Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
