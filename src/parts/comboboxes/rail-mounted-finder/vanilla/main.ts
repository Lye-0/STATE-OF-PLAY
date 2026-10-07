import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="comboboxes"]');
if (!element) throw new Error('Missing Rail Mounted Finder root');
const controller = init(element, {onDataChange(value) { console.info('Rail Mounted Finder value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
