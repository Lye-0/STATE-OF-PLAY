import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="stone-stack-mobile-ornament"]');
if (!element) throw new Error('Missing Stone Stack Mobile Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
