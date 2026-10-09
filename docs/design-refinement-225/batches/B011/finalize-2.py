import json,hashlib
from pathlib import Path
p=Path(__file__).parent;root=p.parents[3]
data=json.loads((p/'measurements-2.json').read_text());inp=json.loads((p/'review-input-2.json').read_text())
checks={f:hashlib.sha256((root/f).read_bytes()).hexdigest()==h for f,h in inp['sourceHashes'].items()}
changed=[f for f,v in checks.items() if not v]
notes={364:'左右の低い支柱と下段へ出る床で荷受け台を構成。旧二重線から支える構造へ進み、操作領域は安定している。',369:'提出用の小型横組みと条件行は B の用途に合うが、エラーの可読性と長いファイル名の収まりが未完成。',370:'資料向けの明朝見出しと分離したファイル行で R369 と用途を区別できる。エラー色は修正が必要。',377:'月と左右移動を薄い二重軌道で結び、曜日の通常配置を保った独自性は成立。操作可能な前後月日付が薄すぎる。',379:'六つの週の浅い棚が日付配置の規則と一致し、旧蛇行より理解しやすい。前後月日付の可読性は不足。',383:'角形状の統一は整ったが、一般的な平面カレンダーに片側角丸と色付き見出しを足した段階。A の花弁の重なりという構造的個性は不足。',392:'連続した軌道と立ち上がる選択位置がページ移動の意味を支える。狭幅でも折り返さず選択を表示する。',395:'棚に立つ帳簿の背と選択色・高さの関係が明快。狭幅の連続性と選択表示も維持。',400:'硬貨の縁と積層で現在位置を示し、行を分けずに視線を保つ。選択/フォーカス表示は縮小と RTL に追従。',402:'片側が細まるキーと細い進路で旧カプセルと区別できる。数値と操作位置を動かさず選択を示す。'}
finds={}
def add(n,kind,desc,rec,ev):finds.setdefault(n,[]).append(dict(kind=kind,description=desc,recommendation=rec,evidence=ev))
for n,ratio,bg in [(369,2.186,'rgb(242,244,243)'),(370,2.126,'rgb(245,240,230)')]:
 add(n,'contrast',f'許可外 .exe を選んだ実エラーが 10px / rgb(226,146,135)。背景 {bg} との比率 {ratio}:1。portable と gallery の両方で再現し、原因を読む文字として不足。','明るいホスト上でも 4.5:1 を満たす専用エラー文字色、または背景付きエラー面へ分離する。',['evidence-2/uploads-portable-files-sheet.jpg','evidence-2/uploads-gallery-files-sheet.jpg','measurements-uploads-2.json','contrast-summary-2.json'])
add(369,'overflow','222px ホストで長いファイル名を追加し RTL にすると、幅約325pxのファイル名が root x49..271 に対し x-122 まで広がり、削除ボタンは x-162 / 幅30px と完全に外へ出る。gallery の264pxホストでも再現。','ファイル行の縮小可能な子へ min-width:0 と適切な折返し/省略を設け、削除ボタンを常にホスト内へ残す。',['evidence-2/uploads-portable-files-sheet.jpg','evidence-2/uploads-gallery-files-sheet.jpg','measurements-uploads-2.json'])
for n,ratio in [(377,2.139),(379,2.042),(383,2.254)]:
 add(n,'contrast',f'前後月の日付は opacity .55 で実背景との合成比率 {ratio}:1。disabled=false で、2026-08-31 を実際に押すと値が更新しパネルが閉じるため、無効操作の例外にできない。両環境で再現。','日付を操作可能な文字として 4.5:1 以上へ。隣月の区別は控えめな面・線・文字ウェイト等で補う。',['evidence-2/datepickers-portable-base-sheet.jpg','evidence-2/datepickers-gallery-base-sheet.jpg','measurements-outside-2.json','contrast-summary-2.json'])
add(383,'design_judgment','通常・各月・狭幅を視認した結果、主要面は一枚の矩形グリッドのまま。ヘッダ/矢印/選択日の片側角丸反復は整うが、花弁がどこで重なるか、支持するかが読めない。これは操作不具合ではなく A の独創性・構造に対する再設計要求。','日付グリッドの読みやすさを保ち、月見出しまたは外周で花弁同士の重なり・切欠き・接点を成立させる。単なる角丸の増加は避ける。',['evidence-2/datepickers-portable-base-sheet.jpg','evidence-2/datepickers-portable-months-sheet.jpg'])
parts=[]
for r in data:
 if r['mode']!='portable':continue
 n=r['number'];cat=r['category'];ev=[f'evidence-2/{cat}-portable-base-sheet.jpg',f'evidence-2/{cat}-gallery-base-sheet.jpg'];ev += [f'evidence-2/{cat}-{mode}-'+({'uploads':'files','datepickers':'months','pagination':'strip'}[cat])+'-sheet.jpg' for mode in ['portable','gallery']]
 parts.append(dict(id=r['id'],number=n,verdict='changes_required' if n in finds else 'pass',note=notes[n],findings=finds.get(n,[]),evidence=ev,reviewed=['portable frozen round2','actual gallery initial render + frozen API fixture','rest/hover entry/exit/reentry/returned','320px / long labels / RTL layout','reduced motion / forced colors',{'uploads':'native files / FormData / remove / drop / invalid / disabled / reset / long filename','datepickers':'opened panel / February+leap year+November / month transitions / ArrowRight+Enter / Clear+Today / Escape focus / 320x360 scroll','pagination':'1000 pages current999 / 560→222 host / update2 / LTR+RTL / scale .75 / Tab / outer scrollY'}[cat]]))
sheets=sorted(str(f.relative_to(p)) for f in (p/'evidence-2').glob('*-sheet.jpg'))
review=dict(batch='B011',round=2,overall='changes_required',parts=parts,coverage={'parts':10,'pass':5,'changes_required':5,'sourceHashesMatch':all(checks.values()),'sourceHashCount':len(checks),'changedAfterCapture':changed,'viewedSheets':sheets,'scope':'上記の特定状態と操作を実ブラウザ・実画像で検査。全状態の無欠陥保証ではない。gallery のオプション変更試験は actual gallery CSS 内に同一作者の root を複製し frozen init で操作。RTL はレイアウト、pagination は RTL keyboard も検査。','calendarShortViewport':'低い viewport は内部スクロールを許し、Clear/Today へ focus/Enter で到達できた。'},evidence=['measurements-2.json','measurements-uploads-2.json','measurements-calendars-2.json','measurements-outside-2.json','measurements-pagination-2.json','contrast-summary-2.json'])
(p/'review-2.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n')
lines=['# B011 round 2 独立検査','', '**判定: changes_required — 5件 pass / 5件差戻し。**','', '凍結 round 2 を検査対象とし、検査担当は作者・共有実装を変更していない。実ブラウザ取得完了後、最終保存時の照合では R369/R370 の styles.css に主担当の修正開始を確認した。レビューと画像・測定は旧 round 2 に対するもの。portable と actual gallery、通常/hover往復、320px・長文・RTL、reduced/forced を確認。12枚の比較画像をすべて視認した。特定条件での検査であり、無欠陥保証ではない。','']
for r in parts:
 lines += [f"## R{r['number']:03} {r['id']} — {r['verdict']}",'',r['note'],'']
 for f in r['findings']:lines += [f"- **{f['kind']}**: {f['description']} 改善案: {f['recommendation']}"]
 lines += ['', '証拠: '+', '.join(f'[{Path(e).name}]({e})' for e in r['evidence']), '']
lines += ['## 操作検査の範囲','', '- Uploads: 実ファイル選択、削除、drop、許可外ファイル、disabled、form/reset、長いファイル名。','- Calendars: 開いたパネル、2月・閏年・11月、月遷移、ArrowRight+Enter、Clear/Today、Escapeとフォーカス復帰、320×360の内部スクロール。隣月日を実クリックして有効操作であることも検証。','- Pagination: 1000ページ中999、ホスト560→222、値2への更新、LTR/RTL、scale .75、Tab。選択とフォーカス先は列内へ収まり、外側 scrollY の差は0。','- コントラストは文字背景と opacity、文字位置に実際に重なる疑似要素面を合成。R392の非選択台座は数字より下なので文字背景へ含めていない。','', '測定詳細は review-2.json の evidence と measurements-*.json に保存。']
(p/'review-2.md').write_text('\n'.join(lines)+'\n')
print('saved',len(parts),'parts; hashes',len(checks),'sheets',len(sheets))
