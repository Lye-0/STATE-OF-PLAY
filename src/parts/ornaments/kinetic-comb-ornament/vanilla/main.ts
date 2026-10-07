import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="kinetic-comb-ornament"]');
if (!element) throw new Error('Missing Kinetic Comb Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
