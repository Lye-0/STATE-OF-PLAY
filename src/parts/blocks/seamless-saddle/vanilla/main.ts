import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-seamless-saddle');
if (!element) throw new Error('The Seamless Saddle root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
