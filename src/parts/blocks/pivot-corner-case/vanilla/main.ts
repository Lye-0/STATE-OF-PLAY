import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-pivot-corner-case');
if (!element) throw new Error('The Pivot Corner Case root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
