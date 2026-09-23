/** Event-driven presentation channels. Never controls an input's committed value. */
export function advancePresentation(value:number, velocity:number, target:number, dt:number):[number,number] {
  for(let left=Math.min(.05,Math.max(0,dt));left>0;) {
    const h=Math.min(left,1/180);left-=h;
    velocity+=((target-value)*240-velocity*28)*h; value+=velocity*h;
  }
  return Math.abs(value-target)<.0008&&Math.abs(velocity)<.006?[target,0]:[value,velocity];
}
export function presentationSpring<T extends Record<string,number>>(root:HTMLElement, initial:T, paint:(values:T, velocities:T)=>void) {
  const values={...initial},targets={...initial},velocities=Object.fromEntries(Object.keys(initial).map(k=>[k,0])) as T;
  const media=matchMedia('(prefers-reduced-motion: reduce)'),life=new AbortController();
  let frame=0,last=0,dead=false,visible=true;
  const keys=Object.keys(initial) as (keyof T)[];
  function draw(){paint(values,velocities);}
  function snap(){cancelAnimationFrame(frame);frame=0;last=0;for(const k of keys){values[k]=targets[k];velocities[k]=0 as T[keyof T];}draw();}
  function schedule(){if(!dead&&!frame&&!media.matches&&!document.hidden&&visible)frame=requestAnimationFrame(tick);}
  function tick(t:number){frame=0;if(dead||!root.isConnected||document.hidden||media.matches||!visible){if(!dead)snap();return;}const dt=last?Math.min(.05,(t-last)/1000):1/60;last=t;let active=false;
    for(const k of keys){const [x,v]=advancePresentation(values[k],velocities[k],targets[k],dt);values[k]=x as T[keyof T];velocities[k]=v as T[keyof T];if(x!==targets[k]||v!==0)active=true;}
    draw();if(active)schedule();else last=0;
  }
  const observer=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;if(!visible)snap();});observer?.observe(root);
  media.addEventListener('change',snap,{signal:life.signal});document.addEventListener('visibilitychange',()=>{if(document.hidden)snap();},{signal:life.signal});
  return {
    values, get reduced(){return media.matches;},
    to(next:Partial<T>,immediate=false){if(dead)return;let changed=false;for(const k of keys)if(typeof next[k]==='number'&&Number.isFinite(next[k])&&targets[k]!==next[k]){targets[k]=next[k] as T[keyof T];changed=true;}if(immediate||media.matches||document.hidden||!visible)snap();else if(changed)schedule();},
    pulse(key:keyof T,amount=1){if(dead||media.matches||document.hidden||!visible)return;values[key]=amount as T[keyof T];targets[key]=0 as T[keyof T];velocities[key]=0 as T[keyof T];draw();schedule();},
    snap,destroy(){dead=true;cancelAnimationFrame(frame);frame=0;observer?.disconnect();life.abort();}
  };
}
