/** Material deformation only. This layer never owns a value, label or focus. */
import { presentationSpring } from '../../presentation-spring.ts';
import { uniqueId } from '../core.ts';
export const MATERIALS = ['aurora','mercury','obsidian','prism','folio','blueprint','botanical','copper','nixie','ceramic','velvet','tide','aperture','transit','contour','relay'] as const;
export type Material = typeof MATERIALS[number];
export function materialOf(value:string):Material { return MATERIALS.includes(value as Material)?value as Material:'aurora'; }
const NS='http://www.w3.org/2000/svg';
const bounded=(v:number)=>Math.max(0,Math.min(1,v));
/** A fixed, decorative path pool; no canvas, textures, fonts, network or perpetual loop. */
export function createMaterialScene(host:HTMLElement,variant:string,initial=0) {
 const material=materialOf(variant),el=document.createElement('span');el.className='rs-scene';el.setAttribute('aria-hidden','true');
 const id=uniqueId('rs-glass'),svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 400 180');svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('focusable','false');
 svg.innerHTML=`<defs><linearGradient id="${id}-wash" x1="0" y1="0" x2="1" y2="1"><stop stop-color="var(--rs-light)" stop-opacity=".1"/><stop offset=".48" stop-color="var(--rs-accent)" stop-opacity=".44"/><stop offset="1" stop-color="var(--rs-second)" stop-opacity=".16"/></linearGradient><linearGradient id="${id}-foil" x1="0" y1="0" x2="0" y2="1"><stop stop-color="var(--rs-light)" stop-opacity=".62"/><stop offset=".16" stop-color="var(--rs-accent)" stop-opacity=".32"/><stop offset=".5" stop-color="var(--rs-base)"/><stop offset=".85" stop-color="var(--rs-second)" stop-opacity=".26"/><stop offset="1" stop-color="var(--rs-light)" stop-opacity=".76"/></linearGradient><linearGradient id="${id}-fade" x1="0" y1="0" x2="1" y2="0"><stop stop-color="var(--rs-accent)" stop-opacity="0"/><stop offset=".5" stop-color="var(--rs-light)" stop-opacity=".8"/><stop offset="1" stop-color="var(--rs-accent)" stop-opacity="0"/></linearGradient></defs>`;
 const paths=Array.from({length:28},()=>{const path=document.createElementNS(NS,'path');path.setAttribute('vector-effect','non-scaling-stroke');path.setAttribute('stroke-linejoin','round');path.setAttribute('stroke-linecap','round');svg.append(path);return path;});el.append(svg);host.prepend(el);
 let dead=false;
 function paint(p0:number,k:number,x:number){const p=bounded(p0),pulse=Math.max(0,k),a=p+.16*pulse;let used=0;
  function path(d:string,fill='none',stroke='none',alpha=1,width=1){const n=paths[used++];if(!n)return;n.setAttribute('d',d);n.setAttribute('fill',fill.startsWith('$')?`url(#${id}-${fill.slice(1)})`:fill);n.setAttribute('stroke',stroke.startsWith('$')?`url(#${id}-${stroke.slice(1)})`:stroke);n.setAttribute('opacity',String(Math.max(0,Math.min(1,alpha))));n.setAttribute('stroke-width',String(width));}
  const accent='var(--rs-accent)',light='var(--rs-light)',second='var(--rs-second)';
  switch(material){
   case 'aurora': {
    const bend=90*a+10*x;
    for(let i=0;i<4;i++){const y=182-i*8;path(`M -35 ${y} C 55 ${y-bend-54} 185 ${y+bend*.6} 235 ${y-bend*.7} S 360 ${y-bend-62} 450 ${y-bend-9} L 450 210 L -35 210Z`,'$wash',light,.16+i*.1, .55);}
    path(`M 20 ${164-21*a} C 116 ${74+35*a} 266 ${220-28*a} 392 ${120-62*a}`,'none','$fade',.8,1.3);break;
   }
   case 'mercury': {
    for(let i=0;i<5;i++){const y=169-i*5*(.4+.6*a),o=i*2;path(`M ${-20+o} ${y} Q ${80+130*a} ${y-32*a} ${245+o} ${y-4*a} T 425 ${y-28*a} L 425 186 L -20 186Z`,'$foil',light,.23+i*.07,.6);}
    path(`M ${25+290*p} -10 Q ${-35+360*p} 85 ${55+310*p} 195`,'none',light,.08+.15*pulse,13);break;
   }
   case 'obsidian': {
    const gap=5+22*a;
    path(`M 0 0 L 188 0 174 39 ${205-gap} 70 ${188-gap} 104 176 128 190 180 H0Z`,'var(--rs-base)',second,.86,.7);
    path(`M 400 0 H ${190+gap} L ${187+gap} 39 ${217+gap} 70 ${200+gap} 104 ${188+gap} 128 ${202+gap} 180 H400Z`,'var(--rs-base)',second,.86,.7);
    path(`M190 0 180 39 208 70 191 104 179 128 196 180`,'none',accent,.12+.74*a,1.4);break;
   }
   case 'prism': {
    const f=18+30*a;
    path(`M0 0 92 0 ${f} 49 0 140Z`,'$foil',light,.45,.6);
    path(`M400 180 H265 L ${394-f} 113 400 26Z`,'$wash',light,.75,.7);
    path(`M0 180 V147 L${95+f} 180Z`,second,light,.32,.5);
    path(`M400 0 V38 L${330-f} 0Z`,accent,light,.34,.5);
    for(let i=0;i<5;i++)path(`M ${400-i*3} 180 L ${260+i*17-25*a} ${102+i*9} 410 ${-30+i*11}`,'none',i%2?accent:second,.07+.2*p, .8);break;
   }
   case 'folio': {
    const flap=12+23*a;
    for(let i=0;i<5;i++){const t=174-i*(2+3*a);path(`M ${8+i*2} ${t} Q200 ${t-3*a} ${384-i*3} ${t-1} L ${392-i*3} 184 H8Z`,'$foil',second,.1+i*.13,.45);}
    path(`M400 0 H${400-flap*1.45} L400 ${flap}Z`,'$foil',second,.72,.8);
    path('M 17 8 V160','none',second,.28,1.1);break;
   }
   case 'blueprint': {
    for(let i=0;i<8;i++)path(`M${i*55} 0V180 M0 ${i*28}H400`,'none',accent,.075,.5);
    const b=18+12*a;path(`M${b+30} 9 H${b} V${b+24} M${400-b-30} 171 H${400-b} V${171-b-24}`,'none',light,.48,1);
    path(`M${-45+490*p} 0V180`,'none',accent,.4+.2*pulse,1.3);
    path(`M 28 160 H${60+290*a}`,'none',light,.32,.8);break;
   }
   case 'botanical': {
    for(let side=0;side<2;side++){const x0=side?392:8,s=side?-1:1;
     path(`M${x0} 176 Q${x0+s*(20+24*a)} 90 ${x0+s*4} 6`,'none',accent,.28,.8);
     for(let i=0;i<7;i++){const y=25+i*23,w=12+22*a;path(`M${x0+s*9} ${y+14} Q${x0+s*w} ${y-18} ${x0+s*(w+8)} ${y-12} Q${x0+s*w} ${y+17} ${x0+s*9} ${y+14}`,'$wash',accent,.12+i*.032,.6);}
    }break;
   }
   case 'copper': {
    const pos=14+350*p;
    path(`M0 5 Q${pos} ${30+25*a} 400 4 V0H0Z`,'$foil',light,.76,.6);
    path(`M0 174 Q${400-pos} ${134-24*a} 400 176 V180H0Z`,'$foil',light,.73,.7);
    for(let i=0;i<8;i++)path(`M0 ${i*2+160} Q200 ${i*2+161-15*a} 400 ${i*2+162}`,'none',accent,.1,.4);break;
   }
   case 'nixie': {
    for(let i=0;i<14;i++){const t=10+i*29,lit=p>(i/15);path(`M${t} 173 V${153-11*(lit?1:0)} Q${t+6} ${145-11*(lit?1:0)} ${t+12} ${153-11*(lit?1:0)} V173`,'none',lit?light:second,lit?.83:.16,1.2);}
    path('M 16 9 H384','none','$fade',.2+.35*pulse,1.3);break;
   }
   case 'ceramic': {
    const f=5+11*a;
    path(`M0 ${f} Q200 ${26+10*a} 400 ${f} V0H0Z`,'$foil',light,.7,.7);
    path(`M0 ${180-f} Q200 ${150-12*a} 400 ${180-f} V180H0Z`,'$foil',second,.5,.6);
    path(`M15 12 Q${45+40*a} 90 15 169`,'none',light,.44,1.6);break;
   }
   case 'velvet': {
    for(let i=0;i<10;i++){const l=i<5,x0=l?i*9:400-(i-5)*9,s=l?1:-1;path(`M${x0} -8 Q${x0+s*(28+18*a)} 90 ${x0} 188 L${x0+s*9} 188 Q${x0+s*(40+22*a)} 90 ${x0+s*9} -8Z`,'$foil',second,.16+(.35*(i%5)/5),.6);}break;
   }
   case 'tide': {
    for(let i=0;i<5;i++){const y=179-i*6;path(`M-30 ${y} Q ${85+40*a} ${y-12-24*a} 210 ${y-7-5*a} T430 ${y-18-21*a} V200H-30Z`,'$wash',light,.2+i*.055,.65);}
    break;
   }
   case 'aperture': {
    const r=13+65*a,cx=345,cy=90;
    for(let i=0;i<8;i++){const t=i*Math.PI/4,a0=t+.1*a,a1=t+.79+.1*a,r2=r+30;path(`M${cx+Math.cos(a0)*r} ${cy+Math.sin(a0)*r} L${cx+Math.cos(a1)*r2} ${cy+Math.sin(a1)*r2} ${cx+Math.cos(a1+.35)*r2} ${cy+Math.sin(a1+.35)*r2} ${cx+Math.cos(a1)*r} ${cy+Math.sin(a1)*r}Z`,'$foil',light,.22,.7);}
    break;
   }
   case 'transit': {
    const y=165-8*a;
    for(let i=0;i<18;i++)path(`M${13+i*23} ${y}h8`,'none',second,.38,.7);
    path(`M 5 5 H${48+290*p} M5 175 H${48+290*p}`,'none',accent,.45,2.8);
    for(let i=0;i<5;i++)path(`M${380-i*4} 22V55`,'none',accent,.2+i*.06,i%2?1:2);break;
   }
   case 'contour': {
    for(let i=0;i<10;i++){const k=i*5;path(`M${250+k-50*a} -10 C${390-k} 30 ${185+k} 97 ${295+k-45*a} 193`,'none',i%3?accent:light,.18+i*.022,.8);}
    break;
   }
   case 'relay': {
    for(let i=0;i<14;i++){const x=6+i*29,f=bounded(p*2-i/16);path(`M${x} ${163-12*f} l22 ${8*f} v${12-7*f} l-22 ${-8*f}Z`,'$foil',light,.48,.65);}break;
   }
  }
  for(let i=used;i<paths.length;i++)paths[i].setAttribute('d','');
  host.style.setProperty('--rs-open',String(p));host.style.setProperty('--rs-pulse',String(pulse));
 }
 const spring=presentationSpring(host,{p:initial,k:0,x:.5},v=>paint(v.p,v.k,v.x));spring.snap();
 return {el,set(value:number,immediate=false){spring.to({p:bounded(value)},immediate);},pulse(){spring.pulse('k',1);},pointer(x:number){spring.to({x:bounded(x)});},destroy(){if(dead)return;dead=true;spring.destroy();el.remove();host.style.removeProperty('--rs-open');host.style.removeProperty('--rs-pulse');}};
}
/** Animate decoration, not source content. Superseded or reduced motion effects are cancelled. */
export function revealSurface(surface:HTMLElement,variant:string,reduced=false) {
 const kind=materialOf(variant),style=kind==='folio'||kind==='transit'?'paper':kind==='aperture'?'iris':kind==='relay'||kind==='nixie'?'shutter':kind==='velvet'?'curtain':kind==='prism'?'facet':'membrane';
 surface.dataset.reveal=style;const scene=surface.querySelector<HTMLElement>(':scope > .rs-scene');if(!scene||reduced)return null;
 const poses:Record<string,Keyframe[]>={
  paper:[{transform:'perspective(700px) rotateX(-45deg) scaleY(.35)',opacity:.2},{transform:'perspective(700px) rotateX(3deg) scaleY(1.025)',opacity:1,offset:.75},{transform:'none',opacity:1}],
  iris:[{clipPath:'circle(0% at 90% 8%)',transform:'rotate(-9deg)'},{clipPath:'circle(150% at 90% 8%)',transform:'none'}],
  shutter:[{clipPath:'inset(47% 0)',opacity:.2},{clipPath:'inset(0)',opacity:1}],
  curtain:[{transform:'scaleX(.12)',opacity:.2},{transform:'scaleX(1.02)',opacity:1,offset:.75},{transform:'none',opacity:1}],
  facet:[{clipPath:'polygon(40% 30%,70% 25%,60% 75%,35% 70%)',transform:'scale(.85)'},{clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)',transform:'none'}],
  membrane:[{transform:'scale(.78,.5)',opacity:.2},{transform:'scale(1.02,1.04)',opacity:1,offset:.72},{transform:'none',opacity:1}]
 };
 return scene.animate(poses[style],{duration:560,easing:'cubic-bezier(.16,1,.3,1)'});
}
