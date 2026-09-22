import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="toasts"]');
if (!element) throw new Error('Missing Aurora Notice root');
const controller = init(element, {onDataChange(value) { console.info('Aurora Notice value:', value); }});
const trigger = document.createElement('button');trigger.type='button';trigger.textContent='通知を表示';element.before(trigger);
trigger.addEventListener('click',()=>controller.notify?.({title:'通知の表示例',description:'保存処理の成功を示すものではありません。',tone:'info'}));
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
