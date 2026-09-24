import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="fold-mark"]');
if (!element) throw new Error('Missing Fold Mark root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
