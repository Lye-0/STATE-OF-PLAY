from PIL import Image,ImageDraw
from pathlib import Path
p=Path(__file__).parent/'evidence-8'
for id in ['clear-process-timeline','clipped-page-wizard','soft-enrollment-wizard','clear-process-wizard','warm-form-wizard']:
 names=[f'{id}-{m}-{s}.png'for m in ['portable','gallery']for s in ['rest','hover','long','rtl','forced']]+[f'{id}-react-{s}.png'for s in ['review','opened','forced']if(p/f'{id}-react-{s}.png').exists()]
 names=[n for n in names if(p/n).exists()];w=320;h=900;out=Image.new('RGB',(w*6,h*((len(names)+5)//6)),'#ddd');d=ImageDraw.Draw(out)
 for i,n in enumerate(names):
  im=Image.open(p/n).convert('RGB');im.thumbnail((w-8,h-35));x=i%6*w;y=i//6*h;out.paste(im,(x,y+30));d.text((x+3,y+3),n.replace(id,''),fill='black')
 out.save(p/f'sheet-{id}.jpg')
