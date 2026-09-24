export type RGB = [number,number,number];
export type HSV = [number,number,number];
const c=(n:number,min:number,max:number)=>Math.max(min,Math.min(max,Number.isFinite(n)?n:min));
export function normalizeHex(raw: string): string | null {
 const value=raw.trim().replace(/^#/,'');
 if(/^[\da-f]{3}$/i.test(value))return '#'+value.split('').map(x=>x+x).join('').toUpperCase();
 return /^[\da-f]{6}$/i.test(value)?'#'+value.toUpperCase():null;
}
export function hexToRGB(hex:string):RGB{const x=normalizeHex(hex);if(!x)throw new TypeError('Use #RGB or #RRGGBB.');return [1,3,5].map(p=>parseInt(x.slice(p,p+2),16)) as RGB;}
export function rgbToHex(rgb:RGB):string{return '#'+rgb.map(x=>Math.round(c(x,0,255)).toString(16).padStart(2,'0')).join('').toUpperCase();}
export function rgbToHSV(rgb:RGB):HSV{const [r,g,b]=rgb.map(x=>c(x,0,255)/255),max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;let h=0;if(d){if(max===r)h=((g-b)/d)%6;else if(max===g)h=(b-r)/d+2;else h=(r-g)/d+4;h=(h*60+360)%360;}return [h,max?d/max:0,max];}
export function hsvToRGB([h,s,v]:HSV):RGB{h=Number.isFinite(h)?((h%360)+360)%360:0;s=c(s,0,1);v=c(v,0,1);const x=v*s,y=x*(1-Math.abs((h/60)%2-1)),m=v-x;const zones:RGB[]=[[x,y,0],[y,x,0],[0,x,y],[0,y,x],[y,0,x],[x,0,y]];return zones[Math.floor(h/60)].map(n=>Math.round((n+m)*255)) as RGB;}
export function readableInk(hex:string){const [r,g,b]=hexToRGB(hex).map(v=>{const x=v/255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4);});return .2126*r+.7152*g+.0722*b>.42?'#162023':'#FFFFFF';}
