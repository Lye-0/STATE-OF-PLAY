import {createCore,heading,syncHeading,q,escape,type FoundationConfig,type FoundationOptions,type FoundationController} from '../core.ts';
export const LOADER_VARIANTS=['orbital-loom','folding-cube','liquid-merge','paper-carousel','eclipse-arc','magnetic-pendulum','helix-thread','iris-bloom','arc-spinner','three-dots','soft-pulse','line-sweep','tick-spinner','mini-bars','orbit-dot','corner-trace'] as const;
export type LoaderVariant=typeof LOADER_VARIANTS[number];
const spans=(count:number,klass='ld-piece')=>Array.from({length:count},(_,i)=>`<i class="${klass}" style="--i:${i}"></i>`).join('');
export function loaderArtwork(variant:LoaderVariant):string {
  switch(variant){
    case 'orbital-loom':return `<div class="ld-loom">${spans(3,'ld-hoop')}</div><i class="ld-pearl"></i>`;
    case 'folding-cube':return `<div class="ld-cube">${spans(6,'ld-cube-face')}</div>`;
    case 'liquid-merge':return `<div class="ld-pool">${spans(2,'ld-droplet')}<span class="ld-pool-line"></span></div>`;
    case 'paper-carousel':return `<div class="ld-pages">${spans(7,'ld-page')}</div>`;
    case 'eclipse-arc':return `<div class="ld-eclipse"><i class="ld-star"></i><i class="ld-darkmoon"></i><i class="ld-satellite"></i></div>`;
    case 'magnetic-pendulum':return `<div class="ld-pendulum">${spans(5,'ld-string')}</div>`;
    case 'helix-thread':return `<div class="ld-helix">${spans(14,'ld-pair')}</div>`;
    case 'iris-bloom':return `<div class="ld-bloom">${spans(10,'ld-petal')}<i class="ld-pollen"></i></div>`;
    case 'arc-spinner':return `<svg class="ld-arc" viewBox="0 0 32 32"><circle class="ld-ring-base" cx="16" cy="16" r="12"/><circle class="ld-ring-active" cx="16" cy="16" r="12"/></svg>`;
    case 'three-dots':return `<div class="ld-dots">${spans(3,'ld-dot')}</div>`;
    case 'soft-pulse':return `<div class="ld-pulse"><i></i><i></i></div>`;
    case 'line-sweep':return '<div class="ld-line"><i></i></div>';
    case 'tick-spinner':return `<div class="ld-ticks">${spans(10,'ld-tick')}</div>`;
    case 'mini-bars':return `<div class="ld-bars">${spans(4,'ld-bar')}</div>`;
    case 'orbit-dot':return '<div class="ld-orbit"><i></i></div>';
    case 'corner-trace':return '<svg class="ld-corner" viewBox="0 0 32 32"><rect class="ld-ring-base" x="6" y="6" width="20" height="20" rx="4"/><rect class="ld-ring-active" x="6" y="6" width="20" height="20" rx="4" pathLength="100"/></svg>';
  }
}
export function renderLoader(o:FoundationOptions&{variant?:string}):string {
  const variant=LOADER_VARIANTS.includes(o.variant as LoaderVariant)?o.variant as LoaderVariant:'arc-spinner';
  return heading(o)+`<div class="ct-loader-stage" aria-hidden="true"><div class="ct-loader-body" data-loader-art="${variant}">${loaderArtwork(variant)}</div></div><span class="ct-loader-status" data-loader-label role="status" aria-live="polite">${escape(o.content??'読み込み中…')}</span>`;
}
/** CSS owns continuous motion; visibility observers pause it, with no RAF or timer loop. */
export function mountLoader(root:HTMLElement,config:FoundationConfig,options:FoundationOptions={}):FoundationController {
  const c=createCore(root,config,options);root.classList.add('sop-motion-loader');
  if(!root.querySelector('[data-loader-art]'))root.innerHTML=renderLoader({...config,...options});
  const media=matchMedia('(prefers-reduced-motion: reduce)');let visible=true;
  const setMotion=()=>root.dataset.motionRunning=String(!c.dead&&visible&&!document.hidden&&!c.options.paused&&!media.matches);
  const observer=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;setMotion();});observer?.observe(root);
  c.on(document,'visibilitychange',setMotion);c.on(media,'change',setMotion);
  c.sync=()=>{syncHeading(c);const text=c.options.content??'読み込み中…';const label=q(root,'[data-loader-label]');if(label.textContent!==text)label.textContent=text;setMotion();};
  c.cleanup(()=>{observer?.disconnect();root.dataset.motionRunning='false';});c.sync('initial');return c;
}
