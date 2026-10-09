"""One-shot main preflight refinement before B021 independent review."""
from pathlib import Path
import json
def add(id,css,new):
 p=Path('src/parts/navigation')/id/'styles.css';s='.sop-wb.sop-'+id+'.sop-'+id;p.write_text(p.read_text()+'\n/* Main visual preflight: structural distinction */\n@media(forced-colors:none){\n'+css.replace('$',s).strip()+'\n}\n')
 d=p.parent;q=d/'meta.json';m=json.loads(q.read_text());old=m['description'];m['description']=new;q.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 for q in [d/'usage.md',d/'prompt.md',*list((d/'react').glob('*.tsx'))]:q.write_text(q.read_text().replace(old,new))
add('book-jacket-navigation','''
$ .wb-navigation-frame{display:grid;grid-template-columns:minmax(100px,.7fr) minmax(0,1.3fr);gap:0;padding:10px 10px 14px;background:#b89c73;border:0;box-shadow:inset 0 5px #e2cbaa,inset 0 -5px #8f7351}
$ .wb-nav-brand{grid-column:1;grid-row:1/3;display:flex;align-items:start;padding:26px 18px;background:linear-gradient(90deg,#e3cba5,#f5e8ce 88%,#cbb38d);border:0;border-inline-end:1px solid #a58a63;box-shadow:inset 5px 0 #c9ad82}
$ .wb-nav-brand>:is(a,span){display:flex;flex-direction:column;align-items:start;gap:24px;min-width:0}
$ .wb-nav-brand strong{font:400 30px/1.35 Georgia,'Yu Mincho',serif}
$ .wb-brand-glyph{width:38px;height:44px;border:1px solid #9f7d4e;border-radius:0;background:#ecdbb9;box-shadow:inset 0 0 0 4px #f5e8ce}
$ .wb-nav-desktop,$[data-wb-layout=sidebar] .wb-nav-desktop{grid-column:2;grid-row:1;margin:0;padding:18px 14px 10px;background:linear-gradient(90deg,#d5c4a5,#fff9ed 14px);border:0;border-inline-end:3px solid #d8c49f}
$ .wb-nav-desktop>.wb-nav-list{display:flex;flex-direction:column;gap:0}
$ .wb-nav-desktop .wb-nav-link,$ .wb-nav-desktop .wb-nav-disclosure{padding:16px 4px;gap:10px;border-bottom:1px solid #d4c09e}
$ .wb-nav-foot{grid-column:2;grid-row:2;margin:0;padding:14px;background:#f4e7cf;border:0;border-top:3px double #b79c70;border-inline-end:3px solid #d8c49f}
$ .wb-nav-flyout{padding:14px;background:#d9c09b;border:0;border-inline-start:8px solid #ae8b5b;box-shadow:0 8px 0 #8b6e4933,0 18px 40px #35241033}
$ .wb-nav-flyout-title{padding:10px 8px 14px;color:#5d4830}
$ .wb-nav-flyout .wb-nav-list{padding:8px 12px;background:#fff9ed;border:1px solid #c2a982;border-bottom:4px solid #b69a70}
$ .wb-nav-dialog{border-inline-start:12px solid #a4855d;background:#fff9ed;box-shadow:inset 5px 0 #dcc4a0,0 24px 60px #0005}
$ .wb-nav-dialog>header{background:#e8d4b0;border-bottom:4px solid #b8996e}
$ .wb-nav-dialog>nav{padding-inline:20px 16px}
$:dir(rtl) .wb-navigation-frame{padding:10px 10px 14px;box-shadow:inset 0 5px #e2cbaa,inset 0 -5px #8f7351}
$:dir(rtl) .wb-nav-brand{background:linear-gradient(270deg,#e3cba5,#f5e8ce 88%,#cbb38d);box-shadow:inset -5px 0 #c9ad82}
$:dir(rtl) .wb-nav-desktop{background:linear-gradient(270deg,#d5c4a5,#fff9ed 14px)}
@container(max-width:440px){$ .wb-navigation-frame{display:block;padding:8px}$ .wb-nav-brand{padding:20px 14px;background:#f5e8ce;border:0;border-inline-start:5px solid #c9ad82;align-items:center}$ .wb-nav-brand>:is(a,span){flex-direction:row;align-items:center;gap:14px}$ .wb-nav-brand strong{font-size:27px}$ .wb-nav-foot{padding:14px}$[data-wb-layout=sidebar] .wb-navigation-frame{display:block}$[data-wb-layout=sidebar] .wb-nav-brand>:is(a,span){flex-direction:column;align-items:start}}
''','題字を読むカバー面と目次を読む本文面を見開きにしたナビゲーション。背の綴じから左右の紙を分け、展開先は折返しの内側に挟んだ別紙へ接続する。')
add('open-bracket-navigation','''
$ .wb-navigation-frame{padding:0;background:none;border:0;box-shadow:none;isolation:isolate}
$ .wb-navigation-frame::before,$ .wb-navigation-frame::after{display:none}
$ .wb-nav-brand{position:relative;margin:0 18px 22px;padding:22px 16px;background:#faf6ec;border:0;box-shadow:0 4px 0 #c5ab82}
$ .wb-nav-desktop,$[data-wb-layout=sidebar] .wb-nav-desktop{margin:0;padding:0 18px;background:none;border:0}
$ .wb-nav-desktop::before,$ .wb-nav-desktop::after{display:none}
$ .wb-nav-desktop>.wb-nav-list{display:flex;flex-direction:column;gap:20px;padding:0;background:none}
$ .wb-nav-desktop>.wb-nav-list>li{position:relative;padding:0;margin:0;background:#faf6ec;border:0;box-shadow:0 3px 0 #c5ab82;isolation:isolate}
$ .wb-nav-desktop>.wb-nav-list>li:nth-child(2n){margin-inline:20px 0}
$ .wb-nav-desktop>.wb-nav-list>li::before,$ .wb-nav-desktop>.wb-nav-list>li::after{content:'';display:block;position:absolute;width:24px;height:calc(100% + 8px);top:-4px;background:none;border:0;pointer-events:none;z-index:2}
$ .wb-nav-desktop>.wb-nav-list>li::before{inset-inline-start:-7px;border-inline-start:5px solid #a28660;border-block:5px solid #a28660}
$ .wb-nav-desktop>.wb-nav-list>li::after{inset-inline-end:-7px;border-inline-end:5px solid #c5ad87;border-block:5px solid #c5ad87}
$ .wb-nav-link,$ .wb-nav-disclosure{padding:20px 16px;border:0;min-height:70px;background:none;transform:none}
$ .wb-nav-link[aria-current=page],$ .wb-nav-disclosure[data-current]{background:#e8dcc3}
$ .wb-nav-marker{display:none}
$ .wb-nav-foot{margin:22px 18px 0;padding:16px;background:#faf6ec;border:0;border-inline-start:5px solid #a28660;box-shadow:0 3px 0 #c5ab82}
$ .wb-nav-flyout{background:#faf6ec;border:0;border-inline:6px solid #ad9269;padding:16px;box-shadow:0 10px 0 #cab59355,0 18px 40px #36271533}
$ .wb-nav-dialog{padding:0 12px 12px;background:#e8dcc3;border:0;border-inline:6px solid #a28660}
$ .wb-nav-dialog>header{padding:22px 12px;background:#faf6ec;border:0;margin-bottom:16px}
$ .wb-nav-dialog>nav{padding:0}
$ .wb-nav-dialog .wb-nav-list{gap:14px}
$ .wb-nav-dialog .wb-nav-list>li{margin:0;padding:0;background:#faf6ec;border:0;box-shadow:0 3px 0 #c5ab82}
$ .wb-nav-dialog footer{padding:18px 4px 4px;color:#65543c;border:0}
@container(max-width:300px){$ .wb-nav-brand{margin-inline:8px;padding:20px 12px}$ .wb-nav-desktop,$[data-wb-layout=sidebar] .wb-nav-desktop{padding-inline:10px}$ .wb-nav-foot{margin-inline:8px}$ .wb-nav-desktop>.wb-nav-list>li:nth-child(2n){margin-inline-start:10px}}
''','行先ごとの読み取り面を左右の括弧で独立して支えるナビゲーション。面と面の間は背景へ抜け、少しずらした支持面の連なりから現在地と行先を追える。')
add('letterhead-navigation','''
$ .wb-navigation-frame{display:grid;grid-template-columns:110px minmax(0,1fr);grid-template-rows:auto 1fr auto;padding:22px 20px;background:#fcf8ee;border:0;border-top:3px double #aa8e62}
$ .wb-nav-brand{grid-column:1/-1;grid-row:1;padding:0 0 24px;margin-bottom:20px;border:0;border-bottom:1px solid #b49d75}
$ .wb-nav-desktop,$[data-wb-layout=sidebar] .wb-nav-desktop{grid-column:2;grid-row:2/4;margin:0;padding:0 0 0 20px;padding-inline:20px 0;border:0;border-inline-start:1px solid #b49d75}
$ .wb-nav-desktop>.wb-nav-list,$[data-wb-layout=sidebar] .wb-nav-desktop>.wb-nav-list{display:flex;flex-direction:column;gap:20px}
$ .wb-nav-desktop>.wb-nav-list>li{display:grid;grid-template-columns:30px minmax(0,1fr);gap:8px;padding:0;border:0}
$ .wb-nav-desktop>.wb-nav-list>li::before{grid-column:1;grid-row:1;padding:4px 0 0;font:italic 18px/1.5 Georgia,serif;color:#75603d}
$ .wb-nav-desktop>.wb-nav-list>li>:is(a,button){grid-column:2;grid-row:1;padding:4px 0 18px;border-bottom:1px solid #cfbea0;gap:8px;min-width:0}
$ .wb-nav-link strong{font-size:21px}
$ .wb-nav-foot{grid-column:1;grid-row:2;display:flex;flex-direction:column;align-items:start;align-self:start;gap:16px;margin:0 20px 0 0;margin-inline:0 20px;padding:16px 0;border:0;border-top:3px double #b49d75;color:#665437;font:14px/1.8 Georgia,'Yu Mincho',serif}
$ .wb-nav-foot-arrow{margin:0}
$ .wb-nav-location{min-width:0;max-width:100%;overflow-wrap:anywhere}
$ .wb-nav-flyout .wb-nav-list>li{display:block}
$ .wb-nav-dialog .wb-nav-list>li{display:block}
@container(max-width:440px){$ .wb-navigation-frame{display:block;padding:20px 16px}$ .wb-nav-brand{padding:0 0 20px;margin:0}$ .wb-nav-foot{flex-direction:row;align-items:center;gap:12px;margin:20px 0 0;padding:14px 0 0;border-top:1px solid #b49d75}$[data-wb-layout=sidebar] .wb-nav-desktop{padding:20px 0 0;border:0}}
''','題字・現在地の余白欄・番号付き目次を別々に組む便箋ナビゲーション。通常幅は左の現在地欄と右の行先本文を並べ、狭幅では題字の下に同じ順序で接続する。')
print('three navigation structures strengthened')
