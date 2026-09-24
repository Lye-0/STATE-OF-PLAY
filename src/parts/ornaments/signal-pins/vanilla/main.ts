import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="signal-pins"]');
if (!element) throw new Error('Missing Signal Pins root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
