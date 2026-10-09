"""One-shot B018 follow-up; execute after reviewer releases the authors."""
from pathlib import Path
import json
w=Path('docs/design-refinement-225')
def s(id):return '.sop-sig.sop-'+id+'.sop-'+id
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n/* B018 independent review follow-up */\n'+css.rstrip()+'\n')
for id,col in [('soft-enrollment-wizard','#883b50'),('clear-process-wizard','#8a382c'),('warm-form-wizard','#873f2c')]:
 a=s(id);add('wizards',id,f'''{a} .sg-wizard-error{{font-size:14px;line-height:1.65;color:{col};overflow-wrap:anywhere}}
{a} .sg-wizard-nav button:disabled{{opacity:1}}
{a} .sg-wizard-fields label{{min-width:0;max-width:100%;overflow-wrap:anywhere;white-space:normal}}
{a} .sg-wizard-fields label>span,{a} .sg-wizard-fields small{{min-width:0;max-width:100%;overflow-wrap:anywhere;white-space:normal}}
@media(forced-colors:active){{{a} .sg-wizard-error{{color:CanvasText}}}}''')
for id in ['soft-enrollment-wizard','clear-process-wizard','warm-form-wizard']:
 a=s(id);nav='.sg-wizard-nav.sg-wizard-nav.sg-wizard-nav';add('wizards',id,f'''{a}{{container-type:inline-size;width:100%}}
{a} {nav}:has(li:nth-child(4)){{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}}
{a} {nav}:has(li:nth-child(4)) button{{display:flex;flex-direction:row;align-items:center;justify-content:start;text-align:start;min-height:48px;padding:8px;gap:12px}}
{a} {nav}:has(li:nth-child(4)) .sg-step-title{{min-width:0;flex:1;text-align:start;overflow-wrap:anywhere}}
@container(max-width:320px){{{a} {nav}{{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}}{a} {nav} button{{display:flex;flex-direction:row;align-items:center;justify-content:start;text-align:start;min-height:48px;padding:8px;gap:12px}}{a} {nav} .sg-step-title{{min-width:0;flex:1;text-align:start;overflow-wrap:anywhere}}}}
''')
id='clear-process-timeline';a=s(id);add('timelines',id,f'''{a} .sg-event-meta{{display:block;max-width:100%;min-width:0;white-space:normal;overflow-wrap:anywhere}}
{a} .sg-event-body{{min-width:0;overflow-wrap:anywhere}}''')
id='clipped-page-wizard';a=s(id);add('wizards',id,f'''@media(forced-colors:none){{
{a} .sg-wizard-panels{{margin-top:42px;padding:28px 14px 12px;border:1px solid #cbbd9f;box-shadow:3px 4px 0 #e5d9c1,5px 6px 0 #bda887}}
{a} .sg-wizard-panels::before,{a}:dir(rtl) .sg-wizard-panels::before{{content:'';position:absolute;top:-9px;left:calc(50% - 32px);right:auto;width:64px;height:18px;border:1px solid #4b5558;border-radius:4px 4px 6px 6px;background:linear-gradient(#9ba5a5 0 2px,#576166 3px 11px,#353d43 12px 15px,#7e898a 16px);transform:none;box-shadow:0 3px 2px #665a3e30;z-index:2;pointer-events:none}}
{a} .sg-wizard-panels::after{{content:'';position:absolute;top:-29px;left:calc(50% - 17px);width:34px;height:26px;border:3px solid #8d999c;border-bottom:0;border-radius:9px 9px 0 0;box-shadow:inset 1px 1px #e9edeb,1px -1px #59646a;background:transparent;transform:perspective(70px) rotateX(-12deg);transform-origin:center bottom;z-index:1;pointer-events:none}}
{a} .sg-wizard-panel h3{{padding-inline-end:0}}
}}
@media(forced-colors:active){{{a} .sg-wizard-panels::after{{display:none}}}}''')
d=Path('src/parts/wizards/clipped-page-wizard');p=d/'meta.json';m=json.loads(p.read_text());old=m['description'];new='工程の一覧と一枚の入力紙を分けたウィザード。紙の上端を挟む金具と起こした持ち手を立体的に組み、入力面をクリップで留める構造を示す。';m['description']=new;p.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
for p in [d/'prompt.md',d/'usage.md',*list((d/'react').glob('*.tsx'))]:p.write_text(p.read_text().replace(old,new))
with (w/'batches/B018/design.md').open('a') as f:f.write('\n独立review差戻し対応：581は紙を挟む金具/持ち手を別の面へ再構成。B3wizardのasync error可読性と未到達工程名のopacityを補正（disabled維持）、長いfield labelの折返し、569長いmetaの折返しを明示。\n')
print('B018 review follow-up applied')
