from pathlib import Path
for id in ['ribbon-swatch-color','soft-theme-color','warm-studio-color']:
 p=Path('src/parts/colors')/id/'styles.css';r='.sop-sig.sop-'+id+'.sop-'+id;s='\n'
 if id!='ribbon-swatch-color':
  s+=r+' :is(.sg-color-axis,.sg-rgb-channel) input{height:44px;background:transparent;border:0}\n'
  for pseudo in ['::-webkit-slider-runnable-track','::-moz-range-track']:
   s+=r+' :is(.sg-color-axis,.sg-rgb-channel) input'+pseudo+'{height:6px;border-radius:4px;background:var(--sg-soft)}\n'
   for c,bg in {'h':'linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)','s':'linear-gradient(90deg,#aaa,hsl(var(--sg-hue) 100% 50%))','v':'linear-gradient(90deg,#080a0c,var(--sg-color))'}.items():s+=r+' .sg-color-axis input[data-channel='+c+']'+pseudo+'{background:'+bg+'}\n'
  s+=r+' :is(.sg-color-axis,.sg-rgb-channel) input::-webkit-slider-thumb{margin-top:-4.5px}\n'
 if id=='warm-studio-color':s+=r+' .sg-color-controls{display:none}'+r+' .sg-color-rgb{display:grid;gap:0}'+r+' .sg-rgb-channel{min-height:54px}\n'
 s+='@media(forced-colors:active){\n'+r+'{--sg-bg:Canvas;--sg-ink:CanvasText;--sg-muted:CanvasText;--sg-line:ButtonText;--sg-soft:Canvas}\n'
 s+=','.join(r+' '+c for c in ['.sg-color-sv','.sg-color-swatch','.sg-color-palette button','.sg-color-sv-handle'])+'{forced-color-adjust:none}\n'
 s+=r+' .sg-color-sv-handle{border-color:#fff;box-shadow:0 0 0 1px #000}\n'
 for pseudo in ['::-webkit-slider-runnable-track','::-moz-range-track']:
  s+=','.join(r+' '+c+' input'+pseudo for c in ['.sg-color-axis','.sg-rgb-channel'])+'{forced-color-adjust:none;border:1px solid CanvasText}\n'
 for pseudo in ['::-webkit-slider-thumb','::-moz-range-thumb']:
  s+=r+' :is(.sg-color-axis,.sg-rgb-channel) input'+pseudo+'{forced-color-adjust:none;background:CanvasText;border:2px solid Canvas;outline:1px solid CanvasText;box-shadow:none}\n'
 s+=r+' .sg-color-palette button[aria-pressed=true]{outline:2px solid Highlight;outline-offset:2px}\n}\n';p.write_text(p.read_text()+s)
p=Path('docs/design-refinement-225/batches/B017/design.md');p.write_text(p.read_text()+'\n先行点検で3colorsのforced軌道消失、B2件の実色面/色見本白化を確認し修正。意味を持つ色は維持し、レール境界とつまみはシステム色で識別する。Bのrangeは44pxの操作高さにし、Warmは強制配色でもRGB編集を維持する。\n')
