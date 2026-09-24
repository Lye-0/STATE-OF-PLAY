import {escape as h,icon,art,unique,identity,seed,owned,lifecycle,emit,clamp,type WorkbenchAPI} from './core.ts';
import {tableRows,type DataRow,type DataColumn,type TableSort} from './model.ts';
export type {DataRow,DataColumn,TableSort};
export interface RowAction {id:string;label:string;icon?:string;danger?:boolean;}
export interface TableOptions {
 label?:string;description?:string;rows?:DataRow[];columns?:DataColumn[];rowActions?:RowAction[];
 query?:string;defaultQuery?:string;sort?:TableSort|null;defaultSort?:TableSort;
 selected?:string[];defaultSelected?:string[];selectable?:boolean;isRowSelectable?:(row:DataRow)=>boolean;
 page?:number;defaultPage?:number;pageSize?:number;manual?:boolean;rowCount?:number;
 loading?:boolean;error?:string;disabled?:boolean;resizable?:boolean;stickyFirst?:boolean;compact?:boolean;
 onQueryChange?:(query:string)=>void;onSortChange?:(sort:TableSort|null)=>void;
 onSelectionChange?:(ids:string[])=>void;onPageChange?:(page:number)=>void;
 onColumnResize?:(widths:Record<string,number>)=>void;onRowAction?:(action:RowAction,row:DataRow)=>void;
}
export interface TableState {query:string;sort:TableSort|null;selected:string[];page:number;pageSize:number;total:number;pages:number;widths:Record<string,number>;}
export function tableMarkup(options:TableOptions={},prefix='wb-table'){
 return `<div class="wb-data-frame">${art('table')}<header class="wb-data-heading"><div><span class="wb-eyebrow">DATA / COLLECTION</span><h3 id="${prefix}-heading">${h(options.label??'データ一覧')}</h3>${options.description?`<p>${h(options.description)}</p>`:''}</div><span class="wb-data-total">0 RECORDS</span></header><div class="wb-data-toolbar"><label class="wb-table-search">${icon('search')}<input type="search" placeholder="一覧を検索" aria-label="一覧を検索" value="${h(options.query??options.defaultQuery??'')}" autocomplete="off"></label><div class="wb-data-selection" hidden><span></span><button type="button" data-table-clear>解除</button></div></div><div class="wb-table-scroll" tabindex="0" aria-label="横スクロールできる表"><table aria-labelledby="${prefix}-heading"><caption class="wb-sr">${h(options.label??'データ一覧')}。列見出しのボタンで並べ替えできます。</caption><colgroup></colgroup><thead></thead><tbody></tbody></table></div><p class="wb-data-status" role="status"></p><footer class="wb-data-footer"><span class="wb-page-summary"></span><nav aria-label="一覧のページ送り"><button type="button" data-table-page="prev" aria-label="前のページ">${icon('chevron')}</button><output></output><button type="button" data-table-page="next" aria-label="次のページ">${icon('chevron')}</button></nav></footer></div>`;
}
export function createDataTable(root:HTMLElement,provided:TableOptions={}):WorkbenchAPI<TableOptions,TableState>{
 let options=seed(root,provided),rows=unique(options.rows??[]),columns=unique(options.columns??[]),query=options.query??options.defaultQuery??'',sort=options.sort!==undefined?options.sort:options.defaultSort??null;
 let selected=new Set(options.selected??options.defaultSelected??[]),page=options.page??options.defaultPage??1,widths:Record<string,number>={},visible:DataRow[]=[],total=rows.length,pages=1,composing=false;
 const life=lifecycle(root),host=owned(root),uid=identity('wb-table');host.innerHTML=tableMarkup(options,uid);
 const table=host.querySelector<HTMLTableElement>('table')!,thead=table.tHead!,tbody=table.tBodies[0],colgroup=table.querySelector('colgroup')!,input=host.querySelector<HTMLInputElement>('input[type=search]')!;
 const state=():TableState=>({query,sort,selected:[...selected],page,pageSize:Math.round(clamp(options.pageSize??5,1,500)),total,pages,widths:{...widths}});
 const selectable=(row:DataRow)=>!options.disabled&&(options.isRowSelectable?.(row)??true);
 function cell(column:DataColumn,row:DataRow){const value=row[column.id];if(column.format)return h(column.format(value,row));
  if(column.kind==='badge')return `<span class="wb-cell-badge" data-value="${h(String(value??'').toLowerCase())}"><i></i>${h(value??'—')}</span>`;
  if(column.kind==='progress'){const n=clamp(Number(value),0,100);return `<span class="wb-cell-progress"><span style="--wb-cell-progress:${n}%"><i></i></span><b>${Math.round(n)}%</b></span>`;}
  return `<span class="wb-cell-text">${h(value??'—')}</span>`;
 }
 function applyWidths(){table.querySelectorAll<HTMLElement>('col[data-col]').forEach(col=>{const id=col.dataset.col!,column=columns.find(c=>c.id===id)!;const width=widths[id]??clamp(column.width??(column.kind==='number'?110:160),88,520);col.style.width=width+'px';});table.querySelectorAll<HTMLElement>('[data-resize]').forEach(el=>el.setAttribute('aria-valuenow',String(widths[el.dataset.resize!]??columns.find(c=>c.id===el.dataset.resize)?.width??160)));}
 function paint(){
  host.querySelector<HTMLElement>('.wb-data-heading h3')!.textContent=options.label??'データ一覧';table.caption!.textContent=(options.label??'データ一覧')+'。列見出しのボタンで並べ替えできます。';
  const oldFocus=host.contains(document.activeElement)?(document.activeElement as HTMLElement).dataset.focusKey:undefined;
  const pageSize=Math.round(clamp(options.pageSize??5,1,500));
  const filtered=options.manual?[...rows]:tableRows(rows,columns,query,sort??undefined);total=options.manual?Math.max(0,options.rowCount??rows.length):filtered.length;pages=Math.max(1,Math.ceil(total/pageSize));page=Math.round(clamp(page,1,pages));visible=options.manual?filtered:filtered.slice((page-1)*pageSize,page*pageSize);
  const hasSelect=options.selectable!==false,actions=unique(options.rowActions??[]);
  root.dataset.wbCompact=String(!!options.compact);root.dataset.wbSticky=String(options.stickyFirst!==false);root.dataset.wbHasSelection=String(hasSelect);root.dataset.wbSorted=sort?.direction??'none';root.dataset.wbSelected=String(selected.size>0);
  input.disabled=!!options.disabled;if(input.value!==query&&!composing)input.value=query;
  const fullCols=(hasSelect?1:0)+columns.length+(actions.length?1:0);
  colgroup.innerHTML=(hasSelect?'<col style="width:42px">':'')+columns.map(c=>`<col data-col="${h(c.id)}">`).join('')+(actions.length?'<col style="width:92px">':'');
  const enabled=visible.filter(selectable),count=enabled.filter(r=>selected.has(r.id)).length;
  thead.innerHTML=`<tr>${hasSelect?`<th class="wb-select-cell"><input type="checkbox" data-table-all data-focus-key="select-all" aria-label="このページの選択可能な行をすべて選択" ${count===enabled.length&&count>0?'checked':''} ${!enabled.length||options.loading?'disabled':''}></th>`:''}${columns.map((c,i)=>`<th scope="col" data-column="${h(c.id)}" ${i===0?'data-first-column':''} data-align="${c.align??(c.kind==='number'?'end':'start')}" ${sort?.key===c.id?`aria-sort="${sort.direction}"`:''}><div class="wb-th-content">${c.sortable!==false?`<button type="button" data-sort="${h(c.id)}" data-focus-key="sort-${h(c.id)}" ${options.disabled||options.loading?'disabled':''}><span>${h(c.label)}</span><span class="wb-sort-glyph" aria-hidden="true">${sort?.key===c.id?sort.direction==='ascending'?'↑':'↓':'↕'}</span></button>`:`<span>${h(c.label)}</span>`}${options.resizable!==false?`<span role="separator" tabindex="${options.disabled?-1:0}" aria-orientation="vertical" aria-label="${h(c.label)}の列幅" aria-valuemin="88" aria-valuemax="520" aria-valuenow="160" data-resize="${h(c.id)}" data-focus-key="resize-${h(c.id)}" class="wb-column-resizer"></span>`:''}</div></th>`).join('')}${actions.length?'<th scope="col" class="wb-row-actions-heading">操作</th>':''}</tr>`;
  const all=thead.querySelector<HTMLInputElement>('[data-table-all]');if(all)all.indeterminate=count>0&&count<enabled.length;
  const unavailable=options.loading||options.error;
  tbody.innerHTML=unavailable?`<tr><td colspan="${Math.max(1,fullCols)}" class="wb-data-empty">${options.error?h(options.error):'読み込み中…'}</td></tr>`:!visible.length?`<tr><td colspan="${Math.max(1,fullCols)}" class="wb-data-empty"><span>∅</span>該当するデータがありません。</td></tr>`:visible.map((row,i)=>`<tr data-row="${h(row.id)}" data-selected="${selected.has(row.id)}" style="--wb-row:${i}">${hasSelect?`<td class="wb-select-cell"><input type="checkbox" data-row-check="${h(row.id)}" data-focus-key="row-${h(row.id)}" aria-label="${h(String(row[columns[0]?.id]??row.id))} を選択" ${selected.has(row.id)?'checked':''} ${!selectable(row)?'disabled':''}></td>`:''}${columns.map((c,n)=>`<td data-column="${h(c.id)}" ${n===0?'data-first-column':''} data-align="${c.align??(c.kind==='number'?'end':'start')}">${cell(c,row)}</td>`).join('')}${actions.length?`<td class="wb-row-actions"><div>${actions.map(a=>`<button type="button" data-action="${h(a.id)}" data-action-row="${h(row.id)}" data-focus-key="action-${h(row.id)}-${h(a.id)}" aria-label="${h(String(row[columns[0]?.id]??row.id))}：${h(a.label)}" title="${h(a.label)}" ${a.danger?'data-danger="true"':''} ${options.disabled?'disabled':''}>${icon(a.icon??'more')}</button>`).join('')}</div></td>`:''}</tr>`).join('');
  applyWidths();table.setAttribute('aria-busy',String(!!options.loading));
  const selectedUI=host.querySelector<HTMLElement>('.wb-data-selection')!;selectedUI.hidden=!selected.size;selectedUI.querySelector('span')!.textContent=`${selected.size} 件選択`;
  host.querySelector<HTMLElement>('.wb-data-total')!.textContent=`${total} RECORDS`;
  host.querySelector<HTMLElement>('.wb-page-summary')!.textContent=total?`${(page-1)*pageSize+1}–${Math.min(page*pageSize,total)} / ${total}`:'0 / 0';
  host.querySelector('footer output')!.textContent=`${page} / ${pages}`;
  host.querySelector<HTMLButtonElement>('[data-table-page=prev]')!.disabled=page<=1||!!options.disabled||!!options.loading;
  host.querySelector<HTMLButtonElement>('[data-table-page=next]')!.disabled=page>=pages||!!options.disabled||!!options.loading;
  host.querySelector<HTMLElement>('.wb-data-status')!.textContent=options.error??(options.loading?'読み込み中…':sort?`${columns.find(c=>c.id===sort!.key)?.label??''}を${sort.direction==='ascending'?'昇順':'降順'}で表示。${total} 件。`:`${total} 件のデータ。`);
  if(oldFocus)host.querySelectorAll<HTMLElement>('[data-focus-key]').forEach(el=>{if(el.dataset.focusKey===oldFocus)el.focus({preventScroll:true});});
 }
 function setSelected(next:Set<string>){const ids=[...next];if(options.selected===undefined)selected=new Set(ids);options.onSelectionChange?.(ids);paint();life.pulse('selection');emit(root,{...state(),requestedSelection:ids});}
 function setPage(next:number){next=Math.round(clamp(next,1,pages));if(options.page===undefined)page=next;options.onPageChange?.(next);paint();life.pulse('page');emit(root,{...state(),requestedPage:next});}
 function setQuery(next:string){if(options.query===undefined)query=next;options.onQueryChange?.(next);if(options.page===undefined)page=1;options.onPageChange?.(1);paint();emit(root,{...state(),requestedQuery:next});}
 host.addEventListener('click',e=>{const target=e.target as Element;if(options.disabled)return;
  const sortButton=target.closest<HTMLElement>('[data-sort]');if(sortButton){const key=sortButton.dataset.sort!;const next:TableSort|null=sort?.key===key?(sort.direction==='ascending'?{key,direction:'descending'}:null):{key,direction:'ascending'};if(options.sort===undefined)sort=next;options.onSortChange?.(next);paint();life.pulse('sort');emit(root,{...state(),requestedSort:next});}
  const pageButton=target.closest<HTMLElement>('[data-table-page]');if(pageButton)setPage(page+(pageButton.dataset.tablePage==='next'?1:-1));
  if(target.closest('[data-table-clear]'))setSelected(new Set());
  const action=target.closest<HTMLElement>('[data-action]');if(action){const row=rows.find(r=>r.id===action.dataset.actionRow),item=options.rowActions?.find(a=>a.id===action.dataset.action);if(row&&item){options.onRowAction?.(item,row);host.querySelector<HTMLElement>('.wb-data-status')!.textContent=`${item.label}：${String(row[columns[0]?.id]??row.id)}`;emit(root,{...state(),action:{row:row.id,id:item.id}});}}
 },{signal:life.signal});
 host.addEventListener('change',e=>{const target=e.target as HTMLInputElement;if(options.disabled)return;if(target.matches('[data-row-check]')){const next=new Set(selected),id=target.dataset.rowCheck!;if(target.checked)next.add(id);else next.delete(id);setSelected(next);}if(target.matches('[data-table-all]')){const next=new Set(selected);visible.filter(selectable).forEach(row=>{if(target.checked)next.add(row.id);else next.delete(row.id);});setSelected(next);}},{signal:life.signal});
 input.addEventListener('compositionstart',()=>{composing=true;},{signal:life.signal});input.addEventListener('compositionend',()=>{composing=false;setQuery(input.value);},{signal:life.signal});input.addEventListener('input',()=>{if(!composing)setQuery(input.value);},{signal:life.signal});
 let drag:{id:string;pointer:number;x:number;width:number;node:HTMLElement}|null=null;
 host.addEventListener('pointerdown',e=>{const node=(e.target as Element).closest<HTMLElement>('[data-resize]');if(!node||options.disabled||e.button!==0)return;e.preventDefault();const id=node.dataset.resize!;drag={id,pointer:e.pointerId,x:e.clientX,width:widths[id]??columns.find(c=>c.id===id)?.width??160,node};node.setPointerCapture(e.pointerId);},{signal:life.signal});
 host.addEventListener('pointermove',e=>{if(!drag||drag.pointer!==e.pointerId)return;const rtl=getComputedStyle(root).direction==='rtl';widths[drag.id]=Math.round(clamp(drag.width+(e.clientX-drag.x)*(rtl?-1:1),88,520));applyWidths();},{signal:life.signal});
 const finish=()=>{if(!drag)return;drag=null;options.onColumnResize?.({...widths});emit(root,state());};host.addEventListener('pointerup',finish,{signal:life.signal});host.addEventListener('pointercancel',finish,{signal:life.signal});
 host.addEventListener('keydown',e=>{const node=(e.target as Element).closest<HTMLElement>('[data-resize]');if(node&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)&&!options.disabled){e.preventDefault();const id=node.dataset.resize!,current=widths[id]??columns.find(c=>c.id===id)?.width??160;const rtl=getComputedStyle(root).direction==='rtl';widths[id]=e.key==='Home'?88:e.key==='End'?520:clamp(current+(e.key==='ArrowRight'?1:-1)*(rtl?-1:1)*(e.shiftKey?1:12),88,520);applyWidths();options.onColumnResize?.({...widths});}},{signal:life.signal});
 life.cleanup(()=>{drag=null;});paint();
 return {getState:state,reset(){query=options.query??options.defaultQuery??'';sort=options.sort!==undefined?options.sort:options.defaultSort??null;selected=new Set(options.selected??options.defaultSelected??[]);page=options.page??options.defaultPage??1;widths={};paint();},setPaused:life.setPaused,destroy:life.destroy,
 update(next){if(life.dead)return;options={...options,...next};if(next.rows)rows=unique(next.rows);if(next.columns)columns=unique(next.columns);if(next.query!==undefined)query=next.query;if(next.sort!==undefined)sort=next.sort;if(next.selected!==undefined)selected=new Set(next.selected);if(next.page!==undefined)page=next.page;paint();}};
}
