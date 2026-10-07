import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Stone Block Number root');
const controller = init(element, {onDataChange(value) { console.info('Stone Block Number value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
