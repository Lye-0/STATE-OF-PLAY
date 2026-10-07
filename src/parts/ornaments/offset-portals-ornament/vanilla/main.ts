import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="offset-portals-ornament"]');
if (!element) throw new Error('Missing Offset Portals Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
