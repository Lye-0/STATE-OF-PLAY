import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="hinge-star"]');
if (!element) throw new Error('Missing Hinge Star root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
