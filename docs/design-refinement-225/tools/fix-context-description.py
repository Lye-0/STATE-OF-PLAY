from pathlib import Path
for id in ['soft-resource-context','clear-action-context','warm-project-context']:
 p=Path('src/parts/contextmenus')/id/'styles.css';s='.sop-wb.sop-'+id+'.sop-'+id
 with p.open('a') as f:f.write('\n'+s+' .wb-context-target-copy small{font-size:12px;line-height:1.7;overflow-wrap:anywhere;white-space:normal;min-width:0}\n')
