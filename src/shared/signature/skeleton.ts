import {escape as h, seed, owned, lifecycle, announce, integer, type SignatureAPI} from './core.ts';
export interface SkeletonOptions { loading?: boolean; label?: string; rows?: number; paused?: boolean; }
export interface SkeletonState { loading: boolean; rows: number; }
export function skeletonMarkup(options:SkeletonOptions={}) {
 const rows=integer(options.rows,4,2,8);
 return `<div class="sg-skeleton-frame" aria-hidden="true"><div class="sg-sk-hero"><i></i><i></i><i></i><span class="sg-sk-emblem"></span></div><div class="sg-sk-profile"><span></span><div><i></i><i></i></div></div><div class="sg-sk-lines">${Array.from({length:rows},(_,i)=>`<i style="--line:${i};--line-width:${i===rows-1?66:100}%"></i>`).join('')}</div><div class="sg-sk-tiles"><i></i><i></i><i></i></div><div class="sg-sk-film"></div><div class="sg-sk-beam"></div></div><span class="sg-sr" data-sk-status role="status">${h(options.loading===false?'':options.label??'読み込み中')}</span>`;
}
export function createSkeleton(root:HTMLElement,provided:SkeletonOptions={}):SignatureAPI<SkeletonOptions,SkeletonState>{
 let options=seed(root,provided),loading=options.loading!==false;
 const host=owned(root),life=lifecycle(root),slot=root.querySelector<HTMLElement>(':scope > [data-sg-slot]');
 function paint(){root.setAttribute('aria-busy',String(loading));root.dataset.sgLoading=String(loading);host.hidden=!loading;if(slot){slot.hidden=loading;slot.inert=loading;}life.setPaused(!!options.paused||!loading);const status=host.querySelector<HTMLElement>('[data-sk-status]');if(status)status.textContent=loading?options.label??'読み込み中':'';}
 host.innerHTML=skeletonMarkup(options);paint();
 return {getState:()=>({loading,rows:integer(options.rows,4,2,8)}),reset(){loading=true;paint();announce(root,{loading});},update(next){if(life.dead)return;const rebuild=next.rows!==undefined&&next.rows!==options.rows;options={...options,...next};loading=options.loading!==false;if(rebuild)host.innerHTML=skeletonMarkup(options);paint();},destroy(){life.destroy();root.removeAttribute('aria-busy');if(slot){slot.hidden=false;slot.inert=false;}},setPaused(paused){options={...options,paused};paint();}};
}
