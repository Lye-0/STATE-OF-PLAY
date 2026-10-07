import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-vellum-accordion-case');
if (!element) throw new Error('The Vellum Accordion Case root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
