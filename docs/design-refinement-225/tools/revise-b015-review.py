from pathlib import Path
root=Path('src/parts')
p=root/'avatars/warm-author-profile/styles.css';s=p.read_text();r='.sop-sig.sop-warm-author-profile.sop-warm-author-profile'
s+='\n'+r+' .sg-avatar-stage{padding:0}\n'
s+='@media(forced-colors:none){'+r+'{padding:18px}}\n'
s+='@media(forced-colors:active){\n'+r+' .sg-person[data-selected=true]{--sg-ink:HighlightText;--sg-muted:HighlightText;background:Highlight;color:HighlightText;forced-color-adjust:none}\n'
s+=','.join(r+' .sg-person[data-selected=true] '+c for c in ['.sg-person-copy','.sg-person-name','.sg-person-sub'])+'{background:transparent;color:HighlightText;forced-color-adjust:none}\n'
s+=r+' .sg-person[data-selected=true] .sg-portrait-picture{background:Canvas;border-color:HighlightText}\n'+r+' .sg-person[data-selected=true] .sg-initials{color:CanvasText;background:Canvas;text-shadow:none;forced-color-adjust:none}\n}\n';p.write_text(s)
for id,css in {'inspection-score-rating':'.sg-rating-star{left:15%;top:13px;width:70%;height:24px;max-width:28px}', 'open-bracket-rating':'.sg-rating-form{inset:12px 2px!important;display:grid;place-items:center}.sg-rating-star{width:70%;max-width:28px;height:24px;transform:none!important}'}.items():
 p=root/'ratings'/id/'styles.css';r='.sop-sig.sop-'+id+'.sop-'+id;s=css.replace('}.','}'+r+' .');p.write_text(p.read_text()+'\n@media(forced-colors:active){'+r+' '+s+'}\n')
p=Path('docs/design-refinement-225/batches/B015/design.md');p.write_text(p.read_text()+'\n独立検査の再修正：R490の二重余白を整理し、狭幅の氏名列を広げた。強制配色の選択氏名はHighlightTextとHighlightを明示。R492/R499は強制配色にも縮尺後の星位置・札内寸法を適用し、旧固定insetによる縮小と交差を解消した。\n')
for id,color in {'stitch-star-rating':'#583b68','open-bracket-rating':'#714526','coin-value-rating':'#654b22'}.items():
 p=root/'ratings'/id/'styles.css';r='.sop-sig.sop-'+id+'.sop-'+id;p.write_text(p.read_text()+'\n@media(forced-colors:none){'+r+' .sg-rating-unit[data-filled=true] .sg-rating-star{fill:'+color+';stroke:'+color+'}}\n')
p=Path('docs/design-refinement-225/batches/B015/design.md');p.write_text(p.read_text()+'\nR498/R499/R500は値を示す星の塗りを各部品の濃いインク色へ合わせ、背面の布・札・駒に対する視認性を確保した。\n')
