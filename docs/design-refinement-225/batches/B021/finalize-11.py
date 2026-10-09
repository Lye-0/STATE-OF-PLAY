from pathlib import Path
import json,hashlib
p=Path(__file__).parent
m=json.load(open(p/'review-input-11.json'));old=json.load(open(p/'review-input-10.json'));bad=[f for f,h in m['sourceHashes'].items()if hashlib.sha256(Path(f).read_bytes()).hexdigest()!=h];assert not bad
changed=[f for f,h in m['sourceHashes'].items()if old['sourceHashes'].get(f)!=h];assert len(changed)==6
(p/'hash-verification-final-11.json').write_text(json.dumps({'authorHashesMatched':100,'sharedHashesMatched':1,'mismatches':bad,'changedFrom10':changed},indent=2)+'\n')
r=json.load(open(p/'review-10.json'));r['round']=11;r['overall']='changes_required'
for part in r['parts']:
 n=part['number']
 if n in [648,649,650,659,660,668]:
  part['findings']=[];part['verdict']='pass';part['reviewed']['round']=11;part['evidence']=['evidence-11/sheet-'+part['id']+'-0.jpg','measurements-context-11.json'if n<656 else'measurements-navigation-11.json']
  part['note']={648:'メニューの説明折返しと補助文字は改善。閉じた対象カードの長語説明は切れが残る。',649:'メニューの補助文字は改善。閉じた対象カードの長語説明は切れが残る。',650:'メニューの補助文字は改善。閉じた対象カードの長語説明は切れが残る。',659:'独立支持面を維持。補足の実背景合成コントラスト最小5.57:1へ改善。',660:'見開きの構造を維持。gallery通常と320pxの標準Fieldworkは1行、狭幅は開閉操作を分離。',668:'6項目のdockを読める幅で折返す。320/RTL/forcedでも一文字縦列を解消。'}[n]
  if n in [648,649,650]:
   part['verdict']='changes_required';a={648:50.5,649:35.5,650:54.5}[n];b={648:23.5,649:8.5,650:27.5}[n]
   part['findings']=[{'kind':'closed_target_description_clipping','description':f'320pxの閉じた対象カードでtargetDescriptionの長語LongUnbrokenDescription1234567890が切れる。portable root222pxで外枠を{a}px、gallery通常で{b}px越える。portable forcedでも14.25px。LTR/RTL双方。メニュー説明修正とは別の.wb-context-target-copy smallにoverflow-wrap:normalが残る。','recommendation':'対象カードのsmallにもmin-width:0/overflow-wrap:anywhere等を適用し、通常/forcedで長語を収める。','evidence':['measurements-targets-11.json',f'evidence-11/{part["id"]}-portable-focused-target-normal-ltr.png',f'evidence-11/{part["id"]}-portable-focused-target-forced-rtl.png']}]
 else:part['reviewed']['inheritedFromRound']=10;part['reviewed']['authorAndSharedHashUnchanged']=True
r['coverage']={'authorHashesMatched':100,'sharedHashesMatched':1,'changedAuthorFiles':6,'inheritedUnchangedParts':4,'nativeChecks':186,'reactChecks':108,'reactPlacements':24,'layoutConditions':96,'contextReadabilityConditions':24,'closedTargetConditions':24,'imagesViewed':['6 parts primary/layout/readability/native sheets 21 sheets','React 24 images in 2 sheets','R648 portable long target close'],'pendingRequiredMeasurements':[],'limitations':['以前の4合格は作者40ファイルと共有hash不変で継承。','B3低コントラスト計算はdisabled項目を除外。R660 gradientを無視した単純合成は不採用、色規則は前round不変。','React長文/全配置組合せは未実行。同作者CSSのgallery/portableで検査。','特定状態の検査であり無欠陥保証ではない。']}
(p/'review-11.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
lines=['# B021 round 11 独立再検査','','7 pass / 3 changes_required。前回6件の指摘は解消。R648/R649/R650は、閉じた対象カードの長い説明が切れる別経路を差戻す。','','| ID | 判定・根拠 |','|---|---|']+[f'| R{x["number"]} | {x["verdict"]}: {x["note"]} |'for x in r['parts']]
lines+=['','gallery/portable native186 checks、React4形式108 checks成功。96配置、メニュー可読性24条件、閉じた対象24条件を確認。作者100＋共有1 hash一致。未変更4件はhash照合で継承。作者は検査担当未変更。詳細と証拠は[review-11.json](review-11.json)。']
(p/'review-11.md').write_text('\n'.join(lines)+'\n');print('saved 7 pass 3 changes_required')
