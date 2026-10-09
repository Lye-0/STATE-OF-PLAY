from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path(__file__).parent;e=p/'evidence-3';rows=json.load(open(p/'measurements-3.json'))
for mode in ['portable','gallery']:
 for cat in ['progress','uploads']:
  rs=[r for r in rows if r['mode']==mode and r['category']==cat]
  for off in range(0,len(rs),3 if cat=='progress' else 4):
   subset=rs[off:off+(3 if cat=='progress' else 4)];states=['rest','narrow','value-0','value-25','value-100','value-unknown','forced'] if cat=='progress' else ['rest','hover','narrow','long','rtl','forced']
   im=Image.new('RGB',(300*len(states),470*len(subset)),'#eee');d=ImageDraw.Draw(im)
   for i,r in enumerate(subset):
    for j,s in enumerate(states):
     q=Image.open(e/f"{r['id']}-{mode}-{s}.png");q.thumbnail((292,425));im.paste(q,(300*j,470*i+30));d.text((300*j,470*i),str(r['number'])+' '+s,fill='black')
   im.save(e/f'{cat}-{mode}-{off}-sheet.jpg',quality=93)
 rs=[r for r in rows if r['mode']==mode and r['category']=='uploads'];states=['files-selected','file-error-narrow','files-disabled','files-reset','files-long-rtl','files-forced'];im=Image.new('RGB',(1800,2100),'#eee');d=ImageDraw.Draw(im)
 for i,r in enumerate(rs):
  for j,s in enumerate(states):
   q=Image.open(e/f"{r['id']}-{mode}-{s}.png");q.thumbnail((292,480));im.paste(q,(300*j,525*i+30));d.text((300*j,525*i),str(r['number'])+' '+s,fill='black')
 im.save(e/f'files-{mode}-sheet.jpg',quality=93)
