import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="comboboxes"]');
if (!element) throw new Error('Missing Ledger Gutter Finder root');
const controller = init(element, {onDataChange(value) { console.info('Ledger Gutter Finder value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
