from pathlib import Path
p=Path('src/parts/tables/ceramic-register-table/styles.css');s='.sop-wb.sop-ceramic-register-table.sop-ceramic-register-table'
with p.open('a') as f:f.write(f'''\n/* The action column uses the same geometry in system color palettes. */
{s} .wb-row-actions-heading,{s} .wb-row-actions{{width:112px;min-width:112px;border-inline:0;padding:12px;border-radius:0}}
{s} .wb-row-actions-heading{{border-top:0;border-bottom-width:2px;border-bottom-style:solid}}
{s} tbody tr[data-row]:last-child .wb-row-actions{{border-bottom:0;border-radius:0}}
{s} .wb-row-actions>div{{gap:4px;flex-wrap:nowrap}}
''')
p=Path('src/parts/loaders/telescopic-stroke-loader/styles.css');p.write_text(p.read_text().rstrip()+'\n')
p=Path('src/parts/navigation/clear-line-navigation/styles.css');s='.sop-wb.sop-clear-line-navigation.sop-clear-line-navigation'
with p.open('a') as f:f.write('\n'+s+'[data-wb-layout=dock] .wb-nav-desktop>.wb-nav-list{flex-direction:row}\n')
