from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path('docs/design-refinement-225/batches/B003');rows=json.load(open(p/'fields-measurements-2.json'))
for mode in ['portable','gallery']:
 rs=[x for x in rows if x['mode']==mode]
 for off in [0,3]:
  im=Image.new('RGB',(1800,1350),'#e9ebef');d=ImageDraw.Draw(im)
  for i,r in enumerate(rs[off:off+3]):
   for j,state in enumerate(['password','readonly','textarea','textarea-end','invalid','variant-forced']):
    q=Image.open(p/'evidence-2'/f"{r['id']}-{mode}-{state}.png");q.thumbnail((292,415));im.paste(q,(j*300,i*450+28));d.text((j*300,i*450+6),f"R{r['number']} {state}",fill='black')
  im.save(p/'evidence-2'/f'fields-{mode}-{off//3+1}-sheet.jpg',quality=94)
im=Image.new('RGB',(1280,1050),'#e9ebef');d=ImageDraw.Draw(im)
for i,mode in enumerate(['portable','gallery']):
 for j,(direction,activation) in enumerate([(d,a)for d in ['ltr','rtl']for a in ['automatic','manual']]):
  q=Image.open(p/'evidence-2'/f'tabs-{mode}-{direction}-{activation}-320.png');q.thumbnail((310,490));im.paste(q,(j*320,i*525+25));d.text((j*320,i*525+4),f'{mode} {direction} {activation}',fill='black')
im.save(p/'evidence-2'/'tabs-sheet.jpg',quality=94)
