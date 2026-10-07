import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="small-tick-wave-ornament"]');
if (!element) throw new Error('Missing Small Tick Wave Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
