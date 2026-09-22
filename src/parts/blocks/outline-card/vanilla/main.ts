import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-outline-card');
if (!element) throw new Error('The Outline Card root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
