import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="radios"]');
if (!element) throw new Error('Missing Nixie Choice root');
const controller = init(element, {onDataChange(value) { console.info('Nixie Choice value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
