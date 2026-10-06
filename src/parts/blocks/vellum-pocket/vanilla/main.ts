import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-vellum-pocket');
if (!element) throw new Error('The Vellum Pocket root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
