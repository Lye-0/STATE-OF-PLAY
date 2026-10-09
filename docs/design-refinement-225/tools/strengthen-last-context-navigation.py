"""One-shot pre-review refinement of the last two weak A materials."""
from pathlib import Path
import json
def add(cat,id,css,new):
 d=Path('src/parts')/cat/id;p=d/'styles.css';s='.sop-wb.sop-'+id+'.sop-'+id
 p.write_text(p.read_text()+'\n/* Material joints remain outside text and native hit areas */\n@media(forced-colors:none){\n'+css.replace('$',s).strip()+'\n}\n')
 p=d/'meta.json';m=json.loads(p.read_text());old=m['description'];m['description']=new;p.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 for p in [d/'usage.md',d/'prompt.md',*list((d/'react').glob('*.tsx'))]:p.write_text(p.read_text().replace(old,new))
add('contextmenus','ribbon-file-context','''
${--muted:#694655}
$ .wb-context-panel{padding:16px 10px 30px 38px;padding-inline:38px 10px;border:0;background:transparent;box-shadow:none;isolation:isolate}
$ .wb-context-panel::before{content:'';display:block;position:absolute;inset:8px auto 8px 8px;inset-inline-start:8px;width:22px;height:auto;background:linear-gradient(90deg,#a07988 0 2px,#d7b4c1 2px 5px,#bf96a6 5px 17px,#e1c2cd 17px 20px,#926778 20px);clip-path:polygon(0 0,100% 0,100% 100%,50% calc(100% - 14px),0 100%);pointer-events:none;z-index:-1}
$ .wb-context-panel::after{display:none}
$ .wb-context-subject{position:relative;margin:0;padding:16px;background:#fff8f8;border:0;border-top:2px solid #d7b4c1;overflow-wrap:anywhere}
$ .wb-context-heading{position:relative;margin:0;padding:20px 16px;background:linear-gradient(#efd8e2 0 3px,#dec0cd 3px calc(100% - 5px),#b18a9b calc(100% - 5px));border:0;border-radius:0;min-height:0;gap:10px;color:#593c4b;box-shadow:0 5px 7px #64445526}
$ .wb-context-heading::before{content:'';display:block;position:absolute;inset:0 100% 0 auto;inset-inline: -30px auto;width:30px;background:linear-gradient(90deg,#9f7789,#d4aebf);clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 12px));pointer-events:none}
$ .wb-context-heading::after{content:'';display:block;position:absolute;inset:0 -4px 0 auto;inset-inline-end:-4px;width:4px;background:#9f7789;border:0;pointer-events:none}
$ .wb-context-heading>small{color:#694655}
$ .wb-context-items{margin:0;padding:14px 14px 20px;background:#fff8f8;border:0;border-bottom:4px solid #d2b5c3;box-shadow:0 4px 0 #e5d0da}
$ .wb-context-items [data-menu-action],$ .wb-context-items [data-menu-action]:is(:hover,:focus){padding:16px 0;border:0;border-bottom:1px solid #dbc3cb;background:none}
$ .wb-context-items [data-menu-action]:is(:hover,:focus){background:#efdee8}
$ .wb-context-status{padding:0 14px;background:#fff8f8}
$ .wb-context-target{position:relative;isolation:isolate;padding:26px 18px 26px 42px;padding-inline:42px 18px;border:0;background:#fff8f8;box-shadow:inset 26px 0 #d8b5c5,0 4px 0 #d4b6c4}
$ .wb-context-target::before{content:'';display:block;position:absolute;inset:12px auto 12px 7px;inset-inline-start:7px;width:13px;height:auto;background:linear-gradient(90deg,#a07988,#edcedc 40%,#ba91a4);border:0;border-radius:0;pointer-events:none;z-index:1}
$ .wb-context-object{width:38px;height:54px;margin:0;grid-column:1;grid-row:1;background:#f4e7ed;border:1px solid #ba95a8;border-bottom:4px solid #c3a0b1}
$ .wb-context-object::before,$ .wb-context-object::after{display:none}
$ .wb-context-target-copy{grid-column:2;grid-row:1;min-width:0}
$ .wb-context-open{grid-column:3;grid-row:1;align-self:start;background:#e5c9d7}
$:dir(rtl) .wb-context-heading::before{transform:scaleX(-1)}
$:dir(rtl) .wb-context-target{box-shadow:inset -26px 0 #d8b5c5,0 4px 0 #d4b6c4}
@container(max-width:300px){$ .wb-context-target{grid-template-columns:38px minmax(0,1fr);padding-inline:38px 14px;gap:16px 12px}$ .wb-context-open{grid-column:2;grid-row:2;justify-self:end}}
''','紙の裏から通したリボンが操作見出しを包むメニュー。外側の縦帯と見出しの折返しをつなぎ、下の記録紙を受ける厚みと二股のリボン端を文字の外へ分ける。')
add('navigation','ceramic-dock-navigation','''
$ .wb-navigation-frame{padding:0;background:none;border:0;border-radius:0;box-shadow:none;isolation:isolate}
$ .wb-nav-brand{margin:0 0 20px;padding:24px 20px;background:linear-gradient(#fcfaff,#e9e2f3);border:1px solid #d8cce6;border-top:4px solid #fffaff;border-bottom:5px solid #b7a8ca;border-radius:24px 24px 12px 12px;box-shadow:inset 0 -6px 8px #cbbfdc66}
$ .wb-nav-desktop,$[data-wb-layout=sidebar] .wb-nav-desktop{position:relative;margin:0;padding:8px 4px 20px 48px;padding-inline:48px 4px;background:none;border:0;isolation:isolate}
$ .wb-nav-desktop::before{content:'';display:block;position:absolute;inset:0 auto 0 12px;inset-inline-start:12px;width:16px;height:auto;border-radius:8px;background:linear-gradient(90deg,#9685ad,#e9e1f5 45%,#baa9cf 75%,#8b789f);border:1px solid #9685ad;box-shadow:2px 2px 3px #34283e33;pointer-events:none;z-index:-1}
$ .wb-nav-desktop::after{display:none}
$ .wb-nav-desktop>.wb-nav-list{display:flex;flex-direction:column;gap:22px;background:none}
$ .wb-nav-desktop>.wb-nav-list>li{position:relative;margin:0;background:none;border:0;isolation:isolate}
$ .wb-nav-desktop>.wb-nav-list>li::before{content:'';display:block;position:absolute;inset-inline-start:-29px;top:calc(50% - 8px);width:34px;height:16px;background:linear-gradient(#fffaff,#d2c4e3 60%,#a796bc);border:1px solid #c1b1d2;border-radius:8px 0 0 8px;pointer-events:none;z-index:-1}
$ .wb-nav-desktop>.wb-nav-list>li::after{content:'';display:block;position:absolute;inset-inline-start:-35px;top:calc(50% - 13px);width:26px;height:26px;background:radial-gradient(circle at 40% 35%,#f9f3ff 0 25%,#c8b7db 40%,#917da7 68%,#d9cde5 71%);border:1px solid #baa8ce;border-radius:50%;pointer-events:none;z-index:-2}
$ .wb-nav-desktop .wb-nav-link,$ .wb-nav-desktop .wb-nav-disclosure{position:relative;margin:0;padding:20px 16px;min-height:78px;background:linear-gradient(#fcfaff,#f0eaf8);border:1px solid #ccbfde;border-top:4px solid #fffaff;border-bottom:6px solid #b6a6cb;border-radius:28px 12px 28px 12px;box-shadow:inset 0 0 0 4px #ede5f5,0 4px 0 #8f7ca855;transform:none}
$ .wb-nav-desktop .wb-nav-link[aria-current=page],$ .wb-nav-desktop .wb-nav-disclosure[data-current]{background:linear-gradient(#e4d8f0,#d6c7e7);box-shadow:inset 0 0 0 4px #c5b4d9,0 4px 0 #8f7ca855}
$ .wb-nav-marker{display:none}
$ .wb-nav-foot{margin:18px 0 0;padding:18px 20px;background:linear-gradient(#f6f0fc,#e4dbee);border:1px solid #c5b5d6;border-top:3px solid #fffaff;border-bottom:5px solid #af9fc4;border-radius:12px 12px 24px 24px}
$ .wb-nav-flyout[data-nav-inline]{padding:18px 0 0;margin:0}
$ .wb-nav-flyout[data-nav-inline]>.wb-nav-list{padding:12px;background:#eee5f6;border-top:3px solid #fffaff;border-radius:18px 8px;border-bottom:5px solid #b5a4c9}
$ .wb-nav-dialog>nav{position:relative;padding:16px 14px 24px 36px;padding-inline:36px 14px;background:#ece8f4}
$ .wb-nav-dialog>nav::before{content:'';display:block;position:absolute;inset:12px auto 12px 12px;inset-inline-start:12px;width:10px;height:auto;border-radius:6px;background:linear-gradient(90deg,#9b89b0,#e8dff3 50%,#b09bc8);pointer-events:none}
$ .wb-nav-dialog>.wb-nav-list{gap:18px}
$ .wb-nav-dialog .wb-nav-link,$ .wb-nav-mobile-group summary{background:linear-gradient(#fffaff,#eee5f6);border:1px solid #c7b7d8;border-top:3px solid #fffaff;border-bottom:5px solid #b5a4c9;border-radius:20px 8px;box-shadow:inset 0 0 0 3px #e9dff2}
$:dir(rtl) .wb-nav-desktop>.wb-nav-list>li::before{border-radius:0 8px 8px 0}
@container(max-width:300px){$ .wb-nav-brand{padding:20px 16px}$ .wb-nav-desktop,$[data-wb-layout=sidebar] .wb-nav-desktop{padding-inline:38px 2px}$ .wb-nav-desktop::before{inset-inline-start:8px;width:12px}$ .wb-nav-desktop>.wb-nav-list>li::before{inset-inline-start:-24px;width:28px}$ .wb-nav-desktop>.wb-nav-list>li::after{inset-inline-start:-30px;width:24px;height:24px;top:calc(50% - 12px)}$ .wb-nav-desktop .wb-nav-link,$ .wb-nav-desktop .wb-nav-disclosure{padding:18px 12px}}
''','釉薬のプレートを陶の支柱へ接続したナビゲーション。丸い受けと短い腕で各行先を独立して支え、題字の上蓋と現在地の台座で縦のドックをまとめる。')
print('last context/navigation joints strengthened')
