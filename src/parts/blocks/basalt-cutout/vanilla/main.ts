import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-basalt-cutout');
if (!element) throw new Error('The Basalt Cutout root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
