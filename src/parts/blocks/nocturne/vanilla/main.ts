import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-nocturne');
if (!element) throw new Error('The Nocturne root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
