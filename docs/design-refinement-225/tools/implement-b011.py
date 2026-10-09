import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B011';b.mkdir(exist_ok=True)
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
def root(id):return '.sop-foundation.sop-'+id+'.sop-'+id
id='stepped-dock-upload';r=root(id)
add('uploads',id,f'''
{r}{{--paper:#edf3f3;--ink:#3c535e;--muted:#5a707a;--accent:#557f92;--edge:#abc4cc}}
{r} .ff-dropzone{{min-height:260px;padding:30px 22px 58px;background:none;border:0;box-shadow:none;margin:0;isolation:isolate}}
{r} .ff-dropzone::before{{inset:0 0 28px;height:auto;border:0;background:#f7faf5;clip-path:polygon(0 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) calc(100% - 18px),calc(100% - 18px) 100%,18px 100%,18px calc(100% - 18px),0 calc(100% - 18px));z-index:-2}}
{r} .ff-dropzone::after{{inset:auto 0 0;height:54px;background:linear-gradient(#a4c0ca 0 14px,#d0e0e2 14px 29px,#779ba9 29px 35px,#b7cfd6 35px);clip-path:polygon(0 0,18px 0,18px 14px,calc(100% - 18px) 14px,calc(100% - 18px) 0,100% 0,100% 35px,calc(100% - 12px) 35px,calc(100% - 12px) 100%,12px 100%,12px 35px,0 35px);border:0;z-index:-1}}
{r} .ff-upload-symbol{{border:0;border-bottom:3px solid #89abb7;background:#e2eceb;border-radius:3px}}
{r} .ff-dropzone[data-dragging=true]::after{{filter:brightness(.93)}}
''')
id='outline-document-upload';r=root(id)
add('uploads',id,f'''
{r}{{--ff-base:#f2f4f3;--ff-panel:#fffefa;--ff-ink:#364650;--ff-muted:#586b73;--ff-accent:#486b7d;--ff-line:#bdcbd0;padding:18px;background:#f2f4f3;border-radius:3px;container-type:inline-size}}
{r} .ff-dropzone{{display:grid;grid-template-columns:36px minmax(0,1fr);gap:6px 12px;align-content:center;text-align:start;min-height:145px;padding:20px 16px;border:1px solid #97acb5;border-radius:2px;background:#fffefa}}
{r} .ff-dropzone .ff-upload-symbol{{grid-column:1;grid-row:1 / 3;width:32px;height:42px;margin:0;align-self:center;background:none;border:0;color:#486b7d}}
{r} .ff-dropzone>strong{{grid-column:2;grid-row:1;text-align:start;font-size:15px}}
{r} .ff-dropzone>span:not(.ff-upload-symbol){{grid-column:2;grid-row:2;text-align:start;font-size:12px}}
{r} .ff-dropzone>small{{grid-column:1 / -1;grid-row:3;text-align:start;padding-top:12px;margin-top:8px;border-top:1px solid #d2dbdc;font-size:10px;line-height:1.7}}
{r} .ff-upload-files li{{background:#fffefa;border:0;border-bottom:1px solid #bdcbd0;border-radius:0;padding-inline:10px}}
''')
id='warm-material-upload';r=root(id)
add('uploads',id,f'''
{r}{{--ff-base:#f5f0e6;--ff-panel:#fffdf5;--ff-ink:#514735;--ff-muted:#6c614d;--ff-accent:#846a41;--ff-line:#cbbd9e;padding:20px;background:#f5f0e6;border-radius:0}}
{r} .ff-heading{{font:600 15px/1.7 Georgia,'Yu Mincho',serif}}
{r} .ff-dropzone{{min-height:178px;padding:22px 16px;border:0;border-block:1px solid #b4a17a;border-radius:0;background:#fffdf5;gap:10px}}
{r} .ff-upload-symbol{{width:34px;height:34px;border:0;background:none;color:#846a41}}
{r} .ff-dropzone>strong{{font:600 18px/1.7 Georgia,'Yu Mincho',serif}}
{r} .ff-dropzone>small{{font-size:10px;line-height:1.8}}
{r} .ff-upload-files{{gap:0;border-top:1px solid #cbbd9e}}
{r} .ff-upload-files li{{padding:14px 10px;border:0;border-bottom:1px solid #cbbd9e;border-radius:0;background:#fffdf5}}
{r} .ff-upload-files strong{{font:600 13px/1.65 Georgia,'Yu Mincho',serif;white-space:normal;overflow-wrap:anywhere}}
''')
id='orbit-date-calendar';r=root(id)
add('datepickers',id,f'''
{r}{{--paper:#f0f5f3;--ink:#35515e;--muted:#5a717b;--accent:#416f84;--edge:#b5cbd1}}
{r} .ff-floating.ff-calendar{{border:1px solid #aec5cd;border-radius:28px 28px 5px 5px;padding:18px;background:#f4f8f5}}
{r} .ff-calendar-header{{position:relative;isolation:isolate;min-height:100px;align-items:center;padding:18px 0 24px;border-bottom:1px solid #c1d2d4}}
{r} .ff-calendar-header::before{{content:'';display:block;position:absolute;inset:7px 13px 16px;border:1px solid #8cabb9;border-radius:50%;transform:rotate(-9deg);z-index:-1;background:none;pointer-events:none}}
{r} .ff-calendar-header::after{{content:'';display:block;position:absolute;inset:15px 21px 22px;border:1px solid #c3d3d6;border-radius:50%;transform:rotate(-9deg);z-index:-1;background:none;pointer-events:none}}
{r} .ff-calendar-header strong{{padding:7px 5px;border:0;border-radius:0;background:#f4f8f5;font:600 18px/1.6 ui-monospace,monospace;min-width:0}}
{r} .ff-calendar-header button{{width:34px;height:34px;border:1px solid #8cabb9;background:#f4f8f5;border-radius:50%}}
{r} .ff-calendar-grid button[data-selected=true]{{background:#416f84;color:#fff;border-radius:50%;box-shadow:0 0 0 2px #f4f8f5,0 0 0 3px #a0bbc7}}
{r} .ff-date-fields{{border:1px solid #9eb9c4;border-inline-width:5px;border-radius:30px;background:#f4f8f5}}
''')
id='open-week-calendar';r=root(id)
add('datepickers',id,f'''
{r}{{--paper:#f3f5eb;--ink:#43543e;--muted:#63715a;--accent:#526f45;--edge:#bac9ab}}
{r} .ff-floating.ff-calendar{{padding:20px;background:#f8faef}}
{r} .ff-calendar-grid{{gap:7px}}
{r} .ff-calendar-grid::before{{display:none}}
{r} .ff-calendar-grid [role=row]{{position:relative;isolation:isolate;gap:1px;border:0;border-bottom:3px solid #abbc95;background:#e6ecd9}}
{r} .ff-calendar-grid [role=row]::before{{content:'';position:absolute;inset:0;pointer-events:none;border-inline:3px solid #c4d0ae;background:none;z-index:-1}}
{r} .ff-calendar-grid button{{height:40px;min-height:40px;padding:0;align-content:center;background:none;color:#43543e}}
{r} .ff-calendar-grid button[data-selected=true]{{background:#526f45;color:#fff}}
{r} .ff-calendar-grid button[data-between=true]{{background:#cbd9b5}}
{r} .ff-calendar-grid button:hover:not(:disabled):not([data-selected=true]){{background:#d8e2c8}}
{r} .ff-date-fields{{border-bottom-width:3px}}
''')
id='petal-month-calendar';r=root(id)
add('datepickers',id,f'''
{r}{{--paper:#fcf3f7;--ink:#623f55;--muted:#775d6d;--accent:#86516d;--edge:#d5b7c7}}
{r} .ff-floating.ff-calendar{{padding:24px 18px 28px;background:#fcf3f7;border:0;border-radius:32px 4px 32px 4px;box-shadow:inset 5px 0 #d9bbca,inset -5px 0 #ecd9e3,0 8px 24px #573c4e25}}
{r} .ff-calendar-header{{padding:5px 0 20px;position:relative;isolation:isolate}}
{r} .ff-calendar-header strong{{border:0;border-radius:24px 3px 24px 3px;background:#ead4df;padding:14px 5px;font-size:18px;box-shadow:inset 0 -3px #d0aabc}}
{r} .ff-calendar-header button{{border:0;border-radius:50% 3px;background:#ead4df;color:#73495f}}
{r} .ff-calendar-header button:first-child{{border-radius:3px 50%}}
{r} .ff-weekdays{{padding-block:8px;border-bottom:1px solid #d7bdcb}}
{r} .ff-calendar-grid [role=row]{{border-bottom:1px solid #ecdae4}}
{r} .ff-calendar-grid button[data-selected=true]{{background:#86516d;color:#fff;border-radius:14px 2px 14px 2px;box-shadow:inset 0 -2px #663c52}}
{r} .ff-date-fields{{border:1px solid #c5a3b7;border-inline-start:5px solid #b98ca4;border-radius:18px 2px}}
''')
# A continuous strip preserves the material's single path/shelf instead of wrapping.
for id in ['track-stop-pages','ledger-page-tabs','coin-stack-pages','shuttle-key-pages']:
 r=root(id);p=Path('src/parts/pagination')/id/'styles.css';p.write_text(p.read_text()+f'''\n{r} .ff-pages[data-layout=anchored]>.ff-page-window{{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;gap:6px;min-height:0;padding:8px 3px 18px;scrollbar-width:thin;scrollbar-color:var(--accent) transparent;overscroll-behavior-x:contain}}
{r} .ff-page-window :is(button,a){{flex:0 0 38px;min-width:38px;width:auto;max-width:none;white-space:nowrap}}
{r} .ff-page-window .ff-ellipsis{{flex:0 0 24px;min-width:24px}}
''')
id='track-stop-pages';r=root(id)
add('pagination',id,f'''
{r}{{--ink:#385565;--muted:#566c76;--accent:#426f85}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{background:linear-gradient(transparent 0 calc(100% - 23px),#9bbbc8 calc(100% - 23px) calc(100% - 20px),transparent calc(100% - 20px) calc(100% - 15px),#6d96a8 calc(100% - 15px) calc(100% - 12px),transparent calc(100% - 12px))}}
''')
id='ledger-page-tabs';r=root(id)
add('pagination',id,f'''
{r} .ff-page-window :is(button,a){{height:70px;border-radius:7px 7px 0 0}}
{r} .ff-page-window :is(button,a)::before,{r} .ff-page-window :is(button,a):nth-child(-n+4)::before{{height:10px}}
{r} .ff-page-window::after{{display:none}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{border-bottom:6px solid #b18d5b;background:linear-gradient(transparent 0 calc(100% - 10px),#d6b886 calc(100% - 10px));padding-bottom:10px}}
''')
id='coin-stack-pages';r=root(id)
add('pagination',id,f'''
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{gap:8px;align-items:center;min-height:0;padding-block:8px 17px;border-bottom:1px solid #b9a77f}}
{r} .ff-page-window :is(button,a){{height:42px;aspect-ratio:auto;border:1px solid #b99b65;box-shadow:0 3px #ad8950,inset 0 0 0 3px #f9eccc;font-size:12px;color:#66502e}}
{r} .ff-page-window [aria-current=page]{{background:#76552d;color:#fff8e4;box-shadow:0 3px #5b3d1b,inset 0 0 0 3px #9b7949}}
{r} .ff-ellipsis{{height:42px}}
''')
id='shuttle-key-pages';r=root(id)
add('pagination',id,f'''
{r} .ff-pages[data-layout=anchored]{{border:0;border-block:2px solid #8caeba;border-radius:0;padding:14px 8px;background:#edf4f3}}
{r} .ff-pages[data-layout=anchored]>.ff-page-window{{background:linear-gradient(transparent 0 32px,#aec5cd 32px 34px,transparent 34px);padding-block:8px 14px}}
{r} .ff-page-window :is(button,a){{height:44px;border:0;border-radius:0;background:transparent;position:relative;isolation:isolate;color:#41606f}}
{r} .ff-page-window :is(button,a)::before{{display:block;content:'';position:absolute;inset:5px 0;border:1px solid #b9cdd1;border-radius:50% 2px;background:#f7faf6;z-index:-1}}
{r} .ff-page-window [aria-current=page]{{background:none;color:#fff}}
{r} .ff-page-window [aria-current=page]::before{{inset:0;background:#426b7c;border:0;border-radius:50% 2px;box-shadow:inset 0 -3px #2e5364}}
{r} .ff-pages[data-layout=anchored]>:is(button,a){{border:0;border-inline:2px solid #99b6c2;background:#d9e7e8;border-radius:2px;height:44px}}
''')
(b/'shared-sources.json').write_text(json.dumps(['src/shared/foundation/navigation.ts'],indent=2)+'\n')
descriptions={
'stepped-dock-upload':('uploads','段差のある受け台へファイルを置くドロップ領域。本文を載せる面と、下へ張り出した二段の台を組み合わせる。'),
'outline-document-upload':('uploads','文書記号と選択案内を横に揃えたコンパクトな提出欄。形式と容量の条件を罫線の下にまとめ、フォームへ組み込みやすくする。'),
'warm-material-upload':('uploads','資料を集めるための読みやすいファイル欄。選択領域と、書名のようにファイル名を並べる一覧を細い罫線でつなぐ。'),
'orbit-date-calendar':('datepickers','月見出しを二重の細い軌道で支えるカレンダー。日付は通常の曜日列を保ち、月送りの操作を軌道の両端に置く。'),
'open-week-calendar':('datepickers','一週間ごとに独立した浅い棚を重ねるカレンダー。蛇行する経路を除き、曜日列に沿って同じ向きで日付を読める。'),
'petal-month-calendar':('datepickers','花弁の重なりを月見出しと外縁へ広げたカレンダー。曜日と日付の整列は保ち、選択日の小さな花弁を濃くする。'),
'track-stop-pages':('pagination','一本のレールに番号を並べるページ送り。狭幅でも列を折り返さず、選択番号が見える位置へ窓内だけを移動する。'),
'ledger-page-tabs':('pagination','帳簿の背を一つの棚へ並べるページ送り。狭幅で背を二段に積まず、横に続く棚の中から番号を選ぶ。'),
'coin-stack-pages':('pagination','硬貨を一列に整列させたページ送り。省略記号も同じ軸に置き、薄い段差で現在の硬貨を読み分ける。'),
'shuttle-key-pages':('pagination','一本の案内線に沿って舟形の選択面を移すページ送り。丸い筐体を除き、番号と選択した舟の位置を結びつける。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B011 読み順と選択位置を保つ\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items())+'\n共有paginationは実際に横あふれする番号窓のみをスクロールし、選択/フォーカスを可視にする。外側ページの位置は変えず、RTL・拡大率を考慮。observerはdestroyで切断する。\n')
