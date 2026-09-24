import {escape as h,icon,art,unique,identity,seed,owned,lifecycle,emit,listenReset,safeHref,type WorkbenchAPI} from './core.ts';
import {matchItems,type Searchable} from './model.ts';
export interface SearchResult extends Searchable {href?:string;meta?:string;}
export interface SearchFilter {id:string;label:string;}
export interface SearchOptions {
 label?:string;placeholder?:string;name?:string;query?:string;defaultQuery?:string;
 filters?:SearchFilter[];filter?:string;defaultFilter?:string;items?:SearchResult[];
 disabled?:boolean;loading?:boolean;error?:string;debounceMs?:number;showResults?:boolean;
 onQueryChange?:(query:string)=>void;onFilterChange?:(id:string)=>void;
 onSubmit?:(query:string,filter:string)=>void;onResult?:(result:SearchResult)=>void;
 search?:(query:string,filter:string,signal:AbortSignal)=>Promise<SearchResult[]>;
}
export interface SearchState {query:string;filter:string;open:boolean;loading:boolean;results:number;error:string;}
export function searchMarkup(options:SearchOptions={},prefix='wb-search'){
 const query=options.query??options.defaultQuery??'',filters=unique(options.filters??[]);
 return `<div class="wb-search-shell">${art('search')}<label class="wb-label" for="${h(prefix)}-input">${h(options.label??'検索')}</label><div class="wb-search-field"><span class="wb-search-emblem" aria-hidden="true">${icon('search')}<i></i><i></i></span><input id="${h(prefix)}-input" class="wb-search-input" type="search" ${options.name?`name="${h(options.name)}"`:''} value="${h(query)}" placeholder="${h(options.placeholder??'キーワードを入力')}" aria-label="${h(options.label??'検索')}" role="combobox" aria-autocomplete="list" aria-expanded="false" autocomplete="off" ${options.disabled?'disabled':''}><button type="button" class="wb-search-clear wb-icon-button" aria-label="検索文字をクリア" ${query?'':'hidden'}>${icon('close')}</button><button type="button" class="wb-search-submit" aria-label="検索を実行" ${options.disabled?'disabled':''}>${icon('arrow')}<span>検索</span></button></div><div class="wb-search-filters" role="group" aria-label="検索対象" ${filters.length?'':'hidden'}>${filters.map(f=>`<button type="button" data-filter="${h(f.id)}" aria-pressed="false">${h(f.label)}</button>`).join('')}</div><div class="wb-search-results" id="${h(prefix)}-list" hidden><div class="wb-results-caption"><span>RESULTS</span><output class="wb-search-count" aria-live="polite"></output></div><div role="listbox" class="wb-results-list" aria-label="検索候補"></div><p class="wb-search-message" role="status"></p><button type="button" class="wb-retry" hidden>再試行</button></div><span class="wb-sr wb-search-status" role="status"></span></div>`;
}
export function createSearch(root:HTMLElement,provided:SearchOptions={}):WorkbenchAPI<SearchOptions,SearchState>{
 let options=seed(root,provided),query=options.query??options.defaultQuery??'',filters=unique(options.filters??[]),filter=options.filter??options.defaultFilter??filters[0]?.id??'';
 let items=unique(options.items??[]),visible:SearchResult[]=[],open=false,active=-1,composing=false,loading=false,error='',timer=0,request=0;
 let pending:AbortController|undefined, pointerOutside=false;
 const life=lifecycle(root),host=owned(root),uid=identity('wb-search');host.innerHTML=searchMarkup(options,uid);
 const input=host.querySelector<HTMLInputElement>('input')!,results=host.querySelector<HTMLElement>('.wb-search-results')!,list=host.querySelector<HTMLElement>('[role=listbox]')!;
 const status=host.querySelector<HTMLElement>('.wb-search-status')!;
 input.setAttribute('aria-controls',uid+'-options');list.id=uid+'-options';
 const state=():SearchState=>({query,filter,open,loading:loading||!!options.loading,results:visible.length,error:options.error??error});
 const updateActive=()=>{list.querySelectorAll<HTMLElement>('[role=option]').forEach((e,i)=>{e.setAttribute('aria-selected',String(i===active));e.dataset.active=String(i===active);});const el=list.children[active] as HTMLElement|undefined;if(el){input.setAttribute('aria-activedescendant',el.id);el.scrollIntoView({block:'nearest'});}else input.removeAttribute('aria-activedescendant');};
 function paint(){
  host.querySelector<HTMLElement>('.wb-label')!.textContent=options.label??'検索';input.setAttribute('aria-label',options.label??'検索');if(options.name)input.name=options.name;else input.removeAttribute('name');
  input.disabled=!!options.disabled;input.placeholder=options.placeholder??'キーワードを入力';if(input.value!==query&&!composing)input.value=query;
  input.setAttribute('aria-expanded',String(open&&options.showResults!==false));input.setAttribute('aria-busy',String(loading||!!options.loading));
  host.querySelector<HTMLButtonElement>('.wb-search-clear')!.hidden=!input.value;host.querySelector<HTMLButtonElement>('.wb-search-clear')!.disabled=!!options.disabled||composing;
  host.querySelector<HTMLButtonElement>('.wb-search-submit')!.disabled=!!options.disabled||composing;
  root.dataset.wbFocused=String(open);root.dataset.wbFilled=String(!!query);
  host.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.filter===filter));b.disabled=!!options.disabled;});
  results.hidden=!open||options.showResults===false;
  visible=options.search?[...items]:matchItems(items.filter(item=>!filter||filter==='all'||item.group===filter),query);
  list.innerHTML=visible.map((item,i)=>{const href=safeHref(item.href);const tag=href&&!item.disabled?'a':'button';return `<${tag} ${tag==='a'?`href="${h(href)}"`:'type="button"'} role="option" tabindex="-1" id="${uid}-option-${i}" data-result="${h(item.id)}" aria-selected="false" ${item.disabled?'aria-disabled="true"':''}><span class="wb-result-copy"><strong>${h(item.label)}</strong>${item.description?`<small>${h(item.description)}</small>`:''}</span>${item.meta?`<span class="wb-result-meta">${h(item.meta)}</span>`:''}<span class="wb-result-enter">${icon('arrow')}</span></${tag}>`;}).join('');
  const message=host.querySelector<HTMLElement>('.wb-search-message')!,count=host.querySelector<HTMLElement>('.wb-search-count')!;
  const busy=loading||options.loading,failed=options.error??error;
  message.textContent=failed|| (busy?'検索中…':!visible.length?'一致する候補がありません。':'');message.hidden=!message.textContent;
  list.hidden=!!busy||!!failed;count.textContent=busy?'…':`${visible.length} 件`;
  host.querySelector<HTMLButtonElement>('.wb-retry')!.hidden=!failed||!options.search;
  active=Math.min(active,visible.length-1);updateActive();
 }
 function schedule(){
  clearTimeout(timer);pending?.abort();const current=++request;error='';
  if(!options.search){loading=false;paint();return;}
  loading=true;paint();
  timer=window.setTimeout(async()=>{pending=new AbortController();try{const data=await options.search!(query,filter,pending.signal);if(life.dead||current!==request)return;items=unique(data);loading=false;paint();emit(root,state());}catch(e){if(life.dead||current!==request)return;if((e as Error).name==='AbortError')return;error=e instanceof Error?e.message:'検索に失敗しました。';loading=false;paint();}},Math.max(0,options.debounceMs??180));
 }
 function changeQuery(next:string){if(options.disabled)return;query=options.query===undefined?next:options.query;options.onQueryChange?.(next);active=-1;open=true;schedule();life.pulse('search');emit(root,{...state(),requestedQuery:next});}
 function close(){open=false;active=-1;paint();}
 function show(){if(options.disabled)return;open=true;paint();}
 function select(index:number){const item=visible[index];if(!item||item.disabled||loading||options.loading)return;options.onResult?.(item);status.textContent=`${item.label} を選択しました。`;emit(root,{...state(),selected:item.id});close();}
 function submit(){if(options.disabled||composing)return;if(active>=0){const e=list.children[active] as HTMLElement;e?.click();return;}options.onSubmit?.(query,filter);status.textContent=`「${query||'すべて'}」を検索しました。`;emit(root,{...state(),submitted:true});life.pulse('submit');}
 input.addEventListener('focus',show,{signal:life.signal});
 input.addEventListener('input',()=>{if(!composing)changeQuery(input.value);},{signal:life.signal});
 input.addEventListener('compositionstart',()=>{composing=true;paint();},{signal:life.signal});
 input.addEventListener('compositionend',()=>{composing=false;changeQuery(input.value);},{signal:life.signal});
 input.addEventListener('keydown',e=>{
  if(e.isComposing||composing)return;
  if(e.key==='Escape'&&open){e.preventDefault();e.stopPropagation();close();}
  else if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();show();const step=e.key==='ArrowDown'?1:-1;let i=active;for(let n=0;n<visible.length;n++){i=(i+step+visible.length)%visible.length;if(!visible[i].disabled){active=i;break;}}updateActive();}
  else if(e.key==='Enter'){e.preventDefault();submit();}
 },{signal:life.signal});
 host.addEventListener('click',e=>{const el=e.target as Element;
  if(el.closest('.wb-search-clear')){changeQuery('');input.focus();}
  if(el.closest('.wb-search-submit'))submit();
  if(el.closest('.wb-retry'))schedule();
  const f=el.closest<HTMLElement>('[data-filter]');if(f&&!options.disabled){const next=f.dataset.filter!;filter=options.filter===undefined?next:options.filter;options.onFilterChange?.(next);open=true;active=-1;schedule();life.pulse('filter');emit(root,{...state(),requestedFilter:next});}
  const r=el.closest<HTMLElement>('[data-result]');if(r){const i=visible.findIndex(x=>x.id===r.dataset.result);if(visible[i]?.disabled){e.preventDefault();return;}if((e as MouseEvent).metaKey||(e as MouseEvent).ctrlKey)return;select(i);}
 },{signal:life.signal});
 host.addEventListener('pointermove',e=>{const r=(e.target as Element).closest<HTMLElement>('[data-result]');if(r){active=visible.findIndex(x=>x.id===r.dataset.result);updateActive();}},{signal:life.signal,passive:true});
 document.addEventListener('pointerdown',e=>{pointerOutside=!root.contains(e.target as Node);},{signal:life.signal});
 document.addEventListener('click',e=>{if(!root.contains(e.target as Node))close();pointerOutside=false;},{signal:life.signal});
 document.addEventListener('pointercancel',()=>{pointerOutside=false;},{signal:life.signal});
 root.addEventListener('focusout',()=>queueMicrotask(()=>{if(!life.dead&&!pointerOutside&&!root.contains(document.activeElement))close();}),{signal:life.signal});
 function reset(){if(options.query===undefined)query=options.defaultQuery??'';if(options.filter===undefined)filter=options.defaultFilter??filters[0]?.id??'';active=-1;close();schedule();}
 listenReset(root,life.signal,reset);life.cleanup(()=>{request++;pending?.abort();clearTimeout(timer);});paint();
 return {getState:state,reset,open:show,close,setPaused:life.setPaused,destroy:life.destroy,
  update(next){if(life.dead)return;const rerun=('query'in next&&next.query!==options.query)||('filter'in next&&next.filter!==options.filter)||('search'in next&&next.search!==options.search);const newFilters='filters'in next&&next.filters!==options.filters;
   options={...options,...next};if(next.query!==undefined)query=next.query;if(next.filter!==undefined)filter=next.filter;if(next.items)items=unique(next.items);if(newFilters){filters=unique(options.filters??[]);const area=host.querySelector<HTMLElement>('.wb-search-filters')!;area.hidden=!filters.length;area.innerHTML=filters.map(f=>`<button type="button" data-filter="${h(f.id)}" aria-pressed="false">${h(f.label)}</button>`).join('');}
   if(options.disabled)open=false;if(rerun)schedule();else paint();
  }};
}
