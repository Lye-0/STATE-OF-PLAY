import {escape as h,icon,art,unique,identity,seed,owned,lifecycle,emit,trapModal,lockScroll,type WorkbenchAPI} from './core.ts';
import {matchItems,type Searchable} from './model.ts';
export interface CommandItem extends Searchable {icon?:string;shortcut?:string;children?:CommandItem[];}
export interface CommandOptions {
 label?:string;triggerLabel?:string;placeholder?:string;items?:CommandItem[];
 open?:boolean;defaultOpen?:boolean;disabled?:boolean;hotkey?:boolean;
 onOpenChange?:(open:boolean)=>void;
 onExecute?:(item:CommandItem,signal:AbortSignal)=>void|boolean|Promise<void|boolean>;
}
export interface CommandState {open:boolean;query:string;path:string[];busy:boolean;error:string;lastCommand:string|null;}
const shortcuts=new Set<{root:HTMLElement;enabled:()=>boolean;open:()=>void}>();
let listening=false;
function globalKey(event:KeyboardEvent){if(event.defaultPrevented||event.isComposing||event.repeat||!(event.ctrlKey||event.metaKey)||event.altKey||event.key.toLowerCase()!=='k')return;
 const candidates=[...shortcuts].filter(s=>s.enabled()&&s.root.isConnected&&s.root.getClientRects().length>0);
 const top=document.querySelector('dialog[open]');
 const candidate=candidates.find(s=>s.root.contains(document.activeElement))??candidates.find(s=>!top||top.contains(s.root));
 if(candidate){event.preventDefault();candidate.open();}
}
export function commandMarkup(options:CommandOptions={},prefix='wb-command'){
 return `<div class="wb-command-launcher">${art('launcher')}<div class="wb-command-symbol" aria-hidden="true">${icon('command')}<i></i><i></i><i></i></div><div class="wb-launch-copy"><span class="wb-eyebrow">COMMAND CENTER</span><strong>${h(options.label??'コマンドパレット')}</strong><p>探す。選ぶ。すぐに実行。</p></div><button type="button" class="wb-command-launch" ${options.disabled?'disabled':''}>${icon('search')}<span>${h(options.triggerLabel??'コマンドを探す')}</span><kbd>Ctrl K</kbd></button></div><dialog class="wb-command-dialog" aria-labelledby="${prefix}-title" data-demo-root><div class="wb-command-frame">${art('command')}<header class="wb-command-top"><span class="wb-eyebrow" id="${prefix}-title">${h(options.label??'コマンドパレット')}</span><button type="button" class="wb-command-close wb-icon-button" aria-label="閉じる">${icon('close')}</button></header><div class="wb-command-path" hidden></div><div class="wb-command-entry">${icon('search')}<input type="search" class="wb-command-input" role="combobox" aria-label="コマンドを検索" aria-autocomplete="list" aria-expanded="true" aria-controls="${prefix}-list" placeholder="${h(options.placeholder??'何をしますか？')}" autocomplete="off"><kbd>ESC</kbd></div><div id="${prefix}-list" class="wb-command-list" role="listbox" aria-label="コマンド一覧"></div><p class="wb-command-status" role="status"></p><footer class="wb-command-foot"><span><kbd>↑</kbd><kbd>↓</kbd> 選択</span><span><kbd>↵</kbd> 実行</span><output>0 COMMANDS</output></footer></div></dialog><span class="wb-sr wb-command-announcement" role="status"></span>`;
}
export function createCommand(root:HTMLElement,provided:CommandOptions={}):WorkbenchAPI<CommandOptions,CommandState>{
 let options=seed(root,provided),items=unique(options.items??[]),isOpen=false,query='',active=0,busy=false,error='',lastCommand:string|null=null;
 let trail:CommandItem[]=[],visible:CommandItem[]=[],returnTo:HTMLElement|null=null,release: (()=>void)|undefined,execution:AbortController|undefined,token=0;
 const life=lifecycle(root),host=owned(root),uid=identity('wb-command');host.innerHTML=commandMarkup(options,uid);
 const dialog=host.querySelector<HTMLDialogElement>('dialog')!,input=host.querySelector<HTMLInputElement>('.wb-command-input')!,list=host.querySelector<HTMLElement>('.wb-command-list')!,trigger=host.querySelector<HTMLButtonElement>('.wb-command-launch')!;
 let composing=false;trapModal(dialog,life.signal);
 const state=():CommandState=>({open:isOpen,query,path:trail.map(x=>x.id),busy,error,lastCommand});
 function move(index:number,direction=1){
  active=-1;
  for(let offset=0;offset<visible.length;offset++){const candidate=((index+direction*offset)%visible.length+visible.length)%visible.length;if(!visible[candidate].disabled){active=candidate;break;}}
  const children=[...list.querySelectorAll<HTMLElement>('[role=option]')];children.forEach((el,i)=>el.setAttribute('aria-selected',String(i===active)));const current=children[active];if(current){input.setAttribute('aria-activedescendant',current.id);current.scrollIntoView({block:'nearest'});}else input.removeAttribute('aria-activedescendant');
 }
 function paint(resetSelection=false){
  const previousId=resetSelection?undefined:visible[active]?.id;
  visible=matchItems(trail.at(-1)?.children??items,query);
  let html='',group:string|undefined,groupIndex=0;
  visible.forEach((item,i)=>{
   if(i===0||item.group!==group){if(i>0)html+='</div>';group=item.group;const heading=`${uid}-group-${groupIndex++}`;html+=`<div class="wb-command-batch" ${group?`role="group" aria-labelledby="${heading}"`:''}>${group?`<div class="wb-command-group" id="${heading}" role="presentation">${h(group)}</div>`:''}`;}
   html+=`<div class="wb-command-option" role="option" id="${uid}-option-${i}" data-command="${h(item.id)}" aria-selected="false" ${item.disabled?'aria-disabled="true"':''}><span class="wb-command-icon">${icon(item.icon??'file')}</span><span class="wb-command-copy"><strong>${h(item.label)}</strong>${item.description?`<small>${h(item.description)}</small>`:''}</span>${item.children?.length?`<span class="wb-command-next">${icon('chevron')}</span>`:item.shortcut?`<kbd>${h(item.shortcut)}</kbd>`:''}</div>`;
  });list.innerHTML=html+(visible.length?'</div>':'');
  active=previousId===undefined?0:visible.findIndex(item=>item.id===previousId);if(active<0)active=0;
  host.querySelector<HTMLElement>('.wb-launch-copy strong')!.textContent=options.label??'コマンドパレット';dialog.querySelector<HTMLElement>('.wb-command-top .wb-eyebrow')!.textContent=options.label??'コマンドパレット';trigger.querySelector('span')!.textContent=options.triggerLabel??'コマンドを探す';
  const path=host.querySelector<HTMLElement>('.wb-command-path')!;path.hidden=!trail.length;path.innerHTML=trail.length?`<button type="button" data-command-back>${icon('chevron')}戻る</button>${trail.map((parent,i)=>`<button type="button" data-command-level="${i}" ${i===trail.length-1?'aria-current="location"':''}>${h(parent.label)}</button>`).join('')}`:'';
  dialog.querySelector<HTMLElement>('.wb-command-status')!.textContent=busy?'処理中…':error||(!visible.length?'一致するコマンドがありません。':'');
  dialog.querySelector('output')!.textContent=`${visible.length} COMMANDS`;
  dialog.setAttribute('aria-busy',String(busy));root.dataset.wbBusy=String(busy);trigger.disabled=!!options.disabled;
  if(input.value!==query&&!composing)input.value=query;
  input.readOnly=busy;input.placeholder=options.placeholder??'何をしますか？';move(active);
 }
 function applyOpen(next:boolean){
  if(next===isOpen)return;
  if(next){if(options.disabled||life.dead)return;returnTo=document.activeElement instanceof HTMLElement?document.activeElement:trigger;isOpen=true;query='';active=0;trail=[];error='';paint(true);dialog.showModal();release=lockScroll(document);input.focus();root.dataset.wbOpen='true';life.pulse('open');}
  else{isOpen=false;token++;execution?.abort();busy=false;if(dialog.open)dialog.close();release?.();release=undefined;root.dataset.wbOpen='false';if(returnTo?.isConnected)returnTo.focus({preventScroll:true});}
  emit(root,state());
 }
 function requestOpen(next:boolean){if(life.dead)return;options.onOpenChange?.(next);if(options.open===undefined)applyOpen(next);}
 function navigateLevel(index:number){if(busy||index<0||index>=trail.length-1)return;trail=trail.slice(0,index+1);query='';active=0;paint(true);input.focus();life.pulse('back');}
 function back(){if(busy||!trail.length)return;trail.pop();query='';active=0;paint(true);input.focus();life.pulse('back');}
 async function execute(index:number){const item=visible[index];if(!item||item.disabled||busy||options.disabled)return;
  if(item.children?.length){unique(item.children);trail.push(item);query='';active=0;paint(true);life.pulse('drill');return;}
  error='';busy=true;const n=++token;execution=new AbortController();paint();
  try{const result=await options.onExecute?.(item,execution.signal);if(life.dead||n!==token)return;busy=false;lastCommand=item.id;host.querySelector<HTMLElement>('.wb-command-announcement')!.textContent=`${item.label} を選択しました。`;emit(root,{...state(),executed:item.id});if(result!==false)requestOpen(false);paint();}
  catch(e){if(life.dead||n!==token)return;busy=false;if((e as Error).name!=='AbortError')error=e instanceof Error?e.message:'コマンドの実行に失敗しました。';paint();}
 }
 trigger.addEventListener('click',()=>requestOpen(true),{signal:life.signal});
 host.querySelector('.wb-command-close')!.addEventListener('click',()=>requestOpen(false),{signal:life.signal});
 dialog.addEventListener('cancel',e=>{e.preventDefault();e.stopPropagation();requestOpen(false);},{signal:life.signal});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)requestOpen(false);}if((e.target as Element).closest('[data-command-back]'))back();const level=(e.target as Element).closest<HTMLElement>('[data-command-level]');if(level)navigateLevel(Number(level.dataset.commandLevel));const item=(e.target as Element).closest<HTMLElement>('[data-command]');if(item)void execute(visible.findIndex(x=>x.id===item.dataset.command));},{signal:life.signal});
 list.addEventListener('pointermove',e=>{const item=(e.target as Element).closest<HTMLElement>('[data-command]');if(item&&!busy&&item.getAttribute('aria-disabled')!=='true')move(visible.findIndex(x=>x.id===item.dataset.command));},{signal:life.signal,passive:true});
 input.addEventListener('compositionstart',()=>{composing=true;},{signal:life.signal});
 input.addEventListener('compositionend',()=>{composing=false;query=input.value;active=0;paint(true);},{signal:life.signal});
 input.addEventListener('input',()=>{if(!composing&&!busy){query=input.value;active=0;paint(true);}},{signal:life.signal});
 input.addEventListener('keydown',e=>{if(composing||e.isComposing)return;if(e.key==='Enter'){e.preventDefault();void execute(active);}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const direction=e.key==='ArrowDown'?1:-1;move(active+direction,direction);}if(e.key==='Home'&&e.ctrlKey){e.preventDefault();move(0);}if(e.key==='End'&&e.ctrlKey){e.preventDefault();move(visible.length-1,-1);}if(e.key==='Backspace'&&!input.value)back();},{signal:life.signal});
 root.addEventListener('keydown',e=>{if(!e.defaultPrevented&&!e.isComposing&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();requestOpen(!isOpen);}},{signal:life.signal});
 const shortcut={root,enabled:()=>!!options.hotkey&&!options.disabled,open:()=>requestOpen(!isOpen)};shortcuts.add(shortcut);if(!listening){document.addEventListener('keydown',globalKey);listening=true;}
 life.cleanup(()=>{applyOpen(false);execution?.abort();shortcuts.delete(shortcut);if(!shortcuts.size&&listening){document.removeEventListener('keydown',globalKey);listening=false;}});
 paint();if(options.open??options.defaultOpen)applyOpen(true);
 return {getState:state,open:()=>requestOpen(true),close:()=>requestOpen(false),reset(){if(life.dead)return;query='';trail=[];active=0;error='';paint(true);},setPaused:life.setPaused,destroy:life.destroy,
  update(next){if(life.dead)return;const changed=next.items!==undefined&&next.items!==options.items;options={...options,...next};if(changed){items=unique(next.items!);let level=items;const retained:CommandItem[]=[];for(const previous of trail){const replacement=level.find(item=>item.id===previous.id&&!item.disabled&&item.children?.length);if(!replacement)break;retained.push(replacement);level=unique(replacement.children!);}trail=retained;}if(next.open!==undefined)applyOpen(next.open);if(options.disabled)applyOpen(false);paint();}
 };
}
