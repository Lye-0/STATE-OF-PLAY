import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-terminal-foil');
if (!element) throw new Error('The Terminal Foil root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
