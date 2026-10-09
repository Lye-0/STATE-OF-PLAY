import json
from pathlib import Path
w=Path('docs/design-refinement-225')
a=[p for p in json.loads((w/'targets.json').read_text()) if p['batch']=='B005']
for p in a:
 if p['number'] in (163,164,165,170):
  f=Path(p['base'])/'usage.md';f.write_text(f.read_text()+'\n横向きのタブ列は、幅が変わって選択中のタブが隠れた際、そのタブが見える範囲へ列だけをスクロールします。手動選択モードではフォーカス位置を優先し、ページ全体や選択値は変更しません。\n')
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n'+css+'\n')
r='.sop-choice.sop-rung-tabs.sop-rung-tabs'
add('tabs','rung-tabs',f'''/* Keep a readable page beside the ladder, or below it in narrow hosts. */
{r}[data-orientation=vertical]{{display:flex;flex-wrap:wrap;gap:15px}}
{r}[data-orientation=vertical]>.sop-choice-list{{flex:0 0 104px;max-width:100%}}
{r}[data-orientation=vertical]>.sop-choice-panels{{flex:1 1 220px;min-width:min(100%,220px)}}
@container sop-choice (max-width:338px){{
 {r}[data-orientation=vertical]>.sop-choice-list{{flex-basis:100%;gap:7px}}
 {r}[data-orientation=vertical]>.sop-choice-list>.sop-choice-item{{min-height:48px;padding:10px;flex-direction:row}}
 {r}[data-orientation=vertical] .sop-tab-material i{{display:none}}
}}
''')
r='.sop-choice.sop-warm-reading-tabs'
add('tabs','warm-reading-tabs',f'''/* A chapter index with a reading gutter, rather than a row of pills. */
{r}{{--choice-ink:#3b3936;--choice-muted:#666058;--choice-base:#f5f1e9;--choice-accent:#786149;--choice-on:#3b3936}}
{r}>.sop-choice-list{{gap:0;padding:0;background:#f5f1e9;border-block-end:1px solid #b9ad99;border-radius:0}}
{r}>.sop-choice-list>.sop-choice-item{{padding:12px 14px;min-height:58px;border:0;border-inline-end:1px solid #d8cebd;border-radius:0;gap:9px;background:transparent;font-family:Georgia,'Yu Mincho',serif}}
{r}>.sop-choice-list>.sop-choice-item:last-of-type{{border-inline-end:0}}
{r} .sop-choice-index{{display:block;color:#746451;font:10px/1.5 Consolas,monospace;opacity:1}}
{r} .sop-choice-dot{{display:none}}
{r}>.sop-choice-list>.sop-choice-item:hover{{background:#eae3d7}}
{r}>.sop-choice-list>.sop-choice-item[data-selected=true]{{background:#fffdf8;box-shadow:inset 0 -3px #786149;font-weight:600}}
{r} .sop-choice-marker{{background:none;box-shadow:none;border:0;transition:none}}
{r}>.sop-choice-panels{{margin-top:0;background:#fffdf8;border:0;padding:16px 10px 12px}}
{r} .sop-choice-panel{{border:0;border-inline-start:2px solid #d4c7b1;border-radius:0;background:transparent;padding:14px 18px;animation:none}}
{r} .sop-choice-demo{{max-width:60ch;margin-inline:auto}}
{r} .sop-choice-demo h3{{font-family:Georgia,'Yu Mincho',serif}}
{r}[data-orientation=vertical]>.sop-choice-list{{border-block-end:0;border-inline-end:1px solid #b9ad99}}
{r}[data-orientation=vertical]>.sop-choice-list>.sop-choice-item{{border-inline-end:0;border-block-end:1px solid #d8cebd}}
{r}[data-orientation=vertical]>.sop-choice-list>.sop-choice-item[data-selected=true]{{box-shadow:inset 3px 0 #786149}}
@media(forced-colors:active){{{r} .sop-choice-panel,{r}>.sop-choice-panels{{background:Canvas;color:CanvasText}}{r} .sop-choice-index{{color:inherit}}}}
''')
for id in ['lever-stop-segments','tape-splice-segments','coin-seat-segments']:
 r=f'.sop-choice.sop-{id}.sop-{id}'
 add('segments',id,f'''/* Equal columns preserve the visual weight of each choice, including wrapped rows. */
{r}>.sop-choice-list{{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,68px),1fr))}}
{r}>.sop-choice-list>.sop-choice-item{{min-width:0;padding-inline:7px}}
{r}[data-orientation=vertical]>.sop-choice-list{{display:flex}}
''')
r='.sop-choice.sop-raised-bridge-segments.sop-raised-bridge-segments'
add('segments','raised-bridge-segments',f'''/* A continuous deck carried by two piers, with an open arch below the label. */
{r}>.sop-choice-list{{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,70px),1fr));gap:12px;padding:8px 4px 2px}}
{r}>.sop-choice-list>.sop-choice-item{{min-width:0;min-height:96px;padding:14px 7px 38px;align-items:center}}
{r}>.sop-choice-list>.sop-choice-item::before{{inset:0;background:linear-gradient(#a3b9bf 0 6px,#dce5e5 6px calc(100% - 6px),#869fa8 calc(100% - 6px));border:0;border-radius:2px;mask:radial-gradient(ellipse 32% 28px at 50% 100%,transparent 97%,#000 100%)}}
{r}>.sop-choice-list>.sop-choice-item::after{{inset:7px 5px auto;height:3px;border:0;border-radius:0;background:#f4f5ef;transform:scaleX(.3);transform-origin:left center;transition:transform .3s}}
{r}>.sop-choice-list>.sop-choice-item:hover::after{{transform:scaleX(.7)}}
{r}>.sop-choice-list>.sop-choice-item[data-selected=true]::before{{background:linear-gradient(#446e80 0 6px,#f5f4e9 6px calc(100% - 6px),#76929e calc(100% - 6px))}}
{r}>.sop-choice-list>.sop-choice-item[data-selected=true]::after{{background:#698d9c;transform:scaleX(1)}}
{r}[data-orientation=vertical]>.sop-choice-list{{display:flex}}
''')
# Synchronize the public descriptions; keep names, APIs and native behavior.
for id,cat,new in [('warm-reading-tabs','tabs','章番号と見出しを並べた索引と、余白のある読書面。選択を下線で示し、本文の左余白を一本の罫線で区切る。'),('raised-bridge-segments','segments','二本の橋脚が平らな橋面を支えるセグメント。文字の下にアーチ状の空隙を開け、選択時は上の梁と細い反射線で位置を示す。文字と操作領域は動かさない。')]:
 b=Path('src/parts')/cat/id;m=b/'meta.json';d=json.loads(m.read_text());old=d['description'];short=d['tagline'];d['description']=new;d['tagline']=new.split('。')[0]+'。';m.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [b/'usage.md',b/'prompt.md',b/'styles.css',*list((b/'react').glob('*.tsx'))]:
  text=f.read_text();text=text.replace(old,new)
  if old!=short:text=text.replace(short,d['tagline'])
  f.write_text(text)
b=w/'batches/B005';(b/'shared-sources.json').write_text('["src/shared/selection-indicator.ts"]\n');(b/'design.md').write_text('''# B005 読む面と選択肢の重み

- R162：縦タブと本文の最小幅を確保し、狭いホストでは縦の索引を本文の上へ置く。索引は縦のままでARIAとキー操作の向きを変えない。
- R163/164/165/170：B003と共通の選択位置保持。造形は前回評価を維持して検査。
- R169：暖色のピル型から、章番号・下線・読み物の左余白がある索引へ。Bとして本文を長く読める構造を優先。
- R176/178/180：選択肢を等しい幅の列へ配置し、最終項目だけ倍幅にならないようにする。余った列も同じ単位を維持。
- R177：アーチ形の丸角キーから、平らな橋面・二本の橋脚・下の空隙へ変更。上の反射線はホバー往復で連続し、選択で梁を強調。文字とクリック領域は固定。
''')
