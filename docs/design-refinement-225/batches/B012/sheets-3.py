from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path(__file__).parent;e=p/'evidence-3';data=json.load(open(p/'measurements-3.json'))
for mode in ['portable','gallery']:
 for category in ['breadcrumbs']:
  rows=[r for r in data if r['mode']==mode and r['category']==category];sets=[('base',['rest','hover','narrow','rtl','forced'])]
  if category=='breadcrumbs':sets+=[('menus',['expanded','expanded-menu','menu-hover-menu','expanded-long-menu','expanded-rtl-menu','expanded-forced-menu'])]
  if category=='datepickers':sets+=[('months',['month-3026-02-38','month-3028-02-39','month-3026-11-30','short-calendar'])]
  if category=='pagination':sets+=[('strip',['ltr-wide','ltr-narrow','ltr-tab','rtl-narrow','rtl-tab'])]
  for tag,states in sets:
   im=Image.new('RGB',(280*len(states),420*len(rows)),'#eee');d=ImageDraw.Draw(im)
   for i,r in enumerate(rows):
    for j,s in enumerate(states):
     f=e/f"{r['id']}-{mode}-{s}.png"
     if f.exists():
      q=Image.open(f);q.thumbnail((274,380));im.paste(q,(280*j,420*i+30));d.text((280*j,420*i),str(r['number'])+' '+s,fill='black')
   im.save(e/f'{category}-{mode}-{tag}-sheet.jpg',quality=92)
