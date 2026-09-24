/** Hint-specific artwork is deliberately separate from the materials shared by choices and comboboxes. */
export function createHintArtwork(panel:HTMLElement,variant:string):HTMLElement|null {
 if(variant==='aperture'||variant==='prism')return null;
 const art=document.createElement('span');art.className='rs-hint-art';art.setAttribute('aria-hidden','true');
 art.innerHTML='<i></i>'.repeat(5);panel.prepend(art);return art;
}

const motions:Record<string,Keyframe[]>={
 aurora:[{opacity:0,transform:'translateY(24px) scaleY(.45)'},{opacity:1,transform:'none'}],
 mercury:[{opacity:0,transform:'translateX(-42%) skewX(-9deg)'},{opacity:1,transform:'none'}],
 obsidian:[{opacity:0,transform:'translateY(28px) scaleY(.55)'},{opacity:1,transform:'none'}],
 folio:[{opacity:0,transform:'perspective(560px) rotateX(-65deg)'},{opacity:1,transform:'none'}],
 blueprint:[{opacity:0,transform:'scaleX(.03)'},{opacity:1,transform:'none'}],
 botanical:[{opacity:0,transform:'rotate(-13deg) scale(.77)'},{opacity:1,transform:'none'}],
 copper:[{opacity:0,transform:'scaleX(.12)'},{opacity:1,transform:'none'}],
 nixie:[{opacity:0,clipPath:'inset(46% 0)'},{opacity:1,clipPath:'inset(0)'}],
 ceramic:[{opacity:0,transform:'scale(.68)'},{opacity:1,transform:'none'}],
 velvet:[{opacity:0,transform:'scaleX(.24)'},{opacity:1,transform:'none'}],
 tide:[{opacity:0,transform:'translateY(45%)'},{opacity:1,transform:'none'}],
 transit:[{opacity:0,transform:'translateX(-32%)'},{opacity:1,transform:'none'}],
 contour:[{opacity:0,transform:'scale(1.18)'},{opacity:1,transform:'none'}],
 relay:[{opacity:0,transform:'translateX(-25px)'},{opacity:1,transform:'none'}]
};

const panelMotions:Record<string,Keyframe[]>={
 aurora:[{opacity:.4,transform:'scaleY(.68)'},{opacity:1,transform:'none'}],
 mercury:[{opacity:.45,transform:'scaleX(.55)'},{opacity:1,transform:'none'}],
 obsidian:[{opacity:.45,transform:'scaleY(.72)'},{opacity:1,transform:'none'}],
 folio:[{opacity:.4,transform:'scaleY(.52)'},{opacity:1,transform:'none'}],
 blueprint:[{opacity:.45,transform:'scaleX(.58)'},{opacity:1,transform:'none'}],
 botanical:[{opacity:.55,transform:'scale(.85)'},{opacity:1,transform:'none'}],
 copper:[{opacity:.5,transform:'scaleX(.56)'},{opacity:1,transform:'none'}],
 nixie:[{opacity:.3,transform:'scaleY(.47)'},{opacity:1,transform:'none'}],
 ceramic:[{opacity:.5,transform:'scale(.82)'},{opacity:1,transform:'none'}],
 velvet:[{opacity:.5,transform:'scaleX(.66)'},{opacity:1,transform:'none'}],
 tide:[{opacity:.45,transform:'scaleY(.58)'},{opacity:1,transform:'none'}],
 transit:[{opacity:.45,transform:'scaleX(.55)'},{opacity:1,transform:'none'}],
 contour:[{opacity:.4,transform:'scale(.82)'},{opacity:1,transform:'none'}],
 relay:[{opacity:.4,transform:'scaleX(.54)'},{opacity:1,transform:'none'}]
};

/** Motion reveals the information's origin; it never delays or duplicates real text. */
export function revealHintArtwork(panel:HTMLElement,variant:string,reduced:boolean):Animation[] {
 if(reduced)return [];
 const animations:Animation[]=[],art=panel.querySelector<HTMLElement>(':scope > .rs-hint-art');
 if(art&&panelMotions[variant])animations.push(panel.animate(panelMotions[variant],{duration:330,easing:variant==='relay'?'steps(4,end)':'cubic-bezier(.16,1,.3,1)',fill:'both'}));
 if(art)animations.push(art.animate(motions[variant]??[{opacity:0},{opacity:1}],{duration:variant==='relay'?340:460,easing:variant==='relay'?'steps(5,end)':'cubic-bezier(.16,1,.3,1)',fill:'both'}));
 const content=panel.querySelector<HTMLElement>(':scope > .ff-hint-content');
 content?.querySelectorAll<HTMLElement>('.ff-hint-heading,[data-hint-content],.rs-hint-actions:not([hidden])').forEach((part,index)=>{
  animations.push(part.animate([{opacity:0},{opacity:1}],{duration:210,delay:65+index*42,easing:'ease-out',fill:'both'}));
 });
 return animations;
}
