import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-ripple-glass');
if (!element) throw new Error('The Ripple Glass root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
