from pathlib import Path
for id,color in {'flag-score-rating':'#673d32','ribbon-score-rating':'#6a3a5e'}.items():
 p=Path('src/parts/ratings')/id/'styles.css';r='.sop-sig.sop-'+id+'.sop-'+id;p.write_text(p.read_text()+'\n@media(forced-colors:none){'+r+' .sg-rating-unit[data-filled=true] .sg-rating-star{fill:'+color+';stroke:'+color+'}}\n')
p=Path('docs/design-refinement-225/batches/B016/design.md');p.write_text(p.read_text()+'\nB015の指摘を横断点検し、R501/R503も星と背面の差が2.498/2.407:1だったため、星の塗りを各インク色へ濃くした。\n')
