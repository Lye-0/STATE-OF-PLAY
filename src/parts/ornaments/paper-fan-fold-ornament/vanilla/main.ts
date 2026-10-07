import { init } from './init';
const element = document.querySelector<HTMLElement>('[data-ornament="paper-fan-fold-ornament"]');
if (!element) throw new Error('Missing Paper Fan Fold Ornament root');
const controller = init(element, { paused: false });
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
