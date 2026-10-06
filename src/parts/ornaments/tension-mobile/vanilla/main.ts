import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="tension-mobile"]');
if (!element) throw new Error('Missing Tension Mobile root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
