import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-raster-reveal-toggle');
if (!element) throw new Error('The Raster Reveal Toggle root was not found.');
const controller = init(element, {checked: false, onCheckedChange(checked) { console.log('checked:', checked); } });
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
