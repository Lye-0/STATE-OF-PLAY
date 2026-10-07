import { init } from './init';
const element = document.querySelector<HTMLElement>('.sop-print-registration-board');
if (!element) throw new Error('The Print Registration Board root was not found.');
const controller = init(element);
window.addEventListener('pagehide', () => controller.destroy(), {once:true});
