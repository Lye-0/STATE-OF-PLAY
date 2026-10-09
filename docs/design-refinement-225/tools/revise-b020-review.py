"""One-shot implementation after independent B020 r5 release."""
from pathlib import Path
import json

def add(category,id,css,normal=True):
 s='.sop-wb.sop-'+id+'.sop-'+id
 p=Path('src/parts')/category/id/'styles.css'
 css=css.replace('$',s)
 p.write_text(p.read_text()+'\n/* B020 independent review follow-up */\n'+('@media(forced-colors:none){\n' if normal else '')+css.strip()+('\n}' if normal else '')+'\n')
add('commands','warm-project-command', '$ .wb-command-group{min-width:0;max-width:100%;white-space:normal;overflow-wrap:anywhere}',False)
for id,c in [('stepped-document-context','#605245'),('ledger-tools-context','#60513b'),('open-corner-context','#655040')]:
 add('contextmenus',id,'${--muted:'+c+'}$ .wb-context-heading>small{color:var(--muted)}')
add('commands','bookplate-command','''
$ .wb-command-dialog{width:min(720px,calc(100vw - 28px));border:0;background:#dbc9a7;padding:0}
$ .wb-command-frame{padding:18px;background:#e6d7bb;box-shadow:inset 6px 0 #c6af87,inset -6px 0 #c6af87}
$ .wb-command-frame::before{display:none}
$ .wb-command-top{margin:0;padding:8px 8px 20px;border:0}
$ .wb-command-entry{margin:0 8px 20px;padding:12px;background:#fffaf0;border:1px solid #b19b78;border-bottom:3px solid #b19b78}
$ .wb-command-list{padding:0 8px 14px;max-height:min(55dvh,460px);background:none}
$ .wb-command-batch{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;align-items:stretch;margin:0 0 24px}
$ .wb-command-group{grid-column:1/-1;margin:0;padding:8px 0;font:600 12px/1.6 Arial,sans-serif;letter-spacing:.08em;border:0;border-top:1px solid #ac946f;overflow-wrap:anywhere;color:#604d32}
$ .wb-command-option,$ .wb-command-option[aria-selected=true]{position:relative;display:grid;grid-template-columns:32px minmax(0,1fr);grid-template-rows:auto 1fr auto;align-items:start;gap:14px 10px;min-height:200px;margin:0;padding:20px 16px;border:1px solid #bba17a;border-radius:0;background:#fffaf0;box-shadow:0 3px 0 #c3aa81,inset 0 0 0 5px #fffaf0,inset 0 0 0 6px #dfcfb3;transform:none}
$ .wb-command-option::before{display:none}
$ .wb-command-option[aria-selected=true]{background:#f4e7cd;outline:2px solid #8d704a;outline-offset:-3px;box-shadow:0 3px 0 #a78a60,inset 0 0 0 5px #f4e7cd,inset 0 0 0 6px #c5ad84}
$ .wb-command-copy{display:contents}
$ .wb-command-icon{grid-column:1;grid-row:1;width:30px;height:30px;border:1px solid #baa27c;border-radius:50%;padding:5px;background:none}
$ .wb-command-copy strong{grid-column:2;grid-row:1;font:600 22px/1.4 Georgia,'Yu Mincho',serif;min-width:0;overflow-wrap:anywhere}
$ .wb-command-copy small{grid-column:1/-1;grid-row:2;min-width:0;margin:0;padding-top:14px;border-top:1px solid #d1bd9c;font:14px/1.7 Arial,'Yu Gothic',sans-serif;color:#685236;overflow-wrap:anywhere}
$ .wb-command-option>kbd,$ .wb-command-next{grid-column:1/-1;grid-row:3;justify-self:end;align-self:end;max-width:100%;border-top:3px double #b79a6f;padding-top:8px;color:#685236}
$ .wb-command-foot{padding:8px;color:#604d32;border:0}
$ .wb-command-foot :is(kbd,output){color:#604d32}
@media(max-width:520px){$ .wb-command-frame{padding:12px}$ .wb-command-batch{grid-template-columns:minmax(0,1fr)}$ .wb-command-option{min-height:170px}}
''')
add('commands','caption-command','''
${--muted:#61594f}
$ .wb-command-dialog{width:min(720px,calc(100vw - 28px));border:0;background:#f7f4ed}
$ .wb-command-frame{background:#f7f4ed}
$ .wb-command-list{padding:24px;max-height:min(56dvh,480px)}
$ .wb-command-batch{border:0;padding:0;margin:0 0 30px;counter-reset:caption}
$ .wb-command-group{display:table;width:auto;max-width:100%;font:italic 17px/1.5 Georgia,serif;padding:0 0 12px;margin:0 0 10px;border:0;border-bottom:3px double #aa9b82;overflow-wrap:anywhere}
$ .wb-command-option,$ .wb-command-option[aria-selected=true]{counter-increment:caption;display:grid;grid-template-columns:28px minmax(0,1.1fr) minmax(0,.9fr);grid-template-rows:auto auto;column-gap:18px;row-gap:12px;padding:22px 8px;margin:0;min-height:130px;border:0;border-top:1px solid #c7bda9;background:transparent;align-items:start;position:relative}
$ .wb-command-option[aria-selected=true]{background:#eae3d4}
$ .wb-command-option::before{content:counter(caption,decimal-leading-zero);display:block;position:static;grid-column:1;grid-row:1;font:italic 14px/1.5 Georgia,serif;background:none;color:#61594f;width:auto;height:auto}
$ .wb-command-copy{display:contents}
$ .wb-command-copy strong{grid-column:2;grid-row:1/3;align-self:start;min-width:0;font:600 25px/1.4 Georgia,'Yu Mincho',serif;overflow-wrap:anywhere}
$ .wb-command-copy small{grid-column:3;grid-row:1;min-width:0;margin:0;padding:8px 0 0;border:0;border-top:2px solid #a99573;font:13px/1.8 Georgia,'Yu Mincho',serif;color:#61594f;overflow-wrap:anywhere}
$ .wb-command-icon{grid-column:1;grid-row:2;width:20px;height:20px;align-self:start}
$ .wb-command-option>kbd,$ .wb-command-next{grid-column:3;grid-row:2;justify-self:start;align-self:end;max-width:100%;font-size:12px;color:#61594f}
@media(max-width:520px){$ .wb-command-list{padding:18px 16px}$ .wb-command-option,$ .wb-command-option[aria-selected=true]{grid-template-columns:24px minmax(0,1fr);gap:12px 16px;padding:20px 4px}$ .wb-command-copy strong{grid-column:2;grid-row:1;font-size:24px}$ .wb-command-copy small{grid-column:2;grid-row:2}$ .wb-command-icon{grid-column:1;grid-row:2}$ .wb-command-option>kbd,$ .wb-command-next{grid-column:2;grid-row:3}}
''')
# Keep geometry identical in system colors as well.
add('commands','caption-command','$ .wb-command-option,$ .wb-command-option[aria-selected=true]{border-inline-start-width:0}',False)
add('contextmenus','ledger-tools-context','''
$ .wb-context-panel{padding:0 14px 16px 28px;padding-inline:28px 14px;border:0;border-inline-start:14px solid #97764d;background:#fbf5e8;box-shadow:inset 5px 0 #dbc5a0,0 18px 45px #21180c3b}
$ .wb-context-subject{margin:0;padding:20px 8px 16px;background:none;border:0;border-bottom:3px double #b69d74;overflow-wrap:anywhere}
$ .wb-context-heading{padding:16px 8px;border:0;background:#eee0c5;min-height:0}
$ .wb-context-items{padding:12px 0 0;counter-reset:entry;background:linear-gradient(90deg,transparent 26px,#c1a67c 26px 27px,transparent 27px)}
$ .wb-menu-group{margin:18px 0 0;padding:8px 12px 8px 36px;padding-inline:36px 12px;background:#e5d2af;border:0;border-block:1px solid #b69d74;color:#60513b;font:600 12px/1.6 Arial,sans-serif}
$ .wb-context-items [data-menu-action],$ .wb-context-items [data-menu-action]:is(:hover,:focus){display:grid;grid-template-columns:22px minmax(0,1fr);gap:10px 12px;padding:18px 6px 18px 36px;padding-inline:36px 6px;position:relative;border:0;border-bottom:1px solid #cbbb9b;min-height:104px;background:none;align-items:start}
$ .wb-context-items [data-menu-action]:is(:hover,:focus){background:#efdfc3}
$ .wb-context-items [data-menu-action]::before{display:block;top:20px;inset-inline-start:2px;width:20px;text-align:center;color:#60513b;content:counter(entry,decimal-leading-zero);font:12px/1.6 Consolas,monospace}
$ .wb-menu-glyph{grid-column:1;grid-row:1;width:22px;height:24px;align-self:start}
$ .wb-menu-copy{display:contents}
$ .wb-menu-copy strong{grid-column:2;grid-row:1;min-width:0;font:600 18px/1.5 Georgia,'Yu Mincho',serif}
$ .wb-menu-copy small{grid-column:2;grid-row:2;min-width:0;margin:0;padding:10px 0 0;border-top:1px dotted #b69d74;color:#60513b;font:13px/1.8 Arial,'Yu Gothic',sans-serif}
$ .wb-context-items kbd,$ .wb-menu-chevron{grid-column:2;grid-row:3;align-self:start;justify-self:start;max-width:100%;color:#60513b}
$ .wb-context-target{border:0;border-inline-start:14px solid #97764d;padding:26px 18px 26px 28px;padding-inline:28px 18px;background:#fbf5e8;box-shadow:inset 5px 0 #dbc5a0}
$ .wb-context-object{border:0;border-inline-start:4px solid #9c7a4d;background:#f4e7cd;box-shadow:3px 3px 0 #d8c49f;transform:none}
$ .wb-context-target-copy{padding-inline-start:12px;border-inline-start:1px solid #c1a67c}
$:dir(rtl) .wb-context-panel,$:dir(rtl) .wb-context-target{box-shadow:inset -5px 0 #dbc5a0}
$:dir(rtl) .wb-context-items{background:linear-gradient(270deg,transparent 26px,#c1a67c 26px 27px,transparent 27px)}
''')
add('contextmenus','stitched-file-context','''
${--muted:#69455e}
$ .wb-context-target{position:relative;display:grid;grid-template-columns:40px minmax(0,1fr);gap:18px 16px;min-height:0;padding:26px 18px 22px 40px;padding-inline:40px 18px;background:#f7f0f6;border:0;border-bottom:12px solid #bfa0b8;box-shadow:inset 24px 0 #cdb4c7}
$ .wb-context-target::before{content:'';display:block;position:absolute;inset:8px auto 8px 12px;inset-inline-start:12px;width:0;height:auto;border:0;border-inline-start:2px dashed #725368;border-radius:0;background:none;z-index:1}
$ .wb-context-object{grid-column:1;grid-row:1;width:40px;height:54px;margin:0;border:1px solid #b49aa9;background:#fff9fc;border-bottom:4px solid #d6c0ce;box-shadow:2px 3px 0 #d8c4d0;align-self:start}
$ .wb-context-target-copy{grid-column:2;grid-row:1;min-width:0;padding:0;margin:0;border:0;background:none}
$ .wb-context-target-copy strong{font-size:23px;overflow-wrap:anywhere}
$ .wb-context-open{position:static;grid-column:1/-1;grid-row:2;justify-self:end;margin:0;width:44px;height:44px;border:1px solid #aa879f;border-radius:4px;background:#e9d8e4}
$ .wb-context-panel{position:fixed;padding:16px 14px 20px 38px;padding-inline:38px 14px;border:0;border-bottom:12px solid #bfa0b8;background:#e6d4e1;box-shadow:inset 24px 0 #c9acc1,0 18px 40px #38203233}
$ .wb-context-panel::before{content:'';display:block;position:absolute;inset:10px auto 10px 12px;inset-inline-start:12px;width:0;height:auto;border:0;border-inline-start:2px dashed #725368;background:none;z-index:1;pointer-events:none}
$ .wb-context-subject{margin:0;padding:10px 4px 14px;background:none;border:0;border-bottom:1px dashed #98788d;color:#57394e;overflow-wrap:anywhere}
$ .wb-context-heading{position:relative;margin:0;padding:16px 4px;border:0;background:none;min-height:0;gap:10px}
$ .wb-context-heading [data-menu-back]{position:static;inset:auto;flex:none;width:44px;height:44px;margin:0;border:1px solid #ac8fa4;border-radius:3px;background:#f8eef5}
$ .wb-context-items{margin:0;padding:0;background:none;border:0;isolation:auto}
$ .wb-context-batch{position:relative;margin-bottom:16px;padding:12px 10px;background:#fff9fd;border:1px solid #c6afbf;border-bottom:3px solid #bba1b1;box-shadow:0 3px 0 #d3bbcb}
$ .wb-menu-group{padding:0 0 10px;margin:0;border-bottom:1px dashed #b89cb0;color:#69455e}
$ .wb-context-items button,$ .wb-context-items button:is(:hover,:focus){padding:16px 0;border:0;border-bottom:1px solid #dfccd9;gap:10px;background:none}
$ .wb-context-items button:is(:hover,:focus){background:#f0e3ed}
$ .wb-context-status{background:#fff9fd;padding-inline:10px}
$:dir(rtl) .wb-context-target,$:dir(rtl) .wb-context-panel{box-shadow:inset -24px 0 #c9acc1}
@container(max-width:280px){$ .wb-context-target{grid-template-columns:minmax(0,1fr);gap:14px;padding-inline:36px 14px}$ .wb-context-object{grid-column:1;grid-row:1}$ .wb-context-target-copy{grid-column:1;grid-row:2}$ .wb-context-open{grid-column:1;grid-row:3}}
''')
add('contextmenus','open-corner-context','''
${--muted:#655040}
$ .wb-context-panel{padding:12px;border:0;background:transparent;box-shadow:none;isolation:isolate}
$ .wb-context-panel::before,$ .wb-context-panel::after{display:none}
$ .wb-context-subject{position:relative;margin:0 0 14px;padding:18px 16px;background:#fff9f0;border:0;box-shadow:0 4px 0 #d7bda0;overflow-wrap:anywhere}
$ .wb-context-heading{margin:0;padding:14px 16px;background:#ead5bc;border:0;min-height:0}
$ .wb-context-items{padding:16px 0 0;margin:0;background:none;border:0}
$ .wb-context-batch{position:relative;margin:0 0 20px;padding:18px 16px;background:#fff9f0;border:0;box-shadow:0 4px 0 #d7bda0;isolation:isolate}
$ .wb-context-batch::before,$ .wb-context-batch::after,$ .wb-context-subject::before{content:'';position:absolute;display:block;width:32px;height:32px;pointer-events:none;background:linear-gradient(135deg,#dabd98 0 48%,#a47c52 49% 55%,transparent 56%);z-index:2}
$ .wb-context-batch::before,$ .wb-context-subject::before{top:-5px;inset-inline-start:-5px}
$ .wb-context-batch::after{bottom:-5px;inset-inline-end:-5px;transform:rotate(180deg)}
$ .wb-menu-group{margin:0 0 12px;padding:0 0 10px;border:0;border-bottom:1px solid #ccb391;color:#655040}
$ .wb-context-items button,$ .wb-context-items button:is(:hover,:focus){position:relative;padding:16px 2px;border:0;border-bottom:1px solid #deccb5;background:none;gap:10px;transform:none}
$ .wb-context-items button:is(:hover,:focus){background:#f0dfc9}
$ .wb-context-heading>small,$ .wb-context-items kbd,$ .wb-menu-copy small{color:#655040}
$ .wb-context-status{background:#fff9f0;padding:0 16px}
$ .wb-context-target{position:relative;padding:26px 20px;border:0;background:#fff9f0;box-shadow:0 4px 0 #d7bda0;isolation:isolate}
$ .wb-context-target::before,$ .wb-context-target::after{display:block;content:'';position:absolute;width:40px;height:40px;border:0;background:linear-gradient(135deg,#dabd98 0 48%,#a47c52 49% 55%,transparent 56%);pointer-events:none;z-index:1}
$ .wb-context-target::before{inset:0 auto auto 0;inset-inline-start:0}
$ .wb-context-target::after{inset:auto 0 0 auto;inset-inline-end:0;transform:rotate(180deg)}
$:dir(rtl) .wb-context-batch::before,$:dir(rtl) .wb-context-subject::before,$:dir(rtl) .wb-context-target::before{transform:scaleX(-1)}
$:dir(rtl) .wb-context-batch::after,$:dir(rtl) .wb-context-target::after{transform:rotate(180deg) scaleX(-1)}
''')
updates={
'bookplate-command':'検索した操作を一枚ずつ蔵書票に組むコマンド。分類見出しの下へ標章・操作名・説明・キーを持つ独立した紙を二列で並べ、狭幅では紙の情報順を保って一列にする。',
'caption-command':'操作名の本文と説明の傍注を別欄で読むコマンド。連番の余白、大きな操作名、短い注記とキーを編集紙面に組み、狭幅では注記を本文の下へ接続する。',
'ledger-tools-context':'綴じた台帳に対象と操作を記録するメニュー。背・連番欄・名称と補足の記入欄を分け、どの記録を選んでも罫と文字の位置を固定する。',
'stitched-file-context':'縫い合わされた布の背で操作の紙束を受けるメニュー。縫い目の接合部を文字から離し、分類ごとの紙を布面の上へ重ねる。',
'open-corner-context':'独立した対象札と操作紙を角の受けで支えるメニュー。分類紙の間に背景が見える余白を残し、支持する三角片と紙面の段差でまとまりを示す。'
}
for id,new in updates.items():
 d=Path('src/parts')/('commands' if id.endswith('command') else 'contextmenus')/id
 p=d/'meta.json';m=json.loads(p.read_text());old=m['description'];m['description']=new;p.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 for p in [d/'usage.md',d/'prompt.md',*list((d/'react').glob('*.tsx'))]:p.write_text(p.read_text().replace(old,new))
with Path('docs/design-refinement-225/batches/B020/design.md').open('a') as f:f.write('\nround 5 差戻し：620は分類別の蔵書票、621は本文と傍注、635は綴じ台帳の実欄、638は布と紙の接合、639は独立した紙を支える角の受けへ構造を変更。621選択時のborder、630長い分類、634/635/639補助文字、638狭幅copy列も修正。共有context焦点は別の回帰検証で修正。\n')
print('B020 review follow-up applied')
