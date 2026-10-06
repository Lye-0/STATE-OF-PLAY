import type {Part,Format,SourceFile} from './types.ts';
export type ColorRole='accent'|'surface';
export interface AppearanceField {key:ColorRole;label:string;value:string;}
export interface AppearanceRule {selector:string;conditions:string[];declarations:[string,string,boolean][];}
export interface AppearanceProfile {fields:AppearanceField[];rules:AppearanceRule[];accentIsSurface?:boolean;}
export type AppearanceColors=Partial<Record<ColorRole,string>>;
type RGB=[number,number,number];
const token=/#(?:[\da-f]{8}|[\da-f]{6}|[\da-f]{4}|[\da-f]{3})(?![\da-f])|rgba?\([^()]*\)|\b(?:white|black)\b/gi;
export function parseColor(value:string):{rgb:RGB;alpha:number}|undefined {
 if(value==='white')return {rgb:[255,255,255],alpha:1};if(value==='black')return {rgb:[0,0,0],alpha:1};
 if(value.startsWith('#')){let s=value.slice(1);if(s.length===3||s.length===4)s=[...s].map(c=>c+c).join('');if(!/^[\da-f]{6}([\da-f]{2})?$/i.test(s))return;return {rgb:[0,2,4].map(i=>parseInt(s.slice(i,i+2),16)) as RGB,alpha:s.length===8?parseInt(s.slice(6),16)/255:1};}
 const m=value.match(/^rgba?\(([^()]*)\)$/i);if(!m)return;const a=m[1].trim().split(/[\s,\/]+/);if(a.length<3||a.some(x=>!/^\d*\.?\d+%?$/.test(x)))return;
 return {rgb:a.slice(0,3).map(x=>Math.max(0,Math.min(255,parseFloat(x)*(x.endsWith('%')?2.55:1)))) as RGB,alpha:a[3]?parseFloat(a[3])/(a[3].endsWith('%')?100:1):1};
}
export const hexColor=(rgb:RGB):string=>'#'+rgb.map(n=>Math.round(n).toString(16).padStart(2,'0')).join('');
function hsl(rgb:RGB):[number,number,number]{const [r,g,b]=rgb.map(n=>n/255),max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,l=(max+min)/2;return [d===0?0:(((max===r?(g-b)/d+(g<b?6:0):max===g?(b-r)/d+2:(r-g)/d+4)*60)%360),d===0?0:d/(1-Math.abs(2*l-1)),l];}
function rgb([h,s,l]:[number,number,number]):RGB{const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;const v=h<60?[c,x,0]:h<120?[x,c,0]:h<180?[0,c,x]:h<240?[0,x,c]:h<300?[x,0,c]:[c,0,x];return v.map(n=>(n+m)*255) as RGB;}
const distance=(a:number,b:number)=>Math.min(Math.abs(a-b),360-Math.abs(a-b));
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const paintProperty=/^(?:--|color$|background|border|outline|fill$|stroke$|box-shadow$|text-shadow$|text-decoration|caret-color|accent-color|column-rule)/;
const semantic=/error|invalid|danger|warning|success|disabled|swatch|color-stop|palette|avatar-image/i;
export function appearanceCSS(source:Part,colors:AppearanceColors,scope=''):string {
 const profile=source.appearance;if(!profile)return '';
 const fields=new Map(profile.fields.map(f=>[f.key,f]));
 const normalized=Object.fromEntries(Object.entries(colors).filter(([key,v])=>fields.has(key as ColorRole)&&/^#[\da-f]{6}$/i.test(v!)).map(([key,v])=>[key,v!.toLowerCase()])) as AppearanceColors;
 const changed=(key:ColorRole)=>normalized[key]&&normalized[key]!==fields.get(key)?.value.toLowerCase();
 if(!changed('accent')&&!changed('surface'))return '';
 const accent=fields.get('accent'),surface=fields.get('surface');
 const a0=accent?hsl(parseColor(accent.value)!.rgb):undefined,a1=changed('accent')?hsl(parseColor(normalized.accent!)!.rgb):undefined;
 const s0=surface?hsl(parseColor(surface.value)!.rgb):undefined,s1=changed('surface')?hsl(parseColor(normalized.surface!)!.rgb):undefined;
 const transform=(value:string,property:string)=>value.replace(token,(match,offset:number,full:string)=>{
  const prefix=full.slice(0,offset);if(prefix.lastIndexOf('url(')>prefix.lastIndexOf(')'))return match;
  const c=parseColor(match);if(!c)return match;const v=hsl(c.rgb);let next=v;
  const neutral=v[1]<.22||v[2]<.1||v[2]>.9;
  const accentLiteral=a0&&distance(v[0],a0[0])<8&&Math.abs(v[1]-a0[1])<.015&&Math.abs(v[2]-a0[2])<.015;
  const accentProperty=/accent|active|focus/.test(property);
  if(profile.accentIsSurface&&a0&&a1&&/^(color$|--.*(?:ink|muted))/.test(property)&&(a0[2]>.5)!==(a1[2]>.5)){
   const light=1-v[2],base=1-a0[2];const l=light<=base?a1[2]*light/Math.max(.001,base):a1[2]+(1-a1[2])*(light-base)/Math.max(.001,1-base);
   next=[a1[0],Math.min(.15,a1[1]),clamp(l)];
  }else if(s0&&s1&&neutral&&!/shadow/.test(property)&&!accentProperty&&(!accentLiteral||!a1)){
   let light=v[2],base=s0[2];if((base>.5)!==(s1[2]>.5)){light=1-light;base=1-base;}
   const l=light<=base?s1[2]*light/Math.max(.001,base):s1[2]+(1-s1[2])*(light-base)/Math.max(.001,1-base);
   next=[s1[0],clamp(s1[1]*(v[1]===0?.14:Math.min(1,v[1]/Math.max(.04,s0[1])))),clamp(l)];
   if(distance(v[0],s0[0])<35&&Math.abs(v[2]-s0[2])<.015)next=s1;
  }else if(a0&&a1&&!(surface&&neutral&&/background|--.*(?:bg|base|panel|surface)/.test(property))&&!(!accentProperty&&/^--.*(?:ink|muted)/.test(property))&&((v[1]>.06&&distance(v[0],a0[0])<65)||(a0[1]<.06&&Math.abs(v[2]-a0[2])<.12))){
   const l=v[2]<=a0[2]?a1[2]*v[2]/Math.max(.001,a0[2]):a1[2]+(1-a1[2])*(v[2]-a0[2])/Math.max(.001,1-a0[2]);
   next=[(a1[0]+v[0]-a0[0]+360)%360,clamp(a0[1]<.06?a1[1]:a1[1]*v[1]/a0[1]),clamp(l)];
  }else return match;
  const out=rgb(next);return c.alpha===1?hexColor(out):`rgb(${out.map(n=>Math.round(n)).join(' ')} / ${Number(c.alpha.toFixed(4))})`;
 });
 const rules=profile.rules.flatMap(rule=>{
  if(semantic.test(rule.selector))return [];
  const declarations=rule.declarations.filter(([p])=>paintProperty.test(p)&&!semantic.test(p)).map(([p,v,important])=>{const tuple=/^\d+[\s,]+\d+[\s,]+\d+$/.test(v);let changed=transform(tuple?`rgb(${v})`:v,p);if(tuple){const c=parseColor(changed);changed=c?c.rgb.map(n=>Math.round(n)).join(v.includes(',')?',':' '):v;}return changed===v?'':`${p}:${changed}${important?'!important':''};`;}).filter(Boolean).join('');
  if(!declarations)return [];
  const selectors=rule.selector.split(/,(?![^()]*\))/).flatMap(selector=>{const s=selector.trim(),type=s.match(/^(?:[a-z][\w-]*|\*)/i)?.[0]??'';return [`${scope}${type}:where(.sop-${source.id})${s.slice(type.length)}`,`${scope}:where(.sop-${source.id}) ${s}`];});
  let css=selectors.join(',')+'{'+declarations+'}';for(const condition of [...rule.conditions].reverse())css=condition+'{'+css+'}';return [css];
 });
 return `\n/* Detail appearance: ${JSON.stringify(normalized)} */\n@media (forced-colors: none){\n`+rules.join('\n')+'\n}\n';
}
export function withAppearance(source:Part,colors:AppearanceColors):Part {
 const css=appearanceCSS(source,colors);if(!css)return source;
 const values=Object.fromEntries(source.appearance!.fields.filter(f=>colors[f.key]&&/^#[\da-f]{6}$/i.test(colors[f.key]!)).map(f=>[f.key,colors[f.key]!.toLowerCase()])) as AppearanceColors;
 const files=(input:Record<Format,SourceFile[]>):Record<Format,SourceFile[]>=>Object.fromEntries(Object.entries(input).map(([format,items])=>[format,items.map(file=>file.sourceName===`src/parts/${source.category}/${source.id}/styles.css`?{...file,code:file.code+css}:file)])) as Record<Format,SourceFile[]>;
 const note='\n\n## 詳細で調整した配色\n元の説明にある配色は展示の代表値です。今回は次の調整値と調整済みCSSを優先してください。\n'+source.appearance!.fields.filter(f=>values[f.key]).map(f=>`${f.label}: ${values[f.key]}`).join('。')+'。調整したCSSをそのまま使用し、形・動き・透明度・状態の意味を保持してください。配色は詳細プレビューで調整したもので、展示の代表値は変更していません。\n';
 return {...source,appearanceColors:values,files:files(source.files),portableFiles:files(source.portableFiles),preview:{...source.preview,'styles.css':source.preview['styles.css']+css},prompt:source.prompt+note,usage:source.usage+note};
}
