"""Create one local contact sheet of a batch's real native screenshots."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json, sys
work=Path(__file__).resolve().parents[1]
batch,round=sys.argv[1:3]
rows=[r for r in json.loads((work/'targets.json').read_text()) if r['batch']==batch]
cell_w,cell_h,columns=270,490,4
sheet=Image.new('RGB',(cell_w*columns,cell_h*((len(rows)+columns-1)//columns)), '#263039')
draw=ImageDraw.Draw(sheet)
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',12)
for index,row in enumerate(rows):
 folder={'datepickers':'dates','uploads':'uploads','progress':'progress','hints':'hints'}.get(row['category'],row['category'])
 image=work/'batches'/batch/'captures'/f'{folder}-self-{round}'/(row['id']+'-initial.png')
 if not image.exists():
  alternatives=sorted((work/'batches'/batch/'captures').glob(f'{folder}-self-*'),key=lambda p:int(p.name.split('-')[-1]))
  image=next((p/(row['id']+'-initial.png') for p in reversed(alternatives) if int(p.name.split('-')[-1])<=int(round) and (p/(row['id']+'-initial.png')).exists()),image)
 if not image.exists():
  image=work/'batches'/batch/'captures'/f'round-{round}'/'photos'/(row['id']+'-stage.png')
 assert image.exists(), image
 part=Image.open(image).convert('RGB');part.thumbnail((cell_w-16,cell_h-48))
 x,y=(index%columns)*cell_w,(index//columns)*cell_h
 draw.text((x+8,y+8),f"R{row['number']:03d} {row['id']}",font=font,fill='white')
 sheet.paste(part,(x+(cell_w-part.width)//2,y+36))
target=work/'batches'/batch/'captures'/f'sheet-{round}.png'
sheet.save(target)
print(target)
