import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="pagination"]');
if (!element) throw new Error('Missing Ledger Page Tabs root');
const controller = init(element, {onDataChange(value) { console.info('Ledger Page Tabs value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
