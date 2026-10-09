"""Verify every approved author against its immutable independent review."""
from pathlib import Path
import json,hashlib,re,subprocess,collections
w=Path('docs/design-renewal');targets=json.loads((w/'targets.json').read_text());approved=[];checks=[];mismatches=[]
for batch in sorted({r['batch'] for r in targets}):
 d=w/'batches'/batch
 reviews=sorted((p for p in d.glob('review-*.json') if re.fullmatch(r'review-\d+\.json',p.name)),key=lambda p:int(p.stem.rsplit('-',1)[1]));assert reviews,batch
 review=json.loads(reviews[-1].read_text());rows=[r for r in targets if r['batch']==batch];assert review['overall']=='pass',batch;assert all(p['verdict']=='pass' for p in review['parts']),batch;assert {p['id'] for p in review['parts']}=={r['id'] for r in rows},batch
 frozen=json.loads((d/f"review-input-{review['round']}.json").read_text())
 for name,expected in frozen['sourceHashes'].items():
  actual=hashlib.sha256(Path(name).read_bytes()).hexdigest()
  if actual!=expected:mismatches.append(name)
  approved.append((name,expected))
 checks.append({'batch':batch,'parts':len(rows),'reviewRound':review['round'],'authorFiles':len(frozen['sourceHashes']),'overall':'pass'})
assert not mismatches,mismatches
assert len(targets)==517 and len(checks)==52
sources='\n'.join(name+' '+sha for name,sha in sorted(approved))
result={'targets':517,'batches':52,'authorFiles':len(approved),'immutableAuthorSetSHA256':hashlib.sha256(sources.encode()).hexdigest(),'intentions':dict(collections.Counter(r['designType'] for r in targets)),'mismatches':mismatches,'allIndependentReviews':'pass','checks':checks}
(w/'final-source-verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in result.items() if k!='checks'}))
