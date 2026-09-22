import type {Part,PartController} from '../catalog/types';
import {required} from './utils';
export function disclosureGuide(category: Part['category']): string[][] {
  if(category==='dropdowns')return [
    ['data-value / data-label','HTML attributes','選択肢の識別値・検索用のラベル。表示用の説明やアイコンも差し替え可能。'],
    ['init(root, options)','HTMLElement','このselectのルートだけを初期化します。'],
    ['options.value / onValueChange','string / callback','初期値と確定した値の通知。'],
    ['controller.setValue / getValue','string','アプリの状態へ接続します。'],
    ['controller.refresh()','void','動的に選択肢のDOMを変更した後に呼びます。'],
    ['name / disabled','input / button attributes','hidden inputで送信。disabled時は送信しません。'],
    ['controller.destroy()','void','ポップアップ・監視・イベントを解除します。']
  ];
  if(category==='accordions')return [
    ['.sop-accordion-content','HTML','本文、図、数値、入力などを自由に配置します。'],
    ['data-value','string','項目ごとの一意の識別値。'],
    ['options.expanded / multiple','string[] / boolean','初期の展開項目と単一・複数モード。'],
    ['options.onExpandedChange','callback','展開中の識別値の配列を受け取ります。'],
    ['controller.setExpanded(values)','string[]','外部の状態から展開を更新します。'],
    ['controller.refresh() / destroy()','void','項目の変更後の同期・取り外し時の解除。']
  ];
  return [
    ['.sop-scroll-content','HTML','スクロールさせる内容を配置します。'],
    ['options.orientation','vertical / horizontal','スクロール方向を指定します。'],
    ['controller.scrollTo(progress)','number 0…1','スクロール位置を変更します。'],
    ['controller.refresh() / destroy()','void','サイズ再計算と後片付け。']
  ];
}
export function mountDisclosureControls(dialog: HTMLDialogElement,root: HTMLElement,part: Part,controller: PartController) {
  const view=required('.live-preview',dialog);
  const controls=document.createElement('div');controls.className='disclosure-controls';
  if(part.category==='dropdowns'){
    controls.innerHTML='<button type="button" class="small-button" data-inspect-open>選択肢を開く</button><button type="button" class="small-button" data-inspect-reset>初期値へ</button><label><input type="checkbox" data-inspect-disabled>無効状態</label>';
    const first=controller.getValue?.()??'';
    required('[data-inspect-open]',controls).addEventListener('click',()=>{controller.setOpen?.(!controller.getOpen?.());root.querySelector<HTMLButtonElement>('.sop-select-trigger')?.focus({preventScroll:true});});
    required('[data-inspect-reset]',controls).addEventListener('click',()=>controller.setValue?.(first));
    required<HTMLInputElement>('[data-inspect-disabled]',controls).addEventListener('change',e=>{
      const disabled=(e.currentTarget as HTMLInputElement).checked;
      required<HTMLButtonElement>('.sop-select-trigger',root).disabled=disabled;
      controls.querySelectorAll<HTMLButtonElement>('button').forEach(b=>b.disabled=disabled);
      controller.setOpen?.(false);controller.refresh?.();
    });
    root.addEventListener('sop:select-open',()=>{required('#detail-state',dialog).textContent=controller.getOpen?.()?'OPEN':'SELECT';});
    root.addEventListener('sop:select',e=>{required('#detail-state',dialog).textContent=String((e as CustomEvent<{value:string}>).detail.value).toUpperCase();});
  }else{
    controls.innerHTML='<button type="button" class="small-button" data-inspect-collapse>すべて閉じる</button><button type="button" class="small-button" data-inspect-first>最初を開く</button><label><input type="checkbox" data-inspect-multiple>複数展開</label>';
    const status=()=>{required('#detail-state',dialog).textContent=String(controller.getExpanded?.().length??0)+' OPEN';};
    required('[data-inspect-collapse]',controls).addEventListener('click',()=>{controller.collapseAll?.();status();});
    required('[data-inspect-first]',controls).addEventListener('click',()=>{controller.setExpanded?.(['section-1']);status();});
    required<HTMLInputElement>('[data-inspect-multiple]',controls).addEventListener('change',e=>{root.dataset.multiple=String((e.currentTarget as HTMLInputElement).checked);controller.refresh?.();status();});
    root.addEventListener('sop:accordion',status);
  }
  view.after(controls);
  const note=dialog.querySelector('.surface-note');
  if(note)note.textContent='見出し・説明・アイコン・内側の内容まで差し替え可能。サンプルは配布する使用例にも含まれます。';
}
