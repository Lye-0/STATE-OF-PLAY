import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-terraced-paper-panel');
if (!element) throw new Error('The Terraced Paper Panel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
