from pathlib import Path
from PIL import Image,ImageDraw
import json
p=Path(__file__).parent;e=p/'evidence-3';parts=json.load(open(p/'measurements-final-3.json'))
for mode in ['portable','gallery']:
 for cat in ['toasts','hints','progress']:
  rows=[r for r in parts if r['mode']==mode and r['category']==cat];states=['rest','hover','narrow','long','rtl','forced'] if cat!='progress' else ['rest','value-0','value-25','value-100','value-null','forced']
  im=Image.new('RGB',(300*len(states),430*len(rows)),'#eee');d=ImageDraw.Draw(im)
  for i,r in enumerate(rows):
   for j,s in enumerate(states):
    q=Image.open(e/f"{r['id']}-{mode}-{s}.png");q.thumbnail((294,385));im.paste(q,(300*j,430*i+35));d.text((300*j,430*i),str(r['number'])+' '+s,fill='black')
  im.save(e/f'{cat}-{mode}-sheet.jpg',quality=93)
