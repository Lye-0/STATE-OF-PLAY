import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Fold Line Tag root');
const controller = init(element, {onDataChange(value) { console.info('Fold Line Tag value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
