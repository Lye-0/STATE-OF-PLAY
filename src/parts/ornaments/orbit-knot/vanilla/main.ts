import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="orbit-knot"]');
if (!element) throw new Error('Missing Orbit Knot root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
