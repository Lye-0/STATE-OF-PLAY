import { init } from './init';
const root = document.querySelector<HTMLElement>('.sop-lgc-scrollbars-mist');
if (!root) throw new Error('Missing Mist Rail root');
const controller = init(root);
// controller.scrollTo(0.5); controller.setOrientation('horizontal');
// Call destroy before removing this node from an SPA.
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
