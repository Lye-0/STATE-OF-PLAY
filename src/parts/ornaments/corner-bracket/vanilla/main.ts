import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="corner-bracket"]');
if (!element) throw new Error('Missing Corner Bracket root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
