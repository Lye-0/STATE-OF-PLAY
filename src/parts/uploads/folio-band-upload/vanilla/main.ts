import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Folio Band Upload root');
const controller = init(element, {onDataChange(value) { console.info('Folio Band Upload value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
