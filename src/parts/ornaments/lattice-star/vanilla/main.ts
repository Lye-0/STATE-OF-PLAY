import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="lattice-star"]');
if (!element) throw new Error('Missing Lattice Star root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
