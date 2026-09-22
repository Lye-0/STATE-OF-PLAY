/** Gallery-only examples. None of these controls/canned results are dependencies of an exported part. */
import {escapeHTML,required} from './utils';
import {heading,svg,type FoundationController,type FoundationValue} from '../shared/foundation/core';
import type {Part,PartController} from '../catalog/types';
const display=(v:FoundationValue|undefined)=>Array.isArray(v)?v.map(x=>x instanceof File?x.name:String(x)).join(' / '):String(v??'—');
export function mountFoundationSample(root:HTMLElement,part:Part,controller:PartController):()=>void {
 if(!part.foundation)return ()=>{};const events=new AbortController();const cleanups:(()=>void)[]=[];
 if(part.category==='toasts'){
  const placeholder=root.querySelector<HTMLElement>('[data-toast-example]');if(placeholder){placeholder.hidden=false;placeholder.innerHTML=heading(part.foundation)+`<div class="ff-notice ff-notice-sample" aria-hidden="true"><span class="ff-notice-icon">${svg('info')}</span><div><strong>次の工程を準備しています</strong><p>実際の処理結果を、ここで知らせる。</p></div><span class="ff-notice-meter"></span></div><button type="button" class="ff-action" data-notify>${svg('spark')} 通知を表示</button>`;
   placeholder.querySelector('[data-notify]')!.addEventListener('click',()=>controller.notify?.({title:'表示を確認しました',description:'これは操作例です。保存・送信は行っていません。',tone:'success',actionLabel:'閉じる'}),{signal:events.signal});
  }
 }
 if(part.category==='progress'||part.category==='loaders'){
  const demo=document.createElement('div');demo.className='foundation-inline-demo';demo.dataset.demoRoot='';
  if(part.category==='progress'){demo.innerHTML='<button type="button" data-demo-progress="-15">−15</button><span>DEMO VALUE</span><button type="button" data-demo-progress="15">＋15</button>';demo.querySelectorAll<HTMLElement>('[data-demo-progress]').forEach(b=>b.addEventListener('click',()=>controller.setData?.(Math.min(100,Math.max(0,Number(controller.getData?.()??0)+Number(b.dataset.demoProgress)))),{signal:events.signal}));}
  else{demo.innerHTML='<button type="button" data-demo-loader aria-pressed="false">一時停止</button>';demo.querySelector('[data-demo-loader]')!.addEventListener('click',event=>{const b=event.currentTarget as HTMLElement,paused=b.getAttribute('aria-pressed')!=='true';controller.setPaused?.(paused);b.setAttribute('aria-pressed',String(paused));b.textContent=paused?'再開':'一時停止';},{signal:events.signal});}
  root.append(demo);cleanups.push(()=>demo.remove());
 }
 return ()=>{events.abort();cleanups.forEach(f=>f());};
}
export function mountFoundationControls(dialog:HTMLDialogElement,root:HTMLElement,part:Part,controller:PartController):()=>void {
 const cleanupSample=mountFoundationSample(root,part,controller);const controls=document.createElement('div');controls.className='foundation-controls';
 controls.innerHTML=`<div class="foundation-control-heading"><span>PREVIEW SETTINGS</span><button type="button" data-foundation-reset>リセット</button></div><div class="foundation-control-actions">${part.category==='comboboxes'||part.category==='hints'||part.category==='datepickers'?'<button type="button" data-foundation-open>開く</button>':''}${part.category==='progress'?'<button type="button" data-progress-state>割合不明にする</button>':''}${part.category==='radios'||part.category==='comboboxes'?'<button type="button" data-change-items>候補を変更</button>':''}${part.category==='toasts'?'<button type="button" data-notice-test>操作付き通知</button><button type="button" data-notice-clear>通知を閉じる</button>':''}</div>${['sliders','numbers'].includes(part.category)?'<div class="foundation-inputs"><label>MIN<input type="number" data-set-min value="0"></label><label>MAX<input type="number" data-set-max value="100"></label><label>STEP<input type="number" min="0.001" step="any" data-set-step value="1"></label><label>UNIT<input type="text" data-set-unit value="%"></label></div>':''}<label class="disabled-control"><input type="checkbox" data-foundation-disabled><span>無効状態を確認する</span></label><output class="foundation-output" data-foundation-value aria-live="polite"></output>`;
 required('.live-preview',dialog).after(controls);const events=new AbortController();let unknown=false;
 const state=()=>{required('[data-foundation-value]',controls).textContent='VALUE / '+display(controller.getData?.());required('#detail-state',dialog).textContent=part.category==='loaders'?'LOADING':part.category==='toasts'?'NOTIFY':part.category==='breadcrumbs'?'NAVIGATE':part.category==='hints'?'EXPLORE':'LIVE';};
 root.addEventListener('sop:foundation-change',state,{signal:events.signal});
 controls.querySelector('[data-foundation-reset]')!.addEventListener('click',()=>{controller.updateFoundation?.({...part.foundation!,disabled:false,paused:false,indeterminate:false});controller.setData?.(part.foundation!.defaultValue??null);required<HTMLInputElement>('[data-foundation-disabled]',controls).checked=false;controller.dismiss?.();state();},{signal:events.signal});
 controls.querySelector('[data-foundation-open]')?.addEventListener('click',()=>controller.show?.(),{signal:events.signal});
 controls.querySelector('[data-progress-state]')?.addEventListener('click',event=>{unknown=!unknown;controller.updateFoundation?.({indeterminate:unknown});(event.currentTarget as HTMLElement).textContent=unknown?'割合を表示':'割合不明にする';},{signal:events.signal});
 controls.querySelector('[data-change-items]')?.addEventListener('click',()=>{controller.updateFoundation?.({items:[{value:'draft',label:'Draft',description:'下書きを準備する。'},{value:'review',label:'Review',description:'設計を確認する。'},{value:'ready',label:'Ready',description:'次の工程へ。'},{value:'locked',label:'Locked',disabled:true}]});state();},{signal:events.signal});
 controls.querySelector('[data-notice-test]')?.addEventListener('click',()=>controller.notify?.({title:'レビューの準備ができました',description:'アクションをクリックすると別のデモ通知を表示します。',actionLabel:'確認する',tone:'info',duration:0,onAction:()=>controller.notify?.({title:'操作を受け取りました',tone:'success',description:'デモです。外部処理は実行していません。'})}),{signal:events.signal});
 controls.querySelector('[data-notice-clear]')?.addEventListener('click',()=>controller.dismiss?.(),{signal:events.signal});
 required<HTMLInputElement>('[data-foundation-disabled]',controls).addEventListener('change',event=>controller.setDisabled?.((event.target as HTMLInputElement).checked),{signal:events.signal});
 for(const field of ['min','max','step','unit'] as const){const input=controls.querySelector<HTMLInputElement>(`[data-set-${field}]`);if(!input)continue;input.value=String(part.foundation?.[field]??(field==='max'?100:field==='step'?1:field==='unit'?'':0));input.addEventListener('change',()=>{controller.updateFoundation?.({[field]:field==='unit'?input.value:Number(input.value)});state();},{signal:events.signal});}
 const note=dialog.querySelector('.surface-note');if(note)note.textContent='操作例です。値・候補・ラベルは利用先に合わせて変更できます。デモの設定変更は配布ソースへ保存されません。';state();
 return ()=>{events.abort();cleanupSample();controls.remove();};
}
