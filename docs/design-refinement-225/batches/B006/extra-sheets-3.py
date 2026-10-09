from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path('docs/design-refinement-225/batches/B006')
for kind,states,rowsize,step in [('segments',['equal320','equal-long','equal-seven','rtl','vertical'],440,4)]:
 rows=json.load(open(p/(kind+'-measurements-3.json')))
 for mode in ['portable','gallery']:
  rs=[r for r in rows if r['mode']==mode]
  for off in range(0,len(rs),step):
   im=Image.new('RGB',(1500,rowsize*step),'#e9ebef');d=ImageDraw.Draw(im)
   for i,r in enumerate(rs[off:off+step]):
    for j,state in enumerate(states):
     q=Image.open(p/'evidence-3'/f"{r['id']}-{mode}-{state}.png");q.thumbnail((292,rowsize-32));im.paste(q,(j*300+(292-q.width)//2,i*rowsize+25));d.text((j*300,i*rowsize+5),f"R{r['number']} {state}",fill='black')
   im.save(p/'evidence-3'/f'{kind}-{mode}-{off//step+1}-sheet.jpg',quality=94)
