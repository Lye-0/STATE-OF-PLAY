from pathlib import Path
import json
from author import add,root
changes={
('commands','optical-command'):'''
.wb-command-entry{position:relative;border:1px solid #7e9baa;border-bottom-width:4px;box-shadow:inset 0 0 0 4px #e3edf2;padding:16px 14px}
.wb-command-option{border-bottom:0;margin-block:6px;padding-inline:48px 16px}
.wb-command-option::before{content:'';display:block;position:absolute;inset:3px;pointer-events:none;opacity:0;background:linear-gradient(#54798c,#54798c) left top/16px 2px no-repeat,linear-gradient(#54798c,#54798c) left top/2px 16px no-repeat,linear-gradient(#54798c,#54798c) right top/16px 2px no-repeat,linear-gradient(#54798c,#54798c) right top/2px 16px no-repeat,linear-gradient(#54798c,#54798c) left bottom/16px 2px no-repeat,linear-gradient(#54798c,#54798c) left bottom/2px 16px no-repeat,linear-gradient(#54798c,#54798c) right bottom/16px 2px no-repeat,linear-gradient(#54798c,#54798c) right bottom/2px 16px no-repeat;transition:opacity 120ms}
.wb-command-option[aria-selected=true]{background:linear-gradient(90deg,#e3edf4,#f3f8fa 48%,#e3edf4);box-shadow:inset 0 0 0 1px #c2d4df}
.wb-command-option[aria-selected=true]::before{opacity:1}
.wb-command-icon{left:auto;right:auto;inset-inline-start:12px;box-shadow:inset 0 0 0 3px #edf5f9,0 0 0 2px #c0d3de}
:dir(rtl) .wb-command-option{padding-inline:48px 16px}
:dir(rtl) .wb-command-icon{left:auto;right:12px}
''',
('contextmenus','index-pocket-context'):'''
.wb-context-target::before{bottom:8px;box-shadow:0 -3px 0 -1px #ebdfc9}
.wb-context-target::after{height:32px;background:linear-gradient(#e6d8bb,#d6c19a);border-top:2px solid #fff0d4;box-shadow:0 -2px 5px #78603f20}
''',
('navigation','stitched-map-navigation'):'''
.wb-navigation-frame{background:linear-gradient(105deg,#fcf9fd 0 21%,#f1e8f4 21.2%,#faf6fc 22% 73%,#eee2f2 73.2%,#f7f0fa 74%);border-bottom:4px solid #cbb6d4}
.wb-nav-list{border-inline-start:0;padding-inline-start:0;gap:0;grid-template-columns:minmax(0,1fr)}
.wb-nav-list>li:has(>.wb-nav-link){position:relative;isolation:isolate}
.wb-nav-list>li:has(>.wb-nav-link)::before{content:'';position:absolute;inset-block:0;inset-inline-start:23px;width:3px;background:repeating-linear-gradient(to bottom,#9770a8 0 3px,transparent 3px 6px);pointer-events:none;z-index:-1}
.wb-nav-list>li:first-child:has(>.wb-nav-link)::before{top:50%}
.wb-nav-list>li:has(>.wb-nav-link):not(:has(+li>.wb-nav-link))::before{bottom:50%}
.wb-nav-link{border:0;background:none;min-height:88px;gap:14px}
.wb-nav-link-icon{background:#faf4fc;border:2px solid #b699c3;box-shadow:0 0 0 4px #f7f0fa}
.wb-nav-link[aria-current=page] .wb-nav-link-icon{background:#715780;color:#fff;border-color:#715780;box-shadow:0 0 0 3px #f7f0fa,0 0 0 4px #9e7eaf}
.wb-nav-marker{display:none}
.wb-nav-link[aria-current=page] .wb-nav-link-copy{border-bottom:2px solid #a686b5;padding-bottom:4px}
.wb-nav-link-copy{border-bottom:2px solid transparent;padding-bottom:4px}
''',
('tables','ceramic-register-table'):'''
.wb-data-frame{position:relative;padding-inline:24px;border-radius:36px;background:linear-gradient(110deg,#f6fbf5,#e2ebe3 18%,#edf4ed 80%,#d5e2d7);box-shadow:inset 0 0 0 5px #eef5eb,inset 0 0 0 6px #b7c9ba;mask:radial-gradient(ellipse 5px 25px at 11px 50%,transparent 98%,#000 100%),radial-gradient(ellipse 5px 25px at calc(100% - 11px) 50%,transparent 98%,#000 100%);mask-composite:intersect}
.wb-data-frame::before,.wb-data-frame::after{content:'';display:block;position:absolute;top:calc(50% - 26px);width:12px;height:52px;border:1px solid #aec1b0;border-radius:50%;box-shadow:1px 1px 0 #fbfff9;pointer-events:none}
.wb-data-frame::before{left:4px}.wb-data-frame::after{right:4px}
'''
}
for (cat,id),css in changes.items():
 r=root(id)
 import re
 css=re.sub(r'(^|})(\s*)([^{}]+){',lambda m:m[1]+m[2]+','.join((r+s if s.startswith(':dir') else r+' '+s) for s in m[3].split(','))+'{',css)
 add(cat,id,css)
for b,note in [('B019','R612：選択候補を四隅のフォーカス枠で示し、文字を動かさず光学的な照準を操作状態と結びつけた。'),('B020','R641：紙面を前縁の下まで延ばして、ポケットへの差し込みを実際の重なりで表現した。'),('B021','R658：リンクの地点を縫い目の経路で結び、現在地の輪と折り目を加えた。'),('B022','R684：一体の陶器トレーに側面の持ち手穴と釉薬の縁を設けた。操作領域は内側へ予約した。')]:
 p=Path('docs/design-refinement-225/batches')/b/'design.md';p.write_text(p.read_text()+'\n'+note+'\n')
p=Path('docs/design-refinement-225/progress.json');d=json.loads(p.read_text());d['activeReview']='B015';d['preparedBatches']=[f'B{i:03}' for i in range(15,24)];p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
