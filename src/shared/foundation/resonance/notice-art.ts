/** Notification-only decoration. It never copies the message or owns a control. */
export function createNoticeArtwork(host:HTMLElement):HTMLElement {
 const art=document.createElement('span');art.className='rs-notice-art';art.setAttribute('aria-hidden','true');
 art.innerHTML='<i></i>'.repeat(4);host.prepend(art);return art;
}

type Pose=Keyframe[];
const arrivals:Record<string,Pose>={
 aurora:[{opacity:0,transform:'translateY(16px) scaleY(.72)'},{opacity:1,transform:'none'}],
 mercury:[{opacity:0,transform:'translateX(25px) scaleX(.82)'},{opacity:1,transform:'none'}],
 obsidian:[{opacity:0,transform:'translateY(-18px) scaleY(.76)'},{opacity:1,transform:'none'}],
 prism:[{opacity:0,transform:'translate(16px,-12px) scale(.88)'},{opacity:1,transform:'none'}],
 folio:[{opacity:0,transform:'translateY(-20px) rotate(-3deg)'},{opacity:1,transform:'none'}],
 blueprint:[{opacity:0,transform:'scaleX(.66)'},{opacity:1,transform:'none'}],
 botanical:[{opacity:0,transform:'translateY(22px) rotate(2deg)'},{opacity:1,transform:'none'}],
 copper:[{opacity:0,transform:'translateX(22px) rotate(1.5deg)'},{opacity:1,transform:'none'}],
 nixie:[{opacity:0,transform:'scaleY(.6)'},{opacity:1,transform:'none'}],
 ceramic:[{opacity:0,transform:'scale(.83)'},{opacity:1,transform:'none'}],
 velvet:[{opacity:0,transform:'translateY(-22px) scaleY(.8)'},{opacity:1,transform:'none'}],
 tide:[{opacity:0,transform:'translateY(26px)'},{opacity:1,transform:'none'}],
 aperture:[{opacity:0,transform:'scale(.76) rotate(-5deg)'},{opacity:1,transform:'none'}],
 transit:[{opacity:0,transform:'translateX(32px)'},{opacity:1,transform:'none'}],
 contour:[{opacity:0,transform:'translateX(-19px) scale(.92)'},{opacity:1,transform:'none'}],
 relay:[{opacity:0,transform:'translateX(26px)'},{opacity:1,transform:'none'}]
};
const marks:Record<string,Pose>={
 aurora:[{opacity:0,transform:'translateY(36px)'},{opacity:1,transform:'none'}],
 mercury:[{opacity:0,transform:'translateX(-70%)'},{opacity:1,transform:'none'}],
 obsidian:[{opacity:0,transform:'scaleY(.1)'},{opacity:1,transform:'none'}],
 prism:[{opacity:0,transform:'rotate(-30deg) scale(.5)'},{opacity:1,transform:'none'}],
 folio:[{opacity:0,transform:'translateY(-28px) rotate(-12deg)'},{opacity:1,transform:'none'}],
 blueprint:[{opacity:0,transform:'scaleX(.02)'},{opacity:1,transform:'none'}],
 botanical:[{opacity:0,transform:'rotate(-25deg) scale(.7)'},{opacity:1,transform:'none'}],
 copper:[{opacity:0,transform:'translateX(44px)'},{opacity:1,transform:'none'}],
 nixie:[{opacity:0,clipPath:'inset(0 100% 0 0)'},{opacity:1,clipPath:'inset(0)'}],
 ceramic:[{opacity:0,transform:'scale(.5)'},{opacity:1,transform:'none'}],
 velvet:[{opacity:0,transform:'scaleY(.15)'},{opacity:1,transform:'none'}],
 tide:[{opacity:0,transform:'translateY(75%)'},{opacity:1,transform:'none'}],
 aperture:[{opacity:0,transform:'rotate(-24deg) scale(.5)'},{opacity:1,transform:'none'}],
 transit:[{opacity:0,transform:'translateX(-60%)'},{opacity:1,transform:'none'}],
 contour:[{opacity:0,transform:'scale(.35)'},{opacity:1,transform:'none'}],
 relay:[{opacity:0,transform:'translateX(-34px)'},{opacity:1,transform:'none'}]
};

export function revealNotice(host:HTMLElement,variant:string,reduced:boolean):Animation[] {
 if(reduced)return [];
 const art=host.querySelector<HTMLElement>(':scope > .rs-notice-art'),pose=arrivals[variant]??arrivals.aurora;
 const animations=[host.animate(pose,{duration:variant==='relay'||variant==='nixie'?360:420,easing:variant==='relay'||variant==='nixie'?'steps(4,end)':'cubic-bezier(.16,1,.3,1)'})];
 if(art)animations.push(art.animate(marks[variant]??marks.aurora,{duration:510,easing:variant==='relay'||variant==='nixie'?'steps(5,end)':'cubic-bezier(.16,1,.3,1)'}));
 return animations;
}

export function retireNotice(host:HTMLElement,variant:string,reduced:boolean):Animation|null {
 if(reduced)return null;
 const direction=['folio','velvet','obsidian'].includes(variant)?-12:['tide','botanical'].includes(variant)?14:0;
 const x=direction?0:['transit','relay','mercury','copper'].includes(variant)?18:-9;
 return host.animate([{opacity:1,transform:'none'},{opacity:0,transform:`translate(${x}px,${direction}px) scale(.97)`}],{duration:170,easing:'ease-in',fill:'forwards'});
}
