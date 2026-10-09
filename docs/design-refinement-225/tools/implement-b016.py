import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B016'
def r(id):return '.sop-sig.sop-'+id+'.sop-'+id
def add(cat,id,css,media=True):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n'+('@media(forced-colors:none){\n' if media else '')+css+('\n}' if media else '')+'\n')
ids=['flag-score-rating','blueprint-score-rating','ribbon-score-rating','ceramic-score-rating','letterpress-score-rating','soft-feedback-rating','warm-reader-rating']
for id in ids:
 s=r(id);add('ratings',id,f'''{s} .sg-rating-scale{{grid-template-columns:repeat(var(--sg-count,5),minmax(28px,1fr));gap:4px;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;padding-inline:3px;overscroll-behavior-x:contain}}{s} .sg-rating-unit{{min-width:0;width:100%}}{s} .sg-rating-star{{width:min(24px,70%);height:24px;max-width:100%}}''',False)
id='flag-score-rating';s=r(id);add('ratings',id,f'''{s} .sg-rating-unit{{height:86px}}{s} .sg-rating-form{{inset:6px 0 auto 4px;height:64px;border-top-width:3px;border-bottom-width:4px;clip-path:polygon(0 0,100% 0,100% 100%,50% calc(100% - 8px),0 100%)}}{s} .sg-rating-unit::before{{width:3px;left:0}}{s} .sg-rating-star{{left:15%;top:12px;width:70%}}{s}:dir(rtl) .sg-rating-form{{inset:6px 4px auto 0}}''')
id='blueprint-score-rating';s=r(id);add('ratings',id,f'''{s} .sg-rating-scale{{gap:3px;padding-block:6px}}{s} .sg-rating-unit{{height:76px}}{s} .sg-rating-form{{clip-path:polygon(42% 0,58% 0,58% 23%,70% 32%,100% 70%,93% 79%,65% 66%,50% 74%,35% 66%,7% 79%,0 70%,30% 32%,42% 23%)}}{s} .sg-rating-form::after{{left:12%;top:25%;width:76%;height:50%;border-top-width:2px;border-bottom-width:3px}}{s} .sg-rating-star{{left:15%;top:calc(50% - 12px);width:70%;height:24px}}''')
id='ribbon-score-rating';s=r(id);add('ratings',id,f'''{s} .sg-rating-scale{{gap:0;padding-inline:3px}}{s} .sg-rating-unit{{height:70px}}{s} .sg-rating-star{{left:15%;top:12px;width:70%}}{s} .sg-rating-unit:first-child .sg-rating-form{{border-inline-start-width:3px}}{s} .sg-rating-unit:last-child .sg-rating-form{{border-inline-end-width:3px}}''')
id='ceramic-score-rating';s=r(id);add('ratings',id,f'''{s} .sg-rating-scale{{gap:0;padding:18px 8px 34px}}{s} .sg-rating-scale::before{{border-top-width:4px;border-bottom-width:7px;border-radius:24px 10px 24px 10px}}{s} .sg-rating-scale::after{{height:32px;border-top-width:4px;border-bottom-width:8px;border-radius:15px 10px 24px 20px}}{s} .sg-rating-unit{{height:54px}}''')
id='letterpress-score-rating';s=r(id);add('ratings',id,f'''{s} .sg-rating-unit{{height:66px}}{s} .sg-rating-form{{border-width:3px 2px 5px 3px}}''')
# Optical: one coherent editing disc; its SV square fits within the clear centre.
id='optical-color-desk';s=r(id);add('colors',id,f'''
{s} .sg-color-panel{{padding:22px;border:0;border-bottom:5px solid #aab9c9}}
{s} .sg-color-workspace{{position:relative;display:grid;place-items:center;aspect-ratio:1;gap:0;margin:0 0 24px;isolation:isolate}}
{s} .sg-hue-disc{{position:absolute;inset:0;width:100%;height:100%;margin:0;border:2px solid #aab8c7}}
{s} .sg-hue-disc i{{inset:20px;background:var(--paper);border:0;pointer-events:none}}
{s} .sg-hue-disc b{{inset:4px}}
{s} .sg-color-sv{{position:relative;z-index:1;grid-row:auto;width:55%;height:auto;aspect-ratio:1;margin:0;outline:1px solid #526377;box-shadow:0 0 0 6px var(--paper)}}
{s} .sg-color-heading{{padding-bottom:12px;border-bottom:1px solid #b7c5d3;margin-bottom:20px}}
{s} .sg-color-swatch{{width:36px;height:36px;min-width:36px;border-radius:50%}}
{s} .sg-color-axis{{border-bottom:1px solid #c4cdd8;margin:0;min-height:54px}}
''')
# Letterpress: a proof sheet with an ink impression and composing lines, not a boxed picker.
id='letterpress-ink-color';s=r(id);add('colors',id,f'''
{s} .sg-color-panel{{position:relative;isolation:isolate;padding:24px 20px 24px 27px;border:0;border-inline-start:3px double #b8a296;background:linear-gradient(90deg,#ebe0d0 0 10px,transparent 10px)}}
{s} .sg-color-heading{{align-items:start;border-bottom:3px double #a98e7c;padding-bottom:14px;margin-bottom:24px}}
{s} .sg-color-heading .sg-label{{font:600 25px/1.35 Georgia,'Yu Mincho',serif;letter-spacing:-.02em}}
{s} .sg-color-swatch{{width:48px;min-width:48px;height:64px;border:0;border-radius:0;box-shadow:inset 0 0 0 1px #55443355;clip-path:polygon(0 0,100% 0,100% calc(100% - 9px),calc(100% - 9px) 100%,0 100%)}}
{s} .sg-color-workspace{{position:relative;padding:13px;margin-bottom:22px;border:1px solid #ccb9a6;background:repeating-linear-gradient(0deg,transparent 0 9px,#b69c7f44 9px 10px)}}
{s} .sg-color-workspace::before{{content:'';position:absolute;inset:6px;border:1px solid #8e756044;pointer-events:none}}
{s} .sg-color-sv{{height:140px;border:0;outline:1px solid #8c7667;box-shadow:0 0 0 5px var(--paper)}}
{s} .sg-color-rgb{{border-block:3px double #b69d87}}
{s} .sg-rgb-channel{{min-height:58px;border-bottom:1px solid #cfb8b5;gap:8px;grid-template-columns:22px minmax(0,1fr) 32px}}
{s} .sg-rgb-channel>span{{font:700 22px/1 Georgia,serif}}
{s} .sg-color-palette{{gap:8px;padding-bottom:12px;border-bottom:1px solid #bca48d}}
{s} .sg-color-palette button{{border-radius:0;width:38px;min-width:38px;height:46px;border:0;border-bottom:6px solid var(--paper);box-shadow:0 1px #a28b70}}
''')
# Linear lab: actual range axes form parallel measuring lanes, SV is a wide transverse slice.
id='linear-lab-color';s=r(id);add('colors',id,f'''
{s} .sg-color-panel{{padding:22px 16px;border:0;background:linear-gradient(90deg,transparent 36px,#93b6c7 36px 37px,transparent 37px)}}
{s} .sg-color-heading{{padding-bottom:12px;border-bottom:1px solid #86aabb;margin-bottom:20px;align-items:center}}
{s} .sg-color-swatch{{width:58px;min-width:58px;height:26px;border:1px solid #4a6d7b}}
{s} .sg-color-workspace{{padding:0;margin:0 0 16px;border:0;position:relative}}
{s} .sg-color-sv{{height:84px;outline:1px solid #769cae;border-inline:5px solid #e9f2f5}}
{s} .sg-color-controls{{border-block:3px double #8faebe;padding:0 0 0 6px;background:#edf3f5}}
{s} .sg-color-axis{{grid-template-columns:40px minmax(0,1fr) 30px;gap:7px;min-height:66px;margin:0;border-bottom:1px solid #b2cad4}}
{s} .sg-color-axis>span{{font:700 11px/1.5 Consolas,monospace}}
{s} .sg-color-axis output{{border:1px solid #9db9c6;background:#f5f9fa;padding:5px 0;text-align:center;font:12px/1.2 Consolas,monospace}}
{s} .sg-color-axis input::-webkit-slider-runnable-track{{height:6px}}
{s} .sg-color-axis input::-webkit-slider-thumb{{width:8px;height:28px;border:1px solid #e7f0f4;margin-top:-11px;box-shadow:0 0 0 1px #426676}}
{s} .sg-color-axis input::-moz-range-track{{height:6px}}
{s} .sg-color-axis input::-moz-range-thumb{{width:6px;height:26px;border:1px solid #e7f0f4}}
{s} .sg-color-palette{{gap:7px;border-block:1px solid #a1bdc9;padding:10px 0;margin:20px 0}}
{s} .sg-color-palette button{{width:30px;min-width:30px;height:44px;border:1px solid #7c9baa;border-bottom-width:5px}}
{s} .sg-color-entry{{background:var(--paper)}}
''')
descriptions={
'flag-score-rating':('ratings','旗の五段階を一つの列に保つ評価入力。旗と支柱の寸法を揃えて縮め、最後の段階を下段へ分離しない。'),
'blueprint-score-rating':('ratings','三方に折れた小さな翼が星の接合面を支える評価入力。翼を星より前へ出しすぎず、五段階を一列で読み取れる寸法にする。'),
'ribbon-score-rating':('ratings','五つの星を一本の帯で結ぶ評価入力。端と継ぎ目を薄くし、狭い画面でも帯を途中で折り返さない。'),
'ceramic-score-rating':('ratings','一枚の反った陶の面に五つの星を並べる評価入力。裾と縁を小さくし、選択範囲を一列で読めるようにする。'),
'letterpress-score-rating':('ratings','五つの活字札を一列に並べる評価入力。縁の厚さと札の幅を整え、狭幅でも五段階を同時に見渡せる。'),
'soft-feedback-rating':('ratings','柔らかい輪郭の評価キー。五段階を一列に保ち、狭幅でも値と選択位置をすぐに読み取れる。'),
'warm-reader-rating':('ratings','本文に馴染む暖色の評価入力。星を同じ行に並べ、五段階のつながりを保つ。'),
'optical-color-desk':('colors','色相輪の内側に彩度・明度の色面を収めた光学盤。外周で色相、中央で濃さを選び、同じ一色を下の軸と数値へ同期する。'),
'letterpress-ink-color':('colors','試し刷りの色面とRGBの組版行を組み合わせたカラーピッカー。余白に重ねた罫とインク見本を持ち、色面と数値は平らな面で読み取れる。'),
'linear-lab-color':('colors','三本の測定レーンで色を調整するカラーピッカー。横長の色面、細い指標、枠付きの実数値を同じ軸方向にまとめる。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B016 評価の一列と色の操作面\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
