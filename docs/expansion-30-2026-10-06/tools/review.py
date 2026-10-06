from PIL import Image,ImageOps,ImageDraw
from pathlib import Path
import json,numpy as np,itertools,collections
out=Path('docs/expansion-30-2026-10-06');specs=json.loads((out/'designs.json').read_text(encoding='utf-8'));old=json.loads(Path('docs/similarity-audit-2026-10-06/inventory.json').read_text(encoding='utf-8'))['parts'];photos=out/'photos';(out/'sheets').mkdir(exist_ok=True);(out/'comparisons').mkdir(exist_ok=True)
for cat in sorted({d['category'] for d in specs}):
 items=[d for d in specs if d['category']==cat];w,h=310,260;cols=4;sheet=Image.new('RGB',(w*cols,h*((len(items)+cols-1)//cols)),'#15181e');draw=ImageDraw.Draw(sheet)
 for i,d in enumerate(items):
  image=Image.open(photos/(d['id']+'-stage.png' if (photos/(d['id']+'-stage.png')).exists() else d['id']+'.png')).convert('RGB');image.thumbnail((w-18,h-32));x=(i%cols)*w;y=(i//cols)*h;sheet.paste(image,(x+(w-image.width)//2,y+26));draw.text((x+10,y+7),d['id']+' / '+d['designType'],fill='white')
 sheet.save(out/'sheets'/(cat+'.jpg'),quality=92)
# A shortlist only: grayscale perceptual proximity does not decide deletion or design quality.
n=32;u=np.arange(8)[:,None];x=np.arange(n)[None,:];cos=np.cos(np.pi*(2*x+1)*u/(2*n))
def fingerprint(file):
 image=Image.open(file).convert('RGB');a=np.asarray(image);edge=np.concatenate((a[0],a[-1],a[:,0],a[:,-1]));bg=np.median(edge,axis=0);mask=np.max(np.abs(a.astype(float)-bg),axis=2)>24;ys,xs=np.where(mask)
 if len(xs):image=image.crop((max(0,int(xs.min())-8),max(0,int(ys.min())-8),min(image.width,int(xs.max())+9),min(image.height,int(ys.max())+9)))
 grey=ImageOps.autocontrast(image.convert('L')).resize((32,32));values=cos@np.asarray(grey)@cos.T;return (values.flatten()[1:]>np.median(values.flatten()[1:])).astype(bool)
olditems=[]
for d in old:
 if not Path(d['base']).exists():continue
 file=Path('docs/similarity-audit-2026-10-06')/d['photo']
 if file.exists():olditems.append({**d,'file':str(file),'hash':fingerprint(file)})
new=[]
for d in specs:
 file=photos/(d['id']+'-stage.png')
 if file.exists():new.append({**d,'file':str(file),'hash':fingerprint(file)})
candidates=[]
for d in new:
 others=[p for p in olditems+new if p['category']==d['category'] and p['id']!=d['id']];ranked=sorted([(int(np.count_nonzero(d['hash']!=p['hash'])),p) for p in others],key=lambda v:v[0]);
 if ranked:candidates.append({'id':d['id'],'category':d['category'],'closest':ranked[0][1]['id'],'distance':ranked[0][0],'left':d['file'],'right':ranked[0][1]['file']})
candidates.sort(key=lambda c:c['distance']);(out/'similarity-shortlist.json').write_text(json.dumps(candidates,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
seen=set();picked=[]
for c in candidates:
 key=tuple(sorted([c['id'],c['closest']]))
 if key in seen:continue
 seen.add(key);picked.append(c)
 if len(picked)>=32:break
w,h=600,260;sheet=Image.new('RGB',(w*2,h*((len(picked)+1)//2)),'#14181d');draw=ImageDraw.Draw(sheet)
for i,c in enumerate(picked):
 x=(i%2)*w;y=(i//2)*h;draw.text((x+8,y+6),f"{c['category']} | {c['id']} / {c['closest']} | {c['distance']}",fill='white')
 for j,file in enumerate([c['left'],c['right']]):
  image=Image.open(file).convert('RGB');image.thumbnail((w//2-12,h-30));sheet.paste(image,(x+j*w//2+(w//2-image.width)//2,y+25))
sheet.save(out/'comparisons'/'closest-32.jpg',quality=94);print('Sheets',len({d['category'] for d in specs}),'available stages',len(new),'comparison shortlist',len(candidates));print([(c['id'],c['closest'],c['distance'])for c in candidates[:10]])
