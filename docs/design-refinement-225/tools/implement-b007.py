import json
from pathlib import Path
w=Path('docs/design-refinement-225')
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n'+css+'\n')
r='.sop-check.sop-embossed-disc-check.sop-embossed-disc-check'
add('checkboxes','embossed-disc-check',f'''/* A pressed circular seal with a scalloped die edge and an inset center. */
{r}{{--cb-bg:#ede9e1;--cb-box:#ede4d2;--cb-accent:#66543e;--cb-ink:#443e37;--cb-muted:#655e53;--cb-pad:28px;padding:28px;gap:28px}}
{r}>.sop-check-box{{border:1px solid #b6a68b;border-radius:50%;background:#eee5d5;box-shadow:inset 0 3px 0 #cfc0a8,inset 0 -2px 0 #fff7e7!important}}
{r} .sop-check-aura{{inset:-6px;border:0;border-radius:50%;background:repeating-conic-gradient(#baa88c 0deg 5deg,#e1d4bd 5deg 10deg);mask:radial-gradient(circle,transparent 56%,#000 58%);z-index:-1}}
{r} .sop-check-detail{{display:block;inset:5px;border:1px solid #c6b697;border-radius:50%;background:none;opacity:1}}
{r}>input:is(:checked,:indeterminate)+.sop-check-box{{background:#e1d3b9;border-color:#9f8a68;box-shadow:inset 0 3px 0 #b9a78a,inset 0 -2px 0 #f7edd9!important}}
''')
r='.sop-check.sop-warm-option-check'
add('checkboxes','warm-option-check',f'''/* An opt-in note with the native control at the end of the reading line. */
{r}{{--cb-bg:#f7f2e7;--cb-ink:#464138;--cb-muted:#6a6256;--cb-accent:#705f46;--cb-pad:14px;--cb-size:23px;display:grid;grid-template-columns:minmax(0,1fr) 23px;column-gap:20px;padding:14px 16px;background:var(--cb-bg);border:0;border-inline-start:3px solid #d6cab4;border-radius:0;min-height:76px}}
{r}>.sop-check-copy{{grid-column:1;grid-row:1}}
{r}>.sop-check-box{{grid-column:2;grid-row:1;box-shadow:none;border-radius:2px}}
{r}>input[type=checkbox]{{inset-inline-start:auto;inset-inline-end:16px}}
{r}:has(input:checked){{border-inline-start-color:#705f46}}
{r} .sop-check-label{{font-family:Georgia,'Yu Mincho',serif}}
{r} .sop-check-detail{{display:none}}
''')
r='.sop-popup.sop-dispatch-sheet-dialog.sop-dispatch-sheet-dialog'
add('popups','dispatch-sheet-dialog',f'''/* A perforated dispatch leaf with a docket, main sheet and signing strip. */
{r}{{--pp-bg:#f8f4e8;--pp-ink:#41423b;--pp-muted:#68675d;--pp-accent:#706047}}
{r}>.sop-popup-window{{border:0;border-radius:0;background:#c8c3b3;padding-inline-start:19px}}
{r} .sop-popup-shell{{padding:24px 28px;max-height:calc(100dvh - 24px);border-inline-start:1px dashed #a7a08d;background:#f8f4e8}}
{r}>.sop-popup-window::before{{content:'';position:absolute;inset:8px auto 8px 6px;width:7px;background:radial-gradient(circle,#686e67 0 2px,transparent 2.5px) center/7px 19px;pointer-events:none}}
{r} .sop-popup-top{{padding-bottom:12px;border-bottom:2px solid #7f8377;gap:18px}}
{r} .sop-popup-kicker{{padding:7px 12px;border:1px solid #8e927f;font-size:11px;letter-spacing:.14em}}
{r} .sop-popup-intro{{padding-inline-start:14px;border-inline-start:3px solid #b1a17e}}
{r} .sop-popup-intro h2{{font-size:clamp(26px,5vw,36px);font-weight:400}}
{r} .sop-popup-body{{padding:20px 0;border-block-end:1px solid #b8b2a0}}
{r} .pp-callout{{border:0;background:transparent;padding:0}}
{r} .sop-popup-footer{{border-top:1px dashed #b8b2a0;padding-top:18px;margin-top:6px;justify-content:space-between}}
{r} .sop-popup-primary{{border-radius:0;border:0;border-bottom:3px solid #554832}}
{r}>.sop-popup-trigger{{border-inline-start:8px solid #c8c3b3;border-radius:0}}
@media(max-width:420px){{{r} .sop-popup-shell{{padding:18px 16px}}}}
''')
r='.sop-popup.sop-console-bay-dialog.sop-console-bay-dialog'
add('popups','console-bay-dialog',f'''/* A recessed console screen with a separate right-hand control bay. */
{r}{{--pp-bg:#283642;--pp-ink:#eef1ee;--pp-muted:#becbd0;--pp-line:#617681;--pp-accent:#aecad2;--pp-on-accent:#243f4d;--pp-width:660px}}
{r}>.sop-popup-window{{border:6px solid #667c87;border-radius:3px;background:#283642}}
{r} .sop-popup-shell{{display:grid;grid-template-columns:minmax(0,1fr) 142px;gap:0 22px;padding:22px;background:#283642;max-height:calc(100dvh - 36px)}}
{r} .sop-popup-top{{grid-column:1/-1;border-bottom:1px solid #72838a;padding-bottom:12px;margin-bottom:20px}}
{r} .sop-popup-intro{{grid-column:1;grid-row:2}}
{r} .sop-popup-intro h2{{font:500 28px/1.5 Arial,'Yu Gothic',sans-serif}}
{r} .sop-popup-body{{grid-column:1;grid-row:3;background:#182832;color:#dce8eb;border:1px solid #3f5866;border-top:3px solid #14202a;padding:17px;border-radius:0}}
{r} .pp-callout{{background:none;color:inherit}}
{r} .sop-popup-footer{{grid-column:2;grid-row:2/4;display:flex;flex-direction:column;justify-content:flex-end;align-items:stretch;margin:0;padding:0 0 0 18px;border:0;border-inline-start:1px solid #70848d;gap:14px}}
{r} .sop-popup-footer>button{{padding:14px 10px;min-height:54px;border-radius:2px;flex:none}}
{r} .sop-popup-secondary{{background:#384d5b;color:#e7edef}}
{r} .sop-popup-primary{{background:#bdd4db;color:#223d4a;border-bottom:3px solid #84a4b0}}
{r}>.sop-popup-trigger{{background:#283642;color:#eef1ee;border:3px solid #667c87;border-radius:2px}}
@media(max-width:520px){{{r} .sop-popup-shell{{display:block;padding:18px}}{r} .sop-popup-footer{{flex-direction:row;border:0;border-top:1px solid #70848d;padding:18px 0 0;margin-top:20px;flex-wrap:wrap}}{r} .sop-popup-footer>button{{flex:1 1 100px}}}}
''')
r='.sop-popup.sop-stepped-corner-dialog.sop-stepped-corner-dialog'
shape='polygon(0 0,calc(100% - 36px) 0,calc(100% - 36px) 12px,calc(100% - 18px) 12px,calc(100% - 18px) 28px,100% 28px,100% 100%,36px 100%,36px calc(100% - 12px),18px calc(100% - 12px),18px calc(100% - 28px),0 calc(100% - 28px))'
add('popups','stepped-corner-dialog',f'''/* The three steps are the actual outline of the enclosure. */
{r}{{--pp-bg:#edf0ed;--pp-ink:#35454e;--pp-muted:#596a72;--pp-accent:#526e7c;--pp-on-accent:#fff}}
{r}>.sop-popup-window{{clip-path:{shape};border:0;border-radius:0;background:#8299a1;padding:5px}}
{r} .sop-popup-shell{{clip-path:{shape};padding:32px 34px;max-height:calc(100dvh - 34px);background:#edf0ed}}
{r} .sop-popup-top{{padding-right:10px}}
{r} .sop-popup-close{{border-radius:0;border:0;background:#d6e1e2}}
{r} .sop-popup-intro h2{{font-size:clamp(26px,5vw,36px);font-weight:500}}
{r} .sop-popup-body{{padding:0 0 0 14px;border-inline-start:3px solid #a9bbc1;background:none}}
{r} .pp-callout{{border:0;background:none;padding:0}}
{r} .sop-popup-footer>button{{border-radius:0}}
{r}>.sop-popup-trigger{{border-radius:0;border:0;border-inline-start:6px solid #8299a1;background:#edf0ed;color:#35454e}}
@media(max-width:420px){{{r} .sop-popup-shell{{padding:30px 24px}}}}
@media(forced-colors:active){{{r}>.sop-popup-window,{r} .sop-popup-shell{{clip-path:none}}}}
''')
r='.sop-popup.sop-split-frame-dialog.sop-split-frame-dialog'
add('popups','split-frame-dialog',f'''/* Two opposed frame halves hold separate title and content planes. */
{r}{{--pp-bg:#f1eee7;--pp-ink:#3d454a;--pp-muted:#626d71;--pp-accent:#5b7380;--pp-width:660px}}
{r}>.sop-popup-window{{border:0;background:#a2b2b8;padding:9px;border-radius:0}}
{r} .sop-popup-shell{{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:20px 25px;padding:25px;background:#f1eee7;max-height:calc(100dvh - 42px)}}
{r} .sop-popup-top{{grid-column:1/-1;margin:0}}
{r} .sop-popup-intro{{grid-column:1;border-inline-end:1px solid #b7c1c2;padding-inline-end:22px}}
{r} .sop-popup-intro h2{{font-size:30px}}
{r} .sop-popup-body{{grid-column:2;align-self:center;background:none}}
{r} .pp-callout{{background:none;border:0;padding:0}}
{r} .sop-popup-footer{{grid-column:1/-1;margin:0;border:0;padding-top:14px;justify-content:space-between}}
{r}>.sop-popup-window::before,{r}>.sop-popup-window::after{{content:'';position:absolute;background:#f1eee7;pointer-events:none;z-index:4}}
{r}>.sop-popup-window::before{{left:45%;top:0;width:40px;height:9px}}
{r}>.sop-popup-window::after{{right:45%;bottom:0;width:40px;height:9px}}
{r}>.sop-popup-trigger{{border:0;border-inline:5px solid #a2b2b8;border-radius:0}}
@media(max-width:520px){{{r} .sop-popup-shell{{display:block;padding:20px}}{r} .sop-popup-top{{margin-bottom:18px}}{r} .sop-popup-intro{{border:0;border-bottom:1px solid #b7c1c2;padding:0 0 18px;margin-bottom:20px}}{r} .sop-popup-footer{{margin-top:22px}}}}
''')
r='.sop-popup.sop-warm-message-dialog.sop-warm-message-dialog'
add('popups','warm-message-dialog',f'''/* A compact reading note: centered message, unboxed body, equal actions. */
{r}{{--pp-bg:#faf6ee;--pp-ink:#484239;--pp-muted:#6d6254;--pp-accent:#786344;--pp-on-accent:#fffaf0;--pp-width:440px}}
{r}>.sop-popup-window{{border:1px solid #c9bda9;border-radius:3px}}
{r} .sop-popup-shell{{padding:22px 30px 28px}}
{r} .sop-popup-top{{margin-bottom:18px}}
{r} .sop-popup-kicker{{font-size:10px;letter-spacing:.14em}}
{r} .sop-popup-intro{{text-align:center}}
{r} .sop-popup-intro h2{{font:400 27px/1.6 Georgia,'Yu Mincho',serif}}
{r} .sop-popup-body{{padding:10px 0 4px;border:0;background:transparent;text-align:center;max-width:38ch;margin:auto;line-height:1.9}}
{r} .sop-popup-footer{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:24px;padding-top:20px;border-top:1px solid #d0c5b3}}
{r} .sop-popup-footer>button{{width:100%;padding:12px 9px;gap:5px;border-radius:2px}}
''')
r='.sop-popup.sop-neutral-form-dialog.sop-neutral-form-dialog'
add('popups','neutral-form-dialog',f'''/* A form workspace with a distinct heading, input area and action bar. */
{r}{{--pp-bg:#fff;--pp-ink:#35424b;--pp-muted:#596b77;--pp-accent:#48677d;--pp-on-accent:#fff;--pp-width:540px}}
{r}>.sop-popup-window{{border:1px solid #aab7bf;border-radius:4px}}
{r} .sop-popup-shell{{padding:0;background:#fff}}
{r} .sop-popup-top{{padding:16px 22px;margin:0;border-bottom:1px solid #d5dde1;background:#eef2f4}}
{r} .sop-popup-intro{{padding:22px 24px 8px}}
{r} .sop-popup-intro h2{{font:600 25px/1.5 Arial,'Yu Gothic',sans-serif}}
{r} .sop-popup-body{{padding:10px 24px 24px;border:0;background:#fff}}
{r} .pp-form-grid{{display:grid;gap:18px}}
{r} .pp-form-grid label{{display:grid;gap:7px;min-width:0;font-size:13px;color:#35424b}}
{r} .pp-form-grid :is(input,textarea){{width:100%;max-width:100%;min-width:0;padding:11px 12px;border:1px solid #9aaebc;border-radius:3px;background:#fbfcfc;color:#263e4b;font:14px/1.6 Arial,'Yu Gothic',sans-serif}}
{r} .pp-form-grid textarea{{resize:vertical;min-height:95px}}
{r} .pp-form-grid small{{color:#5b6d78;font-size:12px}}
{r} .sop-popup-footer{{padding:17px 24px;margin:0;border-top:1px solid #d5dde1;background:#eef2f4}}
@media(forced-colors:active){{{r} .pp-form-grid label,{r} .pp-form-grid small{{color:CanvasText}}{r} .pp-form-grid :is(input,textarea){{background:Field;color:FieldText;border-color:ButtonText}}}}
''')
b=Path('src/parts/popups/neutral-form-dialog');old='<div class="pp-callout"><b>変更内容のプレビュー</b><br>ここに確認が必要な情報を表示します。操作はデモです。</div>';form='<div class="pp-form-grid"><label>プロジェクト名<input name="projectName" autocomplete="off" value="新しいプロジェクト"></label><label>メモ<textarea name="projectNote" rows="3" placeholder="共有したい内容を入力"></textarea></label><small>入力はこの画面での確認用です。外部へ送信しません。</small></div>'
for f in [b/'markup.html',b/'vanilla/index.html']:
 s=f.read_text().replace(old,form).replace('Open Essential','入力内容を編集').replace('変更を確認しますか？','プロジェクトを編集').replace('現在の設定を確認してから、次へ進んでください。','名前とメモを確認できます。').replace('CONFIRMATION','PROJECT DETAILS');f.write_text(s)
f=b/'react/Example.tsx';s=f.read_text().replace(old.replace('<br>','<br/>'),form.replace(' class=',' className=').replace('autocomplete=','autoComplete=').replace('value="新しいプロジェクト"','defaultValue="新しいプロジェクト"').replace('rows="3"','rows={3}').replace('></textarea>','/>').replace('value="新しいプロジェクト">','value="新しいプロジェクト"/>').replace('defaultValue="新しいプロジェクト">','defaultValue="新しいプロジェクト"/>')).replace('変更を確認しますか？','プロジェクトを編集').replace('現在の設定を確認してから、次へ進んでください。','名前とメモを確認できます。').replace('CONFIRMATION','PROJECT DETAILS').replace('Open Neutral Form Dialog','入力内容を編集');f.write_text(s)
# Native range geometry remains in control; material styles apply only outside forced colors.
for id in ['stone-inlay-range','wheel-guide-range']:
 r=f'.sop-foundation.sop-{id}.sop-{id}'
 if id=='stone-inlay-range':
  body=f'''{r}{{--surface:#dedbd3;--paper:#f4f1e8;--ink:#3d4243;--muted:#606665;--accent:#697a7d;--edge:#a6aca8;--renewal-thumb-width:40px;border-radius:0;border-bottom:7px solid #a7a59a;background:radial-gradient(#69737322 .6px,transparent .8px) 0 0/9px 13px,#dedbd3}}
{r} .ff-slider{{background:linear-gradient(0deg,transparent calc(50% - 13px),#b5b8b0 calc(50% - 13px),#a3a9a3 calc(50% + 13px),transparent calc(50% + 13px));border-inline:3px solid #c8c9bf}}
{r} .ff-rail{{height:6px;top:33px;background:#8e9a96;border:0}}
{r} .ff-fill{{background:#4e656a}}
''';thumb='background:linear-gradient(124deg,transparent 38%,#eef0e166 40%,transparent 43%),linear-gradient(145deg,#768687,#475b60);border:4px solid #8b9895;border-top-color:#d8ded3;border-bottom-color:#34464b;border-radius:1px;clip-path:polygon(0 7px,7px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%)'
 else:
  body=f'''{r}{{--surface:#e6ebec;--paper:#f6f5ee;--ink:#334a57;--muted:#536b78;--accent:#4b7387;--edge:#a9bac1;--renewal-thumb-width:44px;border-radius:3px}}
{r} .ff-slider{{height:72px}}
{r} .ff-rail{{top:54px;height:6px;background:#708894;border-top:2px solid #a3bac2;border-bottom:1px solid #435d6c}}
{r} .ff-rail::after{{inset:8px 0 auto;height:3px;background:repeating-linear-gradient(90deg,#6a8491 0 7px,transparent 7px 15px)}}
{r} .ff-fill{{background:#476e81}}
''';thumb='border:4px solid #5c7787;border-radius:50%;background:radial-gradient(circle,#36566a 0 4px,#a2bac5 4.5px 7px,transparent 7.5px),repeating-conic-gradient(#f5f5ed 0deg 45deg,#9cafb8 45deg 52deg,#f5f5ed 52deg 90deg);box-shadow:inset 0 0 0 2px #e9eee9'
 add('sliders',id,'@media(forced-colors:none){'+body+f'{r} [data-range]::-webkit-slider-thumb{{{thumb}}}\n{r} [data-range]::-moz-range-thumb{{{thumb}}}'+'}')
descriptions={
'embossed-disc-check':('checkboxes','刻みのある円盤の縁と、内側へ押された確認面を持つチェック。紙を押した凹みと放射状の刻印を区別し、チェックを中央の静かな面へ置く。'),
'warm-option-check':('checkboxes','短い説明を先に読み、行末のチェックで選ぶオプトイン欄。選択すると左の細い罫線も濃くなり、長い説明でも読み順を保つ。'),
'dispatch-sheet-dialog':('popups','穿孔のある綴じ代、送り状の見出し、本文、署名操作の帯を一枚の確認書へ組むダイアログ。本文と操作を紙面の階層で分ける。'),
'console-bay-dialog':('popups','凹んだ情報画面と右の操作ベイを備えるコンソール型ダイアログ。狭幅では操作を下へ移し、表示と操作の役割を保つ。'),
'stepped-corner-dialog':('popups','右上と左下の三段の切欠きが実際の外形を作るダイアログ。切欠きから離して本文と操作を置き、輪郭と余白を対応させる。'),
'split-frame-dialog':('popups','対向する二つの枠が、見出しと本文の別々の面を支えるダイアログ。狭幅では読む順に縦へ組み、枠の分割を上下の切れ目へ残す。'),
'warm-message-dialog':('popups','中央に整えた読み物と、同じ幅の二つの判断ボタンを持つコンパクトなメッセージ欄。内側の箱を減らし、本文の余白を優先する。'),
'neutral-form-dialog':('popups','見出し、入力領域、操作バーを分けたフォーム用ダイアログ。実際の名前・メモ入力例を備え、native入力と任意のフォーム内容を保持する。'),
'stone-inlay-range':('sliders','切断面のある石の台へ横溝を刻み、斜めに欠いた石のつまみを通すスライダー。粒状の台、磨いた溝、濃いインレイを分けて見せる。'),
'wheel-guide-range':('sliders','スポークと軸を持つ車輪が、下側のレールへ接するスライダー。車輪・走行面・下の枕木を接続し、値はネイティブ入力で即座に確定する。')}
for id,(cat,new) in descriptions.items():
 b=Path('src/parts')/cat/id;m=b/'meta.json';d=json.loads(m.read_text());old=d['description'];short=d['tagline'];d['description']=new;d['tagline']=new.split('。')[0]+'。';m.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [b/'usage.md',b/'prompt.md',b/'styles.css',*list((b/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(w/'batches/B007/design.md').write_text('# B007 形と用途を持つダイアログ・入力\n\n'+''.join(f'- {id}：{d[1]}\n' for id,d in descriptions.items())+'\nポップアップはnative dialogのfocus/Escape/再表示を維持。Neutral Formの入力は展示・Vanilla例・React例を揃え、保存/送信は行わない。スライダーはネイティブrangeと44pxのつまみ操作領域を保ち、forced colorsでは既存のnative表示へ戻す。\n')
