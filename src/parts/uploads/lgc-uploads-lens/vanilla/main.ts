import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Glass Inbox root');
const controller = init(element, {onDataChange(value) { console.info('Glass Inbox value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
