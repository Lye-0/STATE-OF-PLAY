import type {Core,FoundationOptions} from '../core.ts';
import {q} from '../core.ts';
import {continuumArt} from './art.ts';
import {presentationSpring} from '../../presentation-spring.ts';
/** Calendar layout remains a real keyboard-operable grid. Only layers below it move. */
export function attachCalendarMotion(root:HTMLElement,panel:HTMLElement,c:Core) {
  const art=continuumArt(root,q(panel,'.ct-calendar-scene'),0);
  const sheet=q<HTMLElement>(panel,'.ct-calendar-sheet');
  const life=new AbortController();let opened=false,lastMonth='',paused=false;
  const spring=presentationSpring(root,{open:0,turn:0},v=>{
    panel.style.setProperty('--ct-opening',String(v.open));
    panel.style.setProperty('--ct-turn',String(v.turn));
  });
  let layerAnimations:Animation[]=[];
  function stop(){for(const a of layerAnimations)a.cancel();layerAnimations=[];}
  function turn(direction:number){if(!opened||paused||spring.reduced)return;stop();
    const material=root.dataset.variant;
    const frames:Keyframe[]=material==='folio'||material==='copper'?
      [{opacity:.7,transform:`perspective(500px) rotateY(${direction*52}deg)`},{opacity:0,transform:'perspective(500px) rotateY(0deg)'}]:
      material==='nixie'||material==='blueprint'?
      [{opacity:.5,transform:'scaleY(.08)',transformOrigin:'center top'},{opacity:0,transform:'scaleY(1)',transformOrigin:'center top'}]:
      [{opacity:.5,transform:`translateX(${direction*22}px) scale(.9)`},{opacity:0,transform:'translateX(0) scale(1)'}];
    layerAnimations=[sheet.animate(frames,{duration:480,easing:'cubic-bezier(.16,1,.3,1)'})];
    art.pulse();spring.pulse('turn',direction);
  }
  function layout(){
    const title=panel.querySelector('[data-month-title]')?.textContent??'';
    if(lastMonth&&title!==lastMonth)art.pulse();lastMonth=title;
    // The bands represent committed selection, not hover. Background never blocks a cell.
    const page=q<HTMLElement>(panel,'.ct-calendar-page'),grid=q<HTMLElement>(panel,'[data-calendar-grid]');
    for(const band of page.querySelectorAll('.ct-range-band'))band.remove();
    if(!opened)return;
    const pageBox=page.getBoundingClientRect();
    for(const row of grid.children){
      const cells=[...row.querySelectorAll<HTMLElement>('button[data-selected="true"],button[data-between="true"]')];
      if(!cells.length)continue;
      const first=cells[0].getBoundingClientRect(),last=cells[cells.length-1].getBoundingClientRect();
      const left=Math.min(first.left,last.left),right=Math.max(first.right,last.right);
      const band=document.createElement('span');band.className='ct-range-band';band.setAttribute('aria-hidden','true');
      band.style.cssText=`left:${left-pageBox.left}px;top:${first.top-pageBox.top+4}px;width:${right-left}px;height:${Math.max(0,first.height-8)}px`;
      page.append(band);
    }
  }
  const resize=typeof ResizeObserver==='undefined'?null:new ResizeObserver(()=>layout());resize?.observe(panel);
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change',()=>{if(media.matches)stop();},{signal:life.signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();},{signal:life.signal});
  return {
    sync(o:FoundationOptions,values:string[]){
      paused=!!o.paused;art.pause(paused);if(paused){stop();spring.snap();}
      const dates=values.filter(Boolean);
      const number=q(panel,'[data-ct-date-number]'),caption=q(panel,'[data-ct-date-caption]');
      if(o.mode==='time'){
        number.textContent=dates[0]||'—';caption.textContent=dates[0]?'選択時刻':'時刻を選択';
        const hour=Number(dates[0]?.slice(0,2));art.move(opened&&Number.isFinite(hour)?Math.max(.05,Math.min(1,hour/23)):.08,!opened);
        root.dataset.readonly=String(!!o.readOnly);panel.dataset.ctMaterial=root.dataset.variant;return;
      }
      number.textContent=dates.length>1?dates.map(d=>d.slice(8,10)).join(' — '):dates[0]?.slice(8,10)||'—';
      caption.textContent=dates.length>1?'選択期間':dates.length?'選択日':'日付を選択';
      const value=dates[0]?Math.max(.05,Math.min(1,Number(dates[0].slice(8,10))/31)):.3;
      art.move(opened?value:.08,!opened);root.dataset.readonly=String(!!o.readOnly);
      panel.dataset.ctMaterial=root.dataset.variant;
    },
    show(){opened=true;panel.dataset.ctOpen='true';spring.to({open:1},paused);art.move(.72,paused);layout();},
    hide(){opened=false;panel.dataset.ctOpen='false';spring.to({open:0},true);stop();art.move(0,true);},
    turn,layout,
    destroy(){stop();life.abort();resize?.disconnect();spring.destroy();art.destroy();for(const band of panel.querySelectorAll('.ct-range-band'))band.remove();}
  };
}
