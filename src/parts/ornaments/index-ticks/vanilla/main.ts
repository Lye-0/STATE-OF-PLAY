import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="index-ticks"]');
if (!element) throw new Error('Missing Index Ticks root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
