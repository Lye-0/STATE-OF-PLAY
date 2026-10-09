"""One-shot table material refinement before independent B022 review."""
from pathlib import Path
import json
def add(id,css,new):
 d=Path('src/parts/tables')/id;p=d/'styles.css';s='.sop-wb.sop-'+id+'.sop-'+id
 p.write_text(p.read_text()+'\n/* Main material preflight */\n@media(forced-colors:none){\n'+css.replace('$',s).strip()+'\n}\n')
 p=d/'meta.json';m=json.loads(p.read_text());old=m['description'];m['description']=new;p.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 for p in [d/'usage.md',d/'prompt.md',*list((d/'react').glob('*.tsx'))]:p.write_text(p.read_text().replace(old,new))
add('folded-register-table','''
$ .wb-data-frame{padding:0 12px 0 0;padding-inline:0 12px;background:none;border:0;overflow:visible;isolation:isolate}
$ .wb-data-heading{position:relative;margin:0 0 0 24px;margin-inline:24px 0;padding:26px 20px 30px;background:#fff6fc;border:0;border-top:2px solid #cbb0c3;box-shadow:0 4px 0 #d7bfd0}
$ .wb-data-heading::after{content:'';position:absolute;top:100%;inset-inline-start:-24px;inset-inline-end:0;height:20px;background:linear-gradient(#ad8ba3,#d8bfd0);clip-path:polygon(24px 0,100% 0,calc(100% - 24px) 100%,0 100%);z-index:1;pointer-events:none}
$ .wb-data-toolbar{position:relative;z-index:2;margin:20px 24px 20px 0;margin-inline:0 24px;padding:20px;background:#e4cede;border:0;border-bottom:1px solid #b792ab;box-shadow:0 4px 6px #6e41621a}
$ .wb-data-toolbar::after{top:100%;inset-inline:0 -24px;height:20px;background:linear-gradient(#c5a5bc,#efdfea);clip-path:polygon(0 0,calc(100% - 24px) 0,100% 100%,24px 100%)}
$ .wb-table-scroll{margin:0 0 0 24px;margin-inline:24px 0;border:0;border-inline:1px solid #cbb0c3;background:#fff6fc;box-shadow:4px 0 0 #cdb0c3}
$ .wb-data-status{margin:0 0 0 24px;margin-inline:24px 0;padding:18px 18px 0;background:#fff6fc;border-inline:1px solid #cbb0c3;box-shadow:4px 0 0 #cdb0c3}
$ .wb-data-footer{margin:0 0 0 24px;margin-inline:24px 0;padding:18px;background:#fff6fc;border:0;border-inline:1px solid #cbb0c3;border-bottom:5px solid #c2a5b8;box-shadow:4px 0 0 #cdb0c3}
$:dir(rtl) .wb-data-heading::after,$:dir(rtl) .wb-data-toolbar::after{transform:scaleX(-1)}
$:dir(rtl) .wb-table-scroll,$:dir(rtl) .wb-data-status,$:dir(rtl) .wb-data-footer{box-shadow:-4px 0 0 #cdb0c3}
@container(max-width:350px){$ .wb-data-heading{padding:22px 14px}$ .wb-data-toolbar{padding:16px 12px}$ .wb-data-footer{padding:16px 12px}}
''','題字面から検索の折返し面を経て記録紙へ続く折り台帳。二つの折れ目を逆向きに接続し、面ごとの奥行きと余白で読む・探す・比較する領域を分ける。')
add('open-sheet-table','''
$ .wb-data-frame{position:relative;background:none;padding:0 14px;border:0;overflow:visible;isolation:isolate}
$ .wb-data-frame::before,$ .wb-data-frame::after{display:none}
$ .wb-data-heading{position:relative;padding:24px 18px;margin:0 0 18px;background:#fbf7ec;border:0;box-shadow:0 4px 0 #c9b58f}
$ .wb-data-toolbar{position:relative;padding:16px 18px;margin:0 0 22px;background:#eadfc8;border:0;box-shadow:0 3px 0 #b99e73}
$ .wb-table-scroll{position:relative;background:#fffaf0;margin:0;border:0;border-inline:1px solid #bca47c;border-top:5px solid #bca47c;box-shadow:0 3px 0 #c9b58f}
$ .wb-data-heading::before,$ .wb-data-heading::after{content:'';position:absolute;display:block;width:28px;height:28px;background:none;border:0;pointer-events:none}
$ .wb-data-heading::before{top:-5px;inset-inline-start:-5px;border-top:5px solid #a1865d;border-inline-start:5px solid #a1865d}
$ .wb-data-heading::after{bottom:-5px;inset-inline-end:-5px;border-bottom:5px solid #b9a07a;border-inline-end:5px solid #b9a07a}
$ .wb-data-status{padding:18px;margin:0;background:#fffaf0;border-inline:1px solid #bca47c}
$ .wb-data-footer{position:relative;margin:0 0 5px;padding:4px 18px 22px;background:#fffaf0;border:0;border-inline:1px solid #bca47c;border-bottom:3px solid #c9b58f}
$ .wb-data-footer::before,$ .wb-data-footer::after{content:'';position:absolute;display:block;width:28px;height:28px;bottom:-5px;background:none;border-bottom:5px solid #a1865d;pointer-events:none}
$ .wb-data-footer::before{inset-inline-start:-5px;border-inline-start:5px solid #a1865d}
$ .wb-data-footer::after{inset-inline-end:-5px;border-inline-end:5px solid #a1865d}
@container(max-width:350px){$ .wb-data-frame{padding-inline:7px}$ .wb-data-heading{padding:22px 14px}$ .wb-data-toolbar{padding:14px 12px}$ .wb-data-footer{padding-inline:12px}}
''','題字札・検索面・記録紙を背景へ抜ける余白で分離した表。角の支持片が紙を受け、データの連続した面を保ちながら上部の操作領域を独立して読む。')
add('ribbon-register-table','''
$ .wb-data-frame{position:relative;isolation:isolate;padding:0 0 34px 44px;padding-inline:44px 0;border:0;background:none;overflow:visible}
$ .wb-data-frame::before{content:'';display:block;position:absolute;inset:12px auto 0 12px;inset-inline-start:12px;width:24px;height:auto;background:linear-gradient(90deg,#98708b 0 2px,#cca8bf 2px 5px,#b88fa7 5px 19px,#d8b9cd 19px 22px,#8f667f 22px);clip-path:polygon(0 0,100% 0,100% 100%,50% calc(100% - 16px),0 100%);pointer-events:none;z-index:-1}
$ .wb-data-heading{position:relative;padding:24px 18px;background:#fff7fc;border:0;border-top:2px solid #b99aad;box-shadow:0 3px 0 #d1b5c6}
$ .wb-data-heading::before,$ .wb-data-heading::after{content:'';display:block;position:absolute;inset-inline-start:-34px;width:52px;height:16px;background:linear-gradient(#d7b5cc 0 2px,#b38da4 2px 12px,#8e667e 12px);border:0;border-inline:2px solid #9a728a;box-shadow:0 2px 3px #62415733;pointer-events:none}
$ .wb-data-heading::before{top:18px}
$ .wb-data-heading::after{bottom:18px}
$ .wb-data-toolbar{position:relative;margin:16px 0;padding:16px 14px;background:#ead8e3;border:0;border-inline-start:4px solid #b98ea8;box-shadow:0 3px 0 #d1b5c6}
$ .wb-data-selection{padding:8px 12px;background:#d6b6ca;color:#593e50;border:1px solid #b0879f;flex:1 1 140px;max-width:100%;gap:12px}
$ .wb-data-selection span{overflow-wrap:anywhere;color:#593e50}
$ .wb-data-selection::after{background:#9d718b}
$ .wb-table-scroll{margin:0;background:#fff7fc;border:0;border-inline:1px solid #ccb0c1;box-shadow:0 4px 0 #d1b5c6}
$ .wb-data-status{margin:0;padding:18px;background:#fff7fc;border-inline:1px solid #ccb0c1}
$ .wb-data-footer{padding:4px 18px 20px;margin:0;background:#fff7fc;border:0;border-inline:1px solid #ccb0c1;border-bottom:4px solid #c3a0b6}
$:dir(rtl) .wb-data-frame::before{background:linear-gradient(270deg,#98708b 0 2px,#cca8bf 2px 5px,#b88fa7 5px 19px,#d8b9cd 19px 22px,#8f667f 22px)}
@container(max-width:350px){$ .wb-data-frame{padding-inline-start:32px}$ .wb-data-frame::before{inset-inline-start:6px;width:20px}$ .wb-data-heading{padding:22px 12px}$ .wb-data-heading::before,$ .wb-data-heading::after{inset-inline-start:-28px;width:38px}$ .wb-data-toolbar{padding-inline:10px}$ .wb-data-footer{padding-inline:10px}}
''','紙束の外側を走るリボンを二つの通し口で題字紙へ結ぶ台帳。検索面と記録紙は別の面に置き、選択件数の札はリボンと同じ素材で操作のまとまりを示す。')
print('three table materials strengthened')
