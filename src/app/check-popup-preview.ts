/** Inspector and gallery demonstrations. These helpers are deliberately not exported with a part. */
import type {PopupController} from '../shared/popup-controller';
import type {PartPreview, PartController} from '../catalog/types';
import {required} from './utils';
export function checkPopupGuide(category: string): string[][] {
  return category === 'checkboxes' ? [
    ['init(root, options)', 'CheckboxController', 'ネイティブinputを含むラベル単位で初期化。'],
    ['setChecked / getChecked', 'boolean', '選択を変更 / 取得。name/valueは標準のinput属性。'],
    ['setIndeterminate / getIndeterminate', 'boolean', '一部選択。クリックではブラウザーが解除。'],
    ['setDisabled / destroy', 'boolean / void', '無効状態 / 取り外し時のイベント解除。'],
    ['onCheckedChange / onIndeterminateChange', 'callback', 'ユーザー操作やフォームのリセットをアプリへ接続。']
  ] : [
    ['init(root, options)', 'PopupController', 'dialogと開くボタンを含むルートを初期化。'],
    ['setOpen / getOpen', 'boolean', 'モーダルの表示を変更 / 取得。'],
    ['onOpenChange / onClose', 'callback', '開閉要求 / 閉じ終わった理由。保存処理は利用先へ。'],
    ['closeOnBackdrop / closeOnEscape', 'boolean', '背景クリック / Escapeで閉じるかを選択。'],
    ['data-popup-close', 'reason string', '独自の閉じるボタン。理由をconfirm等で区別。'],
    ['destroy', 'void', '閉じる・イベント解除・スクロールロック解放。']
  ];
}
export function mountPopupSample(root:HTMLElement, _part:PartPreview) {
  const window = root.querySelector<HTMLDialogElement>(':scope > dialog')!;
  const sample = document.createElement('div');
  sample.className = root.className+' sop-popup-thumbnail';
  sample.setAttribute('aria-hidden','true'); sample.inert = true;
  const miniature = document.createElement('div');miniature.className='sop-popup-window';
  miniature.append(window.firstElementChild!.cloneNode(true));
  miniature.querySelectorAll<HTMLElement>('*').forEach(element => {
    ['id','name','autofocus','aria-labelledby','aria-controls','aria-describedby','data-popup-title','data-popup-initial-focus','data-popup-close','data-popup-open','data-popup-radio-group'].forEach(attr=>element.removeAttribute(attr));
    if (element.matches('button,input,textarea,select,a,[tabindex]')) element.tabIndex=-1;
  });
  sample.append(miniature);root.prepend(sample);
  const feedback=document.createElement('p');feedback.className='popup-demo-feedback';feedback.setAttribute('role','status');feedback.textContent='開いて、内容と動きを試す。';root.append(feedback);
  const changed=(event:Event)=>{
    const reason=(event as CustomEvent<{reason:string}>).detail.reason;
    feedback.textContent=reason==='confirm'?'確認しました。デモのため保存・送信はしません。':'閉じました。もう一度開いて確認できます。';
  };
  root.addEventListener('sop:popup-close',changed);
  return ()=>{root.removeEventListener('sop:popup-close',changed);sample.remove();feedback.remove();};
}
export function mountCheckPopupControls(dialog:HTMLDialogElement,root:HTMLElement,part:PartPreview,controller:PartController) {
  const controls=document.createElement('div');controls.className='check-popup-controls';
  let cleanupSample:(()=>void)|undefined;
  const events=new AbortController();
  if(part.category==='checkboxes'){
    controls.innerHTML='<div role="group" aria-label="チェック状態" class="check-state-options"><button type="button" class="small-button" data-check-state="unchecked">未選択</button><button type="button" class="small-button" data-check-state="checked">選択済み</button><button type="button" class="small-button" data-check-state="mixed">一部選択</button></div><label><input type="checkbox" data-check-disabled>無効状態</label><p>ラベルをクリック、またはSpaceで切り替え。一部選択は、親子チェックの集計などに使えます。</p>';
    const sync=()=>{
      const state=controller.getIndeterminate?.()?'mixed':controller.getChecked?.()?'checked':'unchecked';
      required('#detail-state',dialog).textContent=state.toUpperCase();
      controls.querySelectorAll<HTMLButtonElement>('[data-check-state]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.checkState===state)));
    };
    controls.querySelectorAll<HTMLButtonElement>('[data-check-state]').forEach(button=>button.addEventListener('click',()=>{
      controller.setChecked?.(button.dataset.checkState==='checked');controller.setIndeterminate?.(button.dataset.checkState==='mixed');sync();
    }));
    required<HTMLInputElement>('[data-check-disabled]',controls).addEventListener('change',event=>controller.setDisabled?.((event.currentTarget as HTMLInputElement).checked));
    root.addEventListener('sop:checkbox-state',sync,{signal:events.signal});sync();
    const note=dialog.querySelector('.surface-note');if(note)note.textContent='実際のinput[type=checkbox]です。ラベル・説明は差し替えでき、フォームとネイティブの操作を維持します。';
  }else{
    cleanupSample=mountPopupSample(root,part);
    controls.innerHTML='<label><input type="checkbox" data-popup-backdrop checked>背景クリックで閉じる</label><label><input type="checkbox" data-popup-escape checked>Escapeで閉じる</label><label><input type="checkbox" data-popup-disabled>開くボタンを無効にする</label><p>ボタンから実際のモーダルを開けます。内容の入力や選択も試せます。保存・送信はしません。</p>';
    const options=()=>(controller.updatePopupOptions ?? (controller as unknown as PopupController).updateOptions)?.({closeOnBackdrop:required<HTMLInputElement>('[data-popup-backdrop]',controls).checked,closeOnEscape:required<HTMLInputElement>('[data-popup-escape]',controls).checked});
    controls.querySelectorAll<HTMLInputElement>('[data-popup-backdrop],[data-popup-escape]').forEach(input=>input.addEventListener('change',options));
    required<HTMLInputElement>('[data-popup-disabled]',controls).addEventListener('change',event=>controller.setDisabled?.((event.currentTarget as HTMLInputElement).checked));
    root.addEventListener('sop:popup-state',event=>{required('#detail-state',dialog).textContent=(event as CustomEvent<{open:boolean}>).detail.open?'OPEN':'CLOSED';},{signal:events.signal});
    required('#detail-state',dialog).textContent='CLOSED';
    const note=dialog.querySelector('.surface-note');if(note)note.textContent='開いたあとの内容まで設計したモーダルです。見本は縮小表示。本体はボタンから開きます。本文と操作を利用先へ接続できます。';
  }
  required('.live-preview',dialog).after(controls);
  return ()=>{events.abort();cleanupSample?.();controls.remove();};
}
