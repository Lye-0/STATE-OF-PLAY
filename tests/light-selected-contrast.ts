import type {Page} from 'playwright';
/** Visible text within selected controls (or the supplied selector) on an opaque, flat surface. Gradients need visual review. */
export async function lightSelectedContrast(page:Page,ids:string[],selector='[data-selected=true],[aria-current=page],[aria-current=step],[aria-pressed=true]'){return page.evaluate(({ids,selector})=>{
 const canvas=document.createElement('canvas');canvas.width=canvas.height=1;const ctx=canvas.getContext('2d')!;
 const rgba=(color:string)=>{ctx.clearRect(0,0,1,1);ctx.fillStyle=color;ctx.fillRect(0,0,1,1);return [...ctx.getImageData(0,0,1,1).data];};
 const lum=(c:number[])=>c.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
 // These sculpted page buttons paint the text's entire backing on
 // ::before, not on the transparent button. Pixel review verified coverage.
 // Keep measuring contrast (and reject a missing/gradient backing), rather
 // than comparing white digits with the unrelated outer paper surface.
 const pageBefore=new Set(['spine-index-pages','ribbon-ticket-pages','perforated-pages','track-stop-pages']);
 const failures:{id:string;text:string;ratio:number}[]=[];let checked=0;
 for(const id of ids){const host=document.querySelector(`[data-part="${id}"]`)!;const walker=document.createTreeWalker(host,NodeFilter.SHOW_TEXT);let node:Node|null;
  while(node=walker.nextNode()){const text=node.textContent?.trim(),el=node.parentElement;if(!text||!el||!el.closest(selector)||el.getBoundingClientRect().width<1||el.closest('[aria-hidden=true]'))continue;
   const style=getComputedStyle(el);if(style.clip==='rect(0px, 0px, 0px, 0px)'||style.clipPath==='inset(50%)'||style.visibility==='hidden'||style.display==='none')continue;const fg=rgba(style.color);let bg:number[]|undefined,parent:Element|null=el,gradient=false;
   while(parent){
    if(pageBefore.has(id)&&parent.matches('.ff-page-window [aria-current=page]')){
     const painted=getComputedStyle(parent,'::before'),color=rgba(painted.backgroundColor);
     if(painted.content==='none'||painted.display==='none'||painted.visibility!=='visible'||Number(painted.opacity)!==1||painted.backgroundImage!=='none'||color[3]!==255)throw new Error(id+': expected an opaque sculpted page backing; review its actual paint');
     bg=color;break;
    }
    const s=getComputedStyle(parent);if(s.backgroundImage!=='none'){gradient=true;break;}const c=rgba(s.backgroundColor);if(c[3]===255){bg=c;break;}parent=parent.parentElement;}
   if(!bg||gradient)continue;const a=lum(fg),b=lum(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);checked++;
   const large=Number.parseFloat(style.fontSize)>=24||(Number.parseFloat(style.fontSize)>=18.66&&Number.parseInt(style.fontWeight)>=700);if(ratio<(large?3:4.5))failures.push({id,text,ratio});
  }
 }
 return {checked,failures};
},{ids,selector});}
