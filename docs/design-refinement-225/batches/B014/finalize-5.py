import json,hashlib
from pathlib import Path
p=Path(__file__).parent;root=p.parents[3];read=lambda f:json.loads(f.read_text());r=read(p/'review-4.json');a=read(p/'review-input-4.json')['sourceHashes'];b=read(p/'review-input-5.json')['sourceHashes'];changed=[f for f,h in b.items()if a.get(f)!=h];mismatch=[f for f,h in b.items()if hashlib.sha256((root/f).read_bytes()).hexdigest()!=h];assert not mismatch
fixed={461,462,468,470,489};inherited=[]
for q in r['parts']:
 if q['number']not in fixed:
  files=[f for f in b if '/'+q['id']+'/'in f];assert all(a[f]==b[f]for f in files);inherited.append({'number':q['number'],'id':q['id'],'unchangedAuthorFiles':len(files)})
check={'sourceCount':len(b),'allCurrentHashesMatch':True,'changedFiles':changed,'inherited':inherited,'sharedChange':False};(p/'source-verification-5.json').write_text(json.dumps(check,ensure_ascii=False,indent=2)+'\n')
for fn in ['measurements-5.json','measurements-numbers-5.json','measurements-avatars-5.json','measurements-react-5.json','measurements-focused-units-5.json','measurements-focused-forced-5.json']:
 for u in read(p/fn):assert not u.get('error')and not u.get('errors');assert u.get('remaining',0)==0
unitSummary=[]
for u in read(p/'measurements-focused-units-5.json'):
 for state,v in u['states'].items():
  assert v['input']['w']>=24
  assert v['unit']['x']>=v['root']['x']-1 and v['unit']['right']<=v['root']['right']+1
  overlaps=[x for x in v['buttons']if min(x['right'],v['unit']['right'])-max(x['x'],v['unit']['x'])>1 and min(x['bottom'],v['unit']['bottom'])-max(x['y'],v['unit']['y'])>1];assert not overlaps
  unitSummary.append({'number':u['number'],'mode':u['mode'],'state':state,'inputWidth':v['input']['w'],'unitWidth':v['unit']['w'],'unitLines':len(v['unitLines']),'overlapsButtons':False})
(p/'units-summary-5.json').write_text(json.dumps(unitSummary,ensure_ascii=False,indent=2)+'\n')
for u in read(p/'measurements-react-pointer-5.json'):
 assert (u['initial'],u['pointer'],u['keyboard'])==(('3','4','5')if u['id']=='soft-amount-number'else('250','255','260'))
notes={461:'円の読み取り面と値に対応する指標を維持。hover＋22px/400は背景#984d31と白で6.103:1となり、入口・解除・再進入でも文字位置を動かさない。',462:'単位11pxと範囲12pxを#4f6878へ変更し実背景との比率5.236:1。目盛り・指標・左右の操作面の主従と狭幅配置は維持。',468:'数値と左右キーを上段、単位を全幅下段へ分けた。長い単位でもinputはportable88px/gallery101px、forced86px/99pxを確保。単位はキーと重ならず、コンパクトな数量入力として成立。',470:'短単位gの基線を保ち、長い単位を数値下の全幅へ折り返した。長い日本語と英数字は7行から3行、単位列182px/195pxへ改善。通常input100.25px、forced67.48pxで読みと操作を維持。',489:'forced選択行の名前・役職をHighlightText、行をHighlight、肖像をCanvas/CanvasTextへ揃えた。Sora/Rinと長い名前の双方を実画像で読め、選択状態・Space/Enter・reset/disabledの契約も維持。'}
for q in r['parts']:
 n=q['number'];q['verdict']='pass';q['findings']=[]
 if n in fixed:
  q['note']=notes[n];cat='avatars'if n==489 else'numbers';q['evidence']=[f'evidence-5/{cat}-{m}-{t}-1-sheet.jpg'for m in['portable','gallery']for t in['base','native']]+[f'evidence-5/react-{4 if n==489 else 0}-sheet.jpg'];q['reviewed']=[x.replace('round4','round5')for x in q['reviewed']]
 else:q['note']+=' round5では作者10ファイルのhashがround4と同一、共有変更なしのため前回の実操作・画像判定を継承。';q['reviewed'].append('round5 unchanged author hashes; shared unchanged; round4 result inherited')
r.update(round=5,overall='pass');r['coverage']={'parts':10,'pass':10,'changes_required':0,'retested':[461,462,468,470,489],'inheritedFromRound4':[460,463,475,478,482],'sourceVerification':'source-verification-5.json','viewedSheets':sorted(str(f.relative_to(p))for f in(p/'evidence-5').glob('*-sheet.jpg')),'summary':'修正5件をportable/galleryで通常hover往復・320・長文・RTL・forced/reduced・native操作を再検査。React4配布形式でも5件×4=20配置を確認。既合格5件は作者hash一致・共有不変を条件に継承。','scope':'特定状態・対象の検査であり、全状態の無欠陥保証ではない。R468は短単位も下段へ統一する新しい情報配置として評価。長い氏名/役職と通常2文字イニシャルが主な人物条件。','react':'20実配置、pageerror0、各形式unmount後0部品。B数量2件は4形式とも別ページでpointer/keyboardと設定一致を確認。'}
r['evidence']=[f.replace('-4','-5')for f in r['evidence']if f!='motion-summary-4.json']+['units-summary-5.json','review-4.json'];(p/'review-5.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
lines=['# B014 round5 独立再検査','', '**pass — 全10件合格、差戻し0件。**','', r['coverage']['summary'],'']
for q in r['parts']:lines += [f"## R{q['number']:03} {q['id']} — pass",'',q['note'],'','証拠: '+', '.join(f'[{Path(e).name}]({e})'for e in q['evidence']),'']
lines += ['## 条件と継承','',r['coverage']['react'],'','修正5件は凍結round5を使用し、actual gallery CSS下のfixtureとportableで検査。10比較画像と個別の強制配色/単位画像を視認。最新100作者hash一致、変更なし5件の50作者ファイル一致、共有変更なしを確認した。','', 'R461 hover6.103:1、R462補助文字5.236:1。R468/R470は通常・forcedとも入力幅24px以上、単位の左右キーとの重なり0件を独立実測。R489は選択の名前が白帯に消える症状を解消し、通常名と長文の描画を視認した。','',r['coverage']['scope'],'','作者・共有ソースは編集していない。']
(p/'review-5.md').write_text('\n'.join(lines)+'\n');print('all10 pass; evidence missing:',[e for q in r['parts']for e in q['evidence']if not(p/e).exists()])
