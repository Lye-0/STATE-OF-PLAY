from pathlib import Path
import json
w=Path('docs/design-refinement-225');rows=json.loads((w/'targets.json').read_text());count=0
for x in rows:
 if x['batch'] not in ['B015','B016'] or x['category']!='ratings':continue
 p=Path(x['base'])/'styles.css';id=x['id'];r='.sop-sig.sop-'+id+'.sop-'+id;p.write_text(p.read_text()+'\n'+r+' .sg-rating-scale{justify-content:start}\n');count+=1
assert count==16
for b in ['B015','B016']:
 p=w/'batches'/b/'design.md';p.write_text(p.read_text()+'\n任意段階数の追試で、共有justify-content:centerが固定列gridを中央へ寄せ、先頭が負位置に隠れる不具合を確認。作者内でjustify-content:startを指定し、LTR/RTLとも先頭から末尾まで実際にクリックできる配置へ修正。共有ソースは変更しない。\n')
for x in rows:
 if x['batch']=='B015':x['state']='reopened'
(w/'targets.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
p=w/'progress.json';d=json.loads(p.read_text());d['completed']=sum(x['state']=='pushed' for x in rows);d['activeReview']='B015 supplemental + B016';d['reopened']={'batch':'B015','reason':'Pointer access to first rank at max10; nine rating authors'};p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
