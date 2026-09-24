import {escape as h, identity, seed, owned, lifecycle, announce, pulse, listenReset, integer, clamp, type SignatureAPI} from './core.ts';
export interface RatingOptions { value?: number; defaultValue?: number; max?: number; name?: string; label?: string; disabled?: boolean; readOnly?: boolean; required?: boolean; clearable?: boolean; onValueChange?: (value: number) => void; }
export interface RatingState { value: number; max: number; preview: number; }
export function ratingValue(value: number, max: number) { return clamp(Math.round(value),0,max); }
export function ratingMarkup(options: RatingOptions = {}, prefix = 'sg-rating'): string {
 const max=integer(options.max,5,2,10),value=ratingValue(options.value??options.defaultValue??0,max),name=options.name??prefix;
 return `<fieldset class="sg-rating-field" ${options.disabled?'disabled':''}><legend class="sg-label">${h(options.label??'評価')}</legend><div class="sg-rating-scale" style="--sg-count:${max}">${Array.from({length:max},(_,i)=>`<label class="sg-rating-unit" data-rank="${i+1}" style="--rank:${i}"><input type="radio" name="${h(name)}" value="${i+1}" aria-label="${i+1} / ${max}" ${value===i+1?'checked':''} ${options.required?'required':''}><span class="sg-rating-form" aria-hidden="true"><span class="sg-rating-core"></span><span class="sg-rating-petals">${Array.from({length:7},(_,j)=>`<i style="--petal:${j}"></i>`).join('')}</span><span class="sg-rating-orbit"></span><span class="sg-rating-flame"></span><span class="sg-rating-number">${String(i+1).padStart(2,'0')}</span><svg class="sg-rating-star" viewBox="0 0 40 40"><path d="M20 3 25.3 13.7 37.1 15.4 28.5 23.7 30.5 35.5 20 29.9 9.5 35.5 11.5 23.7 2.9 15.4 14.7 13.7Z"/></svg></span><span class="sg-rating-tick" aria-hidden="true"></span></label>`).join('')}</div><div class="sg-rating-info"><output class="sg-rating-output" aria-live="polite">${value?`${value} / ${max}`:'未評価'}</output><button type="button" class="sg-rating-clear" ${options.clearable===false||options.required?'hidden':''} ${options.readOnly||options.disabled?'disabled':''}>クリア</button></div></fieldset>`;
}
export function createRating(root: HTMLElement, provided: RatingOptions = {}): SignatureAPI<RatingOptions, RatingState> {
 let options=seed(root,provided),max=integer(options.max,5,2,10),value=ratingValue(options.value??options.defaultValue??0,max),preview=0;
 const prefix=identity('sg-rating'),life=lifecycle(root),host=owned(root);
 function paint(){
  root.dataset.sgReadonly=String(!!options.readOnly);root.style.setProperty('--sg-rating-p',String((preview||value)/max));
  host.querySelectorAll<HTMLLabelElement>('[data-rank]').forEach(label=>{const rank=Number(label.dataset.rank);label.dataset.filled=String(rank<=(preview||value));label.dataset.exact=String(rank===value);const input=label.querySelector('input')!;input.checked=rank===value;input.disabled=!!options.disabled;input.tabIndex=options.readOnly?-1:0;if(options.readOnly)input.setAttribute('aria-disabled','true');else input.removeAttribute('aria-disabled');});
  host.querySelector('fieldset')!.disabled=!!options.disabled;
  host.querySelector('output')!.textContent=value?`${value} / ${max}`:'未評価';
  const clear=host.querySelector<HTMLButtonElement>('.sg-rating-clear')!;clear.disabled=!!(options.readOnly||options.disabled);clear.hidden=options.clearable===false||!!options.required;
 }
 function render(){host.innerHTML=ratingMarkup({...options,value,max},prefix);paint();}
 function commit(next:number){if(options.disabled||options.readOnly){paint();return;}const requested=ratingValue(next,max);if(options.value===undefined)value=requested;preview=0;options.onValueChange?.(requested);paint();pulse(root,'rate');announce(root,{value,requested});}
 host.addEventListener('change',event=>{const input=event.target as HTMLInputElement;if(input.matches('input[type=radio]'))commit(Number(input.value));},{signal:life.signal});
 host.addEventListener('click',event=>{if(options.readOnly){event.preventDefault();paint();}else if((event.target as Element).closest('.sg-rating-clear'))commit(0);},{signal:life.signal});
 host.addEventListener('pointerover',event=>{if(options.disabled||options.readOnly||event.pointerType==='touch')return;const label=(event.target as Element).closest<HTMLElement>('[data-rank]');if(label){preview=Number(label.dataset.rank);paint();}},{signal:life.signal});
 host.addEventListener('pointerleave',()=>{preview=0;paint();},{signal:life.signal});
 host.addEventListener('keydown',event=>{if(options.readOnly){if([' ','ArrowRight','ArrowLeft','ArrowUp','ArrowDown'].includes(event.key))event.preventDefault();return;}if((event.target as Element).matches('input')&&['Home','End'].includes(event.key)){event.preventDefault();commit(event.key==='Home'?1:max);host.querySelector<HTMLInputElement>(`input[value="${event.key==='Home'?1:max}"]`)?.focus();}},{signal:life.signal});
 function reset(){if(options.value===undefined)value=ratingValue(options.defaultValue??0,max);preview=0;paint();}
 listenReset(root,life.signal,reset);render();
 return {getState:()=>({value,max,preview}),reset,update(next){if(life.dead)return;const rebuild=['max','name','label','required'].some(k=>k in next && next[k as keyof RatingOptions]!==options[k as keyof RatingOptions]);options={...options,...next};max=integer(options.max,5,2,10);if(next.value!==undefined)value=next.value;value=ratingValue(value,max);if(rebuild)render();else paint();},destroy:life.destroy,setPaused:life.setPaused};
}
