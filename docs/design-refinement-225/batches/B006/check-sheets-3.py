from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path('docs/design-refinement-225/batches/B006');rows=json.load(open(p/'checks-measurements-3.json'))
for mode in ['portable','gallery']:
 for group,states in [('states',['unchecked','checked','mixed','disabled','reset']),('access',['check-long','check-rtl','check-forced-mixed','check-forced-key'])]:
  im=Image.new('RGB',(300*len(states),1450),'#eceef2');d=ImageDraw.Draw(im)
  for i,r in enumerate(x for x in rows if x['mode']==mode):
   for j,s in enumerate(states):
    q=Image.open(p/'evidence-3'/f"{r['id']}-{mode}-{s}.png");q.thumbnail((292,260));im.paste(q,(j*300+(292-q.width)//2,i*290+25));d.text((j*300,i*290),f"R{r['number']} {s}",fill='black')
  im.save(p/'evidence-3'/f'checks-{mode}-{group}-sheet.jpg',quality=94)
