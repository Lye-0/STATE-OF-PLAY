import {required,escapeHTML} from './utils';
import type {Part,PartPreview,PartController} from '../catalog/types';
/** Gallery-only demo controls. None are shipped as part of the component API. */
export function mountSignatureSample(root:HTMLElement,part:PartPreview,api:PartController){
 const events=new AbortController();
 if(part.category==='skeletons'){
  const controls=document.createElement('div');controls.className='sg-demo-row';controls.dataset.demoRoot='';
  controls.innerHTML='<button type="button">読み込み後を表示</button><span>デモの切り替え</span>';root.after(controls);
  let loading=true;controls.querySelector('button')!.addEventListener('click',()=>{loading=!loading;api.updateSignature?.({loading});controls.querySelector('button')!.textContent=loading?'読み込み後を表示':'待機表示に戻す';},{signal:events.signal});
  return ()=>{events.abort();controls.remove();};
 }
 return ()=>events.abort();
}
export function mountSignatureControls(dialog:HTMLDialogElement,root:HTMLElement,part:Part,api:PartController){
 const events=new AbortController(),panel=document.createElement('div');panel.className='signature-controls';
 const category=part.category;
 const extra=category==='ratings'?'<label>評価の段階<select data-sg-max><option>3</option><option selected>5</option><option>7</option><option>10</option></select></label><label><input type="checkbox" data-sg-readonly>読み取り専用</label>'
 :category==='colors'?'<div class="signature-presets"><button type="button" data-sg-color="#A5BCE0">Blue</button><button type="button" data-sg-color="#C4A3CA">Mauve</button><button type="button" data-sg-color="#B9CEA8">Sage</button></div><label><input type="checkbox" data-sg-readonly>読み取り専用</label>'
 :category==='skeletons'?'<label><input type="checkbox" data-sg-loading checked>読み込み中</label><label><input type="checkbox" data-sg-paused>一時停止</label><label>行数<select data-sg-rows><option>2</option><option selected>4</option><option>6</option><option>8</option></select></label>'
 :category==='timelines'?'<button type="button" data-sg-expand>すべての詳細を開く</button><button type="button" data-sg-collapse>すべて閉じる</button>'
 :category==='wizards'?'<label>工程数<select data-sg-steps><option>2</option><option selected>3</option><option>4</option><option>5</option></select></label><label><input type="checkbox" data-sg-jump>先の工程を選択可能</label><p>必須入力を確認してから次へ進みます。完了はデモ内のみ。</p>'
 :'<label><input type="checkbox" data-sg-passive>表示専用（選択しない）</label><p>在席状態はサンプルデータです。</p>';
 panel.innerHTML=`<div class="section-kicker">SIGNATURE / TRY THE STATES</div><div class="signature-control-grid">${extra}</div><div class="signature-control-foot">${category==='skeletons'?'':'<label><input type="checkbox" data-sg-disabled>無効</label>'}<button type="button" data-sg-reset>初期状態に戻す</button></div><output class="signature-output" aria-live="polite"></output>`;
 required('.live-preview',dialog).after(panel);
 const initial=JSON.parse(root.dataset.sgConfig??'{}') as Record<string,unknown>;
 const state=()=>{const s=api.getSignature?.()??{};const text='value'in s?String(s.value):'current'in s?String(s.current)+(s.complete?' / 完了':''):'expanded'in s?`${(s.expanded as string[]).length} OPEN`:'loading'in s?(s.loading?'LOADING':'CONTENT'):'';required('output',panel).textContent=text;required('#detail-state',dialog).textContent=text||'LIVE';};
 const update=(settings:Record<string,unknown>)=>{api.updateSignature?.(settings);state();};
 panel.addEventListener('change',event=>{const input=event.target as HTMLInputElement|HTMLSelectElement;
  if(input.hasAttribute('data-sg-disabled'))update({disabled:(input as HTMLInputElement).checked});
  if(input.hasAttribute('data-sg-readonly'))update({readOnly:(input as HTMLInputElement).checked});
  if(input.hasAttribute('data-sg-max'))update({max:Number(input.value)});
  if(input.hasAttribute('data-sg-loading'))update({loading:(input as HTMLInputElement).checked});
  if(input.hasAttribute('data-sg-paused'))update({paused:(input as HTMLInputElement).checked});
  if(input.hasAttribute('data-sg-rows'))update({rows:Number(input.value)});
  if(input.hasAttribute('data-sg-passive'))update({interactive:!(input as HTMLInputElement).checked});
  if(input.hasAttribute('data-sg-jump'))update({allowJump:(input as HTMLInputElement).checked});
  if(input.hasAttribute('data-sg-steps')){const n=Number(input.value);const first=(initial.steps as Array<Record<string,unknown>>)[0];const steps=[first,...Array.from({length:n-1},(_,i)=>({id:'step-'+(i+2),title:i===n-2?'確認':'工程 '+(i+2),description:'工程数は利用先のitemsに合わせて変更できます。'}))];update({steps});}
 },{signal:events.signal});
 panel.addEventListener('click',event=>{const t=(event.target as Element).closest<HTMLElement>('button');if(!t)return;
  if(t.hasAttribute('data-sg-color'))update({value:t.dataset.sgColor,onValueChange:(value:string)=>update({value})});
  if(t.hasAttribute('data-sg-expand'))update({expanded:((initial.items??[]) as {id:string}[]).map(x=>x.id),onExpandedChange:(expanded:string[])=>update({expanded})});
  if(t.hasAttribute('data-sg-collapse'))update({expanded:[],onExpandedChange:(expanded:string[])=>update({expanded})});
  if(t.hasAttribute('data-sg-reset')){api.updateSignature?.({...initial,disabled:false,readOnly:false,paused:false,value:undefined,expanded:undefined,current:undefined});api.resetSignature?.();panel.querySelectorAll<HTMLInputElement>('input[type=checkbox]').forEach(b=>b.checked=b.hasAttribute('data-sg-loading'));panel.querySelectorAll<HTMLSelectElement>('select').forEach(s=>s.value=s.hasAttribute('data-sg-max')?'5':s.hasAttribute('data-sg-rows')?'4':'3');state();}
 },{signal:events.signal});
 root.addEventListener('sop:signature-change',state,{signal:events.signal});
 const note=dialog.querySelector('.surface-note');if(note)note.textContent='操作例です。データとラベルは利用先で変更できます。入力や選択を外部へ送信・保存しません。';state();
 return ()=>{events.abort();panel.remove();};
}
