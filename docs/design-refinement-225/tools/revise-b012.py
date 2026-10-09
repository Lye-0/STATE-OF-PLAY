from pathlib import Path
r=lambda id:'.sop-foundation.sop-'+id+'.sop-'+id
for id,color in [('stone-path-trail','#485c3c'),('looped-route-trail','#744e68')]:
 p=Path('src/parts/breadcrumbs')/id/'styles.css';s=r(id);p.write_text(p.read_text()+f'\n@media(forced-colors:none){{{s} a:hover:not([aria-disabled=true]){{color:{color}}}}}\n')
id='soft-location-trail';s=r(id);p=Path('src/parts/breadcrumbs')/id/'styles.css';p.write_text(p.read_text()+f'\n{s} .ff-crumb-menu{{min-width:0;max-width:calc(100vw - 24px)}}{s} .ff-crumb-menu a{{display:block;min-width:0;max-width:100%;white-space:normal;overflow-wrap:anywhere;word-break:normal;line-height:1.7}}\n')
p=Path('docs/design-refinement-225/batches/B012/design.md');p.write_text(p.read_text()+'\n## 独立検査round2への修正\nR414/R423はホバー時のリンク文字を濃くし、実際の背景上での読みやすさを保つ。R428はメニューの長い空白なし階層名も枠内で折り返す。レイアウト規則はforced-colorsでも適用する。\n')
