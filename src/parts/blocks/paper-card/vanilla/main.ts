import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-paper-card');
if (!element) throw new Error('The Paper Card root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
