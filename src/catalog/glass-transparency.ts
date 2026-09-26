import type {Part, Format, SourceFile} from './types';

/** 50 is the exhibit template. Change material colour alpha, never text opacity. */
export const glassDensity = (value:number):number => (100-Math.max(0,Math.min(100,Number.isFinite(value)?Math.round(value):50)))/50;
export const templateGlassDensity=(part:Pick<Part,'designType'>):number=>part.designType==='A'?.82:1;
export function withGlassTransparency(source:Part,value:number):Part {
 if(!/^(lg-|lgc-)/.test(source.id))return source;
 const amount=Number.isFinite(value)?Math.max(0,Math.min(100,Math.round(value))):50;
 if(amount===50)return source;
 const density=Number((glassDensity(amount)*templateGlassDensity(source)).toFixed(4));
 const css=`\n/* Material transparency: ${amount}/100; template = 50. Text and optical edges retain their contrast. */\n.sop-${source.id}{--lg-density:${density};}\n`;
 const files=(input:Record<Format,SourceFile[]>):Record<Format,SourceFile[]>=>Object.fromEntries(Object.entries(input).map(([format,items])=>[format,items.map(file=>file.sourceName===`src/parts/${source.category}/${source.id}/styles.css`?{...file,code:file.code+css}:file)])) as Record<Format,SourceFile[]>;
 const note=`\n\n## 調整した透明度\n透明度: ${amount} / 100（50が展示テンプレート）。CSSの --lg-density は ${density}。素材の面ごとの濃度差を保ち、背景色のアルファ値だけを調整しています。文字、輪郭、影、無効状態のopacityは変更しません。展開した一覧・通知・ダイアログにも同じ設定を適用します。透過を減らす利用者設定は優先してください。\n`;
 return {...source,glassTransparency:amount,files:files(source.files),portableFiles:files(source.portableFiles),preview:{...source.preview,'styles.css':source.preview['styles.css']+css},prompt:source.prompt+note,usage:source.usage+note};
}
