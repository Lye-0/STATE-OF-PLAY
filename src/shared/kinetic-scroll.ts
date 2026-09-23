import {createScrollArea, type ScrollAreaOptions} from './scroll-area';

export type KineticRail = 'liquid'|'burn'|'magnetic'|'split'|'spectral'|'paper'|'shutter'|'wave'|'tunnel'|'fiber'|'mercury'|'living';
const clamp=(n:number,a:number,b:number)=>Math.max(a,Math.min(b,n));
/** A presentation layer only. Native overflow, thumb geometry, focus and input remain with scroll-area. */
export function createKineticScroll(root:HTMLElement, kind:KineticRail, options:ScrollAreaOptions={}) {
  const base=createScrollArea(root,options);
  const canvas=root.querySelector<HTMLCanvasElement>(':scope > .sop-scroll-rail > .sop-kinetic-canvas');
  const rail=root.querySelector<HTMLElement>(':scope > .sop-scroll-rail');
  const ctx=canvas?.getContext('2d');
  if(!canvas||!ctx||!rail)return base;
  const layer=canvas,c=ctx,track=rail;
  const life=new AbortController(),signal=life.signal;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),forced=matchMedia('(forced-colors: active)');
  let raf=0,dead=false,visible=true,lastTime=0,until=0,lastCenter=0,velocity=0,energy=0,across=0;
  let width=44,length=260,dpr=1,horizontal=false,center=30,thumb=44,progress=0,reverse=false;
  const history:number[]=Array(64).fill(0);
  const savedEnergy=root.style.getPropertyValue('--kin-energy');
  function measure(){
    horizontal=root.dataset.orientation==='horizontal';
    const w=track.clientWidth,h=track.clientHeight;
    width=horizontal?h:w;length=horizontal?w:h;
    dpr=Math.min(devicePixelRatio||1,2);
    if(layer.width!==Math.round(w*dpr)||layer.height!==Math.round(h*dpr)){
      layer.width=Math.max(1,Math.round(w*dpr));layer.height=Math.max(1,Math.round(h*dpr));
    }
    thumb=parseFloat(track.style.getPropertyValue('--sop-thumb-size'))||44;
    center=(parseFloat(track.style.getPropertyValue('--sop-thumb-offset'))||0)+thumb/2;
    progress=base.getProgress();reverse=horizontal&&getComputedStyle(root).direction==='rtl';
  }
  function line(points:number[],color:string,w=1){
    c.beginPath();c.moveTo(points[0],points[1]);for(let i=2;i<points.length;i+=2)c.lineTo(points[i],points[i+1]);
    c.strokeStyle=color;c.lineWidth=w;c.stroke();
  }
  function path(fn:(y:number)=>number,color:string,w=1){
    const points:number[]=[];for(let y=2;y<=length-2;y+=2)points.push(fn(y),y);line(points,color,w);
  }
  function rounded(x:number,y:number,w:number,h:number,r:number,fill:string|CanvasGradient,stroke?:string){
    c.beginPath();c.roundRect(x,y,w,Math.max(.1,h),r);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=.7;c.stroke();}
  }
  function gradient(a:string,b:string,e?:string){const g=c.createLinearGradient(width/2-10,0,width/2+10,0);g.addColorStop(0,a);g.addColorStop(.45,b);g.addColorStop(1,e??a);return g;}
  function render(dt:number,time:number){
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,layer.width/dpr,layer.height/dpr);
    if(horizontal){c.translate(0,width);c.rotate(-Math.PI/2);}
    const mid=width/2,sigma=Math.max(24,thumb*.75),near=(y:number)=>Math.exp(-(((y-center)/sigma)**2));
    const end=reverse?length*(1-progress):length*progress;
    c.lineCap='round';c.lineJoin='round';
    const chrome=gradient('#25343c','#e1e7e0','#39494d');
    const mint=gradient('#103938','#a5f5dd','#217f88');
    // Each rail uses its own topology; not a common skin with a changed hue.
    if(kind==='liquid'){
      rounded(mid-7,1,14,length-2,7,gradient('#11272b','#183d42','#0c2025'),'#addacf55');
      c.save();c.beginPath();c.roundRect(mid-5,3,10,length-6,5);c.clip();
      const y0=reverse?end:3,hh=reverse?length-end:end;
      rounded(mid-5,y0,10,Math.max(.2,hh),4,mint);
      for(let i=0;i<3;i++)path(y=>mid-3+i*3+Math.sin(y*.045+time*2+i)*energy*2,'#e5fff84a',.65);
      c.restore();
      for(const side of [-1,1])path(y=>mid+side*(6.5+near(y)*(2+energy*3)),'#c4f7e88c',.8);
      for(let i=0;i<3;i++){const y=center+(i-1)*sigma*1.05;c.beginPath();c.ellipse(mid+Math.sin(i*4+time)*energy*5,y,1.6,3.5+energy*3,0,0,Math.PI*2);c.fillStyle='#cffef555';c.fill();}
    }else if(kind==='burn'){
      rounded(mid-5,0,10,length,4,gradient('#191d20','#46403a','#202328'),'#aa8d6640');
      for(let i=0;i<history.length;i++){
        history[i]=Math.max(0,history[i]-dt*.65);
        const y=(i+.5)/history.length*length,passed=reverse?y>=end:y<=end;
        const heat=history[i];c.fillStyle=heat>.03?`rgba(255,${Math.round(130+heat*70)},100,${.2+heat*.65})`:passed?'#788fa27a':'#20252c';
        c.fillRect(mid-3,y-1,6,Math.max(1,length/64-2));
      }
      if(energy>.01){c.shadowColor='#efae72';c.shadowBlur=12*energy;line([mid-4,center,mid+4,center],'#fff0bc',1.6);c.shadowBlur=0;}
    }else if(kind==='magnetic'){
      line([mid,0,mid,length],'#7d9c8950',1);
      for(let i=0;i<7;i++)for(const side of [-1,1]){
        path(y=>mid+side*(2+i*.85+near(y)*(8+i*1.12+energy*1.8))+across*near(y)*2,`rgba(171,223,188,${.15+i*.065})`,i===0?1.2:.65);
      }
      for(let i=0;i<length;i+=16)line([mid-1,i,mid+1,i],'#addeb44a',1);
    }else if(kind==='split'){
      for(const side of [-1,1]){
        const fn=(y:number)=>mid+side*(2.2+near(y)*10.5);
        path(fn,'#152027',4.2);path(y=>fn(y)+side*.8,'#cddce5bb',1.4);path(y=>fn(y)-side*.8,'#506679',.7);
      }
      line([mid-2,1,mid+2,1],'#e0eaf0',1);line([mid-2,length-1,mid+2,length-1],'#738b99',1);
    }else if(kind==='spectral'){
      rounded(mid-4,0,8,length,4,gradient('#202630','#414453','#1c232b'),'#dde2ff33');
      for(let i=0;i<history.length;i++){
        history[i]=Math.max(0,history[i]-dt*.8);const y=i/64*length,heat=history[i];
        if(heat>.01){c.fillStyle=`hsla(${175+(i%13)*15},80%,76%,${heat*.8})`;c.shadowColor=c.fillStyle;c.shadowBlur=6*heat;c.fillRect(mid-4-heat*2,y,8+heat*4,length/64+1);}
      }c.shadowBlur=0;
      for(const side of [-1,1])path(y=>mid+side*(4+near(y)*6),'#d2d8fa33',.65);
    }else if(kind==='paper'){
      const rag=(y:number)=>Math.sin(y*1.71)*.7+Math.sin(y*.71)*.5;
      rounded(mid-6,0,12,length,1,'#b7a085');
      for(const side of [-1,1]){
        path(y=>mid+side*(3+((reverse?y>end:y<end)?1:0)+near(y)*6)+rag(y),'#ead9b8',5);
        path(y=>mid+side*(4+near(y)*7)+rag(y),'#fff0d266',.6);
      }
      for(let i=0;i<length;i+=7){const n=near(i);line([mid-2-n*7,i,mid+2+n*7,i+2],'#55413250',.6);}
    }else if(kind==='shutter'){
      rounded(mid-8,0,16,length,3,'#0b1013','#84968b44');
      for(let y=6;y<length-4;y+=8){
        const passed=reverse?y>=end:y<=end;const n=near(y),angle=(passed?.35:-.22)+n*.7;
        c.save();c.translate(mid,y);c.rotate(angle);rounded(-7,-2,14,4,1,chrome);line([-5,-1.6,5,-1.6],'#f5ffe9aa',.5);c.restore();
      }
    }else if(kind==='wave'){
      for(let i=0;i<4;i++)path(y=>mid+(i-1.5)*2.3+Math.sin((y-center)*.085-time*9+i*.8)*near(y)*(3+energy*7),['#92e3de','#628e9b','#a6cfff','#d0e9e3'][i],.85);
      for(const y of [2,length-2]){line([mid-5,y,mid+5,y],'#ccefe9',1);}
    }else if(kind==='tunnel'){
      rounded(mid-9,1,18,length-2,4,'#090e13','#8492a44a');
      for(let y=5;y<length;y+=12){const n=near(y),w=2+n*8;
        line([mid-w,y,mid-w*.42,y+5,mid+w*.42,y+5,mid+w,y],`rgba(156,183,226,${.18+n*.5})`,.8);
      }path(y=>mid-7-near(y)*1.5,'#697f9755',.8);path(y=>mid+7+near(y)*1.5,'#a6c9f755',.8);
    }else if(kind==='fiber'){
      for(let i=0;i<7;i++){
        const x=mid+(i-3)*1.75;
        path(y=>x+Math.sin(y*.02+i)*near(y)*2,['#5eb5bd','#789cbc','#8be0ce','#e2f8db','#b7a0ce','#81bfce','#739aaa'][i],.85);
        if(energy>.025){const y=(center+(time*90+i*length/7))%length;c.beginPath();c.ellipse(x,y,1.1,4.2,0,0,Math.PI*2);c.fillStyle='#d5fff4';c.shadowColor='#8bf3e5';c.shadowBlur=5;c.fill();c.shadowBlur=0;}
      }
    }else if(kind==='mercury'){
      rounded(mid-4,0,8,length,4,'#151b20','#6f818648');
      for(const side of [-1,1]){path(y=>mid+side*(2+near(y)*(6+energy*3)),'#d9e1d7',1.8);path(y=>mid+side*(3.3+near(y)*(6+energy*2)),'#344849',.7);}
      for(let i=0;i<3;i++){c.beginPath();c.ellipse(mid+Math.sin(i*3)*4,center+Math.sign(velocity||1)*(thumb*.5+7+i*7),1.6-i*.3,2.5+energy*2,0,0,Math.PI*2);c.fillStyle=`rgba(224,240,231,${energy*.6})`;c.fill();}
    }else{
      path(y=>mid+Math.sin(y*.014)*2,'#83bea09e',1.4);
      for(let y=8;y<length-5;y+=12){const n=near(y),spread=3+n*(7+energy*3);for(const side of [-1,1]){
        c.beginPath();c.moveTo(mid,y+5);c.quadraticCurveTo(mid+side*spread,y+3,mid+side*spread,y-4);c.quadraticCurveTo(mid+side*2,y-2,mid,y+5);c.fillStyle=`rgba(136,207,173,${.10+n*.27})`;c.fill();c.strokeStyle='#c0dfac50';c.lineWidth=.6;c.stroke();}}
    }
  }
  function tick(time:number){
    raf=0;if(dead||!visible||document.hidden)return;
    measure();const dt=lastTime?Math.min(.04,(time-lastTime)/1000):1/60;lastTime=time;
    velocity+=(clamp((center-lastCenter)/Math.max(dt,.008)/100,-9,9)-velocity)*.32;lastCenter=center;
    const active=root.dataset.dragging==='true';
    energy+=(Math.min(1,Math.abs(velocity)*.6+(active?.3:0))-energy)*.15;
    if(reduced.matches){energy=0;velocity=0;history.fill(0);}
    root.style.setProperty('--kin-energy',energy.toFixed(3));
    render(dt,time/1000);
    if(!reduced.matches&&!forced.matches&&(time<until||energy>.008))raf=requestAnimationFrame(tick);else{lastTime=0;root.style.setProperty('--kin-energy','0');}
  }
  function wake(){
    if(dead)return;const old=center;measure();const delta=Math.abs(center-old);
    if(delta>0.1){const lo=Math.floor(Math.min(center,old)/length*64),hi=Math.ceil(Math.max(center,old)/length*64);for(let i=clamp(lo,0,63);i<=clamp(hi,0,63);i++)history[i]=1;}
    until=performance.now()+((kind==='burn'||kind==='spectral')?1600:700);
    if(!raf&&visible&&!document.hidden)raf=requestAnimationFrame(tick);
  }
  root.addEventListener('sop:scroll',e=>{if(e.target===root)wake();},{signal});
  track.addEventListener('pointermove',e=>{const box=track.getBoundingClientRect();across=clamp(((horizontal?e.clientY-box.top:e.clientX-box.left)/Math.max(1,width)-.5)*2,-1,1);wake();},{passive:true,signal});
  track.addEventListener('pointerdown',wake,{signal});track.addEventListener('pointerup',wake,{signal});track.addEventListener('pointerleave',()=>{across=0;wake();},{signal});
  const ro=typeof ResizeObserver==='undefined'?null:new ResizeObserver(wake);ro?.observe(track);
  const io=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;if(visible)wake();else{cancelAnimationFrame(raf);raf=0;lastTime=0;}});io?.observe(root);
  reduced.addEventListener('change',wake,{signal});forced.addEventListener('change',wake,{signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;lastTime=0;}else wake();},{signal});
  measure();lastCenter=center;wake();
  return {...base,refresh(){base.refresh();wake();},resize(){base.resize();wake();},setOrientation(next:Parameters<typeof base.setOrientation>[0]){base.setOrientation(next);measure();lastCenter=center;wake();},destroy(){
    if(dead)return;dead=true;life.abort();ro?.disconnect();io?.disconnect();cancelAnimationFrame(raf);base.destroy();
    if(savedEnergy)root.style.setProperty('--kin-energy',savedEnergy);else root.style.removeProperty('--kin-energy');
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,layer.width,layer.height);
  }};
}
