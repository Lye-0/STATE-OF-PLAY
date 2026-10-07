import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Document Slot Upload root');
const controller = init(element, {onDataChange(value) { console.info('Document Slot Upload value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
