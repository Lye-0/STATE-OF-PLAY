import {createCore,heading,syncHeading,q,escape,svg,uniqueId,type FoundationConfig,type FoundationOptions,type FoundationController} from '../core.ts';
import {accepted} from '../upload.ts';
import {continuumArt} from './art.ts';
export function renderUpload(o:FoundationOptions):string {
  return heading(o)+`<div class="ff-dropzone ct-intake" data-drop><input type="file" data-upload aria-label="${escape(o.label??'ファイル選択')}"><div class="ct-intake-scene" aria-hidden="true"></div><div class="ct-intake-copy"><strong data-intake-label>${escape(o.placeholder??'ファイルを迎え入れる')}</strong><span>ドロップ、またはクリックして選択</span></div><small data-upload-limits></small><span class="ct-intake-corners" aria-hidden="true"></span></div><div class="ct-file-summary"><span data-file-summary>ファイル未選択</span><span>LOCAL ONLY</span></div><ul class="ff-upload-files" data-upload-files aria-label="選択したファイル"></ul><p class="ff-upload-errors" data-upload-error role="status"></p>`;
}
/** Selection is local only. No fabricated upload percentage, request or automatic success. */
export function mountUpload(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
  const c=createCore(root,config,options,(v,o)=>(Array.isArray(v)?v.filter((x):x is File=>x instanceof File):[]).slice(0,o.multiple?Math.max(1,Math.floor(o.maxFiles??6)):1));
  root.classList.add('sop-continuum');
  if(!root.querySelector('.ct-intake-scene'))root.innerHTML=renderUpload(c.options);
  const input=q<HTMLInputElement>(root,'[data-upload]'),zone=q<HTMLElement>(root,'[data-drop]'),list=q<HTMLElement>(root,'[data-upload-files]'),error=q<HTMLElement>(root,'[data-upload-error]');
  const uid=uniqueId('sop-intake');input.id=uid;error.id=uid+'-errors';const limits=q<HTMLElement>(root,'[data-upload-limits]');limits.id=uid+'-limits';input.setAttribute('aria-describedby',`${limits.id} ${error.id}`);
  const art=continuumArt(root,q(root,'.ct-intake-scene'),0,true);
  const urls=new Map<File,string>(),rows=new Map<File,HTMLElement>();
  let dragDepth=0,hover=false,focused=false,previousCount=0;
  const selected=()=>c.data as File[];
  function mood(){const active=!c.options.disabled&&!c.options.readOnly;root.dataset.dragging=String(active&&dragDepth>0);art.pause(!!c.options.paused);art.move(active?(dragDepth>0?1:focused?.75:hover?.55:selected().length?.4:0):0);}
  function add(files:File[]){
    if(c.dead||c.options.disabled||c.options.readOnly)return;
    const o=c.options,errors:string[]=[],next=o.multiple?[...selected()]:[];
    const maxFiles=o.multiple?Math.max(1,Math.floor(o.maxFiles??6)):1;
    for(const file of files){
      if(!accepted(file,o.accept)){errors.push(`${file.name}: 形式が対象外です。`);continue;}
      if(file.size>(o.maxBytes??10*1024*1024)){errors.push(`${file.name}: サイズの上限を超えています。`);continue;}
      if(next.some(f=>f.name===file.name&&f.size===file.size&&f.lastModified===file.lastModified))continue;
      if(next.length>=maxFiles){errors.push(`選択できるのは${maxFiles}ファイルまでです。`);break;}
      next.push(file);
    }
    error.textContent=errors.join(' ');
    // A rejected single-file selection must not erase an already valid selection.
    if(!o.multiple&&!next.length&&errors.length){c.sync('value');return;}
    c.send(next);art.pulse();
  }
  function newRow(file:File):HTMLElement {
    const row=document.createElement('li');row.className='ct-file-row';
    if(/^image\/(png|jpeg|webp|gif|avif)$/.test(file.type))urls.set(file,URL.createObjectURL(file));
    row.innerHTML=`<span class="ff-file-preview">${urls.has(file)?`<img src="${escape(urls.get(file))}" alt="">`:svg('file')}</span><span class="ct-file-copy"><strong>${escape(file.name)}</strong><small>${Math.ceil(file.size/1024)} KB · 未送信</small></span><button type="button" data-file-remove aria-label="${escape(file.name)} を削除">${svg('close')}</button>`;
    return row;
  }
  c.sync=reason=>{
    syncHeading(c);const o=c.options,files=selected();
    input.disabled=!!o.disabled||!!o.readOnly;input.multiple=!!o.multiple;input.accept=o.accept??'';input.required=!!o.required;
    if(o.name)input.name=o.name;else input.removeAttribute('name');
    input.setAttribute('aria-label',o.label??'ファイル選択');
    q(root,'[data-intake-label]').textContent=o.placeholder??'ファイルを迎え入れる';
    q(root,'[data-upload-limits]').textContent=`${o.accept||'すべての形式'} · 最大 ${Math.round((o.maxBytes??10*1024*1024)/1024/1024*10)/10} MB / FILE`;
    for(const [file,row]of rows)if(!files.includes(file)){row.remove();rows.delete(file);const url=urls.get(file);if(url){URL.revokeObjectURL(url);urls.delete(file);}}
    files.forEach((file,i)=>{
      let row=rows.get(file);if(!row){row=newRow(file);rows.set(file,row);}
      const button=q<HTMLButtonElement>(row,'[data-file-remove]');button.dataset.fileRemove=String(i);button.disabled=!!o.disabled||!!o.readOnly;
      const at=list.children[i];if(at!==row)list.insertBefore(row,at??null);
    });
    // Keep the native FormData in sync with removals, API updates and drag/drop.
    try{const transfer=new DataTransfer();files.forEach(file=>transfer.items.add(file));input.files=transfer.files;}catch{/* Consumers can always use getData()/onDataChange. */}
    q(root,'[data-file-summary]').textContent=files.length?`${files.length} ファイルを選択`:'ファイル未選択';
    root.dataset.hasFiles=String(files.length>0);art.files(files.length);
    if(reason==='reset'){error.textContent='';dragDepth=0;}
    if(files.length!==previousCount&&reason!=='initial')art.pulse();previousCount=files.length;
    if(o.disabled||o.readOnly)dragDepth=0;mood();
  };
  c.on(input,'change',()=>add(Array.from(input.files??[])));
  c.on(list,'click',event=>{if(c.options.disabled||c.options.readOnly)return;const button=(event.target as Element).closest<HTMLElement>('[data-file-remove]');if(button){const index=Number(button.dataset.fileRemove);c.send(selected().filter((_,i)=>i!==index));input.focus();}});
  c.on(zone,'pointerenter',()=>{hover=true;mood();});c.on(zone,'pointerleave',()=>{hover=false;mood();});
  c.on(input,'focus',()=>{focused=true;mood();});c.on(input,'blur',()=>{focused=false;mood();});
  c.on(zone,'dragenter',event=>{event.preventDefault();if(c.options.disabled||c.options.readOnly)return;dragDepth++;mood();});
  c.on(zone,'dragover',event=>{event.preventDefault();const transfer=(event as DragEvent).dataTransfer;if(transfer)transfer.dropEffect=c.options.disabled||c.options.readOnly?'none':'copy';});
  c.on(zone,'dragleave',()=>{dragDepth=Math.max(0,dragDepth-1);mood();});
  c.on(zone,'drop',event=>{event.preventDefault();dragDepth=0;add(Array.from((event as DragEvent).dataTransfer?.files??[]));mood();});
  c.on(document,'dragend',()=>{dragDepth=0;mood();});
  c.cleanup(()=>{art.destroy();for(const url of urls.values())URL.revokeObjectURL(url);urls.clear();rows.clear();});
  c.sync('initial');return c;
}
