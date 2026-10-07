import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="slim-lozenge-flow-ornament"]');
if (!element) throw new Error('Missing Slim Lozenge Flow Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
