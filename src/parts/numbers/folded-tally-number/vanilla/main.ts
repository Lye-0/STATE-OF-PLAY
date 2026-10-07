import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Folded Tally Number root');
const controller = init(element, {onDataChange(value) { console.info('Folded Tally Number value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
