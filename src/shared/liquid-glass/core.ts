/** Liquid Glass-inspired web material. No business state or continuous render loop. */
export type GlassMaterial = 'clear' | 'regular' | 'solid';
export type GlassAppearance = 'dark' | 'light' | 'auto';
export type GlassOptics = 'standard' | 'refractive';
export interface GlassOptions {
  material?: GlassMaterial;
  appearance?: GlassAppearance;
  /** Opt-in Chromium enhancement; portable CSS remains the default. */
  optics?: GlassOptics;
  paused?: boolean;
}
export interface GlassController {
  updateGlass(options: GlassOptions): void;
  getGlass(): Required<GlassOptions>;
  setPaused(paused: boolean): void;
  refreshGlass(): void;
  destroy(): void;
}
export const DEFAULT_GLASS: Required<GlassOptions> = {
  material: 'regular', appearance: 'auto', optics: 'standard', paused: false
};
export function normalizeGlass(options: GlassOptions, previous = DEFAULT_GLASS): Required<GlassOptions> {
  return {
    material: ['clear','regular','solid'].includes(options.material ?? '') ? options.material! : previous.material,
    appearance: ['light','dark','auto'].includes(options.appearance ?? '') ? options.appearance! : previous.appearance,
    optics: ['standard','refractive'].includes(options.optics ?? '') ? options.optics! : previous.optics,
    paused: typeof options.paused === 'boolean' ? options.paused : previous.paused
  };
}

const svgNS = 'http://www.w3.org/2000/svg';
const surfacesQuery = '.lg-surface,.lg-tabs > .sop-choice-list > .sop-choice-marker,.lg-select > .sop-select-popup';
let sequence = 0;
/** A signed-distance lens map: untouched interior, rounded-edge-only displacement. */
export function lensVector(x:number, y:number, width:number, height:number, radius:number, rim:number): [number,number] {
  const px=x-width/2,py=y-height/2, r=Math.max(0,Math.min(radius,width/2,height/2));
  const distance=(x:number,y:number)=>{
    const qx=Math.abs(x)-(width/2-r),qy=Math.abs(y)-(height/2-r);
    return Math.hypot(Math.max(qx,0),Math.max(qy,0))+Math.min(Math.max(qx,qy),0)-r;
  };
  const inside=-distance(px,py);
  if (inside <= 0 || inside >= rim || rim <= 0) return [0,0];
  const gx=distance(px+.5,py)-distance(px-.5,py), gy=distance(px,py+.5)-distance(px,py-.5);
  const length=Math.hypot(gx,gy)||1, strength=Math.sin(Math.PI*inside/rim)*.43;
  return [gx/length*strength,gy/length*strength];
}
interface Lens {surface:HTMLElement;svg:SVGSVGElement; image:SVGFEImageElement; displacement:SVGFEDisplacementMapElement;id:string;size:string;}
/** Decorations alone are imperative; labels, inputs and React state are never rewritten. */
export function createGlass(root:HTMLElement, initial:GlassOptions = {}):GlassController {
  const abort=new AbortController(), reduced=matchMedia('(prefers-reduced-motion: reduce)'),
    transparency=matchMedia('(prefers-reduced-transparency: reduce)'), contrast=matchMedia('(forced-colors: active)');
  let options=normalizeGlass(initial), dead=false, frame=0, visible=true, pointer:{x:number;y:number}|null=null;
  let settleTimer:ReturnType<typeof setTimeout>|undefined;
  const lenses=new Map<HTMLElement,Lens>(), pulses=new Set<Animation>();
  const oldData=new Map(['lgMaterial','lgAppearance','lgOptics','lgPaused','lgReduced','lgPressed','lgMoving'].map(k=>[k,root.dataset[k]]));
  const previousStyles=new Map<string,string>();
  for(const k of ['--lg-light-x','--lg-light-y','--lg-choice-y','--lg-choice-h','--lg-choice-w']) previousStyles.set(k,root.style.getPropertyValue(k));
  // CSS.supports alone does not test SVG backdrop compositing. Refractive mode is opt-in AND engine-gated.
  const enhancedSupported=/Chrome|Chromium|Edg\//.test(navigator.userAgent)&&!(/iP(?:hone|ad|od)/.test(navigator.userAgent))&&CSS.supports('backdrop-filter','url("#sop-glass-probe")');
  const popup=root.querySelector<HTMLElement>(':scope > .sop-select-popup');
  const trigger=root.querySelector<HTMLElement>(':scope > .sop-select-trigger');
  let activeLens:HTMLSpanElement|null=null;
  if(popup){
    activeLens=document.createElement('span');activeLens.className='lg-active-lens';activeLens.setAttribute('aria-hidden','true');
    popup.prepend(activeLens);
  }
  function selectedGeometry(){
    if(!popup||popup.hidden||!activeLens)return;
    const option=popup.querySelector<HTMLElement>('[role="option"][data-active="true"]');
    activeLens.hidden=!option;
    if(option){
      popup.style.setProperty('--lg-choice-y',`${option.offsetTop}px`);
      popup.style.setProperty('--lg-choice-h',`${option.offsetHeight}px`);
      popup.style.setProperty('--lg-choice-w',`${option.offsetWidth}px`);
      popup.style.setProperty('--lg-choice-x',`${option.offsetLeft}px`);
    }
  }
  function refractiveEnabled(){return enhancedSupported&&options.optics==='refractive'&&options.material!=='solid'&&!transparency.matches&&!contrast.matches;}
  function updateMap(lens:Lens){
    // offset dimensions are not distorted by a pressed/animated transform.
    const width=lens.surface.offsetWidth,height=lens.surface.offsetHeight;
    if(width<1||height<1)return;
    const radius=Math.min(width/2,height/2,parseFloat(getComputedStyle(lens.surface).borderRadius)||24);
    const key=`${width}/${height}/${radius}`;if(key===lens.size)return;lens.size=key;
    // Canvas produces a displacement map only. It never reads or screenshots page content.
    const scale=Math.min(1,384/Math.max(width,height)),w=Math.max(1,Math.round(width*scale)),h=Math.max(1,Math.round(height*scale));
    const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
    const ctx=canvas.getContext('2d');if(!ctx)return;
    const pixels=ctx.createImageData(w,h),rim=Math.min(14,height*.25);
    for(let y=0;y<h;y++)for(let x=0;x<w;x++){
      const [vx,vy]=lensVector((x+.5)/scale,(y+.5)/scale,width,height,radius,rim),i=(y*w+x)*4;
      pixels.data[i]=Math.round(128+vx*255);pixels.data[i+1]=Math.round(128+vy*255);pixels.data[i+2]=128;pixels.data[i+3]=255;
    }
    ctx.putImageData(pixels,0,0);
    lens.image.setAttribute('href',canvas.toDataURL());
    lens.displacement.setAttribute('scale',String(Math.min(18,height*.3)));
  }
  function addLens(surface:HTMLElement){
    if(lenses.has(surface))return;
    const id=`sop-lg-${++sequence}-${Math.random().toString(36).slice(2,8)}`;
    const svg=document.createElementNS(svgNS,'svg');svg.dataset.lgResource='';svg.setAttribute('aria-hidden','true');
    svg.setAttribute('width','0');svg.setAttribute('height','0');svg.style.cssText='position:absolute;pointer-events:none;overflow:hidden';
    const defs=document.createElementNS(svgNS,'defs'),filter=document.createElementNS(svgNS,'filter');
    filter.id=id;filter.setAttribute('x','0%');filter.setAttribute('y','0%');filter.setAttribute('width','100%');filter.setAttribute('height','100%');filter.setAttribute('color-interpolation-filters','sRGB');
    const image=document.createElementNS(svgNS,'feImage');image.setAttribute('result','lens');image.setAttribute('width','100%');image.setAttribute('height','100%');image.setAttribute('preserveAspectRatio','none');
    const displacement=document.createElementNS(svgNS,'feDisplacementMap');displacement.setAttribute('in','SourceGraphic');displacement.setAttribute('in2','lens');displacement.setAttribute('xChannelSelector','R');displacement.setAttribute('yChannelSelector','G');
    filter.append(image,displacement);defs.append(filter);svg.append(defs);document.body.append(svg);
    const lens={surface,svg,image,displacement,id,size:''};lenses.set(surface,lens);updateMap(lens);
    surface.style.setProperty('--lg-refraction',`url("#${id}")`);surface.dataset.lgRefractive='true';observer?.observe(surface);
  }
  function removeLenses(){for(const lens of lenses.values()){observer?.unobserve(lens.surface);lens.surface.removeAttribute('data-lg-refractive');lens.surface.style.removeProperty('--lg-refraction');lens.svg.remove();}lenses.clear();}
  function refreshLenses(){
    if(!refractiveEnabled()){removeLenses();return;}
    root.querySelectorAll<HTMLElement>(surfacesQuery).forEach(surface=>{if(surface.closest('.lg-root')===root)addLens(surface);});
    for(const lens of lenses.values())updateMap(lens);
  }
  function render(){
    frame=0;if(dead)return;selectedGeometry();refreshLenses();
    if(pointer&&visible&&!document.hidden&&!options.paused&&!reduced.matches){
      const surface=popup&&!popup.hidden&&pointer.y>=popup.getBoundingClientRect().top?popup:root;
      const rect=surface.getBoundingClientRect();
      const x=Math.max(0,Math.min(100,100*(pointer.x-rect.left)/Math.max(1,rect.width))), y=Math.max(0,Math.min(100,100*(pointer.y-rect.top)/Math.max(1,rect.height)));
      surface.style.setProperty('--lg-light-x',`${x.toFixed(2)}%`);surface.style.setProperty('--lg-light-y',`${y.toFixed(2)}%`);
    }
  }
  function schedule(){if(!dead&&!frame&&visible&&!document.hidden)frame=requestAnimationFrame(render);}
  function cancelPulses(){for(const a of pulses)a.cancel();pulses.clear();}
  function movePulse(){
    if(options.paused||reduced.matches||!visible||document.hidden||dead)return;
    root.dataset.lgMoving='true';clearTimeout(settleTimer);settleTimer=setTimeout(()=>{if(!dead)root.dataset.lgMoving='false';},440);
  }
  function sync(){
    root.dataset.lgMaterial=options.material;root.dataset.lgAppearance=options.appearance;
    root.dataset.lgOptics=options.optics;root.dataset.lgPaused=String(options.paused);root.dataset.lgReduced=String(reduced.matches);
    if(options.paused||reduced.matches){cancelPulses();root.dataset.lgPressed='false';root.dataset.lgMoving='false';clearTimeout(settleTimer);}
    selectedGeometry();refreshLenses();
  }
  const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(schedule);observer?.observe(root);if(popup)observer?.observe(popup);
  const changes=new MutationObserver(records=>{
    if(records.some(r=>r.attributeName==='data-value'||r.attributeName==='aria-checked'))movePulse();
    if(records.some(r=>r.attributeName==='data-open')&&popup&&!popup.hidden&&!options.paused&&!reduced.matches){
      const a=popup.animate([{transform:`translateY(${popup.dataset.side==='top'?'5px':'-5px'}) scale(.94)`,opacity:.3},{transform:'translateY(0) scale(1)',opacity:1}],{duration:300,easing:'cubic-bezier(.2,.85,.15,1)'});
      pulses.add(a);a.finished.then(()=>pulses.delete(a),()=>pulses.delete(a));
    }
    schedule();
  });
  changes.observe(root,{attributes:true,attributeFilter:['data-value','data-open','aria-checked']});
  if(trigger)changes.observe(trigger,{attributes:true,attributeFilter:['aria-activedescendant']});
  root.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||event.isPrimary===false)return;pointer={x:event.clientX,y:event.clientY};schedule();},{passive:true,signal:abort.signal});
  root.addEventListener('pointerleave',()=>{pointer=null;root.style.setProperty('--lg-light-x','28%');root.style.setProperty('--lg-light-y','12%');},{signal:abort.signal});
  const release=()=>{root.dataset.lgPressed='false';};
  root.addEventListener('pointerdown',event=>{
    const target=event.target instanceof Element?event.target:null;
    if(!target||event.button!==0||target.closest(':disabled,[aria-disabled="true"]')||options.paused||reduced.matches)return;
    root.dataset.lgPressed='true';
  },{passive:true,signal:abort.signal});
  window.addEventListener('pointerup',release,{passive:true,signal:abort.signal});window.addEventListener('pointercancel',release,{passive:true,signal:abort.signal});
  root.addEventListener('focusin',()=>{if(!options.paused&&!reduced.matches){root.style.setProperty('--lg-light-x','50%');root.style.setProperty('--lg-light-y','0%');}},{signal:abort.signal});
  reduced.addEventListener('change',sync,{signal:abort.signal});transparency.addEventListener('change',sync,{signal:abort.signal});contrast.addEventListener('change',sync,{signal:abort.signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;cancelPulses();release();}else schedule();},{signal:abort.signal});
  const intersection=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;if(!visible){cancelAnimationFrame(frame);frame=0;cancelPulses();}else schedule();});intersection?.observe(root);
  sync();
  return {updateGlass(next){if(dead)return;options=normalizeGlass(next,options);sync();},getGlass:()=>({...options}),setPaused(paused){if(dead)return;options={...options,paused};sync();},refreshGlass:schedule,
    destroy(){if(dead)return;dead=true;abort.abort();changes.disconnect();observer?.disconnect();intersection?.disconnect();cancelAnimationFrame(frame);clearTimeout(settleTimer);cancelPulses();removeLenses();activeLens?.remove();
      for(const [k,v]of oldData){if(v===undefined)delete root.dataset[k];else root.dataset[k]=v;}
      for(const [k,v]of previousStyles){if(v)root.style.setProperty(k,v);else root.style.removeProperty(k);}
      if(popup)for(const k of ['--lg-choice-x','--lg-choice-y','--lg-choice-h','--lg-choice-w','--lg-light-x','--lg-light-y'])popup.style.removeProperty(k);
    }};
}
