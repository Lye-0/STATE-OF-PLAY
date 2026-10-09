from pathlib import Path
import json
root=Path('src/parts')
rows=json.loads(Path('docs/design-refinement-225/targets.json').read_text())
for r in rows:
 if r['batch']!='B022':continue
 id=r['id'];p=root/r['category']/id/'styles.css';s='.sop-wb.sop-'+id+'.sop-'+id
 if r['category']=='tables':
  text=f'''\n/* Keep arbitrary status names within the authored column. */
{s} .wb-cell-badge{{display:inline-block;max-width:100%;white-space:normal;overflow-wrap:anywhere;font-size:12px;line-height:1.6;vertical-align:middle}}
{s} .wb-cell-badge i{{display:inline-block;vertical-align:middle;margin-inline-end:5px}}
{s} .wb-sort-glyph{{opacity:1;color:var(--wb-ink)}}
'''
  if id in ['soft-project-table','clear-grid-table','warm-library-table']:
   text+=f'''{s} .wb-data-heading{{flex-wrap:wrap}}
{s} .wb-data-heading>div{{flex:1 1 160px;min-width:0}}
{s} .wb-data-heading h3,{s} .wb-data-heading p{{overflow-wrap:anywhere;max-width:100%}}
{s} .wb-data-total{{max-width:100%;overflow-wrap:anywhere}}
'''
  if id in ['folded-register-table','ribbon-register-table']:
   text+=f'@media(forced-colors:none){{{s} .wb-cell-progress b{{color:var(--ink)}}}}\n'
 elif r['category']=='navigation':
  text=f'''\n{s}[data-wb-layout=dock] .wb-nav-desktop>.wb-nav-list{{flex-wrap:wrap;gap:16px}}
{s}[data-wb-layout=dock] .wb-nav-desktop>.wb-nav-list>li{{flex:1 1 160px;min-width:min(160px,100%);max-width:100%}}
'''
  if id=='warm-editorial-navigation':
   text+=f'''{s}[data-wb-layout=header] .wb-nav-desktop>.wb-nav-list{{gap:12px 24px}}
{s}[data-wb-layout=header] .wb-nav-desktop>.wb-nav-list>li{{flex:1 1 150px;max-width:100%}}
'''
 else:
  # Geometry and motion are independent of the user's color palette.
  css=p.read_text();css=css.replace('@media(forced-colors:none){\n\n','',1);assert css.rstrip().endswith('}');css=css.rstrip()[:-1]+'\n';p.write_text(css);continue
 with p.open('a') as f:f.write(text)
