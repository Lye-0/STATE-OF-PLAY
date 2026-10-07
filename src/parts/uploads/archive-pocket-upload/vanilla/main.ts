import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Archive Pocket Upload root');
const controller = init(element, {onDataChange(value) { console.info('Archive Pocket Upload value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
