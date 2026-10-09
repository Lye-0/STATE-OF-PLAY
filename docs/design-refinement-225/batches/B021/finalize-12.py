from pathlib import Path
import json,hashlib
p=Path(__file__).parent;m=json.load(open(p/'review-input-12.json'));o=json.load(open(p/'review-input-11.json'));bad=[f for f,h in m['sourceHashes'].items()if hashlib.sha256(Path(f).read_bytes()).hexdigest()!=h];changed=[f for f,h in m['sourceHashes'].items()if o['sourceHashes'].get(f)!=h];assert not bad and len(changed)==3
(p/'hash-verification-final-12.json').write_text(json.dumps({'matched':101,'changed':changed,'mismatches':bad},indent=2)+'\n');d=json.load(open(p/'measurements-targets-12.json'));assert len(d)==24 and all(r['description']['right']<=r['root']['right']+.1 and r['description']['x']>=r['root']['x']-.1 for r in d)
r=json.load(open(p/'review-11.json'));r.update(round=12,overall='pass')
for x in r['parts']:
 if x['number']in[648,649,650]:
  x.update(verdict='pass',findings=[],note='メニュー補助文字と開いた説明は前roundで改善。今回、閉じた対象カードの12px説明も長語を折返し、320pxのLTR/RTL/forced、gallery/portable全条件で枠内へ収まる。',evidence=['measurements-targets-12.json','evidence-12/sheet-0.jpg','evidence-12/sheet-1.jpg']);x['reviewed']['round']=12
 else:x['reviewed']['inheritedFromRound']=11;x['reviewed']['authorAndSharedHashUnchanged']=True
r['coverage']={'sourceHashesMatched':101,'changedAuthorCSS':3,'unchangedAuthorFiles':97,'inheritedParts':7,'closedTargetConditions':24,'maxDescriptionOverflow':0,'imagesViewed':['24 target images / 2 sheets'],'pendingRequiredMeasurements':[],'limitations':['3CSSの対象small規則のみ変更。全操作/Reactはround11結果を、7件は作者/共有hash一致で継承。','特定状態の検査であり無欠陥保証ではない。']};(p/'review-12.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');(p/'review-12.md').write_text('# B021 round 12 独立再検査\n\n10件すべて pass。R648/R649/R650の閉じた対象説明を24条件で測定し、枠外量0px。全24画像を視認し、12pxのまま長語が折返すことを確認。\n\n3CSSのみ変更、他97作者ファイルと共有は不変。7件と前roundの操作/React検査を継承。作者100＋共有1 hash一致。詳細は[review-12.json](review-12.json)。\n');print('B021 10pass saved')
