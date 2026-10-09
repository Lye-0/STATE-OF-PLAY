import json,hashlib
from pathlib import Path
p=Path(__file__).parent;r=json.loads((p/'review-4.json').read_text());a=json.loads((p/'review-input-4.json').read_text())['sourceHashes'];b=json.loads((p/'review-input-5.json').read_text())['sourceHashes'];root=p.parents[3]
assert all(hashlib.sha256((root/f).read_bytes()).hexdigest()==h for f,h in b.items())
r.update(round=5,overall='pass')
for part in r['parts']:
 n=part['number']
 if n not in [369,379]:
  assert all(a[f]==b[f] for f in b if '/'+part['id']+'/' in f)
  part['reviewed']=['author hash unchanged from round4; prior pass inherited'];part['note']+=' round5は作者ハッシュ不変を照合して合格を継承。';continue
 part['verdict']='pass';part['findings']=[];part['reviewed']=['round5 frozen portable + actual gallery CSS frozen fixture','hover entry/exit/reentry/returned','320px long text RTL reduced forced','native operations and prior failing condition rechecked']
 if n==369:
  part['note']='forced-colorsでも3列と折返しを維持。222px RTLのroot内に幅44pxの削除ボタンが収まり、portable x77..121 / root49..271、gallery x63..107 / root35..257。長い名前は折返し、実クリック後API値は空配列。実gallery viewport画像でも確認。エラー・通常色の改善を維持。'
  part['evidence']=['evidence-5/uploads-portable-base-sheet.jpg','evidence-5/uploads-gallery-base-sheet.jpg','evidence-5/outline-document-upload-portable-files-forced.png','evidence-5/outline-document-upload-gallery-forced-viewport.png','measurements-uploads-5.json','measurements-uploads-viewport-5.json']
 else:
  part['note']='前後月日付はrgb(82,99,72)、opacity1。週棚面rgb(230,236,217)との実比率5.364:1へ改善。通常文字を含む測定最小値4.928:1。portable/gallery一致。隣月日付の実クリックで値を更新して閉じる動作、hover往復、320/RTL/forced/reduced、前後月遷移を維持。'
  part['evidence']=['evidence-5/datepickers-portable-base-sheet.jpg','evidence-5/datepickers-gallery-base-sheet.jpg','measurements-outside-5.json','contrast-summary-5.json']
assert a['src/shared/foundation/navigation.ts']==b['src/shared/foundation/navigation.ts']
r['coverage']={'parts':10,'pass':10,'changes_required':0,'retested':[369,379],'inheritedByUnchangedHash':[364,370,377,383,392,395,400,402],'sharedNavigationHashUnchanged':True,'allCurrentSourceHashesMatch':True,'viewedEvidence':['evidence-5/uploads-portable-base-sheet.jpg','evidence-5/uploads-gallery-base-sheet.jpg','evidence-5/datepickers-portable-base-sheet.jpg','evidence-5/datepickers-gallery-base-sheet.jpg','evidence-5/outline-document-upload-portable-files-forced.png','evidence-5/outline-document-upload-gallery-forced-viewport.png'],'scope':'特定条件の実操作・実画像再検査と不変ハッシュによる前回合格の継承。全状態の無欠陥保証ではない。'}
r['evidence']=['measurements-5.json','measurements-uploads-5.json','measurements-uploads-viewport-5.json','measurements-outside-5.json','contrast-summary-5.json','review-4.json']
(p/'review-5.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
lines=['# B011 round5 独立再検査','', '**pass — 全10件合格。**','', 'R369/R379を凍結portableと実galleryで再検査。既合格8件と共有navigationはround4とのハッシュ不変を照合。現行101ソースもmanifestと一致。作者変更は行っていない。','']
for part in r['parts']:
 lines += [f"## R{part['number']:03} {part['id']} — pass",'',part['note'],'','証拠: '+', '.join(f'[{Path(e).name}]({e})' for e in part['evidence']),'']
lines+=['再検査は通常/hover入口・解除・再進入、320px/長文/RTL、forced/reduced、実ファイル操作と削除、隣月日付選択を対象とした。R369のgallery要素単体撮影は一部不完全だったため、viewport全体の補足画像で視認した。全状態の無欠陥保証ではない。']
(p/'review-5.md').write_text('\n'.join(lines)+'\n');print('saved all10 pass')
