/** Decorative geometry only. None of these paths owns a value, a hit target or text. */
export const MATERIALS = ['aurora','mercury','nixie','folio','blueprint','prism','copper','botanical','velvet','obsidian','ceramic','tide','aperture','transit','relay','contour'] as const;
export type Material = typeof MATERIALS[number];
export function materialOf(value: unknown): Material {
  return MATERIALS.includes(value as Material) ? value as Material : 'aurora';
}
const clamp = (n:number, lo=0, hi=1) => Math.max(lo, Math.min(hi, Number.isFinite(n) ? n : lo));
const f = (n:number) => Number(n.toFixed(3));
const pt = (x:number,y:number) => `${f(x)} ${f(y)}`;
const line = (d:string, opacity=.5, width=1, cls='ct-light') => `<path d="${d}" class="${cls}" fill="none" stroke-width="${width}" opacity="${f(opacity)}"/>`;
const face = (d:string, opacity=.35, cls='ct-face') => `<path d="${d}" class="${cls}" opacity="${f(opacity)}"/>`;
const circle = (x:number,y:number,r:number,opacity=.6,cls='ct-face') => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(Math.max(0,r))}" class="${cls}" opacity="${f(opacity)}"/>`;
const rect = (x:number,y:number,w:number,h:number,rx:number,opacity:number,cls='ct-face') => `<rect x="${f(x)}" y="${f(y)}" width="${f(Math.max(0,w))}" height="${f(Math.max(0,h))}" rx="${rx}" class="${cls}" opacity="${f(opacity)}"/>`;
const polar = (r:number,a:number) => [180 + Math.cos(a)*r, 60 + Math.sin(a)*r] as const;
function ticks(count=30):string {return Array.from({length:count+1},(_,i)=>line(`M${pt(28+i*304/count,101)}v${i%5===0?7:3}`,.24)).join('');}
/** Progress is 0..1. The caller may interpolate decoration, never the accessible value. */
export function progressGeometry(material: Material, raw:number, impulse=0,uid="ct-static"): string {
  const p=clamp(raw), e=clamp(impulse), x=28+p*304;
  let art='';
  switch(material) {
    case 'aurora': {
      art=rect(24,28,312,58,29,.06)+line('M46 30H306Q336 30 336 59T306 88H46',.3);
      for(let i=0;i<5;i++) {
        const end=28+p*302, y=47+i*6;
        art+=face(`M28 81V${y} C${pt(83+e*24,13+i*12)} ${pt(end-35,106-i*6)} ${pt(end,39+i*6)}L${pt(end,81)}Z`,.12+i*.035,i%2?'ct-face2':'ct-face');
      }
      if(p>0)art+=line(`M${pt(x,34)}Q${pt(x-10-e*13,58)} ${pt(x,82)}`,.8,1.6)+circle(x,39,3,.9);
      break;
    }
    case 'mercury': {
      art=rect(24,30,312,57,14,.08,'ct-dark')+line('M34 87H326',.38);
      for(let i=0;i<18;i++) {const a=clamp(p*18-i),xx=29+i*17,yy=48-11*a;
        art+=face(`M${pt(xx,yy)}l15 -${3+8*a}v${33+11*a}l-15 4Z`,.13+.65*a)+line(`M${pt(xx+2,yy+1)}l12 -${2+7*a}`,.22+.62*a,1.3);
      }
      art+=ticks();break;
    }
    case 'nixie': {
      art=rect(22,22,316,70,18,.7,'ct-dark');
      for(let i=0;i<24;i++){const a=clamp(p*24-i),xx=30+i*12.6;
        art+=rect(xx,30,8,48,4,.16,'ct-dim')+line(`M${pt(xx+4,33)}v38`,.1+.82*a,2.5,'ct-hot')+circle(xx+4,83,1.3,.2+.8*a,'ct-hot-fill');
      }
      art+=line('M33 24H322',.3)+line('M33 94H322',.22);break;
    }
    case 'folio': {
      art=line('M25 91H338',.35)+rect(23,19,4,70,1,.7);
      for(let i=0;i<12;i++){const a=clamp(p*12-i),xx=29+i*25.2,d=3+10*a;
        art+=face(`M${pt(xx,27+d)}l12 -${d} 12 ${d}v52l-12 -${d} -12 ${d}Z`,.12+.4*a)+face(`M${pt(xx,27+d)}l12 -${d}v52l-12 ${d}Z`,.12+.45*a,'ct-face2');
        art+=line(`M${pt(xx+12,27)}v52`,.12+.6*a);
      }
      break;
    }
    case 'blueprint': {
      for(let i=0;i<16;i++)art+=line(`M${28+i*20} 19V89`,.12);
      for(let i=0;i<4;i++)art+=line(`M24 ${25+i*20}H338`,.12);
      art+=line('M28 82H332',.35)+line(`M28 82H${f(x)}`,.95,2);
      art+=line(`M${pt(x,23)}v66m-6 -11 6 8 6 -8`,.95,1.4)+line(`M28 82Q${pt((x+28)/2,11-e*7)} ${pt(x,40)}`,.45);
      art+=circle(x,40,5,.2)+circle(x,40,2.2,1)+ticks();break;
    }
    case 'prism': {
      for(let i=0;i<12;i++){const a=clamp(p*12-i),xx=28+i*25.3,hh=15+25*a;
        art+=face(`M${pt(xx,60)}l12 -${hh} 13 ${hh} -13 ${hh}Z`,.12+.5*a,i%3===0?'ct-face2':'ct-face')+line(`M${pt(xx,60)}h25m-13 -${hh}v${2*hh}`,.12+.35*a);
      }
      if(p>0)for(let i=0;i<5;i++)art+=line(`M${pt(x,60)}L${pt(Math.min(339,x+40),85+i*4)}`,.12,1+i);
      break;
    }
    case 'copper': {
      art=rect(26,29,308,63,8,.07)+rect(28,39,p*300,43,3,.46)+line(`M28 39H${f(x)}`,.85,1.5);
      for(let i=0;i<5;i++)art+=line(`M${pt(x-4+i,39-i)}C${pt(x+23-i*2,18)} ${pt(x+25-i*2,88)} ${pt(x-4+i,82+i)}`,.2+i*.12,1.3);
      art+=line(`M28 82H${f(x)}`,.5)+ticks();break;
    }
    case 'botanical': {
      art=line('M25 76Q180 64 336 74',.3,1.3)+line(`M25 76Q${pt(28+(x-28)/2,64)} ${pt(x,73)}`,.9,1.5);
      for(let i=0;i<10;i++){const a=clamp(p*10-i),xx=37+i*30,dir=i%2===0?-1:1,reach=5+26*a;
        art+=face(`M${pt(xx,73)}q${reach*.3} ${dir*reach} ${reach} ${dir*(reach+4)}q2 ${-dir*(reach+3)} -${reach} ${-dir*(reach+4)}Z`,.14+.5*a)+line(`M${pt(xx,73)}l${reach} ${dir*(reach+4)}`,.12+.4*a);
      }
      break;
    }
    case 'velvet': {
      art=rect(24,27,312,64,20,.14);
      for(let i=0;i<28;i++){const a=clamp(p*28-i),xx=29+i*11,yy=35+10*Math.sin(i*.32);
        art+=face(`M${pt(xx,yy)}q9 15 2 46q4 6 8 0q7 -${44+e*5} -1 -46Z`,.06+.45*a,i%2?'ct-face2':'ct-face');
      }
      art+=line('M28 91H332',.25);break;
    }
    case 'obsidian': {
      art=face('M24 27 335 33 325 84 28 92Z',.93,'ct-dark');
      const a=8+p*16;
      art+=face(`M26 26H334L312 ${f(54-a)} 255 ${f(60-a)} 178 ${f(45-a)} 109 ${f(56-a)} 27 ${f(48-a)}Z`,.16)+face(`M27 93H328L322 ${f(57+a)} 262 ${f(61+a)} 181 ${f(47+a)} 115 ${f(58+a)} 27 ${f(52+a)}Z`,.2,'ct-face2');
      art+=line(`M28 57H${f(x)}`,.4+.4*p,1.5)+line(`M${pt(x,50)}v14`,.85);break;
    }
    case 'ceramic': {
      art=circle(180,61,52,.9,'ct-face2')+circle(180,61,43,.18,'ct-dark')+circle(180,61,37,.75,'ct-dark');
      const a=-Math.PI/2,b=a+p*2*Math.PI,end=polar(44,b);
      if(p>=1)art+=`<circle cx="180" cy="61" r="44" class="ct-light" fill="none" stroke-width="6" opacity=".95"/>`;
      else if(p>0)art+=line(`M180 17A44 44 0 ${p>.5?1:0} 1 ${pt(end[0],end[1]+1)}`,.95,6);
      art+=circle(end[0],end[1]+1,4,.95)+line('M160 21Q192 12 209 33',.5,2);break;
    }
    case 'tide': {
      const y=96-p*72;
      art=rect(25,16,310,82,16,.08)+line('M42 16H318Q334 16 334 33V81Q334 98 318 98H42Q26 98 26 81V33Q26 16 42 16Z',.46);
      if(p>0)for(let i=0;i<3;i++){
        const yy=y+i*3,amp=(i+1)*2+e*6;
        art+=face(`M28 ${f(yy)}C100 ${f(yy-amp)} 220 ${f(yy+amp)} 332 ${f(yy)}V83Q332 96 318 96H42Q28 96 28 83Z`,.15+i*.1,i===1?'ct-face2':'ct-face');
      }
      art+=line(`M36 ${f(y)}Q180 ${f(y-4-e*8)} 325 ${f(y)}`,.78,1.3)+line('M36 30V81',.32);break;
    }
    case 'aperture': {
      art=circle(180,60,54,.95,'ct-dark');
      for(let i=0;i<10;i++){const a=i*Math.PI/5+p*.5,r=15+p*28,A=polar(50,a),B=polar(50,a+.64),C=polar(r,a+.9);art+=face(`M${pt(...A)}Q${pt(...B)} ${pt(...C)}L${pt(...polar(r,a+.32))}Z`,.24+(i%3)*.1,i%2?'ct-face':'ct-face2');}
      art+=`<circle cx="180" cy="60" r="54" class="ct-light" fill="none" opacity=".6"/>`;
      art+=circle(180,60,Math.max(0,9+p*24),.05+p*.2);break;
    }
    case 'transit': {
      art=rect(25,24,310,70,5,.13);
      for(let i=0;i<27;i++){const xx=29+i*11.4,active=i<p*27;art+=rect(xx,29,5,3,1,.3)+rect(xx,83,5,3,1,.3);art+=rect(xx,41,5,32,1,active?.75:.08,i%3?'ct-face':'ct-face2');}
      art+=line(`M${pt(x,19)}v80`,.9,1.2)+face(`M${pt(x-4,18)}h8l-4 6Z`,.9);break;
    }
    case 'relay': {
      art=rect(25,25,310,69,7,.6,'ct-dark');
      for(let i=0;i<24;i++){const a=clamp(p*24-i),xx=30+i*12.6,projection=Math.max(3,54*Math.abs(Math.cos(a*Math.PI*.42)));
        art+=rect(xx,60-projection/2,9,projection,2,.1+.65*a)+line(`M${pt(xx+1,60-projection/2)}h7`,.2+.6*a,1.2);}
      art+=line('M31 97H331',.25);break;
    }
    case 'contour': {
      for(let i=12;i>0;i--){const a=clamp(p*13-(12-i)),rx=20+i*10,ry=4+i*3.4;
        art+=`<ellipse cx="${180+Math.sin(i*.4)*13}" cy="60" rx="${rx}" ry="${ry}" class="ct-light" fill="none" stroke-width="${a?1.6:.65}" opacity="${f(.09+a*.64)}" transform="rotate(-8 180 60)"/>`;}
      art+=circle(180,60,4,.2+.8*p);break;
    }
  }
  return svgSurface(art,material,uid,e);
}
/** A horizontal receiving mechanism. Opens on focus/drag; never conceals the file input. */
export function intakeGeometry(material:Material, raw:number, count=0,uid="ct-static",impulse=0):string {
  const p=clamp(raw), lift=18*p;
  let s='';
  const pane = (d:string,op=.35,cls='ct-face')=>face(d,op,cls);
  switch(material){
    case 'folio':case 'copper': {
      for(let i=3;i>=0;i--){const y=74-i*(2+6*p),x=85+i*7;s+=pane(`M${pt(x,y)}l81 -34 104 13 -79 35Z`,.09+i*.06,i%2?'ct-face2':'ct-face')+line(`M${pt(x,y)}l81 -34 104 13`,.3);}
      s+=pane(`M84 80 160 ${f(54-lift)} 277 74 201 ${f(101-lift/2)}Z`,.28)+line(`M84 80 201 ${f(101-lift/2)} 277 74`,.7,1.3);break;
    }
    case 'aperture':case 'prism':case 'ceramic': {
      const r=13+27*p;s+=circle(180,60,49,.5,'ct-dark');
      for(let i=0;i<8;i++){const a=i*Math.PI/4+p*.5;s+=pane(`M${pt(...polar(49,a))}L${pt(...polar(49,a+.78))} ${pt(...polar(r,a+1.3))} ${pt(...polar(r,a+.5))}Z`,.2+i%3*.1,i%2?'ct-face2':'ct-face');}
      s+=line('M128 61H106m128 0h22',.45)+circle(180,60,7+12*p,.05+.2*p);break;
    }
    case 'aurora':case 'tide': {
      for(let i=0;i<4;i++){const a=10+i*7;s+=pane(`M51 72C110 ${f(72-a-lift)} 130 ${f(79+a+lift)} 181 71S267 ${f(79-a-lift)} 310 67L310 89Q180 ${f(114+i*3-lift)} 51 89Z`,.14+i*.035,i%2?'ct-face2':'ct-face');}
      s+=line(`M55 72Q180 ${f(70-lift)} 309 67`,.8)+line('M62 86Q180 105 302 82',.45);break;
    }
    case 'mercury':case 'obsidian': {
      s+=pane(`M67 68 151 ${f(35-lift*.6)} 292 60 207 ${f(94-lift*.6)}Z`,.08);
      s+=pane(`M${pt(63-18*p,61)}l81 -32 41 9 -82 36Z`,.35)+pane(`M${pt(156+18*p,40)}l137 24 -80 35 -136 -27Z`,.13,'ct-face2');
      s+=line(`M${pt(64-18*p,62)}l80 -32m${f(12+38*p)} 10 136 24`,.8)+line('M80 85 205 108 295 73',.28);break;
    }
    case 'nixie':case 'blueprint': {
      for(let i=0;i<11;i++){const x=84+i*18;s+=line(`M${pt(x,78)}v-${f(12+lift+Math.sin(i*.4)*12)}q7 -7 12 0v${f(12+lift+Math.sin(i*.4)*12)}`,.15+p*.35,1.3);}
      s+=line('M78 81H290m-106 -67v81',.25)+line(`M${pt(70,85-lift*2)}h226`,.75,1.6);break;
    }
    case 'botanical': {
      for(let i=0;i<5;i++){const x=99+i*31,a=i*Math.PI/4;s+=pane(`M${pt(x,85)}q${-22*p} -${30+lift} 15 -${44+lift}q${28*p} 30 -15 ${44+lift}Z`,.15+i*.04)+line(`M${pt(x,85)}l15 -${44+lift}`,.4);}
      s+=line('M81 91Q180 105 280 88',.45);break;
    }
    case 'velvet': {
      for(let i=0;i<20;i++){const x=65+i*12,y=44+25*Math.sin(i/19*Math.PI)*(1-p);s+=pane(`M${pt(x,y)}q12 ${f(40+lift)} 8 47h-7q4 -${f(40+lift)} -1 -47Z`,.1+i%3*.09,i%2?'ct-face2':'ct-face');}
      s+=line(`M65 43Q180 ${f(70-35*p)} 305 43`,.6);break;
    }
    default: s=line('M44 80H316',.6);
  }
  // File silhouettes show reception, not upload completion or a file's contents.
  const visible=Math.min(3,Math.max(0,count));
  for(let i=0;i<visible;i++){
    const xx=153+i*13,yy=f(24-i*4-clamp(impulse)*18);
    s+=pane(`M${xx} ${yy}h32l10 10v34h-42Z`,.24+i*.1,'ct-face2')+line(`M${xx+32} ${yy}v10h10m-32 14h18m-18 7h13`,.75);
  }
  return svgSurface(s,material,uid,p);
}

/** Every mounted scene supplies an instance-scoped ID. No global SVG resources. */
function svgSurface(art:string,material:Material,uid:string,energy:number):string {
  const paper=material==='folio'||material==='botanical',metal=['mercury','copper','nixie'].includes(material);
  const x=12+energy*24;
  const specular=paper?'color-mix(in srgb,var(--ct-b),white 25%)':'color-mix(in srgb,var(--ct-a),white 70%)';
  const stops=metal?`<stop offset="0" stop-color="${specular}"/><stop offset=".15" stop-color="var(--ct-a)"/><stop offset=".43" stop-color="var(--ct-b)"/><stop offset=".56" stop-color="${specular}"/><stop offset="1" stop-color="var(--ct-b)"/>`:
    `<stop offset="0" stop-color="${specular}"/><stop offset=".36" stop-color="var(--ct-a)"/><stop offset="1" stop-color="var(--ct-b)"/>`;
  return `<svg viewBox="0 0 360 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" style="--ct-fill:url(#${uid}-a);--ct-fill2:url(#${uid}-b)"><defs><linearGradient id="${uid}-a" x1="${x}%" y1="0%" x2="85%" y2="100%">${stops}</linearGradient><linearGradient id="${uid}-b" x1="0%" y1="90%" x2="95%" y2="0%"><stop stop-color="var(--ct-b)"/><stop offset=".75" stop-color="var(--ct-a)"/><stop offset="1" stop-color="${specular}"/></linearGradient></defs>${art}</svg>`;
}
