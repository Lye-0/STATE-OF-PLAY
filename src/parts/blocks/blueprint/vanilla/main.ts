import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-blueprint');
if (!element) throw new Error('The Blueprint root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
