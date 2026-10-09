from pathlib import Path
from PIL import Image
from collections import Counter
import json,runpy
p=Path(__file__).parent;fn=runpy.run_path(str(p/'contrast-check-5.py'));out=[]
for r in json.loads((p/'measurements-ceramic-5.json').read_text()):
 for k in ['filled5','rtl-filled5']:
  s=r['states'][k];u=s['units'][-1];b=u['star']['rect'];root=s['root'];im=Image.open(p/'evidence-5'/f"{r['id']}-{r['mode']}-focused-{k}.png").convert('RGB');rect=(round(b['x']-root['x']),round(b['y']-root['y']),round(b['right']-root['x']),round(b['y']+b['h']-root['y']));colors=Counter(im.crop(rect).getdata()).most_common(7);fg=fn['rgb'](u['star']['fill']);edge=(160,186,139);a,z=sorted([fn['lum'](fg),fn['lum'](edge)]);out.append({'number':504,'mode':r['mode'],'state':k,'starPixelColors':colors,'fill':fg,'edge':edge,'previousEdgeContrastIfOverlapping':(z+.05)/(a+.05),'edgePixelsPresent':any(c==edge for c,n in colors)})
for r in json.loads((p/'measurements-focused-colors-5.json').read_text()):
 s=r['states']['forced'];root=s['root'];im=Image.open(p/'evidence-5'/f"{r['id']}-{r['mode']}-focused-forced.png").convert('RGB')
 for u in s['ranges']:
  b=u['rect'];rect=(round(b['x']-root['x']),round(b['y']-root['y']),round(b['right']-root['x']),round(b['bottom']-root['y']));crop=im.crop(rect);cols=[x for x in range(crop.width)if any(crop.getpixel((x,y))!=(255,255,255)for y in range(crop.height))];out.append({'number':r['number'],'mode':r['mode'],'channel':u['channel'],'rangeWidth':crop.width,'nonWhiteColumns':cols,'whiteColumns':crop.width-len(cols)})
(p/'measurements-pixels-5.json').write_text(json.dumps(out,indent=2));print(out)
