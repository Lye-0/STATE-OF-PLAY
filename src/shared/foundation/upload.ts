import {createCore,heading,syncHeading,q,escape,svg,uniqueId,type FoundationConfig,type FoundationOptions,type FoundationController,type FoundationValue} from './core.ts';
export function accepted(file:Pick<File,'name'|'type'>,accept=''):boolean {const rules=accept.split(',').map(r=>r.trim().toLowerCase()).filter(Boolean);return !rules.length||rules.some(r=>r.startsWith('.')?file.name.toLowerCase().endsWith(r):r.endsWith('/*')?file.type.toLowerCase().startsWith(r.slice(0,-1)):file.type.toLowerCase()===r);}
export function renderUpload(o:FoundationOptions):string{return heading(o)+`<div class="ff-dropzone" data-drop><input type="file" data-upload aria-label="${escape(o.label)}"><span class="ff-upload-symbol" aria-hidden="true">${svg('upload')}</span><strong>ここにドロップ</strong><span>または <u>ファイルを選ぶ</u></span><small data-upload-limits></small></div><ul class="ff-upload-files" data-upload-files></ul><p class="ff-upload-errors" data-upload-error role="status"></p><p class="ff-footnote">ローカルで選択・確認。送信処理はアプリ側へ接続します。</p>`;}
export function mountUpload(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
 const c=createCore(root,config,options,v=>Array.isArray(v)?v.filter((x):x is File=>x instanceof File):[]);if(!root.querySelector('[data-upload]'))root.innerHTML=renderUpload(c.options);
 const input=q<HTMLInputElement>(root,'[data-upload]'),zone=q(root,'[data-drop]'),list=q(root,'[data-upload-files]'),error=q(root,'[data-upload-error]');input.id=uniqueId('sop-files');
 const urls=new Map<File,string>();let dragDepth=0;
 const selected=()=>c.data as File[];
 function add(files:File[]){if(c.options.disabled||c.options.readOnly)return;const o=c.options,errors:string[]=[],next=o.multiple?[...selected()]:[];const maxFiles=o.multiple?o.maxFiles??6:1;
  for(const file of files){if(!accepted(file,o.accept)){errors.push(`${file.name}: 形式が対象外です。`);continue;}if(file.size>(o.maxBytes??10*1024*1024)){errors.push(`${file.name}: サイズの上限を超えています。`);continue;}if(next.length>=maxFiles){errors.push(`選択できるのは${maxFiles}ファイルまでです。`);break;}if(next.some(f=>f.name===file.name&&f.size===file.size&&f.lastModified===file.lastModified))continue;next.push(file);}
  error.textContent=errors.join(' ');c.send(next);
 }
 c.sync=reason=>{syncHeading(c);const o=c.options;input.disabled=!!o.disabled||!!o.readOnly;input.multiple=!!o.multiple;input.accept=o.accept??'';if(o.name)input.name=o.name;else input.removeAttribute('name');input.required=!!o.required;input.setAttribute('aria-label',o.label??'ファイル選択');q(root,'[data-upload-limits]').textContent=`${o.accept||'すべての形式'} · ${Math.round((o.maxBytes??10*1024*1024)/1024/1024)} MB / FILE`;
  for(const [file,url]of urls)if(!selected().includes(file)){URL.revokeObjectURL(url);urls.delete(file);}
  for(const file of selected())if(/^image\/(png|jpeg|webp|gif|avif)$/.test(file.type)&&!urls.has(file))urls.set(file,URL.createObjectURL(file));
  list.innerHTML=selected().map((file,i)=>`<li><span class="ff-file-preview">${urls.has(file)?`<img src="${escape(urls.get(file))}" alt="">`:svg('file')}</span><span><strong>${escape(file.name)}</strong><small>${Math.ceil(file.size/1024)} KB · ローカルファイル</small></span><button type="button" data-file-remove="${i}" aria-label="${escape(file.name)} を削除" ${o.disabled||o.readOnly?'disabled':''}>${svg('close')}</button></li>`).join('');
  // Keep native FormData and displayed selection in agreement, including removals and drops.
  try{const transfer=new DataTransfer();selected().forEach(file=>transfer.items.add(file));input.files=transfer.files;}catch{/* Use getData()/onDataChange in browsers without writable FileList. */}
  if(reason==='reset')error.textContent='';
 };
 c.on(input,'change',()=>add(Array.from(input.files??[])));c.on(list,'click',event=>{const b=(event.target as Element).closest<HTMLElement>('[data-file-remove]');if(b){const index=Number(b.dataset.fileRemove);c.send(selected().filter((_,i)=>i!==index));input.focus();}});
 c.on(zone,'dragenter',event=>{event.preventDefault();dragDepth++;zone.dataset.dragging='true';});c.on(zone,'dragover',event=>event.preventDefault());c.on(zone,'dragleave',()=>{dragDepth=Math.max(0,dragDepth-1);if(!dragDepth)zone.dataset.dragging='false';});c.on(zone,'drop',event=>{event.preventDefault();dragDepth=0;zone.dataset.dragging='false';add(Array.from((event as DragEvent).dataTransfer?.files??[]));});
 c.cleanup(()=>{for(const url of urls.values())URL.revokeObjectURL(url);urls.clear();});c.sync('initial');return c;
}
