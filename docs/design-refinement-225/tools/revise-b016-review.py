from pathlib import Path
id='ceramic-score-rating';p=Path('src/parts/ratings')/id/'styles.css';r='.sop-sig.sop-'+id+'.sop-'+id
p.write_text(p.read_text()+'\n@media(forced-colors:none){'+r+' .sg-rating-scale::before{inset:0 auto 26px 0;width:max(100%,calc(var(--sg-count,5)*28px + 36px))}'+r+' .sg-rating-scale::after{left:0;right:auto;width:max(100%,calc(var(--sg-count,5)*28px + 36px))}'+r+':dir(rtl) .sg-rating-scale::before{left:auto;right:0}'+r+':dir(rtl) .sg-rating-scale::after{left:auto;right:0}}\n')
for id in ['optical-color-desk','letterpress-ink-color','linear-lab-color']:
 p=Path('src/parts/colors')/id/'styles.css';r='.sop-sig.sop-'+id+'.sop-'+id
 s='\n@media(forced-colors:active){\n'
 for pseudo in ['::-webkit-slider-runnable-track','::-moz-range-track']:
  s+=','.join(r+' '+c+' input'+pseudo for c in ['.sg-color-axis','.sg-rgb-channel'])+'{forced-color-adjust:none;border:1px solid CanvasText}\n'
 for pseudo in ['::-webkit-slider-thumb','::-moz-range-thumb']:
  s+=r+' :is(.sg-color-axis,.sg-rgb-channel) input'+pseudo+'{forced-color-adjust:none;background:CanvasText;border:3px solid Canvas;outline:1px solid CanvasText;box-shadow:none}\n'
 p.write_text(p.read_text()+s+'}\n')
p=Path('docs/design-refinement-225/batches/B016/design.md');p.write_text(p.read_text()+'\n独立検査の修正：R504の陶面を可視幅だけでなく実段階数の最小幅まで延ばし、5段階の端と10段階スクロール末尾の星も器内に収める。色選択3件は強制配色でも意味を持つグラデーション軌道を保持し、システム色の枠と二重色のつまみで操作範囲を示す。\n')
