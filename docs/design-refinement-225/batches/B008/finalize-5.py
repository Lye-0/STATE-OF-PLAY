from pathlib import Path
import json,hashlib
p=Path(__file__).parent;old=json.load(open(p/'review-input-4.json'));new=json.load(open(p/'review-input-5.json'))
changed=[k for k,v in new['sourceHashes'].items() if old['sourceHashes'].get(k)!=v]
assert all(any('/'+i+'/' in k for i in ['pinstripe-range','enamel-peg-range','loop-label-choice','letterbox-finder']) for k in changed)
checks=[{'path':k,'expected':v,'actual':hashlib.sha256(Path(k).read_bytes()).hexdigest()} for k,v in new['sourceHashes'].items()];assert all(r['expected']==r['actual'] for r in checks)
(p/'hash-check-5.json').write_text(json.dumps({'changedSince4':changed,'remainingSixUnchanged':True,'sharedUnchanged':True,'checks':checks},indent=2))
r=json.load(open(p/'review-4.json'));r['round']=5;r['overall']='pass'
notes={238:'forced colorsで旧カスタム軌道が消え、nativeつまみと軌道の中心が一致。通常の読取り枠・目盛・hover往復も保持。',245:'forced colorsで旧金色fillが消え、native軌道一本へ統一。通常のエナメル留め具の造形と狭幅表示も保持。',253:'綴じ代の2穴へ糸の両端が入り、下半分が紙の背面へ隠れる関係を視認。普通の面に楕円を載せた状態から、紙を留める構造へ改善した。選択丸とは役割が分かれ、通常・hover・320px長文・RTL・forcedでも文字と操作を妨げない。',281:'通常・hover完了・解除後の説明とbadgeは#535b50へ改善。背景#e8e3d8上で5.507:1（portable/gallery一致）。検索・選択・開閉・長文・RTL・forcedも再確認。'}
for part in r['parts']:
 n=part['number'];part['verdict']='pass';part['findings']=[]
 if n in notes:
  part['note']=notes[n];part['reviewed']=['round5 portable/実gallery：通常hover入口・解除・再進入・320px・reduced/forced再検査']
  part['evidence']=['measurements-5.json','evidence-5/changed-portable-sheet.jpg','evidence-5/changed-gallery-sheet.jpg'] if n!=281 else ['combos-retry-5.json','contrast-summary-5.json','evidence-5/combo-portable-sheet.jpg','evidence-5/combo-gallery-sheet.jpg']
  if n==253:part['reviewed']+=['native radio選択・矢印・disabled・form/reset・長文RTL再検査'];part['evidence']+=['choices-measurements-5.json','evidence-5/radio-portable-sheet.jpg','evidence-5/radio-gallery-sheet.jpg']
 else:
  part['note']='作者と共有ソースのround4同一hashを確認。round4の実画像・操作検査の合格判定を継承。'+part['note'];part['reviewed']=['round5作者/共有hash同一確認','round4の検査範囲を継承'];part['evidence']+=['hash-check-5.json','review-4.json']
r['coverage']={'parts':10,'retestedParts':[238,245,253,281],'unchangedParts':[258,261,264,270,288,290],'portableRetested':4,'galleryRetested':4,'visuallyReviewedSheets':[str(x.relative_to(p)) for x in sorted((p/'evidence-5').glob('*sheet.jpg'))],'limits':'4件をround5で再検査、残り6件は作者/共有hash不変とround4検査を継承。特定状態の検査であり無欠陥保証ではない。長文/form設定は凍結initをgallery CSS環境に組み込んだfixtureも含む。'}
r['evidence']=['review-input-5.json','hash-check-5.json','review-4.json','response-4.md']
(p/'review-5.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
md='# B008 round 5 独立再検査\n\n全10件 pass。変更4件をportable/実galleryで再検査し、6枚のcontact sheetと近接画像を視認。残り6件と共有ソースはround4のhash不変を確認。作者ファイルは変更していない。\n\n'
for a in r['parts']:md+=f"- R{a['number']} {a['id']}: **pass** — {a['note']}\n"
md+='\n判定根拠と検査範囲は[review-5.json](review-5.json)、変更照合は[hash-check-5.json](hash-check-5.json)、可読性は[contrast-summary-5.json](contrast-summary-5.json)。画像はevidence-5内。\n\n'+r['coverage']['limits']+'\n'
(p/'review-5.md').write_text(md);print('saved all 10 pass; changed files',len(changed))
