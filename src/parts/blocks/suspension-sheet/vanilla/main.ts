import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-suspension-sheet');
if (!element) throw new Error('The Suspension Sheet root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
