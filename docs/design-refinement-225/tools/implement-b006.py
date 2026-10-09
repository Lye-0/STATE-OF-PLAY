import json
from pathlib import Path
w=Path('docs/design-refinement-225')
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n'+css+'\n')
for id in ['book-jacket-segments','double-track-segments','bracket-seat-segments','satin-key-segments']:
 r=f'.sop-choice.sop-{id}.sop-{id}';add('segments',id,f'''/* Equal option widths also apply to incomplete wrapped rows. */
{r}>.sop-choice-list{{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,65px),1fr))}}
{r}>.sop-choice-list>.sop-choice-item{{min-width:0;padding-inline:6px}}
{r}[data-orientation=vertical]>.sop-choice-list{{display:flex}}
''')
r='.sop-choice.sop-satin-key-segments.sop-satin-key-segments'
add('segments','satin-key-segments',f'''/* One satin edge, with the highlight following that same surface. */
{r}>.sop-choice-list{{background:#eee7ea}}
{r}>.sop-choice-list>.sop-choice-item::before{{border-inline-width:1px;background:linear-gradient(100deg,#d5c7cd,#e8dfe3 48%,#d5c7cd)}}
{r}>.sop-choice-list>.sop-choice-item::after{{inset:4px 6px auto;height:1px;background:#fbf6f8;border:0;border-radius:0}}
''')
r='.sop-choice.sop-reading-mode-segments'
add('segments','reading-mode-segments',f'''/* A quiet reading selector: a ruled strip, with a folded bookmark for the current mode. */
{r}{{--choice-ink:#403d38;--choice-muted:#69635a;--choice-on:#403d38;--choice-accent:#806f54}}
{r}>.sop-choice-list{{grid-template-columns:repeat(auto-fit,minmax(min(100%,65px),1fr));gap:0;padding:0;border:1px solid #bcb3a3;border-radius:0;background:#f2eee5}}
{r}>.sop-choice-list>.sop-choice-item{{min-height:52px;border:0;border-inline-end:1px solid #cfc6b6;border-radius:0;padding:14px 9px;font-family:Georgia,'Yu Mincho',serif;background:transparent}}
{r}>.sop-choice-list>.sop-choice-item:last-of-type{{border-inline-end:0}}
{r} .sop-choice-dot,{r} .sop-choice-marker{{display:none}}
{r}>.sop-choice-list>.sop-choice-item::before{{content:'';position:absolute;top:0;right:7px;width:7px;height:10px;background:#806f54;clip-path:polygon(0 0,100% 0,100% 100%,50% 75%,0 100%);opacity:0;transition:opacity .2s;pointer-events:none}}
{r}>.sop-choice-list>.sop-choice-item:hover{{background:#e6e0d4}}
{r}>.sop-choice-list>.sop-choice-item[data-selected=true]{{background:#fffdf7;font-weight:600}}
{r}>.sop-choice-list>.sop-choice-item[data-selected=true]::before{{opacity:1}}
{r}[data-orientation=vertical]>.sop-choice-list{{display:flex}}
@media(forced-colors:active){{{r}>.sop-choice-list>.sop-choice-item::before{{display:none}}}}
''')
# Each checkbox keeps the native input and one unambiguous check/dash, but has its own assembly.
r='.sop-check.sop-crossbar-check.sop-crossbar-check'
add('checkboxes','crossbar-check',f'''/* A suspended plate held by opposed crossbars. */
{r}{{--cb-bg:#e9edf0;--cb-ink:#34424d;--cb-muted:#566570;--cb-accent:#345e77;--cb-pad:28px;padding:28px;gap:28px}}
{r}>.sop-check-box{{border:0;border-radius:0;background:#fffdf7;box-shadow:0 3px 0 #9aaeb9!important}}
{r} .sop-check-aura{{inset:-12px -10px; width:auto;height:auto;border:0;border-inline:3px solid #6d8799;background:linear-gradient(#a4b6c2,#a4b6c2) center 8px/100% 4px no-repeat,linear-gradient(#a4b6c2,#a4b6c2) center calc(100% - 8px)/100% 4px no-repeat;z-index:-2}}
{r} .sop-check-detail{{inset:9px auto 9px -7px;width:8px;height:auto;border:0;background:#526f85;border-radius:2px;transition:translate .3s,background .2s}}
{r} .sop-check-detail::after{{content:'';position:absolute;inset:0;translate:54px 0;background:inherit;border-radius:inherit}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box{{background:#f5f8f7;border:0}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box .sop-check-detail{{translate:3px 0}}
{r}:hover .sop-check-aura{{border-inline-color:#345e77}}
''')
r='.sop-check.sop-ceramic-stamp-check.sop-ceramic-stamp-check'
add('checkboxes','ceramic-stamp-check',f'''/* An octagonal biscuit edge around the inset glazed stamp. */
{r}{{--cb-bg:#eeeae2;--cb-ink:#494139;--cb-muted:#6a5f53;--cb-accent:#795334;--cb-pad:26px;padding:26px;gap:26px}}
{r}>.sop-check-box{{border:0;border-radius:5px;background:#faf7eb;box-shadow:inset 0 2px 0 #e1d5c0!important}}
{r} .sop-check-aura{{display:block;inset:-7px -8px -10px;width:auto;height:auto;border:0;border-radius:0;background:linear-gradient(120deg,#c1ac8c,#e4d4b9 45%,#b99f7c);clip-path:polygon(15% 0,85% 0,100% 15%,100% 85%,85% 100%,15% 100%,0 85%,0 15%);z-index:-2}}
{r} .sop-check-detail{{display:block;inset:0;border:1px solid #dfd2b8;border-radius:5px;background:radial-gradient(#b5a17e55 .6px,transparent .8px) 0 0/7px 9px;opacity:.35;z-index:-1}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box{{background:#eee2c6;border-color:transparent;box-shadow:inset 0 2px 0 #c9b894!important}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box .sop-check-detail{{opacity:.35}}
''')
r='.sop-check.sop-ladder-seat-check.sop-ladder-seat-check'
add('checkboxes','ladder-seat-check',f'''/* Two continuous rails support the seat and the two rungs below it. */
{r}{{--cb-bg:#e7eded;--cb-ink:#344850;--cb-muted:#536a73;--cb-accent:#3e687a;--cb-pad:29px;padding:29px;gap:25px;min-height:126px}}
{r}>.sop-check-box{{border:0;border-block:3px solid #7897a5;border-radius:0;background:#f7f7ee}}
{r} .sop-check-aura{{display:block;inset:-11px -7px -24px;border:0;border-inline:4px solid #7593a1;width:auto;height:auto;border-radius:0;background:linear-gradient(#a6bbc3,#a6bbc3) center calc(100% - 13px)/100% 3px no-repeat,linear-gradient(#a6bbc3,#a6bbc3) center calc(100% - 3px)/100% 3px no-repeat;z-index:-2}}
{r} .sop-check-detail{{inset:auto -7px -4px;height:7px;width:auto;clip-path:none;border:0;background:#4f7589;transition:translate .3s}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box .sop-check-detail{{translate:0 -3px}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box{{background:#e1eceb;border-color:#3e687a}}
''')
r='.sop-check.sop-inset-lens-check.sop-inset-lens-check'
add('checkboxes','inset-lens-check',f'''/* A circular optical recess, seated inside a square instrument bezel. */
{r}{{--cb-bg:#dfe8ed;--cb-ink:#304654;--cb-muted:#506875;--cb-accent:#254e67;--cb-pad:27px;padding:27px;gap:28px}}
{r}>.sop-check-box{{border:2px solid #6d8c9e;border-radius:50%;background:radial-gradient(ellipse at 28% 20%,#f6ffff,#c9e0e7 65%,#9ebcc9);box-shadow:inset 2px 3px 0 #ffffffb0,inset -2px -3px 0 #64879966!important}}
{r} .sop-check-aura{{inset:-7px;border:1px solid #9caeba;border-radius:4px;background:linear-gradient(135deg,#f1f3ed,#b3c6d1);z-index:-2;box-shadow:none!important}}
{r} .sop-check-detail{{left:8px;top:5px;width:22px;height:9px;border:0;border-top:2px solid #fff;border-radius:50%;background:none;rotate:-24deg;opacity:.85;transition:rotate .3s}}
{r}:hover .sop-check-detail{{rotate:-5deg}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box{{background:radial-gradient(ellipse at 28% 20%,#f6ffff,#add2df 65%,#7099b1);border-color:#4c748d;box-shadow:inset 2px 3px 0 #ffffffb0,inset -2px -3px 0 #64879966!important}}
''')
r='.sop-check.sop-switchyard-check.sop-switchyard-check'
add('checkboxes','switchyard-check',f'''/* A switch plate beside the fork of a real connected rail shape. */
{r}{{--cb-bg:#e9e6de;--cb-ink:#3f4748;--cb-muted:#5b6566;--cb-accent:#456976;--cb-pad:30px;padding:30px;gap:28px;min-height:124px}}
{r}>.sop-check-box{{border:0;border-radius:2px;background:#fbfaf1;box-shadow:0 3px 0 #a1aaa8!important}}
{r} .sop-check-aura{{inset:-13px -10px -17px;width:auto;height:auto;background:repeating-linear-gradient(0deg,transparent 0 12px,#b4b6aa 12px 16px);border-inline:3px solid #6c7d7b;clip-path:none;z-index:-2}}
{r} .sop-check-detail{{left:4px;top:auto;right:auto;bottom:-14px;width:40px;height:3px;background:#53747b;clip-path:none;border:0;transform:rotate(-32deg);transform-origin:3px 50%;transition:transform .35s;border-radius:0}}
{r} .sop-check-detail::before{{content:'';position:absolute;left:-3px;top:-3px;width:9px;height:9px;border:2px solid #d4d7cc;border-radius:50%;background:#53747b}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box .sop-check-detail{{transform:rotate(0deg)}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box{{background:#e6eee9;border-color:transparent}}
''')
descriptions={
 'reading-mode-segments':('segments','読み方を選ぶ静かな罫線付きの帯。選択位置には小さなしおりを置き、文字を動かさずに淡い紙面で状態を伝える。'),
 'crossbar-check':('checkboxes','二本の支柱と横桟に支えられた確認プレート。左右の留め具が閉じて状態を支え、中央のチェックと文字は動かさない。'),
 'ceramic-stamp-check':('checkboxes','八角の焼き締めた縁に、凹んだ釉薬面を収めた陶の確認印。微細な素地と釉薬の境界で素材を表し、チェックを明瞭に表示する。'),
 'ladder-seat-check':('checkboxes','二本の連続した桁と二段の横木が確認面を支える梯子。選択で座の下の受けだけが締まり、文字とチェックの位置は固定する。'),
 'inset-lens-check':('checkboxes','四角い計器の座に円形の光学レンズを収めたチェック。曲面の縁と弧状の反射で凹凸を示し、選択と混在状態の印は中央で明瞭に読む。'),
 'switchyard-check':('checkboxes','枕木と連続するレールの上に確認プレートを置き、下の分岐レバーで状態を表す。チェックの位置を固定し、レバーだけを滑らかに接続する。')}
for id,(cat,new) in descriptions.items():
 b=Path('src/parts')/cat/id;m=b/'meta.json';d=json.loads(m.read_text());old=d['description'];short=d['tagline'];d['description']=new;d['tagline']=new.split('。')[0]+'。';m.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [b/'usage.md',b/'prompt.md',b/'styles.css',*list((b/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(w/'batches/B006/design.md').write_text('''# B006 同じ面積と接続された機構

R181/183/184/185は選択肢の幅を揃える。R185は多重の桃色ハイライトを一つのサテン面と上の反射線へ減らす。
R189は罫線付きの読書モード帯と選択中のしおりへ変更。
R194は支柱・横桟・左右の留め具が支える確認板。R195は八角の焼き締め縁と凹んだ釉薬面。R198は連続した桁と横木で座を支える。R200は四角い計器に収めた円形光学レンズ。R203は枕木とレール、下端の分岐レバーへ。
ネイティブcheckboxとチェック/混在ダッシュを維持し、文字とクリック領域を動かさない。装飾はpointer-events:none。ホバー、checked/indeterminate/disabled、Space/FormData/reset、狭幅/長文/forced/reducedを検査する。
''')
