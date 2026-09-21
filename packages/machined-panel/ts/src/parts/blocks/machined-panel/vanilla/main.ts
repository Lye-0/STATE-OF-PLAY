import { init } from './init';

const element = document.querySelector<HTMLElement>('.sop-machined-panel');
if (!element) throw new Error('The Machined Panel root was not found.');
const controller = init(element);

// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
