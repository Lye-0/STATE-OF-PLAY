import json
from pathlib import Path
W=Path('docs/design-refinement-225')
def root(id):return '.sop-wb.sop-'+id+'.sop-'+id
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
def describe(batch,descriptions,title):
 for id,(cat,new) in descriptions.items():
  base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
  for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
   s=f.read_text().replace(old,new)
   if old!=short:s=s.replace(short,d['tagline'])
   f.write_text(s)
 (W/'batches'/batch/'design.md').write_text('# '+title+'\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
