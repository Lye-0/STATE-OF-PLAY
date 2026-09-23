/** Pure decorative geometry. Logical values are supplied independently by the real inputs. */
export interface RangeStroke { d:string; opacity:number; fill?:boolean; width?:number; }
export function rangeGeometry(mode:string, start:number,end:number,energy=0,phase=0):RangeStroke[]{
 const clamp=(x:number)=>Math.max(0,Math.min(1,Number.isFinite(x)?x:0));
 start=clamp(start);end=clamp(end);if(start>end)[start,end]=[end,start];energy=clamp(energy);phase=Number.isFinite(phase)?phase:0;
 const a=start*1000,b=end*1000,mid=(a+b)/2,lines:RangeStroke[]=[];
 const n=(x:number)=>Number(x.toFixed(2));
 const path=(f:(x:number)=>number,from=0,to=1000)=>Array.from({length:65},(_,i)=>{const x=from+(to-from)*i/64;return`${i?'L':'M'}${n(x)} ${n(f(x))}`;}).join(' ');
 const hill=(x:number,c=b,w=100)=>Math.exp(-(((x-c)/w)**2));
 const active=(x:number)=>x>=a&&x<=b;
 const add=(d:string,opacity=.5,fill=false,width=1)=>lines.push({d,opacity,fill,width});
 // All modes expose both endpoints, but avoid false ordinal labels or fake measured values.
 if(['tide','aurora','mercury','velvet','contour','blueprint','obsidian'].includes(mode)){
  const count=mode==='contour'?9:mode==='velvet'?8:mode==='blueprint'?6:mode==='obsidian'?2:5;
  for(let j=0;j<count;j++){
   const f=(x:number)=>{const h=hill(x,b,110)+ (start>0?hill(x,a,100):0),u=j-(count-1)/2;
    if(mode==='tide')return 80+u*6+Math.sin(x/105+phase*8+j*.8)*(6+energy*16)*h;
    if(mode==='aurora')return 80+u*5+Math.sin(x/170+j*.7+phase*4)*(10+energy*12)*Math.sin(Math.PI*x/1000);
    if(mode==='mercury')return 80+u*(3+8*h*(.9+energy));
    if(mode==='velvet')return 80+u*6-22*h*(1+energy*.4);
    if(mode==='blueprint')return 80+(j<3?-1:1)*(3+Math.abs(u)*5+20*h*(1+energy*.35));
    if(mode==='obsidian')return 80+(j?1:-1)*(5+23*h*(.7+energy));
    return 80+u*5-30*h*(.7+energy*.5);
   };
   const d=path(f);add(d,mode==='obsidian'?.85:.19+j/count*.58,false,j===2?1.6:1);
   if((mode==='tide'||mode==='aurora')&&j===1){add(path(f,a,b)+` L${n(b)} 90 L${n(a)} 90Z`,.13,true);}
  }
 }else if(mode==='aperture'||mode==='ceramic'){
  for(const c of start>0?[a,b]:[b])for(let j=0;j<8;j++){
   const angle=(j*45+end*100+energy*38)*Math.PI/180,r=18+j*1.2;
   const x=c+Math.cos(angle)*r*1.6,y=80+Math.sin(angle)*r;
   add(`M${n(x)} ${n(y)} A${n(r*1.6)} ${n(r)} 0 0 1 ${n(c+Math.cos(angle+.55)*r*1.6)} ${n(80+Math.sin(angle+.55)*r)}`, .18+j*.065,false,mode==='ceramic'?2:1.4);
  }
 }else if(mode==='relay'||mode==='folio'||mode==='transit'||mode==='prism'){
  const count=mode==='folio'?22:32,step=1000/count;
  for(let j=0;j<count;j++){
   const x=j*step,selected=active(x+step/2),near=hill(x,b,100)*(8+energy*10);
   if(mode==='relay'){const lift=selected?15:2;add(`M${n(x+3)} ${n(80-lift-near)} l${n(step-6)} ${n(lift*1.5)} v8 l${n(6-step)} ${n(-lift*1.5)}Z`,selected?.7:.2,true);}
   else if(mode==='folio'){const h=selected?15:4;add(`M${n(x)} ${n(80-h)} L${n(x+step/2)} ${n(80+h+near)} L${n(x+step)} ${n(80-h)} L${n(x+step)} ${n(84-h)} L${n(x+step/2)} ${n(84+h+near)} L${n(x)} ${n(84-h)}Z`,selected?.56:.15,true);}
   else if(mode==='prism'){add(`M${n(x)} 80 L${n(x+step/2)} ${n(80-12-near)} L${n(x+step)} 80 L${n(x+step/2)} ${n(80+8+near*.3)}Z`,selected?.55:.12,true);}
   else add(`M${n(x+3)} ${n(selected?63-near*.4:70)} h${n(step-8)} v${selected?34+near*.8:20} h${n(8-step)}Z`,selected?.55:.17,false);
  }
 }else if(mode==='copper'){
  for(let j=0;j<29;j++){const x=j*1000/28,h=hill(x,b,100),y=80-(10+h*(12+energy*10));add(`M${n(x-12)} 92 Q${n(x-21)} ${n(y)} ${n(x)} ${n(y)} Q${n(x+21)} ${n(y)} ${n(x+12)} 92`,active(x)?.73:.23,false,1.4);}
 }else if(mode==='botanical'){
  add('M0 80H1000',.24);for(let j=0;j<17;j++){const x=20+j*60,h=10+hill(x,b,120)*(20+energy*12);add(`M${x} 80 Q${x+3} ${n(80-h)} ${x+25} ${n(80-h)} Q${x+23} 80 ${x} 80 M${x} 80 Q${x+3} ${n(80+h)} ${x+25} ${n(80+h)} Q${x+23} 80 ${x} 80`,active(x)?.64:.2,false);}
 }else { // cathode grid, lit only within the selected interval
  for(let j=0;j<42;j++){const x=j*1000/41,inside=active(x),h=inside?13+hill(x,b,80)*energy*15:5;add(`M${n(x)} ${n(80-h)} V${n(80+h)}`,inside?.75:.15,false,inside?2:1);}
 }
 return lines;
}
