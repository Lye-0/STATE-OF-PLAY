import {createCore,choiceValue,heading,syncHeading,escape,svg,uniqueId,type FoundationConfig,type FoundationOptions,type FoundationController} from './core.ts';
export function renderRadio(o:FoundationOptions):string {return `<fieldset class="ff-choice-set"><legend data-ff-label>${escape(o.label)}</legend><p data-ff-description class="ff-description">${escape(o.description)}</p><div class="ff-choices" data-choices></div></fieldset>`;}
export function mountRadio(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const c=createCore(root,{...config,multiple:false},options,(v,o)=>choiceValue(v,{...o,multiple:false}));if(!root.querySelector('[data-choices]'))root.innerHTML=renderRadio(c.options);
 const body=root.querySelector<HTMLElement>('[data-choices]')!,group=uniqueId('sop-choice');let rendered='';
 c.sync=()=>{syncHeading(c);const o=c.options,items=o.items??[],key=JSON.stringify(items);
  if(key!==rendered){body.innerHTML=items.map((item,i)=>`<label class="ff-choice"><input type="radio" data-choice="${escape(item.value)}"><span class="ff-choice-icon" aria-hidden="true">${svg(item.icon??(i%2?'file':'spark'))}</span><span class="ff-choice-copy"><strong>${escape(item.label)}</strong><small>${escape(item.description)}</small></span><span class="ff-choice-badge">${escape(item.badge??String(i+1).padStart(2,'0'))}</span><span class="ff-choice-check" aria-hidden="true">${svg('check')}</span></label>`).join('');rendered=key;}
  body.querySelectorAll<HTMLInputElement>('input').forEach(input=>{input.name=o.name??group;input.value=input.dataset.choice!;input.checked=c.data===input.value;input.disabled=!!o.disabled||!!items.find(i=>i.value===input.value)?.disabled;input.required=!!o.required;input.closest('label')!.dataset.selected=String(input.checked);});
 };
 c.on(body,'change',event=>{const input=event.target;if(input instanceof HTMLInputElement&&input.checked)c.send(input.value);});c.sync('initial');return c;
}
