import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-coved-ceramic-panel');
if (!element) throw new Error('The Coved Ceramic Panel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
