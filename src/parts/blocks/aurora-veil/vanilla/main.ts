import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-aurora-veil');
if (!element) throw new Error('The Aurora Veil root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
