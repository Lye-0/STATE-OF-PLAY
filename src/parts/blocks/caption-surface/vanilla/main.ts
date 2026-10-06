import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-caption-surface');
if (!element) throw new Error('The Caption Surface root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
