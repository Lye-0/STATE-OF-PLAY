import {createPopupController,type PopupOptions,type PopupController} from './popup-controller';
import {presentationSpring} from './presentation-spring';
/** Tracks only the surface's light/origin. Native top layer and focus stay with popup-controller. */
export function attachTransitPopup(root:HTMLElement):()=>void{
 const dialog=root.querySelector<HTMLDialogElement>(':scope > .sop-popup-window');if(!dialog)return()=>{};
 const events=new AbortController(),media=matchMedia('(prefers-reduced-motion: reduce)');let dead=false;
 const keys=['--pop-x','--pop-y','--pop-origin-x','--pop-origin-y'];const old=new Map(keys.map(k=>[k,dialog.style.getPropertyValue(k)]));
 const light=presentationSpring(dialog,{x:65,y:20},v=>{dialog!.style.setProperty('--pop-x',`${v.x}%`);dialog!.style.setProperty('--pop-y',`${v.y}%`);});
 function anchor(){if(dead||!dialog!.open)return;const trigger=root.querySelector<HTMLElement>(':scope > .sop-popup-trigger'),r=dialog!.getBoundingClientRect(),t=trigger?.getBoundingClientRect();
  if(t){dialog!.style.setProperty('--pop-origin-x',`${Math.max(10,Math.min(90,(t.left+t.width/2-r.left)/Math.max(1,r.width)*100))}%`);dialog!.style.setProperty('--pop-origin-y',`${Math.max(10,Math.min(90,(t.top+t.height/2-r.top)/Math.max(1,r.height)*100))}%`);}}
 const mutation=new MutationObserver(()=>{light.to({x:65,y:20},true);anchor();});mutation.observe(dialog,{attributes:true,attributeFilter:['open']});
 dialog.addEventListener('pointermove',e=>{if(!dialog!.open||media.matches||e.pointerType!=='mouse'||(e.target as Element)?.closest('dialog')!==dialog)return;const r=dialog!.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom){light.to({x:65,y:20});return;}light.to({x:Math.max(0,Math.min(100,100*(e.clientX-r.left)/Math.max(1,r.width))),y:Math.max(0,Math.min(100,100*(e.clientY-r.top)/Math.max(1,r.height)))});},{passive:true,signal:events.signal});
 dialog.addEventListener('pointerleave',()=>light.to({x:65,y:20}),{signal:events.signal});
 light.to({x:65,y:20},true);anchor();return()=>{dead=true;light.destroy();events.abort();mutation.disconnect();for(const [k,v]of old){if(v)dialog!.style.setProperty(k,v);else dialog!.style.removeProperty(k);}};
}
export function createTransitPopup(root:HTMLElement,options:PopupOptions={}):PopupController{const c=createPopupController(root,options),dispose=attachTransitPopup(root);return{...c,destroy(){dispose();c.destroy();}};}
