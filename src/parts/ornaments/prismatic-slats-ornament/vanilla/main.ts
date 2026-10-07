import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="prismatic-slats-ornament"]');
if (!element) throw new Error('Missing Prismatic Slats Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
