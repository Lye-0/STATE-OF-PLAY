import {presentationSpring} from './presentation-spring';
import {createTabsController,type TabsOptions,type TabsController} from './tabs-controller';
import {createSegmentController,type SegmentOptions} from './segment-controller';
/** Owns decorative geometry only. Real panels, native radios, selection and focus remain immediate. */
export function attachTransitSelection(root:HTMLElement):()=>void {
  const list=root.querySelector<HTMLElement>(':scope > .sop-choice-list');if(!list)return()=>{};
  const life=new AbortController();let dead=false,selected:HTMLElement|null=null,initial=true;
  const properties=['--tr-x','--tr-y','--tr-w','--tr-h','--tr-energy','--tr-velocity','--tr-progress','--tr-pointer-x','--tr-pointer-y'];
  const old=new Map(properties.map(k=>[k,root.style.getPropertyValue(k)]));
  const driver=presentationSpring(root,{x:0,y:0,w:0,h:0,energy:0},(v,s)=>{
    root.style.setProperty('--tr-x',`${v.x.toFixed(3)}px`);root.style.setProperty('--tr-y',`${v.y.toFixed(3)}px`);
    root.style.setProperty('--tr-w',`${Math.max(0,v.w).toFixed(3)}px`);root.style.setProperty('--tr-h',`${Math.max(0,v.h).toFixed(3)}px`);
    root.style.setProperty('--tr-energy',Math.max(0,v.energy).toFixed(4));root.style.setProperty('--tr-progress',(1-Math.max(0,Math.min(1,v.energy))).toFixed(4));
    root.style.setProperty('--tr-velocity',Math.max(-1,Math.min(1,(s.x+s.y)/900)).toFixed(4));
  });
  let lastValue='',lastOrientation='';
  function measure(){if(dead)return;const target=list!.querySelector<HTMLElement>(':scope > .sop-choice-item[data-selected="true"]');
    const value=target?.dataset.choiceValue??'',orientation=root.dataset.orientation??'horizontal';
    const changed=value!==lastValue,layout=orientation!==lastOrientation;
    selected=target;
    if(target){driver.to({x:target.offsetLeft,y:target.offsetTop,w:target.offsetWidth,h:target.offsetHeight},initial||layout);if(changed&&!initial)driver.pulse('energy');}
    else driver.to({w:0,h:0},true);
    lastValue=value;lastOrientation=orientation;initial=false;
  }
  const mutation=new MutationObserver(measure);mutation.observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:['data-selected','data-orientation','hidden','data-choice-value']});
  const observed=new Set<Element>();const resize=typeof ResizeObserver==='undefined'?null:new ResizeObserver(()=>{measure();observeItems();});
  function observeItems(){const next=new Set<Element>([list!,...list!.querySelectorAll(':scope > .sop-choice-item')]);for(const el of observed)if(!next.has(el)){resize?.unobserve(el);observed.delete(el);}for(const el of next)if(!observed.has(el)){resize?.observe(el);observed.add(el);}}
  const children=new MutationObserver(()=>{observeItems();measure();});children.observe(list,{childList:true});
  list.addEventListener('pointermove',e=>{if(driver.reduced||e.pointerType==='touch')return;const r=list!.getBoundingClientRect();root.style.setProperty('--tr-pointer-x',`${100*(e.clientX-r.left)/Math.max(1,r.width)}%`);root.style.setProperty('--tr-pointer-y',`${100*(e.clientY-r.top)/Math.max(1,r.height)}%`);},{passive:true,signal:life.signal});
  list.addEventListener('pointerleave',()=>{root.style.setProperty('--tr-pointer-x','50%');root.style.setProperty('--tr-pointer-y','50%');},{signal:life.signal});
  window.addEventListener('resize',measure,{passive:true,signal:life.signal});document.fonts?.ready.then(()=>{if(!dead)measure();});
  observeItems();measure();root.dataset.transitReady='true';
  return()=>{dead=true;driver.destroy();life.abort();mutation.disconnect();children.disconnect();resize?.disconnect();observed.clear();selected=null;delete root.dataset.transitReady;for(const [k,v] of old){if(v)root.style.setProperty(k,v);else root.style.removeProperty(k);}};
}
export function createTransitTabs(root:HTMLElement,options:TabsOptions={}):TabsController{const c=createTabsController(root,options),dispose=attachTransitSelection(root);return{...c,destroy(){dispose();c.destroy();}};}
export function createTransitSegments(root:HTMLElement,options:SegmentOptions={}):ReturnType<typeof createSegmentController>{const c=createSegmentController(root,options),dispose=attachTransitSelection(root);return{...c,destroy(){dispose();c.destroy();}};}
