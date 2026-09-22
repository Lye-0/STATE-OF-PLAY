import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="comboboxes"]');
if (!element) throw new Error('Missing Slate Finder root');
const controller = init(element, {onDataChange(value) { console.info('Slate Finder value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
