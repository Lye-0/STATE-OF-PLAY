import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-gallery-plinth');
if (!element) throw new Error('The Gallery Plinth root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
