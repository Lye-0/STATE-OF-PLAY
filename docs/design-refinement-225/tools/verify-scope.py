"""Verify all requested author directories and the exact reviewed source hashes."""
import hashlib,json,subprocess
from pathlib import Path
w=Path(__file__).resolve().parents[1];root=w.parents[1]
rows=json.loads((w/'targets.json').read_text());progress=json.loads((w/'progress.json').read_text())
assert len(rows)==225 and len({r['id'] for r in rows})==225
assert sum(r['verdict']=='redesign' for r in rows)==14
assert sum(r['verdict']=='adjust' for r in rows)==211
assert all(r['designType']=='A' for r in rows if r['verdict']=='redesign')
assert all(r['state']=='pushed' for r in rows),'Unfinished targets remain'
assert progress['completed']==225
checked=set()
for row in rows:
 batch=w/'batches'/row['batch'];n=row['reviewRound'];review=json.loads((batch/f'review-{n}.json').read_text());assert review['overall']=='pass'
 part=next(p for p in review['parts'] if p['id']==row['id']);assert part['verdict']=='pass'
 if row['batch'] in checked:continue
 checked.add(row['batch'])
 for name,h in json.loads((batch/f'review-input-{n}.json').read_text())['sourceHashes'].items():assert hashlib.sha256((root/name).read_bytes()).hexdigest()==h,name
 assert all(v=='pass' for v in json.loads((batch/'validation.json').read_text()).values())
changed=subprocess.check_output(['git','diff','--name-only',progress['baseCommit'],'HEAD','--','src/parts'],cwd=root,text=True).splitlines();ids={p.split('/')[3] for p in changed};assert ids=={r['id'] for r in rows},ids^{r['id'] for r in rows}
assert not subprocess.check_output(['git','diff','--name-only','HEAD','--','src/parts','src/shared'],cwd=root,text=True).strip(),'Uncommitted author/shared work remains'
print('PASS all 225 targets pushed; 23 independent batch reviews match current source; no other author directory changed')
