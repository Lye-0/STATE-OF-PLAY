import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B010';b.mkdir(exist_ok=True)
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
def root(id):return '.sop-foundation.sop-'+id+'.sop-'+id
id='vertical-survey-progress';r=root(id)
add('progress',id,f'''
{r}{{--paper:#f3f0e8;--ink:#35434b;--muted:#5a656c;--accent:#a54e32}}
{r} .ff-progress-visual{{height:200px;min-height:200px;grid-template-columns:50px minmax(0,1fr);gap:18px;padding:0 8px}}
{r} .ff-progress-track{{left:8px;width:44px;top:0;bottom:0;border:0;border-inline:1px solid #abb0ac;background:repeating-linear-gradient(0deg,#e1e1d8 0 19px,#acb2af 19px 20px);overflow:visible}}
{r} .ff-progress-track::after{{width:12px;background:repeating-linear-gradient(0deg,transparent 0 19px,#46575b 19px 20px)}}
{r} .ff-progress-fill{{background:#b863424a;transition:none}}
{r} .ff-progress-fill::after{{content:'';position:absolute;left:-5px;right:-10px;top:0;height:2px;background:#9d472e;box-shadow:0 1px #faf5e8}}
{r} .ff-reading{{grid-column:2;margin:0;border:0;border-bottom:1px solid #aab5b5;padding:8px 0 10px;font-size:38px;justify-self:stretch;text-align:start}}
{r} .ff-process-steps{{font-size:11px;gap:8px}}
{r}[data-indeterminate=true] .ff-progress-fill{{height:0!important;animation:none}}{r}[data-indeterminate=true] .ff-progress-fill::after{{display:none}}
''')
id='segmented-ruler-progress';r=root(id)
add('progress',id,f'''
{r}{{--paper:#f1f1e8;--ink:#3d4e54;--muted:#5a6a70;--accent:#527889;--edge:#b3c1c4}}
{r} .ff-progress-visual{{padding-bottom:17px}}
{r} .ff-progress-track{{height:42px;overflow:visible;background:#d6dfe0;border:0;border-radius:0;clip-path:none;mask:none}}
{r} .ff-progress-fill{{background:#628797;height:100%;box-shadow:inset 0 2px #91a9b0;filter:none}}
{r} .ff-progress-track::after{{inset:0;border:0;background:repeating-linear-gradient(90deg,transparent 0 calc(10% - 2px),var(--paper) calc(10% - 2px) 10%);clip-path:polygon(0 0,49% 0,49% 8px,51% 8px,51% 0,100% 0,100% 100%,51% 100%,51% calc(100% - 8px),49% calc(100% - 8px),49% 100%,0 100%)}}
{r} .ff-progress-track::before{{content:'';display:block;position:absolute;inset:47px 0 auto;height:12px;border-bottom:1px solid #9aaeb5;background:repeating-linear-gradient(90deg,#657c86 0 1px,transparent 1px 10%);pointer-events:none}}
{r} .ff-progress-visual .ff-reading{{font-size:46px;color:#3d5662}}
{r} .ff-process-steps{{font-size:11px}}
''')
id='caption-band-progress';r=root(id)
add('progress',id,f'''
{r}{{--paper:#f8f0e9;--ink:#584237;--muted:#725e52;--accent:#9c5c40;--edge:#cab29f}}
{r} .ff-progress-visual{{position:relative;min-height:150px;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:end;gap:0;padding-bottom:0;border-bottom:1px solid #b29a87}}
{r} .ff-progress-visual .ff-reading{{grid-column:2;grid-row:1;margin:0;padding:14px 0 16px 16px;font:44px/1.2 Georgia,'Yu Mincho',serif;border:0;background:var(--paper);color:#584237}}
{r} .ff-progress-track{{grid-column:1 / -1;grid-row:2;width:100%;height:15px;min-height:15px;clip-path:none;mask:none;border:0;background:#e0cbbd;overflow:hidden}}
{r} .ff-progress-fill{{background:#9c5c40;height:100%;box-shadow:none;filter:none}}
{r} .ff-progress-track::after{{display:none}}
{r} .ff-progress-visual::before{{content:'';display:block;position:absolute;left:0;bottom:36px;width:40%;height:10px;border-block:1px solid #bda18d;background:none}}
{r} .ff-process-steps{{font:11px/1.6 Georgia,'Yu Mincho',serif;margin-top:14px}}
''')
id='terraced-progress';r=root(id)
add('progress',id,f'''
{r}{{--paper:#eef1eb;--ink:#3e534d;--muted:#5a6e65;--accent:#568170;--edge:#adbfaf}}
{r} .ff-progress-track{{height:65px;background:#cad8ce;clip-path:polygon(0 65%,20% 65%,20% 49%,40% 49%,40% 33%,60% 33%,60% 17%,80% 17%,80% 0,100% 0,100% 100%,0 100%)}}
{r} .ff-progress-fill{{background:linear-gradient(0deg,#416857 0 5px,#6b917c 5px);box-shadow:none;filter:none}}
{r} .ff-progress-track::after{{inset:0;background:repeating-linear-gradient(90deg,transparent 0 calc(20% - 2px),#eef1eb calc(20% - 2px) 20%)}}
{r} .ff-progress-visual .ff-reading{{color:#3e5e4f;font-size:44px}}
{r} .ff-process-steps{{font-size:11px}}
''')
id='linear-radar-progress';r=root(id)
add('progress',id,f'''
{r}{{--paper:#f0f1e9;--ink:#3d4d50;--muted:#5b6b6a;--accent:#567c78;--edge:#b6c4bc}}
{r} .ff-progress-track{{height:98px;border-block:2px solid #8da69f;background:repeating-linear-gradient(0deg,transparent 0 17px,#bacbc3 17px 18px),repeating-linear-gradient(90deg,#e5ece4 0 23px,#bacbc3 23px 24px);box-shadow:inset 0 1px #fffdf1}}
{r} .ff-progress-fill{{background:#8baaa44a;transition:width .25s ease;box-shadow:none;filter:none}}
{r} .ff-progress-fill::after{{inset-inline-end:-2px;inset-block:0;width:4px;background:#426d69;border:0;box-shadow:0 0 0 1px #edf4e9}}
{r} .ff-progress-track::after{{width:1px;background:#718f85}}
{r} .ff-progress-visual .ff-reading{{color:#3d5556;font:44px/1.2 ui-monospace,monospace}}
{r} .ff-process-steps{{font-size:11px}}
''')
id='warm-reading-progress';r=root(id)
add('progress',id,f'''
{r}{{--ff-panel:#fffdf6;--ff-base:#f4f0e6;--ff-ink:#4a4336;--ff-muted:#696050;--ff-accent:#8b714c;--ff-line:#c8bca5;background:#fffdf6;padding:22px;border-inline-start:4px solid #b29a72;border-radius:0}}
{r} .ff-heading{{font:600 15px/1.7 Georgia,'Yu Mincho',serif}}
{r} .ff-eyebrow{{display:none}}
{r} .ff-progress-visual{{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:14px;min-height:80px}}
{r} .ff-progress-track{{grid-column:1;grid-row:1;height:4px;background:#e5ddcd;min-width:0}}
{r} .ff-progress-fill{{background:#8b714c}}
{r} .ff-reading{{grid-column:2;grid-row:1;margin:0;font:28px/1.3 Georgia,'Yu Mincho',serif;color:#4a4336}}
{r} .ff-process-steps{{display:flex;gap:12px;justify-content:space-between;margin-top:0;padding-top:12px;border-top:1px solid #d8ceba;font-size:11px;line-height:1.7}}
''')
id='open-corner-upload';r=root(id)
add('uploads',id,f'''
{r}{{--paper:#edf1f0;--ink:#3f5059;--muted:#5d6c72;--accent:#577b8d;--edge:#aabfc5}}
{r} .ff-dropzone{{min-height:245px;padding:34px 22px;background:transparent;isolation:isolate}}
{r} .ff-dropzone::before{{inset:0 0 12px;border:0;border-inline:5px solid #7798a6;border-top:5px solid #aac0c7;background:#f7f7ef;clip-path:polygon(0 0,100% 0,100% 100%,calc(100% - 30px) 100%,calc(100% - 30px) calc(100% - 10px),30px calc(100% - 10px),30px 100%,0 100%);z-index:-2;transform:none}}
{r} .ff-dropzone::after{{inset:auto 16px 0;height:22px;transform:none;border:0;border-bottom:5px solid #496f81;background:#b2c8cc;clip-path:polygon(0 0,12px 0,18px 10px,calc(100% - 18px) 10px,calc(100% - 12px) 0,100% 0,100% 100%,0 100%);z-index:-1}}
{r} .ff-upload-symbol{{background:none;border:0;border-bottom:2px solid #7f9ca9;border-radius:0;color:#446b7e}}
{r} .ff-dropzone[data-dragging=true]::before{{border-color:#416e85;background:#eef6f5}}
{r} .ff-upload-files li{{border:0;border-inline-start:3px solid #7397a6;border-bottom:1px solid #c3d0d0;background:#f7f7ef}}
''')
id='stone-recess-upload';r=root(id)
add('uploads',id,f'''
{r}{{--paper:#eeeee7;--ink:#484f4c;--muted:#646d66;--accent:#718270;--edge:#b6beb0}}
{r} .ff-dropzone{{min-height:250px;padding:34px 27px}}
{r} .ff-dropzone::before{{inset:0;background:linear-gradient(135deg,#c2c8b9,#a5b09e 55%,#d4d9cd);clip-path:polygon(12px 0,100% 0,calc(100% - 12px) 100%,0 100%)}}
{r} .ff-dropzone::after{{inset:12px 13px 15px;background:#f7f8ef;border-top:4px solid #899783;border-bottom:3px solid #e3e8d9;clip-path:polygon(5px 0,100% 0,calc(100% - 5px) 100%,0 100%)}}
{r} .ff-upload-symbol{{background:#edf0e4;border-bottom:2px solid #aab8a0;color:#586f58}}
{r} .ff-upload-files li{{border-inline-start:4px solid #b2bda5;border-bottom:2px solid #d6decb;background:#f7f8ef}}
''')
id='folio-band-upload';r=root(id)
add('uploads',id,f'''
{r}{{--ink:#5d4b35;--muted:#74634e}}
{r} .ff-dropzone{{padding:32px 18px 32px 65px}}
{r} .ff-dropzone>strong{{font-size:22px;line-height:1.6}}
@container(max-width:290px){{
{r} .ff-dropzone{{padding:30px 12px 30px 43px;min-height:250px}}
{r} .ff-dropzone::before{{background:linear-gradient(90deg,transparent 0 28px,#fff7e5 28px);mask:radial-gradient(ellipse 5px 4px at 37px 13%,transparent 99%,#000 100%);border-bottom-width:3px}}
{r} .ff-dropzone::after{{width:43px}}
{r} .ff-dropzone>strong{{font-size:20px}}
{r} .ff-upload-files{{padding-inline-start:28px}}
{r} .ff-upload-files li::before{{inset-inline-start:-28px;width:43px}}
{r}:dir(rtl) .ff-dropzone{{padding-inline:43px 12px}}
}}
''')
id='perforated-upload';r=root(id)
add('uploads',id,f'''
{r}{{--ink:#634a39;--muted:#79614f}}
{r} .ff-dropzone{{padding:30px 48px 30px 20px}}
{r} .ff-dropzone>strong{{font-size:22px;line-height:1.6}}
{r} .ff-dropzone::before{{inset-inline-end:28px}}
{r} .ff-dropzone::after{{width:18px}}
{r}:dir(rtl) .ff-dropzone{{padding-inline:20px 48px}}
@container(max-width:290px){{{r} .ff-dropzone{{padding-inline:14px 40px}}{r}:dir(rtl) .ff-dropzone{{padding-inline:14px 40px}}{r} .ff-dropzone>strong{{font-size:20px}}}}
''')
descriptions={
'vertical-survey-progress':('progress','細い測量尺と、正面に固定した数値を持つ進捗表示。実値の高さに赤い指示線を置き、空の額縁を取り除く。'),
'segmented-ruler-progress':('progress','十の区画と下端の細い尺を組み合わせた進捗表示。中央の継ぎ目を基準に、実際の充填量と全体の位置を読み取る。'),
'caption-band-progress':('progress','右揃えの数値と、下端を横切る細いキャプション帯の進捗表示。階段形を使わず、文字組みと帯の連続性で進みを示す。'),
'terraced-progress':('progress','五段の段丘を実値の位置まで満たす進捗表示。隣の段との細い隙間と下端の断面で、高さと充填を読み分ける。'),
'linear-radar-progress':('progress','細い枠と格子の中を指示線が進む線形レーダー。枠の光沢と厚みを抑え、進捗を示す線を主役にする。'),
'warm-reading-progress':('progress','本文に添える細い進捗線と端の数値。見出しと段階名を読み物の組版へ揃え、広い計器面を持ち込まない。'),
'open-corner-upload':('uploads','左右のガイドと手前の受け皿でファイルの入口を示すドロップ領域。角の装飾から、受け取る場所が分かる開いたトレーへ組み替える。'),
'stone-recess-upload':('uploads','薄い石の切面に、水平で広い読み取り床を設けたドロップ領域。外枠の占有を減らし、案内と選択操作を中心へ置く。'),
'folio-band-upload':('uploads','綴じ具で選んだファイルを束ねるドロップ領域。狭幅では綴じ代を縮め、主ラベルと選択操作が自然に読める幅を確保する。'),
'perforated-upload':('uploads','切取帯を脇に置く紙のドロップ領域。帯を細くし、狭幅でも見出しの末尾だけが孤立しない本文幅を確保する。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B010 値と入口が先に分かる構造\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
