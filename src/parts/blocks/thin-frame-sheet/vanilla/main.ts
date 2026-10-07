import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-thin-frame-sheet');
if (!element) throw new Error('The Thin Frame Sheet root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
