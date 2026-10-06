"""Authoring aid only. Runtime/export truth remains src/parts. Never overwrites a part."""
from pathlib import Path
import json,re,collections,importlib.util
ROOT=Path(__file__).resolve().parents[3]
OUT=ROOT/'docs/expansion-30-2026-10-06'
SPECS=[]
def part(category,id,description,css,*,kind='A',markup=None,base=None,options=None):
 SPECS.append(dict(category=category,id=id,name=' '.join(x.title() for x in id.split('-')),description=description,css=css,designType=kind,markup=markup,base=base,options=options))
BASES=dict(toggles='rocker',blocks='paper-card',ornaments='fan-spark',accordions='faq-accordion',textboxes='essential-field',buttons='quiet-button',links='text-arrow-link',tabs='essential-tabs',segments='essential-segments',checkboxes='essential-check',popups='essential-dialog',sliders='essential-range',radios='soft-choice',comboboxes='essential-finder',toasts='essential-notice',hints='essential-popover',progress='essential-progress',loaders='three-dots-loader',uploads='essential-dropzone',datepickers='essential-calendar',pagination='essential-pages',breadcrumbs='essential-trail',badges='essential-tags',numbers='essential-stepper',avatars='circle-profile',ratings='simple-star-rating',colors='classic-color',skeletons='shimmer-skeleton',timelines='basic-timeline',wizards='essential-wizard',searchbars='essential-searchbar',commands='essential-command',contextmenus='essential-context',navigation='essential-header',tables='essential-table')
def scaffold(meta,oldcss):
 imports='\n'.join(re.findall(r'@import\s+[\"\'][^\"\']+[\"\']\s*;',oldcss))
 c=meta['category'];id=meta['id'];r='.sop-'+id
 if c=='blocks':return f'{r}{{position:relative;isolation:isolate;box-sizing:border-box;min-width:0;width:100%;color:var(--sop-ink,#edf0e8)}}{r} *{{box-sizing:border-box}}{r} .sop-surface-content{{position:relative;z-index:1;padding:var(--sop-padding,28px);min-width:0}}'
 if c=='toggles':return f'{r}{{--p:0;position:relative;display:block;flex:none;border:0;padding:0;background:none;color:#e8ede7;cursor:pointer;touch-action:pan-y;border-radius:12px}}{r}[aria-checked=true]{{--p:1}}{r} .switch-art{{display:block;position:relative;width:100%;height:100%;pointer-events:none}}{r} *{{box-sizing:border-box;pointer-events:none;transition:transform .55s cubic-bezier(.2,.85,.2,1),box-shadow .55s,opacity .55s}}'
 return imports

def main():
 import sys
 # Modules contain individually authored category-specific compositions, not shared visual recipes.
 for file in sorted((OUT/'tools').glob('design_*.py')):
  spec=importlib.util.spec_from_file_location(file.stem,file);mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod);mod.design(part)
 registry=json.loads((ROOT/'src/catalog/registry.json').read_text(encoding='utf-8'));created=[]
 for index,d in enumerate(SPECS):
  id=d['id'];base=ROOT/'src/parts'/d['category']/(d['base'] or BASES[d['category']]);dest=ROOT/'src/parts'/d['category']/id
  old=json.loads((base/'meta.json').read_text(encoding='utf-8'));component=''.join(x.title() for x in id.split('-'));meta=json.loads(json.dumps(old).replace(old['id'],id).replace(old['componentName'],component))
  meta.update(id=id,name=d['name'],componentName=component,description=d['description'],tagline=d['description'].split('。')[0]+'。',designType=d['designType'],order=3000+index,version='1.0.0',material=d['name'].upper(),motion='RESPONSIVE DETAIL',tags=['EXPANSION-30',d['name'],d['description']]+[t for t in old['tags'] if t in ['SIGNATURE','NAVIGATOR','FOUNDATION']],related=[])
  if d.get('options') and meta.get('foundation'):meta['foundation'].update(d['options'])
  if not dest.exists():
   for p in base.rglob('*'):
    if not p.is_file():continue
    relative=str(p.relative_to(base)).replace(old['componentName'],component)
    target=dest/relative;target.parent.mkdir(parents=True,exist_ok=True)
    text=p.read_text(encoding='utf-8').replace(old['id'],id).replace(old['componentName'],component).replace(old['name'],d['name']).replace(old['description'],d['description'])
    if d['designType']!=old['designType']:text=text.replace(old['designType']+'タイプ',d['designType']+'タイプ').replace('Type '+old['designType'],'Type '+d['designType'])
    if meta.get('foundation') and p.name in ['init.ts',old['componentName']+'.tsx']:
     text=re.sub(r'(const config(?:\s*:\s*FoundationConfig)?\s*=\s*)\{[\s\S]*?\};',lambda m:m[1]+json.dumps(meta['foundation'],ensure_ascii=False,indent=2)+';',text)
    if p.name=='meta.json':text=json.dumps(meta,ensure_ascii=False,indent=2)+'\n'
    if p.name=='styles.css':
     r='.'+re.search(r'class="([^"]+)"',d['markup'] or (base/'markup.html').read_text(encoding='utf-8'))[1].split()[0]+'.sop-'+id;text=scaffold(meta,text)+'\n/* '+d['name']+' — '+d['description']+' */\n'+d['css'].replace('$',r)+'\n'
     if meta.get('foundation') and 'color-scheme:light' in d['css']:text+=r+'{background:var(--ff-panel);padding:15px;border-radius:4px}\n'
     text+=f'@media(prefers-reduced-motion:reduce){{{r},{r} *,{r}::before,{r}::after{{animation:none!important;transition:none!important}}}}\n@media(forced-colors:active){{{r}{{color:CanvasText;background:Canvas;border:1px solid CanvasText;box-shadow:none}}{r} :is(button,input,a):focus-visible{{outline:2px solid Highlight}}}}\n{r}:focus-visible,{r} :is(button,input,a):focus-visible{{outline:2px solid var(--sop-focus,#b8dacb);outline-offset:4px}}\n'
    if p.name=='markup.html' and d['markup']:text=d['markup'].replace('$',id)
    if p.suffix=='.tsx' and p.name==old['componentName']+'.tsx' and d['markup']:
     # Primitive custom artwork uses the existing functional component shell.
     match=re.search(r'<span\b[^>]*className="switch-art"[^>]*>',text);start=match.start() if match else -1;end=text.find('</button>',start)
     if start>=0 and end>=0:
      art=re.search(r'<span class="switch-art"[^>]*>(.*)</span></button>',d['markup'],re.S).group(1)
      art=art.replace('class=','className=').replace('<i>','<i>').replace('<br>','<br/>')
      text=text[:start]+'<span aria-hidden="true" className="switch-art">'+art+'</span>\n    '+text[end:]
    if p.name=='usage.md':text='# '+d['name']+'\n\n'+d['description']+'\n\n'+text.split('\n',1)[-1]
    if p.name=='prompt.md':text=f"# {d['name']}\n\n{d['description']}\n\n- {d['designType']}タイプ。"+('素材・構成・操作時の変化を主役にする。' if d['designType']=='A' else '読みやすさ・操作の明確さ・日常の使いやすさを優先する。')+f"\n- {d['category']}の意味とネイティブな操作を保つ。説明のために見た目だけの操作を追加しない。\n- 外形、面の配置、縁、文字、選択／展開／入力／無効状態、動きは同梱styles.cssと実装が正本。単なる色違い、別カテゴリの共通意匠へ置き換えない。\n- 文字と操作領域を安定させ、キーボード・狭幅・縮小モーション・強制配色・複数配置を保つ。\n- 内容や状態は公開APIから接続し、使用例の文言をパーツの制限にしない。\n"
    if p.suffix=='.tsx' and d['category']=='ornaments' and d['markup']:
     inner=d['markup'][d['markup'].index('>')+1:].rsplit('</div>',1)[0]
     text=re.sub(r'const markup = [\s\S]*?;\n',lambda m:'const markup = '+json.dumps(inner,ensure_ascii=False)+';\n',text,count=1)
    target.write_text(text,encoding='utf-8')
   created.append(id)
  name='src/parts/'+d['category']+'/'+id
  if name not in registry:registry.append(name)
 (ROOT/'src/catalog/registry.json').write_text(json.dumps(registry,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 (OUT/'designs.json').write_text(json.dumps([{k:v for k,v in d.items() if k not in ['css','markup']} for d in SPECS],ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print('Authored',len(created),'new parts;',len(SPECS),'specified; catalogue',len(registry))
if __name__=='__main__':main()
