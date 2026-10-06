import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Riveted Tag root');
const controller = init(element, {onDataChange(value) { console.info('Riveted Tag value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
