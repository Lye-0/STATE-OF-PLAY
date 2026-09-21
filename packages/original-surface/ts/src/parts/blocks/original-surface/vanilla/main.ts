import { init } from './init';

const element = document.querySelector<HTMLElement>('.sop-original-surface');
if (!element) throw new Error('The Original Surface root was not found.');
const controller = init(element);

// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
