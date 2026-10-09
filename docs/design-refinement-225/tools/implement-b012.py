import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B012';b.mkdir(exist_ok=True)
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
def root(id):return '.sop-foundation.sop-'+id+'.sop-'+id
id='slatted-pages';r=root(id)
add('pagination',id,f'''
{r}{{--paper:#edf0eb;--ink:#3c4c50;--muted:#5b6b6a;--accent:#4e737c;--edge:#b0c3c4}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:4px;padding:8px 3px 14px;min-height:0;background:none;border-block:2px solid #a7bdbe;scrollbar-width:thin}}
{r} .ff-page-window :is(button,a){{flex:0 0 36px;min-width:36px;width:auto;height:88px;border:0;border-inline:3px solid #c8d7d5;background:linear-gradient(90deg,#e3eae2,#f3f4e9);color:#3c5159;padding:0;justify-items:center;border-radius:0;position:relative;isolation:isolate}}
{r} .ff-page-window [aria-current=page]{{background:#4e737c;border-inline-color:#76959d;color:#fff;box-shadow:inset 0 5px #a6bdc2,inset 0 -5px #365660}}
{r} .ff-page-window :is(button,a)::after{{content:'';display:block;position:absolute;inset:6px 0 auto;height:1px;background:#a7bdbe;pointer-events:none}}
{r} .ff-ellipsis{{flex:0 0 20px;height:88px;min-width:20px}}
{r} .ff-pages[data-layout=anchored]>:is(button,a){{border:0;border-inline:3px solid #b6cccd;background:#e0e9e4;color:#42606a}}
''')
id='bookplate-pages';r=root(id)
add('pagination',id,f'''
{r}{{--paper:#f6f0e3;--ink:#584632;--muted:#72634e;--accent:#80623d;--edge:#c4b08d}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:0;min-height:0;padding:18px 8px 25px;border:0;border-inline-start:4px solid #b39c77;background:#fffaf0;box-shadow:inset 0 -4px #dac9aa;scrollbar-width:thin}}
{r} .ff-page-window :is(button,a){{flex:0 0 38px;width:auto;min-width:38px;height:60px;border:0;border-inline-end:1px solid #ded1b8;border-radius:0;background:none;color:#584632;font:18px/1.3 Georgia,serif;position:relative;isolation:isolate}}
{r} .ff-page-window [aria-current=page]{{color:#fff;background:#80623d;border-color:#80623d}}
{r} .ff-page-window [aria-current=page]::after{{content:'';display:block;position:absolute;inset:100% 0 auto;height:12px;background:#80623d;clip-path:polygon(0 0,100% 0,100% 100%,50% 60%,0 100%);pointer-events:none}}
{r} .ff-page-window::before,{r} .ff-page-window::after{{display:none}}
{r} .ff-ellipsis{{flex:0 0 20px;height:60px}}
''')
for id in ['soft-reading-pages','line-navigation-pages','warm-book-pages']:
 r=root(id);p=Path('src/parts/pagination')/id/'styles.css';p.write_text(p.read_text()+f'\n{r} .ff-pages[data-layout=anchored]>.ff-page-window{{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;min-height:0;gap:3px;scrollbar-width:thin;padding:3px 2px 9px}}{r} .ff-page-window :is(button,a){{flex:0 0 34px;min-width:34px;width:auto}}{r} .ff-page-window .ff-ellipsis{{flex:0 0 18px;min-width:18px}}\n')
id='soft-reading-pages';r=root(id)
add('pagination',id,f'''
{r}{{--ff-base:#f4f0f1;--ff-panel:#fffafb;--ff-ink:#50434a;--ff-muted:#6f6069;--ff-accent:#80586f;--accent:#80586f;--ff-line:#d1bfc8;background:#f4f0f1;padding:18px}}
{r} .ff-pages[data-layout=anchored]{{gap:12px;min-height:0;grid-template-columns:1fr 1fr;padding:14px 0 0}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{grid-column:1/-1;grid-row:2;border-top:1px solid #d1bfc8;padding-top:12px;justify-content:safe center}}
{r} .ff-pages[data-layout=anchored]>:is(button,a){{grid-row:1;width:100%;height:44px;border:1px solid #c4acba;border-radius:5px;background:#fffafb;color:#704c60}}
{r} .ff-pages[data-layout=anchored]>:first-child{{grid-column:1}}{r} .ff-pages[data-layout=anchored]>:last-child{{grid-column:2}}
{r} .ff-page-window :is(button,a){{border:0;border-radius:50%;background:none;height:34px;min-height:34px}}
{r} .ff-page-window [aria-current=page]{{background:#80586f;color:#fff}}
{r} .ff-page-info{{font-size:13px;margin-top:10px;color:#6f6069}}
''')
id='line-navigation-pages';r=root(id)
add('pagination',id,f'''
{r}{{--ff-base:#f0f3f2;--ff-panel:#fafcf7;--ff-ink:#3c4d50;--ff-muted:#5d6f70;--ff-accent:#496f77;--accent:#496f77;--ff-line:#b6c8c8;background:#fafcf7;padding:18px;border-radius:0}}
{r} .ff-pages[data-layout=anchored]{{grid-template-columns:32px minmax(0,1fr) 32px;min-height:0;gap:5px;border-block:1px solid #b6c8c8;padding:10px 0}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{grid-column:2;grid-row:1;padding:0 0 7px;align-items:center}}
{r} .ff-pages[data-layout=anchored]>:is(button,a){{grid-row:1;width:32px;height:40px;border:0;background:none;color:#496f77}}
{r} .ff-page-window :is(button,a){{border:0;border-radius:0;height:40px;background:none}}
{r} .ff-page-window [aria-current=page]{{background:none;color:#365761;border-bottom:3px solid #496f77;font-weight:700}}
{r} .ff-page-info{{text-align:end;font-size:12px;padding-top:8px}}
''')
id='warm-book-pages';r=root(id)
add('pagination',id,f'''
{r}{{--ff-base:#f5f0e6;--ff-panel:#fffdf4;--ff-ink:#584a35;--ff-muted:#75664d;--ff-accent:#80633b;--accent:#80633b;--ff-line:#cdbc9e;background:#fffdf4;border-radius:0;padding:22px}}
{r} .ff-heading{{font:600 15px/1.7 Georgia,'Yu Mincho',serif}}
{r} .ff-pages[data-layout=anchored]{{border-top:1px solid #b9a380;min-height:0;padding-top:14px}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{gap:0;border-bottom:1px solid #d8c9ae;padding-bottom:14px;justify-content:safe center}}
{r} .ff-page-window :is(button,a){{font:18px/1.3 Georgia,serif;background:none;border:0;border-inline-end:1px solid #e4d8c1;border-radius:0;height:40px}}
{r} .ff-page-window [aria-current=page]{{background:#eee3cd;color:#584a35;border-bottom:2px solid #80633b}}
{r} .ff-pages[data-layout=anchored]>:is(button,a){{background:none;border:0;border-bottom:1px solid #b9a380;border-radius:0;color:#80633b}}
{r} .ff-page-info{{font:28px/1.4 Georgia,serif;text-align:center}}
''')
id='stone-path-trail';r=root(id)
add('breadcrumbs',id,f'''
{r}{{--paper:#eef1e7;--ink:#435440;--muted:#64715b;--accent:#596f4b;--edge:#b7c6a4}}
{r} .ff-breadcrumb ol{{padding:0 0 0 10px;background:none}}
{r} .ff-breadcrumb li{{min-height:54px;padding:12px 18px;margin:0 0 12px}}
{r} .ff-breadcrumb li:nth-child(2){{margin-inline-start:12px}}{r} .ff-breadcrumb li:nth-child(n+3){{margin-inline-start:24px}}
{r} .ff-breadcrumb li::before{{border-top:3px solid #eef3e2;border-bottom:4px solid #adbd97;border-radius:12px 3px 12px 3px;background:#dfe7d1}}
{r} .ff-breadcrumb li:not(:first-child)::after{{inset:auto;inset-inline-start:-13px;top:-21px;width:18px;height:44px;border:0;border-inline-start:2px solid #8fa178;border-bottom:2px solid #8fa178;background:none;z-index:0}}
{r} .ff-breadcrumb li:first-child::after{{display:none}}
{r} .ff-breadcrumb li:last-child::before{{background:#f8faed;border-bottom-color:#738a5f}}
{r} .ff-breadcrumb [aria-current=page]{{font-size:17px;color:#435440}}
{r}:dir(rtl) .ff-breadcrumb ol{{padding:0 10px 0 0;background:none}}
''')
id='perforated-path-trail';r=root(id)
add('breadcrumbs',id,f'''
{r}{{--ink:#634c38;--muted:#7a634e}}
{r} .ff-breadcrumb ol{{padding:0 5px}}
{r} .ff-breadcrumb li{{margin-bottom:0;min-height:54px;padding:14px 18px}}
{r} .ff-breadcrumb li::before{{border-bottom:1px dashed #bfa17e;mask:radial-gradient(circle 4px at 0 100%,transparent 98%,#000 100%),radial-gradient(circle 4px at 100% 100%,transparent 98%,#000 100%);mask-composite:intersect}}
{r} .ff-breadcrumb li:not(:last-child)::after{{display:none}}
{r} .ff-breadcrumb li:last-child{{margin-inline-start:18px;margin-top:12px}}
{r} .ff-breadcrumb li:last-child::after{{content:'';display:block;position:absolute;inset-inline-start:-10px;top:-12px;width:16px;height:38px;border-inline-start:1px solid #aa8560;border-bottom:1px solid #aa8560;background:none;mask:none;z-index:0}}
{r} .ff-breadcrumb li:last-child::before{{border-bottom:3px solid #c2a27f;background:#fff8eb}}
''')
id='stitched-route-trail';r=root(id)
add('breadcrumbs',id,f'''
{r}{{--paper:#f5edf1;--ink:#594353;--muted:#705d6b;--accent:#875c77;--edge:#c8adbd}}
{r} .ff-breadcrumb ol{{padding:0 0 0 22px;background:none}}
{r} .ff-breadcrumb li{{padding:12px 14px;min-height:52px;margin:0;position:relative}}
{r} .ff-breadcrumb li::before{{inset:0;background:#fcf5f8;border:0;border-bottom:1px solid #dbc7d2;mask:none}}
{r} .ff-breadcrumb li::after{{inset:auto;inset-inline-start:-12px;top:0;width:13px;height:100%;border:0;border-inline-start:2px dashed #a07893;border-bottom:1px dashed #a07893;clip-path:none;background:none;z-index:0}}
{r} .ff-breadcrumb li:last-child{{margin-inline-start:14px;margin-top:12px;padding-block:17px}}
{r} .ff-breadcrumb li:last-child::after{{top:-12px;height:calc(50% + 12px);width:27px;inset-inline-start:-26px}}
{r} .ff-breadcrumb li:last-child::before{{border-inline-start:3px solid #a07893;background:#f3e4ee}}
{r} .ff-breadcrumb [aria-current=page]{{color:#594353;font-size:17px}}
{r}:dir(rtl) .ff-breadcrumb ol{{padding:0 22px 0 0;background:none}}{r}:dir(rtl) .ff-breadcrumb li{{padding:12px 14px}}{r}:dir(rtl) .ff-breadcrumb li::after{{transform:none}}
''')
id='looped-route-trail';r=root(id)
add('breadcrumbs',id,f'''
{r}{{--paper:#f5ecf2;--ink:#60475a;--muted:#755f6f;--accent:#885f7b;--edge:#c9adbf}}
{r} .ff-breadcrumb ol{{padding:0 0 0 42px}}
{r} .ff-breadcrumb ol::before{{display:none}}
{r} .ff-breadcrumb li{{min-height:58px;padding:14px 10px;border-bottom:1px solid #d8c1cf;position:relative}}
{r} .ff-breadcrumb li::before{{display:block;inset:auto;inset-inline-start:-34px;top:calc(50% - 12px);width:26px;height:24px;border:3px solid #af8ba3;border-radius:50%;background:none;mask:none;box-shadow:inset 0 1px #ecd9e4;z-index:0}}
{r} .ff-breadcrumb li:not(:last-child)::after{{content:'';display:block;position:absolute;inset:auto;inset-inline-start:-22px;top:calc(50% + 12px);width:2px;height:calc(50% + 17px);background:#b999ae;z-index:0}}
{r} .ff-breadcrumb li:last-child{{margin-top:0;padding:18px 14px;min-height:70px;background:#f9eff5;border-bottom:3px solid #c1a1b7}}
{r} .ff-breadcrumb li:last-child::before{{inset-inline-start:-34px;top:calc(50% - 12px);width:26px;height:24px;background:#ead6e3;border:3px solid #956e88;border-radius:50%;z-index:0}}
{r} .ff-breadcrumb [aria-current=page]{{font-size:18px;color:#60475a}}
{r}:dir(rtl) .ff-breadcrumb ol{{padding:0 42px 0 0}}
''')
id='soft-location-trail';r=root(id)
add('breadcrumbs',id,f'''
{r}{{--ff-base:#f3eef1;--ff-panel:#fff8fc;--ff-ink:#55424f;--ff-muted:#745f6e;--ff-accent:#80576f;--ff-line:#d3bfcb;background:#f3eef1;padding:18px}}
{r} .ff-breadcrumb{{padding:0;border:0;background:none;border-radius:0}}
{r} .ff-breadcrumb ol{{display:flex;flex-wrap:wrap;gap:7px;align-items:center;padding:0}}
{r} .ff-breadcrumb li{{font-size:11px;color:#745f6e;min-width:0}}
{r} .ff-breadcrumb li:last-child{{flex:1 0 100%;padding:14px 0 0;margin-top:6px;border-top:1px solid #cbb6c3;font-size:18px;line-height:1.6}}
{r} .ff-breadcrumb [aria-current=page]{{font:600 18px/1.6 Arial,'Yu Gothic',sans-serif;color:#55424f}}
{r} .ff-crumb-more{{border:1px solid #c7afbe;border-radius:4px;background:#fff8fc;min-height:30px;color:#745269}}
''')
(b/'shared-sources.json').write_text(json.dumps(['src/shared/foundation/navigation.ts'],indent=2)+'\n')
descriptions={
'slatted-pages':('pagination','薄い縦の羽根を一列に並べるページ送り。厚い階段を廃し、選択した一枚の羽根を濃い面へ切り替える。'),
'bookplate-pages':('pagination','蔵書票の番号列に、しおりの末端を添えるページ送り。太い額縁を取り去り、現在番号から続く切り込みで位置を示す。'),
'soft-reading-pages':('pagination','大きな前後操作と、補助的な番号列を分けたページ送り。続けて読む操作を優先し、特定ページも選べる。'),
'line-navigation-pages':('pagination','前後操作・番号・現在位置を一つの細いツールバーへまとめるページ送り。狭い操作領域へ組み込みやすくする。'),
'warm-book-pages':('pagination','本文の書体に馴染むノンブル型のページ送り。番号列の下に前後操作を置き、現在位置を大きな明朝数字で示す。'),
'stone-path-trail':('breadcrumbs','少しずつ奥へ入る石の段を細い接続でつなぐ経路表示。親リンクと現在位置の深さを、段のずれと枝で示す。'),
'perforated-path-trail':('breadcrumbs','続き紙のミシン目で親階層をつなぐ経路表示。現在位置だけを一段進め、一覧ではなく到達した場所として示す。'),
'stitched-route-trail':('breadcrumbs','縫い線を辿って現在位置へ入る経路表示。親リンクの細い面から、綴じ目のある到達面へ接続する。'),
'looped-route-trail':('breadcrumbs','小さな輪を各階層に一つずつ置き、細い線で順につなぐ経路表示。大きな輪と横棒を除き、文字の余白を守る。'),
'soft-location-trail':('breadcrumbs','親階層を小さなパス、現在位置を次の行の見出しとして示す経路表示。詳細ページの見出しに添えやすくする。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B012 番号の列と、階層の道筋\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
