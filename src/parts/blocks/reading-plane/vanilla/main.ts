import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-reading-plane');
if (!element) throw new Error('The Reading Plane root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
