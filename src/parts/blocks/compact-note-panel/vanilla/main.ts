import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-compact-note-panel');
if (!element) throw new Error('The Compact Note Panel root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
