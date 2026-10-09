import json,hashlib
from pathlib import Path
p=Path(__file__).parent;old=json.load(open(p/'review-input-3.json'));new=json.load(open(p/'review-input-4.json'));changed=[k for k,v in new['sourceHashes'].items() if old['sourceHashes'].get(k)!=v];assert all(any('/'+i+'/' in k for i in ['margin-bracket-hint','neutral-detail-hint','warm-reading-hint']) for k in changed)
checks=[{'path':k,'expected':v,'actual':hashlib.sha256(Path(k).read_bytes()).hexdigest()} for k,v in new['sourceHashes'].items()];assert all(v['expected']==v['actual'] for v in checks)
(p/'evidence-4/hash-check.json').write_text(json.dumps(checks,indent=2));(p/'hash-summary-4.json').write_text(json.dumps({'allMatch':True,'unchangedSeven':True,'sharedUnchanged':True,'changedSince3':changed},indent=2))
c=json.load(open(p/'contrast-summary-4.json'));(p/'evidence-4/contrast-details.json').write_text(json.dumps(c,ensure_ascii=False,indent=2));(p/'contrast-summary-4.json').write_text(json.dumps([dict(number=v['number'],mode=v['mode'],min=v['min']) for v in c],indent=2))
r=json.load(open(p/'review-3.json'));r['round']=4;r['overall']='pass';notes={316:'裏板と折れた紙端で注釈紙の前後が分かれ、クリップが紙端をまたぎ、仕様は折れた接点のある独立した付箋として読める。R330とは構造上の差が成立。320px長文/RTLでも本文は読み面内に収まり、短いviewportでは紙面内をscrollして末尾操作へ到達。クリップはpanel側に残り、forced colorsでは装飾が消える。',329:'320pxの連続識別子は折り返し、本文innerのscrollWidth/clientWidthが198/198px、左右の切れ0px（LTR/RTL、portable/gallery）。比較表と操作構造を保持。',330:'320pxの連続識別子は折り返し、本文innerのscrollWidth/clientWidthが190/190px、左右の切れ0px（LTR/RTL、portable/gallery）。本文中心の読み順と書体を保持。'}
for part in r['parts']:
 n=part['number'];part['verdict']='pass';part['findings']=[]
 if n in notes:
  part['note']=notes[n];part['reviewed']=['round4 portable/実gallery CSS環境：通常hover入口/解除/再進入、320px長文RTL','reduced/forced、320×360の内容scrollと末尾操作','native checkbox click/Space、Escape/適用後triggerフォーカス復帰','実背景上のcontrast（最小5.377:1以上）'];part['evidence']=['measurements-retry-4.json','measurements-keyboard-4.json','contrast-summary-4.json','evidence-4/hints-portable-sheet.jpg','evidence-4/hints-gallery-sheet.jpg','evidence-4/short-portable-sheet.jpg','evidence-4/short-gallery-sheet.jpg']
  if n in [329,330]:part['evidence']+=['measurements-focused-4.json']
 else:part['note']='作者/共有hashがround3から不変であることを確認し、同roundの画像・操作検査を継承。'+part['note'];part['reviewed']=['round4作者/共有hash同一確認','round3独立検査を継承'];part['evidence']+=['review-3.json','hash-summary-4.json']
r['coverage']={'parts':10,'retested':[316,329,330],'unchanged':[292,293,297,301,310,324,332],'portableRetested':3,'galleryRetested':3,'visuallyReviewedSheets':[str(f.relative_to(p)) for f in sorted((p/'evidence-4').glob('*sheet.jpg'))],'limits':'変更3件を再検査、7件は作者・共有hash不変とround3の検査結果を継承。特定状態の確認で無欠陥保証ではない。長文/API probeは凍結initを実gallery CSS環境へ組み込んだfixtureを含む。'}
r['evidence']=['review-input-4.json','hash-summary-4.json','review-3.json','response-3.md'];(p/'review-4.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
md='# B009 round 4 独立再検査\n\n全10件 pass。変更3件をportable/実galleryで再検査し、4枚のcontact sheetとR316近接画像を視認。残り7件と共有ソースはround3からhash不変。作者ファイルは変更していない。\n\n'
for a in r['parts']:md+=f"- R{a['number']} {a['id']}: **pass** — {a['note']}\n"
md+='\n[個別判定と証拠](review-4.json)、[hash照合](hash-summary-4.json)、[可読性測定](contrast-summary-4.json)。\n\n'+r['coverage']['limits']+'\n';(p/'review-4.md').write_text(md);print('all 10 pass')
