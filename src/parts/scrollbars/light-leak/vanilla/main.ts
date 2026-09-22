import { init } from './init';
const root = document.querySelector<HTMLElement>('.sop-light-leak');
if (!root) throw new Error('Missing Light Leak root');
const controller = init(root);
// controller.scrollTo(0.5); controller.setOrientation('horizontal');
// Call destroy before removing this node from an SPA.
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
