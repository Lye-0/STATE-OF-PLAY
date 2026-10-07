import { init } from './init';
const root = document.querySelector<HTMLElement>('.sop-flush-edge-scroll');
if (!root) throw new Error('Missing Flush Edge Scroll root');
const controller = init(root);
// controller.scrollTo(0.5); controller.setOrientation('horizontal');
// Call destroy before removing this node from an SPA.
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
