import {createAccordionController, type AccordionOptions, type AccordionController} from './accordion-controller';

/** Presentation only: committed state, inert panels and keyboard handling belong to the base controller. */
export function attachUnfoldMotion(root: HTMLElement): () => void {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const life = new AbortController();
  type Moving = {el: HTMLElement; value: number; speed: number; target: number};
  const records = new Map<HTMLElement, Moving>();
  let frame = 0, last = 0, dead = false;
  const original = new Map<HTMLElement, string>();
  const own = (el: Element) => el.closest('[data-sop-accordion]') === root;
  function paint(r: Moving) {
    r.el.style.setProperty('--unfold', Math.max(0, Math.min(1, r.value)).toFixed(5));
    r.el.style.setProperty('--unfold-lift', r.value.toFixed(5));
    r.el.dataset.unfoldRest=String(r.value===r.target && r.speed===0);
  }
  function stop(snap: boolean) {
    cancelAnimationFrame(frame); frame = 0; last = 0;
    if (snap) for (const r of records.values()) {r.value = r.target; r.speed = 0; paint(r);}
  }
  function schedule() {
    if (!dead && !media.matches && !document.hidden && !frame) frame = requestAnimationFrame(tick);
  }
  function tick(time: number) {
    frame = 0;
    if (dead || !root.isConnected || document.hidden || media.matches) {stop(true); return;}
    const dt = last ? Math.min((time - last) / 1000, .04) : 1/60; last = time;
    let moving = false;
    for (const r of records.values()) {
      for (let remain = dt; remain > 0;) {
        const h = Math.min(remain, 1/180); remain -= h;
        r.speed += ((r.target-r.value)*210-r.speed*26)*h; r.value += r.speed*h;
      }
      if (Math.abs(r.value-r.target) < .0006 && Math.abs(r.speed) < .004) {r.value=r.target;r.speed=0;}
      else moving = true;
      paint(r);
    }
    if (moving) schedule(); else last = 0;
  }
  function collect() {
    if (dead) return;
    for (const [el] of records) if (!root.contains(el) || !own(el)) {restore(el);records.delete(el);}
    for (const el of root.querySelectorAll<HTMLElement>('.sop-accordion-item')) {
      if (!own(el)) continue;
      const target=el.dataset.open==='true'?1:0;
      const existing=records.get(el);
      if (!existing) {
        original.set(el, el.style.cssText);
        const r={el,value:target,speed:0,target}; records.set(el,r);paint(r);
      } else existing.target=target;
    }
    if (media.matches || document.hidden) stop(true); else schedule();
  }
  function restore(el: HTMLElement) {
    // Only remove the properties owned by this enhancement; preserve unrelated consumer styles.
    const before=document.createElement('div');before.style.cssText=original.get(el)??'';
    for(const key of ['--unfold','--unfold-lift','--unfold-x','--unfold-y']) {
      const value=before.style.getPropertyValue(key);
      if(value)el.style.setProperty(key,value);else el.style.removeProperty(key);
    }
    original.delete(el);
    delete el.dataset.unfoldRest;
  }
  root.addEventListener('pointermove', e => {
    if (media.matches || e.pointerType==='touch' || !(e.target instanceof Element)) return;
    const el=e.target.closest<HTMLElement>('.sop-accordion-item');
    if (!el || !own(el)) return;
    const b=el.getBoundingClientRect();
    el.style.setProperty('--unfold-x',`${(e.clientX-b.left)/Math.max(b.width,1)*100}%`);
    el.style.setProperty('--unfold-y',`${(e.clientY-b.top)/Math.max(b.height,1)*100}%`);
  }, {passive:true,signal:life.signal});
  const observer=new MutationObserver(collect);
  observer.observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:['data-open']});
  media.addEventListener('change',collect,{signal:life.signal});
  document.addEventListener('visibilitychange',collect,{signal:life.signal});
  collect();
  return () => {if(dead)return;dead=true;stop(false);life.abort();observer.disconnect();for(const [el] of records)restore(el);records.clear();};
}

/** Drop-in controller: the public API is unchanged. No extra state or model callbacks. */
export function createUnfoldAccordion(root:HTMLElement,options:AccordionOptions={}):AccordionController {
  const controller=createAccordionController(root,options),dispose=attachUnfoldMotion(root);
  return {...controller,destroy(){dispose();controller.destroy();}};
}
