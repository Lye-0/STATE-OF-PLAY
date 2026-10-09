from PIL import Image,ImageOps,ImageDraw
from pathlib import Path
import json
p=Path('docs/design-refinement-225/batches/B015');ev=p/'evidence-3'
data=json.loads((p/'measurements-3.json').read_text())
for mode in ['portable','gallery']:
 for cat in ['avatars','ratings']:
  items=[x for x in data if x['mode']==mode and x['category']==cat]
  for kind,states in [('base',['rest','hover','narrow','rtl','forced']),('native',['initial','selected4','cleared','max10-selected','rtl-max10','forced4'] if cat=='ratings' else ['initial','selected','reset','long-native','rtl-native','forced-native'])]:
   for start in range(0,len(items),3):
    rows=items[start:start+3];sheet=Image.new('RGB',(280*len(states),420*len(rows)),'#ddd');draw=ImageDraw.Draw(sheet)
    for y,row in enumerate(rows):
     for x,state in enumerate(states):
      file=ev/f"{row['id']}-{mode}-{state}.png";draw.text((x*280+5,y*420+4),f"R{row['number']} {state}",fill='black')
      if file.exists():
       im=Image.open(file).convert('RGB');im.thumbnail((274,388));sheet.paste(im,(x*280+(280-im.width)//2,y*420+25))
    sheet.save(ev/f'{cat}-{mode}-{kind}-{start//3+1}-sheet.jpg')
react=json.loads((p/'measurements-react-3.json').read_text());print('react keys',react[0].keys())

items=[x for x in react if x.get('format')=='tsx' and x.get('layout')=='portable' and x.get('id')]
for start in range(0,len(items),3):
 states=['rest','hover','selected','rtl','forced'];rows=items[start:start+3];sheet=Image.new('RGB',(280*len(states),420*len(rows)),'#ddd');draw=ImageDraw.Draw(sheet)
 for y,row in enumerate(rows):
  for x,state in enumerate(states):
   file=ev/f"{row['id']}-react-{state}.png";draw.text((x*280+5,y*420+4),f"{row['id']} {state}",fill='black')
   if file.exists():
    im=Image.open(file).convert('RGB');im.thumbnail((274,388));sheet.paste(im,(x*280+(280-im.width)//2,y*420+25))
 sheet.save(ev/f'react-{start//3+1}-sheet.jpg')
