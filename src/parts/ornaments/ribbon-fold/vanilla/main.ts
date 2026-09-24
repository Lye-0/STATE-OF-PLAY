import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="ribbon-fold"]');
if (!element) throw new Error('Missing Ribbon Fold root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
