from pathlib import Path
import json,hashlib,subprocess,sys,re
root=Path(__file__).resolve().parents[3];w=root/'docs/design-refinement-225';action,batch=sys.argv[1:3];d=w/'batches'/batch
read=lambda p:json.loads(p.read_text())
def write(p,x):p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
rows=read(w/'targets.json');targets=[p for p in rows if p['batch']==batch];progress=read(w/'progress.json');status=read(d/'status.json')
if action in ['stage','stage-followup']:
 reviews=sorted((p for p in d.glob('review-*.json') if re.fullmatch(r'review-\d+\.json',p.name)),key=lambda p:int(p.stem.split('-')[-1]));review=read(reviews[-1]);assert review['overall']=='pass';assert len(review['parts'])==len(targets);assert all(p['verdict']=='pass' for p in review['parts']);assert {p['id'] for p in review['parts']}=={p['id'] for p in targets}
 manifest=read(d/f"review-input-{review['round']}.json");assert all(hashlib.sha256((root/p).read_bytes()).hexdigest()==h for p,h in manifest['sourceHashes'].items())
 validation=read(d/'validation.json');assert all(v=='pass' for v in validation.values()),validation
 for p in targets:p.update(state='ready_to_push',reviewRound=review['round'])
 status.update(state='ready_to_push',finalReview=review['round']);write(d/'status.json',status);write(w/'targets.json',rows)
 paths=[p['base'] for p in targets]+[str((d).relative_to(root)),'docs/design-refinement-225/.gitignore','docs/design-refinement-225/README.md','docs/design-refinement-225/targets.json','docs/design-refinement-225/progress.json','docs/design-refinement-225/tools/batch.py','docs/design-refinement-225/tools/freeze.ts','docs/design-refinement-225/tools/capture-gallery.mjs']
 paths+=sys.argv[3:]
 for p in (w/'batches').glob('*/status.json'):
  if p.parent!=d and read(p)['state']=='pushed':paths.append(str(p.relative_to(root)))
 subprocess.run(['git','add','--',*paths],cwd=root,check=True)
 staged=subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root,text=True).splitlines();authors={p.split('/')[3] for p in staged if p.startswith('src/parts/')};assert (authors=={p['id'] for p in targets} if action=='stage' else bool(authors) and authors<={p['id'] for p in targets}),authors
 assert not any(p.endswith(('.png','.jpg','.webp','.zip','.log')) for p in staged)
 print('PASS reviewed author scope and validation',batch,len(targets),'files',len(staged))
elif action=='record':
 commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip();status.update(state='pushed',commit=commit);write(d/'status.json',status)
 for p in targets:p.update(state='pushed',commit=commit)
 write(w/'targets.json',rows);progress.update(completed=sum(p['state']=='pushed' for p in rows),lastPushed={'batch':batch,'commit':commit});write(w/'progress.json',progress);print(progress['completed'],commit)
else:raise ValueError(action)
