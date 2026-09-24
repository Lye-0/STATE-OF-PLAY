import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="quiet-divider"]');
if (!element) throw new Error('Missing Quiet Divider root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
