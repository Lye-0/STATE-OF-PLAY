import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="slim-orbit"]');
if (!element) throw new Error('Missing Slim Orbit root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
