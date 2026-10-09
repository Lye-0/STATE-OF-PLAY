import json,hashlib,subprocess,copy
from pathlib import Path
p=Path(__file__).parent;root=p.parents[3];base=p.parent
read=lambda f:json.loads(f.read_text())
sha=lambda b:hashlib.sha256(b).hexdigest()
nav='src/shared/foundation/navigation.ts';current=(root/nav).read_text();old=subprocess.check_output(['git','show','HEAD:'+nav],cwd=root).decode();untyped=current.replace('const next:Element|null=previous?','const next=previous?')
assert old.split('export function mountBadges')[0]==current.split('export function mountBadges')[0]
checks={}
for b,prior,tested,latest in [('B013',3,4,5),('B011',5,6,7),('B012',3,4,5)]:
 d=base/b;a=read(d/f'review-input-{prior}.json')['sourceHashes'];t=read(d/f'review-input-{tested}.json')['sourceHashes'];c=read(d/f'review-input-{latest}.json')['sourceHashes']
 assert sha(untyped.encode())==t[nav]
 assert all(sha((root/f).read_bytes())==h for f,h in c.items())
 assert [f for f,h in c.items() if t.get(f)!=h]==[nav]
 files=list((d/f'snapshot/round-{tested}').rglob('*.js'));assert files
 assert all(f.read_bytes()==(d/f'snapshot/round-{latest}'/f.relative_to(d/f'snapshot/round-{tested}')).read_bytes() for f in files)
 authors=[f for f in c if f.startswith('src/parts/')];unchanged=[f for f in authors if a.get(f)==c[f]]
 if b!='B013':assert len(unchanged)==len(authors) and sha(old.encode())==a[nav]
 checks[b]={'testedRound':tested,'finalRound':latest,'sourceCount':len(c),'allCurrentHashesMatch':True,'authorFiles':len(authors),'authorFilesUnchangedFromPriorPass':len(unchanged),'priorRound':prior,'typeAnnotationOnlySinceBrowserCapture':True,'annotation':'const next:Element|null','snapshotJavaScriptFilesByteIdentical':len(files),'navigationChangesOutsideMountBadges':False,'navigationOldHash':sha(old.encode()),'navigationTestedHash':t[nav],'navigationFinalHash':c[nav]}
 (d/f'dependency-verification-{latest}.json').write_text(json.dumps(checks[b],ensure_ascii=False,indent=2)+'\n')
# Browser assertions, separate from visual judgment.
for r in read(p/'measurements-badges-native-4.json'):
 assert r['identity']['retained'] and r['identity']['oldConnected'] and r['identity']['form']==[['tags','design'],['tags','ready']]
 assert r['readOnly']['form']==[['tags','design'],['tags','ready']] and all(not x['disabled'] for x in r['readOnly']['selected'])
for r in read(p/'measurements-badges-4.json'):
 s=r['states'];assert s['selected']['value']==['ready','design'] and s['reset']['value']==['ready'] and s['readonly']['value']==['ready'] and not s['disabled']['form'] and not s['display-mode']['native']
for r in read(p/'measurements-badges-schema-4.json'):
 assert r['controlled']['value']==['ready'] and r['requested']==['ready','design'] and r['controlledRemove']['value']==['ready'] and r['sameInput'] and r['reordered']['focus']=='design' and r['schemaRemoved']['value']==[] and r['schemaReset']['value']==['ready']
for r in read(p/'measurements-numbers-4.json'):
 s=r['states'];assert [s[k]['value'] for k in ['increment','key-up','typed','max','min','reset','narrow-unit']]==[4,5,13,24,0,3,4] and r['readonlyButtons'] and not s['disabled']['form']
for b,n in [('B011',6),('B012',4)]:
 for r in read(base/b/f'measurements-pagination-222-{n}.json'):
  for k,v in r['states'].items():
   if 'tab' in k:
    assert v['focusIn'] and min(v['focusLeft'],v['focusRight'])>=-1
   else:assert min(v['left'],v['right'])>=-1
   assert abs(v.get('scrollDelta',0))<=1
 for r in read(base/b/f'measurements-pagination-native-{n}.json'):assert r['keyboardValue']==3 and r['pointerValue']==2 and r['disabled'] and r['readOnlyValue']==2
for b in ['B012','B013']:
 for r in read(base/b/'measurements-breadcrumbs-long-4.json'):
  assert all(r['keyboard'][k] for k in ['opened','firstFocus','escapeClosed','returned']) and r['keyboard']['href']=='#library' and r['disabled']['more']
notes={430:'章見出しを現在地として強調する読書用途の構造を維持。省略メニューの長い英数字はLTR/RTL/forcedとも238px内へ折り返され、リンクEnterとEscape復帰も成立。',436:'輪の中間が紙面の背後へ隠れ、穴を受ける右側の接点と左外周が読める。小さな札の厚み・文字余白を保った。native送信と要素保持も修正済み。',437:'凹んだ件数窓を持つ計器札の構造は維持。native選択・送信・削除・resetと長文RTLに支障なし。',439:'小型のコの字金具が紙の端を受け、読み面を圧迫しない。共有native修正後も選択面とキー操作が対応する。',442:'細い基準線と切欠きが文字配置を支え、単なる太い十字装飾を脱している。native修正と狭幅長文でも読み面を保持。',443:'背面の折返しと短い末端が平らな読み面につながる。RTLでも接続が反転し、選択・削除・resetが成立。',445:'紙肌・活字・下縁の厚みと押込みが識別できる。native inputを維持したまま選択を更新し、長文も紙内に収まる。',450:'索引語と件数を別の行に整理し、長い英数字と削除を面内へ収めた。件数opacity解除で通常/選択の全測定最小5.280:1。Bの本文補助用途に合う。',458:'布帯中央の数値と左右キーの比率を維持。実入力・Arrow/Home/End・無効入力のnative検証・フォーム・新boundsでのresetを再確認。',459:'上下の顎と左右キーの造形を維持。gallery hover背景は専用rgb(73,107,122)、白の24px記号は6.42:1で解除も復帰。両環境の数量操作・長い単位が成立。'}
# precise hover ratio
rgb=[73/255,107/255,122/255];lin=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in rgb];ratio=1.05/(sum(x*w for x,w in zip(lin,[.2126,.7152,.0722]))+.05);notes[459]=notes[459].replace('6.42',f'{ratio:.3f}')
def save(d,r):
 (d/f"review-{r['round']}.json").write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
 lines=[f"# {r['batch']} round{r['round']} 独立検査",'', '**pass — 10件合格、差戻し0件。**','',r['coverage']['summary'],'']
 for q in r['parts']:lines += [f"## R{q['number']:03} {q['id']} — pass",'',q['note'],'','証拠: '+', '.join(f'[{Path(e).name}]({e})' for e in q['evidence']),'']
 lines += ['## 範囲と継承','',r['coverage']['scope'],'', '検査用fixtureは凍結initを実gallery CSS下へ初期化。タグ領域は初期markup同様に空にし、既存の初期化済みDOMを重複させない。' if r['batch']=='B013' else '旧合格の作者ファイル不変と、共有navigation.tsのmountBadges以外の不変を照合。実操作を再検証して依存更新を確認した。','', '全状態の無欠陥保証ではない。作者・共有ソースの編集は行っていない。']
 (d/f"review-{r['round']}.md").write_text('\n'.join(lines)+'\n')
r=read(p/'review-3.json');r['round']=4;r['overall']='pass';r['evidence']=[f.replace('-3','-4') for f in r['evidence']]+['measurements-badges-schema-4.json','dependency-verification-5.json']
for q in r['parts']:
 q.update(verdict='pass',note=notes[q['number']],findings=[],evidence=[e.replace('evidence-3','evidence-4') for e in q['evidence']]);q['reviewed']=[v.replace('round3','round4') for v in q['reviewed']]
 if q['number'] in [436,437,439,442,443,445,450]:q['reviewed'].append('name/value FormData / readonly successful controls / disabled exclusion / keyed input identity; shared controlled/schema/reorder exercised on R436 in both environments')
r['coverage']={'parts':10,'pass':10,'changes_required':0,'summary':'全10件を凍結portableと実galleryで再操作し、16比較画像と輪の近接画像を視認。前回9件のUI指摘は解消。','viewedSheets':sorted(str(f.relative_to(p)) for f in (p/'evidence-4').glob('*-sheet.jpg')),'sourceVerification':'dependency-verification-5.json','scope':'round4の実描画・UI実操作の判定。共有TS推論に必要な型注釈は主担当がround5で追加しtypecheck成功を報告。round4を型チェック合格とする判定ではない。最終承認版はround5。通常/hover入口40ms・退出60ms・再進入60ms・定常/320/長文/RTL/forced/reduced、native操作を検査。'}
save(p,r);r=copy.deepcopy(r);r['round']=5;r['coverage']['summary']+=' round5との差は共有の型注釈のみ。全10配布JavaScriptはバイト一致、最新ソース全hash一致。';r['coverage']['scope']='round4の実ブラウザ・視認結果を、作者/CSS/実行JavaScript不変の照合によりround5へ継承。型注釈は実行時に除去される。typecheck成功は主担当報告。'+r['coverage']['scope'].split('通常/')[1].join(['通常/','']) if False else 'round4で記録した通常/hover往復/320/長文/RTL/forced/reduced/nativeの実操作・実画像結果を、作者/CSS/全実行JavaScriptバイト一致によりround5へ継承。型注釈のみの修正後typecheck成功は主担当報告。';save(p,r)
for b,prior,tested,latest in [('B011',5,6,7),('B012',3,4,5)]:
 d=base/b;r=read(d/f'review-{prior}.json');r['round']=tested;r['overall']='pass';ev=[f'measurements-pagination-222-{tested}.json',f'measurements-pagination-native-{tested}.json',f'dependency-verification-{latest}.json'];ev+=['measurements-breadcrumbs-long-4.json'] if b=='B012' else []
 for q in r['parts']:
  q['verdict']='pass';q['findings']=[];q['reviewed']=q.get('reviewed',[])+[f'author hash unchanged from round{prior}; navigation diff limited to mountBadges']
  ispage=q['number']<414 and q['number']>=392
  if ispage:
   q['note']+=' 共有依存更新後、portable/galleryで999選択→root222px縮小、API2、scale.75、Tab、LTR/RTLを再確認。選択/フォーカスは列内、外側scrollY不変。Enter3→前へ2、readonly/disabledも成立。';q['evidence']=[f'evidence-{tested}/pagination-{m}-222-sheet.jpg' for m in ['portable','gallery']]+ev[:2];q['reviewed'].append('dependency browser retest: pagination LTR/RTL/resize222/scale/focus/keyboard/pointer/readonly/disabled')
  elif b=='B012':
   q['note']+=' 共有依存更新後の展開/hover/長文LTR/RTL/forced/Enterリンク/Escape復帰/disabledを両環境で再確認。';q['evidence']=[f'evidence-{tested}/breadcrumbs-{m}-dependency-sheet.jpg' for m in ['portable','gallery']]+['measurements-breadcrumbs-long-4.json'];q['reviewed'].append('dependency browser retest: all5 breadcrumb menus')
  else:q['note']+=' 作者・依存対象外関数の不変を照合し、前回の画像・実操作結果を継承。今回の再操作対象は同バッチのページ送り4件。'
 r['evidence']=ev;r['coverage']={'parts':10,'pass':10,'changes_required':0,'summary':f'作者全10件はround{prior}とhash一致。共有変更はmountBadges内のみ。'+('ページ送り4件を両環境で再操作。アップロード/カレンダー6件は既合格の画像・操作結果と不変照合で継承。' if b=='B011' else 'ページ送り5件・パンくず5件を両環境で再操作し、6比較画像を視認。'),'sourceVerification':f'dependency-verification-{latest}.json','viewedSheets':sorted(str(f.relative_to(d)) for f in (d/f'evidence-{tested}').glob('*-sheet.jpg')),'scope':f'今回の依存更新に対する限定再検査。造形/可読性等の既存結果は作者不変を条件にreview-{prior}から継承。'+('R409はroot222pxの成立を確認。root174pxでは44pxキーの全幅が入らないという前回の限界注記を維持。' if b=='B012' else '')}
 save(d,r);r=copy.deepcopy(r);r['round']=latest;r['coverage']['summary']+=f' round{latest}は型注釈のみ追加。配布JavaScriptバイト一致と現行全source hash一致を確認し継承。';save(d,r)
print('saved B013 4/5, B011 6/7, B012 4/5: all10 UI pass; current hashes and JS verified; hover ratio',ratio)
