import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="grid-nick"]');
if (!element) throw new Error('Missing Grid Nick root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
