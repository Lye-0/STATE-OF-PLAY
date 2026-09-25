import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="radios"]');
if (!element) throw new Error('Missing Lucent Choice root');
const controller = init(element, {onDataChange(value) { console.info('Lucent Choice value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
