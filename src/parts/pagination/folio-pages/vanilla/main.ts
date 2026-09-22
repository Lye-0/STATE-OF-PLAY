import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="pagination"]');
if (!element) throw new Error('Missing Folio Pages root');
const controller = init(element, {onDataChange(value) { console.info('Folio Pages value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
