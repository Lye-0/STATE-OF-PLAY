from pathlib import Path
for id,css in {
 'stone-pip-rating':'.sg-rating-form{clip-path:none;border-radius:4px 4px 1px 1px;mask:radial-gradient(ellipse 34% 35px at 50% 100%,transparent 98%,#000 100%)}',
 'stitch-star-rating':'.sg-rating-form::after{border-top:1px dashed #a880aa;border-bottom:1px dashed #8a6690;box-shadow:0 2px 0 #d8c1df,inset 0 3px 0 #e8d8ed,inset 0 -3px 0 #e8d8ed}'
}.items():
 p=Path('src/parts/ratings')/id/'styles.css';r='.sop-sig.sop-'+id+'.sop-'+id;p.write_text(p.read_text()+f'\n@media(forced-colors:none){{{r} {css}}}\n')
p=Path('docs/design-refinement-225/batches/B015/design.md');p.write_text(p.read_text()+'\n主担当の並列比較でR494の三角開口が旗端に見えたため、石の開口を半楕円のアーチへ変更。R498は横帯の上下を細い縫い目で示し、硬い柵ではなく布のつながりを読み取りやすくした。\n')
