import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="notation-dots"]');
if (!element) throw new Error('Missing Notation Dots root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
