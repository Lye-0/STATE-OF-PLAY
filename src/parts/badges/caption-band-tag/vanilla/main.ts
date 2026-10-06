import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Caption Band Tag root');
const controller = init(element, {onDataChange(value) { console.info('Caption Band Tag value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
