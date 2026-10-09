import {createCore,heading,syncHeading,q,escape,svg,asStrings,uniqueId,makeOverlay,type FoundationConfig,type FoundationOptions,type FoundationController,type FoundationValue} from './core.ts';
export function pageItems(page:number,total:number):(number|'…')[]{const count=Math.max(1,Math.floor(total)),current=Math.min(count,Math.max(1,Math.floor(page)));if(count<=7)return Array.from({length:count},(_,i)=>i+1);const visible=new Set([1,count,current-1,current,current+1]);if(current<=3)[2,3,4,5].forEach(v=>visible.add(v));if(current>=count-2)[count-4,count-3,count-2,count-1].forEach(v=>visible.add(v));const sorted=[...visible].filter(n=>n>=1&&n<=count).sort((a,b)=>a-b),result:(number|'…')[]=[];sorted.forEach((n,i)=>{if(i&&n-sorted[i-1]>1)result.push('…');result.push(n);});return result;}
export function renderPagination(o:FoundationOptions):string{return heading(o)+`<nav class="ff-pages" data-pages aria-label="${escape(o.label??'ページ切り替え')}"></nav><div class="ff-page-info" data-page-info></div>`;}
export function mountPagination(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const normalize=(v:FoundationValue,o:FoundationOptions):FoundationValue=>Math.min(Math.max(1,Math.floor(o.totalPages??12)),Math.max(1,Math.floor(Number(v)||1)));
 const c=createCore(root,config,options,normalize);if(!root.querySelector('[data-pages]'))root.innerHTML=renderPagination(c.options);const nav=q(root,'[data-pages]');
 // Keep a single-line page strip readable without scrolling the surrounding page.
 const revealPage=()=>{const strip=nav.querySelector<HTMLElement>('.ff-page-window');if(!strip||strip.clientWidth===0||strip.scrollWidth<=strip.clientWidth+1)return;
  const focused=document.activeElement instanceof HTMLElement&&document.activeElement.parentElement===strip?document.activeElement:null;
  const item=focused??strip.querySelector<HTMLElement>('[aria-current=page]');if(!item)return;
  const box=strip.getBoundingClientRect(),r=item.getBoundingClientRect(),scale=box.width/(strip.offsetWidth||box.width),left=box.left+strip.clientLeft*scale,right=left+strip.clientWidth*scale;
  const delta=r.width>right-left?(getComputedStyle(strip).direction==='rtl'?r.right-right:r.left-left):r.left<left?r.left-left:r.right>right?r.right-right:0;
  if(Math.abs(delta)>.5)strip.scrollBy({left:delta/scale,behavior:'instant'});
 };
 c.on(nav,'focusin',revealPage);
 const pageObserver=typeof ResizeObserver==='undefined'?null:new ResizeObserver(revealPage);pageObserver?.observe(nav);c.cleanup(()=>pageObserver?.disconnect());
 c.sync=()=>{syncHeading(c);const o=c.options,total=Math.max(1,Math.floor(o.totalPages??12)),page=Number(c.data);
  const control=(n:number,label:string,body:string,disabled=false)=>o.hrefForPage?`<a ${disabled||o.disabled||o.readOnly?'aria-disabled="true"':`href="${escape(o.hrefForPage(n))}"`} data-page="${n}" aria-label="${escape(label)}" ${n===page&&label===`ページ ${n}`?'aria-current="page"':''}>${body}</a>`:`<button type="button" data-page="${n}" aria-label="${escape(label)}" ${disabled||o.disabled?'disabled':''} ${n===page&&label===`ページ ${n}`?'aria-current="page"':''}>${body}</button>`;
  const focused=nav.contains(document.activeElement)?document.activeElement?.getAttribute('aria-label'):null;
  const items=pageItems(page,total).map(item=>item==='…'?'<span class="ff-ellipsis" aria-hidden="true">…</span>':control(item,`ページ ${item}`,String(item).padStart(2,'0'))).join('');
  nav.dataset.layout=o.paginationLayout??'inline';
  nav.innerHTML=control(Math.max(1,page-1),'前のページ','‹',page===1)+(o.paginationLayout==='anchored'?`<div class="ff-page-window">${items}</div>`:items)+control(Math.min(total,page+1),'次のページ','›',page===total);
  if(focused&&o.paginationLayout==='anchored'){
   const target=[...nav.querySelectorAll<HTMLElement>('[aria-label]')].find(e=>e.getAttribute('aria-label')===focused&&!e.matches(':disabled,[aria-disabled=true]'))??nav.querySelector<HTMLElement>('[aria-current=page]');
   target?.focus({preventScroll:true});
  }
  revealPage();
  q(root,'[data-page-info]').innerHTML=`<strong>${String(page).padStart(2,'0')}</strong><span>/ ${total} PAGES</span>`;
 };
 c.on(nav,'click',event=>{const e=event as MouseEvent,el=(e.target as Element).closest<HTMLElement>('[data-page]');if(!el)return;if(el.getAttribute('aria-disabled')==='true'||c.options.disabled||c.options.readOnly){e.preventDefault();return;}if(el.tagName==='A'&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0))return;if(el.tagName!=='A')c.send(Number(el.dataset.page));else c.options.onDataChange?.(Number(el.dataset.page));});c.sync('initial');return c;
}
export function renderBreadcrumbs(o:FoundationOptions):string{return heading(o)+`<nav class="ff-breadcrumb" aria-label="${escape(o.label??'現在の場所')}"><ol data-breadcrumbs></ol></nav><div class="ff-floating ff-crumb-menu" data-crumb-menu></div>`;}
export function mountBreadcrumbs(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const c=createCore(root,config,options);if(!root.querySelector('[data-breadcrumbs]'))root.innerHTML=renderBreadcrumbs(c.options);const list=q(root,'[data-breadcrumbs]'),panel=q<HTMLElement>(root,'[data-crumb-menu]');panel.id=uniqueId('sop-trail');let overlay:ReturnType<typeof makeOverlay>|undefined,focusTimer=0;
 function link(index:number){const item=(c.options.items??[])[index],last=index===(c.options.items?.length??0)-1;return last?`<span aria-current="page">${escape(item.label)}</span>`:`<a ${item.disabled||c.options.disabled?'aria-disabled="true" tabindex="-1"':`href="${escape(item.href??'#')}"`}>${escape(item.label)}</a>`;}
 c.sync=()=>{clearTimeout(focusTimer);syncHeading(c);overlay?.destroy();overlay=undefined;panel.hidden=true;const items=c.options.items??[],collapse=items.length>4;
  list.innerHTML=items.map((_,i)=>collapse&&i>0&&i<items.length-2?i===1?`<li><button class="ff-crumb-more" type="button" data-crumb-more aria-controls="${panel.id}" aria-label="途中の階層を表示" aria-expanded="false" ${c.options.disabled?'disabled':''}>…</button></li>`:'':`<li>${i===0?svg('home'):''}${link(i)}</li>`).join('');
  panel.innerHTML=collapse?items.slice(1,-2).map((_,i)=>link(i+1)).join(''):'';
 };
 c.on(list,'click',event=>{const button=(event.target as Element).closest<HTMLElement>('[data-crumb-more]');if(button){if(!overlay)overlay=makeOverlay(c,panel,button);if(overlay.open)overlay.hide();else{overlay.show();panel.querySelector<HTMLElement>('a')?.focus();}}const link=(event.target as Element).closest('a[aria-disabled="true"]');if(link)event.preventDefault();});
 c.on(document,'pointerdown',event=>{if(overlay?.open&&!root.contains(event.target as Node))overlay.hide();},{capture:true});
 c.on(root,'focusout',event=>{
  clearTimeout(focusTimer);const next=(event as FocusEvent).relatedTarget;
  if(next instanceof Node){if(!root.contains(next))overlay?.hide();return;}
  focusTimer=window.setTimeout(()=>{if(!c.dead&&!root.contains(document.activeElement))overlay?.hide();},0);
 });
 c.cleanup(()=>clearTimeout(focusTimer));c.on(document,'keydown',event=>{const e=event as KeyboardEvent;if(e.key==='Escape'&&overlay?.open){e.stopPropagation();e.preventDefault();overlay.hide();root.querySelector<HTMLElement>('[data-crumb-more]')?.focus();}},{capture:true});c.sync('initial');return c;
}
export function renderBadges(o:FoundationOptions):string{return heading(o)+`<div class="ff-tags" data-tags role="group" aria-label="${escape(o.label??'タグ')}"></div><p class="ff-footnote" data-tags-hint>${o.removable?'×からタグを取り除けます。':o.selectable?'複数のタグを選択できます。':'状態を、ひと目で。'}</p>`;}
export function mountBadges(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const normalize=(value:FoundationValue,o:FoundationOptions)=>[...new Set(asStrings(value))].filter(v=>(o.items??[]).some(i=>i.value===v));
 const c=createCore(root,config,options,normalize);if(!root.querySelector('[data-tags]'))root.innerHTML=renderBadges(c.options);
 const body=q(root,'[data-tags]');let items=[...(c.options.items??[])],itemsRef=c.options.items;
 const rows=new Map<string,{tag:HTMLSpanElement;copy:HTMLSpanElement;label:HTMLLabelElement|null;input:HTMLInputElement|null;badge:HTMLElement|null;remove:HTMLButtonElement|null}>();
 c.sync=reason=>{
  syncHeading(c);const o=c.options;if(o.items!==itemsRef||reason==='reset'){items=[...(o.items??[])];itemsRef=o.items;}
  c.data=normalize(c.data,o).filter(v=>items.some(i=>i.value===v));
  const retained=new Set(items.map(i=>i.value));for(const[value,row]of rows)if(!retained.has(value)){row.tag.remove();rows.delete(value);}
  let previous:HTMLElement|null=null;
  for(const item of items){
   let row=rows.get(item.value);
   if(!row){const tag=document.createElement('span'),copy=document.createElement('span');tag.className='ff-tag';row={tag,copy,label:null,input:null,badge:null,remove:null};tag.append(copy);rows.set(item.value,row);}
   const {tag,copy}=row;tag.dataset.selected=String(asStrings(c.data).includes(item.value));
   if(o.selectable&&!row.input){row.label=document.createElement('label');row.input=document.createElement('input');row.input.type='checkbox';row.input.dataset.tagSelect=item.value;row.label.append(row.input,copy);tag.prepend(row.label);}
   else if(!o.selectable&&row.input){tag.prepend(copy);row.label!.remove();row.label=null;row.input=null;}
   if(row.input){const input=row.input;input.value=item.value;input.checked=asStrings(c.data).includes(item.value);input.disabled=!!(o.disabled||item.disabled);input.setAttribute('aria-readonly',String(!!o.readOnly));if(o.name)input.name=o.name;else input.removeAttribute('name');}
   const markup=svg(item.icon??'spark')+escape(item.label);if(copy.innerHTML!==markup)copy.innerHTML=markup;
   if(item.badge){if(!row.badge){row.badge=document.createElement('small');tag.append(row.badge);}row.badge.textContent=item.badge;}else{row.badge?.remove();row.badge=null;}
   if(o.removable){if(!row.remove){row.remove=document.createElement('button');row.remove.type='button';row.remove.dataset.tagRemove=item.value;row.remove.innerHTML=svg('close');tag.append(row.remove);}row.remove.setAttribute('aria-label',item.label+' を削除');row.remove.disabled=!!(o.disabled||o.readOnly||item.disabled);}else{row.remove?.remove();row.remove=null;}
   // Keep existing inputs connected on value updates: native focus and label identity survive.
   const next:Element|null=previous?previous.nextElementSibling:body.firstElementChild;if(next!==tag)body.insertBefore(tag,next);previous=tag;
  }
  q(root,'[data-tags-hint]').textContent=o.removable?'×からタグを取り除けます。':o.selectable?'複数のタグを選択できます。':'状態を、ひと目で。';
 };
 c.on(body,'change',event=>{const input=event.target;if(input instanceof HTMLInputElement&&input.dataset.tagSelect!==undefined){if(c.options.disabled||c.options.readOnly||input.disabled){c.sync('value');return;}const values=asStrings(c.data);c.send(input.checked?[...values,input.dataset.tagSelect]:values.filter(v=>v!==input.dataset.tagSelect));}});
 c.on(body,'click',event=>{
  const target=event.target as Element;
  // Checkbox has no native readonly property. Cancel activation while retaining successful controls.
  if(c.options.readOnly&&target.closest('label')){event.preventDefault();return;}
  const button=target.closest<HTMLButtonElement>('[data-tag-remove]');if(!button||button.disabled||c.options.disabled||c.options.readOnly)return;
  const value=button.dataset.tagRemove!,index=items.findIndex(i=>i.value===value);c.options.onAction?.(value);if(c.dead)return;
  if(!c.options.controlled){items=items.filter(i=>i.value!==value);c.send(asStrings(c.data).filter(v=>v!==value));}
  const next=items.slice(Math.max(0,index)).find(i=>!i.disabled)??items.slice(0,Math.max(0,index)).reverse().find(i=>!i.disabled);
  Array.from(body.querySelectorAll<HTMLElement>('button,input')).find(e=>!(e as HTMLButtonElement).disabled&&(e.dataset.tagRemove===next?.value||e.dataset.tagSelect===next?.value))?.focus({preventScroll:true});
 });c.sync('initial');return c;
}
