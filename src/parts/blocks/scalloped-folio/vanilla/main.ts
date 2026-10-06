import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-scalloped-folio');
if (!element) throw new Error('The Scalloped Folio root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
