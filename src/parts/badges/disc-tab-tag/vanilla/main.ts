import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Disc Tab Tag root');
const controller = init(element, {onDataChange(value) { console.info('Disc Tab Tag value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
