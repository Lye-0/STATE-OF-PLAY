import json
from pathlib import Path
W=Path('docs/design-refinement-225');rows=json.loads((W/'targets.json').read_text())
colors={'blueprint-route-timeline':'#48677c','index-flap-wizard':'#6b543e','stitched-journey-wizard':'#674a6b','clipped-page-wizard':'#6b563f','ceramic-stage-wizard':'#435f70','radar-window-search':'#466579','slotted-mail-search':'#6b593f','optical-command':'#46677a','index-drawer-command':'#6b5239','bookplate-command':'#685236','caption-command':'#61594f','index-pocket-context':'#665036','stitched-map-navigation':'#61516f','ceramic-register-table':'#456060'}
batches={}
for id,c in colors.items():
 row=next(x for x in rows if x['id']==id);base=Path(row['base']);s=('.sop-sig' if row['category'] in ['timelines','wizards'] else '.sop-wb')+'.sop-'+id+'.sop-'+id
 css=f'{s}{{--muted:{c};}}'
 if row['category']=='wizards':css+=f'{s} .sg-wizard-nav button:disabled{{opacity:1}}'
 if id=='ceramic-stage-wizard':css+=f'{s}{{--ink:#345466}}'
 p=base/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){'+css+'}\n');batches.setdefault(row['batch'],[]).append(id)
for b,ids in batches.items():
 p=W/'batches'/b/'design.md';p.write_text(p.read_text()+'\n補助文字の事前点検で、実際の明色背景に対して薄い色を調整：'+', '.join(ids)+'。未到達の工程も名称を読めるようにし、native disabledの操作制限は保持する。\n')
