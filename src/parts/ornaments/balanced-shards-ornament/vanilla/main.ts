import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="balanced-shards-ornament"]');
if (!element) throw new Error('Missing Balanced Shards Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
