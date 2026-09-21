import { init } from './init.js';
const element = document.querySelector('.sop-prism');
if (!element)
    throw new Error('The Prism root was not found.');
const controller = init(element, {
    checked: false,
    onCheckedChange(checked) {
        console.log("checked:", checked);
    }
});
// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
