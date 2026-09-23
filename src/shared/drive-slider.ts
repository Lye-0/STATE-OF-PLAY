import {createCore,numericValue,bounds,syncHeading,q,setName,uniqueId,type FoundationConfig,type FoundationOptions,type FoundationController} from './foundation/core';
import {renderSlider} from './foundation/slider';
import {presentationSpring} from './presentation-spring';
import {rangeGeometry} from './drive-range-art';
export const renderDriveSlider=renderSlider;
/** Native-range controller with independent ornamental rail. Both range handles share the same scale. */
export function mountDriveSlider(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController{
 const c=createCore(root,config,options,numericValue);
 if(!root.querySelector('[data-range]'))root.innerHTML=renderSlider(c.options);
 root.classList.add('sop-drive-range');
 const inputs=[q<HTMLInputElement>(root,'[data-range="0"]'),q<HTMLInputElement>(root,'[data-range="1"]')],reading=q<HTMLOutputElement>(root,'[data-reading]'),rail=q<HTMLElement>(root,'.ff-slider');
 const ids=inputs.map(()=>uniqueId('drive-range'));inputs.forEach((i,j)=>i.id=ids[j]);reading.htmlFor.value=ids.join(' ');
 const ns='http://www.w3.org/2000/svg';const art=document.createElementNS(ns,'svg');art.classList.add('sop-drive-art');art.setAttribute('aria-hidden','true');art.setAttribute('viewBox','0 0 1000 160');art.setAttribute('preserveAspectRatio','none');
 const defs=document.createElementNS(ns,'defs'),gradient=document.createElementNS(ns,'linearGradient');gradient.id=uniqueId('drive-light');gradient.setAttribute('x1','0');gradient.setAttribute('x2','1');
 for(const [offset,color]of [['0%','var(--ff-accent)'],['50%','var(--drive-light, #f1fff0)'],['100%','var(--ff-accent2)']]){const stop=document.createElementNS(ns,'stop');stop.setAttribute('offset',offset);stop.setAttribute('stop-color',color);gradient.append(stop);}defs.append(gradient);art.append(defs);
 const paths=Array.from({length:48},()=>{const p=document.createElementNS(ns,'path');p.setAttribute('fill','none');p.setAttribute('stroke',`url(#${gradient.id})`);p.setAttribute('vector-effect','non-scaling-stroke');art.append(p);return p;});rail.prepend(art);
 let lo=0,hi=0,phase=0,rtl=false,previous=NaN,dead=false;
 function draw(energy:number){art.style.transform=rtl?'scaleX(-1)':'';const geometry=rangeGeometry(config.variant,lo,hi,energy,phase);paths.forEach((p,i)=>{const g=geometry[i];if(!g){p.setAttribute('display','none');return;}p.removeAttribute('display');p.setAttribute('d',g.d);p.setAttribute('opacity',String(g.opacity));p.setAttribute('fill',g.fill?`url(#${gradient.id})`:'none');p.setAttribute('stroke-width',String(g.width??1));});root.style.setProperty('--drive-energy',energy.toFixed(4));}
 const driver=presentationSpring(root,{energy:0},v=>draw(v.energy));
 c.sync=()=>{syncHeading(c);const o=c.options,[min,max,step]=bounds(o),values=Array.isArray(c.data)?c.data as number[]:[Number(c.data)];
  rtl=getComputedStyle(root).direction==='rtl';
  inputs.forEach((input,i)=>{input.hidden=i===1&&!o.range;input.min=String(min);input.max=String(max);input.step=String(step);input.value=String(values[i]??values[0]);input.setAttribute('aria-label',`${o.label??'値'}${o.range?i?' 上限':' 下限':''}`);input.setAttribute('aria-valuetext',`${input.value}${o.unit??''}`);setName(input,o,o.range?i:undefined);input.disabled=!!o.disabled||!!o.readOnly||min===max||(i===1&&!o.range);});
  reading.replaceChildren(document.createTextNode(values.join(' – ')));const unit=document.createElement('small');unit.textContent=o.unit??'';reading.append(unit);
  q(root,'[data-min]').textContent=`${min}${o.unit??''}`;q(root,'[data-max]').textContent=`${max}${o.unit??''}`;q(root,'[data-step]').textContent=`STEP / ${step}`;
  const fraction=(v:number)=>max>min?Math.max(0,Math.min(1,(v-min)/(max-min))):0;
  lo=o.range?fraction(values[0]):0;hi=fraction(values.at(-1)!);phase=(lo+hi)/2;
  root.style.setProperty('--ff-start',`${(rtl?1-hi:lo)*100}%`);root.style.setProperty('--ff-end',`${(rtl?1-lo:hi)*100}%`);root.dataset.range=String(!!o.range);
  if(Number.isFinite(previous)&&previous!==phase&&!o.paused)driver.pulse('energy',Math.min(1,.35+Math.abs(phase-previous)*3));previous=phase;
  if(o.disabled||o.readOnly||o.paused)driver.to({energy:0},true);draw(driver.values.energy);
 };
 function change(index:number,n:number){const o=c.options;let next:number|number[]=n;if(o.range){next=[...(c.data as number[])];next[index]=index?Math.max(next[0],n):Math.min(next[1],n);}c.send(next);}
 inputs.forEach((input,i)=>{c.on(input,'input',()=>change(i,Number(input.value)));c.on(input,'pointerdown',()=>{if(!input.disabled){root.dataset.drivePressed='true';inputs.forEach((v,j)=>v.style.zIndex=String(i===j?4:3));driver.pulse('energy',.8);}});});
 // In dual-handle mode the unoccupied rail is a separate hit target; capture only that gesture.
 let drag:{id:number;index:number}|null=null;
 function valueAt(x:number){const [min,max]=bounds(c.options),r=rail.getBoundingClientRect(),half=(parseFloat(getComputedStyle(root).getPropertyValue('--drive-thumb'))||32)/2;const f=Math.max(0,Math.min(1,(x-r.left-half)/Math.max(1,r.width-2*half)));return min+(rtl?1-f:f)*(max-min);}
 c.on(rail,'pointerdown',event=>{const e=event as PointerEvent;if(!c.options.range||c.options.disabled||c.options.readOnly||e.button!==0||e.target instanceof HTMLInputElement)return;const n=valueAt(e.clientX),v=c.data as number[],index=Math.abs(n-v[0])<=Math.abs(n-v[1])?0:1;drag={id:e.pointerId,index};change(index,n);inputs[index].focus({preventScroll:true});rail.setPointerCapture(e.pointerId);root.dataset.drivePressed='true';e.preventDefault();});
 c.on(rail,'pointermove',event=>{const e=event as PointerEvent;if(drag&&e.pointerId===drag.id)change(drag.index,valueAt(e.clientX));});
 function release(){if(drag){try{rail.releasePointerCapture(drag.id);}catch{}drag=null;}delete root.dataset.drivePressed;}
 c.on(document,'pointerup',release);c.on(document,'pointercancel',release);c.on(rail,'lostpointercapture',release);c.on(window,'blur',release);
 const resize=typeof ResizeObserver==='undefined'?null:new ResizeObserver(()=>{if(!dead){rtl=getComputedStyle(root).direction==='rtl';draw(driver.values.energy);}});resize?.observe(root);
 c.cleanup(()=>{dead=true;release();driver.destroy();resize?.disconnect();art.remove();root.style.removeProperty('--drive-energy');});
 c.sync('initial');return c;
}
