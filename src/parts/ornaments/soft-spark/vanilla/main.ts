import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="soft-spark"]');
if (!element) throw new Error('Missing Soft Spark root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
