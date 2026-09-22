import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Blueprint Tags root');
const controller = init(element, {onDataChange(value) { console.info('Blueprint Tags value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
