from pathlib import Path
import json,hashlib
from PIL import Image,ImageChops
p=Path(__file__).parent;m=json.load(open(p/'review-input-6.json'));o=json.load(open(p/'review-input-5.json'));bad=[f for f,h in m['sourceHashes'].items()if hashlib.sha256(Path(f).read_bytes()).hexdigest()!=h];changed=[f for f,h in m['sourceHashes'].items()if o['sourceHashes'].get(f)!=h];assert not bad and len(changed)==1;(p/'hash-verification-final-6.json').write_text(json.dumps({'matched':len(m['sourceHashes']),'changed':changed,'mismatches':bad},indent=2)+'\n')
pixels=[]
for mode in ['normal','forced']:
 a=Image.open(p/'evidence-6'/f'segment-orbit-loader-steady-seam-{mode}-start.png').convert('RGB');b=Image.open(p/'evidence-6'/f'segment-orbit-loader-steady-seam-{mode}-end.png').convert('RGB');n=sum(1 for x in ImageChops.difference(a,b).getdata()if max(x)>10);assert n==0;pixels.append({'mode':mode,'changedPixelsAbove10':n})
(p/'seam-summary-6.json').write_text(json.dumps(pixels,indent=2)+'\n');r=json.load(open(p/'review-5.json'));r.update(round=6,overall='pass')
for x in r['parts']:
 if x['number']==708:x.update(verdict='pass',findings=[],note='旧偶数羽根色を除去。6羽根の縁/側面色が一致し、60度送りの定常周期端も通常/forcedで画素差10超0。厚い羽根と中心空隙の構造を保持。',evidence=['measurements-steady-seams-6.json','seam-summary-6.json','evidence-6/segment-orbit-loader-steady-seam-normal-start.png','evidence-6/segment-orbit-loader-steady-seam-normal-end.png']);x['reviewed']['round']=6
 else:x['reviewed']['inheritedFromRound']=5;x['reviewed']['authorAndSharedHashUnchanged']=True
r['coverage']={'sourceHashesMatched':len(m['sourceHashes']),'changedAuthorCSS':1,'unchangedAuthorFiles':49,'inheritedParts':4,'loopBoundaryConditions':2,'imagesViewed':['4 normal/forced seam endpoint images'],'pendingRequiredMeasurements':[],'limitations':['1CSSの偶数色1規則削除のみ。前roundのnative50/React32checksと4件判定をhash照合で継承。','特定状態の検査であり無欠陥保証ではない。']};(p/'review-6.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');(p/'review-6.md').write_text('# B023 round 6 独立再検査\n\n5件すべて pass。R708の定常周期端を再比較し、通常/forcedともRGB差10超0画素。縁と側面色の交代を解消、4画像で視認。\n\n1CSSの旧偶数色規則削除のみ、残る49作者ファイル不変。4件と前roundの操作/React結果はhash照合で継承。詳細は[review-6.json](review-6.json)。\n');print('B023 5pass saved')
