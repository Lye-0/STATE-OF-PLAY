import json,re
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B009';b.mkdir(exist_ok=True)
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
def root(id):return '.sop-foundation.sop-'+id+'.sop-'+id
id='signal-capsule-notice';r=root(id)
add('toasts',id,f'''
{r}{{--paper:#f6f3e9;--ink:#35464c;--muted:#57656a;--accent:#416b7c}}
{r} .ff-notice{{padding:22px 14px 22px 18px;gap:12px;min-height:108px}}
{r} .ff-notice::before{{inset:0 0 0 52px;border:1px solid #a6b5b8;border-inline-start:0;border-radius:0 9px 9px 0;background:var(--paper);clip-path:none;box-shadow:inset 0 -4px #dde3df}}
{r} .ff-notice::after{{display:block;inset:0 auto 0 0;width:53px;border:0;border-radius:28px 0 0 28px;background:linear-gradient(90deg,#748e96,#b3c3c3 12px,#d4dfd9 100%);box-shadow:inset 1px 0 #e6ede5;clip-path:none}}
{r} .ff-notice-icon{{width:32px;height:32px;border:1px solid #77929a;border-radius:50%;background:#eff3e9;color:#335d6d;box-shadow:0 2px 0 #6c8993}}
{r} .ff-notice p{{font-size:12px}}{r} .ff-inline-action{{color:#365d6b;border-color:#829ba2}}
{r}:dir(rtl) .ff-notice::before{{inset:0 52px 0 0;border-radius:9px 0 0 9px}}
{r}:dir(rtl) .ff-notice::after{{left:auto;right:0;border-radius:0 28px 28px 0}}
''')
id='folded-message-notice';r=root(id)
add('toasts',id,f'''
{r}{{--paper:#faf1f5;--ink:#553e50;--muted:#6d5766;--accent:#80506b}}
{r} .ff-notice{{padding:26px 24px;gap:9px;min-height:140px}}
{r} .ff-notice::before{{inset:0 12px;background:var(--paper);border:0;clip-path:none}}
{r} .ff-notice::after{{background:linear-gradient(90deg,#a18096 0 6px,#d4b7c8 6px 12px,transparent 12px calc(100% - 12px),#b891a9 calc(100% - 12px) calc(100% - 6px),#88687e calc(100% - 6px));clip-path:polygon(0 14px,6px 14px,12px 0,calc(100% - 12px) 0,calc(100% - 6px) 14px,100% 14px,100% calc(100% - 14px),calc(100% - 6px) calc(100% - 14px),calc(100% - 12px) 100%,12px 100%,6px calc(100% - 14px),0 calc(100% - 14px))}}
{r} .ff-notice-icon{{width:25px;height:30px;flex:none;color:var(--accent)}}{r} .ff-notice p{{font-size:12px}}{r} .ff-inline-action{{color:#70455f}}
''')
id='console-line-notice';r=root(id)
add('toasts',id,f'''
{r}{{--paper:#eef4f3;--ink:#314d5a;--muted:#506570;--accent:#386a80}}
{r} .ff-notice{{padding:23px 16px 20px;gap:10px;border-top:5px solid #91abb6;border-inline:1px solid #839da8;background:#d2dfe2;min-height:0;box-shadow:inset 0 -5px #7995a2}}
{r} .ff-notice-icon{{width:24px;height:28px;color:#31596c;background:none;border:0}}
{r} .ff-notice-copy,{r} .ff-notice:not(:has([data-notice-action])) .ff-notice-copy{{display:block;min-height:0;padding:10px 12px 12px;background:var(--paper);border-top:2px solid #73909b;border-inline-start:2px solid #97afb7;box-shadow:inset 0 1px 4px #43657418}}
{r} .ff-notice-copy::before{{display:none}}{r} .ff-notice-copy p,{r} .ff-notice:not(:has([data-notice-action])) .ff-notice-copy p{{margin-bottom:0;font-size:12px}}
{r} .ff-inline-action{{display:block;min-height:36px;padding:8px 0 0;margin:12px 0 0;border:0;border-top:1px solid #b4c8ce;background:none;color:#31586b}}
{r} .ff-inline-action::after{{display:none}}
''')
id='open-bracket-notice';r=root(id)
add('toasts',id,f'''
{r}{{--paper:#f5f5ec;--ink:#3e5159;--muted:#5b6b71;--accent:#4b7283}}
{r} .ff-notice{{padding:26px 23px;gap:10px;min-height:126px}}
{r} .ff-notice::before{{inset:8px 12px;background:var(--paper);border-block:1px solid #d0d6cd}}
{r} .ff-notice::after{{inset:0;background:linear-gradient(#587987,#587987) left top/46px 5px no-repeat,linear-gradient(#587987,#587987) left bottom/46px 5px no-repeat,linear-gradient(#587987,#587987) left/5px 100% no-repeat,linear-gradient(#9aadb0,#9aadb0) right top/30px 5px no-repeat,linear-gradient(#9aadb0,#9aadb0) right bottom/30px 5px no-repeat,linear-gradient(#9aadb0,#9aadb0) right/5px 100% no-repeat;z-index:-1}}
{r} .ff-notice-icon{{width:26px;height:30px}}{r} .ff-notice p{{font-size:12px}}{r} .ff-inline-action{{color:#3c6273;border-color:#9aaeb3}}
''')
id='warm-confirm-notice';r=root(id)
add('toasts',id,f'''
{r}{{--ff-panel:#fffdf6;--ff-ink:#454138;--ff-muted:#625e54;--ff-accent:#766342}}
{r} .ff-notice{{display:grid;grid-template-columns:26px minmax(0,1fr) 30px;gap:12px;padding:18px 15px;border:0;border-block:1px solid #bdb4a0;border-radius:0;background:#fffdf6;box-shadow:0 3px 8px #28251e15}}
{r} .ff-notice-icon{{width:26px;height:26px;border:0;background:none;color:#766342}}
{r} .ff-notice-copy{{grid-column:2;min-width:0}}
{r} .ff-notice p{{margin-top:5px;font-size:12px}}
{r} .ff-inline-action{{display:block;width:100%;text-align:start;margin-top:12px;padding:10px 0 0;border:0;border-top:1px dashed #c4baa4;background:none;color:#635139;font-weight:600}}
{r} [data-notice-close]{{grid-column:3;width:30px;height:32px}}
''')
id='margin-bracket-hint';r=root(id)
add('hints',id,f'''
{r}{{--paper:#faf7ed;--ink:#3f4c50;--muted:#5e6a6b;--accent:#647c84;--edge:#b8c7c7}}
{r} .ff-floating.ff-hint-panel{{padding:24px 22px 24px 34px;background:var(--paper);border:0;border-inline-start:6px solid #68828c;box-shadow:0 10px 24px #233b4420}}
{r} .ff-hint-panel::before{{inset:12px auto 12px 10px;width:1px;background:#b8c7c3;border:0}}
{r} .ff-hint-panel::after{{display:none}}
{r} .ff-hint-panel>.ff-hint-content{{max-height:max(0px,calc(var(--ff-overlay-max-height,420px) - 48px))}}
{r} .ff-hint-heading{{border:0;padding-bottom:4px;gap:9px}}
{r} [data-hint-content]{{font:13px/1.9 Georgia,'Yu Mincho',serif}}
{r} .ff-hint-facts{{border-block:1px solid #c2cdca;padding-block:10px;gap:8px;font-size:11px}}
{r} .ff-hint-panel .ff-action{{border:0;border-bottom:1px solid #799297;background:none;color:#3e616f;min-height:38px}}
{r} .ff-hint-trigger{{border:0;border-inline-start:4px solid #68828c;background:#faf7ed;color:#3e515a}}
{r}:dir(rtl) .ff-floating.ff-hint-panel{{padding:24px 34px 24px 22px}}{r}:dir(rtl) .ff-hint-panel::before{{left:auto;right:10px}}
''')
id='recessed-spec-hint';r=root(id)
add('hints',id,f'''
{r}{{--paper:#f1f5f3;--ink:#354d59;--muted:#526875;--accent:#537c8d}}
{r} .ff-floating.ff-hint-panel{{background:#dce7e8;border:1px solid #92abb3;border-top:5px solid #b5c9cd;padding:18px;box-shadow:inset 3px 0 #8fa9b6,0 10px 22px #253e4820}}
{r} .ff-hint-panel::before,{r} .ff-hint-panel::after{{display:none}}
{r} .ff-hint-panel>.ff-hint-content{{max-height:max(0px,calc(var(--ff-overlay-max-height,420px) - 42px))}}
{r} .ff-hint-heading{{background:transparent;border:0;padding:4px 0 12px;clip-path:none;color:var(--ink)}}
{r} [data-hint-content]{{background:transparent;padding:0;font-size:12px;color:var(--muted)}}
{r} .ff-hint-facts{{display:grid;grid-template-columns:minmax(0,1fr);row-gap:0;padding:0;border:0;background:var(--paper);box-shadow:inset 2px 2px #8aa8b3}}
{r} .ff-hint-facts>span{{clip-path:none!important;margin:0;min-height:0;padding:12px 14px 3px;border:0;background:none;color:#526875;font-size:11px}}
{r} .ff-hint-facts>strong{{padding:0 14px 13px;min-height:0;margin:0;background:none;color:#354d59;font:600 15px/1.6 ui-monospace,monospace;border:0;border-bottom:1px solid #c0d0d3;clip-path:none}}
{r} .ff-hint-facts>strong::before,{r} .ff-hint-facts>strong::after{{display:none}}
{r} .ff-hint-checkbox{{background:transparent;padding:12px 0;color:#354d59}}
{r} .ff-hint-panel .ff-action{{background:#f1f5f3;color:#355968;border:1px solid #94afb7;border-bottom:3px solid #71929f}}
''')
id='neutral-detail-hint';r=root(id)
add('hints',id,f'''
{r}{{--ff-panel:#fcfcfa;--ff-ink:#343e47;--ff-muted:#5b646d;--ff-line:#c7cdd0;--ff-accent:#465f73}}
{r} .ff-floating.ff-hint-panel{{padding:20px;border:1px solid #b9c3c9;border-radius:3px;box-shadow:0 6px 20px #27344420}}
{r} .ff-hint-heading{{font-size:14px;padding-bottom:12px;border-bottom:2px solid #637c8d}}
{r} [data-hint-content]{{font-size:12px;line-height:1.8}}
{r} .ff-hint-facts{{display:grid;grid-template-columns:minmax(60px,.8fr) minmax(0,1.2fr);gap:0;margin-block:16px;border-top:1px solid #ccd2d3}}
{r} .ff-hint-facts>*{{padding:10px 8px;border-bottom:1px solid #ccd2d3;font-size:12px;overflow-wrap:anywhere}}
{r} .ff-hint-facts>span{{background:#edf0f0;color:#58636a}}
{r} .ff-hint-checkbox{{font-size:12px;line-height:1.7}}
{r} .ff-hint-panel .ff-action{{margin-top:14px;width:100%;min-height:40px;background:#465f73;color:#fff;border:0;border-radius:3px}}
''')
id='warm-reading-hint';r=root(id)
add('hints',id,f'''
{r}{{--ff-panel:#fffdf6;--ff-ink:#494335;--ff-muted:#68604e;--ff-line:#d0c5ad;--ff-accent:#7b6546}}
{r} .ff-floating.ff-hint-panel{{padding:24px;border-radius:0;border:1px solid #d1c7b3;border-top:3px solid #9d8764;box-shadow:0 8px 22px #322b1d20}}
{r} .ff-hint-heading{{font:600 16px/1.6 Georgia,'Yu Mincho',serif;border:0;padding-bottom:8px}}
{r} .ff-hint-panel p{{font:14px/1.95 Georgia,'Yu Mincho',serif}}
{r} .ff-hint-facts{{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.7fr);gap:6px 12px;border-top:1px solid #c9bea6;padding-top:14px;margin-top:20px;font-size:11px;line-height:1.8}}
{r} .ff-hint-facts strong{{font-weight:500}}
{r} .ff-hint-checkbox{{font-size:12px;margin-top:18px}}
{r} .ff-hint-panel .ff-action{{border:0;border-bottom:1px solid #9d8764;border-radius:0;background:none;color:#6a5235;padding:10px 0;margin-top:10px;text-align:start}}
''')
id='orbital-mark-progress';r=root(id)
add('progress',id,f'''
{r}{{--paper:#edf1f2;--ink:#2e414b;--muted:#536671;--accent:#326c87}}
{r} .ff-progress-visual{{height:220px;min-height:220px;overflow:visible}}
{r} .ff-progress-track{{width:190px;height:190px;max-width:100%;background:none;mask:none;clip-path:none;overflow:visible;transform:rotate(-24deg) scaleY(.62);border:0;border-radius:50%;box-shadow:none}}
{r} .ff-progress-track::before{{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--accent) calc(var(--ff-progress)*1%),#b9c9cf 0);mask:radial-gradient(transparent 63%,#000 64% 69%,transparent 70%)}}
{r} .ff-progress-track::after{{inset:15px;border:1px solid #b9c9cf;border-radius:50%;background:none}}
{r} .ff-progress-fill{{display:block;position:absolute;left:50%;top:50%;width:50%;height:0;background:none;transform-origin:0 0;transform:rotate(calc(var(--ff-progress)*3.6deg - 90deg));transition:none}}
{r} .ff-progress-fill::after{{content:'';position:absolute;right:0;top:-7px;width:14px;height:14px;border-radius:50%;background:#eef4f4;border:3px solid #326c87;box-shadow:0 0 0 3px var(--paper)}}
{r} .ff-reading{{margin:0;padding:4px 8px;border:0;font:36px/1.2 ui-monospace,monospace;background:var(--paper);box-shadow:0 0 0 3px var(--paper);z-index:2}}
{r} .ff-process-steps{{font-size:11px;gap:8px}}
{r}[data-indeterminate=true] .ff-progress-fill{{display:none}}{r}[data-indeterminate=true] .ff-progress-track::before{{background:#b9c9cf}}
''')
# Align gallery sample structure with runtime notification copy container.
p=Path('src/app/foundation-preview.ts');s=p.read_text();old='<div><strong>次の工程を準備しています</strong>';assert old in s;s=s.replace(old,'<div class="ff-notice-copy"><strong>次の工程を準備しています</strong>');p.write_text(s)
(b/'shared-sources.json').write_text(json.dumps(['src/app/foundation-preview.ts'],indent=2)+'\n')
descriptions={
'signal-capsule-notice':('toasts','丸い信号端子と薄い読み取り面を接続した通知。状態の記号を端子へ収め、本文と操作は無地の面へ置く。'),
'folded-message-notice':('toasts','細い蛇腹の折り目で左右を支える通知。本文を覆う紙面を広く取り、狭い画面でも折り目へ文字を重ねない。'),
'console-line-notice':('toasts','凹んだ情報画面と、下端の操作行を持つ通知コンソール。背景のある表示面に状態を読み取り、追加操作を罫線で分ける。'),
'open-bracket-notice':('toasts','長短二つの括弧で読み取り面を挟む通知。四隅の飾りではなく、左右の連続した支柱で本文の位置を示す。'),
'warm-confirm-notice':('toasts','結果の見出しと説明を揃え、必要な次の操作を点線の下へ置く簡潔な通知。状態の意味は呼び出し側の内容に従う。'),
'margin-bracket-hint':('hints','綴じ側の余白と縦罫で本文を支える注釈。説明を読む列と小さな仕様欄を分け、本文を静かな紙面に保つ。'),
'recessed-spec-hint':('hints','一体のケースへ仕様の読み取り面を沈めたヒント。面の間にも不透明な下地を置き、背後の文字を透かさない。'),
'neutral-detail-hint':('hints','項目名と値を二列で比較できる仕様ヒント。見出し・説明・仕様・設定操作を読み順にまとめる。'),
'warm-reading-hint':('hints','本文を読みやすい行間と書体で示す注釈。補足の仕様は細い罫線の下へ置き、適用操作を本文から分ける。'),
'orbital-mark-progress':('progress','傾いた軌道面に進捗の弧と終点を示すプログレス。数値は正面に固定し、値が不明なときは終点を表示しない。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B009 本文を守る面と、目的を持つ構造\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items())+'\n展示通知のcopyコンテナを実動作と一致させる共有修正を含む。ネイティブ通知操作、ヒントのフォーカス管理、進捗の実値APIは維持。\n')
