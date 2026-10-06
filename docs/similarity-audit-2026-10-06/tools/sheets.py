from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps
import json, math

root=Path('docs/similarity-audit-2026-10-06')
data=json.loads((root/'inventory.json').read_text(encoding='utf-8'))
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',16)
small=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',12)
groups={}
for p in data['parts']:
    groups.setdefault((p['category'],p['designType']),[]).append(p)
for (category,design),parts in groups.items():
    cols=3;w=400;h=250
    canvas=Image.new('RGB',(cols*w,40+math.ceil(len(parts)/cols)*h),'#101418')
    draw=ImageDraw.Draw(canvas)
    draw.text((12,10),f'{category} / {design} / {len(parts)} parts',font=font,fill='white')
    for i,p in enumerate(parts):
        x=(i%cols)*w;y=40+(i//cols)*h
        image=Image.open(root/p['photo']).convert('RGB')
        thumb=ImageOps.contain(image,(w-12,h-48))
        canvas.paste(thumb,(x+6+(w-12-thumb.width)//2,y+8+(h-48-thumb.height)//2))
        draw.text((x+10,y+h-36),p['name'][:44],font=font,fill='white')
        draw.text((x+10,y+h-17),p['id'][:52],font=small,fill='#b5bec5')
        draw.rectangle((x,y,x+w-1,y+h-1),outline='#343b43')
    canvas.save(root/'sheets'/f'{category}-{design}.jpg',quality=88)
print(f'Created {len(groups)} sheets for {len(data["parts"])} parts')
