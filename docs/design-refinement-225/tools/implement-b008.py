import json,re
from pathlib import Path
w=Path('docs/design-refinement-225')
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n'+css+'\n')
r='.sop-foundation.sop-pinstripe-range.sop-pinstripe-range'
thumb='width:38px;height:52px;border:0;border-radius:0;background:linear-gradient(90deg,transparent 18px,#a33e29 18px 20px,transparent 20px),linear-gradient(#536573 0 7px,transparent 7px calc(100% - 7px),#536573 calc(100% - 7px));box-shadow:inset 2px 0 #9da9ac,inset -2px 0 #9da9ac'
add('sliders','pinstripe-range',f'''/* A vernier carriage straddles the scale; the center hairline indicates the value. */
@media(forced-colors:none){{
{r}{{--accent:#9c412d;background:#f3f0e7;border-radius:0;padding:22px}}
{r} .ff-slider{{margin-inline:0}}
{r} .ff-rail{{left:19px;right:19px;top:26px;height:23px;border-block:1px solid #78818a;background:repeating-linear-gradient(90deg,#808990 0 1px,transparent 1px 12.5%)}}
{r} .ff-rail::after{{inset:9px 0 auto;height:12px;background:repeating-linear-gradient(90deg,#b7b9b5 0 1px,transparent 1px 2.5%)}}
{r} .ff-ticks{{display:none}}{r} .ff-fill{{background:#9daeb133}}
{r} [data-range]::-webkit-slider-thumb{{{thumb};margin-top:-18px}}
{r} [data-range]::-moz-range-thumb{{{thumb}}}
}}
''')
r='.sop-foundation.sop-enamel-peg-range.sop-enamel-peg-range';thumb='background:radial-gradient(ellipse 7px 4px at 35% 22%,#e1edf2 80%,transparent 95%),linear-gradient(90deg,#355969 0 3px,#658a9a 3px 25px,#365e70 25px)'
add('sliders','enamel-peg-range',f'''/* Enamel is distinct from the pale plate, including its stem. */
@media(forced-colors:none){{
{r}{{--surface:#ede9dc;--paper:#f5f0e2;--ink:#3f4e54;--muted:#5e6b70;--accent:#3f6b7e;--edge:#9caaa9}}
{r} .ff-rail{{background:#9faeae}}{r} .ff-fill{{background:#3f6b7e}}
{r} [data-range]::-webkit-slider-thumb{{{thumb}}}{r} [data-range]::-moz-range-thumb{{{thumb}}}
}}
''')
r='.sop-foundation.sop-loop-label-choice.sop-loop-label-choice'
add('radios','loop-label-choice',f'''/* A thin binding thread belongs at the top edge, away from the radio mark. */
{r} .ff-choices{{padding-inline:4px;gap:18px}}
{r} .ff-choice{{padding-inline-start:22px;padding-top:25px}}
{r} .ff-choice::before{{inset:5px 0 0;border-block-width:1px;mask:none}}
{r} .ff-choice::after{{inset:auto;left:22px;top:-3px;width:38px;height:14px;border:1px solid #92677d;border-radius:50%;rotate:-8deg}}
{r}:dir(rtl) .ff-choice::before{{inset:5px 0 0;transform:none}}
{r}:dir(rtl) .ff-choice::after{{left:auto;right:22px}}
''')
r='.sop-foundation.sop-clasp-band-choice.sop-clasp-band-choice'
add('radios','clasp-band-choice',f'''/* A cloth strap folds around the end of a note and passes through a metal clasp. */
{r}{{--surface:#e8e9e5;--paper:#f7f4e9;--selected:#fffdf4;--ink:#3e4d51;--muted:#5b6869;--accent:#526f78;--edge:#aab8b6}}
{r} .ff-choice{{padding-inline:20px 52px}}
{r} .ff-choice::before{{inset:0 18px 0 0;border:0;border-inline-end:26px solid #8fa6aa;box-shadow:inset -1px 0 #586f78;background:var(--paper)}}
{r} .ff-choice[data-selected=true]::before{{background:var(--selected);border-inline-end-color:#617f8b}}
{r} .ff-choice::after{{inset:auto 9px auto auto;top:calc(50% - 21px);width:34px;height:42px;border:3px solid #c6d0ce;border-inline-end:5px solid #7d969b;border-radius:2px;background:linear-gradient(#7d969b,#7d969b) center/100% 3px no-repeat;box-shadow:0 1px 0 #5b747a;translate:0;transition:border-color .2s}}
{r} .ff-choice[data-selected=true]::after{{translate:0;border-color:#75949e;border-inline-end-color:#456975}}
{r}:dir(rtl) .ff-choice::before{{inset:0 0 0 18px;box-shadow:inset 1px 0 #586f78}}
{r}:dir(rtl) .ff-choice::after{{right:auto;left:9px;translate:0}}
@container(max-width:300px){{{r} .ff-choice{{padding-inline:14px 49px}}}}
''')
r='.sop-foundation.sop-stapled-card-choice.sop-stapled-card-choice'
add('radios','stapled-card-choice',f'''/* A folded binding margin clamps a thin stack, rather than a staple on a flat card. */
{r}{{--surface:#e4e8eb;--paper:#f5f4ec;--selected:#fffef5;--ink:#3e4c57;--muted:#596873;--accent:#566f82;--edge:#a6b5be}}
{r} .ff-choices{{gap:20px;padding:9px 3px 5px 9px}}
{r} .ff-choice{{padding:22px 18px 22px 40px}}
{r} .ff-choice::before{{inset:0;background:linear-gradient(90deg,#9aadb9 0 20px,#cbd5d8 20px 24px,var(--paper) 24px);border:0;box-shadow:-3px -3px #d5dfe1,-6px -6px #b6c5cc}}
{r} .ff-choice[data-selected=true]::before{{background:linear-gradient(90deg,#627f92 0 20px,#aebfc6 20px 24px,var(--selected) 24px)}}
{r} .ff-choice::after{{inset:20px auto 20px 11px;width:19px;height:auto;border:0;border-block:4px solid #e1e5df;border-inline-start:3px solid #718995;border-radius:2px 0 0 2px;background:none}}
{r} .ff-choice[data-selected=true]::after{{border-color:#eef1e9;border-inline-start-color:#526f81}}
{r}:dir(rtl) .ff-choice::before{{inset:0;transform:scaleX(-1);box-shadow:-3px -3px #d5dfe1,-6px -6px #b6c5cc}}
{r}:dir(rtl) .ff-choice::after{{left:auto;right:11px;transform:scaleX(-1)}}
@container(max-width:300px){{{r} .ff-choice{{padding-inline:36px 14px}}}}
''')
r='.sop-foundation.sop-shallow-bowl-choice.sop-shallow-bowl-choice'
add('radios','shallow-bowl-choice',f'''/* One thin rim and one visible underside keep the shallow dish light. */
{r}{{--surface:#e8eceb;--paper:#f6f7f0;--selected:#fffef4;--ink:#405155;--muted:#58696c;--accent:#617f84;--edge:#a9bfbc}}
{r} .ff-choices{{gap:18px;padding:5px 2px}}
{r} .ff-choice{{padding:22px 24px 28px;min-height:102px}}
{r} .ff-choice::before{{inset:0 0 5px;border-radius:50% / 19px;border:1px solid #a8bab8;border-top-color:#dbe5de;box-shadow:inset 0 2px #d5e1da;background:var(--paper)}}
{r} .ff-choice::after{{inset:6px 1px 0;border-radius:50% / 19px;background:#9eafaa;border:0}}
{r} .ff-choice-check{{background:#f1f5ef}}
''')
r='.sop-foundation.sop-warm-plan-choice'
add('radios','warm-plan-choice',f'''/* Align the plan's title, details and price column for comparison. */
{r}{{--ff-base:#f5f1e8;--ff-panel:#fffdf7;--ff-ink:#403d36;--ff-muted:#645e53;--ff-accent:#746044;--ff-line:#c2b9a8;padding:18px;background:#f5f1e8;border-radius:0}}
{r} .ff-choices{{gap:0;border-block:1px solid #b8ae9a}}
{r} .ff-choice,{r} .ff-choice[data-selected=true]{{display:grid;grid-template-columns:24px minmax(0,1fr) minmax(55px,auto);gap:10px;min-height:88px;padding:18px 12px;border:0;border-bottom:1px solid #d4cbb9;border-radius:0;background:transparent}}
{r} .ff-choice[data-selected=true]{{background:#fffdf7;box-shadow:inset 3px 0 #746044}}
{r} .ff-choice:last-child{{border-bottom:0}}
{r} .ff-choice-check{{grid-column:1;grid-row:1;order:0;position:relative}}
{r} .ff-choice-copy{{grid-column:2;grid-row:1;min-width:0}}
{r} .ff-choice-copy strong{{font:600 15px/1.6 Georgia,'Yu Mincho',serif}}
{r} .ff-choice-copy small{{font-size:11px;line-height:1.7}}
{r} .ff-choice-badge{{grid-column:3;grid-row:1;font:12px/1.7 Consolas,monospace;text-align:end;white-space:normal;overflow-wrap:anywhere;max-width:90px;letter-spacing:0;color:#514735;border:0;background:none}}
@container(max-width:250px){{{r} .ff-choice,{r} .ff-choice[data-selected=true]{{grid-template-columns:24px minmax(0,1fr)}}{r} .ff-choice-badge{{grid-column:2;grid-row:2;text-align:start;max-width:none}}}}
@media(forced-colors:active){{{r} .ff-choice-badge{{color:CanvasText}}}}
''')
r='.sop-foundation.sop-letterbox-finder.sop-letterbox-finder'
add('comboboxes','letterbox-finder',f'''/* A thin folded mouth, a plain mail pocket, and one bottom fold. */
{r}{{--surface:#e8e3d8;--paper:#f9f5e9;--selected:#e9e3d4;--active:#f0e9da;--ink:#454941;--muted:#656b61;--accent:#6a796d;--edge:#b6bdac}}
{r} .ff-combo-shell{{border:1px solid #a9b09f;border-top:4px solid #8b9a88;border-radius:3px;box-shadow:none}}
{r} .ff-combo-list{{border-radius:3px!important;border:1px solid #aeb6a3!important;border-top:5px solid #8b9a88!important;padding:12px 12px 19px!important;background:#f9f5e9;box-shadow:0 12px 20px #18211c25}}
{r} .ff-combo-list::after{{height:8px;background:#c3cbb9;clip-path:polygon(0 0,100% 0,calc(100% - 7px) 100%,7px 100%)}}
{r} .ff-option{{padding:15px 9px;min-height:70px}}
{r} .ff-option::before{{border-bottom-color:#d3d7c9}}
''')
for id in ['soft-contact-finder','warm-library-finder']:
 r=f'.sop-foundation.sop-{id}';add('comboboxes',id,f'''{r} .ff-option strong{{font-size:13px;line-height:1.55;overflow-wrap:anywhere}}
{r} .ff-option small{{font-size:11px;line-height:1.6;overflow-wrap:anywhere}}
{r} .ff-menu-foot{{font-size:10px;letter-spacing:0}}
{r} .ff-option-badge{{font-size:10px;letter-spacing:0;overflow-wrap:anywhere}}
{r} .ff-option-icon{{flex:none}}
''')
r='.sop-foundation.sop-soft-contact-finder'
add('comboboxes','soft-contact-finder',f'''/* A contact directory: avatar, name and contact detail form one reading row. */
{r}{{--ff-base:#eef0f3;--ff-panel:#fff;--ff-ink:#3b4354;--ff-muted:#606a7b;--ff-accent:#626b8a;--ff-line:#b8c1cf;background:#eef0f3;border-radius:6px}}
{r} .ff-combo-shell{{border-radius:5px;box-shadow:none;background:#fff}}
{r} .ff-combo-list{{padding:6px;border-radius:5px}}
{r} .ff-option{{gap:12px;padding:12px 9px;border-radius:3px;min-height:74px}}
{r} .ff-option-icon{{width:32px;height:38px;border:0;border-radius:50%;position:relative;background:#e5e9f0}}
{r} .ff-option-icon svg{{display:none}}
{r} .ff-option-icon::before{{content:'';position:absolute;top:7px;left:12px;width:8px;height:8px;border:1px solid #71809a;border-radius:50%}}
{r} .ff-option-icon::after{{content:'';position:absolute;bottom:8px;left:8px;right:8px;height:9px;border:1px solid #71809a;border-radius:50% 50% 2px 2px}}
{r} .ff-option-badge{{display:none}}
{r} .ff-option-check{{width:14px;flex:none}}
''')
r='.sop-foundation.sop-warm-library-finder'
add('comboboxes','warm-library-finder',f'''/* Bibliographic entries separate the title/author from the shelf reference. */
{r}{{--ff-base:#efebe2;--ff-panel:#fffdf6;--ff-ink:#433f36;--ff-muted:#665e4f;--ff-accent:#78684a;--ff-line:#c7bca6;background:#efebe2;border-radius:0}}
{r} .ff-combo-shell{{border-radius:0;box-shadow:none;background:#fffdf6;border-bottom:2px solid #a7997e}}
{r} .ff-combo-list{{padding:8px 12px;border-radius:0}}
{r} .ff-option{{display:grid;grid-template-columns:22px minmax(0,1fr) 14px;gap:3px 10px;padding:13px 5px;border:0;border-bottom:1px solid #d9cfba;border-radius:0;min-height:90px}}
{r} .ff-option-icon{{grid-column:1;grid-row:1/3;width:20px;height:35px;border:1px solid #b5a588;border-inline-start:4px solid #9b8b6f;border-radius:0;color:#827254;background:#efe9d8}}
{r} .ff-option-icon svg{{width:13px;height:16px}}
{r} .ff-option>span:nth-child(2){{grid-column:2;grid-row:1}}
{r} .ff-option strong{{font-family:Georgia,'Yu Mincho',serif;font-size:14px}}
{r} .ff-option-badge{{grid-column:2;grid-row:2;text-align:start;justify-self:start;font-family:Consolas,monospace;border-top:1px solid #d5cbb9;padding-top:3px}}
{r} .ff-option-check{{grid-column:3;grid-row:1/3}}
''')
# Use purpose-specific example data in both runtimes; preserve caller-provided items.
for id,cat in [('soft-contact-finder','comboboxes'),('warm-library-finder','comboboxes'),('warm-plan-choice','radios')]:
 b=Path('src/parts')/cat/id
 for f in [b/'vanilla/init.ts',*list((b/'react').glob('*.tsx'))]:
  s=f.read_text();m=re.search(r'const config: FoundationConfig = (\{[\s\S]*?\n\});',s)
  if not m:continue
  c=json.loads(m[1])
  if id=='soft-contact-finder':
   c['label']='連絡先を探す';c['placeholder']='チーム名や連絡先を入力…'
   for i,item in enumerate(c['items']):
    item['label']=['Aurora Studio','Folio Works','Mercury Lab','Quiet Office','Archive Team'][i];item['description']=['制作 · hello@aurora.example','編集 · contact@folio.example','開発 · team@mercury.example','運営 · office@quiet.example','現在は選択できません'][i]
  elif id=='warm-library-finder':
   c['label']='ライブラリから選ぶ';c['placeholder']='書名や著者を入力…'
   for i,item in enumerate(c['items']):
    item['label']=['光と透明のかたち','紙と余白のノート','素材と構造の手帖','静かなデザイン','アーカイブ集'][i];item['description']=['Aurora 編集室 · 2025','Folio 編集室 · 2024','Mercury Lab · 2025','Quiet Office · 2023','刊行準備中'][i];item['badge']=['A-014','B-028','C-006','B-042','未刊'][i];item['icon']='file'
  else:
   c['label']='制作プランを選ぶ';c['description']='料金は展示用の例です。'
   for i,item in enumerate(c['items']):item['badge']=['¥0 / 月','¥980 / 月','¥1,980 / 月'][i]
  s=s[:m.start(1)]+json.dumps(c,ensure_ascii=False,indent=2)+s[m.end(1):];f.write_text(s)
 # The author markup for comboboxes has no option data; align its static labels.
 if cat=='comboboxes':
  for f in [b/'markup.html',b/'vanilla/index.html']:
   s=f.read_text().replace('次の素材を見つける',c['label']).replace('名前や素材を入力…',c['placeholder']);f.write_text(s)
# Radio markup contains authored option content; update its displayed example too.
b=Path('src/parts/radios/warm-plan-choice')
for f in [b/'markup.html',b/'vanilla/index.html']:
 s=f.read_text().replace('あなたの制作モード','制作プランを選ぶ')
 for old,new in [('01','¥0 / 月'),('02','¥980 / 月'),('03','¥1,980 / 月')]:s=s.replace('class="ff-choice-badge">'+old,'class="ff-choice-badge">'+new)
 s=s.replace('class="ff-description" data-ff-description></p>','class="ff-description" data-ff-description>料金は展示用の例です。</p>');f.write_text(s)
descriptions={
'pinstripe-range':('sliders','上下の横尺を挟む可動のバーニアと、中央の細い指示線を持つスライダー。目盛りの上に実際のキャリッジを通し、値を指す線とつかむ枠を分ける。'),
'enamel-peg-range':('sliders','明るいプレートからはっきり浮かぶ青灰の琺瑯ペグ。握る頭と細い軸を同じ素材で結び、ネイティブ入力の位置を見つけやすくする。'),
'loop-label-choice':('radios','カードの上端に細い糸を通した単一選択。綴じる糸をラジオ記号から離し、選択を示す丸を一つに保つ。'),
'clasp-band-choice':('radios','カードを包む布帯と、そこへ通した金属の留め具を持つ単一選択。選択時は帯が深くなり、留め具と本文の位置を動かさない。'),
'stapled-card-choice':('radios','薄い紙の束を、折った綴じ代と連続した金具で挟む単一選択。選択すると綴じ代が濃くなり、本文は静かな紙面に固定する。'),
'shallow-bowl-choice':('radios','一つの細い縁と下側の断面だけで深さを示す浅い器の選択欄。多重の光沢を減らし、ラベルを広い無地面へ置く。'),
'warm-plan-choice':('radios','プラン名・説明・料金欄を揃えて比較できる単一選択。狭幅では料金を説明の下へ置き、等しい行の構造を保つ。'),
'letterbox-finder':('comboboxes','薄く折った投入口と一つの底折りで郵便受けを示す候補一覧。太いアーチをなくし、候補の見出しと説明へ視線を戻す。'),
'soft-contact-finder':('comboboxes','人物記号・チーム名・連絡先を一行の読み順にまとめた検索選択。長いメール形式の説明も折り返し、選択位置は右端へ保つ。'),
'warm-library-finder':('comboboxes','書名・著者情報・棚番号を分ける書誌型の検索選択。小さな背表紙と書名を結び、棚番号を別行に置いて探しやすくする。')}
for id,(cat,new) in descriptions.items():
 b=Path('src/parts')/cat/id;m=b/'meta.json';d=json.loads(m.read_text());old=d['description'];short=d['tagline'];d['description']=new;d['tagline']=new.split('。')[0]+'。';m.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [b/'usage.md',b/'prompt.md',b/'styles.css',*list((b/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(w/'batches/B008/design.md').write_text('# B008 操作記号と素材の役割を分ける\n\n'+''.join(f'- {id}：{d[1]}\n' for id,d in descriptions.items())+'\nBの3件は用途に合う展示用データもVanilla/Reactで一致させる。呼び出し側がitemsを渡すAPIは維持。メールは予約済み.exampleで送信機能はない。価格は展示例と明記。\n')
