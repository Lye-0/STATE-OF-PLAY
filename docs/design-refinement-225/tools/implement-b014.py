import json,re
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B014';b.mkdir(exist_ok=True)
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
def root(id,sig=False):return ('.sop-sig' if sig else '.sop-foundation')+'.sop-'+id+'.sop-'+id
id='bookend-counter';r=root(id)
p=Path('src/parts/numbers')/id/'styles.css';p.write_text(p.read_text()+f'''\n{r} .ff-stepper{{grid-template-columns:44px minmax(0,1fr) 44px;gap:0;align-items:center}}
{r} .ff-number-face{{grid-column:2;grid-row:1;width:100%;margin:0;padding:18px 3px;min-height:120px}}
{r} .ff-stepper>button[data-adjust="-1"]{{grid-column:1;grid-row:1}}{r} .ff-stepper>button[data-adjust="1"]{{grid-column:3;grid-row:1}}
{r} .ff-stepper>button{{height:136px}}{r} [data-number]{{font-size:clamp(22px,8cqi,34px)}}{r} .ff-unit{{font-size:10px;letter-spacing:0}}
''')
add('numbers',id,f'{r}{{--ink:#60472d;--muted:#725c42}}')
id='recessed-dial-number';r=root(id)
p=Path('src/parts/numbers')/id/'styles.css';p.write_text(p.read_text()+f'''\n{r} .ff-stepper{{display:grid;grid-template-columns:44px minmax(0,1fr) 44px;gap:8px}}
{r} .ff-number-face{{grid-column:2;grid-row:1;aspect-ratio:1;height:auto;min-height:0;max-width:154px;width:100%;padding:18px 5px;border-radius:50%}}
{r} [data-number]{{font-size:clamp(20px,7cqi,32px)}}{r} .ff-unit{{font-size:10px;letter-spacing:0}}
@container(max-width:300px){{{r} .ff-stepper{{grid-template-columns:44px minmax(0,1fr) 44px;gap:8px}}{r} .ff-number-face{{grid-column:1/-1;grid-row:1;width:min(154px,100%);height:auto;aspect-ratio:1;min-height:0}}{r} .ff-stepper>button[data-adjust="-1"]{{grid-column:1;grid-row:2}}{r} .ff-stepper>button[data-adjust="1"]{{grid-column:3;grid-row:2}}}}
''')
id='rail-stop-number';r=root(id)
add('numbers',id,f'''{r} .ff-stepper>button{{background:#47718a;color:#fff;transition:background .2s,color .2s}}
{r} .ff-stepper>button:hover:not(:disabled){{background:#365f77;color:#fff}}
''')
id='ribbon-count-number';r=root(id)
add('numbers',id,f'''
{r}{{--ink:#614456;--muted:#75566a;--accent:#885b77}}
{r} .ff-number-face{{min-height:132px;padding:26px 10px;border:0;border-radius:0;background:#f6e6ef;isolation:isolate;overflow:visible;box-shadow:inset 0 2px #e0bed2,inset 0 -2px #c9a1b9}}
{r} .ff-number-face::before{{inset:10px -12px -10px;background:#c79bb6;border:0;mask:none;clip-path:polygon(0 0,100% 0,100% 100%,calc(100% - 12px) calc(100% - 10px),12px calc(100% - 10px),0 100%);z-index:-2}}
{r} .ff-number-face::after{{content:'';display:block;position:absolute;inset:0;background:#f6e6ef;border-block:2px solid #d5afc7;z-index:-1}}
{r} .ff-stepper>button{{background:#ead2e1;color:#67475d;border-top:3px solid #f5e7ef;border-bottom:4px solid #af7d9b;border-radius:2px}}
{r} .ff-stepper>button:hover:not(:disabled){{background:#dcc0d2;color:#57374d}}
''')
id='soft-amount-number';r=root(id)
add('numbers',id,f'''
{r}{{--ff-base:#f3edf1;--ff-panel:#fff9fc;--ff-ink:#58434f;--ff-muted:#755f6d;--ff-accent:#80546e;--ff-line:#cfb8c6;padding:18px;background:#f3edf1;border-radius:5px}}
{r} .ff-stepper{{min-height:52px;border:1px solid #c4a9b9;border-radius:28px;background:#fff9fc;box-shadow:none}}
{r} .ff-stepper>button{{width:44px;background:none;color:#80546e;font-size:22px}}
{r} .ff-number-face{{display:flex;flex-direction:row;gap:6px;border:0;padding:10px 3px}}
{r} [data-number]{{width:55px;max-width:70%;font-size:23px;color:#58434f}}
{r} .ff-unit{{font-size:12px;letter-spacing:0;color:#755f6d}}
{r} .ff-footnote{{font-size:11px;line-height:1.7}}
''')
id='warm-unit-number';r=root(id)
add('numbers',id,f'''
{r}{{--ff-base:#f7f1e5;--ff-panel:#fffdf5;--ff-ink:#5a4932;--ff-muted:#75634b;--ff-accent:#806139;--ff-line:#ccba97;padding:20px;background:#fffdf5;border-radius:0}}
{r} .ff-heading{{font:600 14px/1.7 Georgia,'Yu Mincho',serif}}
{r} .ff-stepper{{display:grid;grid-template-columns:1fr 1fr;gap:0;border:0;border-block:1px solid #bcaa86;border-radius:0;box-shadow:none;background:none;overflow:visible}}
{r} .ff-number-face{{grid-column:1/-1;grid-row:1;display:flex;flex-direction:row;align-items:baseline;justify-content:center;gap:10px;padding:20px 0;border:0}}
{r} [data-number]{{font:36px/1.3 Georgia,serif;width:120px;max-width:65%;text-align:end;color:#5a4932}}
{r} .ff-unit{{font:14px/1.6 Georgia,serif;letter-spacing:0;color:#75634b;max-width:35%;overflow-wrap:anywhere}}
{r} .ff-stepper>button{{grid-row:2;width:100%;height:40px;border:0;border-top:1px solid #d8c9ab;background:none;color:#806139}}
{r} .ff-stepper>button:last-child{{border-inline-start:1px solid #d8c9ab}}
{r} .ff-footnote{{font-size:11px;line-height:1.8}}
''')
# Purpose-specific defaults; caller options and controller contracts remain unchanged.
for id,label,unit in [('soft-amount-number','数量を選ぶ','個'),('warm-unit-number','分量を調整する','g')]:
 base=Path('src/parts/numbers')/id
 for p in [base/'vanilla/init.ts',*list((base/'react').glob('*.tsx'))]:
  s=p.read_text();m=re.search(r'const config: FoundationConfig = (\{[\s\S]*?\n\});',s)
  if not m:continue
  c=json.loads(m[1]);c.update(label=label,unit=unit)
  if id=='warm-unit-number':c.update(defaultValue=250,max=2000,step=5)
  p.write_text(s[:m.start(1)]+json.dumps(c,ensure_ascii=False,indent=2)+s[m.end(1):])
 for p in [base/'markup.html',base/'vanilla/index.html']:
  p.write_text(p.read_text().replace('必要な量を、ちょうどよく。',label).replace('>UNITS<','>'+unit+'<'))
id='bookplate-profile';r=root(id,True)
add('avatars',id,f'''
{r}{{--paper:#f4eddf;--ink:#58432c;--muted:#6f5940;--accent:#81603a}}
{r} .sg-person{{padding:20px 18px 22px;gap:14px;border:0;background:#fff9eb;min-height:116px;box-shadow:inset 0 0 0 1px #c7b18d;isolation:isolate}}
{r} .sg-person::before{{content:'';display:block;position:absolute;inset:7px;border:1px solid #ddceb3;background:none;pointer-events:none;z-index:-1}}
{r} .sg-person::after{{content:'';display:block;position:absolute;inset:12px auto auto 8px;width:10px;height:30px;background:#a88c61;clip-path:polygon(0 0,100% 0,100% 100%,50% 78%,0 100%);pointer-events:none;z-index:0}}
{r} .sg-portrait{{width:54px;height:70px}}
{r} .sg-portrait-picture{{border-radius:50% 50% 0 0;background:#ecdfc7;border:1px solid #c7b18d}}
{r} .sg-person-copy strong{{font:600 17px/1.5 Georgia,'Yu Mincho',serif}}
{r} .sg-person-copy{{border-top:1px solid #c7b18d;padding-top:8px}}
{r} .sg-person[data-selected=true]{{background:#f0e1c5;box-shadow:inset 0 0 0 2px #a88c61}}
{r}:dir(rtl) .sg-person::after{{left:auto;right:8px}}
''')
id='stitch-label-profile';r=root(id,True)
add('avatars',id,f'''
{r}{{--paper:#f1ecf2;--ink:#533f61;--muted:#675371;--accent:#836393}}
{r} .sg-avatar-list{{grid-template-columns:1fr;gap:16px}}
{r} .sg-person{{flex-direction:row;align-items:center;gap:16px;padding:22px;min-height:120px}}
{r} .sg-person::before{{inset:0;background:repeating-linear-gradient(0deg,#e6dce9 0 2px,#e1d5e5 2px 3px);border:0;clip-path:none;border-radius:2px;box-shadow:0 3px #c2aacd}}
{r} .sg-person::after{{inset:7px;height:auto;border:1px dashed #a289ad;background:none;transform:none;z-index:0;pointer-events:none}}
{r} .sg-portrait{{width:58px;height:68px}}
{r} .sg-portrait-picture{{background:#f7f0f8;border:1px solid #bea8c9;border-radius:1px;box-shadow:0 2px #cbb7d4}}
{r} .sg-person-copy{{padding:0;text-align:start;flex:1;min-width:0}}
{r} .sg-presence{{bottom:0}}
{r} .sg-person[data-selected=true]::before{{background:repeating-linear-gradient(0deg,#d9c8e2 0 2px,#d4c1de 2px 3px)}}
@container(max-width:260px){{{r} .sg-person{{padding:18px 14px;gap:12px}}{r} .sg-portrait{{width:48px;height:60px}}}}
''')
id='blueprint-id-profile';r=root(id,True)
add('avatars',id,f'''
{r} .sg-person{{padding:20px 18px;gap:20px;min-height:190px}}
{r} .sg-person::before{{left:10px;top:10px;width:1px;height:calc(100% - 20px);border:0;background:#90b0c3;clip-path:none}}
{r} .sg-person::after{{left:0;right:0;top:12px;width:auto;height:1px;border:0;background:#90b0c3;clip-path:none}}
{r} .sg-portrait{{width:76px;height:76px}}
{r} .sg-portrait-picture{{border:1px solid #9bbdce;background:#e0edf2;box-shadow:inset 0 0 0 3px #eff6f7}}
{r} .sg-person-copy{{border-top:1px solid #bdd0da;padding-top:10px}}
{r} .sg-person[data-selected=true]::before{{background:#517f99}}
''')
id='outline-person-profile';r=root(id,True)
add('avatars',id,f'''
{r}{{--sg-bg:#f5f7f4;--sg-panel:#fffefa;--sg-ink:#3d4f54;--sg-muted:#5d7177;--sg-a:#4d7482;--sg-line:#bccbd0;background:#f5f7f4;padding:18px;border-radius:3px}}
{r} .sg-avatar-list{{display:grid;grid-template-columns:1fr;gap:0}}
{r} .sg-person{{display:flex;flex-direction:row;gap:12px;align-items:center;padding:16px 4px;min-height:78px;border:0;border-bottom:1px solid #c5d1d3;border-radius:0;background:none}}
{r} .sg-portrait{{width:44px;height:44px;flex:none}}
{r} .sg-portrait-picture{{border:1px solid #93adb7;background:#f8fbf5;border-radius:5px}}
{r} .sg-portrait-ring{{border-radius:7px;border-width:1px}}
{r} .sg-person-copy{{text-align:start;min-width:0;flex:1}}
{r} .sg-person-copy strong{{font-size:14px}}
{r} .sg-person-copy small{{font-size:11px;line-height:1.7}}
{r} .sg-person[data-selected=true]{{background:#e4eef0;border-inline-start:3px solid #4d7482;padding-inline-start:8px}}
''')
descriptions={
'bookend-counter':('numbers','左右のブックエンドで数値面を支える数量入力。狭幅でも両端を下段へ移さず、同じ軸へ保つ。'),
'recessed-dial-number':('numbers','正円の読み取り面を持つダイヤル型数量入力。狭幅では円の縦横比を固定したまま、増減操作を下へ分ける。'),
'rail-stop-number':('numbers','水平の目盛りと小さい現在指標を持つ数量入力。増減キーはホバー中も暗い面と白い記号のコントラストを保つ。'),
'ribbon-count-number':('numbers','数値面の背後で帯が折り返される数量入力。前面は平らに保ち、両端と下端にだけ帯の裏面を見せる。'),
'soft-amount-number':('numbers','数量と単位を一行へまとめるコンパクトな数量入力。両端の増減操作と中央の直接入力を一つの短い面へ収める。'),
'warm-unit-number':('numbers','分量の数字と単位を同じ基線で読む数量入力。下段の増減操作を分け、長い単位でも入力面を圧迫しない。'),
'bookplate-profile':('avatars','蔵書票の罫線と小さなしおりを持つ人物札。肖像と氏名を対にし、活字の見出しと余白で製本の印象を作る。'),
'stitch-label-profile':('avatars','縫い付けた布の名札に肖像と氏名を横に並べるプロフィール。折りカードをやめ、縫い目と布の端を一体にする。'),
'blueprint-id-profile':('avatars','肖像と氏名を細い製図基準線へ揃えるプロフィール。大きな支持脚を除き、人物情報を設計図の主役にする。'),
'outline-person-profile':('avatars','小さな角形肖像と氏名・役割を横に揃えた人物一覧。区切り線で行を読み分け、選択した人物は左端で示す。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B014 数値の形と人物の情報を整える\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items())+'\nB数量2件の展示用ラベル・単位・範囲はVanilla/React configを一致させた。呼出し側のoptionsを優先するAPIは不変。\n')
