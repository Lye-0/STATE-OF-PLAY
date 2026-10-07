import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="radios"]');
if (!element) throw new Error('Missing Stepped Tile Choice root');
const controller = init(element, {onDataChange(value) { console.info('Stepped Tile Choice value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
