import json,re,math
from pathlib import Path
root=Path(__file__).parent
def rgb(s):
 n=list(map(float,re.findall(r'[-+]?(?:\d*\.)?\d+',s)))
 if s.startswith('color(srgb'): n[:3]=[v*255 for v in n[:3]]
 elif s.startswith('oklab'):
  L,a,b=n[:3]; l=(L+.3963377774*a+.2158037573*b)**3;m=(L-.1055613458*a-.0638541728*b)**3;z=(L-.0894841775*a-1.291485548*b)**3
  n[:3]=[255*(12.92*v if v<=.0031308 else 1.055*v**(1/2.4)-.055) for v in [4.0767416621*l-2.3077115913*m+.2309699292*z,-1.2684380046*l+2.6097574011*m-.3413193965*z,-.0041960863*l-.7034186147*m+1.707614701*z]]
 return n+[1]*(4-len(n))
def lum(c):
 c=[v/255 for v in c[:3]];return sum(w*(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4) for w,v in zip([.2126,.7152,.0722],c))
summary=[]
data=json.load(open(root/'measurements-2.json'))
for u in json.load(open(root/'measurements-breadcrumbs-2.json')):
 r=next(r for r in data if r['id']==u['id'] and r['mode']==u['mode']);r['states']['selected']=u['states']['expanded']['panel'];r['states']['error']=u['states']['menu-hover']['panel']
for r in data:
 values=[]
 for state in [k for k in ['rest','hover','returned','selected','error'] if k in r['states']]:
  for t in r['states'][state]['texts']:
   bg=[255]*3
   for b in reversed(t['backgrounds']):
    c=rgb(b['bg']);bg=[c[i]*c[3]+bg[i]*(1-c[3]) for i in range(3)]
    if ((r['category']=='pagination' and b['tag']=='BUTTON') or (r['number'] in [414,416,418] and b['tag']=='LI')) and b['before']['display']!='none' and b['before']['content']!='none':
     c=rgb(b['before']['bg']);bg=[c[i]*c[3]+bg[i]*(1-c[3]) for i in range(3)]
   fg=rgb(t['color'])[:3];alpha=math.prod(float(v['opacity']) for v in t['backgrounds']);fg=[fg[i]*alpha+bg[i]*(1-alpha) for i in range(3)];a,b=sorted([lum(fg),lum(bg)]);ratio=(b+.05)/(a+.05)
   values.append(dict(state=state,text=t['text'],font=t['font'],color=t['color'],bg=bg,ratio=ratio))
 summary.append(dict(number=r['number'],mode=r['mode'],min=min(v['ratio'] for v in values),values=values))
(root/'contrast-summary-2.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2))
for r in summary: print(r['number'],r['mode'],round(r['min'],3))
