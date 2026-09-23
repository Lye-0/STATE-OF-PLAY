import {createCore,heading,syncHeading,q,escape,type FoundationConfig,type FoundationOptions,type FoundationController} from '../core.ts';
import {continuumArt} from './art.ts';
/** Native progress has a zero-based range. Visible percentages use the configured min/max. */
export function progressRange(o:FoundationOptions):[number,number] {
  const min=Number.isFinite(o.min)?o.min!:0;
  const proposed=Number.isFinite(o.max)?o.max!:100;
  const max=proposed>min?proposed:min+1;
  return Number.isFinite(max-min)&&max>min ? [min,max] : [0,100];
}
export function progressFraction(value:unknown,o:FoundationOptions):number {
  const [min,max]=progressRange(o),n=typeof value==='number'&&Number.isFinite(value)?value:min;
  return Math.max(0,Math.min(1,(n-min)/(max-min)));
}
export function renderProgress(o:FoundationOptions):string {
  const p=progressFraction(o.value??o.defaultValue,o),[min,max]=progressRange(o);
  return heading(o)+`<div class="ct-progress-stage"><div class="ct-meter-scene" aria-hidden="true"></div><div class="ct-meter-baseline" aria-hidden="true"><i style="width:${p*100}%"></i></div></div><div class="ct-progress-caption"><span class="ct-progress-state" data-ct-progress-state></span><span class="ff-reading" data-progress-reading aria-hidden="true">${o.indeterminate?'—':`${Math.round(p*100)}<small>%</small>`}</span></div><progress class="ff-sr" data-progress aria-label="${escape(o.label??'進捗')}" max="${max-min}" ${o.indeterminate?'':`value="${p*(max-min)}"`}></progress>`;
}
export function mountProgress(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
  const c=createCore(root,config,options,v=>typeof v==='number'&&Number.isFinite(v)?v:0);
  root.classList.add('sop-continuum');
  if(!root.querySelector('.ct-meter-scene'))root.innerHTML=renderProgress(c.options);
  const art=continuumArt(root,q(root,'.ct-meter-scene'),progressFraction(c.data,c.options));
  const baseline=q<HTMLElement>(root,'.ct-meter-baseline i'),progress=q<HTMLProgressElement>(root,'[data-progress]');
  let previous=progressFraction(c.data,c.options);
  c.sync=reason=>{
    syncHeading(c);
    const o=c.options,[min,max]=progressRange(o),p=progressFraction(c.data,o);
    progress.max=max-min;progress.setAttribute('aria-label',o.label??'進捗');
    if(o.indeterminate)progress.removeAttribute('value');else progress.value=p*(max-min);
    root.dataset.indeterminate=String(!!o.indeterminate);
    root.dataset.complete=String(!o.indeterminate&&p>=1);
    // Semantic value and reading update immediately. Only decorative geometry eases.
    q(root,'[data-progress-reading]').innerHTML=o.indeterminate?'—':`${Math.round(p*100)}<small>%</small>`;
    q(root,'[data-ct-progress-state]').textContent=o.indeterminate?'進捗を計測中':p>=1?'100% に到達':p<=0?'待機中':'進行中';
    baseline.style.width=`${p*100}%`;art.pause(!!o.paused);
    art.move(o.indeterminate?.42:p,reason==='initial'||reason==='reset'||!!o.indeterminate);
    if(p!==previous&&!o.indeterminate)art.pulse();previous=p;
  };
  c.cleanup(()=>art.destroy());c.sync('initial');return c;
}
