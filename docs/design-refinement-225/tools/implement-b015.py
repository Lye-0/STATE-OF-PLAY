import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B015';b.mkdir(exist_ok=True)
def r(id):return '.sop-sig.sop-'+id+'.sop-'+id
def add(cat,id,css,media=True):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n'+('@media(forced-colors:none){\n' if media else '')+css+('\n}' if media else '')+'\n')
id='warm-author-profile';s=r(id)
add('avatars',id,f'''
{s}{{--sg-bg:#f6f0e4;--sg-panel:#fffdf4;--sg-ink:#5c4a31;--sg-muted:#756247;--sg-a:#86643d;--sg-line:#cbb792;background:#fffdf4;padding:22px;border-radius:0}}
{s} .sg-avatar-list{{display:grid;grid-template-columns:1fr;gap:18px}}
{s} .sg-person{{width:100%;max-width:none;display:grid;grid-template-columns:52px minmax(0,1fr);gap:14px;align-items:center;padding:16px 0;border:0;border-block:1px solid #ccb993;background:none;border-radius:0;min-height:94px}}
{s} .sg-portrait{{width:50px;height:62px;flex:none}}
{s} .sg-portrait-picture{{border:1px solid #c7af87;background:#f3e7ce;border-radius:50% 50% 3px 3px}}
{s} .sg-initials{{color:#715335}}
{s} .sg-portrait-ring{{display:none}}
{s} .sg-person-copy{{width:auto;min-width:0;text-align:start}}
{s} .sg-person-name{{font:600 18px/1.5 Georgia,'Yu Mincho',serif}}
{s} .sg-person-sub{{font:12px/1.7 Georgia,'Yu Mincho',serif;margin-top:5px}}
{s} .sg-person[data-selected=true]{{background:#f3e8d1;border-block-color:#a88b5f}}
''')
ids=['seal-score-rating','inspection-score-rating','folded-score-rating','stone-pip-rating','notched-disc-rating','rail-signal-rating','stitch-star-rating','open-bracket-rating','coin-value-rating']
for id in ids:
 s=r(id);add('ratings',id,f'''
{s} .sg-rating-scale{{grid-template-columns:repeat(var(--sg-count,5),minmax(28px,1fr));gap:4px;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;padding-inline:3px;overscroll-behavior-x:contain}}
{s} .sg-rating-unit{{min-width:0;width:100%}}
{s} .sg-rating-star{{width:min(24px,70%);height:24px;max-width:100%}}
''',False)
id='seal-score-rating';s=r(id)
add('ratings',id,f'''{s} .sg-rating-unit{{height:auto;aspect-ratio:1;min-height:36px}}{s} .sg-rating-form{{inset:2px 0;border-top-width:3px;border-bottom-width:4px;box-shadow:inset 0 0 0 2px #dfbd8b}}{s} .sg-rating-unit[data-exact=true] .sg-rating-form{{box-shadow:inset 0 0 0 2px #926031}}''')
id='inspection-score-rating';s=r(id)
add('ratings',id,f'''
{s} .sg-rating-unit{{height:94px}}
{s} .sg-rating-unit::before{{top:51px;height:34px;border-top-width:3px;border-bottom-width:4px}}
{s} .sg-rating-unit::after{{top:59px;height:20px;border-top-width:3px;border-bottom-width:4px}}
{s} .sg-rating-form{{inset:0 2px 7px;border-top-width:3px;border-bottom-width:4px;clip-path:polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 7px) 100%,0 100%)}}
{s} .sg-rating-star{{left:15%;top:13px;width:70%;height:24px}}
''')
id='folded-score-rating';s=r(id)
add('ratings',id,f'''{s} .sg-rating-scale{{gap:4px}}{s} .sg-rating-unit{{height:80px}}{s} .sg-rating-form{{border-inline-start-width:2px}}{s} .sg-rating-unit[data-exact=true] .sg-rating-form{{border-inline-start-width:2px}}''')
id='stone-pip-rating';s=r(id)
add('ratings',id,f'''
{s} .sg-rating-unit{{height:96px}}
{s} .sg-rating-form{{border-top-width:4px;border-bottom-width:5px;clip-path:polygon(0 0,100% 0,100% 100%,calc(100% - 6px) 100%,calc(100% - 6px) 65px,50% 51px,6px 65px,6px 100%,0 100%)}}
{s} .sg-rating-star{{top:13px;left:15%;width:70%;height:24px}}
''')
id='notched-disc-rating';s=r(id)
add('ratings',id,f'''
{s}{{--paper:#edf1f2;--ink:#3c5360;--muted:#5b707b;--accent:#416d82;--edge:#b0c6ce}}
{s} .sg-rating-unit{{height:auto;aspect-ratio:1;min-height:42px}}
{s} .sg-rating-form{{inset:0;border:0;border-radius:0;background:#d5e3e7;clip-path:polygon(8px 0,calc(50% - 3px) 0,calc(50% - 3px) 5px,calc(50% + 3px) 5px,calc(50% + 3px) 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,calc(50% + 3px) 100%,calc(50% + 3px) calc(100% - 5px),calc(50% - 3px) calc(100% - 5px),calc(50% - 3px) 100%,8px 100%,0 calc(100% - 8px),0 8px);box-shadow:inset 0 3px #f1f7f4,inset 0 -4px #8ba8b7}}
{s} .sg-rating-unit[data-filled=true] .sg-rating-form{{background:#adc9d3;box-shadow:inset 0 3px #dbeaf0,inset 0 -4px #678fa3}}
{s} .sg-rating-unit[data-exact=true] .sg-rating-form{{box-shadow:inset 0 0 0 2px #416d82}}
''')
id='rail-signal-rating';s=r(id)
add('ratings',id,f'''
{s} .sg-rating-scale{{gap:0;padding-inline:0}}
{s} .sg-rating-unit{{height:88px}}
{s} .sg-rating-form{{inset:0 2px auto;height:48px;border-top-width:3px;border-bottom-width:4px;clip-path:polygon(5px 0,calc(100% - 5px) 0,100% 5px,100% calc(100% - 5px),calc(100% - 5px) 100%,5px 100%,0 calc(100% - 5px),0 5px)}}
{s} .sg-rating-unit::after{{top:42px;height:36px;width:6px;left:calc(50% - 3px);border-inline-start-width:2px}}
{s} .sg-rating-unit::before{{height:10px;border-top-width:3px;border-bottom-width:3px}}
''')
id='stitch-star-rating';s=r(id)
add('ratings',id,f'''
{s} .sg-rating-scale{{gap:0;padding-inline:0}}
{s} .sg-rating-unit{{height:90px}}
{s} .sg-rating-form::before{{width:24px;left:calc(50% - 12px);border-inline-start-width:3px;border-inline-end-width:3px;border-top-width:4px;border-bottom-width:4px;border-radius:5px}}
{s} .sg-rating-form::after{{top:27px;height:36px;border-top-width:3px;border-bottom-width:4px}}
''')
id='open-bracket-rating';s=r(id)
add('ratings',id,f'''
{s} .sg-rating-unit{{height:70px}}
{s} .sg-rating-unit::before{{width:17px;border-left:3px solid #b9906a;border-top:3px solid #e4c8a7;border-bottom:3px solid #a67c55;border-radius:6px 0 0 6px}}
{s} .sg-rating-unit::after{{left:3px;top:11px;width:11px;height:5px;border-top:2px solid #efd8bb;box-shadow:0 40px 0 #ae845e}}
{s} .sg-rating-form{{inset:12px 0 12px 8px;border-top-width:2px;border-bottom-width:3px;clip-path:polygon(0 0,calc(100% - 4px) 0,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%)}}
{s} .sg-rating-star{{width:80%;height:22px}}
{s}:dir(rtl) .sg-rating-unit::before{{border-left:0;border-right-width:3px;border-radius:0 6px 6px 0}}
{s}:dir(rtl) .sg-rating-unit::after{{left:auto;right:3px}}
{s}:dir(rtl) .sg-rating-form{{inset:12px 8px 12px 0}}
''')
id='coin-value-rating';s=r(id)
add('ratings',id,f'''{s} .sg-rating-unit{{height:62px}}{s} .sg-rating-form{{border-top-width:4px;border-bottom-width:5px;box-shadow:inset 0 0 0 2px #d2b672}}{s} .sg-rating-unit[data-exact=true] .sg-rating-form{{box-shadow:inset 0 0 0 2px #7d5a28}}''')
descriptions={
'warm-author-profile':('avatars','著者名を見出しとして読める人物一覧。縦長の肖像と明朝体の氏名を組み合わせ、細い上下罫で本文に馴染ませる。'),
'seal-score-rating':('ratings','五つの封印を一列に並べる評価入力。狭幅では印の寸法を揃えて縮め、最後の段階を別行へ分離しない。'),
'inspection-score-rating':('ratings','五つの検査札を連続した台へ載せる評価入力。台と札の厚みを縮尺に合わせ、狭幅でも同じ五段階として読める。'),
'folded-score-rating':('ratings','一本の桁に折った札を吊るす評価入力。五段階を同じ行へ保ち、狭幅でも桁と札を分断しない。'),
'stone-pip-rating':('ratings','石のアーチを五つ並べる評価入力。各アーチの脚を細くし、狭幅でも星の列を一目で読める。'),
'notched-disc-rating':('ratings','上下に位置決めの切り欠きを持つ評価ディスク。丸い金の印から角のある部品へ組み替え、選択した位置を濃い輪郭で示す。'),
'rail-signal-rating':('ratings','一本のレールに五つの信号を立てる評価入力。狭幅でも柱と線を分割せず、一つの尺度として見せる。'),
'stitch-star-rating':('ratings','五つの留め帯へ横の布を通した評価入力。狭幅で帯を折り返さず、選択した星までの連続性を保つ。'),
'open-bracket-rating':('ratings','細い括弧で五つの星札を留める評価入力。留具を小さくし、星の尺度と選択位置を先に読める構成にする。'),
'coin-value-rating':('ratings','駒形の評価札を五つ一列に並べる入力。幅に合わせて札と縁を縮め、最後の札だけが落ちる配置をなくす。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B015 五段階を一つの尺度に保つ\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items())+'\n評価数は固定5をCSSに埋め込まず、実runtimeの--sg-countに従う。多数の段階を指定した場合は最小28pxの操作幅を保って横方向へ続ける。\n')
