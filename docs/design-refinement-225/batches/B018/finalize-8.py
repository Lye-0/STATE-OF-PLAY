from pathlib import Path
import json,hashlib
p=Path(__file__).parent;old=json.load(open(p/'review-6.json'));m=json.load(open(p/'review-input-8.json'))
assert all(hashlib.sha256(Path(f).read_bytes()).hexdigest()==h for f,h in m['sourceHashes'].items())
notes={569:'展開本文の長い補足識別子を折り返すよう修正。320px・LTR/RTL・forcedで本文とrootからの超過0を確認。工程名/時刻/statusを低い列で読むBの構成とnative開閉を保持。',581:'紙の上端を跨ぐ幅のある金具と、その背後から立ち上がる持ち手へ変更。金具が紙端を覆う接点と紙束の下縁が対応し、単独の輪郭飾りから挟む構造へ改善。長文/RTL/forcedの表示と入力保持も成立。',588:'未到達の工程名を読む濃度とdisabled操作を分離。4工程以上/狭幅では番号＋工程名の横向き項目を縦に積み、7工程の1文字列を解消。非同期エラー14px・7.022:1、入力値保持を確認。',589:'通常の縦工程列をforcedでも保持し、7工程の極細列への逆戻りを解消。未到達名6.870:1、非同期エラー14px・7.330:1を確認。簡潔な工程/入力のBの用途を維持。',590:'7工程を横向き項目の縦積みへ切替え、長いfield labelを折り返して超過0へ。未到達名7.697:1、非同期エラー14px・7.016:1。読書的な見出し・下線入力のB構成を保持。'}
for x in old['parts']:
 n=x['number'];x['verdict']='pass';x['findings']=[]
 if n in notes:
  x['note']=notes[n];x['reviewed']={**x.get('reviewed',{}),'round':8,'independentReinspection':True};x['evidence']=[f'evidence-8/sheet-{x["id"]}.jpg','measurements-8.json','measurements-settled-8.json','measurements-react-8.json','contrast-summary-8.json','measurements-native-8.json'if n==569 else'measurements-wizards-8.json']
 else:x['reviewed']={**x.get('reviewed',{}),'inheritedFromRound':6,'author10FilesUnchanged':True,'shared40FilesUnchanged':True};x['evidence'].append('hash-verification-8.json')
sets={n:json.load(open(p/(n+'.json')))for n in ['measurements-8','measurements-native-8','measurements-wizards-8','measurements-react-8','measurements-settled-8','measurements-settled-b-8']}
assert [len(v)for v in sets.values()]==[10,2,8,24,10,6]
assert not any(r.get('error')or any(not c['pass']for c in r.get('checks',[]))for rows in sets.values()for r in rows)
old.update(round=8,overall='pass',coverage={'reinspectedParts':5,'inheritedUnchangedParts':5,'primaryRows':10,'nativeTimelineChecks':14,'nativeWizardChecks':104,'reactPartsFormats':20,'reactChecks':72,'settledRows':16,'sourceHashesMatched':100,'sharedInternalHashesMatched':40,'runtimeErrors':0,'imagesViewed':'5 sheets with portable/gallery rest,hover,long,RTL,forced and React review/opened/forced; gallery narrow errors of three B wizards; clipped-page portable rest and main long320; soft forced7 and warm long320 close images','pendingRequiredMeasurements':[],'limitations':['Chromiumの指定状態に対する検査であり無欠陥保証ではない。','既合格5件は作者50ファイル・共有internal40ファイル一致でround6の実検査を継承。','React長文全組合せは未実行。同作者CSSのgallery/portableで長文を実査。','戻るボタンのdisabled時は低コントラストだが非操作状態のため差戻しに含めない。未到達の工程名は読む情報として別に確認。']})
(p/'review-8.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n')
lines=['# B018 round 8 独立再検査','','10 pass / 0 changes_required。修正5件を再検査し、未変更5件はround6との作者50ファイル/共有40ファイル一致で継承。作者・共有ソースは変更していない。','','| ID | 判定根拠 |','|---|---|']
lines += [f'| R{x["number"]} | {x["note"]} |'for x in old['parts']]
lines+=['','通常・hover入口/解除/再進入・320px/長文/7工程・RTL・forced/reducedを実gallery/portableで確認。必須入力、非同期reject/busy、入力ノードと値の保持、reset/controlled/disabled/schema更新、Enter/textarea/native emailを含むwizard104 checks、timeline14 checks、React4形式×5件72 checks成功。','','遷移完了650ms後のcontainmentは修正5件の検査対象で超過0。B3のエラーは7.016〜7.330:1、未到達名は6.870〜8.266:1。disabledの戻るボタンは非操作状態として別扱い。R581の金具は紙端を覆い持ち手の下端と重なり、forcedでは装飾を除去する。','','作者100 hashはround8と現行一致。必須計測の未完なし。React長文全組合せは未実行で同CSSのgallery/portableを使用。詳細は[review-8.json](review-8.json)。']
(p/'review-8.md').write_text('\n'.join(lines)+'\n');print('B018 round8 10 pass saved')
