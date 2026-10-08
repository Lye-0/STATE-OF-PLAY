"""Build a small, self-contained review report; never publish unreviewed parts."""
from pathlib import Path
from PIL import Image
import json,base64,io,html,sys,re
w=Path(__file__).resolve().parents[1];root=w.parents[1]
rows=json.loads((w/'targets.json').read_text());requested=set(sys.argv[1:])
approved=[]
for row in rows:
 if requested and row['batch'] not in requested:continue
 d=w/'batches'/row['batch'];reviews=sorted((p for p in d.glob('review-*.json') if re.fullmatch(r'review-\d+\.json',p.name)),key=lambda p:int(p.stem.split('-')[1]))
 if not reviews:continue
 review=json.loads(reviews[-1].read_text());part=next((p for p in review['parts'] if p['id']==row['id']),None)
 if review['overall']!='pass' or not part or part['verdict']!='pass':continue
 approved.append((row,part,review))
def esc(t):return html.escape(str(t),quote=True)
def figure(path,label):
 if not path.exists():return ''
 im=Image.open(path).convert('RGB');im.thumbnail((700,700));buf=io.BytesIO();im.save(buf,format='WEBP',quality=83,method=6);url='data:image/webp;base64,'+base64.b64encode(buf.getvalue()).decode()
 return f'<figure><img width="{im.width}" height="{im.height}" loading="lazy" src="{url}" alt="{esc(label)}"><figcaption>{esc(label)}</figcaption></figure>'
parts=[]
for row,part,review in approved:
 meta=json.loads((root/'src/parts'/row['category']/row['id']/'meta.json').read_text());d=w/'batches'/row['batch'];photos=d/'captures/photos'
 # Prefer the last gallery state capture if this part alone was rechecked.
 rounds=sorted((d/'captures').glob('round-*'),key=lambda p:int(p.name.split('-')[-1]))
 for r in rounds:
  if (r/'photos'/f"{row['id']}-stage.png").exists():photos=r/'photos'
 assert (photos/f"{row['id']}-stage.png").exists(),f"Missing gallery evidence: {row['id']}"
 assert (photos/f"{row['id']}-narrow.png").exists(),f"Missing narrow evidence: {row['id']}"
 before=w/'evidence/baseline'/f"{row['id']}-stage.png"
 assert before.exists(),f"Missing original gallery evidence: {row['id']}"
 images=figure(before,'修正前・元の展示')+figure(photos/f"{row['id']}-stage.png",'修正後・展示の初期状態')+figure(photos/f"{row['id']}-narrow.png",'修正後・320pxの操作状態')
 if row['category']=='popups':
  assert (photos/f"{row['id']}-expanded.png").exists(),f"Missing open dialog evidence: {row['id']}"
  assert (photos/f"{row['id']}-mobile.png").exists(),f"Missing mobile dialog evidence: {row['id']}"
  images+=figure(w/'evidence/baseline'/f"{row['id']}-expanded.png",'修正前・独立した実ダイアログ')+figure(photos/f"{row['id']}-expanded.png",'修正後・実際に開いたダイアログ')+figure(photos/f"{row['id']}-mobile.png",'修正後・320pxで開いたダイアログ')
 if row['category']=='dropdowns':
  images+=figure(photos/f"{row['id']}-expanded.png",'展開した候補・選択済み行')
 # Native switch images distinguish actual OFF and ON even when the gallery starts ON.
 if row['category']=='toggles':
  folders=sorted((d/'captures').glob('reviewer*'))
  for folder in reversed(folders):
   if (folder/f"{row['id']}-on.png").exists():
    images+=figure(folder/f"{row['id']}-on.png",'独立版・ON');break
 parts.append(f'<article id="r{row["number"]}"><header><span>R{row["number"]:03d} · {esc(row["batch"])} · {esc(row["designType"])}</span><h2>{esc(row["name"])}</h2><code>{esc(row["id"])}</code></header><p><strong>以前の指摘</strong><br>{esc(row["auditReason"])}</p><p><strong>修正した構造</strong><br>{esc(meta["description"])}</p><p><strong>独立検査</strong><br>{esc(part["assessment"])}</p><details><summary>画像を見る（単体HTML内蔵）</summary><div class="photos">{images}</div></details></article>')
title='STATE OF PLAY — 修正結果';body=f'''<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title}</title><style>body{{margin:0;background:#f2f3f5;color:#243241;font:16px/1.75 system-ui}}main{{max-width:1160px;margin:auto;padding:28px 18px}}h1{{font-size:28px;line-height:1.3}}.note{{background:white;padding:20px;border:1px solid #c4ced7;border-radius:8px}}article{{margin:24px 0;padding:24px;background:white;border:1px solid #c4ced7;border-radius:8px;content-visibility:auto;contain-intrinsic-size:auto 470px}}h2{{margin:4px 0;font-size:23px}}header>span{{color:#53677b;font-size:14px}}code{{overflow-wrap:anywhere}}summary{{cursor:pointer;padding:12px;border:1px solid #c4ced7;border-radius:4px}}.photos{{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:16px}}figure{{margin:16px 0;min-width:0}}img{{display:block;max-width:100%;height:auto;background:#181d23;border-radius:4px}}figcaption{{font-size:14px;color:#53677b}}@media print{{article{{content-visibility:visible;break-inside:avoid}}details{{display:block}}}}</style><main><h1>{title}</h1><div class="note"><p>独立検査に合格した {len(approved)} 件。全修正対象は517件です。番号は以前のR番号を維持しています。</p><p>画像はこのHTMLへ内蔵しています。各項目の「画像を見る」を開いて比較できます。外部ファイルや通信は不要です。</p><p>通常動作・狭幅・動き軽減・強制色と、各部品の操作を確認しています。実機タッチとスクリーンリーダーの読み上げは未確認です。合格判定は固定した検査基準に基づく担当者の評価です。</p></div>{''.join(parts)}</main></html>'''
target=w/('result-'+('-'.join(sorted(requested)) if requested else 'all')+'.html');target.write_text(body);print(json.dumps({'file':str(target),'parts':len(approved),'bytes':target.stat().st_size}))
