from pathlib import Path
from PIL import Image,ImageDraw
import json
for batch,rnd in [('B015',3),('B016',5)]:
 p=Path('docs/design-refinement-225/batches/'+batch);data=json.loads((p/f'measurements-start-{rnd}.json').read_text());items=[r for r in data if r['mode']=='portable'];cols=[('portable','ltr-first'),('portable','rtl-first'),('portable','ltr-diagnostic-start'),('gallery','ltr-first'),('gallery','rtl-first'),('gallery','rtl-diagnostic-start')]
 for start in range(0,len(items),3):
  rows=items[start:start+3];im=Image.new('RGB',(240*6,340*len(rows)),'#ddd');draw=ImageDraw.Draw(im)
  for y,r in enumerate(rows):
   for x,(mode,state) in enumerate(cols):
    f=p/f'evidence-{rnd}'/f"{r['id']}-{mode}-start-{state}.png";draw.text((240*x+4,340*y+4),f"R{r['number']} {mode} {state}",fill='black')
    if f.exists():
     src=Image.open(f).convert('RGB');src.thumbnail((234,310));im.paste(src,(240*x+(240-src.width)//2,340*y+24))
  im.save(p/f'evidence-{rnd}'/f'start-{start//3+1}-sheet.jpg')
