import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-rocker');
if (!element) throw new Error('The Rocker root was not found.');
const controller = init(element, {checked: false, onCheckedChange(checked) { console.log('checked:', checked); } });
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
