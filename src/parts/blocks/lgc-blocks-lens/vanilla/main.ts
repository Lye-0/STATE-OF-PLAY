import { init } from './init';

const element = document.querySelector<HTMLElement>('.sop-lgc-blocks-lens');
if (!element) throw new Error('The Glass Shelf root was not found.');
const controller = init(element);

// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
