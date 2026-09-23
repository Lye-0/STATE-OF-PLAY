import {createPopupController,type PopupOptions,type PopupController} from './popup-controller';
/** Tracks only the surface's light/origin. Native top layer and focus stay with popup-controller. */
export function attachTransitPopup(root:HTMLElement):()=>void{
 const dialog=root.querySelector<HTMLDialogElement>(':scope > .sop-popup-window');if(!dialog)return()=>{};
 const events=new AbortController(),media=matchMedia('(prefers-reduced-motion: reduce)');let dead=false;
 const keys=['--pop-x','--pop-y','--pop-origin-x','--pop-origin-y'];const old=new Map(keys.map(k=>[k,dialog.style.getPropertyValue(k)]));
 function anchor(){if(dead||!dialog!.open)return;const trigger=root.querySelector<HTMLElement>(':scope > .sop-popup-trigger'),r=dialog!.getBoundingClientRect(),t=trigger?.getBoundingClientRect();
  if(t){dialog!.style.setProperty('--pop-origin-x',`${Math.max(10,Math.min(90,(t.left+t.width/2-r.left)/Math.max(1,r.width)*100))}%`);dialog!.style.setProperty('--pop-origin-y',`${Math.max(10,Math.min(90,(t.top+t.height/2-r.top)/Math.max(1,r.height)*100))}%`);}}
 const mutation=new MutationObserver(anchor);mutation.observe(dialog,{attributes:true,attributeFilter:['open']});
 dialog.addEventListener('pointermove',e=>{if(media.matches||e.pointerType==='touch'||(e.target as Element)?.closest('dialog')!==dialog)return;const r=dialog!.getBoundingClientRect();dialog!.style.setProperty('--pop-x',`${100*(e.clientX-r.left)/Math.max(1,r.width)}%`);dialog!.style.setProperty('--pop-y',`${100*(e.clientY-r.top)/Math.max(1,r.height)}%`);},{passive:true,signal:events.signal});
 dialog.addEventListener('pointerleave',()=>{dialog!.style.setProperty('--pop-x','65%');dialog!.style.setProperty('--pop-y','20%');},{signal:events.signal});
 anchor();return()=>{dead=true;events.abort();mutation.disconnect();for(const [k,v]of old){if(v)dialog!.style.setProperty(k,v);else dialog!.style.removeProperty(k);}};
}
export function createTransitPopup(root:HTMLElement,options:PopupOptions={}):PopupController{const c=createPopupController(root,options),dispose=attachTransitPopup(root);return{...c,destroy(){dispose();c.destroy();}};}
