from pathlib import Path
import subprocess,json,hashlib
w=Path('docs/design-renewal');baseline=json.loads((w/'baseline.json').read_text());targets={r['id'] for r in json.loads((w/'targets.json').read_text())};kept={r['id'] for r in baseline['allParts'] if r['verdict']=='K'};assert len(kept)==213
lines=subprocess.check_output(['git','ls-tree','-r',baseline['commit'],'--','src/parts'],text=True).splitlines();checked=[];changed=[];ids=set();liquids=set()
for line in lines:
 info,name=line.split('\t');mode,kind,sha=info.split();parts=name.split('/');id=parts[3]
 if id in targets:continue
 p=Path(name)
 if not p.exists(): changed.append(name);continue
 data=p.read_bytes();actual=hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest();checked.append({'path':name,'baselineBlob':sha,'currentBlob':actual});ids.add(id)
 if name.endswith('/meta.json'):
  m=json.loads(data)
  if any(str(t).upper().replace('-',' ')=='LIQUID GLASS' for t in m.get('tags',[])) or id.startswith('lg-'):liquids.add(id)
 if actual!=sha:changed.append(name)
assert not changed,changed
assert kept<=ids
newUnscoped=[]
oldNames={line.split('\t')[1] for line in lines}
for cat in Path('src/parts').iterdir():
 if cat.is_dir():
  for part in cat.iterdir():
   if not part.is_dir() or part.name in targets:continue
   for p in part.rglob('*'):
    if p.is_file() and str(p) not in oldNames:newUnscoped.append(str(p))
assert not newUnscoped,newUnscoped
r={'baseline':baseline['commit'],'targetParts':len(targets),'unchangedAuthorParts':len(ids),'kept730Parts':len(kept),'liquidGlassParts':len(liquids),'checkedAuthorFiles':len(checked),'mismatches':changed,'unscopedNewFiles':newUnscoped,'method':'Git blob SHA1 over exact bytes for every author file outside the 517 targets','files':checked};manifest=w/'evidence/unchanged-authors-manifest.json';manifest.write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');r.pop('files');r['manifest']=str(manifest);r['manifestSHA256']=hashlib.sha256(manifest.read_bytes()).hexdigest();(w/'unchanged-authors.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');print(json.dumps(r))
