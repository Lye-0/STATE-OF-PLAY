import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-copper-plate');
if (!element) throw new Error('The Copper Plate root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
