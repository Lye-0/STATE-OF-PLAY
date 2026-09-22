import type {PartController} from '../catalog/types';
import type {TextControl} from '../shared/text-field';
import {required} from './utils';
export function textFieldGuide(): string[][] {
  return [
    ['.sop-field-control','input / textarea','実際の入力欄。name、required、type、readonly、disabledを通常の属性で指定。'],
    ['init(root, {onValueChange})','HTMLElement / callback','入力値を外部のアプリへ接続します。'],
    ['controller.setValue / getValue','string','外部からの値の更新・取得。setValueはユーザー入力イベントを偽装しません。'],
    ['controller.setError(message)','string','エラー文・aria-invalid・標準のcustomValidity。空文字で解除。'],
    ['data-auto-grow / data-show-count','true / false','複数行の自動伸長、UTF-16単位のカウンター。'],
    ['controller.refresh() / destroy()','void','外部属性・サイズ・値の再同期と、取り外し時の解除。']
  ];
}
export function mountTextFieldControls(dialog:HTMLDialogElement,root:HTMLElement,controller:PartController) {
  const field=required<TextControl>('.sop-field-control',root);
  const initial=field.value;
  const controls=document.createElement('div');controls.className='textfield-controls';
  controls.innerHTML='<div class="textfield-control-row"><label>表示状態<select data-field-status aria-label="入力欄の表示状態"><option value="default">通常</option><option value="error">エラー例</option><option value="success">成功例</option></select></label><button type="button" class="small-button" data-field-sample>例文を入れる</button><button type="button" class="small-button" data-field-reset>リセット</button></div><div class="textfield-control-row"><label><input type="checkbox" data-field-disabled>無効</label><label><input type="checkbox" data-field-readonly>読み取り専用</label></div><p>入力を自由に試せます。値の保存・送信はしません。<br>成功例は見た目の確認用で、実際の検証結果ではありません。</p>';
  required('.live-preview',dialog).after(controls);
  const status=()=>{required('#detail-state',dialog).textContent=field.disabled?'DISABLED':field.readOnly?'READ ONLY':root.dataset.composing==='true'?'COMPOSING':field.value?'EDITING':'WRITE';};
  root.addEventListener('sop:field-state',status);
  required('[data-field-sample]',controls).addEventListener('click',()=>{
    if(field.disabled||field.readOnly)return;
    controller.setValue?.(field instanceof HTMLTextAreaElement?'静かな余白から、新しいアイデアを。\n小さな気づきを、ことばにして残します。':field.type==='email'?'hello@example.com':field.type==='password'?'Sample-only-123':'小さなアイデアから、はじめよう。');
    controller.focus?.();status();
  });
  required('[data-field-reset]',controls).addEventListener('click',()=>{
    field.disabled=false;field.readOnly=false;root.dataset.success='false';controller.setError?.('');controller.setValue?.(initial);
    controls.querySelectorAll<HTMLInputElement>('input').forEach(el=>el.checked=false);
    controls.querySelectorAll<HTMLButtonElement>('button').forEach(el=>el.disabled=false);
    required<HTMLSelectElement>('[data-field-status]',controls).value='default';controller.refresh?.();status();
  });
  required<HTMLSelectElement>('[data-field-status]',controls).addEventListener('change',e=>{
    const next=(e.currentTarget as HTMLSelectElement).value;root.dataset.success=String(next==='success');
    controller.setError?.(next==='error'?'入力内容を確認してください。（エラー表示のプレビュー）':'');status();
  });
  for(const prop of ['disabled','readonly'])required<HTMLInputElement>(`[data-field-${prop}]`,controls).addEventListener('change',e=>{
    const checked=(e.currentTarget as HTMLInputElement).checked;
    if(prop==='disabled')field.disabled=checked;else field.readOnly=checked;
    required<HTMLButtonElement>('[data-field-sample]',controls).disabled=field.disabled||field.readOnly;
    controller.refresh?.();status();
  });
  const note=dialog.querySelector('.surface-note');if(note)note.textContent='実際に入力できるパーツです。ラベル・説明・入力値・エラー文は利用先に合わせて変更できます。';
}
