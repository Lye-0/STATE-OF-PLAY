import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-obsidian');
if (!element) throw new Error('The Obsidian root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
