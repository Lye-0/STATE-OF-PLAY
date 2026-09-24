import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="prism-well"]');
if (!element) throw new Error('Missing Prism Well root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
