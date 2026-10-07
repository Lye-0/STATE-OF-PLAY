import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-contoured-cork-panel');
if (!element) throw new Error('The Contoured Cork Panel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
