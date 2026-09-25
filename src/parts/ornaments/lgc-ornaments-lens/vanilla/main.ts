import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="lgc-ornaments-lens"]');
if (!element) throw new Error('Missing Liquid Halo root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
