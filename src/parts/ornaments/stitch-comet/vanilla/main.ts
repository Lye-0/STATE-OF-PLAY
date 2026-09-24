import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="stitch-comet"]');
if (!element) throw new Error('Missing Stitch Comet root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
