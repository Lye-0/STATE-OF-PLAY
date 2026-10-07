import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Compact Attachment Upload root');
const controller = init(element, {onDataChange(value) { console.info('Compact Attachment Upload value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
