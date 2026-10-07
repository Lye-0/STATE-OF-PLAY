import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-woven-mat-panel');
if (!element) throw new Error('The Woven Mat Panel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
