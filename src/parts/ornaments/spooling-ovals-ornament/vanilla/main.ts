import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="spooling-ovals-ornament"]');
if (!element) throw new Error('Missing Spooling Ovals Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
