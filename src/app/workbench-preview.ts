import {required} from './utils';
import type {Part,PartPreview,PartController} from '../catalog/types';
/** Demo callbacks live here, never in exported runtime files. */
export function mountWorkbenchSample(root:HTMLElement,part:PartPreview,api:PartController){
 // Context menus already show the chosen action in their own result output.
 if(part.category==='contextmenus')return ()=>{};
 const events=new AbortController();
 const status=document.createElement('output');status.className='wb-demo-feedback';status.setAttribute('aria-live','polite');status.dataset.demoRoot='';root.after(status);
 if(part.category==='navigation')api.updateWorkbench?.({onNavigate:(item:{label:string})=>{status.textContent=`「${item.label}」へ移動する操作例です。`;return false;}});
 if(part.category==='commands')api.updateWorkbench?.({onExecute:(item:{label:string})=>{status.textContent=`「${item.label}」を実行しました（デモ）。`;}});
 if(part.category==='searchbars')api.updateWorkbench?.({onSubmit:(query:string,filter:string)=>{status.textContent=`検索: ${query||'すべて'} / ${filter}`;},onResult:(item:{label:string})=>{status.textContent=`「${item.label}」を選択しました。`;}});
 if(part.category==='tables')api.updateWorkbench?.({onRowAction:(action:{label:string},row:{name?:string})=>{status.textContent=`${row.name??'行'} / ${action.label}（デモ）`;}});
 return ()=>{events.abort();status.remove();};
}
export function mountWorkbenchControls(dialog:HTMLDialogElement,root:HTMLElement,part:Part,api:PartController){
 const events=new AbortController(),cleanup=mountWorkbenchSample(root,part,api),panel=document.createElement('div');panel.className='workbench-controls';
 const initial=JSON.parse(root.dataset.wbConfig??'{}') as Record<string,unknown>,category=part.category;
 let extra='';
 if(category==='searchbars')extra='<div class="wb-demo-buttons"><button type="button" data-wb-demo="query">例：design</button><button type="button" data-wb-demo="no-match">一致なし</button></div><label>表示状態<select data-wb-state><option value="normal">通常</option><option value="loading">検索中</option><option value="error">エラー例</option></select></label>';
 else if(category==='commands'||category==='contextmenus')extra='<div class="wb-demo-buttons"><button type="button" data-wb-demo="open">開く</button><button type="button" data-wb-demo="close">閉じる</button></div><p>'+ (category==='commands'?'開いた後に入力・矢印キーで検索できます。全体のCtrl+Kは導入先で1個だけ有効にします。':'対象領域で右クリック、またはフォーカスしてShift+F10。ページ全体の右クリックは変更しません。')+'</p>';
 else if(category==='navigation')extra='<label>配置<select data-wb-layout><option value="header">ヘッダー</option><option value="sidebar">サイドバー</option><option value="dock">ドック</option><option value="mobile">モバイルメニュー</option></select></label><button type="button" data-wb-demo="open">モバイルメニューを開く</button><p>通常クリックはデモ内で現在地を変更します。導入時には実際のリンク先へ接続します。</p>';
 else extra='<label>表示状態<select data-wb-state><option value="normal">通常</option><option value="loading">読込中</option><option value="empty">0件</option><option value="error">エラー例</option></select></label><label>1ページの行数<select data-wb-size><option>3</option><option selected>4</option><option>8</option></select></label><label><input type="checkbox" data-wb-compact>コンパクト</label><p>ヘッダーのクリックでソート。列境界はドラッグ・矢印キーで幅を変更できます。行操作はデモ内のみです。</p>';
 panel.innerHTML=`<div class="section-kicker">WORKBENCH / TRY THE STATES</div><div class="wb-demo-controls">${extra}</div><div class="wb-demo-foot"><label><input type="checkbox" data-wb-disabled>無効</label><button type="button" data-wb-demo="reset">初期状態に戻す</button></div><output aria-live="polite"></output>`;
 required('.live-preview',dialog).after(panel);
 const state=()=>{const s=api.getWorkbench?.()??{};const label=category==='tables'?`${s.total??0} ROWS / PAGE ${s.page??1}`:category==='searchbars'?`${s.results??0} RESULTS`:category==='navigation'?`${s.active||'NAVIGATE'}`:s.open?'OPEN':'READY';required('output',panel).textContent=label;required('#detail-state',dialog).textContent=label;};
 const update=(next:Record<string,unknown>)=>{api.updateWorkbench?.(next);state();};
 const select=panel.querySelector<HTMLSelectElement>('[data-wb-layout]');if(select)select.value=String(initial.layout??'header');
 panel.addEventListener('click',event=>{const button=(event.target as Element).closest<HTMLButtonElement>('[data-wb-demo]');if(!button)return;
  switch(button.dataset.wbDemo){case'open':api.openWorkbench?.();break;case'close':api.closeWorkbench?.();break;case'query':update({query:'design'});break;case'no-match':update({query:'見つからないキーワード'});break;case'reset':
   api.closeWorkbench?.();update({...initial,query:undefined,filter:undefined,active:undefined,open:undefined,sort:undefined,selected:undefined,page:undefined,loading:false,error:undefined,disabled:false});api.resetWorkbench?.();panel.querySelectorAll<HTMLInputElement>('input').forEach(x=>x.checked=false);panel.querySelectorAll<HTMLSelectElement>('select').forEach(s=>s.value=s.hasAttribute('data-wb-layout')?String(initial.layout??'header'):s.hasAttribute('data-wb-size')?'4':'normal');break;
  }state();
 },{signal:events.signal});
 panel.addEventListener('change',event=>{const target=event.target as HTMLInputElement|HTMLSelectElement;
  if(target.hasAttribute('data-wb-disabled'))update({disabled:(target as HTMLInputElement).checked});
  if(target.hasAttribute('data-wb-layout'))update({layout:target.value});
  if(target.hasAttribute('data-wb-size'))update({pageSize:Number(target.value)});
  if(target.hasAttribute('data-wb-compact'))update({compact:(target as HTMLInputElement).checked});
  if(target.hasAttribute('data-wb-state')){const next=target.value;update({loading:next==='loading',error:next==='error'?'読み込めませんでした。再試行してください。':undefined,...category==='tables'?{rows:next==='empty'?[]:initial.rows}:{showResults:true}});}
 },{signal:events.signal});
 root.addEventListener('sop:workbench-change',state,{signal:events.signal});const note=dialog.querySelector('.surface-note');if(note)note.textContent='ローカルのサンプルを操作します。検索・実行・移動・データ更新は利用先のアプリへ接続してください。';state();
 return()=>{events.abort();cleanup();panel.remove();};
}
