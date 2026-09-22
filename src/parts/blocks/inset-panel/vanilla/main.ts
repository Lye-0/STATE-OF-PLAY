import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-inset-panel');
if (!element) throw new Error('The Inset Panel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
