import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="suspended-pennants-ornament"]');
if (!element) throw new Error('Missing Suspended Pennants Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
