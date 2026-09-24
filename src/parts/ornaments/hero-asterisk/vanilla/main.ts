import { init } from './init';

const element = document.querySelector<HTMLElement>('[data-ornament="hero-asterisk"]');
if (!element) throw new Error('Missing Hero Asterisk root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
