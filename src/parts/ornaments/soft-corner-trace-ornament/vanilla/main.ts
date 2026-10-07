import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="soft-corner-trace-ornament"]');
if (!element) throw new Error('Missing Soft Corner Trace Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
