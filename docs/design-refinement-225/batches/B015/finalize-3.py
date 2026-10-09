import json,hashlib
from pathlib import Path
p=Path(__file__).parent;prev=json.loads((p/'review-2.json').read_text());current=json.loads((p/'review-input-3.json').read_text());old=json.loads((p/'review-input-2.json').read_text());hashes=json.loads((p/'hash-verification-3.json').read_text());assert not hashes['sourceMismatches'] and not hashes['changedCompiledShared']
assert all(hashlib.sha256(Path(k).read_bytes()).hexdigest()==h for k,h in current['sourceHashes'].items())
assert not json.loads((p/'runtime-summary-3.json').read_text())['mismatches']
notes={490:'著者用の縦長肖像・明朝氏名・上下罫を保持。二重余白整理でroot222pxの氏名列72→120px、長名も読みやすくなった。forced選択Sora/Rin/長名はHighlight上の可視文字として復帰。hoverで氏名・イニシャルは移動しない。',492:'連続する台と検査札を保持。forced星はroot222pxで札左端の外2.59px→内4.11pxへ中央配置され、枠との交差を解消。通常の造形・五段階・10段階操作は維持。',498:'縫い目を持つ横布と五つの留め帯を保持し、選択星を濃くした。星#583b68と実布面#c9aaceは4.519:1。値/preview/解除は一致。',499:'C形留具と札の通常造形を保持。forced星幅はroot222で6.16→18.75px、gallery251で10.20→22.81pxへ改善。通常選択星#714526と札#d9b48dは4.208:1。',500:'五つの駒の肩・下面の厚みを保持。選択星#654b22と面#d5b36cは4.063:1へ改善。五段階と10段階の値/preview/RTLを維持。'}
rows=[]
for r in prev['parts']:
 n=r['number'];r['verdict']='pass';r['findings']=[]
 if n in notes:
  r['note']=notes[n];r['evidence']=[s.replace('evidence-2','evidence-3').replace('-2.json','-3.json') for s in r['evidence']]+['hash-verification-3.json','runtime-summary-3.json'];r['reviewed']['round']=3;r['reviewed']['inherited']=False
  if n!=490:r['evidence']+=['contrast-stars-3.json','measurements-focused-ratings-3.json']
  else:r['evidence']+=['measurements-focused-forced-3.json','evidence-3/warm-author-profile-portable-forced-default.png','evidence-3/warm-author-profile-gallery-forced-selected-rin.png']
 else:
  files=[k for k in current['sourceHashes'] if '/'+r['id']+'/' in k];assert len(files)==10 and all(current['sourceHashes'][k]==old['sourceHashes'].get(k) for k in files)
  r['note']+=' round2の独立判定を、作者10ファイル・配布共有runtime同一を確認して継承。';r['reviewed']['round']=2;r['reviewed']['inherited']=True;r['reviewed']['authorFilesUnchanged']=10;r['evidence']+=['review-2.json','hash-verification-3.json']
 rows.append(r)
coverage={'snapshot':'snapshot/round-3','input':'review-input-3.json','sourceHashesVerified':100,'changedAuthors':[490,492,498,499,500],'inheritedAuthors':[491,493,494,496,497],'unchangedAuthorFiles':95,'inheritedAuthorFiles':50,'compiledSharedChanged':0,'nativeRatingsModeCases':8,'nativeAvatarModeCases':2,'reactPlacements':20,'reactFormats':['tsx-portable','jsx-original','tsx-original','jsx-portable'],'imagesViewed':[str(f.relative_to(p)) for f in sorted((p/'evidence-3').glob('*sheet.jpg'))]+['evidence-3/warm-author-profile-portable-forced-default.png','evidence-3/warm-author-profile-gallery-forced-selected-rin.png'],'visualScope':'変更5件は通常/hover/320/長文/RTL/forcedとnative操作・React配布画像を再視認。入口/解除/再進入とreducedは実測、通常文字位置安定/reducedアニメ空。未変更5件はround2視認と操作証拠を厳密hash照合で継承。','runtime':'preview5で確定値3を保持→解除でfilled3、選択4/矢印5/Home1/End5、clear0/reset3、readonly送信維持/disabled送信除外、required、controlled2、max10末尾とmax2clamp、LTR/RTL、forced4/0の値/filled/exact一致。React20配置でも選択5/clear/controlled2/10一致。','contrast':'通常テキスト最小4.806:1。変更した星R498/499/500は実面に対し4.519/4.208/4.063:1。','limitations':'特定状態・ターゲットの独立検査であり無欠陥保証ではない。8文字initialsはストレス記録として保持し、通常2文字の評価と区別。gallery nativeは実root cloneをformへ入れfrozen initで実行。'}
out={'batch':'B015','round':3,'overall':'pass','parts':rows,'coverage':coverage,'evidence':['hash-verification-3.json','runtime-summary-3.json','contrast-summary-3.json','contrast-stars-3.json']};(p/'review-3.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
md='# B015 round 3 独立再検査\n\n全10件 pass。変更5件を実gallery/portableとReact4配布形式で再検査し、未変更5件は作者50ファイルと配布共有runtimeの完全一致を確認してround2の証拠を継承した。終了時の現行source100hashも一致。\n\n'
for r in rows:md+=f"- R{r['number']} {r['id']}: **pass** — {r['note']}\n"
md+='\n変更5件の画像をすべて視認。hover入口/解除/再進入、320px・長文・RTL、forced/reduced、native入力・keyboard・フォーム・reset・controlled、React配布を確認。preview値と確定値の違いを区別し、通常テキストの最小contrastは4.806:1。\n\n測定と視認範囲はreview-3.json、hash-verification-3.json、runtime-summary-3.json、contrast-stars-3.jsonおよびevidence-3に保存。無欠陥保証ではなく、明記した状態の検査結果。\n'
(p/'review-3.md').write_text(md);print('saved all10pass')
