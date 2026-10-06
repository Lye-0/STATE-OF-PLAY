import '../parts/colors/chromatic-orbit/styles.css';
import {createColor} from '../shared/signature/color';
import {identity} from '../shared/signature/core';
import {appearanceCSS,type AppearanceColors,type ColorRole} from '../catalog/appearance';
import type {Part} from '../catalog/types';
import {escapeHTML} from './utils';

export function mountAppearanceControls(host:HTMLElement,template:Part,onChange:(colors:AppearanceColors)=>void):()=>void {
 const profile=template.appearance;if(!profile)return ()=>{};
 const controls=document.createElement('fieldset');controls.className='appearance-controls';
 controls.innerHTML=`<legend>配色を調整</legend><p class="appearance-note">主要な色だけを変更できます。コード・プロンプト・ZIPにも反映します。</p><div class="appearance-fields">${profile.fields.map(f=>`<div class="appearance-color" data-color-role="${f.key}"><button type="button" class="appearance-trigger" aria-expanded="false" aria-haspopup="dialog"><span class="appearance-swatch" style="background:${f.value}"></span><span>${escapeHTML(f.label)}<small data-color-value>${f.value.toUpperCase()}</small></span><span aria-hidden="true">↗</span></button><div class="appearance-picker" popover="manual" role="dialog" aria-label="${escapeHTML(f.label)}の配色" hidden><div class="sop-sig sop-chromatic-orbit"><div data-sg-owned></div></div><button type="button" class="small-button" data-picker-close>完了</button></div></div>`).join('')}</div><button type="button" class="small-button appearance-reset">展示の配色に戻す</button>`;
 host.after(controls);
 const life=new AbortController();
 const style=document.createElement('style');style.dataset.detailAppearance=template.id;controls.append(style);
 let colors:AppearanceColors={};
 const update=(field:HTMLElement,value:string)=>{
  const key=field.dataset.colorRole as ColorRole;
  const previous=colors[key]??profile.fields.find(f=>f.key===key)!.value;
  if(previous.toLowerCase()===value.toLowerCase())return;
  colors={...colors,[key]:value.toLowerCase()};
  field.querySelector<HTMLElement>('.appearance-swatch')!.style.background=value;
  field.querySelector('.appearance-trigger [data-color-value]')!.textContent=value.toUpperCase();
  style.textContent=appearanceCSS(template,colors,'#part-details ');onChange(colors);
 };
 const pickers=profile.fields.map(f=>{
  const field=controls.querySelector<HTMLElement>(`[data-color-role="${f.key}"]`)!;
  const trigger=field.querySelector<HTMLButtonElement>('.appearance-trigger')!;
  const panel=field.querySelector<HTMLElement>('.appearance-picker')!;
  panel.id=identity('appearance-picker');trigger.setAttribute('aria-controls',panel.id);
  const picker=createColor(field.querySelector<HTMLElement>('.sop-chromatic-orbit')!,{value:f.value,label:f.label,onValueChange:value=>{picker.update({value});update(field,value);}});
  const hex=field.querySelector<HTMLInputElement>('[data-hex]')!;
  function close(focus=false){
   if(!field.hasAttribute('open'))return;
   if(panel.matches(':popover-open'))panel.hidePopover();panel.hidden=true;field.removeAttribute('open');trigger.setAttribute('aria-expanded','false');
   if(focus)trigger.focus({preventScroll:true});
  }
  function position(){
   if(!field.hasAttribute('open'))return;
   const r=trigger.getBoundingClientRect(),vv=window.visualViewport;
   const w=vv?.width??innerWidth,h=vv?.height??innerHeight,ox=vv?.offsetLeft??0,oy=vv?.offsetTop??0;
   const width=Math.min(280,w-24);
   Object.assign(panel.style,{width:width+'px',maxHeight:(h-24)+'px',left:'0px',top:'0px'});
   const height=panel.getBoundingClientRect().height;
   const right=r.right+12,left=r.left-width-12;
   panel.style.left=(right+width<=ox+w-12?right:left>=ox+12?left:Math.max(ox+12,Math.min(r.left,ox+w-width-12)))+'px';
   panel.style.top=Math.max(oy+12,Math.min(r.top,oy+h-height-12))+'px';
  }
  trigger.addEventListener('click',()=>{
   if(field.hasAttribute('open')){close();return;}
   for(const other of pickers)other.close();
   field.setAttribute('open','');trigger.setAttribute('aria-expanded','true');panel.hidden=false;panel.showPopover();position();hex.focus({preventScroll:true});
  },{signal:life.signal});
  hex.addEventListener('input',()=>{if(/^#[\da-f]{6}$/i.test(hex.value)){picker.update({value:hex.value});update(field,hex.value);}},{signal:life.signal});
  field.addEventListener('keydown',event=>{if(event.key==='Escape'&&field.hasAttribute('open')){event.preventDefault();event.stopPropagation();hex.value=picker.getState().value;hex.dispatchEvent(new Event('change'));close(true);}},{capture:true,signal:life.signal});
  panel.querySelector('[data-picker-close]')!.addEventListener('click',()=>{hex.dispatchEvent(new Event('change'));if(!picker.getState().valid){hex.focus();return;}close(true);},{signal:life.signal});
  document.addEventListener('pointerdown',event=>{if(!event.composedPath().includes(field))close();},{capture:true,signal:life.signal});
  window.addEventListener('resize',position,{signal:life.signal});
  window.addEventListener('scroll',position,{capture:true,passive:true,signal:life.signal});
  window.visualViewport?.addEventListener('resize',position,{signal:life.signal});
  window.visualViewport?.addEventListener('scroll',position,{signal:life.signal});
  panel.addEventListener('change',()=>queueMicrotask(position),{signal:life.signal});
  hex.addEventListener('keydown',()=>queueMicrotask(position),{signal:life.signal});
  return {field,picker,original:f.value,close};
 });
 controls.querySelector('.appearance-reset')!.addEventListener('click',()=>{
  for(const {field,picker,original,close} of pickers){picker.update({value:original});picker.reset();field.querySelector<HTMLElement>('.appearance-swatch')!.style.background=original;field.querySelector('.appearance-trigger [data-color-value]')!.textContent=original.toUpperCase();close();}
  colors={};style.textContent='';onChange(colors);
 },{signal:life.signal});
 return ()=>{life.abort();pickers.forEach(({picker,close})=>{close();picker.destroy();});style.remove();controls.remove();};
}
