from pathlib import Path
import json,hashlib,copy
p=Path(__file__).parent;old=json.load(open(p/'review-input-7.json'));new=json.load(open(p/'review-input-9.json'));bad=[f for f,h in new['sourceHashes'].items()if hashlib.sha256(Path(f).read_bytes()).hexdigest()!=h];assert not bad
changed=[f for f,h in new['sourceHashes'].items()if old['sourceHashes'].get(f)!=h];assert len(changed)==2
(p/'hash-verification-final-9.json').write_text(json.dumps(dict(mismatches=bad,changedFromRound7=changed,matched=len(new['sourceHashes'])),indent=2)+'\n')
a=json.load(open(p/'measurements-native-9.json'));b=json.load(open(p/'measurements-react-9.json'));assert len(a)==4 and len(b)==12
assert not any(r.get('error')or r.get('errors')or any(not c['pass']for c in r.get('checks',[]))for r in a+b)
f=json.load(open(p/'measurements-followup-9.json'));assert len(f)==32
for r in f:
 if 'retry'in r:assert r['retry']['w']>=76 and r['text']['h']==16 and r['restoredCaption']=='flex'
 elif not r['forced']:assert all(n['opacity']=='1'and n['transform']=='none'for n in r['numbers'])
def lum(rgb):
 v=[x/255 for x in rgb];v=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in v];return sum(x*y for x,y in zip(v,[.2126,.7152,.0722]))
ratio=(lum([225,206,170])+.05)/(lum([96,81,59])+.05)
r=copy.deepcopy(json.load(open(p/'review-7.json')));r['round']=9;r['overall']='changes_required'
for x in r['parts']:
 if x['number'] not in [592,615]:x['reviewed']['inheritedFromRound']=7;x['reviewed']['authorAndSharedHashUnchanged']=True;continue
 x['reviewed']['round']=9;x['evidence']=['evidence-9/sheet-'+x['id']+'.jpg','evidence-9/followup-sheet.jpg','measurements-followup-9.json','measurements-native-9.json','measurements-react-9.json'];x['findings']=[]
 if x['number']==615:x['verdict']='pass';x['note']=f'全行連番は通常配色でopacity1/transform noneを維持。分類文字#60513b/面#e1ceaaは{ratio:.3f}:1へ改善。欄構造・hover往復・狭幅・RTL・forced・操作・Reactを維持。'
 else:
  x['verdict']='changes_required';x['note']='再試行は通常80px/forced76px、文字高さ16pxの1行へ解消。通常の失敗中は計数盤が消え、成功時に復帰する。forcedだけ旧件数表示が残る意味の不一致が残存。';x['findings']=[dict(kind='forced_error_stale_count',description='実async検索失敗中、通常配色では計数盤を隠すがforcedではRESULTSと旧1件が残る。gallery/portable×1100/320×LTR/RTLのforced8条件でcaption display:flex。直前の成功件数であり失敗した現検索の結果ではない。',recommendation='retry表示時のcaption非表示を配色条件から独立させ、成功時の復帰を維持する。',evidence=['measurements-followup-9.json','evidence-9/radar-window-search-portable-320-ltr-forced-followup.png','src/parts/searchbars/radar-window-search/styles.css:96'])]
r['coverage']={'changedPartsReinspected':[592,615],'unchangedPartsInherited':8,'unchangedAuthorFiles':98,'sourceHashMismatches':[],'primaryRows':4,'nativeChecks':sum(len(x.get('checks',[]))for x in a),'reactPlacements':8,'reactChecks':sum(len(x.get('checks',[]))for x in b),'followupConditions':32,'imagesViewed':['2 primary sheets /24 states','followup sheet /16 narrow images','React sheet /4 images','native error sheet /4 images','R592 normal/forced error close images'],'pendingRequiredMeasurements':[],'limitations':['未変更8件はround7の独立合格と作者/shared hash一致を基に継承。','React長文全組合せは未実行。gallery/portableで同作者CSSを長文実査。','初回followupでerrorオプションが実errorを生成しないfixtureを補正し、実async reject/resolveで32条件を再実行した。','指定状態のChromium検査であり無欠陥保証ではない。']}
(p/'review-9.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');lines=['# B019 round 9 独立再検査','','9 pass / 1 changes_required。R592のforced失敗中に旧件数が残る点だけを差戻す。作者変更なし。','','| ID | 判定・根拠 |','|---|---|']+[f'| R{x["number"]} | {x["verdict"]}: {x["note"]} |'for x in r['parts']];lines+=['','変更2件をgallery/portable・hover往復・320長文・RTL・forced/reduced・native・React4形式で再検査。実async失敗/復帰と連番の32条件を追加。再試行の1行化とR615連番/分類文字は解消。未変更8件は作者/shared hashを照合してround7合格を継承。','','必須検査の未完なし。改善案・証拠・範囲は[review-9.json](review-9.json)。'];(p/'review-9.md').write_text('\n'.join(lines)+'\n');print('saved B019 r9 9pass1change',ratio,r['coverage']['nativeChecks'],r['coverage']['reactChecks'])
