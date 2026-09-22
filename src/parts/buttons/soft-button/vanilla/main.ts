import {init} from './init';
const root=document.querySelector<HTMLButtonElement>('.sop-soft-button');
if(!root)throw new Error('Missing Soft Button');
const controller=init(root);
// Attach application logic here. This example only counts accepted clicks.
const events=new AbortController();let count=0;
root.addEventListener('click',()=>{const output=document.querySelector<HTMLOutputElement>('[data-action-output]');if(output)output.textContent=`${++count}回操作しました。`; },{signal:events.signal});
window.addEventListener('pagehide',()=>{events.abort();controller.destroy();},{once:true});
