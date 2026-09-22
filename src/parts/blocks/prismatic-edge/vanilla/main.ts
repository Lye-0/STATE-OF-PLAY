import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-prismatic-edge');
if (!element) throw new Error('The Prismatic Edge root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
