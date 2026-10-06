from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps
import json,math
root=Path('docs/similarity-audit-2026-10-06')
inv=json.loads((root/'inventory.json').read_text(encoding='utf-8'))
findings=json.loads((root/'findings.json').read_text(encoding='utf-8'))
states=json.loads((root/'states.json').read_text(encoding='utf-8'))
parts={p['id']:p for p in inv['parts']};ss={s['id']:s for s in states['rows']}
font=ImageFont.truetype('C:/Windows/Fonts/meiryo.ttc',19)
small=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',14)
(root/'comparisons').mkdir(exist_ok=True)
for g in findings['groups']:
    cols=min(3,len(g['ids'])); w=560;h=380
    opened=g['category'] in ['popups','commands','contextmenus','datepickers','hints','comboboxes','dropdowns']
    canvas=Image.new('RGB',(cols*w,48+math.ceil(len(g['ids'])/cols)*h),'#f0f2f4');draw=ImageDraw.Draw(canvas)
    draw.text((15,10),g['id']+' / '+g['category']+(' / 展開後' if opened else ' / 通常表示'),font=font,fill='#20252b')
    for i,id in enumerate(g['ids']):
        p=parts[id];x=i%cols*w;y=48+i//cols*h
        file=ss.get(id,{}).get('photo') if opened else p['photo'];file=file or p['photo']
        im=Image.open(root/file).convert('RGB');thumb=ImageOps.contain(im,(w-16,h-90))
        draw.rectangle((x+8,y+76,x+w-8,y+h-8),fill='#17191b')
        canvas.paste(thumb,(x+(w-thumb.width)//2,y+76+(h-90-thumb.height)//2))
        draw.text((x+12,y+7),p['name'],font=font,fill='#20252b')
        draw.text((x+12,y+37),('残す推奨' if id in g['keep'] else '削除候補')+' · '+p['designType'],font=font,fill='#206442' if id in g['keep'] else '#8b402b')
        draw.text((x+155,y+46),id,font=small,fill='#505b65')
        draw.rectangle((x,y,x+w-1,y+h-1),outline='#c6cfd7')
    canvas.save(root/'comparisons'/f'{g["id"]}.jpg',quality=92)
groups={}
for s in states['rows']:
    if s.get('photo'):
        p=parts[s['id']];groups.setdefault((p['category'],p['designType']),[]).append((p,s))
for (cat,design),rows in groups.items():
    cols=3;w=400;h=310;canvas=Image.new('RGB',(cols*w,40+math.ceil(len(rows)/cols)*h),'#101418');draw=ImageDraw.Draw(canvas)
    draw.text((12,7),cat+' / '+design+' / 操作後',font=font,fill='white')
    for i,(p,s) in enumerate(rows):
        x=i%cols*w;y=40+i//cols*h;im=Image.open(root/s['photo']).convert('RGB');thumb=ImageOps.contain(im,(w-12,h-55))
        canvas.paste(thumb,(x+(w-thumb.width)//2,y+8+(h-55-thumb.height)//2));draw.text((x+10,y+h-38),p['name'],font=small,fill='white');draw.text((x+10,y+h-20),s['action'],font=small,fill='#b5bec5');draw.rectangle((x,y,x+w-1,y+h-1),outline='#343b43')
    canvas.save(root/'sheets'/f'{cat}-{design}-state.jpg',quality=88)
print('comparison images',len(findings['groups']),'state sheets',len(groups))
