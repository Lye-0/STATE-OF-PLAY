import {normalize} from './core.ts';
export interface Searchable {id:string;label:string;description?:string;keywords?:string[];group?:string;disabled?:boolean;}
/** Stable ranked text matching; Japanese and width variants work without a fuzzy-search dependency. */
export function matchItems<T extends Searchable>(items: readonly T[], query:string):T[]{
 const terms=normalize(query).split(/\s+/).filter(Boolean);
 if(!terms.length)return [...items];
 return items.map((item,index)=>{const label=normalize(item.label),all=normalize([item.label,item.description,...(item.keywords??[]),item.group].join(' '));
  const matches=terms.every(t=>all.includes(t));const score=terms.reduce((n,t)=>n+(label===t?12:label.startsWith(t)?6:label.includes(t)?3:1),0);
  return {item,index,score:matches?score:-1};}).filter(x=>x.score>=0).sort((a,b)=>b.score-a.score||a.index-b.index).map(x=>x.item);
}
export type SortDirection = 'ascending'|'descending';
export interface TableSort {key:string;direction:SortDirection;}
export interface DataRow {id:string;[key:string]:unknown;}
export interface DataColumn {id:string;label:string;kind?:'text'|'number'|'date'|'badge'|'progress';sortable?:boolean;width?:number;align?:'start'|'center'|'end';format?:(value:unknown,row:DataRow)=>string;}
export function compareCells(a:unknown,b:unknown,kind:DataColumn['kind'],direction:SortDirection){
 const missing=(v:unknown)=>v===null||v===undefined||v===''||(typeof v==='number'&&!Number.isFinite(v));
 if(missing(a)||missing(b))return Number(missing(a))-Number(missing(b));
 let order:number;
 if(kind==='number'||kind==='progress'){const an=Number(a),bn=Number(b);order=Number.isFinite(an)&&Number.isFinite(bn)?an-bn:String(a).localeCompare(String(b),'ja',{numeric:true});}
 else order=String(a).localeCompare(String(b),'ja',{numeric:true,sensitivity:'base'});
 return direction==='descending'?-order:order;
}
export function tableRows(rows:readonly DataRow[],columns:readonly DataColumn[],query:string,sort?:TableSort){
 const terms=normalize(query).split(/\s+/).filter(Boolean),col=columns.find(c=>c.id===sort?.key);
 const result=rows.filter(row=>{const text=normalize(columns.map(c=>String(row[c.id]??'')).join(' '));return terms.every(t=>text.includes(t));});
 if(!sort||!col||col.sortable===false)return [...result];
 return result.map((row,index)=>({row,index})).sort((a,b)=>compareCells(a.row[col.id],b.row[col.id],col.kind,sort.direction)||a.index-b.index).map(x=>x.row);
}
