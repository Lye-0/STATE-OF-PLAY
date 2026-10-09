import json
from pathlib import Path
p=Path(__file__).parent;r=json.loads((p/'review-2.json').read_text());old=json.loads((p/'review-input-2.json').read_text())['sourceHashes'];new=json.loads((p/'review-input-4.json').read_text())['sourceHashes']
r['round']=4;r['overall']='changes_required'
notes={369:'通常色の長い名前は折返し、RTL222pxと実galleryで削除ボタンまで収まる。実クリック後APIは空配列。エラー文字は12px・実背景比6.417:1へ改善。ただしforced-colorsでレイアウト修正が失われる。',370:'実エラーの文字は12px、実背景比6.241:1へ改善。ファイル追加/削除/drop/disabled/form/reset、狭幅長文、RTL、forced/reducedで重大な残存問題は確認しなかった。',377:'有効な隣月日付はopacity1となり、通常文字の最小比率4.799:1。軌道の構造を保ち、月遷移・日付選択・低height操作も維持。',379:'opacity1へ改善したが、前後月日付の文字と週棚面の組合せで4.298:1が残る。',383:'二枚の花弁の縁と前後の重なりが月表示を受け止め、片側角丸の反復から独自の構造へ進んだ。通常/320/RTLで年月と矢印は明快。日付グリッドの読みやすさを維持し、文字の最小比率5.617:1。日付選択・月遷移・低heightスクロール操作も通過。'}
for a in r['parts']:
 n=a['number']
 if n not in notes:
  paths=[f for f in new if f'/'+a['id']+'/' in f or f=='src/shared/foundation/navigation.ts'];assert all(old[f]==new[f] for f in paths)
  a['reviewed']=['round2 author/shared hashes unchanged; round2 pass inherited'];a['note']+=' round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。';continue
 a['note']=notes[n];a['findings']=[];a['verdict']='pass';a['evidence']=[e.replace('evidence-2','evidence-4') for e in a['evidence']];a['reviewed']=[s.replace('round2','round4') for s in a['reviewed']]
 if n==369:
  a['verdict']='changes_required';a['findings']=[dict(kind='overflow_forced_colors',description='forced-colors active + RTL + 長いファイル名では旧はみ出しが残る。portable222pxのroot x49..271に対し名前x-188、削除ボタンx-228/幅30px。galleryでも名前x-189/削除x-229。通常色では解消している。',recommendation='forced-colorsでも3列、min-width:0、折返し、削除列の確保を維持する。色や装飾のリセットからレイアウト制約を分離する。',evidence=['evidence-4/uploads-portable-base-sheet.jpg','evidence-4/uploads-gallery-base-sheet.jpg','measurements-4.json'])];a['evidence']+=['evidence-4/outline-document-upload-gallery-files-long-rtl-222.png','measurements-uploads-222-4.json']
 if n==379:
  a['verdict']='changes_required';a['findings']=[dict(kind='contrast',description='有効な前後月日付は13px、rgb(99,113,90)、opacity1。実際の週棚面rgb(230,236,217)との比率4.297969:1。portable/gallery同値。実クリックで値を更新できる有効操作のため、無効状態の例外にはできない。',recommendation='週棚面を背景として、隣月文字を4.5:1以上へ暗くする。',evidence=['contrast-summary-4.json','measurements-outside-4.json','evidence-4/datepickers-portable-base-sheet.jpg'])]
r['coverage']={'parts':10,'pass':8,'changes_required':2,'retested':[369,370,377,379,383],'inheritedByUnchangedHash':[364,392,395,400,402],'sharedNavigationHashUnchanged':old['src/shared/foundation/navigation.ts']==new['src/shared/foundation/navigation.ts'],'viewedSheets':sorted(str(f.relative_to(p)) for f in (p/'evidence-4').glob('*-sheet.jpg')),'scope':'round4 frozen portable + actual gallery CSS frozen fixture。特定条件の検査であり無欠陥保証ではない。8枚の比較画像とR383通常/forced、R369gallery222画像を視認。'}
r['evidence']=['measurements-4.json','measurements-uploads-4.json','measurements-uploads-222-4.json','measurements-calendars-4.json','measurements-outside-4.json','contrast-summary-4.json','review-2.json']
(p/'review-4.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
lines=['# B011 round4 独立再検査','', '**changes_required — 8件 pass / 2件差戻し。**','', '変更5件を凍結版portableと実galleryで再操作・再撮影。既合格5件と共有navigationはround2からハッシュ不変を照合し継承。検査担当による作者変更はない。','']
for a in r['parts']:
 lines += [f"## R{a['number']:03} {a['id']} — {a['verdict']}",'',a['note'],'']
 for f in a['findings']:lines += [f"- **{f['kind']}**: {f['description']} 改善案: {f['recommendation']}"]
 lines+=['','証拠: '+', '.join(f'[{Path(e).name}]({e})' for e in a['evidence']),'']
lines+=['検査した状態・操作と数値は review-4.json / measurements-*.json に記録。8枚の比較画像を視認。RTLレイアウト、hover出入り再進入、forced/reduced、実ファイル/FormData/reset、calendar各月/閏年/キーボード/低heightを確認。全状態の無欠陥保証ではない。']
(p/'review-4.md').write_text('\n'.join(lines)+'\n');print('saved 8 pass / 2 changes_required')
