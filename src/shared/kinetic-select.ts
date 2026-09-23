import {createSelectController,type SelectOptions} from './select-controller';
export type KineticMenu='liquid'|'spotlight'|'elastic'|'fold'|'iris'|'layers'|'magnetic'|'curtain'|'depth'|'type'|'aurora'|'portal';
/** Presentation is optional, interruptible and has no authority over committed values. */
export function createKineticSelect(root:HTMLElement,kind:KineticMenu,options:SelectOptions={}){
 const base=createSelectController(root,options);
 const panel=root.querySelector<HTMLElement>('.sop-select-popup')!,trigger=root.querySelector<HTMLElement>('.sop-select-trigger')!;
 const life=new AbortController(),signal=life.signal;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),forced=matchMedia('(forced-colors: active)');
 let dead=false,opened=false,raf=0,last=0,ready=false,current=0,targetY=0,velocity=0,height=60,targetH=60;
 let pulse=0;
 const oldAria=panel.getAttribute('aria-hidden'),oldInert=panel.inert;
 function restoreClosing(){panel.inert=oldInert;if(oldAria===null)panel.removeAttribute('aria-hidden');else panel.setAttribute('aria-hidden',oldAria);}
 const animations=new Set<Animation>();
 const props=['--kx','--ky','--kw','--kh','--k-speed','--k-pointer-x','--k-pointer-y'];
 const saved=new Map(props.map(p=>[p,panel.style.getPropertyValue(p)]));
 const styles=(k:string,v:string)=>{if(panel.style.getPropertyValue(k)!==v)panel.style.setProperty(k,v);};
 function stopAnimations(){animations.forEach(a=>a.cancel());animations.clear();}
 function animate(el:HTMLElement,frames:Keyframe[],duration:number,delay=0){
  if(reduced.matches||forced.matches||!el.animate)return;
  const a=el.animate(frames,{duration,delay,easing:'cubic-bezier(.18,.8,.2,1)',fill:'backwards'});animations.add(a);a.onfinish=()=>animations.delete(a);a.oncancel=()=>animations.delete(a);
 }
 function target(){
  if(dead||!opened)return;
  const row=panel.querySelector<HTMLElement>('[role="option"][data-active="true"]');
  if(!row)return;
  let y=0,x=0,e:HTMLElement|null=row;while(e&&e!==panel){y+=e.offsetTop;x+=e.offsetLeft;e=e.offsetParent as HTMLElement|null;}
  if(e!==panel){const a=row.getBoundingClientRect(),p=panel.getBoundingClientRect();y=a.top-p.top+panel.scrollTop-panel.clientTop;x=a.left-p.left+panel.scrollLeft-panel.clientLeft;}
  targetY=y;targetH=row.offsetHeight;styles('--kx',`${x}px`);styles('--kw',`${row.offsetWidth}px`);
  if(!ready||reduced.matches||forced.matches){current=y;height=targetH;velocity=0;ready=true;paint();}
  else request();
 }
 function paint(){styles('--ky',`${current.toFixed(2)}px`);styles('--kh',`${height.toFixed(2)}px`);styles('--k-speed',`${Math.min(1,Math.abs(velocity)/950).toFixed(3)}`);}
 function step(t:number){
  raf=0;if(dead||!opened||document.hidden)return;
  const dt=last?Math.min((t-last)/1000,.03):1/60;last=t;
  if(reduced.matches||forced.matches){current=targetY;height=targetH;velocity=0;paint();last=0;return;}
  // Substeps keep the visual spring stable even after a slow frame.
  for(let left=dt;left>0;){const d=Math.min(left,1/180);velocity+=((targetY-current)*(kind==='magnetic'?500:360)-velocity*(kind==='elastic'?21:28))*d;current+=velocity*d;left-=d;}
  height+=(targetH-height)*(1-Math.exp(-dt*20));paint();
  if(Math.abs(targetY-current)>.06||Math.abs(velocity)>.25||Math.abs(height-targetH)>.08)request();
  else{current=targetY;height=targetH;velocity=0;last=0;paint();}
 }
 function request(){if(!raf&&!dead&&opened&&!document.hidden)raf=requestAnimationFrame(step);}
 const frames:Record<KineticMenu,Keyframe[]>={
  liquid:[{opacity:0,transform:'scale(.82,.2)',borderRadius:'70px'},{opacity:1,transform:'scale(1.025,1.015)',offset:.75,borderRadius:'28px'},{transform:'scale(1)',borderRadius:'20px'}],
  spotlight:[{opacity:0,clipPath:'inset(0 47% 95% 47%)'},{opacity:1,clipPath:'inset(0 0 0 0)'}],
  elastic:[{opacity:0,transform:'scale(.7,.15)'},{opacity:1,transform:'scale(1.025,1.05)',offset:.7},{transform:'scale(1)'}],
  fold:[{opacity:.25,transform:'perspective(800px) rotateX(-65deg) scaleY(.3)'},{opacity:1,transform:'perspective(800px) rotateX(0deg) scaleY(1)'}],
  iris:[{opacity:.7,clipPath:'circle(0% at 88% 0%)'},{opacity:1,clipPath:'circle(145% at 88% 0%)'}],
  layers:[{opacity:0,transform:'perspective(850px) rotateX(-25deg) translateY(-18px) scale(.91)'},{opacity:1,transform:'perspective(850px) rotateX(0deg) translateY(0) scale(1)'}],
  magnetic:[{opacity:0,transform:'translateY(-22px) scale(.97)'},{opacity:1,transform:'translateY(5px) scale(1)',offset:.65},{transform:'translateY(0)'}],
  curtain:[{opacity:.5,clipPath:'inset(0 50% 0 50% round 8px)'},{opacity:1,clipPath:'inset(0 0 0 0 round 8px)'}],
  depth:[{opacity:0,transform:'perspective(750px) translateZ(-180px) rotateX(18deg)'},{opacity:1,transform:'perspective(750px) translateZ(0) rotateX(0deg)'}],
  type:[{opacity:0,clipPath:'inset(0 100% 0 0)'},{opacity:1,clipPath:'inset(0 0 0 0)'}],
  aurora:[{opacity:0,transform:'scale(.88) translateY(-18px)',filter:'blur(8px)'},{opacity:1,transform:'scale(1) translateY(0)',filter:'blur(0px)'}],
  portal:[{opacity:0,transform:'perspective(600px) rotateY(30deg) scale(.6)'},{opacity:1,transform:'perspective(600px) rotateY(0deg) scale(1)'}],
 };
 function open(){
  if(dead)return;restoreClosing();opened=true;ready=false;last=0;stopAnimations();target();
  panel.dataset.kineticReady='true';animate(panel,frames[kind].map(f=>panel.dataset.side==='top'&&typeof f.clipPath==='string'?{...f,clipPath:f.clipPath.replace('at 88% 0%','at 88% 100%')}:f),kind==='fold'?460:380);
  const rows=[...panel.querySelectorAll<HTMLElement>('[role="option"]')];
  if(['fold','layers','depth','portal','curtain'].includes(kind))rows.forEach((row,i)=>{
   const transform=kind==='fold'?`perspective(600px) rotateX(${i%2?'-':'+'}72deg)`:kind==='curtain'?`translateX(${i%2?'-':''}32px)`:kind==='layers'?'perspective(600px) translateZ(-75px) rotateX(-14deg)':'perspective(700px) translateZ(-110px)';
   animate(row,[{opacity:0,transform},{opacity:1,transform:'none'}],300,Math.min(i,7)*25);
  });
 }
 function close(){
  opened=false;ready=false;cancelAnimationFrame(raf);raf=0;last=0;stopAnimations();delete panel.dataset.kineticReady;
  // The base controller already closed the popover. Never re-open its full list for exit art.
  panel.setAttribute('aria-hidden','true');panel.inert=true;
  try{panel.hidePopover?.();}catch{ /* already closed */ }
  panel.hidden=true;
  animate(trigger,[{transform:'scale(.986)'},{transform:'scale(1.012)',offset:.6},{transform:'scale(1)'}],260);
 }
 const observer=new MutationObserver(()=>target());observer.observe(panel,{subtree:true,attributes:true,attributeFilter:['data-active'],childList:true,characterData:true});
 const resize=typeof ResizeObserver==='undefined'?null:new ResizeObserver(target);resize?.observe(panel);
 root.addEventListener('sop:select-open',e=>{if(e.target!==root)return;if(base.getOpen())open();else close();},{signal});
 root.addEventListener('sop:select',e=>{if(e.target!==root)return;clearTimeout(pulse);root.dataset.kineticCommit='true';pulse=window.setTimeout(()=>delete root.dataset.kineticCommit,350);},{signal});
 panel.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||reduced.matches||!opened)return;const r=panel.getBoundingClientRect();styles('--k-pointer-x',`${Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100))}%`);styles('--k-pointer-y',`${e.clientY-r.top+panel.scrollTop}px`);},{passive:true,signal});
 panel.addEventListener('scroll',target,{passive:true,signal});
 reduced.addEventListener('change',()=>{stopAnimations();target();},{signal});forced.addEventListener('change',()=>{stopAnimations();target();},{signal});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;last=0;stopAnimations();}else target();},{signal});
 return {...base,refresh(){base.refresh();target();},destroy(){
  if(dead)return;dead=true;life.abort();observer.disconnect();resize?.disconnect();cancelAnimationFrame(raf);clearTimeout(pulse);stopAnimations();
  restoreClosing();delete root.dataset.kineticCommit;delete panel.dataset.kineticReady;saved.forEach((value,key)=>{if(value)panel.style.setProperty(key,value);else panel.style.removeProperty(key);});base.destroy();
 }};
}
