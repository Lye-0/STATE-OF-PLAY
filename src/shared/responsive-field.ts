import {createTextField,type TextFieldOptions,type TextFieldController} from './text-field';

/** Animate the material, not the editable control. No input value is read, stored or rewritten here. */
export function attachFieldMotion(root:HTMLElement):()=>void {
  const shell=root.querySelector<HTMLElement>('.sop-field-shell');
  const field=root.querySelector<HTMLInputElement|HTMLTextAreaElement>('.sop-field-control');
  if(!shell||!field)return()=>{};
  const surface=shell,control=field,media=matchMedia('(prefers-reduced-motion: reduce)'),life=new AbortController();
  let dead=false,raf=0,last=0,energy=0,focus=0,target=0,composing=false;
  const owned=['--field-focus','--field-energy','--field-px','--field-py'];
  const previous=new Map(owned.map(k=>[k,root.style.getPropertyValue(k)]));
  const interactive=()=>!control.disabled&&!control.readOnly;
  function paint(){root.style.setProperty('--field-focus',focus.toFixed(4));root.style.setProperty('--field-energy',energy.toFixed(4));}
  function halt(snap=false){cancelAnimationFrame(raf);raf=0;last=0;if(snap){focus=target;energy=0;paint();}}
  function request(){if(!dead&&!raf&&!media.matches&&!document.hidden)raf=requestAnimationFrame(tick);}
  function tick(t:number){raf=0;if(dead||!root.isConnected||document.hidden||media.matches){halt(true);return;}
    const dt=last?Math.min((t-last)/1000,.045):1/60;last=t;
    focus+=(target-focus)*(1-Math.exp(-10*dt));energy*=Math.exp(-5.6*dt);
    if(Math.abs(target-focus)<.0008)focus=target;if(energy<.0008)energy=0;paint();
    if(focus!==target||energy>0)request();else last=0;
  }
  function sync(){target=interactive()&&document.activeElement===control?1:0;
    if(media.matches||document.hidden){halt(true);}else request();}
  function pulse(){if(!interactive()||composing||media.matches||document.hidden)return;energy=Math.min(1,energy+.56);request();}
  control.addEventListener('focus',sync,{signal:life.signal});
  control.addEventListener('blur',()=>{energy=0;sync();},{signal:life.signal});
  control.addEventListener('compositionstart',()=>{composing=true;energy=0;},{signal:life.signal});
  control.addEventListener('compositionend',()=>{composing=false;pulse();},{signal:life.signal});
  control.addEventListener('input',e=>{if((e as InputEvent).isComposing)return;pulse();},{signal:life.signal});
  surface.addEventListener('pointermove',e=>{if(!interactive()||media.matches||e.pointerType==='touch')return;const b=surface.getBoundingClientRect();root.style.setProperty('--field-px',`${Math.max(0,Math.min(100,(e.clientX-b.left)/Math.max(1,b.width)*100))}%`);root.style.setProperty('--field-py',`${Math.max(0,Math.min(100,(e.clientY-b.top)/Math.max(1,b.height)*100))}%`);},{passive:true,signal:life.signal});
  const observer=new MutationObserver(sync);observer.observe(control,{attributes:true,attributeFilter:['disabled','readonly']});
  media.addEventListener('change',sync,{signal:life.signal});document.addEventListener('visibilitychange',sync,{signal:life.signal});
  focus=target=interactive()&&document.activeElement===control?1:0;paint();
  return()=>{if(dead)return;dead=true;halt();life.abort();observer.disconnect();for(const k of owned){const v=previous.get(k);if(v)root.style.setProperty(k,v);else root.style.removeProperty(k);}};
}
export function createResponsiveTextField(root:HTMLElement,options:TextFieldOptions={}):TextFieldController{
  const controller=createTextField(root,options),dispose=attachFieldMotion(root);
  return{...controller,destroy(){dispose();controller.destroy();}};
}
