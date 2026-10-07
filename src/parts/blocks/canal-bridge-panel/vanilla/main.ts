import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-canal-bridge-panel');
if (!element) throw new Error('The Canal Bridge Panel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
