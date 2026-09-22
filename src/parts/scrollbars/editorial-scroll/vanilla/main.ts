import { init } from './init';
const root = document.querySelector<HTMLElement>('.sop-editorial-scroll');
if (!root) throw new Error('Missing Editorial Scroll root');
const controller = init(root);
// controller.scrollTo(0.5); controller.setOrientation('horizontal');
// Call destroy before removing this node from an SPA.
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
