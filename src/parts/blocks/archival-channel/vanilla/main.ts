import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-archival-channel');
if (!element) throw new Error('The Archival Channel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
