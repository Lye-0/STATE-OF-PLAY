from pathlib import Path
from PIL import Image,ImageDraw
import json
for b,r in [('B015',4),('B016',6)]:
 p=Path('docs/design-refinement-225/batches')/b; data=json.loads((p/f'measurements-ends-{r}.json').read_text()); rows=[x for x in data if x['mode']=='portable']
 for row in rows:
  im=Image.new('RGB',(1760,1680),'#ddd');draw=ImageDraw.Draw(im)
  for y,(mode,state) in enumerate([(m,s) for m in ['portable','gallery'] for s in ['fresh','pointer-last','home']]):
   for x,(forced,d,count) in enumerate([(f,d,c) for f in ['normal','forced'] for d in ['ltr','rtl'] for c in [5,10]]):
    key=f'{forced}-{d}-{count}-{state}';f=p/f'evidence-{r}'/f"{row['id']}-{mode}-ends-{key}.png";draw.text((x*220+3,y*280+3),f"R{row['number']} {mode} {key}",fill='black')
    if f.exists():
     src=Image.open(f).convert('RGB');src.thumbnail((216,254));im.paste(src,(x*220+(220-src.width)//2,y*280+24))
  im.save(p/f'evidence-{r}'/f"ends-{row['number']}-sheet.jpg")
