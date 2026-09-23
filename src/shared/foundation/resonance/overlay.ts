import type { Core } from '../core.ts';
/** Top-layer placement stays outside the animation layer and uses the visual viewport. */
export function resonanceOverlay(c:Core,panel:HTMLElement,anchor:HTMLElement,preference:()=> 'top'|'bottom'=()=> 'bottom') {
 let opened=false;const life=new AbortController();panel.setAttribute('popover','manual');panel.hidden=true;
 function position(){if(!opened||c.dead)return;const r=anchor.getBoundingClientRect(),v=window.visualViewport,ox=v?.offsetLeft??0,oy=v?.offsetTop??0,vw=v?.width??innerWidth,vh=v?.height??innerHeight;
  const width=Math.min(Math.max(r.width,264),vw-24);panel.style.width=width+'px';
  const below=oy+vh-r.bottom-12,above=r.top-oy-12,natural=Math.min(panel.scrollHeight||280,360),top=preference()==='top'?above>=Math.min(natural,180)||above>below:below<Math.min(natural,180)&&above>below;
  const available=Math.max(40,top?above:below);panel.style.maxHeight=Math.min(420,available)+'px';panel.style.setProperty('--rs-panel-max',Math.min(420,available)+'px');
  const h=panel.getBoundingClientRect().height,left=Math.max(ox+12,Math.min(r.left,ox+vw-width-12));panel.style.left=left+'px';panel.style.top=Math.max(oy+12,Math.min(top?r.top-h-8:r.bottom+8,oy+vh-h-12))+'px';panel.dataset.side=top?'top':'bottom';
  panel.style.setProperty('--rs-anchor',Math.max(18,Math.min(width-18,r.left+r.width*.5-left))+'px');
 }
 function show(){if(c.dead||c.options.disabled)return;panel.hidden=false;opened=true;try{panel.showPopover();}catch{/* Native popover unavailable: use positioned fallback. */}position();}
 function hide(){if(!opened)return;opened=false;try{panel.hidePopover();}catch{}panel.hidden=true;}
 window.addEventListener('resize',position,{passive:true,signal:life.signal});document.addEventListener('scroll',position,{capture:true,passive:true,signal:life.signal});
 window.visualViewport?.addEventListener('resize',position,{signal:life.signal});window.visualViewport?.addEventListener('scroll',position,{signal:life.signal});
 const size=typeof ResizeObserver==='undefined'?null:new ResizeObserver(position);size?.observe(anchor);size?.observe(panel);
 c.cleanup(()=>{hide();size?.disconnect();life.abort();});return {show,hide,position,get open(){return opened;}};
}
