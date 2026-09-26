import type {Part, Format, SourceFile} from './types';

/** Affine alpha mapping preserves the exhibit's ordering and relative differences.
 * Keep a small material signal at either extreme; never collapse every plane to 0/1. */
export function glassAlpha(value:number):{scale:number;lift:number}{
 const amount=Math.max(0,Math.min(100,Number.isFinite(value)?Math.round(value):50));
 return amount>=50?{scale:Number((1-(amount-50)*.0176).toFixed(4)),lift:0}
  :{scale:Number((.75+amount*.005).toFixed(4)),lift:Number((.25-amount*.005).toFixed(4))};
}
export const glassBlurScale=(value:number):number=>Math.max(0,Math.min(100,Number.isFinite(value)?Math.round(value):50))/50;
export function withGlassTransparency(source:Part,value:number,blurValue=50):Part {
 if(!/^(lg-|lgc-)/.test(source.id))return source;
 const amount=Number.isFinite(value)?Math.max(0,Math.min(100,Math.round(value))):50;
 const blur=Number.isFinite(blurValue)?Math.max(0,Math.min(100,Math.round(blurValue))):50;
 if(amount===50&&blur===50)return source;
 const {scale,lift}=glassAlpha(amount);
 const css=`\n/* Material transparency: ${amount}/100; background blur: ${blur}/100; template = 50 each. */\n.sop-${source.id}{--lg-alpha-scale:${scale};--lg-alpha-lift:${lift};--lg-blur-scale:${glassBlurScale(blur)};}\n`;
 const files=(input:Record<Format,SourceFile[]>):Record<Format,SourceFile[]>=>Object.fromEntries(Object.entries(input).map(([format,items])=>[format,items.map(file=>file.sourceName===`src/parts/${source.category}/${source.id}/styles.css`?{...file,code:file.code+css}:file)])) as Record<Format,SourceFile[]>;
 const note=`\n\n## 調整したガラス素材\n透明度: ${amount} / 100。背景のぼかし: ${blur} / 100（それぞれ50が展示テンプレート、ぼかし0は背景をぼかしません）。各面の展示時アルファ × ${scale} + ${lift} で濃淡の関係を保ちます。CSSの --lg-alpha-scale は ${scale}、--lg-alpha-lift は ${lift}、--lg-blur-scale は ${glassBlurScale(blur)}。透明度の両端でも面の濃淡を残し、背景ぼかしは元の強弱を保って独立調整します。文字、輪郭、影、無効状態のopacityは変更しません。展開した一覧・通知・ダイアログにも同じ設定を適用します。透過を減らす利用者設定は優先してください。\n`;
 return {...source,glassTransparency:amount,glassBlur:blur,files:files(source.files),portableFiles:files(source.portableFiles),preview:{...source.preview,'styles.css':source.preview['styles.css']+css},prompt:source.prompt+note,usage:source.usage+note};
}
