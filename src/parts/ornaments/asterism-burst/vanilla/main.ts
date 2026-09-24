import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="asterism-burst"]');
if (!element) throw new Error('Missing Asterism Burst root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
