import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="magnetic-rift"]');
if (!element) throw new Error('Missing Magnetic Rift root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
