from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path(__file__).parent;e=p/'evidence-5';data=json.load(open(p/'measurements-5.json'))
for mode in ['portable','gallery']:
 for category in ['avatars','numbers']:
  rows=[r for r in data if r['mode']==mode and r['category']==category]
  for start in range(0,len(rows),4):
   sets=[('base',['rest','hover','narrow','rtl','forced'])]
   if category=='avatars':sets += [('native',['initial','selected','reset','long-native','rtl-native','forced-native'])]
   if category=='numbers':sets += [('native',['increment','typed','invalid','narrow-unit','rtl-unit','forced-unit'])]
   if category=='breadcrumbs':sets += [('menus',['longcheck-expanded-menu','longcheck-menu-hover-menu','longcheck-expanded-long-menu','longcheck-expanded-rtl-menu','longcheck-expanded-forced-menu'])]
   for tag,states in sets:
    group=rows[start:start+4];im=Image.new('RGB',(280*len(states),420*len(group)),'#eee');d=ImageDraw.Draw(im)
    for i,r in enumerate(group):
     for j,s in enumerate(states):
      f=e/f"{r['id']}-{mode}-{s}.png"
      if f.exists():
       q=Image.open(f);q.thumbnail((274,380));im.paste(q,(280*j,420*i+30));d.text((280*j,420*i),str(r['number'])+' '+s,fill='black')
    im.save(e/f'{category}-{mode}-{tag}-{start//4+1}-sheet.jpg',quality=92)
