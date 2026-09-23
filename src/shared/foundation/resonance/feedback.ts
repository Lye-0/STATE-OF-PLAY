import {createCore,heading,syncHeading,q,escape,svg,uniqueId,type FoundationConfig,type FoundationOptions,type FoundationController,type Notice} from '../core.ts';
import {createMaterialScene,revealSurface} from './art.ts';
import {resonanceOverlay} from './overlay.ts';
export function renderToast(_o:FoundationOptions):string {return '<div data-toast-example hidden></div><div class="ff-toast-stack" data-toast-stack></div>';}
/** Timing is real notification lifetime, not fake task progress. No polling or permanent RAF. */
export function mountToast(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 root.classList.add('sop-resonance');const c=createCore(root,config,options);if(!root.querySelector('[data-toast-stack]'))root.innerHTML=renderToast(c.options);
 const stack=q<HTMLElement>(root,'[data-toast-stack]'),media=matchMedia('(prefers-reduced-motion: reduce)');stack.setAttribute('popover','manual');stack.hidden=true;
 type Entry={id:string;el:HTMLElement;timer:number;removeTimer:number;remaining:number;started:number;hover:boolean;focus:boolean;closing:boolean;duration:number;life:AbortController;meter:Animation|null;entrance:Animation|null;exit:Animation|null;scene:ReturnType<typeof createMaterialScene>;origin:HTMLElement|null};
 const entries:Entry[]=[];
 const paused=(e:Entry)=>e.hover||e.focus||document.hidden||!!c.options.paused;
 function stop(e:Entry){if(e.timer){clearTimeout(e.timer);e.timer=0;e.remaining=Math.max(0,e.remaining-(performance.now()-e.started));}e.meter?.pause();e.el.dataset.paused='true';}
 function start(e:Entry){if(c.dead||e.closing||paused(e)||!e.duration||e.timer)return;if(e.remaining<=0){dismiss(e.id);return;}e.started=performance.now();e.timer=window.setTimeout(()=>dismiss(e.id),e.remaining);e.meter?.play();e.el.dataset.paused='false';}
 function finalize(e:Entry){clearTimeout(e.timer);clearTimeout(e.removeTimer);e.entrance?.cancel();e.exit?.cancel();e.meter?.cancel();e.scene.destroy();e.life.abort();e.el.remove();const i=entries.indexOf(e);if(i>=0)entries.splice(i,1);if(!entries.length){try{stack.hidePopover();}catch{}stack.hidden=true;}}
 function dismiss(id?:string,immediate=false){for(const e of [...entries]){if(id&&e.id!==id)continue;if(e.closing){if(immediate)finalize(e);continue;}e.closing=true;stop(e);e.entrance?.cancel();
   const hadFocus=e.el.contains(document.activeElement);e.el.removeAttribute('role');e.el.setAttribute('aria-hidden','true');e.el.inert=true;e.el.dataset.closing='true';
   if(hadFocus){const next=entries.find(n=>n!==e&&!n.closing);if(next)next.el.querySelector<HTMLButtonElement>('[data-notice-close]')?.focus();else if(e.origin?.isConnected&&!e.origin.closest('[inert]'))e.origin.focus();else root.querySelector<HTMLElement>('[data-notify]')?.focus();}
   if(immediate||media.matches||document.hidden){finalize(e);continue;}
   e.scene.set(0);e.exit=e.el.animate([{opacity:1,transform:'none'},{opacity:0,transform:'translateY(10px) scale(.975)'}],{duration:170,easing:'ease-in',fill:'forwards'});e.removeTimer=window.setTimeout(()=>finalize(e),175);
  }}
 function notify(notice:Notice):string {if(c.dead||c.options.disabled)return '';const id=uniqueId('rs-notice'),el=document.createElement('div');el.className='ff-notice';el.dataset.tone=notice.tone??'info';el.dataset.notice=id;
  // The only live node is this actual notice; there is no visually-hidden duplicate announcement.
  el.setAttribute('role',notice.tone==='error'?'alert':'status');el.setAttribute('aria-atomic','true');
  const icon=notice.tone==='success'?'check':'info';
  el.innerHTML=`<span class="rs-notice-line" aria-hidden="true"></span><span class="ff-notice-icon" aria-hidden="true">${svg(icon)}</span><div class="ff-notice-copy"><strong>${escape(notice.title)}</strong><p>${escape(notice.description)}</p>${notice.actionLabel?`<button type="button" class="ff-inline-action" data-notice-action>${escape(notice.actionLabel)} <span aria-hidden="true">↗</span></button>`:''}</div><button type="button" data-notice-close class="ff-icon-button" aria-label="通知を閉じる">${svg('close')}</button><span class="rs-lifetime" aria-hidden="true"><i></i></span>`;
  const requested=notice.duration??c.options.duration??5500,duration=Number.isFinite(requested)?Math.max(0,requested):5500;
  const entry:Entry={id,el,timer:0,removeTimer:0,remaining:duration,started:0,hover:false,focus:false,closing:false,duration,life:new AbortController(),meter:null,entrance:null,exit:null,scene:createMaterialScene(el,config.variant,0),origin:document.activeElement instanceof HTMLElement?document.activeElement:null};entries.push(entry);stack.append(el);stack.hidden=false;try{stack.showPopover();}catch{}
  entry.scene.set(1);entry.entrance=revealSurface(el,config.variant,media.matches);
  const meter=q<HTMLElement>(el,'.rs-lifetime');meter.hidden=!duration;
  if(duration&&!media.matches){entry.meter=q<HTMLElement>(meter,'i').animate([{transform:'scaleX(1)'},{transform:'scaleX(0)'}],{duration,easing:'linear',fill:'forwards'});entry.meter.pause();}
  const on=(target:EventTarget,type:string,handler:EventListener)=>target.addEventListener(type,handler,{signal:entry.life.signal});
  on(q(el,'[data-notice-close]'),'click',()=>dismiss(id));const action=el.querySelector('[data-notice-action]');if(action)on(action,'click',()=>{try{notice.onAction?.();}finally{dismiss(id);}});
  on(el,'pointerenter',()=>{entry.hover=true;stop(entry);});on(el,'pointerleave',()=>{entry.hover=false;start(entry);});on(el,'focusin',()=>{entry.focus=true;stop(entry);});on(el,'focusout',()=>queueMicrotask(()=>{if(c.dead||entry.closing)return;entry.focus=el.contains(document.activeElement);if(!entry.focus)start(entry);}));
  while(entries.filter(e=>!e.closing).length>Math.max(1,c.options.maxNotices??3)){const first=entries.find(e=>!e.closing);if(!first)break;dismiss(first.id,true);}start(entry);return id;
 }
 c.on(document,'visibilitychange',()=>entries.forEach(e=>document.hidden?stop(e):start(e)));
 c.on(media,'change',()=>{for(const e of [...entries]){e.entrance?.cancel();if(media.matches){e.meter?.cancel();e.meter=null;if(e.closing)finalize(e);}}});
 c.sync=()=>{syncHeading(c);const b=root.querySelector<HTMLButtonElement>('[data-notify]');if(b)b.disabled=!!c.options.disabled;for(const e of entries){if(paused(e))stop(e);else start(e);}};
 c.notify=notify;c.dismiss=id=>dismiss(id);c.cleanup(()=>{for(const e of [...entries])finalize(e);});c.sync('initial');return c;
}
export function renderHint(o:FoundationOptions):string {return heading(o)+`<button type="button" class="ff-action ff-hint-trigger" data-hint-trigger><span>${escape(o.interactive?'詳しく見る':'詳細を確認する')}</span><span class="rs-trigger-dot" aria-hidden="true">${svg('arrow')}</span></button><div class="ff-floating ff-hint-panel" data-hint-panel><span class="rs-hint-pointer" aria-hidden="true"></span><div class="ff-hint-heading"><strong>${escape(o.label??'補足情報')}</strong></div><p data-hint-content>${escape(o.content??'必要な情報を、必要な場所に。')}</p><div class="rs-hint-actions" ${o.interactive?'':'hidden'}><div class="ff-hint-facts"><span>品質</span><strong>Standard</strong><span>設定</span><strong>自動調整</strong></div><label class="ff-hint-checkbox"><input type="checkbox">この設定を使う</label><button type="button" class="ff-action" data-hint-action>適用する <span aria-hidden="true">↗</span></button></div></div>`;}
/** Noninteractive tooltip and interactive popover have distinct focus/ARIA behavior. */
export function mountHint(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 root.classList.add('sop-resonance');const c=createCore(root,config,options);if(!root.querySelector('[data-hint-trigger]'))root.innerHTML=renderHint(c.options);
 const trigger=q<HTMLButtonElement>(root,'[data-hint-trigger]'),panel=q<HTMLElement>(root,'[data-hint-panel]'),uid=uniqueId('rs-hint'),descriptionBefore=trigger.getAttribute('aria-describedby'),media=matchMedia('(prefers-reduced-motion: reduce)');panel.id=uid;
 const overlay=resonanceOverlay(c,panel,trigger,()=>c.options.placement??'top'),scene=createMaterialScene(panel,config.variant,0),face=createMaterialScene(trigger,config.variant,.1);
 let closeTimer=0,entrance:Animation|null=null,ignoreFocus=false;
 function show(){if(c.dead||c.options.disabled)return;clearTimeout(closeTimer);const was=overlay.open;overlay.show();trigger.dataset.expanded='true';panel.dataset.interactive=String(!!c.options.interactive);face.set(1);scene.set(1);
  if(c.options.interactive){trigger.setAttribute('aria-expanded','true');}else{trigger.setAttribute('aria-describedby',[descriptionBefore,uid].filter(Boolean).join(' '));trigger.removeAttribute('aria-expanded');}
  if(!was){entrance?.cancel();entrance=revealSurface(panel,config.variant,media.matches);}
 }
 function hide(){clearTimeout(closeTimer);overlay.hide();entrance?.cancel();scene.set(0,true);face.set(.1);trigger.dataset.expanded='false';if(c.options.interactive)trigger.setAttribute('aria-expanded','false');else trigger.removeAttribute('aria-expanded');if(descriptionBefore)trigger.setAttribute('aria-describedby',descriptionBefore);else trigger.removeAttribute('aria-describedby');}
 const restoreFocus=()=>{ignoreFocus=true;trigger.focus();ignoreFocus=false;};
 const later=()=>{clearTimeout(closeTimer);closeTimer=window.setTimeout(()=>{if(c.dead)return;if(!root.contains(document.activeElement))hide();},180);};
 c.on(trigger,'pointerenter',()=>{if(!c.options.interactive)show();});c.on(trigger,'pointerleave',()=>{if(!c.options.interactive)later();});c.on(trigger,'focus',()=>{if(!ignoreFocus&&!c.options.interactive)show();});
 c.on(trigger,'click',()=>{if(c.options.interactive){if(overlay.open)hide();else show();}else show();});c.on(panel,'pointerenter',()=>clearTimeout(closeTimer));c.on(panel,'pointerleave',()=>{if(!c.options.interactive)later();});
 c.on(root,'focusout',()=>queueMicrotask(()=>{if(!c.dead&&!root.contains(document.activeElement)&&!panel.matches(':hover')&&!trigger.matches(':hover'))hide();}));
 c.on(document,'pointerdown',event=>{if(overlay.open&&!root.contains(event.target as Node))hide();},{capture:true});
 c.on(document,'keydown',event=>{const e=event as KeyboardEvent;if(e.key==='Escape'&&overlay.open){e.preventDefault();e.stopPropagation();const inside=panel.contains(document.activeElement);hide();if(inside)restoreFocus();}},{capture:true});
 const action=panel.querySelector('[data-hint-action]');if(action)c.on(action,'click',()=>{c.options.onAction?.();hide();restoreFocus();});
 c.on(media,'change',()=>{if(media.matches)entrance?.cancel();});
 c.sync=()=>{syncHeading(c);trigger.disabled=!!c.options.disabled;const interactive=!!c.options.interactive;panel.setAttribute('role',interactive?'dialog':'tooltip');panel.setAttribute('aria-label',c.options.label??'補足');panel.dataset.interactive=String(interactive);q(panel,'.ff-hint-heading strong').textContent=c.options.label??'補足情報';q(trigger,':scope > span:not(.rs-scene):not(.rs-trigger-dot)').textContent=interactive?'詳しく見る':'詳細を確認する';
  if(interactive){trigger.setAttribute('aria-controls',uid);trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-expanded',String(overlay.open));if(descriptionBefore)trigger.setAttribute('aria-describedby',descriptionBefore);else trigger.removeAttribute('aria-describedby');}
  else{trigger.removeAttribute('aria-controls');trigger.removeAttribute('aria-haspopup');trigger.removeAttribute('aria-expanded');if(overlay.open)trigger.setAttribute('aria-describedby',[descriptionBefore,uid].filter(Boolean).join(' '));}
  const actions=panel.querySelector<HTMLElement>('.rs-hint-actions');if(actions){if(!interactive&&actions.contains(document.activeElement))restoreFocus();actions.hidden=!interactive;}q(panel,'[data-hint-content]').textContent=c.options.content??'必要な情報を、必要な場所に。';if(c.options.disabled)hide();else if(overlay.open)overlay.position();
 };
 c.show=show;c.hide=hide;c.cleanup(()=>{clearTimeout(closeTimer);entrance?.cancel();scene.destroy();face.destroy();trigger.removeAttribute('data-expanded');if(descriptionBefore)trigger.setAttribute('aria-describedby',descriptionBefore);else trigger.removeAttribute('aria-describedby');});c.sync('initial');return c;
}
