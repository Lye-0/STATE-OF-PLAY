import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B018'
def r(id):return '.sop-sig.sop-'+id+'.sop-'+id
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
id='blueprint-route-timeline';s=r(id);add('timelines',id,f'''
{s} .sg-event{{padding-bottom:30px}}
{s} .sg-event-time{{width:auto;min-width:74px;min-height:40px;padding:9px 12px;border-top:2px solid #7c9fb5;background:#d6e5ee;font-size:13px}}
{s} .sg-event-route{{top:20px;bottom:-20px}}
{s} .sg-event-route::after{{border-inline-start-width:3px;border-bottom-width:3px}}
{s} .sg-event:nth-child(2n) .sg-event-route::after{{border-inline-end-width:3px}}
{s} .sg-event-main{{margin-inline:12px 0;padding:12px;background:#edf4f7}}
{s} .sg-event:nth-child(2n) .sg-event-main{{margin-inline:0 12px}}
{s} .sg-event:last-child .sg-event-route{{bottom:20px}}
''')
id='loop-history-timeline';s=r(id);add('timelines',id,f'''
{s} .sg-timeline{{padding:24px 18px;background:#f7eff1}}
{s} .sg-event{{grid-template-columns:minmax(0,1fr);gap:12px;padding:14px 0 30px 25px;isolation:isolate}}
{s} .sg-event-time{{position:relative;min-height:40px;width:fit-content;max-width:100%;padding:9px 16px 9px 26px;border:0;border-bottom:2px solid #b998a2;border-radius:0;background:#fff8fa;text-align:start;font:13px/1.6 Consolas,monospace}}
{s} .sg-event-time::before{{content:'';position:absolute;left:6px;top:15px;width:5px;height:5px;border-radius:50%;background:#8b6872;box-shadow:0 -1px #60424a}}
{s} .sg-event-time::after{{content:'';position:absolute;left:-17px;top:8px;width:28px;height:18px;border:2px solid #ad8a94;border-radius:50%;clip-path:polygon(0 0,100% 0,100% 55%,70% 55%,70% 100%,0 100%);pointer-events:none}}
{s} .sg-event-route{{display:block;inset:0 auto 0 11px;width:1px;border-inline-start:1px solid #b4949f;z-index:-1}}
{s} .sg-event-route::after,{s} .sg-event-route i{{display:none}}
{s} .sg-event-main{{padding:0 0 14px;border-bottom:1px solid #d1bac2}}
{s}:dir(rtl) .sg-event{{padding-inline:25px 0}}
{s}:dir(rtl) .sg-event-route{{left:auto;right:11px}}
{s}:dir(rtl) .sg-event-time{{padding-inline:26px 16px}}
{s}:dir(rtl) .sg-event-time::before{{left:auto;right:6px}}
{s}:dir(rtl) .sg-event-time::after{{left:auto;right:-17px;transform:scaleX(-1)}}
''')
id='clear-process-timeline';s=r(id);add('timelines',id,f'''
{s} .sg-timeline{{padding:22px 18px;background:#f3f6f3}}
{s} .sg-timeline-list{{counter-reset:process}}
{s} .sg-event{{counter-increment:process;grid-template-columns:minmax(0,1fr);gap:4px;padding:16px 0 20px 34px;border-bottom:1px solid #c1d0c5}}
{s} .sg-event::before{{content:counter(process,decimal-leading-zero);position:absolute;left:0;top:18px;font:12px/1.6 Consolas,monospace;color:#486253}}
{s} .sg-event-route{{display:none}}
{s} .sg-event-time{{font:12px/1.6 Consolas,monospace;padding:0;color:#536c5d}}
{s} .sg-event-main{{border:0;background:none;padding:0}}
{s} .sg-event summary{{display:grid;grid-template-columns:minmax(0,1fr) 20px;grid-template-rows:auto auto;gap:4px 8px;padding:0;min-height:60px}}
{s} .sg-event-heading{{grid-column:1;grid-row:1;font:600 15px/1.6 Arial,'Yu Gothic',sans-serif}}
{s} .sg-event-status{{grid-column:1;grid-row:2;font:12px/1.6 Arial,sans-serif}}
{s} .sg-event-chevron{{grid-column:2;grid-row:1/3}}
{s} .sg-event[data-status=active]{{border-inline-start:2px solid #678877;padding-inline-start:32px}}
{s}:dir(rtl) .sg-event{{padding-inline:34px 0}}
{s}:dir(rtl) .sg-event::before{{left:auto;right:0}}
''')
id='index-flap-wizard';s=r(id);add('wizards',id,f'''
{s} .sg-wizard{{padding:22px 16px 20px 25px;border:0;border-inline-start:3px double #b39870;background:#faf2e5}}
{s} .sg-wizard-nav,{s} .sg-wizard-nav:has(li:nth-child(4)){{flex-direction:column;gap:0;padding:0;border:0}}
{s} .sg-wizard-nav li{{padding-inline-start:calc(min(var(--step),3)*8px)}}
{s} .sg-wizard-nav button,{s} .sg-wizard-nav:has(li:nth-child(4)) button{{flex-direction:row;align-items:center;gap:12px;min-height:50px;padding:8px 12px;border:1px solid #cfbc9b;border-bottom:0;background:#e9dcc5;border-radius:0;text-align:start}}
{s} .sg-wizard-nav [data-step-state=current] button{{padding:8px 12px;background:#fffaf0;border-top:1px solid #b6996b;border-inline-end:4px solid #ad8953}}
{s} .sg-step-index{{width:28px;height:28px;min-width:28px;background:none;border:0;color:#715633}}
{s} .sg-step-title{{text-align:start;font-size:13px}}
{s} [data-step-state=current] .sg-step-index{{color:#715633;background:none}}
{s} .sg-wizard-panels{{margin:0;padding:22px 0 0;border-top:2px solid #bfa477;background:#fffaf0}}
{s} .sg-wizard-panel{{padding:0 12px 20px}}
{s} .sg-wizard-panel h3{{font-size:25px}}
{s} .sg-wizard-footer{{border-top:1px solid #cfbc9b;padding-top:14px}}
''')
id='stitched-journey-wizard';s=r(id);add('wizards',id,f'''
{s} .sg-wizard-nav,{s} .sg-wizard-nav:has(li:nth-child(4)){{flex-direction:column;padding:12px 16px;gap:0;background:#e8dcea}}
{s} .sg-wizard-nav li::before{{display:none}}
{s} .sg-wizard-nav button,{s} .sg-wizard-nav:has(li:nth-child(4)) button{{flex-direction:row;align-items:center;padding:8px 0;min-height:60px;gap:18px}}
{s} .sg-step-index{{width:34px;height:34px;min-width:34px;background:#f5eef6;border:1px solid #b396be;border-radius:2px}}
{s} .sg-step-index::before{{left:4px;top:-12px;width:24px;height:58px;border:0;border-inline:1px dashed #b296bc;background:none;z-index:-1}}
{s} .sg-step-title{{text-align:start;font-size:14px}}
{s} .sg-wizard-panels{{padding:20px 16px;border-top:1px dashed #aa8db4;background:#e8dcea}}
{s} .sg-wizard-panel{{padding:18px 12px;background:#f8f1fa;border:1px dashed #bda4c6}}
{s} .sg-wizard-footer{{background:#e8dcea;padding:0 16px 20px;margin:0}}
''')
id='clipped-page-wizard';s=r(id);add('wizards',id,f'''
{s} .sg-wizard{{padding:22px 18px;background:#f7f2e8;border:0;border-top:1px solid #cab797}}
{s} .sg-wizard-nav,{s} .sg-wizard-nav:has(li:nth-child(4)){{display:grid;grid-template-columns:repeat(auto-fit,minmax(56px,1fr));gap:12px;padding:0 0 18px;border-bottom:1px solid #c9b596}}
{s} .sg-wizard-nav button,{s} .sg-wizard-nav:has(li:nth-child(4)) button{{flex-direction:column;min-height:72px;padding:0;gap:8px;background:none;border:0;clip-path:none}}
{s} .sg-wizard-nav li::before,{s} .sg-wizard-nav li::after{{display:none}}
{s} .sg-step-index{{width:32px;height:32px;min-width:32px;border:0;border-radius:50%;background:#eee3cf}}
{s} .sg-step-title{{font-size:13px;text-align:center}}
{s} .sg-wizard-panels{{margin:24px 0 0;padding:22px 14px 10px;background:#fffbf2;position:relative;border:1px solid #d7c8ad;box-shadow:4px 4px #ece1ce}}
{s} .sg-wizard-panels::before{{content:'';position:absolute;top:-10px;right:18px;width:20px;height:38px;border:2px solid #ac9776;border-radius:8px;background:transparent;transform:rotate(8deg);pointer-events:none}}
{s} .sg-wizard-panel{{padding:0;min-height:210px}}
{s} .sg-wizard-panel h3{{font:600 26px/1.45 Georgia,'Yu Mincho',serif;padding-inline-end:28px}}
{s} .sg-wizard-footer{{padding-top:18px}}
{s}:dir(rtl) .sg-wizard-panels::before{{right:auto;left:18px}}
''')
id='ceramic-stage-wizard';s=r(id);add('wizards',id,f'''
{s} .sg-wizard{{padding:24px 18px 28px;background:#d6e5ec;border-radius:28px 12px 24px 12px;border-top:3px solid #f1f8fb;border-bottom:6px solid #a5bfcc}}
{s} .sg-wizard::before{{display:none}}
{s} .sg-wizard-nav{{padding:0 0 18px;border-bottom:3px solid #edf5f8;gap:4px}}
{s} .sg-wizard-nav button{{min-height:64px;padding:6px 0;gap:12px}}
{s} .sg-step-index{{width:36px;height:36px;min-width:36px}}
{s} .sg-wizard-panels{{padding:22px 14px;margin-top:20px;border-top:4px solid #fcfeff;border-bottom:6px solid #b4cbd7;border-radius:16px 3px 3px 3px}}
{s} .sg-wizard-panel{{min-height:190px}}
{s} .sg-wizard-panel h3{{font-size:24px}}
{s} .sg-wizard-footer{{padding-top:16px;margin-top:16px;border-top:3px solid #edf5f8}}
''')
id='soft-enrollment-wizard';s=r(id);add('wizards',id,f'''
{s} .sg-wizard{{padding:22px 18px;border-radius:16px;border:1px solid #d9c5d3;background:#fcf5fa}}
{s} .sg-wizard-nav{{gap:10px;padding-bottom:20px;border-bottom:1px solid #dfd0db}}
{s} .sg-wizard-nav button{{min-height:60px;padding:4px;gap:8px}}
{s} .sg-step-index{{width:28px;height:28px;min-width:28px;border-radius:50%;border:1px solid #c2aabd;background:#f2e8ef}}
{s} .sg-step-title{{font-size:12px}}
{s} .sg-wizard-panels{{margin-top:18px}}
{s} .sg-wizard-panel{{padding:0;min-height:180px}}
{s} .sg-wizard-panel h3{{font:600 23px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .sg-wizard-fields input,{s} .sg-wizard-fields textarea{{background:#fff;border:1px solid #cbb6c5;border-radius:8px;min-height:48px}}
{s} .sg-wizard-footer{{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px;margin-top:24px}}
{s} .sg-wizard-progress{{grid-column:1/-1;grid-row:1;height:3px}}
{s} .sg-wizard-back{{grid-column:1;grid-row:2}}
{s} .sg-wizard-next{{grid-column:2;grid-row:2;justify-content:center;min-height:48px;border-radius:8px}}
''')
id='clear-process-wizard';s=r(id);add('wizards',id,f'''
{s} .sg-wizard{{padding:20px 18px;background:#f6f8f5;border:0;border-inline-start:3px solid #a9c0ae}}
{s} .sg-wizard-nav,{s} .sg-wizard-nav:has(li:nth-child(4)){{flex-direction:column;gap:0;border:0;padding:0}}
{s} .sg-wizard-nav button,{s} .sg-wizard-nav:has(li:nth-child(4)) button{{flex-direction:row;align-items:center;gap:12px;padding:8px 0;min-height:44px;border-bottom:1px solid #d0dbd1;background:none}}
{s} .sg-step-index{{width:24px;height:24px;min-width:24px;border-radius:3px;border:1px solid #a8bdaa;background:none}}
{s} .sg-step-index b{{font-size:11px}}
{s} .sg-step-title{{text-align:start;font-size:13px}}
{s} .sg-wizard-panels{{margin-top:22px}}
{s} .sg-wizard-panel{{padding:0;min-height:190px}}
{s} .sg-wizard-panel h3{{font:600 22px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .sg-wizard-fields input,{s} .sg-wizard-fields textarea{{background:white;border-radius:0;border:1px solid #aabfaa}}
{s} .sg-wizard-footer{{padding-top:18px;border-top:1px solid #c6d4c7}}
''')
id='warm-form-wizard';s=r(id);add('wizards',id,f'''
{s} .sg-wizard{{padding:24px 20px;background:#fcf6e8;border:0;border-block:3px double #c6ae82;border-radius:0}}
{s} .sg-wizard-nav{{gap:12px;padding:0 0 18px;border-bottom:1px solid #d2c09f}}
{s} .sg-wizard-nav button{{padding:0;min-height:65px;gap:8px}}
{s} .sg-step-index{{width:30px;height:30px;min-width:30px;border:0;border-radius:0;background:none;color:#866740}}
{s} .sg-step-index b{{font:22px/1 Georgia,serif}}
{s} [data-step-state=current] .sg-step-index{{background:none;color:#634722;border-bottom:2px solid #967244}}
{s} .sg-step-title{{font:13px/1.6 Georgia,'Yu Mincho',serif}}
{s} .sg-wizard-panel h3{{font:600 27px/1.5 Georgia,'Yu Mincho',serif}}
{s} .sg-wizard-fields label{{font:14px/1.7 Georgia,'Yu Mincho',serif}}
{s} .sg-wizard-fields input,{s} .sg-wizard-fields textarea{{padding:10px 0;background:none;border:0;border-bottom:1px solid #b59c70;border-radius:0;box-shadow:none}}
{s} .sg-wizard-footer{{padding-top:16px;border-top:1px solid #d2c09f}}
''')
descriptions={
'blueprint-route-timeline':('timelines','日付を結ぶ折線を細い製図線に整えた履歴。線は本文の外を回り、見出しと内容を先に読める余白を確保する。'),
'loop-history-timeline':('timelines','背の一本の線から日付札を輪で留める履歴。輪は札の小穴へ接続し、本文の列とは分けて記録同士のつながりを示す。'),
'clear-process-timeline':('timelines','工程番号・日付・状態を揃えて読む履歴。現在の工程を細い側線で示し、展開した説明も同じ欄へ収める。'),
'index-flap-wizard':('wizards','少しずつ差し出した索引紙で工程を選ぶウィザード。索引を縦へ積み、現在の紙だけを明るい入力面へ接続する。'),
'stitched-journey-wizard':('wizards','細い縫い目が工程番号を縦に結ぶウィザード。大きな黒い穴を廃し、番号札と入力布の軽い縁へ綴じ方を揃える。'),
'clipped-page-wizard':('wizards','工程の一覧から独立した紙をクリップで留めるウィザード。索引札の反復を廃し、丸い工程番号と一枚の入力紙を分けて見せる。'),
'ceramic-stage-wizard':('wizards','丸い陶の器に平らな入力面を収めるウィザード。狭幅で中央をくびれさせず、側壁と上下の縁を一定の厚さに保つ。'),
'soft-enrollment-wizard':('wizards','一つずつ入力して進む申し込み向けウィザード。短い工程表示、白い入力面、広い次へボタンで操作の順序を明確にする。'),
'clear-process-wizard':('wizards','工程を短いチェックリストとして読むウィザード。各工程の位置を縦に揃え、現在の入力内容をその下の白い欄で扱う。'),
'warm-form-wizard':('wizards','番号と明朝の見出しで章を読むウィザード。入力欄は帳票の下線に沿わせ、上下の二重罫で書類のまとまりを作る。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B018 履歴の線と工程の読み順\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
