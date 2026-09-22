import {createCore,bounds,clampStep,heading,syncHeading,q,escape,setName,type FoundationConfig,type FoundationOptions,type FoundationController,type FoundationValue} from './core.ts';
export function renderNumber(o:FoundationOptions):string {return heading(o)+`<div class="ff-stepper"><button type="button" data-adjust="-1" aria-label="減らす">−</button><div class="ff-number-face"><input data-number type="text" inputmode="decimal" role="spinbutton" aria-label="${escape(o.label)}"><span data-unit class="ff-unit">${escape(o.unit)}</span></div><button type="button" data-adjust="1" aria-label="増やす">＋</button></div><p class="ff-footnote" data-number-hint>直接入力、または ± で調整できます。</p>`;}
export function mountNumber(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const normalize=(v:FoundationValue,o:FoundationOptions):FoundationValue=>v===null||v===''?null:clampStep(Number(v),...bounds(o));
 const c=createCore(root,config,options,normalize);if(!root.querySelector('[data-number]'))root.innerHTML=renderNumber(c.options);
 const input=q<HTMLInputElement>(root,'[data-number]');let dirty=false,composing=false;
 const commit=()=>{if(composing||c.options.disabled||c.options.readOnly)return;const draft=input.value.trim();if(draft&&!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?$/i.test(draft)){input.setAttribute('aria-invalid','true');input.setCustomValidity('有効な数値を入力してください。');return;}
  const next=draft?Number(draft):null;if(next!==null&&!Number.isFinite(next)){input.setAttribute('aria-invalid','true');input.setCustomValidity('有効な数値を入力してください。');return;}dirty=false;input.removeAttribute('aria-invalid');input.setCustomValidity('');c.send(next);
 };
 c.sync=reason=>{syncHeading(c);const o=c.options,[min,max,step]=bounds(o);setName(input,o);input.readOnly=!!o.readOnly;input.setAttribute('aria-label',o.label??'数値');input.setAttribute('aria-valuemin',String(min));input.setAttribute('aria-valuemax',String(max));if(c.data===null)input.removeAttribute('aria-valuenow');else input.setAttribute('aria-valuenow',String(c.data));input.setAttribute('aria-valuetext',`${c.data??''}${o.unit??''}`);
  if(reason==='reset'||!dirty&&!composing){input.value=c.data===null?'':String(c.data);if(reason==='reset'){dirty=false;input.removeAttribute('aria-invalid');input.setCustomValidity('');}}
  q(root,'[data-unit]').textContent=o.unit??'';q(root,'[data-number-hint]').textContent=`${min} – ${max}${o.unit??''} · STEP ${step}`;
  root.querySelectorAll<HTMLButtonElement>('[data-adjust]').forEach(b=>b.disabled=!!o.disabled||!!o.readOnly||(Number(b.dataset.adjust)>0?Number(c.data)>=max:c.data!==null&&Number(c.data)<=min));
 };
 c.on(input,'input',()=>{dirty=true;input.removeAttribute('aria-invalid');input.setCustomValidity('');});c.on(input,'compositionstart',()=>{composing=true;});c.on(input,'compositionend',()=>{composing=false;dirty=true;});c.on(input,'blur',commit);
 c.on(input,'keydown',event=>{const e=event as KeyboardEvent;if(e.isComposing||composing)return;if(e.key==='Enter'){commit();return;}if(e.key==='Escape'){dirty=false;input.removeAttribute('aria-invalid');input.setCustomValidity('');c.sync('value');return;}if(['ArrowUp','ArrowDown','Home','End'].includes(e.key)&&!c.options.readOnly){e.preventDefault();const [min,max,step]=bounds(c.options);const current=Number(input.value)||min;dirty=false;c.send(e.key==='Home'?min:e.key==='End'?max:current+(e.key==='ArrowUp'?step:-step));}});
 root.querySelectorAll<HTMLButtonElement>('[data-adjust]').forEach(button=>c.on(button,'click',()=>{if(composing)return;const [min,,step]=bounds(c.options);const current=dirty?Number(input.value):Number(c.data??min);dirty=false;c.send((Number.isFinite(current)?current:min)+Number(button.dataset.adjust)*step);input.focus();}));
 const form=root.closest('form');if(form)c.on(form,'submit',event=>{commit();if(!input.checkValidity()){event.preventDefault();input.reportValidity();}});
 c.sync('initial');return c;
}
