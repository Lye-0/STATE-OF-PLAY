import {escape as h,icon,art,unique,identity,seed,owned,lifecycle,emit,showPanel,hidePanel,positionPanel,type WorkbenchAPI} from './core.ts';
export interface ContextAction {
 id:string;label:string;description?:string;icon?:string;shortcut?:string;disabled?:boolean;
 kind?:'action'|'checkbox'|'radio'|'separator';group?:string;checked?:boolean;danger?:boolean;children?:ContextAction[];
}
export interface ContextOptions {
 label?:string;targetLabel?:string;targetDescription?:string;items?:ContextAction[];
 /** Bind only to this existing element instead of the demonstration surface. */
 targetElement?:HTMLElement|null;
 disabled?:boolean;checked?:Record<string,boolean>;onCheckedChange?:(id:string,checked:boolean)=>void;
 onAction?:(item:ContextAction,signal:AbortSignal)=>void|boolean|Promise<void|boolean>;onOpenChange?:(open:boolean)=>void;
}
export interface ContextState {open:boolean;path:string[];checked:Record<string,boolean>;busy:boolean;lastAction:string|null;error:string;}
export function contextMarkup(options:ContextOptions={},prefix='wb-context'){
 return `<div class="wb-context-target" tabindex="0" aria-label="${h(options.targetLabel??'操作対象。Shift F10でメニューを開く')}">${art('context-target')}<span class="wb-context-object" aria-hidden="true">${icon('file')}<i></i><i></i></span><div class="wb-context-target-copy"><span class="wb-eyebrow">CONTEXT / ACTIONS</span><strong>${h(options.targetLabel??'選択したアイテム')}</strong><small>${h(options.targetDescription??'右クリック、Shift F10、または右のボタン')}</small></div><button type="button" class="wb-context-open wb-icon-button" aria-haspopup="menu" aria-expanded="false" aria-controls="${prefix}-menu" aria-label="操作メニューを開く" ${options.disabled?'disabled':''}>${icon('more')}</button></div><div class="wb-context-panel" popover="manual" hidden data-demo-root><p class="wb-context-subject">${h(options.targetLabel??'選択したアイテム')}</p><header class="wb-context-heading"><button type="button" data-menu-back hidden aria-label="親のメニューへ戻る">${icon('chevron')}</button><span>${h(options.label??'操作')}</span><small class="wb-context-key">ESC</small></header><div role="menu" id="${prefix}-menu" class="wb-context-items" tabindex="-1" aria-label="${h(options.label??'操作')}"></div><p class="wb-context-status" role="status"></p></div><output class="wb-context-result" aria-live="polite"></output>`;
}
export function createContextMenu(root:HTMLElement,provided:ContextOptions={}):WorkbenchAPI<ContextOptions,ContextState>{
 let options=seed(root,provided),items=unique(options.items??[]),isOpen=false,trail:ContextAction[]=[],checked:Record<string,boolean>={...options.checked},busy=false,lastAction:string|null=null,error='';
 function seedChecked(entries:ContextAction[]){for(const a of entries){if(!(a.id in checked))checked[a.id]=!!a.checked;if(a.children)seedChecked(unique(a.children));}}
 seedChecked(items);
 const life=lifecycle(root),host=owned(root),uid=identity('wb-context');host.innerHTML=contextMarkup(options,uid);
 const defaultTarget=host.querySelector<HTMLElement>('.wb-context-target')!;let target=options.targetElement??defaultTarget;
 const opener=host.querySelector<HTMLButtonElement>('.wb-context-open')!,panel=host.querySelector<HTMLElement>('.wb-context-panel')!,menu=host.querySelector<HTMLElement>('[role=menu]')!;
 let anchor:{left:number;top:number}|undefined;
 let origin:HTMLElement|null=null,point={left:0,top:0,bottom:0,width:0},pending:AbortController|undefined,token=0;
 const state=():ContextState=>({open:isOpen,path:trail.map(t=>t.id),checked:{...checked},busy,lastAction,error});
 const current=()=>trail.at(-1)?.children??items;
 const controls=()=>[...menu.querySelectorAll<HTMLButtonElement>('button[role]')];
 function position(){positionPanel(panel,point,true);}
 function render(focusID?:string){
  const active=document.activeElement,ownedFocus=active instanceof HTMLElement&&menu.contains(active)?active.closest<HTMLButtonElement>('[data-menu-action]')?.dataset.menuAction:undefined;
  let group:string|undefined,opened=false,flatIndex=0;menu.innerHTML=current().map(item=>{
   if(item.kind==='separator'){flatIndex++;const closing=opened?'</div>':'';opened=false;group=undefined;return closing+'<div class="wb-context-separator" role="separator"></div>';}
   const name=item.group??'',changed=!opened||name!==group;const head=changed?`${opened?'</div>':''}<div class="wb-context-batch" ${name?`role="group" aria-label="${h(name)}"`:''}>${name?`<div class="wb-menu-group" role="presentation">${h(name)}</div>`:''}`:'';opened=true;group=name;if(changed&&name)flatIndex++;flatIndex++;
   const check=item.kind==='checkbox'||item.kind==='radio',role=check?`menuitem${item.kind}`:'menuitem';
   return `${head}<button type="button" role="${role}" data-menu-action="${h(item.id)}" data-menu-flat-index="${flatIndex}" tabindex="-1" ${check?`aria-checked="${!!(options.checked??checked)[item.id]}"`:''} ${item.disabled?'aria-disabled="true"':''} ${item.children?.length?'aria-haspopup="menu" aria-expanded="false"':''} ${item.danger?'data-danger="true"':''}><span class="wb-menu-glyph">${check?((options.checked??checked)[item.id]?icon('check'):'<i></i>'):icon(item.icon)}</span><span class="wb-menu-copy"><strong>${h(item.label)}</strong>${item.description?`<small>${h(item.description)}</small>`:''}</span>${item.children?.length?`<span class="wb-menu-chevron">${icon('chevron')}</span>`:item.shortcut?`<kbd>${h(item.shortcut)}</kbd>`:''}</button>`;
  }).join('')+(opened?'</div>':'');
  host.querySelector<HTMLElement>('.wb-context-subject')!.textContent=trail.at(-1)?.label??options.targetLabel??'選択したアイテム';
  root.dataset.wbContextDepth=String(trail.length);
  host.querySelector<HTMLElement>('[data-menu-back]')!.hidden=!trail.length;host.querySelector<HTMLElement>('.wb-context-heading > span')!.textContent=trail.at(-1)?.label??options.label??'操作';
  menu.setAttribute('aria-label',trail.at(-1)?.label??options.label??'操作');
  defaultTarget.setAttribute('aria-label',options.targetLabel??'操作対象。Shift F10でメニューを開く');
  defaultTarget.querySelector<HTMLElement>('.wb-context-target-copy strong')!.textContent=options.targetLabel??'選択したアイテム';
  defaultTarget.querySelector<HTMLElement>('.wb-context-target-copy small')!.textContent=options.targetDescription??'右クリック、Shift F10、または右のボタン';
  host.querySelector<HTMLElement>('.wb-context-status')!.textContent=busy?'処理中…':error||(!current().length?'利用できる操作はありません。':'');
  menu.setAttribute('aria-busy',String(busy));opener.disabled=!!options.disabled;
  if(isOpen){position();if(focusID!==undefined||ownedFocus!==undefined){const choices=controls();(choices.find(b=>b.dataset.menuAction===(focusID??ownedFocus))??choices[0]??menu).focus({preventScroll:true});}}
 }
 function close(restore=true){if(!isOpen)return;isOpen=false;pending?.abort();token++;busy=false;hidePanel(panel);opener.setAttribute('aria-expanded','false');root.dataset.wbOpen='false';if(restore&&origin?.isConnected)origin.focus({preventScroll:true});options.onOpenChange?.(false);emit(root,state());}
 function openAt(x?:number,y?:number){if(options.disabled||life.dead)return;origin=document.activeElement instanceof HTMLElement?document.activeElement:target;const r=target.getBoundingClientRect();anchor={left:r.left,top:r.top};point={left:x??r.left+12,top:y??r.bottom+6,bottom:y??r.bottom+6,width:r.width};trail=[];error='';isOpen=true;render();showPanel(panel);position();(controls()[0]??menu).focus({preventScroll:true});opener.setAttribute('aria-expanded','true');root.dataset.wbOpen='true';options.onOpenChange?.(true);life.pulse('open');emit(root,state());}
 function back(){if(!trail.length||busy)return;const parent=trail.pop()!;render(parent.id);life.pulse('back');}
 async function activate(id:string){const item=current().find(i=>i.id===id);if(!item||item.disabled||options.disabled||busy)return;
  if(item.children?.length){trail.push(item);render();life.pulse('submenu');return;}
  if(item.kind==='checkbox'||item.kind==='radio'){
   const next=item.kind==='radio'?true:!(options.checked??checked)[id];if(options.checked===undefined){if(item.kind==='radio')current().filter(i=>i.kind==='radio'&&i.group===item.group).forEach(i=>checked[i.id]=false);checked[id]=next;}options.onCheckedChange?.(id,next);render(id);emit(root,{...state(),requested:{id,checked:next}});life.pulse('check');return;
  }
  busy=true;error='';const n=++token;pending=new AbortController();render(id);
  try{const outcome=await options.onAction?.(item,pending.signal);if(life.dead||n!==token)return;busy=false;lastAction=item.id;host.querySelector('output')!.textContent=`${item.label} を選択しました。`;emit(root,{...state(),action:item.id});if(outcome!==false)close();else render(id);}
  catch(e){if(life.dead||n!==token)return;busy=false;error=e instanceof Error?e.message:'操作に失敗しました。';render(id);}
 }
 let targetEvents=new AbortController();
 function bindTarget(){
  targetEvents.abort();targetEvents=new AbortController();target=options.targetElement??defaultTarget;defaultTarget.hidden=target!==defaultTarget;
  target.addEventListener('contextmenu',e=>{if(options.disabled||e.defaultPrevented)return;e.preventDefault();e.stopPropagation();target.focus({preventScroll:true});openAt(e.clientX,e.clientY);},{signal:targetEvents.signal});
  target.addEventListener('keydown',e=>{if(e.key==='ContextMenu'||(e.shiftKey&&e.key==='F10')){if(options.disabled||e.defaultPrevented)return;e.preventDefault();e.stopPropagation();openAt();}},{signal:targetEvents.signal});
 }
 bindTarget();life.cleanup(()=>targetEvents.abort());
 // Touch has an explicit visible button in the default surface. For an external target, callers can use API.open().
 opener.addEventListener('click',()=>{if(isOpen)close();else openAt();},{signal:life.signal});
 menu.addEventListener('click',e=>{const b=(e.target as Element).closest<HTMLElement>('[data-menu-action]');if(b)void activate(b.dataset.menuAction!);},{signal:life.signal});
 menu.addEventListener('pointermove',e=>{const b=(e.target as Element).closest<HTMLElement>('[data-menu-action]');if(b&&!busy)b.focus({preventScroll:true});},{signal:life.signal,passive:true});
 host.querySelector('[data-menu-back]')!.addEventListener('click',back,{signal:life.signal});
 panel.addEventListener('keydown',e=>{const list=controls(),index=list.indexOf(document.activeElement as HTMLButtonElement);
  if(e.key==='Escape'){e.preventDefault();e.stopPropagation();if(trail.length)back();else close();}
  else if(e.key==='Tab'){close();}
  else if(e.key===(getComputedStyle(root).direction==='rtl'?'ArrowRight':'ArrowLeft')){e.preventDefault();back();}
  else if(e.key===(getComputedStyle(root).direction==='rtl'?'ArrowLeft':'ArrowRight')){const item=current().find(a=>a.id===list[index]?.dataset.menuAction);if(item?.children?.length){e.preventDefault();void activate(item.id);}}
  else if(['ArrowUp','ArrowDown','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?list.length-1:(index+(e.key==='ArrowDown'?1:-1)+list.length)%Math.max(1,list.length);list[next]?.focus({preventScroll:true});}
  else if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key!==' '){const ordered=[...list.slice(index+1),...list.slice(0,index+1)];ordered.find(b=>b.querySelector('strong')?.textContent?.toLowerCase().startsWith(e.key.toLowerCase()))?.focus();}
 },{signal:life.signal});
 document.addEventListener('pointerdown',e=>{if(isOpen&&!panel.contains(e.target as Node)&&!opener.contains(e.target as Node))close(false);},{signal:life.signal});
 window.addEventListener('resize',()=>{if(isOpen)position();},{signal:life.signal});
 // A queued scroll from revealing the opener can arrive after openAt. Only dismiss if its anchor actually moved.
 document.addEventListener('scroll',e=>{if(!isOpen||!anchor||panel.contains(e.target as Node))return;const r=target.getBoundingClientRect();if(Math.abs(r.left-anchor.left)>.5||Math.abs(r.top-anchor.top)>.5)close(false);},{signal:life.signal,capture:true});
 life.cleanup(()=>close(false));render();
 return {getState:state,open:()=>openAt(),close:()=>{if(!life.dead)close();},reset(){if(life.dead)return;close();checked={};seedChecked(items);lastAction=null;error='';render();},setPaused:life.setPaused,destroy:life.destroy,
 update(next){if(life.dead)return;const rebuild=next.items!==undefined&&next.items!==options.items;const targetChanged='targetElement' in next&&next.targetElement!==options.targetElement;options={...options,...next};if(targetChanged){close(false);bindTarget();}if(rebuild){const oldPath=trail.map(item=>item.id);items=unique(next.items!);trail=[];let entries=items;for(const id of oldPath){const parent=entries.find(item=>item.id===id);if(!parent?.children?.length||parent.disabled)break;trail.push(parent);entries=unique(parent.children);}seedChecked(items);}if(next.checked)checked={...next.checked};if(options.disabled)close();render();}};
}
