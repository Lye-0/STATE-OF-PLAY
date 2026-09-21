import { init } from './init.js';
const element = document.querySelector('.sop-folded-paper');
if (!element)
    throw new Error('The Folded Paper root was not found.');
const controller = init(element);
// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
