/** Demo controls are not part of exported components. No three-item limit in either controller. */
import type {PartPreview,PartController} from '../catalog/types';
import {required} from './utils';
export function selectionGuide(category:string):string[][] {
  return [
    ['data-choice-value / value','unique string','項目の一意な識別値。並び替えでも同じ値を維持。'],
    ['項目の追加・削除','HTML / items','展示は3項目。2・4・5以上も同じ実装で処理。'],
    ['init(root, options)','controller','ルートだけを初期化。value / onValueChangeを設定。'],
    ['setValue / getValue','string','アプリの状態との接続。添字ではなく識別値。'],
    ['refresh / destroy','void','DOM項目変更後の再同期 / 取り外し時の解除。'],
    [category==='tabs'?'activation':'name / form / required',category==='tabs'?'automatic | manual':'native radio',category==='tabs'?'タブのキー操作で自動確定またはEnter/Space確定。':'実際のフォーム送信とリセット。ON/OFFや同時複数選択ではありません。']
  ];
}
export function mountSelectionControls(dialog:HTMLDialogElement,root:HTMLElement,part:PartPreview,controller:PartController) {
  const controls=document.createElement('div');controls.className='selection-preview-controls';
  controls.innerHTML='<div class="selection-option-count"><span>項目数</span><div role="group" aria-label="展示の項目数">'+[2,3,4,5,7].map(n=>`<button type="button" class="small-button" data-selection-count="${n}" aria-pressed="${n===3}">${n}</button>`).join('')+'</div></div><label>方向<select aria-label="選択肢の並び" data-selection-axis><option value="horizontal">横方向</option><option value="vertical">縦方向</option></select></label><label><input type="checkbox" data-selection-disabled>全体を無効にする</label><p>展示は3択。項目データを変えるだけで、2択・4択以上へ。<br>設定数の変更はデモ専用で、取得コードの例は3項目です。</p>';
  required('.live-preview',dialog).after(controls);
  const list=required('.sop-choice-list',root),panels=root.querySelector('.sop-choice-panels');
  const templates=[...list.querySelectorAll<HTMLElement>(':scope > .sop-choice-item')].map(e=>e.cloneNode(true) as HTMLElement);
  const panelTemplates=[...(panels?.children??[])].map(e=>e.cloneNode(true) as HTMLElement);
  const values=new Map<string,string>();
  function showState(){const value=controller.getValue?.()??'';required('#detail-state',dialog).textContent=value?`SELECTED ${value.replace('choice-','').padStart(2,'0')}`:'EMPTY';}
  const change=()=>showState();root.addEventListener('sop:selection',change);
  controls.querySelectorAll<HTMLButtonElement>('[data-selection-count]').forEach(button=>button.addEventListener('click',()=>{
    // Preserve demo note edits through item-count changes where the same logical panel remains.
    panels?.querySelectorAll<HTMLInputElement>('input').forEach(input=>values.set(input.closest<HTMLElement>('[data-panel-value]')?.dataset.panelValue??'',input.value));
    const n=Number(button.dataset.selectionCount),current=controller.getValue?.()??'choice-1';
    list.querySelectorAll(':scope > .sop-choice-item').forEach(e=>e.remove());panels?.replaceChildren();
    for(let i=0;i<n;i++){
      const key=`choice-${i+1}`,item=templates[i%templates.length].cloneNode(true) as HTMLElement;
      item.removeAttribute('id');item.removeAttribute('aria-controls');item.dataset.choiceValue=key;
      const indexLabel=item.querySelector('.sop-choice-index');if(indexLabel)indexLabel.textContent=String(i+1).padStart(2,'0');
      if(i>=3)item.querySelector('.sop-choice-label')!.textContent=`Option ${i+1}`;
      const radio=item.querySelector<HTMLInputElement>('input');if(radio){radio.value=key;radio.checked=false;radio.defaultChecked=i===1;radio.removeAttribute('name');radio.setAttribute('aria-label',item.querySelector('.sop-choice-label')!.textContent!);}
      list.append(item);
      if(panels){const panel=panelTemplates[i%panelTemplates.length].cloneNode(true) as HTMLElement;panel.removeAttribute('id');panel.removeAttribute('aria-labelledby');panel.dataset.panelValue=key;const total=panel.querySelector('.sop-choice-demo-footer b');if(total)total.textContent=`01 — ${String(n).padStart(2,'0')}`;if(i>=3){const kicker=panel.querySelector('.sop-choice-demo-kicker');if(kicker)kicker.textContent=`ADDITIONAL PANEL / ${i+1}`;}panel.querySelectorAll<HTMLInputElement>('input').forEach(input=>input.value=values.get(key)??'');panels.append(panel);}
    }
    controller.refresh?.();controller.setValue?.(current);showState();
    controls.querySelectorAll('[data-selection-count]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  }));
  const select=required<HTMLSelectElement>('[data-selection-axis]',controls);select.value=root.dataset.orientation??'horizontal';
  select.addEventListener('change',()=>controller.setOrientation?.(select.value==='vertical'?'vertical':'horizontal'));
  required<HTMLInputElement>('[data-selection-disabled]',controls).addEventListener('change',event=>{controller.setDisabled?.((event.currentTarget as HTMLInputElement).checked);});
  const note=dialog.querySelector('.surface-note');if(note)note.textContent=part.category==='tabs'?'タブは内容を切り替えます。非表示パネルの入力はそのまま保持。ラベルと本文は自由に差し替えられます。':'セグメントは複数候補から1つを選ぶスイッチです。表示モード・期間・設定の値へ接続できます。';
  showState();
  return ()=>{root.removeEventListener('sop:selection',change);controls.remove();};
}
