import {createCore,syncHeading,q,escape,svg,asStrings,type Choice,type FoundationOptions,type FoundationConfig,type FoundationController,type FoundationValue} from '../core.ts';
import {sequenceHeading} from './pagination.ts';
import {materialSurface,removalEcho} from './motion.ts';

/** Stable keys: repeated values describe one tag, not colliding checkbox instances. */
export function tagChoices(items:readonly Choice[]=[]):Choice[] {
 const seen=new Set<string>();return items.filter(item=>{if(typeof item.value!=='string'||seen.has(item.value))return false;seen.add(item.value);return true;});
}
export function tagValue(value:FoundationValue,items:readonly Choice[]):string[] {
 const present=new Set(items.map(item=>item.value));return [...new Set(asStrings(value))].filter(value=>present.has(value));
}
export function renderBadges(o:FoundationOptions):string {
 return sequenceHeading(o)+`<div class="ff-tags sq-tags" data-tags role="group" aria-label="${escape(o.label??'タグ')}"></div><p class="sq-tag-summary" data-tags-hint></p><span class="sq-sr" data-sq-status role="status" aria-atomic="true"></span>`;
}
type RecordItem={node:HTMLElement,face:HTMLElement,copy:HTMLElement,badge:HTMLElement,input?:HTMLInputElement,remove?:HTMLButtonElement,mode:boolean,art:ReturnType<typeof materialSurface>,selected:boolean};
/** The native checkbox owns selection; a separate button owns deletion. No nested buttons. */
export function mountBadges(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 root.classList.add('sop-sequence');root.dataset.variant=config.variant;root.dataset.foundation='badges';
 const removed=new Set<string>();let itemsRef:readonly Choice[]|undefined;
 const available=(o:FoundationOptions)=>tagChoices(o.items).filter(item=>!removed.has(item.value));
 const c=createCore(root,config,options,(value,o)=>tagValue(value,available(o)));itemsRef=c.options.items;
 if(!root.querySelector('.sq-tags'))root.innerHTML=renderBadges(c.options);
 const body=q(root,'[data-tags]'),status=q(root,'[data-sq-status]'),records=new Map<string,RecordItem>(),echoes=new Set<Animation>();let items:Choice[]=[];
 function create(item:Choice,selectable:boolean):RecordItem {
  const node=document.createElement('span');node.className='ff-tag sq-chip';node.dataset.tagKey=item.value;
  const skin=document.createElement('span');skin.className='sq-skin';skin.setAttribute('aria-hidden','true');node.append(skin);
  const face=document.createElement(selectable?'label':'span');face.className='sq-chip-face';
  const copy=document.createElement('span');copy.className='sq-chip-copy';const badge=document.createElement('small');badge.className='sq-chip-count';
  let input:HTMLInputElement|undefined;
  if(selectable){input=document.createElement('input');input.type='checkbox';input.dataset.tagSelect=item.value;input.value=item.value;face.append(input);}
  face.append(copy,badge);node.append(face);
  const art=materialSurface(root,skin,asStrings(c.data).includes(item.value));
  return {node,face,copy,badge,input,mode:selectable,art,selected:asStrings(c.data).includes(item.value)};
 }
 const cancelEchoes=()=>{for(const a of echoes)a.cancel();echoes.clear();root.querySelectorAll(':scope > .sq-removal-echo').forEach(el=>el.remove());};
 c.sync=reason=>{
  syncHeading(c);const o=c.options;if(itemsRef!==o.items||reason==='reset'){removed.clear();itemsRef=o.items;}
  items=available(o);const selected=tagValue(c.data,items);c.data=selected;
  body.setAttribute('aria-label',o.label??'タグ');root.dataset.selectable=String(!!o.selectable);root.dataset.removable=String(!!o.removable);
  const active=document.activeElement as HTMLElement|null,focusNode=active&&body.contains(active)?active.closest<HTMLElement>('[data-tag-key]'):null;
  const focusKey=focusNode?.dataset.tagKey,focusRemove=active?.hasAttribute('data-tag-remove'),oldOrder=[...records.keys()],focusIndex=focusKey===undefined?-1:oldOrder.indexOf(focusKey);
  const keep=new Set(items.map(item=>item.value));
  for(const [value,record]of records)if(!keep.has(value)){if(reason!=='initial'&&reason!=='reset')removalEcho(root,record.node,echoes);record.art.destroy();record.node.remove();records.delete(value);}
  let cursor=body.firstElementChild;
  for(const item of items){
   let record=records.get(item.value);if(record&&record.mode!==!!o.selectable){record.art.destroy();if(cursor===record.node)cursor=record.node.nextElementSibling;record.node.remove();records.delete(item.value);record=undefined;}
   if(!record){record=create(item,!!o.selectable);records.set(item.value,record);}
   if(record.node!==cursor)body.insertBefore(record.node,cursor);cursor=record.node.nextElementSibling;
   const on=selected.includes(item.value),disabled=!!(o.disabled||item.disabled),readonly=!!o.readOnly;
   record.node.dataset.selected=String(on);record.node.dataset.tagDisabled=String(disabled);record.node.dataset.readonly=String(readonly);
   const icon=item.icon?svg(item.icon):'';
   const copy=`${icon}<span class="sq-chip-text">${escape(item.label)}</span>${o.selectable?'<span class="sq-check" aria-hidden="true">✓</span>':''}`;
   if(record.copy.innerHTML!==copy)record.copy.innerHTML=copy;
   record.badge.hidden=item.badge===undefined||item.badge==='';record.badge.textContent=item.badge??'';
   if(record.input){record.input.checked=on;record.input.disabled=disabled;record.input.name=o.name??'';record.input.setAttribute('aria-label',item.label);record.input.setAttribute('aria-readonly',String(readonly));}
   if(o.removable){if(!record.remove){record.remove=document.createElement('button');record.remove.type='button';record.remove.className='sq-chip-remove';record.remove.innerHTML=svg('close');record.node.append(record.remove);}record.remove.dataset.tagRemove=item.value;record.remove.disabled=disabled||readonly;record.remove.setAttribute('aria-label',`${item.label} を削除`);}
   else if(record.remove){record.remove.remove();record.remove=undefined;}
   record.art.pause(!!o.paused||disabled||readonly);record.art.select(on,reason==='initial'||reason==='reset');if(record.selected!==on&&reason==='value')record.art.pulse();record.selected=on;
  }
  if(focusKey!==undefined){const record=records.get(focusKey),same=focusRemove?record?.remove:record?.input;
   if(same&&!same.disabled){if(document.activeElement!==same)same.focus({preventScroll:true});}
   else{const candidates=items.map(item=>records.get(item.value)!).filter(r=>!r.node.matches('[data-tag-disabled=true]'));const candidate=candidates[Math.min(Math.max(0,focusIndex),candidates.length-1)];const target=(focusRemove?candidate?.remove:candidate?.input)??candidate?.remove??candidate?.input;if(target)target.focus({preventScroll:true});else{body.tabIndex=-1;body.focus({preventScroll:true});}}
  }
  q(root,'[data-tags-hint]').textContent=items.length===0?'タグはありません':o.selectable?`${selected.length} 選択 / ${items.length} タグ`:`${items.length} タグ${o.removable?' · × で削除':''}`;
  if(o.paused)cancelEchoes();
 };
 c.on(body,'click',event=>{
  const target=event.target as Element,recordNode=target.closest<HTMLElement>('[data-tag-key]');if(!recordNode)return;
  const item=items.find(item=>item.value===recordNode.dataset.tagKey);if(!item)return;
  if(c.options.disabled||c.options.readOnly||item.disabled){event.preventDefault();return;}
  const button=target.closest<HTMLButtonElement>('[data-tag-remove]');if(!button)return;
  event.preventDefault();const value=item.value;
  if(!c.options.controlled)removed.add(value);
  c.options.onAction?.(value);
  if(c.dead)return;
  if(!c.options.controlled){c.send(asStrings(c.data).filter(v=>v!==value));status.textContent=`${item.label} を削除しました`;}
  // Controlled removal is an onAction request: items remain until the owner updates items.
 },{capture:true});
 c.on(body,'change',event=>{
  const input=event.target;if(!(input instanceof HTMLInputElement)||!input.hasAttribute('data-tag-select'))return;
  const item=items.find(item=>item.value===input.dataset.tagSelect);if(!item||item.disabled||c.options.disabled||c.options.readOnly){c.sync('value');return;}
  const previous=asStrings(c.data);c.send(input.checked?[...previous,item.value]:previous.filter(v=>v!==item.value));
 });
 function hover(event:Event,on:boolean){const e=event as PointerEvent;if(e.pointerType==='touch')return;const node=(e.target as Element).closest<HTMLElement>('[data-tag-key]');if(!node||node.contains(e.relatedTarget as Node))return;const record=records.get(node.dataset.tagKey!);if(record&&record.node.dataset.tagDisabled!=='true'&&record.node.dataset.readonly!=='true')record.art.hover(on);}
 c.on(body,'pointerover',e=>hover(e,true));c.on(body,'pointerout',e=>hover(e,false));
 c.on(body,'focusin',e=>{const key=(e.target as Element).closest<HTMLElement>('[data-tag-key]')?.dataset.tagKey;if(key!==undefined)records.get(key)?.art.hover(true);});
 c.on(body,'focusout',e=>{const node=(e.target as Element).closest<HTMLElement>('[data-tag-key]');if(node&&!node.contains((e as FocusEvent).relatedTarget as Node))records.get(node.dataset.tagKey!)?.art.hover(false);});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');c.on(reduced,'change',cancelEchoes);c.on(document,'visibilitychange',()=>{if(document.hidden)cancelEchoes();});
 c.cleanup(()=>{cancelEchoes();records.forEach(r=>r.art.destroy());records.clear();});c.sync('initial');return c;
}
