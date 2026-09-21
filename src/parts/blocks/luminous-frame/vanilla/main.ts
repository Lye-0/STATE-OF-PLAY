import { init } from './init';

const element = document.querySelector<HTMLElement>('.sop-luminous-frame');
if (!element) throw new Error('The Luminous Frame root was not found.');
const controller = init(element);

// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
