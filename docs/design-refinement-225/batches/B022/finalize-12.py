from pathlib import Path
import json,hashlib
p=Path(__file__).parent;m=json.load(open(p/'review-input-12.json'));o=json.load(open(p/'review-input-11.json'));bad=[f for f,h in m['sourceHashes'].items()if hashlib.sha256(Path(f).read_bytes()).hexdigest()!=h];changed=[f for f,h in m['sourceHashes'].items()if o['sourceHashes'].get(f)!=h];assert not bad and len(changed)==3
old=(p/'snapshot/round-11/exports/telescopic-stroke-loader/telescopic-stroke-loader/styles.css').read_text();new=(p/'snapshot/round-12/exports/telescopic-stroke-loader/telescopic-stroke-loader/styles.css').read_text();assert old.rstrip()==new.rstrip()
(p/'hash-verification-final-12.json').write_text(json.dumps({'authorHashesMatched':100,'sharedHashesMatched':1,'changed':changed,'loaderOnlyTrailingWhitespace':True,'mismatches':bad},indent=2)+'\n');rows=[]
for name,count in [('navigation',2),('tables',2),('react-navigation',8),('react-tables-loader',8)]:
 d=json.load(open(p/f'measurements-{name}-12.json'));assert len(d)==count;rows+=d
assert not any(r.get('error')or r.get('errors')or any(not x['pass']for x in r.get('checks',[]))for r in rows)
r=json.load(open(p/'review-11.json'));r.update(round=12,overall='pass')
for x in r['parts']:
 n=x['number']
 if n in [669,684]:
  x.update(verdict='pass',findings=[],evidence=[f'evidence-12/final-sheet-{x["id"]}.jpg','measurements-navigation-12.json'if n==669 else'measurements-tables-12.json','measurements-dock-height-forced-12.json'if n==669 else'measurements-ceramic-forced-12.json']);x['reviewed']['round']=12;x['note']='dockのrow方向を明示し、6項目が通常幅2列・狭幅1列へ。160pxの縦空白を解消。全配置とnative/Reactを維持。'if n==669 else'forcedにも新しい操作列寸法と薄い境界を適用。巨大な旧取手を解消し、通常トレーと操作列の構成を維持。native/Reactを再確認。'
 else:x['reviewed']['inheritedFromRound']=11;x['reviewed']['authorAndSharedHashUnchanged']=n!=696
 if n==696:x['reviewed']['onlyTrailingWhitespaceChanged']=True
r['coverage']={'authorHashesMatched':100,'sharedHashesMatched':1,'changedBehaviorCSS':2,'whitespaceOnlyCSS':1,'unchangedAuthorFiles':97,'nativeChecks':56,'reactChecks':44,'reactPlacements':8,'navigationLayouts':32,'dockHeightConditions':4,'ceramicForcedConditions':2,'inheritedParts':8,'imagesViewed':['2 final sheets /21 gallery portable React images','R669 dock1100/320 close','R684 fresh forced close'],'pendingRequiredMeasurements':[],'limitations':['8件は作者/共有差分を確認し前round判定を継承。696はEOF空白のみでCSS規則不変。','CSSの変更対象2件を再実行。Reactの長文全配置組合せは未実行、gallery/portableで同作者CSSを実査。','特定状態の検査であり無欠陥保証ではない。']}
(p/'review-12.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');lines=['# B022 round 12 独立再検査','','10件すべて pass。R669のdockの過大な行高、R684 forcedの旧太枠を解消。','','| ID | 判定・根拠 |','|---|---|']+[f'| R{x["number"]} | pass: {x["note"]} |'for x in r['parts']]+['','変更2件のgallery/portable native56 checks、React4形式44 checks成功。R669全32配置と6項目の実画像、R684通常/forcedの操作列を確認。696はEOF空白のみ、他97作者ファイルと共有不変。最終100作者＋1共有hash一致。詳細は[review-12.json](review-12.json)。'];(p/'review-12.md').write_text('\n'.join(lines)+'\n');print('B022 all10pass saved')
