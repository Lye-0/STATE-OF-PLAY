import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-velvet');
if (!element) throw new Error('The Velvet root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
