import json,hashlib
from pathlib import Path
p=Path(__file__).parent;targets=[r for r in json.load(open('docs/design-refinement-225/targets.json')) if r['batch']=='B009'];m=json.load(open(p/'review-input-3.json'));checks=[{'path':k,'expected':v,'actual':hashlib.sha256(Path(k).read_bytes()).hexdigest()} for k,v in m['sourceHashes'].items()];assert all(r['expected']==r['actual'] for r in checks)
(p/'evidence-3/hash-check.json').write_text(json.dumps(checks,indent=2));contrast=json.load(open(p/'contrast-summary-3.json'));(p/'evidence-3/contrast-details.json').write_text(json.dumps(contrast,ensure_ascii=False,indent=2));(p/'contrast-summary-3.json').write_text(json.dumps([dict(number=r['number'],mode=r['mode'],min=r['min']) for r in contrast],indent=2))
notes={292:'丸い信号端子の厚みと横へ接続する薄い読取り面が分かれ、以前の二重枠カプセルより固有の構造を持つ。狭幅長文でも端子と本文が重ならない。',293:'細い左右の折り目を残し本文の無地面を確保。320pxと長文RTLでも文字が折り目の濃い面へ出ない。',297:'展示にもff-notice-copyの凹んだ明るい面が現れ、実発火との欠落差を解消。説明文字も実背景上5.491:1以上。下の操作行が情報表示と分かれる。',301:'離れた四隅から長短の連続した左右支柱へ変更され、開いた括弧で読み面を支える構造が成立。本文面は連続し、周縁の空隙と文字は分かれる。',310:'結果見出しと説明を揃え、追加操作を点線下の行へ分離。色替えに留まらず、結果を読んでから次の操作へ進むBの用途を示す。',316:'機能・可読性は成立するが、現状の固有差は左太線と内側細線が中心。本文→仕様→チェック→下線操作の構成がR330と近く、綴じ側という意図を伝える紙面や支持の構造が弱い。Aとして再設計を要求する。',324:'仕様面の間にも不透明なケースの下地があり、背後の文字が混ざる問題を解消。本文の読み面と段差を持つ仕様欄が一体のケースに収まる。',329:'項目と値の二列、項目側の面、明確な設定操作は比較用途に適する。ただし320pxの長い連続文字が本文スクロール領域で切れる。',330:'明朝の本文と広い行間、控えめな仕様・操作で読む用途を優先し、R329との違いは成立。ただし320pxの長い連続文字が大きく切れる。',332:'傾いた軌道面と正面の数値が分かれ、弧の終点で進捗を表現。0/25/100で表示と実値を確認し、割合不明では数値が…、native value属性なし、終点非表示となる。'}
parts=[]
for t in targets:
 n=t['number'];find=[];evidence=['measurements-final-3.json','motion-summary-3.json','contrast-summary-3.json',f"evidence-3/{t['category']}-portable-sheet.jpg",f"evidence-3/{t['category']}-gallery-sheet.jpg"]
 if n==316:find=[dict(kind='design_judgment',description=notes[n],recommendation='単に罫線を増やさず、綴じる接点・紙面の前後・注釈を置く独立した余白など、構造そのものが用途を説明する形へ。本文列を保ちながらR330との構成差を作る。',evidence=['evidence-3/margin-bracket-hint-portable-rest.png','evidence-3/warm-reading-hint-portable-rest.png','evidence-3/hints-gallery-sheet.jpg'])]
 if n in [329,330]:
  clip=30.84375 if n==329 else 101.59375;panel=9.84375 if n==329 else 76.59375
  find=[dict(kind='reproducible_clipping',description=f'320px viewportで本文へLongUnbrokenProjectIdentifier1234567890を含めると折返しされず、inner領域から{clip:.2f}px切れる（panel外へは{panel:.2f}px）。LTR右／RTL左、portable/gallery双方。innerはoverflow-x:hiddenなので末尾を水平スクロールで読めない。',recommendation='本文へoverflow-wrap:anywhere等を適用し、日本語・連続識別子・URLの折返しと320px/RTLを確認する。',evidence=['measurements-focused-3.json',f"evidence-3/{t['id']}-portable-clip-ltr.png",f"evidence-3/{t['id']}-gallery-clip-rtl.png"])];evidence+=['measurements-focused-3.json']
 reviewed=['portableと実galleryのCSS環境：通常・hover入口40ms/確定/退出60ms/再進入60ms/復帰','320px・長文・RTL・reduced-motion・forced-colors','背景と擬似要素の読み面を考慮した文字contrast、A/B造形・情報構造']
 if t['category']=='toasts':reviewed+=['未加工gallery見本と実発火通知の画像','凍結APIでduration0通知・長いaction・Enter発火/閉鎖'];evidence+=['evidence-3/gallery-sample-fired-sheet.jpg']
 elif t['category']=='hints':reviewed+=['展開面・320×360短いviewportの内容scrollと末尾操作','checkboxクリック/Space、Escapeと適用後のtriggerフォーカス復帰'];evidence+=['measurements-keyboard-3.json','evidence-3/short-portable-sheet.jpg','evidence-3/short-gallery-sheet.jpg']
 else:reviewed+=['0/25/100、updateFoundation({indeterminate:true})で割合不明・native value/終点'];evidence+=['measurements-focused-3.json','evidence-3/orbital-mark-progress-portable-unknown.png','evidence-3/orbital-mark-progress-gallery-unknown.png']
 parts.append(dict(id=t['id'],number=n,verdict='changes_required' if find else 'pass',note=notes[n],findings=find,evidence=evidence,reviewed=reviewed))
coverage={'parts':10,'portable':10,'actual_gallery':10,'manifestHashesMatch':True,'visuallyReviewedSheets':[str(f.relative_to(p)) for f in sorted((p/'evidence-3').glob('*sheet.jpg'))],'limits':'特定状態・ターゲットの検査で無欠陥保証ではない。実gallery通知は実発火、長文やduration0/API probeでは同一hashの凍結initをgallery CSS環境の複製rootへ使用。初回のupdate API誤記はretryの成功結果で置換。forced切替直後のfocus疑義は通常媒体の独立keyboard probeで棄却。setData(null)は0へ正規化されるためunknown確認はupdateFoundationの専用probeを根拠とする。'}
result=dict(batch='B009',round=3,overall='changes_required',parts=parts,coverage=coverage,evidence=['review-input-3.json','evidence-3/hash-check.json','contrast-summary-3.json','motion-summary-3.json'])
(p/'review-3.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
md='# B009 round 3 独立検査\n\n10件中7件 pass、3件 changes_required。R316はAの造形判断、R329/R330は長い連続文字の実再現クリッピングとして区別する。作者ファイルは変更していない。\n\n'
for r in parts:
 md+=f"## R{r['number']} {r['id']} — {r['verdict']}\n\n{r['note']}\n\n"
 for f in r['findings']:md+=f"- {f['description']} 改善案：{f['recommendation']}\n"
 md+='\n証拠：'+', '.join(f'[{v}]({v})' for v in r['evidence'])+'\n\n'
md+='## 検査範囲\n\n全20経路でhover文字矩形差0px。定常文字contrast最小5.059:1以上。ヒント8経路でチェック/Space/Escape/適用/フォーカス復帰成功。9枚のcontact sheetと個別画像を視認。\n\n'+coverage['limits']+'\n'
(p/'review-3.md').write_text(md);print('saved 7 pass / 3 changes_required')
