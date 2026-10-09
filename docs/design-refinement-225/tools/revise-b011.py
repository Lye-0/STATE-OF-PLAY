import sys,json
from pathlib import Path
sys.path.insert(0,'docs/design-refinement-225/tools');from author import add
r=lambda id:'.sop-foundation.sop-'+id+'.sop-'+id
for id in ['outline-document-upload','warm-material-upload']:
 s=r(id);add('uploads',id,f'''{s} .ff-upload-errors{{color:#923e35;font:12px/1.7 Arial,'Yu Gothic',sans-serif;overflow-wrap:anywhere}}''')
id='outline-document-upload';s=r(id);add('uploads',id,f'''{s} .ff-upload-files li{{display:grid;grid-template-columns:minmax(0,1fr) 44px;gap:10px;padding:12px 8px}}{s} .ff-upload-files li>span{{min-width:0;max-width:100%;overflow-wrap:anywhere;white-space:normal}}{s} .ff-upload-files li strong{{display:block;min-width:0;overflow-wrap:anywhere;white-space:normal}}{s} .ff-upload-files li button{{width:44px;min-width:44px;height:44px;flex:none;padding:10px;align-self:center}}''')
for id in ['orbit-date-calendar','open-week-calendar','petal-month-calendar']:
 s=r(id);add('datepickers',id,f'''{s} .ff-calendar-grid button[data-outside=true]:not(:disabled){{opacity:1;color:var(--muted);font-weight:400}}''')
id='petal-month-calendar';s=r(id);add('datepickers',id,f'''
{s} .ff-floating.ff-calendar{{padding:20px 16px 22px;border:1px solid #dac1cd;border-radius:4px;box-shadow:0 8px 24px #573c4e25;background:#fff8fa}}
{s} .ff-calendar-header{{position:relative;isolation:isolate;padding:28px 0 30px;margin-bottom:8px;min-height:112px}}
{s} .ff-calendar-header::before{{content:'';position:absolute;left:3%;top:9px;width:61%;height:87px;background:#e5c6d5;border:1px solid #c99aad;border-radius:75% 12% 70% 20%;transform:rotate(10deg);transform-origin:90% 85%;z-index:-2;pointer-events:none}}
{s} .ff-calendar-header::after{{content:'';position:absolute;right:3%;top:9px;width:61%;height:87px;background:#efdce5;border:1px solid #d2afbf;border-radius:12% 75% 20% 70%;transform:rotate(-10deg);transform-origin:10% 85%;box-shadow:-2px 2px #bc91a43b;z-index:-1;pointer-events:none}}
{s} .ff-calendar-header strong{{padding:10px 4px;background:transparent;border:0;border-radius:0;box-shadow:none;font:600 18px/1.5 Georgia,'Yu Mincho',serif;color:#593a4d}}
{s} .ff-calendar-header button,{s} .ff-calendar-header button:first-child{{background:#fff9fb;border:1px solid #c9a4b5;border-radius:50%;width:36px;height:36px;min-width:36px;color:#74445e}}
{s} .ff-weekdays{{border-top:1px solid #d7bdcb;padding-block:10px;background:none}}
{s} .ff-calendar-grid [role=row]{{border:0}}
{s} .ff-calendar-grid button[data-selected=true]{{background:#86516d;color:#fff;border-radius:50% 50% 12% 50%;box-shadow:inset 0 -2px #633a50}}
{s} .ff-date-fields{{border:1px solid #c5a3b7;border-inline-start:3px solid #b98ca4;border-radius:4px}}
''')
base=Path('src/parts/datepickers')/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];new='二枚の花弁が中央で重なる月見出しを持つカレンダー。後ろの左弁と前の右弁を縁と陰で分け、日付は通常の曜日列に整列する。';d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:f.write_text(f.read_text().replace(old,new).replace(short,d['tagline']))
p=Path('docs/design-refinement-225/batches/B011/design.md');p.write_text(p.read_text()+'\n## 独立検査 round2 への修正\n- R369/R370：エラーを暗赤の12pxへ。R369は選択名を縮められる列へ置き、44px削除列を保持。\n- R377/R379/R383：有効な前後月の日付のopacityを外す。\n- R383：同じ片側角丸の反復を廃し、月見出しを前後の異なる二枚の花弁が重なる構成へ変更。\n')
