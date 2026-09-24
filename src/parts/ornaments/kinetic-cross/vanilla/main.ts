import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="kinetic-cross"]');
if (!element) throw new Error('Missing Kinetic Cross root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
