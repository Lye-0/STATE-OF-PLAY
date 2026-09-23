import {createCore,choiceValue,heading,syncHeading,q,escape,svg,asStrings,uniqueId,makeOverlay,type FoundationConfig,type FoundationOptions,type FoundationController} from './core.ts';
export function renderCombobox(o:FoundationOptions):string {return heading(o)+`<div class="ff-combo-shell"><span class="ff-combo-icon" aria-hidden="true">${svg('search')}</span><input type="text" data-combo role="combobox" aria-autocomplete="list" aria-expanded="false" autocomplete="off" aria-label="${escape(o.label)}" placeholder="${escape(o.placeholder??'名前やキーワードを入力…')}"><button type="button" data-combo-toggle tabindex="-1" aria-label="候補を開く">${svg('down')}</button></div><div class="ff-chips" data-combo-chips></div><div class="ff-floating ff-combo-list" data-combo-panel><div data-results role="listbox"></div><div class="ff-menu-foot" data-result-count></div></div><div data-combo-form hidden></div><span class="ff-sr" data-combo-live role="status" aria-live="polite"></span>`;}
export function mountCombobox(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const c=createCore(root,config,options,choiceValue);if(!root.querySelector('[data-combo]'))root.innerHTML=renderCombobox(c.options);
 const input=q<HTMLInputElement>(root,'[data-combo]'),panel=q<HTMLElement>(root,'[data-combo-panel]'),results=q(root,'[data-results]'),shell=q(root,'.ff-combo-shell'),chips=q(root,'[data-combo-chips]');
 const uid=uniqueId('sop-combo');input.id=uid;results.id=uid+'-list';input.setAttribute('aria-controls',results.id);results.setAttribute('aria-label',c.options.label??'候補');
 const overlay=makeOverlay(c,panel,shell,'bottom',root);let query='',active='',composing=false,editing=false;
 const filtered=()=>{const token=query.normalize('NFKC').toLocaleLowerCase();return (c.options.items??[]).filter(item=>(item.label+' '+(item.description??'')).normalize('NFKC').toLocaleLowerCase().includes(token));};
 function paintList(){const items=filtered(),values=asStrings(c.data),o=c.options,previousScrollTop=results.scrollTop;
  results.innerHTML=o.loading?'<div class="ff-list-message">読み込み中…</div>':o.error?`<div class="ff-list-message">${escape(o.error)}</div>`:items.length?items.map(item=>`<div id="${uid}-option-${(o.items??[]).indexOf(item)}" data-option="${escape(item.value)}" role="option" aria-selected="${values.includes(item.value)}" aria-disabled="${!!item.disabled}" data-active="${active===item.value}" class="ff-option"><span class="ff-option-icon">${svg(item.icon??'spark')}</span><span><strong>${escape(item.label)}</strong><small>${escape(item.description)}</small></span><span class="ff-option-badge">${escape(item.badge??'')}</span><span class="ff-option-check">${svg('check')}</span></div>`).join(''):'<div class="ff-list-message">一致する候補がありません。</div>';
  results.scrollTop=active?previousScrollTop:0;
  results.setAttribute('aria-multiselectable',String(!!o.multiple));q(panel,'[data-result-count]').textContent=o.loading?'PLEASE WAIT':`${items.length} OPTIONS · ↑↓ / ENTER`;
  q(root,'[data-combo-live]').textContent=o.loading?'読み込み中':o.error??`${items.length}件の候補`;overlay.position();
  const current=[...results.querySelectorAll<HTMLElement>('[data-option]')].find(item=>item.dataset.option===active&&!item.hasAttribute('hidden'));if(current&&overlay.open){input.setAttribute('aria-activedescendant',current.id);current.scrollIntoView({block:'nearest'});}else{results.scrollTop=0;input.removeAttribute('aria-activedescendant');}
 }
 const show=()=>{if(c.options.disabled||c.options.readOnly)return;query='';editing=false;active='';paintList();overlay.show();input.setAttribute('aria-expanded','true');paintList();};
 const hide=()=>{overlay.hide();input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');editing=false;query='';c.sync('value');};
 const select=(value:string)=>{if(!(c.options.items??[]).some(i=>i.value===value&&!i.disabled))return;const previous=asStrings(c.data);editing=false;query='';c.send(c.options.multiple?previous.includes(value)?previous.filter(v=>v!==value):[...previous,value]:value);if(c.options.multiple){input.value='';paintList();input.focus();}else{hide();input.focus();}};
 c.sync=()=>{syncHeading(c);const o=c.options,values=asStrings(c.data);input.disabled=!!o.disabled;input.readOnly=!!o.readOnly;input.required=!!o.required&&!o.multiple;input.setAttribute('aria-required',String(!!o.required));input.setAttribute('aria-label',o.label??'選択');input.placeholder=o.placeholder??'名前やキーワードを入力…';q<HTMLButtonElement>(root,'[data-combo-toggle]').disabled=!!o.disabled||!!o.readOnly;
  if(!editing&&!composing)input.value=o.multiple?'':(o.items??[]).find(i=>i.value===values[0])?.label??'';
  if(o.disabled||o.readOnly){overlay.hide();input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');}
  chips.innerHTML=o.multiple?values.map(v=>`<span class="ff-chip">${escape((o.items??[]).find(i=>i.value===v)?.label??v)}<button type="button" data-remove="${escape(v)}" aria-label="${escape(v)} を削除" ${o.disabled||o.readOnly?'disabled':''}>${svg('close')}</button></span>`).join(''):'';
  q(root,'[data-combo-form]').innerHTML=o.name?values.map(v=>`<input type="hidden" name="${escape(o.name)}" value="${escape(v)}" ${o.disabled?'disabled':''}>`).join(''):'';
  input.setCustomValidity(o.required&&!values.length?'候補を選択してください。':'');paintList();
 };
 c.on(input,'input',()=>{editing=true;query=input.value;active='';if(!overlay.open){overlay.show();input.setAttribute('aria-expanded','true');}if(!composing)paintList();});
 c.on(input,'compositionstart',()=>{composing=true;});c.on(input,'compositionend',()=>{composing=false;query=input.value;paintList();});
 c.on(input,'keydown',event=>{const e=event as KeyboardEvent;if(composing||e.isComposing)return;
  if(e.key==='Escape'&&overlay.open){e.preventDefault();e.stopPropagation();hide();return;}
  if(e.key==='Tab'){if(overlay.open)hide();return;}
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!overlay.open)show();const available=filtered().filter(i=>!i.disabled);if(!available.length)return;const index=available.findIndex(i=>i.value===active),next=index<0?(e.key==='ArrowDown'?0:available.length-1):Math.max(0,Math.min(available.length-1,index+(e.key==='ArrowDown'?1:-1)));active=available[next].value;paintList();}
  if(e.key==='Enter'&&overlay.open&&active){e.preventDefault();select(active);}
 });
 c.on(q(root,'[data-combo-toggle]'),'click',()=>{if(overlay.open)hide();else show();input.focus();});
 c.on(results,'pointerdown',event=>{const target=event.target as Element;if(target.closest('[data-option]'))event.preventDefault();});
 c.on(results,'click',event=>{const option=(event.target as Element).closest<HTMLElement>('[data-option]');if(option&&option.getAttribute('aria-disabled')!=='true')select(option.dataset.option!);});
 c.on(chips,'pointerdown',event=>{if((event.target as Element).closest('[data-remove]'))event.preventDefault();});
 c.on(chips,'click',event=>{const b=(event.target as Element).closest<HTMLElement>('[data-remove]');if(b){c.send(asStrings(c.data).filter(v=>v!==b.dataset.remove));input.focus();}});
 c.on(document,'pointerdown',event=>{if(overlay.open&&!root.contains(event.target as Node))hide();},{capture:true});c.on(root,'focusout',event=>{if(root.contains((event as FocusEvent).relatedTarget as Node|null))return;queueMicrotask(()=>{if(!c.dead&&overlay.open&&!root.contains(document.activeElement))hide();});});
 c.show=show;c.hide=hide;c.sync('initial');return c;
}
