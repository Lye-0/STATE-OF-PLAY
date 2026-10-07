import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-recessed-line-toggle');
if (!element) throw new Error('The Recessed Line Toggle root was not found.');
const controller = init(element, {checked: false, onCheckedChange(checked) { console.log('checked:', checked); } });
window.addEventListener('pagehide', () => controller.destroy(), {once: true});
