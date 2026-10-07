import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="elliptic-weave-ornament"]');
if (!element) throw new Error('Missing Elliptic Weave Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
