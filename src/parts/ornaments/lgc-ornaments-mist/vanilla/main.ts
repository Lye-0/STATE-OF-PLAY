import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="lgc-ornaments-mist"]');
if (!element) throw new Error('Missing Frost Asterisk root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
