import {createCore,syncHeading,q,escape,svg,type FoundationOptions,type FoundationConfig,type FoundationController,type FoundationValue} from '../core.ts';
import {pageItems} from '../navigation.ts';
import {pageMotion} from './motion.ts';

export function pageState(value:FoundationValue,totalPages=12):{page:number,total:number} {
 const total=Number.isFinite(totalPages)?Math.max(1,Math.min(Number.MAX_SAFE_INTEGER,Math.floor(totalPages))):1;
 const number=Number(value),page=Number.isFinite(number)?Math.max(1,Math.min(total,Math.floor(number))):1;
 return {page,total};
}
export function sequenceHeading(o:FoundationOptions):string {
 return `<div class="ff-heading"><span data-ff-label>${escape(o.label??'')}</span></div><p class="ff-description" data-ff-description>${escape(o.description)}</p>`;
}
export function renderPagination(o:FoundationOptions):string {
 return sequenceHeading(o)+`<div class="sq-pager"><div class="sq-page-envelope" aria-hidden="true"><i></i><i></i><i></i></div><nav class="ff-pages sq-pages" data-pages aria-label="${escape(o.label??'ページ送り')}"><span data-sq-prev></span><div class="sq-viewport" data-sq-viewport><div class="sq-page-list" data-sq-list></div></div><span data-sq-next></span></nav><div class="sq-pager-reading" data-page-info><span class="sq-page-folio" data-sq-page>01</span><span class="sq-page-total" data-sq-total></span><span class="sq-progress-rail" aria-hidden="true"><i></i></span></div></div>`;
}
/** Keyed DOM + a presentation-only moving surface. Anchor navigation remains native. */
export function mountPagination(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 root.classList.add('sop-sequence');root.dataset.variant=config.variant;root.dataset.foundation='pagination';
 const c=createCore(root,config,options,(v,o)=>pageState(v,o.totalPages).page);
 if(!root.querySelector('[data-sq-list]'))root.innerHTML=renderPagination(c.options);
 const nav=q(root,'[data-pages]'),list=q(root,'[data-sq-list]'),viewport=q(root,'[data-sq-viewport]'),prev=q(root,'[data-sq-prev]'),next=q(root,'[data-sq-next]');
 const entries=new Map<string,HTMLElement>(),motion=pageMotion(root,list,viewport);let lastPage:number|undefined;
 function control(key:string,page:number,label:string,text:string,blocked:boolean):HTMLElement {
  const o=c.options,tag=o.hrefForPage?'A':'BUTTON';let node=entries.get(key);
  if(node?.tagName!==tag){node?.remove();node=document.createElement(tag.toLowerCase());entries.set(key,node);node.className='sq-page-key';node.dataset.sqKey=key;node.innerHTML='<span class="sq-key-copy"></span>';}
  node.dataset.page=String(page);node.dataset.sqRole=key==='prev'||key==='next'?'step':'page';node.setAttribute('aria-label',label);node.toggleAttribute('data-blocked',blocked);
  if(tag==='A'){const a=node as HTMLAnchorElement;if(blocked){a.removeAttribute('href');a.tabIndex=-1;a.setAttribute('aria-disabled','true');}else{a.setAttribute('href',o.hrefForPage!(page));a.removeAttribute('aria-disabled');a.removeAttribute('tabindex');}}
  else{(node as HTMLButtonElement).type='button';(node as HTMLButtonElement).disabled=blocked;}
  const copy=q(node,'.sq-key-copy');if(copy.textContent!==text)copy.textContent=text;
  if(key===`p${c.data}`)node.setAttribute('aria-current','page');else node.removeAttribute('aria-current');
  return node;
 }
 c.sync=reason=>{
  syncHeading(c);nav.setAttribute('aria-label',c.options.label??'ページ送り');
  const {page,total}=pageState(c.data,c.options.totalPages),blocked=!!(c.options.disabled||c.options.readOnly),focus=document.activeElement as HTMLElement|null;
  const focusKey=focus&&nav.contains(focus)?focus.dataset.sqKey:undefined;
  const previous=control('prev',Math.max(1,page-1),'前のページ','‹',blocked||page===1),following=control('next',Math.min(total,page+1),'次のページ','›',blocked||page===total);
  if(prev.firstChild!==previous)prev.replaceChildren(previous);if(next.firstChild!==following)next.replaceChildren(following);
  const keep=new Set(['prev','next']),nodes:HTMLElement[]=[];let ellipsis=0;
  for(const item of pageItems(page,total)){
   const key=item==='…'?`e${ellipsis++}`:`p${item}`;keep.add(key);
   if(item==='…'){let el=entries.get(key);if(!el){el=document.createElement('span');el.className='ff-ellipsis sq-ellipsis';el.textContent='…';el.setAttribute('aria-hidden','true');entries.set(key,el);}nodes.push(el);}
   else nodes.push(control(key,item,`ページ ${item}`,String(item).padStart(2,'0'),blocked));
  }
  for(const [key,node]of entries)if(!keep.has(key)){node.remove();entries.delete(key);}
  // Preserve unchanged nodes and native focus; insert only when order really changes.
  let cursor=list.querySelector('.sq-page-indicator')?.nextElementSibling??list.firstElementChild;
  for(const node of nodes){if(node!==cursor)list.insertBefore(node,cursor);cursor=node.nextElementSibling;}
  q(root,'[data-sq-page]').textContent=String(page).padStart(2,'0');q(root,'[data-sq-total]').textContent=`/ ${total} ページ`;
  root.style.setProperty('--sq-progress',String(total===1?1:(page-1)/(total-1)));
  root.dataset.direction=lastPage!==undefined&&page<lastPage?'back':'forward';motion.pause(!!c.options.paused);
  motion.measure(reason==='initial'||reason==='options',reason==='value'&&!!focusKey);
  if(focusKey){const target=entries.get(focusKey);if(target?.matches('button:not(:disabled),a[href]')){if(document.activeElement!==target)target.focus({preventScroll:true});}else entries.get(`p${page}`)?.focus({preventScroll:true});}
  lastPage=page;
 };
 c.on(nav,'click',event=>{
  const e=event as MouseEvent,node=(e.target as Element).closest<HTMLElement>('[data-page]');if(!node||!nav.contains(node))return;
  if(node.hasAttribute('data-blocked')||c.options.disabled||c.options.readOnly){e.preventDefault();return;}
  if(node.tagName==='A'){
   if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.button!==0)return;
   if(!e.defaultPrevented)c.options.onDataChange?.(Number(node.dataset.page));
   return; // no preventDefault: destination and browser/router own navigation
  }
  if(Number(node.dataset.page)!==c.data)c.send(Number(node.dataset.page));else motion.pulse();
 });
 c.on(nav,'pointerover',e=>{const node=(e.target as Element).closest<HTMLElement>('[data-page]');if(node&&!node.hasAttribute('data-blocked')&&!(e as PointerEvent).relatedTarget)motion.pulse();});
 c.cleanup(()=>motion.destroy());c.sync('initial');return c;
}
