import {createCore, heading, syncHeading, q, escape, uniqueId, makeOverlay, type FoundationConfig, type FoundationOptions, type FoundationController} from '../core.ts';

/** Readable links remain native; the route below them is decorative only. */
export function renderBreadcrumbs(o: FoundationOptions): string {
  return heading(o) + `<nav class="ff-breadcrumb wf-trail" aria-label="${escape(o.label ?? '現在の場所')}"><ol data-breadcrumbs></ol><svg class="wf-route" aria-hidden="true" focusable="false"><path class="wf-route-base"/><path class="wf-route-active" pathLength="100"/><circle r="2.5"/></svg></nav><div class="ff-floating ff-crumb-menu wf-crumb-menu" data-crumb-menu hidden></div>`;
}

export function mountBreadcrumbs(root: HTMLElement, config: FoundationConfig, options: FoundationOptions = {}): FoundationController {
  const c = createCore(root, config, options);
  const oldVariant = root.dataset.variant;
  root.classList.add('sop-wayfinder'); root.dataset.wfKind = 'breadcrumbs'; root.dataset.wfMaterial = config.variant;
  // Isolate the new design from old global material sheets without changing other parts.
  root.dataset.variant = `wayfinder-${config.variant}`;
  if (!root.querySelector('.wf-trail')) root.innerHTML = renderBreadcrumbs(c.options);
  const list = q<HTMLOListElement>(root, '[data-breadcrumbs]');
  const nav = q<HTMLElement>(root, '.wf-trail');
  const art = q<SVGSVGElement>(root, '.wf-route');
  const panel = q<HTMLElement>(root, '[data-crumb-menu]'); panel.id = uniqueId('sop-wayfinder');
  let overlay: ReturnType<typeof makeOverlay> | undefined, frame = 0, active = -1, signature = '';
  const request = () => { if (!frame && !c.dead) frame = requestAnimationFrame(draw); };
  function draw() {
    frame = 0; if (c.dead || !root.isConnected) return;
    const box = nav.getBoundingClientRect();
    if (!box.width || !box.height) return;
    const entries = Array.from(list.children) as HTMLElement[];
    const vertical = config.variant === 'botanical';
    const points = entries.map(el => { const r = el.getBoundingClientRect(); return {
      x: vertical ? r.left - box.left - 10 : r.left - box.left + r.width / 2,
      y: vertical ? r.top - box.top + r.height / 2 : r.bottom - box.top + 11
    }; });
    art.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
    if (!points.length) { art.style.opacity = '0'; return; }
    art.style.opacity = '1';
    let d = `M${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) { const a = points[i - 1], b = points[i];
      if (['blueprint','copper','mercury'].includes(config.variant)) d += `H${(a.x + b.x) / 2}V${b.y}H${b.x}`;
      else if (['aurora','velvet','botanical'].includes(config.variant)) d += vertical ? `C${a.x+15} ${a.y+18},${b.x-15} ${b.y-18},${b.x} ${b.y}` : `C${a.x+18} ${a.y-14},${b.x-18} ${b.y+14},${b.x} ${b.y}`;
      else d += `L${b.x} ${b.y}`;
    }
    for (const p of art.querySelectorAll('path')) p.setAttribute('d', d);
    const index = active >= 0 && active < points.length ? active : points.length - 1;
    const spot = points[index]; const dot = q<SVGCircleElement>(art,'circle'); dot.setAttribute('cx', String(spot.x)); dot.setAttribute('cy', String(spot.y));
    q<SVGPathElement>(art,'.wf-route-active').style.strokeDashoffset = String(100 - (points.length <= 1 ? 100 : index / (points.length - 1) * 100));
    entries.forEach((el,i) => { el.dataset.wfHover = String(i === index); el.style.setProperty('--wf-index', String(i)); });
  }
  const link = (index: number) => { const items = c.options.items ?? [], item = items[index];
    const label = escape(item.label); return index === items.length - 1 ? `<span aria-current="page">${label}</span>` : `<a data-crumb-key="${escape(item.value)}" ${item.disabled || c.options.disabled ? 'aria-disabled="true" tabindex="-1"' : `href="${escape(item.href ?? '#')}"`}>${label}</a>`;
  };
  c.sync = reason => {
    const restoreFocus = panel.contains(document.activeElement);
    if (reason === 'options' || reason === 'reset') { overlay?.hide(); active = -1; }
    syncHeading(c); nav.setAttribute('aria-label', c.options.label ?? '現在の場所');
    const items = c.options.items ?? [], next = JSON.stringify([items,c.options.disabled]);
    if (next !== signature) {
      const focusKey = (document.activeElement as HTMLElement | null)?.dataset.crumbKey;
      overlay?.destroy(); overlay = undefined; panel.hidden = true; active = -1;
      const collapsed = items.length > 4;
      list.innerHTML = items.map((_,i) => collapsed && i>0 && i<items.length-2 ? i===1 ? `<li><button type="button" class="ff-crumb-more" ${c.options.disabled ? 'disabled' : ''} data-crumb-more aria-controls="${panel.id}" aria-expanded="false" aria-label="途中の階層を表示">…</button></li>` : '' : `<li>${link(i)}</li>`).join('');
      panel.innerHTML = collapsed ? items.slice(1,-2).map((_,i)=>link(i+1)).join('') : '';
      signature = next;
      if (focusKey) Array.from(list.querySelectorAll<HTMLElement>('[data-crumb-key]')).find(e=>e.dataset.crumbKey===focusKey)?.focus({preventScroll:true});
    }
    if (restoreFocus) queueMicrotask(() => { if (!c.dead) (list.querySelector<HTMLElement>('[data-crumb-more]') ?? list.querySelector<HTMLElement>('a[href]'))?.focus({preventScroll:true}); });
    request();
  };
  const point = (event: Event) => { const li = (event.target as Element).closest<HTMLElement>('li'); if (li?.parentElement === list) { active = Array.from(list.children).indexOf(li); request(); } };
  c.on(list,'pointerover',point); c.on(list,'focusin',point);
  c.on(nav,'pointerleave',()=>{active=-1;request();});
  c.on(list,'click',e=>{ const b = (e.target as Element).closest<HTMLElement>('[data-crumb-more]');
    if (b && !c.options.disabled) { overlay ??= makeOverlay(c,panel,b); if (overlay.open) overlay.hide(); else {overlay.show();panel.querySelector<HTMLElement>('a[href]')?.focus();} }
  });
  c.on(root,'click',e=>{if((e.target as Element).closest('a[aria-disabled="true"]'))e.preventDefault();});
  c.on(document,'pointerdown',e=>{if(overlay?.open && !root.contains(e.target as Node))overlay.hide();},{capture:true});
  c.on(document,'keydown',e=>{const key=e as KeyboardEvent;if(key.key==='Escape' && overlay?.open){key.preventDefault();key.stopPropagation();overlay.hide();root.querySelector<HTMLElement>('[data-crumb-more]')?.focus();}},{capture:true});
  c.on(root,'focusout',()=>queueMicrotask(()=>{if(!c.dead && !root.contains(document.activeElement)){overlay?.hide();active=-1;request();}}));
  const observer = new ResizeObserver(request); observer.observe(nav); observer.observe(list);
  c.cleanup(()=>{cancelAnimationFrame(frame);observer.disconnect();overlay?.destroy();root.classList.remove('sop-wayfinder');delete root.dataset.wfKind;delete root.dataset.wfMaterial;if(oldVariant===undefined)delete root.dataset.variant;else root.dataset.variant=oldVariant;});
  c.sync('initial'); return c;
}
