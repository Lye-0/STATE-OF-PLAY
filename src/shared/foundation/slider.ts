import { createCore, numericValue, bounds, heading, syncHeading, q, escape, setName, uniqueId, type FoundationConfig, type FoundationOptions, type FoundationController } from './core.ts';
export function renderSlider(o:FoundationOptions):string {
 return heading(o)+`<output class="ff-reading" data-reading>${escape(o.range?'20 – 80':o.value??o.defaultValue??62)}<small>${escape(o.unit??'%')}</small></output><div class="ff-slider"><div class="ff-rail" aria-hidden="true"><span class="ff-fill"></span><span class="ff-ticks"></span></div><input data-range="0" type="range" aria-label="${escape(o.label)}"><input data-range="1" type="range" aria-label="${escape(o.label)} 上限" ${o.range?'':'hidden'}></div><div class="ff-scale"><span data-min></span><span data-step></span><span data-max></span></div>`;
}
export function mountSlider(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const c=createCore(root,config,options,numericValue);if(!root.querySelector('[data-range]'))root.innerHTML=renderSlider(c.options);
 const inputs=[q<HTMLInputElement>(root,'[data-range="0"]'),q<HTMLInputElement>(root,'[data-range="1"]')],read=q<HTMLOutputElement>(root,'[data-reading]');
 const ids=inputs.map(()=>uniqueId('sop-range')); inputs.forEach((input,i)=>input.id=ids[i]);read.htmlFor.value=ids.join(' ');
 c.sync=()=>{syncHeading(c);const o=c.options,[min,max,step]=bounds(o),values=Array.isArray(c.data)?c.data as number[]:[Number(c.data)];
  inputs.forEach((input,i)=>{input.hidden=i===1&&!o.range; input.min=String(o.range&&i===1?values[0]:min);input.max=String(o.range&&i===0?values[1]:max);input.step=String(step);input.value=String(values[i]??values[0]);input.setAttribute('aria-label',`${o.label??'値'}${o.range?i?' 上限':' 下限':''}`);input.setAttribute('aria-valuetext',`${input.value}${o.unit??''}`);setName(input,o,o.range?i:undefined);input.disabled=!!o.disabled||!!o.readOnly||min===max||(i===1&&!o.range);});
  read.replaceChildren(document.createTextNode(values.join(' – ')));const small=document.createElement('small');small.textContent=o.unit??'';read.append(small);
  q(root,'[data-min]').textContent=`${min}${o.unit??''}`;q(root,'[data-max]').textContent=`${max}${o.unit??''}`;q(root,'[data-step]').textContent=`STEP / ${step}`;
  const percentage=(v:number)=>max>min?100*(v-min)/(max-min):0;root.style.setProperty('--ff-start',`${o.range?percentage(values[0]):0}%`);root.style.setProperty('--ff-end',`${percentage(values.at(-1)!)}%`);root.dataset.range=String(!!o.range);
 };
 inputs.forEach((input,index)=>c.on(input,'input',()=>{const n=Number(input.value),value=c.options.range?[...(c.data as number[])]:n;if(Array.isArray(value))value[index]=n;c.send(value);}));
 // Dual native ranges share one rail; a rail press targets the nearest thumb.
 const rail=q<HTMLElement>(root,'.ff-slider');
 c.on(rail,'pointerdown',event=>{const e=event as PointerEvent;if(!c.options.range||c.options.disabled||c.options.readOnly||e.button!==0||e.target instanceof HTMLInputElement)return;
  const [min,max,step]=bounds(c.options),rect=rail.getBoundingClientRect();if(!rect.width)return;
  const raw=Math.max(min,Math.min(max,min+(e.clientX-rect.left)/rect.width*(max-min))),values=c.data as number[],index=Math.abs(raw-values[0])<=Math.abs(raw-values[1])?0:1;
  const next=[...values];next[index]=index?Math.max(raw,values[0]):Math.min(raw,values[1]);c.send(next);inputs[index].focus();
 });
 c.sync('initial');return c;
}
