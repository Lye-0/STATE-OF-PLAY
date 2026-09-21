import { init } from './init';

const element = document.querySelector<HTMLElement>('.sop-bloom');
if (!element) throw new Error('The Bloom root was not found.');
const controller = init(element, {
  checked: false,
  onCheckedChange(checked) {
    console.log("checked:", checked);
  }
});

// On SPA navigation or when removing the component: controller.destroy();
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
