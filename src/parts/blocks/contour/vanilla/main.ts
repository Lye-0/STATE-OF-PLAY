import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-contour');
if (!element) throw new Error('The Contour root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
