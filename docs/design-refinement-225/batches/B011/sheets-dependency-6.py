from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path(__file__).parent;e=p/'evidence-6';data=json.load(open(p/'measurements-pagination-222-6.json'))
for mode in ['portable','gallery']:
 for category in ['pagination']:
  rows=[r for r in data if r['mode']==mode and r['category']==category];sets=[]
  if category=='breadcrumbs':sets+=[('menus',['expanded','expanded-menu','menu-hover-menu','expanded-long-menu','expanded-rtl-menu','expanded-forced-menu'])]
  if category=='datepickers':sets+=[('months',['month-2026-02-28','month-2028-02-29','month-2026-11-30','short-calendar'])]
  if category=='pagination':sets+=[('222',['222-ltr-narrow','222-ltr-page2','222-ltr-tab','222-rtl-narrow','222-rtl-page2','222-rtl-tab'])]
  for tag,states in sets:
   im=Image.new('RGB',(280*len(states),420*len(rows)),'#eee');d=ImageDraw.Draw(im)
   for i,r in enumerate(rows):
    for j,s in enumerate(states):
     f=e/f"{r['id']}-{mode}-{s}.png"
     if f.exists():
      q=Image.open(f);q.thumbnail((274,380));im.paste(q,(280*j,420*i+30));d.text((280*j,420*i),str(r['number'])+' '+s,fill='black')
   im.save(e/f'{category}-{mode}-{tag}-sheet.jpg',quality=92)
