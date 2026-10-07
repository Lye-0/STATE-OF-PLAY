import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="ribbon-lattice-ornament"]');
if (!element) throw new Error('Missing Ribbon Lattice Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
