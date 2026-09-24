import {escape as h,icon,art,unique,identity,seed,owned,lifecycle,emit,safeHref,showPanel,hidePanel,positionPanel,trapModal,lockScroll,type WorkbenchAPI} from './core.ts';
export interface NavigationItem {id:string;label:string;href?:string;icon?:string;description?:string;badge?:string;disabled?:boolean;children?:NavigationItem[];target?:'_self'|'_blank';}
export type NavigationLayout='header'|'sidebar'|'dock'|'mobile';
export interface NavigationOptions {
 label?:string;brand?:string;brandHref?:string;items?:NavigationItem[];layout?:NavigationLayout;
 active?:string;defaultActive?:string;disabled?:boolean;open?:boolean;
 onActiveChange?:(id:string)=>void;onOpenChange?:(open:boolean)=>void;
 onNavigate?:(item:NavigationItem,event:MouseEvent)=>void|boolean;
}
export interface NavigationState {active:string;open:boolean;group:string|null;layout:NavigationLayout;}
function allItems(items:NavigationItem[]):NavigationItem[]{return items.flatMap(i=>[i,...allItems(i.children??[])]);}
function link(item:NavigationItem,active:string,options:NavigationOptions):string{
 const href=safeHref(item.href),disabled=item.disabled||options.disabled;
 return `<a class="wb-nav-link" data-nav="${h(item.id)}" ${href&&!disabled?`href="${h(href)}"`:''} ${disabled?'aria-disabled="true" tabindex="-1"':''} ${active===item.id?'aria-current="page"':''} ${item.target==='_blank'?'target="_blank" rel="noopener noreferrer"':''}><span class="wb-nav-link-icon">${icon(item.icon)}</span><span class="wb-nav-link-copy"><strong>${h(item.label)}</strong>${item.description?`<small>${h(item.description)}</small>`:''}</span>${item.badge?`<span class="wb-nav-badge">${h(item.badge)}</span>`:''}</a>`;
}
function listMarkup(items:NavigationItem[],active:string,options:NavigationOptions,mobile=false):string{
 return `<ul class="wb-nav-list">${items.map(item=>`<li>${item.children?.length?mobile?`<details class="wb-nav-mobile-group"><summary>${h(item.label)}${icon('down')}</summary>${listMarkup(item.children,active,options,true)}</details>`:`<button type="button" class="wb-nav-disclosure" data-nav-group="${h(item.id)}" aria-expanded="false" ${item.disabled||options.disabled?'disabled':''}>${icon(item.icon)}<span>${h(item.label)}</span>${icon('down')}</button>`:link(item,active,options)}</li>`).join('')}</ul>`;
}
export function navigationMarkup(options:NavigationOptions={},prefix='wb-nav'){
 const items=unique(options.items??[]),active=options.active??options.defaultActive??'',href=safeHref(options.brandHref);
 return `<nav class="wb-navigation-frame" aria-label="${h(options.label??'メインナビゲーション')}">${art('navigation')}<header class="wb-nav-brand">${href?`<a href="${h(href)}">`:'<span>'}<span class="wb-brand-glyph" aria-hidden="true"><i></i><i></i><i></i></span><strong>${h(options.brand??'Workspace')}</strong>${href?'</a>':'</span>'}<button type="button" class="wb-nav-mobile-open wb-icon-button" aria-label="ナビゲーションを開く" aria-expanded="false" aria-controls="${prefix}-mobile" ${options.disabled?'disabled':''}>${icon('menu')}</button></header><div class="wb-nav-desktop">${listMarkup(items,active,options)}<span class="wb-nav-marker" aria-hidden="true"></span></div><div class="wb-nav-foot"><span class="wb-nav-current-dot"></span><span class="wb-nav-location">${h(items.find(x=>x.id===active)?.label??'Navigation')}</span><span class="wb-nav-foot-arrow" aria-hidden="true">${icon('arrow')}</span></div></nav><div class="wb-nav-flyout" hidden popover="manual" data-demo-root></div><dialog id="${prefix}-mobile" class="wb-nav-dialog" aria-label="${h(options.label??'ナビゲーション')}" data-demo-root><header><strong>${h(options.brand??'Workspace')}</strong><button type="button" class="wb-nav-mobile-close wb-icon-button" aria-label="ナビゲーションを閉じる">${icon('close')}</button></header><nav aria-label="${h(options.label??'メインナビゲーション')}">${listMarkup(items,active,options,true)}</nav><footer>SELECT YOUR NEXT DESTINATION</footer></dialog>`;
}
export function createNavigation(root:HTMLElement,provided:NavigationOptions={}):WorkbenchAPI<NavigationOptions,NavigationState>{
 let options=seed(root,provided),items=unique(options.items??[]),active=options.active??options.defaultActive??'',mobileOpen=false,group:string|null=null;
 let origin:HTMLElement|null=null,release:(()=>void)|undefined,groupTrigger:HTMLButtonElement|null=null;
 const life=lifecycle(root),host=owned(root),uid=identity('wb-nav');host.innerHTML=navigationMarkup(options,uid);
 const dialog=host.querySelector<HTMLDialogElement>('dialog')!,flyout=host.querySelector<HTMLElement>('.wb-nav-flyout')!;
 const state=():NavigationState=>({active,open:mobileOpen,group,layout:options.layout??'header'});
 trapModal(dialog,life.signal);
 function activeGroup(){return items.find(item=>item.children&&allItems(item.children).some(child=>child.id===active));}
 function marker(){const box=host.querySelector<HTMLElement>('.wb-nav-desktop')!,m=host.querySelector<HTMLElement>('.wb-nav-marker')!,groupId=activeGroup()?.id;const current=[...box.querySelectorAll<HTMLElement>('[data-nav],[data-nav-group]')].find(x=>x.dataset.nav===active||(groupId!==undefined&&x.dataset.navGroup===groupId));if(!current||!current.getClientRects().length){m.hidden=true;return;}const r=current.getBoundingClientRect(),b=box.getBoundingClientRect();m.hidden=false;m.style.width=r.width+'px';m.style.height=r.height+'px';m.style.transform=`translate(${r.left-b.left+box.scrollLeft}px,${r.top-b.top+box.scrollTop}px)`;}
 function paint(){root.dataset.wbLayout=options.layout??'header';root.dataset.wbOpen=String(mobileOpen);const location=allItems(items).find(x=>x.id===active)?.label??'Navigation';host.querySelectorAll<HTMLElement>('[data-nav]').forEach(a=>{if(a.dataset.nav===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});host.querySelectorAll<HTMLButtonElement>('[data-nav-group]').forEach(button=>{const item=allItems(items).find(x=>x.id===button.dataset.navGroup),contains=!!item?.children&&allItems(item.children).some(child=>child.id===active);button.toggleAttribute('data-current',contains);if(contains)button.setAttribute('aria-label',`${item.label}（現在地: ${location}）`);else button.removeAttribute('aria-label');});host.querySelector<HTMLElement>('.wb-nav-location')!.textContent=location;host.querySelector<HTMLButtonElement>('.wb-nav-mobile-open')!.setAttribute('aria-expanded',String(mobileOpen));marker();}
 function closeGroup(restore=false){if(!group)return;group=null;hidePanel(flyout);groupTrigger?.setAttribute('aria-expanded','false');if(restore)groupTrigger?.focus({preventScroll:true});}
 function openGroup(id:string,button:HTMLButtonElement){if(options.disabled)return;if(group===id){closeGroup();return;}closeGroup();const item=allItems(items).find(x=>x.id===id);if(!item?.children?.length)return;group=id;groupTrigger=button;flyout.innerHTML=`${art('flyout')}<div class="wb-nav-flyout-title">${h(item.label)}</div>${listMarkup(item.children,active,options,true)}`;showPanel(flyout);positionPanel(flyout,button.getBoundingClientRect());button.setAttribute('aria-expanded','true');button.setAttribute('aria-controls',uid+'-flyout');flyout.id=uid+'-flyout';life.pulse('navigation');emit(root,state());}
 function applyMobile(next:boolean){if(next===mobileOpen)return;if(next){if(options.disabled)return;origin=document.activeElement as HTMLElement;closeGroup();mobileOpen=true;dialog.showModal();release=lockScroll(document);dialog.querySelector<HTMLElement>('.wb-nav-mobile-close')!.focus();life.pulse('menu');}else{mobileOpen=false;if(dialog.open)dialog.close();release?.();release=undefined;if(origin?.isConnected)origin.focus({preventScroll:true});}paint();emit(root,state());}
 function requestMobile(next:boolean){options.onOpenChange?.(next);if(options.open===undefined)applyMobile(next);}
 host.addEventListener('click',e=>{const target=e.target as Element;
  if(target.closest('.wb-nav-mobile-open'))requestMobile(true);
  if(target.closest('.wb-nav-mobile-close'))requestMobile(false);
  const button=target.closest<HTMLButtonElement>('[data-nav-group]');if(button)openGroup(button.dataset.navGroup!,button);
  const anchor=target.closest<HTMLAnchorElement>('[data-nav]');if(!anchor)return;const item=allItems(items).find(x=>x.id===anchor.dataset.nav);if(!item)return;
  if(options.disabled||item.disabled){e.preventDefault();return;}
  if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;
  const decision=options.onNavigate?.(item,e);if(decision===false)e.preventDefault();
  if(options.active===undefined)active=item.id;options.onActiveChange?.(item.id);closeGroup();requestMobile(false);paint();life.pulse('route');emit(root,{...state(),requested:item.id});
 },{signal:life.signal});
 host.addEventListener('keydown',e=>{if(e.key==='Escape'&&group){e.preventDefault();e.stopPropagation();closeGroup(true);}const b=(e.target as Element).closest<HTMLButtonElement>('[data-nav-group]');if(b&&e.key==='ArrowDown'){e.preventDefault();if(group!==b.dataset.navGroup)openGroup(b.dataset.navGroup!,b);flyout.querySelector<HTMLElement>('a[href],summary')?.focus();}},{signal:life.signal});
 dialog.addEventListener('cancel',e=>{e.preventDefault();e.stopPropagation();requestMobile(false);},{signal:life.signal});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)requestMobile(false);}},{signal:life.signal});
 document.addEventListener('pointerdown',e=>{if(group&&!flyout.contains(e.target as Node)&&!groupTrigger?.contains(e.target as Node))closeGroup();},{signal:life.signal});
 document.addEventListener('scroll',e=>{if(group&&!(e.target instanceof Node&&flyout.contains(e.target)))closeGroup();},{signal:life.signal,capture:true});
 let pointerInFlyout=false;
 flyout.addEventListener('pointerdown',()=>{pointerInFlyout=true;},{signal:life.signal});
 document.addEventListener('pointerup',()=>{pointerInFlyout=false;},{signal:life.signal});
 document.addEventListener('pointercancel',()=>{pointerInFlyout=false;},{signal:life.signal});
 host.addEventListener('focusout',()=>queueMicrotask(()=>{if(!life.dead&&group&&!pointerInFlyout&&!host.contains(document.activeElement))closeGroup();}),{signal:life.signal});
 const resize=new ResizeObserver(()=>{marker();if(group&&groupTrigger)positionPanel(flyout,groupTrigger.getBoundingClientRect());});resize.observe(root);life.cleanup(()=>{resize.disconnect();closeGroup();applyMobile(false);});
 window.addEventListener('resize',marker,{signal:life.signal});host.querySelector('.wb-nav-desktop')!.addEventListener('scroll',marker,{signal:life.signal,passive:true});
 paint();if(options.open)applyMobile(true);
 return {getState:state,open:()=>requestMobile(true),close:()=>requestMobile(false),reset(){if(options.active===undefined)active=options.defaultActive??'';requestMobile(false);closeGroup();paint();},setPaused:life.setPaused,destroy:life.destroy,
 update(next){if(life.dead)return;const rebuild=(next.items!==undefined&&next.items!==options.items)||('disabled'in next&&next.disabled!==options.disabled);options={...options,...next};if(next.active!==undefined)active=next.active;if(rebuild){items=unique(options.items??[]);closeGroup();host.querySelector<HTMLElement>('.wb-nav-desktop .wb-nav-list')!.outerHTML=listMarkup(items,active,options);dialog.querySelector('nav')!.innerHTML=listMarkup(items,active,options,true);host.querySelector<HTMLButtonElement>('.wb-nav-mobile-open')!.disabled=!!options.disabled;}if(next.open!==undefined)applyMobile(next.open);if(options.disabled){closeGroup();applyMobile(false);}paint();}};
}
