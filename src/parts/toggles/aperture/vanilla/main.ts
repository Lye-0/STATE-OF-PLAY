import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-aperture');
if (!element) throw new Error('The Aperture root was not found.');
const controller = init(element, {checked: false, onCheckedChange(checked) { console.log('checked:', checked); } });
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
