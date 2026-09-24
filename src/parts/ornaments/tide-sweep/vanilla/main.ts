import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="tide-sweep"]');
if (!element) throw new Error('Missing Tide Sweep root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
