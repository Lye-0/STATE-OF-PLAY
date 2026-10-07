import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-caption-band-card');
if (!element) throw new Error('The Caption Band Card root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
