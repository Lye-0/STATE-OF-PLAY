import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B017'
def r(id):return '.sop-sig.sop-'+id+'.sop-'+id
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
id='ribbon-swatch-color';s=r(id);add('colors',id,f'''
{s}{{background:var(--paper)}}
{s} .sg-color-panel{{padding:22px 16px;background:var(--paper)}}
{s} .sg-color-heading{{padding:0 0 14px;border-bottom:1px solid #c794a6}}
{s} .sg-color-workspace{{padding:7px 7px 13px;background:#e5bfcc;border-radius:4px 4px 30% 4px}}
{s} .sg-color-sv{{height:138px}}
{s} .sg-color-controls{{padding:10px 0;background:none}}
{s} .sg-color-palette{{display:grid;grid-template-columns:repeat(auto-fit,minmax(74px,1fr));gap:18px 8px;padding:14px 0;margin:12px 0 22px;background:none;border:0}}
{s} .sg-color-palette::before,{s} .sg-color-palette::after{{display:none}}
{s} .sg-color-palette button{{position:relative;isolation:isolate;min-width:0;width:100%;height:100px;margin:0;padding:0;border:0;border-radius:0;background:transparent;transform:none;overflow:visible;clip-path:none;box-shadow:none}}
{s} .sg-color-palette button::before{{content:'';position:absolute;inset:0 6px 22px;background:linear-gradient(180deg,#0003 0 5px,transparent 5px 42%,#fff4 43% 49%,#0002 50% 54%,transparent 55%),var(--swatch);clip-path:polygon(0 0,100% 0,100% 100%,50% 85%,0 100%);border-top:3px solid #9c6b7e;z-index:-1}}
{s} .sg-color-palette button::after{{content:attr(data-swatch);position:absolute;inset:auto 0 0;padding:2px 0;background:var(--paper);color:#653b4b;font:11px/1.5 Consolas,monospace;text-align:center;direction:ltr;unicode-bidi:isolate}}
{s} .sg-color-palette button[aria-pressed=true]{{outline:2px solid #744158;outline-offset:3px}}
{s} .sg-color-entry{{padding:12px 0 0;border-top:1px solid #c794a6}}
''')
id='soft-theme-color';s=r(id);add('colors',id,f'''
{s} .sg-color-panel{{padding:22px 18px;border:1px solid #dcced8;border-radius:14px}}
{s} .sg-color-heading{{margin-bottom:14px}}
{s} .sg-color-swatch{{width:60px;height:36px;min-width:60px;border-radius:8px}}
{s} .sg-color-sv{{height:78px;border-radius:6px}}
{s} .sg-color-workspace{{margin-bottom:10px}}
{s} .sg-color-axis{{min-height:46px;margin:0;gap:8px;grid-template-columns:38px minmax(0,1fr) 30px}}
{s} .sg-color-palette{{display:grid;grid-template-columns:repeat(auto-fit,minmax(88px,1fr));gap:8px;margin:18px 0}}
{s} .sg-color-palette button{{position:relative;width:100%;min-width:0;height:44px;border:1px solid #cdbfc9;border-radius:7px;background:#fff9fc;padding:0}}
{s} .sg-color-palette button::before{{content:'';position:absolute;inset:7px auto 7px 7px;width:22px;background:var(--swatch);border-radius:4px;border:1px solid #0002}}
{s} .sg-color-palette button::after{{content:attr(data-swatch);position:absolute;inset:0 3px 0 32px;display:grid;place-items:center;font:10px/1.4 Consolas,monospace;direction:ltr;color:#574450}}
{s} .sg-color-palette button[aria-pressed=true]{{outline:2px solid #80576f;outline-offset:1px}}
''')
id='warm-studio-color';s=r(id);add('colors',id,f'''
{s} .sg-color-panel{{padding:24px 18px;border:0;border-block:1px solid #c9b68f;border-radius:0}}
{s} .sg-color-heading{{border:0;margin-bottom:18px}}
{s} .sg-color-heading .sg-label{{font:600 20px/1.4 Georgia,'Yu Mincho',serif}}
{s} .sg-color-workspace{{margin-bottom:20px}}
{s} .sg-color-sv{{height:144px;border:0;border-radius:0;outline:1px solid #a28b67}}
{s} .sg-color-controls{{display:none}}
{s} .sg-color-rgb{{display:grid;gap:0;border-block:1px solid #c9b68f}}
{s} .sg-rgb-channel{{grid-template-columns:24px minmax(0,1fr) 34px;gap:8px;margin:0;min-height:54px}}
{s} .sg-color-palette{{display:grid;grid-template-columns:repeat(auto-fit,minmax(42px,1fr));gap:10px 8px;padding:0;margin:22px 0}}
{s} .sg-color-palette button{{width:100%;min-width:0;height:48px;border-radius:0;border:1px solid #b9a37f;box-shadow:inset 0 0 0 4px #f8f0de}}
{s} .sg-color-entry{{padding-top:14px;border-top:1px solid #c9b68f}}
''')
id='photo-caption-skeleton';s=r(id);add('skeletons',id,f'''
{s} .sg-skeleton-frame{{position:relative;isolation:isolate;grid-template-columns:minmax(0,1fr);grid-template-areas:'hero' 'profile' 'lines' 'tiles';padding:20px 20px 26px 30px;gap:18px;background:#f8f3e8;border:0;border-inline-start:1px solid #c9b994;box-shadow:inset 10px 0 #e6dac4}}
{s} .sg-sk-hero{{height:204px;background:#dacbb0;border:8px solid #fffdf6;box-shadow:0 1px 0 1px #c3b391;position:relative}}
{s} .sg-sk-profile{{border-inline-start:3px solid #ac926b;padding-inline-start:12px;gap:10px;align-items:start}}
{s} .sg-sk-profile>span{{width:32px;height:32px;min-width:32px;border-radius:0}}
{s} .sg-sk-profile strong{{font:600 19px/1.5 Georgia,'Yu Mincho',serif}}
{s} .sg-sk-lines{{padding-inline-start:15px;border-inline-start:1px solid #c6b38f;gap:10px}}
{s} .sg-sk-lines p{{font:14px/1.8 Georgia,'Yu Mincho',serif}}
{s} .sg-sk-tiles{{padding-top:12px;margin:0 0 0 15px;gap:12px;border-top:1px solid #d2c4a6}}
{s} .sg-sk-tiles>i,{s} .sg-sk-tiles>span{{height:30px;background:none;border:0;border-bottom:1px solid #bca983}}
''')
id='open-grid-skeleton';s=r(id);add('skeletons',id,f'''
{s} .sg-skeleton-frame{{padding:20px;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);grid-template-areas:'hero profile' 'hero lines' 'tiles tiles';gap:22px 16px;background:#eef3f5;border:0;min-height:340px;position:relative}}
{s} .sg-skeleton-frame::before{{content:'';position:absolute;inset:10px;border:1px solid #a8c1cc;pointer-events:none}}
{s} .sg-sk-hero{{height:100%;min-height:200px;background:#d3e1e6;border:0}}
{s} .sg-sk-profile{{flex-direction:column;align-items:start;padding:0;border:0;gap:12px}}
{s} .sg-sk-profile>span{{width:32px;height:32px;min-width:32px}}
{s} .sg-sk-lines{{padding:0;border:0;border-top:1px solid #a6c0cc;padding-top:14px;gap:9px}}
{s} .sg-sk-tiles{{border-top:1px solid #a6c0cc;margin:0;padding-top:12px;gap:14px}}
{s} .sg-sk-tiles>i,{s} .sg-sk-tiles>span{{height:32px;background:none;border:0;border-inline-start:2px solid #adc4cf}}
@container(max-width:300px){{{s} .sg-skeleton-frame{{grid-template-columns:minmax(0,1fr);grid-template-areas:'hero' 'profile' 'lines' 'tiles'}}{s} .sg-sk-hero{{height:150px;min-height:0}}{s} .sg-sk-profile{{flex-direction:row;align-items:center}}}}
''')
id='list-column-skeleton';s=r(id);add('skeletons',id,f'''
{s} .sg-skeleton-frame{{grid-template-columns:64px minmax(0,1fr);grid-template-areas:'hero profile' 'lines lines' 'tiles tiles';gap:20px 14px;padding:24px 18px;background:#f5f2e9;border:0;border-top:3px double #a49377;min-height:320px}}
{s} .sg-sk-hero{{height:86px;background:#ded3bd;border:0}}
{s} .sg-sk-profile{{flex-direction:column;align-items:start;justify-content:center;padding:0;border:0;gap:8px}}
{s} .sg-sk-profile>span{{display:none}}
{s} .sg-sk-profile strong{{font:600 18px/1.5 Georgia,'Yu Mincho',serif}}
{s} .sg-sk-lines{{counter-reset:entry;padding:0;border:0;gap:0}}
{s} .sg-sk-lines>i,{s} .sg-sk-lines>p{{counter-increment:entry;position:relative;min-height:38px;height:auto;width:100%;padding:9px 0 9px 32px;border-top:1px solid #c9bda7;background:none;line-height:1.6}}
{s} .sg-sk-lines>i{{background:linear-gradient(var(--sk-tone),var(--sk-tone)) 32px center/calc(100% - 38px) 10px no-repeat}}
{s} .sg-sk-lines>i::before,{s} .sg-sk-lines>p::before{{content:counter(entry,decimal-leading-zero);position:absolute;inset:9px auto auto 0;font:11px/1.9 Consolas,monospace;color:#77674f}}
{s} .sg-sk-tiles{{border-top:3px double #bbaa8e;padding-top:12px;gap:16px}}
{s} .sg-sk-tiles>i,{s} .sg-sk-tiles>span{{height:28px}}
{s}:dir(rtl) .sg-sk-lines>i,{s}:dir(rtl) .sg-sk-lines>p{{padding:9px 32px 9px 0}}
{s}:dir(rtl) .sg-sk-lines>i::before,{s}:dir(rtl) .sg-sk-lines>p::before{{left:auto;right:0}}
''')
id='soft-preview-skeleton';s=r(id);add('skeletons',id,f'''
{s} .sg-skeleton-frame{{grid-template-columns:70px minmax(0,1fr);grid-template-areas:'hero profile' 'lines lines' 'tiles tiles';padding:20px;gap:16px 14px;border:1px solid #daccd6;border-radius:12px;min-height:0}}
{s} .sg-sk-hero{{height:76px;margin:0;border-radius:8px}}
{s} .sg-sk-profile{{gap:8px;align-items:start;flex-direction:column}}
{s} .sg-sk-profile>span{{display:none}}
{s} .sg-sk-profile strong{{font-size:15px}}
{s} .sg-sk-profile small{{font-size:12px}}
{s} .sg-sk-lines{{gap:8px}}
{s} .sg-sk-lines>i{{height:11px}}
{s} .sg-sk-tiles{{margin:0;gap:8px}}
{s} .sg-sk-tiles>i,{s} .sg-sk-tiles>span{{height:32px;border-radius:5px}}
''')
id='warm-card-skeleton';s=r(id);add('skeletons',id,f'''
{s} .sg-skeleton-frame{{grid-template-columns:minmax(0,1fr);grid-template-areas:'profile' 'hero' 'lines' 'tiles';padding:22px 18px;gap:16px;border:1px solid #d9c9a7;border-radius:0;min-height:0}}
{s} .sg-sk-profile{{border-bottom:1px solid #d0bd98;padding-bottom:12px;gap:12px}}
{s} .sg-sk-profile>span{{width:32px;height:32px;min-width:32px;border-radius:50%}}
{s} .sg-sk-profile strong{{font:600 18px/1.4 Georgia,'Yu Mincho',serif}}
{s} .sg-sk-hero{{height:122px;border-radius:0}}
{s} .sg-sk-lines{{gap:9px}}
{s} .sg-sk-lines p{{font:14px/1.8 Georgia,'Yu Mincho',serif}}
{s} .sg-sk-tiles{{gap:12px;padding-top:12px;border-top:1px solid #d0bd98}}
{s} .sg-sk-tiles>i,{s} .sg-sk-tiles>span{{height:28px;background:none;border:0;border-bottom:1px solid #bca47a}}
''')
id='margin-note-timeline';s=r(id);add('timelines',id,f'''
{s} .sg-timeline{{padding:24px 18px 24px 26px;border:0;border-inline-start:3px double #bd917c;background:#faf1ed}}
{s} .sg-event{{grid-template-columns:minmax(0,1fr);gap:0;padding:0 0 24px 16px}}
{s} .sg-event-time{{position:relative;font:italic 18px/1.5 Georgia,serif;padding:0 0 6px 16px;width:fit-content;max-width:100%;border-bottom:1px solid #b88772}}
{s} .sg-event-time::before{{content:'';position:absolute;left:0;top:12px;width:10px;border-top:1px solid #b88772}}
{s} .sg-event-main{{margin-inline-start:16px;padding:8px 0 14px;border-bottom:0}}
{s} .sg-event-route{{top:18px;bottom:0;width:8px;inset-inline-start:0;border-inline-start:1px solid #c6a18f}}
{s} .sg-event-route::after{{display:none}}
{s} .sg-event-route i{{width:6px;height:6px;top:0;inset-inline-start:-3px;border-radius:0}}
{s} .sg-event-heading{{font:600 20px/1.6 Georgia,'Yu Mincho',serif}}
{s} .sg-event-body{{border-top:1px solid #dfc9bd;padding-top:14px}}
{s}:dir(rtl) .sg-event{{padding-inline:16px 0}}
{s}:dir(rtl) .sg-event-time{{padding-inline:16px 0}}
{s}:dir(rtl) .sg-event-time::before{{left:auto;right:0}}
''')
id='console-log-timeline';s=r(id);add('timelines',id,f'''
{s} .sg-timeline{{padding:20px 16px;background:#eaf0f5;border:0}}
{s} .sg-timeline-head{{padding:0 0 14px;border:0;border-bottom:3px double #94adbf;background:none;margin-bottom:0}}
{s} .sg-timeline-list{{padding:0;border:0;background:none;counter-reset:log}}
{s} .sg-timeline-list::before,{s} .sg-timeline-list::after{{display:none}}
{s} .sg-event{{counter-increment:log;grid-template-columns:minmax(0,1fr);gap:4px;padding:18px 0 18px 26px;border-bottom:1px solid #b3c5d2}}
{s} .sg-event::before{{content:counter(log,decimal-leading-zero);position:absolute;left:0;top:19px;font:11px/1.8 Consolas,monospace;color:#506c80}}
{s} .sg-event-time{{font:12px/1.7 Consolas,monospace;padding:0;color:#456075}}
{s} .sg-event-main{{border:0;padding:0;background:none}}
{s} .sg-event-heading{{font:600 16px/1.65 Consolas,'Yu Gothic',monospace}}
{s} .sg-event summary{{padding:0;min-height:62px}}
{s} .sg-event-status{{border:0;padding-inline-start:0;font:12px/1.6 Consolas,monospace}}
{s} .sg-event[data-status=active]{{background:linear-gradient(90deg,#d5e3ec 0 2px,transparent 2px)}}
{s} .sg-event-body{{border-inline-start:1px solid #93adbf;padding:8px 0 0 12px}}
{s}:dir(rtl) .sg-timeline-list{{padding:0}}
{s}:dir(rtl) .sg-event{{padding-inline:26px 0}}
{s}:dir(rtl) .sg-event::before{{left:auto;right:0}}
{s}:dir(rtl) .sg-event-body{{padding-inline:12px 0}}
''')
descriptions={
'ribbon-swatch-color':('colors','独立した短いリボン見本を並べるカラーピッカー。見本は留めた上端から折り目と二股の端へ続き、色名は素材の外で読む。長い積層板の構造を廃して選色のまとまりを短くする。'),
'soft-theme-color':('colors','テーマ色を名前と一緒に選べるカラーピッカー。小さな調整面とコード付きの候補行で、似た色でも選び直しやすくする。'),
'warm-studio-color':('colors','RGBの数値と大きな色面を確認する制作向けカラーピッカー。額縁を持つ小さな見本と平らな編集行で、色の微調整に集中できる。'),
'photo-caption-skeleton':('skeletons','写真の白縁と余白の注記がつながる待機表示。図版、細い注釈罫、明朝の見出しを読み込み後も同じ組版で示す。'),
'open-grid-skeleton':('skeletons','縦長の図版と右側の注記を開いた格子に置く待機表示。罫は情報の間をつなぎ、狭幅では同じ順序で縦へ開く。'),
'list-column-skeleton':('skeletons','小さな図版と見出しの下に番号付きの記録行が続く待機表示。読み込み前後の実行数を同じ罫と余白で示し、大きな図版カードから一覧の構造へ組み替える。'),
'soft-preview-skeleton':('skeletons','一覧内のプレビューに使う待機表示。小さな図版と見出しを横に置き、短い本文と操作列を低い高さにまとめる。'),
'warm-card-skeleton':('skeletons','著者と見出しを先に読む記事カードの待機表示。その下に図版と本文を置き、読み込み後も同じ読む順序を保つ。'),
'margin-note-timeline':('timelines','余白に書いた日付から本文へ罫が折れる記録帳。実日付を見出しの上へ引き出し、各記録を注記のまとまりとして読む。'),
'console-log-timeline':('timelines','連番と実時刻を左端で追うログのタイムライン。太い筐体を廃し、展開した詳細だけを一段奥の罫に沿わせる。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B017 色見本・待機表示・記録の独立した構造\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
