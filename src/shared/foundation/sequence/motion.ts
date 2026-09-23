import {presentationSpring} from '../../presentation-spring.ts';
import {uniqueId} from '../core.ts';
import {sequenceSkin, materialOf} from './skin.ts';

/** Animates decoration only. Value, reading order and pointer hit targets never wait for a frame. */
export function materialSurface(root:HTMLElement,host:HTMLElement,selected=false) {
 const material=materialOf(root.dataset.variant),id=uniqueId('sq-material');let paused=false,last='';
 const spring=presentationSpring(root,{selection:Number(selected),hover:0,pulse:0},v=>{
  const text=sequenceSkin(material,v.selection,v.hover,v.pulse,id);
  if(text!==last){host.innerHTML=text;last=text;}
  host.style.setProperty('--sq-surface-pulse',String(Math.max(0,v.pulse)));
 });
 spring.to({},true);
 return {
  select(on:boolean,immediate=false){spring.to({selection:Number(on)},immediate||paused);},
  hover(on:boolean){spring.to({hover:Number(on)},paused);},
  pulse(){if(!paused)spring.pulse('pulse',1);},
  pause(on:boolean){paused=on;if(on)spring.snap();},
  destroy(){spring.destroy();host.replaceChildren();}
 };
}

/** One measured moving surface; keys retain a separate, immediate aria-current marker. */
export function pageMotion(root:HTMLElement,list:HTMLElement,viewport:HTMLElement) {
 const life=new AbortController(),indicator=document.createElement('span');indicator.className='sq-page-indicator';indicator.setAttribute('aria-hidden','true');
 const host=document.createElement('span');host.className='sq-skin';indicator.append(host);list.prepend(indicator);
 const art=materialSurface(root,host,true);let initialized=false,dead=false,paused=false,lastTarget:HTMLElement|null=null;
 const spring=presentationSpring(root,{x:0,y:0,width:38,height:52,flight:0},v=>{
  indicator.style.transform=`translate3d(${v.x}px,${v.y}px,0)`;indicator.style.width=`${Math.max(1,v.width)}px`;indicator.style.height=`${Math.max(1,v.height)}px`;
  root.style.setProperty('--sq-flight',String(Math.max(0,v.flight)));
 });
 const measure=(immediate=false,reveal=false)=>{
  if(dead)return;const current=list.querySelector<HTMLElement>('[aria-current="page"]');
  if(!current){indicator.hidden=true;return;}indicator.hidden=false;
  const outer=list.getBoundingClientRect(),r=current.getBoundingClientRect(),sx=list.offsetWidth/(outer.width||1),sy=list.offsetHeight/(outer.height||1);
  const changed=lastTarget!==current;lastTarget=current;
  spring.to({x:(r.left-outer.left)*sx-2,y:(r.top-outer.top)*sy-4,width:current.offsetWidth+4,height:current.offsetHeight+8},immediate||paused||!initialized);
  if(initialized&&changed&&!immediate&&!paused){spring.pulse('flight',1);art.pulse();}initialized=true;
  if(reveal){const visible=viewport.getBoundingClientRect();if(r.left<visible.left)viewport.scrollBy({left:r.left-visible.left-3,behavior:'instant'});else if(r.right>visible.right)viewport.scrollBy({left:r.right-visible.right+3,behavior:'instant'});}
 };
 const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(()=>measure(true));observer?.observe(list);observer?.observe(root);
 window.addEventListener('resize',()=>measure(true),{signal:life.signal,passive:true});
 document.fonts?.ready.then(()=>{if(!dead)measure(true);});
 return {measure,pulse:()=>{if(!paused){spring.pulse('flight',1);art.pulse();}},pause(on:boolean){paused=on;art.pause(on);if(on)spring.snap();},destroy(){dead=true;observer?.disconnect();life.abort();spring.destroy();art.destroy();indicator.remove();root.style.removeProperty('--sq-flight');}};
}

/** A purely decorative removal echo. Inputs and links are never cloned into it. */
export function removalEcho(root:HTMLElement,node:HTMLElement,store:Set<Animation>) {
 if(root.dataset.paused==='true'||document.hidden||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const box=node.getBoundingClientRect(),outer=root.getBoundingClientRect();if(!box.width)return;
 const ghost=document.createElement('span');ghost.className='sq-removal-echo';ghost.setAttribute('aria-hidden','true');ghost.inert=true;
 ghost.innerHTML=node.querySelector('.sq-skin')?.innerHTML??'';
 const scale=root.offsetWidth/(outer.width||1);
 ghost.style.cssText=`left:${(box.left-outer.left)*scale}px;top:${(box.top-outer.top)*scale}px;width:${box.width*scale}px;height:${box.height*scale}px;`;
 root.append(ghost);while(store.size>=6){const oldest=store.values().next().value;if(!oldest)break;store.delete(oldest);oldest.cancel();}
 const paper=['folio','transit','copper'].includes(root.dataset.variant??'');
 const a=ghost.animate(paper?[{opacity:.75,transform:'perspective(500px) rotateX(0deg)',clipPath:'inset(0)'},{opacity:0,transform:'perspective(500px) rotateX(-58deg) translateY(-15px) scale(.7)',clipPath:'inset(0 75% 0 0)'}]:[{opacity:.7,transform:'scale(1)'},{opacity:0,transform:'scale(1.18,.15)',filter:'blur(4px)'}],{duration:340,easing:'cubic-bezier(.2,.8,.2,1)'});
 store.add(a);const done=()=>{store.delete(a);ghost.remove();};a.addEventListener('finish',done,{once:true});a.addEventListener('cancel',done,{once:true});
}
