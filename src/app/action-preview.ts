/** Gallery-only demonstrations. Exported actions never simulate server work or change navigation. */
import type {PartPreview, PartController} from '../catalog/types';
import {required} from './utils';
export function actionGuide(category: string): string[][] {
  return category === 'buttons' ? [
    ['button / type','native HTML','通常操作はtype="button"。送信・リセットは明示的に指定。'],
    ['init(root, options)','ActionButtonController','loading/disabledの初期値を指定できます。'],
    ['setLoading(value) / setDisabled(value)','boolean','処理中の再操作防止 / 標準の無効状態。'],
    ['addEventListener("click", handler)','native click','実際の処理は利用先へ接続。二重のキー処理は不要。'],
    ['destroy()','void','取り外す前に解除し、初期属性に戻します。']
  ] : [
    ['href / target / rel / download','native anchor','移動先と開き方。#destinationは実在する対象へ変更。'],
    ['HTML + CSS','JavaScript optional','装飾はCSS。クリック・Enter・中クリック等はネイティブ。'],
    ['init(root) / destroy()','optional lifecycle','クリックを横取りせず、常時イベントや描画なし。'],
    ['.sop-link-copy / .sop-link-icon','content slots','ラベル・装飾の矢印。子に別のリンクを入れません。']
  ];
}
export function mountActionDemo(root:HTMLElement, part:PartPreview, controller:PartController, scope:HTMLElement, update?:(text:string)=>void) {
  const events=new AbortController();let timer=0,count=0;let destination:HTMLElement|undefined;
  const output=document.createElement('p');output.className='action-demo-feedback';output.setAttribute('role','status');output.dataset.demoRoot='';
  if (part.category==='buttons') {
    output.textContent='クリックして、押し心地を試す。';
    root.after(output);
    root.addEventListener('click',event=>{
      if(event.defaultPrevented)return;
      clearTimeout(timer);controller.setLoading?.(true);update?.('WORKING');
      output.textContent='デモの処理中…（送信・保存はしません）';
      timer=window.setTimeout(()=>{controller.setLoading?.(false);output.textContent=`${++count}回操作しました。`;update?.('READY');},850);
    },{signal:events.signal});
  } else if(root instanceof HTMLAnchorElement) {
    // Keep native navigation (including modifier clicks). Targets live in the same preview.
    const key=`sop-demo-${part.id}-${scope.closest('dialog')?'detail':'gallery'}`;
    root.id=key+'-origin';root.href='#'+key+'-destination';
    destination=document.createElement('section');destination.className='action-link-destination';
    destination.id=key+'-destination';destination.tabIndex=-1;destination.dataset.demoRoot='';
    destination.innerHTML='<span>LINK DESTINATION</span><p>移動先に到着しました。</p><small>ページ内リンクのデモです。</small>';
    const back=document.createElement('a');back.href='#'+root.id;back.textContent='戻る ↑';destination.append(back);
    output.textContent='矢印をたどると、このプレビュー内の移動先へ。';
    root.after(output,destination);
  }
  return {cancelPending(message?:string){clearTimeout(timer);if(message)output.textContent=message;},destroy(){clearTimeout(timer);events.abort();output.remove();destination?.remove();}};
}
export function mountActionControls(dialog:HTMLDialogElement,root:HTMLElement,part:PartPreview,controller:PartController) {
  const controls=document.createElement('div');controls.className='action-preview-controls';
  if(part.category==='buttons') {
    controls.innerHTML='<div class="action-state-pills" role="group" aria-label="ボタンの状態"><button type="button" class="small-button" data-action-state="ready" aria-pressed="true">通常</button><button type="button" class="small-button" data-action-state="loading" aria-pressed="false">処理中</button><button type="button" class="small-button" data-action-state="disabled" aria-pressed="false">無効</button></div><p>ボタンを押すと、カウンターと処理中表示を試せます。実際の保存・送信・削除はしません。</p>';
    controls.querySelectorAll<HTMLButtonElement>('[data-action-state]').forEach(button=>button.addEventListener('click',()=>{
      const next=button.dataset.actionState;
      demo.cancelPending(next==='loading'?'処理中の表示例です。（通信は行いません）':next==='disabled'?'無効状態では操作できません。':'クリックして、押し心地を試す。');
      controller.setDisabled?.(next==='disabled');controller.setLoading?.(next==='loading');
      required('#detail-state',dialog).textContent=next==='loading'?'WORKING':next==='disabled'?'DISABLED':'READY';
      controls.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    }));
  } else {
    controls.innerHTML='<div class="action-link-note"><span>NATIVE ANCHOR</span><p>クリックでプレビュー内の移動先へ。<br>実装時はhrefを目的のページに変更します。</p></div><p>リンクはネイティブのa要素です。右クリック・中クリック・修飾キーを伴う操作を横取りしません。</p>';
  }
  required('.live-preview',dialog).after(controls);
  const note=dialog.querySelector('.surface-note');if(note)note.textContent=part.category==='buttons'?'処理と表示状態は外側のアプリから接続します。ラベル・アイコンは自由に差し替えられます。':'行き先はhref、見た目はCSS。ルーターへ組み込む場合も、a要素の入れ子を作らないでください。';
  const demo=mountActionDemo(root,part,controller,dialog,text=>{
    required('#detail-state',dialog).textContent=text;
    const state=text==='WORKING'?'loading':text==='DISABLED'?'disabled':'ready';
    controls.querySelectorAll<HTMLButtonElement>('[data-action-state]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.actionState===state)));
  });
  return ()=>{demo.destroy();controls.remove();};
}
