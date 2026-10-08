"""Record immutable review evidence and stage only the current reviewed batch."""
from pathlib import Path
import json,hashlib,subprocess,sys,re
root=Path(__file__).resolve().parents[3];w=root/'docs/design-renewal';batch=sys.argv[2];d=w/'batches'/batch
def read(p):return json.loads(p.read_text())
def write(p,v):p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
rows=read(w/'targets.json');selected=[r for r in rows if r['batch']==batch];state=read(d/'status.json');progress=read(w/'progress.json')
if sys.argv[1]=='prepare':
 reviews=sorted((p for p in d.glob('review-*.json') if re.fullmatch(r'review-\d+\.json',p.name)),key=lambda p:int(p.stem.split('-')[1]));review=read(reviews[-1]);assert review['overall']=='pass';assert len(review['parts'])==len(selected);assert all(p['verdict']=='pass' for p in review['parts']);assert {p['id'] for p in review['parts']}=={r['id'] for r in selected}
 round=review['round'];frozen=read(d/f'review-input-{round}.json');assert all(hashlib.sha256((root/p).read_bytes()).hexdigest()==h for p,h in frozen['sourceHashes'].items())
 validation=read(d/'validation.json');assert all(v=='pass' for v in validation.values()),validation
 reviewed={read(p)['round']:read(p)['overall'] for p in reviews}
 state.update(state='ready_to_push',validation=validation);state['reviewRounds']=[dict(x,state=('completed' if x['round']==round else 'responded') if x['round'] in reviewed else 'superseded',result=reviewed.get(x['round'],'self_check_before_review')) for x in state['reviewRounds']];write(d/'status.json',state)
 for r in selected:r.update(state='ready_to_push',review={'round':round,'verdict':'pass'})
 write(w/'targets.json',rows);progress.update(activeImplementation='B%03d'%(int(batch[1:])+2),activeReview='B%03d'%(int(batch[1:])+1));write(w/'progress.json',progress)
 paths=['src/parts/'+r['category']+'/'+r['id'] for r in selected]+['docs/design-renewal/batches/'+batch,'docs/design-renewal/targets.json','docs/design-renewal/progress.json']
 # Previous batch's push identity can only be recorded after its commit was made.
 for b in (w/'batches').glob('B*'):
  if b!=d and (b/'status.json').exists() and read(b/'status.json')['state']=='pushed':paths.append('docs/design-renewal/batches/'+b.name+'/status.json')
 subprocess.run(['git','add','--',*paths],cwd=root,check=True)
 staged=subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root,text=True).splitlines();actual={p.split('/')[3] for p in staged if p.startswith('src/parts/')};assert actual=={r['id'] for r in selected};assert not any(p.endswith(('.png','.jpg','.webp','.html','.zip','.log')) for p in staged if p.startswith('docs/design-renewal/'));print('PASS frozen source scope and review: '+str(len(selected))+' parts')
elif sys.argv[1]=='record':
 commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip();assert set(state['ids'])=={r['id'] for r in selected};state.update(state='pushed',commit=commit);write(d/'status.json',state)
 for r in selected:r.update(state='pushed',commit=commit)
 write(w/'targets.json',rows);progress.update(completed=len([r for r in rows if r['state']=='pushed']),lastPushed={'batch':batch,'commit':commit});write(w/'progress.json',progress);print(json.dumps({'batch':batch,'completed':progress['completed'],'commit':commit}))
else:raise ValueError('prepare or record required')
