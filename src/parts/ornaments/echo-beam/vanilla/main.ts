import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="echo-beam"]');
if (!element) throw new Error('Missing Echo Beam root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
