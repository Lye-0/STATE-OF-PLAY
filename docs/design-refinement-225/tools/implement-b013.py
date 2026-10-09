import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B013';b.mkdir(exist_ok=True)
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
def root(id):return '.sop-foundation.sop-'+id+'.sop-'+id
id='warm-reading-trail';r=root(id)
add('breadcrumbs',id,f'''
{r}{{--ff-base:#f5f0e6;--ff-panel:#fffdf5;--ff-ink:#584b37;--ff-muted:#77674f;--ff-accent:#80643e;--ff-line:#cebea0;background:#fffdf5;padding:22px;border-radius:0}}
{r} .ff-heading{{font:13px/1.7 Georgia,'Yu Mincho',serif}}
{r} .ff-breadcrumb{{padding:12px 0 0;border:0;border-top:1px solid #c1ac89;border-radius:0;background:none}}
{r} .ff-breadcrumb ol{{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:0}}
{r} .ff-breadcrumb li{{font:12px/1.8 Georgia,'Yu Mincho',serif}}
{r} .ff-breadcrumb li:last-child{{flex-basis:100%;margin-top:5px;padding-block:12px;border-bottom:1px solid #d8c9ae}}
{r} .ff-breadcrumb [aria-current=page]{{font:600 23px/1.5 Georgia,'Yu Mincho',serif;color:#584b37}}
{r} .ff-crumb-more{{min-height:30px;border:0;border-bottom:1px solid #baa17b;background:none;border-radius:0;color:#745a36}}
''')
id='loop-label-tags';r=root(id)
add('badges',id,f'''
{r}{{--paper:#f7eff3;--ink:#5b4053;--muted:#715b68;--accent:#79506a;--edge:#cfb5c5}}
{r} .ff-tags{{padding-inline-start:8px}}
{r} .ff-tag{{padding-inline:32px 14px;min-height:58px}}
{r} .ff-tag::before{{inset:0;background:#fff7fa;border:0;border-bottom:3px solid #d2b3c5;border-radius:5px;mask:radial-gradient(circle 4px at 14px 50%,transparent 98%,#000 100%)}}
{r} .ff-tag::after{{content:'';display:block;position:absolute;inset:auto;inset-inline-start:-8px;top:calc(50% - 9px);width:26px;height:18px;border:2px solid #ad819a;border-radius:50%;background:none;z-index:0;pointer-events:none}}
{r} .ff-tag[data-selected=true]::before{{background:#f0dbe7;border-bottom-color:#9a6e86}}
{r}:dir(rtl) .ff-tag{{padding:12px 32px 12px 14px}}
''')
id='instrument-tags';r=root(id)
add('badges',id,f'''
{r}{{--paper:#eef3f3;--ink:#354e5b;--muted:#556d78;--accent:#416c80;--edge:#b2c7ce}}
{r} .ff-tag{{padding:13px 12px 13px 16px;min-height:62px;background:#e1ebed;border:1px solid #a5bcc6;border-top:3px solid #c7d8dd;border-bottom:3px solid #819eac;gap:12px}}
{r} .ff-tag small{{background:#f4f8f5;color:#395d70;border:1px solid #b2c7ce;border-top:2px solid #7c9baa;padding:6px 9px;font:600 15px/1.4 ui-monospace,monospace;min-width:40px;align-self:center}}
{r} .ff-tag[data-selected=true]{{background:#cbdde4;color:#354e5b;border-bottom-color:#547c90}}
{r} .ff-tag[data-selected=true] small{{background:#e9f2f1;color:#2d5365}}
{r}:dir(rtl) .ff-tag small{{padding:6px 9px}}
''')
id='bracket-tags';r=root(id)
add('badges',id,f'''
{r}{{--ink:#405563;--muted:#5c707c;--accent:#4b7085}}
{r} .ff-tag{{padding:14px 14px 14px 32px;min-height:66px}}
{r} .ff-tag::before{{width:27px;background:#91aebe;border-top:4px solid #d3e2e8;border-bottom:4px solid #67879c;clip-path:polygon(0 0,100% 0,100% 20%,24% 20%,24% 80%,100% 80%,100% 100%,0 100%)}}
{r} .ff-tag::after{{inset:7px 0 7px 17px;background:#f7faf8;border-bottom:3px solid #c2d3d9}}
{r}:dir(rtl) .ff-tag{{padding:14px 32px 14px 14px}}{r}:dir(rtl) .ff-tag::after{{inset:7px 17px 7px 0}}
''')
id='drafting-note-tags';r=root(id)
add('badges',id,f'''
{r}{{--ink:#3b5665;--muted:#57717f;--accent:#47778e}}
{r} .ff-tag{{padding:26px 14px 20px 31px;min-height:86px}}
{r} .ff-tag::before{{inset:12px 0 8px 18px;background:#eef6f5;border-top:2px solid #d6e6e7;border-bottom:3px solid #b3cdd5;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)}}
{r} .ff-tag::after{{inset:0 10px 0 0;background:linear-gradient(#7b9caa,#7b9caa) 10px 0/1px 100% no-repeat,linear-gradient(#7b9caa,#7b9caa) 0 7px/100% 1px no-repeat;border:0;clip-path:none}}
{r}:dir(rtl) .ff-tag{{padding:26px 31px 20px 14px}}{r}:dir(rtl) .ff-tag::before{{inset:12px 18px 8px 0}}
''')
id='ribbon-end-tags';r=root(id)
add('badges',id,f'''
{r}{{--paper:#f7edf3;--ink:#64465a;--muted:#775e6f;--accent:#855b74}}
{r} .ff-tags{{gap:16px}}
{r} .ff-tag{{padding:16px 28px 18px 18px;min-height:66px;background:none;border:0;border-radius:0;isolation:isolate}}
{r} .ff-tag::before{{inset:0 12px 0 0;width:auto;display:block;border:0;border-block:2px solid #d9b9cd;border-radius:0;background:linear-gradient(#f6e2ee,#fceff7);transform:none;z-index:-1}}
{r} .ff-tag::after{{inset:8px 0 -8px auto;width:24px;background:#c69ab5;border:0;border-radius:0;transform:none;clip-path:polygon(0 0,100% 0,100% 100%,50% calc(100% - 9px),0 100%);z-index:-2}}
{r} .ff-tag[data-selected=true]{{background:none;color:#64465a}}
{r} .ff-tag[data-selected=true]::before{{background:#ead1e1;transform:none}}
{r} .ff-tag[data-selected=true]::after{{background:#b27e9c;transform:none}}
{r}:dir(rtl) .ff-tag{{padding:16px 18px 18px 28px}}{r}:dir(rtl) .ff-tag::before{{inset:0 0 0 12px}}{r}:dir(rtl) .ff-tag::after{{inset:8px auto -8px 0}}
''')
id='letterpress-tags';r=root(id)
add('badges',id,f'''
{r}{{--paper:#f5efdf;--ink:#58442e;--muted:#746149;--accent:#7b5935;--edge:#c8b28b}}
{r} .ff-tag{{padding:14px 16px;min-height:68px;border:0;border-inline:2px solid #bca680;border-bottom:5px solid #b59b71;background:radial-gradient(#72593a18 .5px,transparent .8px) 0 0/7px 9px,#fff9e9;box-shadow:inset 0 1px #e5d4b7,inset 0 -1px #fffdf4}}
{r} .ff-tag label>span,{r} .ff-tag>span{{font:600 16px/1.5 Georgia,'Yu Mincho',serif;letter-spacing:.01em;text-shadow:0 1px #fffdf3}}
{r} .ff-tag small{{font:12px/1.6 ui-monospace,monospace;border-inline-start:1px solid #bba17b;padding-inline-start:9px}}
{r} .ff-tag[data-selected=true]{{background:#eee1c7;color:#58442e;border-bottom-color:#85633c;box-shadow:inset 0 2px #b9a17b,inset 0 -1px #fff5dc}}
''')
id='warm-category-tags';r=root(id)
add('badges',id,f'''
{r}{{--ff-base:#f6f1e7;--ff-panel:#fffdf4;--ff-ink:#5b4c35;--ff-muted:#79684e;--ff-accent:#806239;--ff-line:#cbb996;background:#fffdf4;padding:20px;border-radius:0}}
{r} .ff-tags{{display:flex;flex-wrap:wrap;gap:0 16px}}
{r} .ff-tag{{border:0;border-radius:0;border-bottom:1px solid #cbb996;padding:10px 0;gap:9px;background:none;min-height:44px}}
{r} .ff-tag label>span,{r} .ff-tag>span{{font:15px/1.7 Georgia,'Yu Mincho',serif}}
{r} .ff-tag small{{font:11px/1.6 ui-monospace,monospace;color:#756246}}
{r} .ff-tag[data-selected=true]{{background:#f2e8d4;color:#5b4c35;border-bottom:2px solid #806239}}
{r} .ff-tag button{{width:28px;height:28px;color:#79684e}}
''')
# Keep both controls physically attached to the reading face at every width.
for id in ['stitched-count-number','open-jaw-number']:
 r=root(id);p=Path('src/parts/numbers')/id/'styles.css';p.write_text(p.read_text()+f'''\n{r} .ff-stepper{{grid-template-columns:44px minmax(0,1fr) 44px;gap:6px;align-items:center;min-height:0}}
{r} .ff-number-face{{grid-column:2;grid-row:1;min-height:110px;width:100%;max-width:none;margin:0;padding:18px 3px}}
{r} .ff-stepper>button[data-adjust="-1"]{{grid-column:1;grid-row:1}}{r} .ff-stepper>button[data-adjust="1"]{{grid-column:3;grid-row:1}}
{r} [data-number]{{font-size:clamp(22px,8cqi,32px);min-width:0}}{r} .ff-unit{{font-size:10px;overflow-wrap:anywhere;letter-spacing:0}}
''')
id='stitched-count-number';r=root(id)
add('numbers',id,f'''
{r}{{--ink:#564261;--muted:#6c5878;--accent:#79588f}}
{r} .ff-stepper{{padding:18px 6px;gap:6px}}
{r} .ff-stepper::before{{inset:4px 0;clip-path:polygon(0 0,22% 0,32% 16px,68% 16px,78% 0,100% 0,100% 100%,78% 100%,68% calc(100% - 16px),32% calc(100% - 16px),22% 100%,0 100%);border-top:4px solid #e8ddef;border-bottom:5px solid #b599c7}}
{r} .ff-stepper::after{{inset:10px 6px;border-block:1px dashed #9879aa;background:none;mask:none;clip-path:none}}
{r} .ff-number-face{{background:none;border:0}}
{r} .ff-stepper>button{{height:44px;border:3px solid #b398c6;background:#f4eaf7;color:#634b70}}
''')
id='open-jaw-number';r=root(id)
add('numbers',id,f'''
{r}{{--ink:#364f5b;--muted:#5d747e;--accent:#486c7d}}
{r} .ff-stepper{{gap:0;padding-block:16px;align-items:stretch}}
{r} .ff-number-face{{min-height:116px;padding:28px 4px}}
{r} .ff-number-face::before,{r} .ff-number-face::after{{left:0;right:0;height:20px;border-inline:0;border-top-width:5px;border-bottom-width:5px}}
{r} .ff-stepper>button{{height:auto;min-height:116px;width:44px;border-radius:0;border-top:5px solid #9eb9c5;border-bottom:5px solid #3c5d6d;background:#638593;color:#fff}}
{r} .ff-stepper>button::before{{display:none}}
''')
descriptions={
'warm-reading-trail':('breadcrumbs','親のパスから現在の章見出しへつなぐ読書向けの経路表示。明朝体と細い罫線で、本文の冒頭へ馴染ませる。'),
'loop-label-tags':('badges','札の穴へ細い輪を通したタグ。丸いピルをやめ、輪・穴・読み面の位置関係を明確にする。'),
'instrument-tags':('badges','項目名の脇に、小さな凹んだ数値窓を持つ計器札。件数とラベルを異なる面へ置き、選択状態も面の濃さで示す。'),
'bracket-tags':('badges','薄いコの字金具で読み面を挟むタグ。留め具の幅と厚みを抑え、文字と操作の領域を広く保つ。'),
'drafting-note-tags':('badges','細い製図の補助線に揃えた小さな札。大きな十字を除き、紙面の切り欠きと文字の基準位置を示す。'),
'ribbon-end-tags':('badges','読み面の背後で折り返し、末端がのぞくリボンタグ。本文は平らな表面に保ち、折り目を操作領域から離す。'),
'letterpress-tags':('badges','活字を押した紙と、下端の厚みを持つタグ。書体・微細な紙肌・押し込みの影を揃え、文字の読みやすさを保つ。'),
'warm-category-tags':('badges','本文に添える索引語のようなカテゴリタグ。大きな箱を持たず、語句・件数・解除操作を細い下線でまとめる。'),
'stitched-count-number':('numbers','短い布帯の中央に数値、両端に増減操作を置く数量入力。狭幅でも三つを同じ軸へ保ち、腰が伸び過ぎない比率にする。'),
'open-jaw-number':('numbers','上下の顎と左右の増減キーで数値面を囲む数量入力。狭幅でもキーを下段へ分離せず、枠と操作を連続させる。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B013 小さな情報を支える構造\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
