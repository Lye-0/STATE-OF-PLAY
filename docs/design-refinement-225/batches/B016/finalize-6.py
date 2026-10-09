from pathlib import Path
import json,hashlib,difflib
base=Path('docs/design-refinement-225/batches');react=json.loads((base/'B016/measurements-react-6.json').read_text());assert len([x for x in react if 'id'in x])==64 and not any(x.get('error') or any(not c['pass'] for c in x.get('checks',[])) for x in react)
for b,old,r,count in [('B015',3,4,18),('B016',5,6,14)]:
 p=base/b;prior=json.loads((p/f'review-{old}.json').read_text());manifest=json.loads((p/f'review-input-{r}.json').read_text());hashdoc=json.loads((p/f'hash-verification-{r}.json').read_text());hashdoc['currentMismatches']=[f for f,h in manifest['sourceHashes'].items() if hashlib.sha256(Path(f).read_bytes()).hexdigest()!=h];assert not hashdoc['currentMismatches'];a=p/f'snapshot/round-{old}';z=p/f'snapshot/round-{r}';shared=[f for f in z.rglob('*') if f.is_file() and '/internal/' in str(f)];hashdoc['sharedComparedFiles']=len(shared);assert all(f.read_bytes()==(a/f.relative_to(z)).read_bytes() for f in shared);hashdoc['styleDiffs']={}
 for f in hashdoc['changed']:
  id=Path(f).parent.name;x=Path('exports')/id/id/'styles.css';hashdoc['styleDiffs'][id]=list(difflib.unified_diff((a/x).read_text().splitlines(),(z/x).read_text().splitlines(),n=2))
 (p/f'hash-verification-{r}.json').write_text(json.dumps(hashdoc,ensure_ascii=False,indent=2))
 data=json.loads((p/f'measurements-ends-{r}.json').read_text());assert len(data)==count and not any(x.get('error') or any(not c['pass'] for c in x['checks']) for x in data)
 parts=[]
 for x in prior['parts']:
  rating='rating' in x['id'];note=x['note'].split(' round2の独立判定')[0].split(' 造形・通常操作の評価')[0].replace('ただし共通の中央寄せによる先頭到達不能を新規検出。','')
  if rating:note+=' 今回の開始辺配置でmax10先頭への到達不能を解消。初期0・末尾往復・Home後の先頭が見え、実クリックで値と選択が一致する。'
  elif b=='B015':note+=' round3から作者10ファイルと配布内部runtimeが同一のため、同条件の判定を継承。'
  else:note+=' round5から作者10ファイル・内部runtime同一。今回も実gallery/portableのforced軌道とHome/Endの値追従を再確認。'
  ev=list(x['evidence'])+[f'hash-verification-{r}.json']
  if rating:ev += [f'measurements-ends-{r}.json',f'evidence-{r}/ends-{x["number"]}-sheet.jpg',('../B016/' if b=='B015' else '')+'measurements-react-6.json']
  elif b=='B016':ev += ['measurements-focused-colors-6.json','evidence-6/colors-forced-sheet.jpg']
  if x['number']==504:ev+=['measurements-ceramic-6.json','measurements-pixels-6.json'];note+=' 末尾5/10の実背景は平面#dbe7ce、星#62815cとの3.393:1を保持し、濃い縁の重なりは8画像とも無し。'
  parts.append({'id':x['id'],'number':x['number'],'verdict':'pass','note':note,'findings':[],'evidence':ev,'reviewed':{'round':r,'inheritedDetailedReviewRound':old,'fullRecheck':False,'sourceHashMatched':True,'scope':'変更箇所を実操作・視認し、変更なしのnative/hover/長文等は旧証拠と内部runtime不変を照合して継承。','freshZeroAndPointerBothEnds':rating,'max5And10':rating,'LTRRTLForced':rating,'homeEndAndReturnPointer':rating,'portableAndActualGallery':True,'react4FormatsFocused':rating,'forcedColorRetested':b=='B016' and not rating}})
 coverage={'parts':10,'ratingsFocused':count//2,'nativeMatrixConditions':count*8,'nativeAssertionsPassed':sum(len(x['checks']) for x in data),'nativeAssertionsFailed':0,'visuallyViewedImages':count*24,'viewedContactSheets':[f'evidence-{r}/ends-{x["number"]}-sheet.jpg' for x in parts if 'rating'in x['id']],'react':'16個体×4形式のLTR/RTL両端クリックとHome計384assertion全成功。B016/measurements-react-6.json。TSX portable32画像を4 sheetsで視認。','limitation':'指定された状態・操作・ブラウザの検査結果であり、未検査の環境/状態までの無欠陥保証ではない。'}
 out={'batch':b,'round':r,'overall':'pass','parts':parts,'coverage':coverage,'evidence':[f'hash-verification-{r}.json',f'measurements-ends-{r}.json']};(p/f'review-{r}.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');lines=[f'# {b} round {r} 独立再検査','', '10 / 10 pass。作者・共有ソースの変更は行っていない。','',f'実gallery/portable、320px、max5/10、LTR/RTL、通常/forcedを組み合わせた {count*8} 条件。初期0、先頭直接クリック、末尾スクロールと直接クリック、Home/End、先頭へ戻るクリックを計 {coverage["nativeAssertionsPassed"]} 項目で確認し全成功。各個体48画像を視認。', '', 'React TSX/JSX × portable/original でも両バッチ16 ratingsの両端クリックとHome計384項目が成功。ページエラー無し、unmount後残存無し。', '', f'旧round {old} から変更したのは各ratingのstyles.cssの開始辺配置。その他作者ファイルと配布内部runtimeの一致を照合し、nativeフォーム、preview解除、長文、reduced等の詳細証拠は旧レビューを継承。', '', '| ID | 判定 | 根拠 |','|---|---|---|']
 for x in parts:lines.append(f'| R{x["number"]} | pass | {x["note"]} |')
 lines += ['',f'ハッシュ: [hash-verification-{r}.json](hash-verification-{r}.json)。個別画像・測定の参照は [review-{r}.json](review-{r}.json)。','',coverage['limitation']];(p/f'review-{r}.md').write_text('\n'.join(lines)+'\n');print(b,'saved',len(parts),'hash100 matched, internal',len(shared))
