import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="radios"]');
if (!element) throw new Error('Missing Loop Label Choice root');
const controller = init(element, {onDataChange(value) { console.info('Loop Label Choice value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
