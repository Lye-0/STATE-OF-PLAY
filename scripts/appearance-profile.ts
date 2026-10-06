import postcss from 'postcss';
import {parseColor,hexColor,appearanceCSS,type AppearanceProfile,type AppearanceRule} from '../src/catalog/appearance.ts';
import type {Part} from '../src/catalog/types.ts';
const paint=/^(--|color$|background|border|outline|fill$|stroke$|box-shadow$|text-decoration|caret-color|accent-color)/;
export function appearanceProfile(meta:Pick<Part,'id'|'category'|'designType'|'material'>,css:string,own:string,allIds:Set<string>):AppearanceProfile|undefined {
 const glass=/^lgc?-/.test(meta.id);
 // These curated legacy loaders share their geometry across removed color variants.
 // Their names describe a palette, not a color-dependent mechanism.
 const paletteLoader=['aurora-loader','mercury-loader','prism-loader','copper-loader'].includes(meta.id);
 if(meta.category==='colors'||/danger|warning|success/.test(meta.id)||(!glass&&!paletteLoader&&meta.designType==='A'&&(meta.category==='toggles'||/copper|nixie|prism|iridescen|aurora|ember|chrome|titanium|mercury|虹|銅|炎|金属/i.test(meta.id+' '+meta.material))))return;
 const root=postcss.parse(css),authored=postcss.parse(own),rules:AppearanceRule[]=[];
 const seeds:{value:string;property:string;root:boolean}[]=[];
 const collect=(decl:postcss.Declaration)=>{if(!paint.test(decl.prop))return;const value=/^\d+[\s,]+\d+[\s,]+\d+$/.test(decl.value)?`rgb(${decl.value})`:decl.value;for(const match of value.matchAll(/#[\da-f]{3,8}\b|rgba?\([^()]*\)/gi)){const c=parseColor(match[0]);if(c&&c.alpha>.5)seeds.push({value:hexColor(c.rgb),property:decl.prop,root:decl.parent?.type==='rule'&&!/\s[.\[]/.test((decl.parent as postcss.Rule).selector)});}};
 authored.walkDecls(collect);
 root.walkRules(rule=>{if(/^\.sop-(foundation|sig|wb|ornament)(?:\.sop-\1)?$/.test(rule.selector))rule.walkDecls(collect);});
 const rank=(s:typeof seeds[number])=>/accent$|accent:|ornament-accent|--sel-accent|--sg-a$|--wb-accent/.test(s.property)?0:/accent/.test(s.property)?1:s.root&&s.property==='background'?2:s.property==='color'?5:3;
 const sorted=[...seeds].sort((a,b)=>rank(a)-rank(b));
 const surface=seeds.find(s=>/--(?:ff-base|sg-bg|wb-bg|sel-bg|field-bg|sop-background)$/.test(s.property))??seeds.find(s=>s.root&&s.property==='background');
 const accent=(!glass&&meta.category==='buttons'&&meta.designType==='B'?surface:undefined)??sorted.find(s=>/accent|--sg-a$/.test(s.property))??sorted.find(s=>{const c=parseColor(s.value)!.rgb;return Math.max(...c)-Math.min(...c)>16&&(/active/.test(s.property)||!/ink|muted|line|shadow|bg|panel|base|surface/.test(s.property));})??sorted.find(s=>{const c=parseColor(s.value)!.rgb;return Math.max(...c)-Math.min(...c)>12;})??sorted.find(s=>s.property==='color');
 const fields:AppearanceProfile['fields']=[];
 if(accent)fields.push({key:'accent',label:glass?'ガラスの色':meta.category==='ornaments'?'装飾の色':meta.category==='scrollbars'?'つまみの色':meta.category==='loaders'?'ローダーの色':meta.category==='buttons'&&accent===surface?'ボタンの色':meta.category==='links'?'リンクの色':'アクセント',value:accent.value});
 if(!glass&&surface&&surface.value!==accent?.value)fields.push({key:'surface',label:meta.category==='blocks'?'背景の色':'面の色',value:surface.value});
 if(!fields.length)return;
 root.walkRules(rule=>{
  let parent=rule.parent;const conditions:string[]=[];
  while(parent&&parent.type!=='root'){if(parent.type==='atrule'){if(!['media','supports','layer','container'].includes(parent.name))return;conditions.unshift('@'+parent.name+' '+parent.params);}parent=parent.parent;}
  const selectors=rule.selector.split(/,(?![^()]*\))/).filter(sel=>![...sel.matchAll(/\.sop-([\w-]+)/g)].some(m=>allIds.has(m[1])&&m[1]!==meta.id));
  if(!selectors.length)return;
  const declarations:AppearanceRule['declarations']=[];rule.walkDecls(d=>{if(paint.test(d.prop)&&(/#[\da-f]|rgba?\(|\bwhite\b|\bblack\b|^\d+[\s,]+\d+[\s,]+\d+$/i.test(d.value)))declarations.push([d.prop,d.value,!!d.important]);});
  if(declarations.length)rules.push({selector:selectors.join(','),conditions,declarations});
 });
 const profile={fields,rules,accentIsSurface:accent?.property==='background'&&surface?.value===accent.value};
 const offered=fields.filter(field=>/\{[^{}]*:[^{}]*\}/.test(appearanceCSS({...meta,appearance:profile} as Part,{[field.key]:'#c65eaa'})));
 return offered.length?{...profile,fields:offered}:undefined;
}
