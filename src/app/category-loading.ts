/** Gallery-only Orbital Loom loading state. The distributable part remains in src/parts/loaders/. */
export function showCategoryLoading(grid:HTMLElement):()=>void {
 const message=document.createElement('div');
 message.className='collection-message collection-loading';
 message.dataset.categoryLoading='';
 message.innerHTML='<div class="sop-foundation sop-motion-loader sop-orbital-loom-loader" data-foundation="loaders" data-variant="orbital-loom"><div class="ff-heading"><span data-ff-label>Orbital Loom</span><span class="ff-eyebrow" aria-hidden="true">STATE / PLAY</span></div><p class="ff-description" data-ff-description></p><div class="ct-loader-stage" aria-hidden="true"><div class="ct-loader-body" data-loader-art="orbital-loom"><div class="ld-loom"><i class="ld-hoop" style="--i:0"></i><i class="ld-hoop" style="--i:1"></i><i class="ld-hoop" style="--i:2"></i></div><i class="ld-pearl"></i></div></div><span class="ct-loader-status" data-loader-label role="status" aria-live="polite">パーツを読み込んでいます…</span></div>';
 grid.replaceChildren(message);
 const loader=message.firstElementChild as HTMLElement;
 let onScreen=true;
 const sync=()=>{loader.dataset.motionRunning=String(onScreen&&!document.hidden);};
 const observer=typeof IntersectionObserver==='undefined'?undefined:new IntersectionObserver(entries=>{onScreen=entries[0]?.isIntersecting??false;sync();});
 observer?.observe(message);
 document.addEventListener('visibilitychange',sync);
 sync();
 return ()=>{observer?.disconnect();document.removeEventListener('visibilitychange',sync);};
}
