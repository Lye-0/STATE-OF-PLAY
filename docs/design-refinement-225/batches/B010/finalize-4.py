from pathlib import Path
import json,hashlib
p=Path(__file__).parent;old=json.load(open(p/'review-input-3.json'));new=json.load(open(p/'review-input-4.json'));ids=['vertical-survey-progress','segmented-ruler-progress','caption-band-progress','folio-band-upload','perforated-upload'];changes=[k for k,v in new['sourceHashes'].items() if old['sourceHashes'].get(k)!=v];assert all(any('/'+i+'/' in k for i in ids) for k in changes);checks=[{'path':k,'expected':v,'actual':hashlib.sha256(Path(k).read_bytes()).hexdigest()} for k,v in new['sourceHashes'].items()];assert all(x['expected']==x['actual'] for x in checks);(p/'evidence-4/hash-check.json').write_text(json.dumps(checks,indent=2));(p/'hash-summary-4.json').write_text(json.dumps({'allMatch':True,'unchangedFive':True,'sharedUnchanged':True,'changedSince3':changes},indent=2))
c=json.load(open(p/'contrast-summary-4.json'));(p/'evidence-4/contrast-details.json').write_text(json.dumps(c,ensure_ascii=False,indent=2));(p/'contrast-summary-4.json').write_text(json.dumps([dict(number=x['number'],mode=x['mode'],min=x['min']) for x in c],indent=2))
notes={334:'尺が論理方向へ揃い、222pxホスト・100%のLTR/RTLで単位と尺の交差0px。縦目盛と固定数値の別列を維持し、0/25/100/割合不明も整合。',336:'五つの折尺面の山谷・面の明暗・連続目盛が一体になり、一般的な十区画バーから構造差を作った。数値は固定し、実値の充填が折尺面上を進む。0/25/100および割合不明で表示と値の整合を確認。',338:'数値を載せる正面の紙帯、背面へ回る上下の折返し、前面下縁の実値線が接続し、空の短線を加えた状態から情報を支える構造へ改善。通常/狭幅/RTLも明快。',360:'222pxホストの既定ラベルはLTR/RTLとも一行となり末尾一文字の孤立を解消。冊子の綴じ代と選択済み書類のつながりを保ち、長いファイル名・native/form/resetも再確認。',361:'222pxホストの既定ラベルはLTR/RTLとも一行となり末尾一文字の孤立を解消。切取帯と本文の関係を保ち、長いファイル名・native/form/resetも再確認。'}
r=json.load(open(p/'review-3.json'));r['round']=4;r['overall']='pass'
for a in r['parts']:
 n=a['number'];a['verdict']='pass';a['findings']=[]
 if n in notes:
  a['note']=notes[n];a['reviewed']=['round4 portable/実gallery CSS環境：通常hover入口/解除/再進入','320px長文RTL・reduced/forced・造形/可読性再評価'];a['evidence']=['measurements-4.json','contrast-summary-4.json']
  if n<350:a['reviewed']+=['0/25/100/割合不明：R336/R338 unknownのfill幅0px・animations空'];a['evidence']+=['evidence-4/progress-portable-0-sheet.jpg','evidence-4/progress-gallery-0-sheet.jpg']
  else:a['reviewed']+=['222px既定label1行・native/API/FormData・選択/削除/drop/reject/disabled/reset'];a['evidence']+=['measurements-uploads-4.json','evidence-4/uploads-portable-0-sheet.jpg','evidence-4/uploads-gallery-0-sheet.jpg','evidence-4/files-portable-sheet.jpg','evidence-4/files-gallery-sheet.jpg']
  if n in [334,360,361]:a['evidence']+=['measurements-focused-4.json']
 else:a['note']='作者と共有ソースのround3同一hashを確認し、同roundの独立画像・操作検査を継承。'+a['note'];a['reviewed']=['round4作者/共有hash不変確認','round3検査を継承'];a['evidence']+=['review-3.json','hash-summary-4.json']
r['coverage']={'parts':10,'retested':[334,336,338,360,361],'unchanged':[339,342,350,356,359],'portableRetested':5,'galleryRetested':5,'visuallyReviewedSheets':[str(f.relative_to(p)) for f in sorted((p/'evidence-4').glob('*sheet.jpg'))],'limits':'変更5件を再検査、他5件は作者/共有hash不変とround3検査の継承。特定状態の確認で無欠陥保証ではない。長文/API/form fixtureは凍結initを実gallery CSS環境へ組み込んだものを含む。'};r['evidence']=['review-input-4.json','hash-summary-4.json','review-3.json','response-3.md'];(p/'review-4.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
md='# B010 round 4 独立再検査\n\n全10件 pass。変更5件をportable/実galleryで再検査。6枚のcontact sheetと新造形の近接画像を視認し、残り5件と共有ソースはround3同一hashを確認。作者ファイルは変更していない。\n\n'
for a in r['parts']:md+=f"- R{a['number']} {a['id']}: **pass** — {a['note']}\n"
md+='\n[個別判定・証拠](review-4.json)、[hash照合](hash-summary-4.json)、[可読性](contrast-summary-4.json)。\n\n'+r['coverage']['limits']+'\n';(p/'review-4.md').write_text(md);print('all 10 pass')
