import json,os
from PIL import Image,ImageDraw
root='docs/design-refinement-225/batches/B003';r=json.load(open(root+'/measurements-2.json'))['data']
for mode in ['portable','gallery']:
 rows=[p for p in r if p['mode']==mode]
 for off in range(0,len(rows),5):
  im=Image.new('RGB',(1500,1600),'#eceef2');d=ImageDraw.Draw(im)
  for i,p in enumerate(rows[off:off+5]):
   d.text((4,i*320),str(p['number'])+' '+p['id'],fill='black')
   for j,s in enumerate(['rest','hover','narrow','long','forced']):
    f=root+'/evidence-2/'+p['id']+'-'+mode+'-'+s+'.png'
    if os.path.exists(f):
     q=Image.open(f);q.thumbnail((292,285));im.paste(q,(j*300+(300-q.width)//2,i*320+25));d.text((j*300+5,i*320+13),s,fill='black')
  im.save(root+f'/evidence-2/{mode}-{off//5+1}-sheet.jpg',quality=92)
