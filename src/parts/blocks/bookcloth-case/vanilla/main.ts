import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-bookcloth-case');
if (!element) throw new Error('The Bookcloth Case root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
