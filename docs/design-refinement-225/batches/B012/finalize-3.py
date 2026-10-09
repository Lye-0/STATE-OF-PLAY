import json,hashlib
from pathlib import Path
p=Path(__file__).parent;root=p.parents[3];r=json.load(open(p/'review-2.json'));a=json.load(open(p/'review-input-2.json'))['sourceHashes'];b=json.load(open(p/'review-input-3.json'))['sourceHashes'];assert all(hashlib.sha256((root/f).read_bytes()).hexdigest()==h for f,h in b.items());r.update(round=3,overall='pass')
notes={414:'親リンクhoverは石の実背景上で5.742:1へ改善。通常/hover往復、320/長文/RTL、展開リンクとEscape復帰、forced/reducedを再確認し、元の石段と接続を維持。',423:'展開メニューhoverは実背景上で5.830:1へ改善。小さな輪と経路線の造形を保ち、リンク操作とEscape復帰、320/RTL/forced/reducedも通過。',428:'長い空白なし階層名がLTR/RTL/forcedで折り返され、メニューclientWidth238とscrollWidth238が一致。portable/galleryで再現した旧約206pxのはみ出しは解消。Enterリンク移動、Escape復帰を維持。'}
for q in r['parts']:
 n=q['number'];q['verdict']='pass';q['findings']=[]
 if n in notes:
  q['note']=notes[n];q['evidence']=[e.replace('evidence-2','evidence-3') for e in q['evidence']];q['reviewed']=[v.replace('round2','round3') for v in q['reviewed']]
  if n==428:q['evidence']+=['evidence-3/soft-location-trail-portable-longcheck-expanded-forced-menu.png','evidence-3/soft-location-trail-gallery-longcheck-expanded-forced-menu.png','measurements-breadcrumbs-long-3.json']
 else:
  assert all(a[f]==b[f] for f in b if '/'+q['id']+'/' in f);q['note']+=' round3は作者ハッシュ不変でround2合格を継承。';q['reviewed']=['round2 pass inherited by unchanged author hash']
assert a['src/shared/foundation/navigation.ts']==b['src/shared/foundation/navigation.ts']
r['coverage']={'parts':10,'pass':10,'changes_required':0,'retested':[414,423,428],'inheritedByUnchangedHash':[404,405,408,409,410,416,418],'sharedNavigationHashUnchanged':True,'allCurrentSourceHashesMatch':True,'viewedSheets':sorted(str(f.relative_to(p)) for f in (p/'evidence-3').glob('*-sheet.jpg')),'scope':'特定条件の実操作・実画像再検査。無欠陥保証ではない。'};r['evidence']=['measurements-3.json','measurements-breadcrumbs-3.json','measurements-breadcrumbs-long-3.json','contrast-summary-3.json','review-2.json']
(p/'review-3.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
lines=['# B012 round3 独立再検査','', '**pass — 全10件合格。**','', '変更3件を凍結portableと実galleryで再操作・実画像確認。既合格7件と共有navigationのハッシュはround2から不変。現行ソースもround3 manifestと一致。作者変更は行っていない。','']
for q in r['parts']:lines += [f"## R{q['number']:03} {q['id']} — pass",'',q['note'],'','証拠: '+', '.join(f'[{Path(e).name}]({e})' for e in q['evidence']),'']
lines+=['通常/hover入口・解除・再進入、320px・長文・RTL、forced/reduced、展開リンク・Enter・Escape focus復帰を確認。4枚の比較画像と長文forcedの個別画像を視認。全状態の無欠陥保証ではない。']
(p/'review-3.md').write_text('\n'.join(lines)+'\n');print('all10 pass saved')
