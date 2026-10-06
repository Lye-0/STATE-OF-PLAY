import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-plotted-surface');
if (!element) throw new Error('The Plotted Surface root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
