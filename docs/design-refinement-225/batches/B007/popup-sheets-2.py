from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path('docs/design-refinement-225/batches/B007');rows=json.load(open(p/'popups-measurements-2.json'))
for mode in ['portable','gallery']:
 rs=[r for r in rows if r['mode']==mode]
 for off in [0,3]:
  for group,states in [('base',['open','hover','narrow','long']),('access',['short-viewport','short-focused','rtl','forced'])]:
   im=Image.new('RGB',(1600,1350),'#eceef2');d=ImageDraw.Draw(im)
   for i,r in enumerate(rs[off:off+3]):
    for j,s in enumerate(states):
     q=Image.open(p/'evidence-2'/f"{r['id']}-{mode}-{s}.png");q.thumbnail((390,420));im.paste(q,(j*400+(390-q.width)//2,i*450+25));d.text((j*400,i*450),f"R{r['number']} {s}",fill='black')
   im.save(p/'evidence-2'/f'popups-{mode}-{off//3+1}-{group}-sheet.jpg',quality=94)
