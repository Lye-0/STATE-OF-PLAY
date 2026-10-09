from pathlib import Path
import json,os,subprocess
w=Path('docs/design-refinement-225');passed=set()
for name in ['expansion-50-b023.log','expansion-reading-b023.log']:
 passed.update(l.removeprefix('PASS ').strip() for l in (w/name).read_text().splitlines() if l.startswith('PASS '))
allids=[d['id'] for p in Path('src/parts').glob('*/*/meta.json') if 'EXPANSION-50' in (d:=json.loads(p.read_text())).get('tags',[])]
remaining=[id for id in allids if id not in passed]
env=os.environ.copy();env['SOP_EXPANSION_IDS']=','.join(remaining);env['SOP_EXPANSION_OUTPUT']=str(w/'evidence/expansion-50')
print(f'Already passed {len(set(allids)&passed)}, remaining {len(remaining)}',flush=True)
raise SystemExit(subprocess.call(['npm','run','test:expansion-50'],env=env))
