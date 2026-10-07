import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="sunrise-ribs-ornament"]');
if (!element) throw new Error('Missing Sunrise Ribs Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
