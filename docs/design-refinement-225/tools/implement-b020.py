from author import root as r,add,describe
id='bookplate-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{padding:24px 20px;background:#fff8e8;border:1px solid #c8b18c;box-shadow:inset 0 0 0 7px #fff8e8,inset 0 0 0 8px #dccbab}}
{s} .wb-command-symbol{{margin:0 0 16px;width:44px;height:44px;padding:0;background:none}}
{s} .wb-launch-copy{{margin:0;padding:0;background:none}}
{s} .wb-command-launch{{margin-top:22px;padding:14px 12px;min-height:58px;background:#f1e3c6;border:1px solid #c9b18a;border-bottom:3px solid #bea175}}
{s} .wb-command-launcher::after,{s} .wb-command-launch::before,{s} .wb-command-entry::before{{display:none}}
{s} .wb-command-dialog{{background:#fff8e8;box-shadow:0 24px 70px #0005;border:1px solid #c8b18c}}
{s} .wb-command-frame{{background:#fff8e8;padding:8px}}
{s} .wb-command-frame::before{{inset:6px;background:none;border:1px solid #d9c7a7;z-index:-1}}
{s} .wb-command-top,{s} .wb-command-list,{s} .wb-command-foot{{margin:0;padding:18px}}
{s} .wb-command-entry{{margin:0 12px;padding:12px;background:#f1e3c6;border:1px solid #c9b18a;border-bottom:3px solid #bea175}}
''')
id='caption-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{position:relative;padding:28px 22px;background:#f6f3eb;border:0;border-inline-start:1px solid #bdad8d}}
{s} .wb-command-symbol{{position:relative;width:44px;height:44px;border:0;border-top:2px solid #9e8762;border-radius:0;margin-bottom:22px}}
{s} .wb-launch-copy strong{{font:600 31px/1.3 Georgia,'Yu Mincho',serif}}
{s} .wb-launch-copy p{{margin-inline-start:22px;border-inline-start:1px solid #b6a481;padding-inline-start:14px;font:14px/1.7 Georgia,'Yu Mincho',serif}}
{s} .wb-command-launch{{margin-top:24px;padding:14px 0;border:0;border-block:3px double #bbab8b;background:none;border-radius:0}}
{s} .wb-command-dialog{{border:0;border-top:3px double #b5a17c;background:#f8f4e9}}
{s} .wb-command-top{{border:0;margin:12px 20px 0;padding:12px 0}}
{s} .wb-command-top .wb-eyebrow{{font:600 30px/1.35 Georgia,'Yu Mincho',serif}}
{s} .wb-command-entry{{margin:0 20px;padding:8px 0;border:0;border-block:1px solid #c0b090;background:none}}
{s} .wb-command-list{{padding:20px}}
{s} .wb-command-batch{{border-inline-start:1px solid #bdaa86;padding-inline-start:16px;margin-bottom:18px}}
{s} .wb-command-group{{font:italic 16px/1.5 Georgia,serif;padding:0 0 12px}}
{s} .wb-command-option{{grid-template-columns:22px minmax(0,1fr) auto;padding:16px 0;gap:10px;border:0;border-top:1px solid #d5c9b1;background:none}}
{s} .wb-command-icon{{width:22px;height:22px}}
{s} .wb-command-copy strong{{font:600 21px/1.45 Georgia,'Yu Mincho',serif}}
{s} .wb-command-copy small{{font:13px/1.8 Georgia,'Yu Mincho',serif}}
{s} .wb-command-option[aria-selected=true]{{background:#eae3d4}}
''')
id='soft-action-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{display:grid;grid-template-columns:40px minmax(0,1fr);gap:14px;padding:22px 18px;border:1px solid #d6c2d0;border-radius:12px;background:#fcf5fa}}
{s} .wb-command-symbol{{width:40px;height:40px;border-radius:9px;margin:0;background:#e9d8e4}}
{s} .wb-launch-copy{{min-width:0}}
{s} .wb-launch-copy strong{{font:600 19px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .wb-command-launch{{grid-column:1/-1;margin-top:10px;min-height:48px;border:1px solid #cbb1c2;background:#fffafd;border-radius:8px}}
{s} .wb-command-dialog{{border-radius:12px;border:1px solid #cbb1c2;background:#fcf5fa}}
{s} .wb-command-entry{{background:#fff;border:1px solid #ccb5c6;border-radius:8px;margin:0 16px;padding:10px}}
{s} .wb-command-option{{padding:12px;border:1px solid #dfccd8;border-radius:8px;background:#fffafd;margin-bottom:8px;min-height:70px}}
{s} .wb-command-option[aria-selected=true]{{background:#efdfeb;border-color:#bc9ab0}}
{s} .wb-command-copy strong{{font:600 15px/1.6 Arial,'Yu Gothic',sans-serif}}
{s} .wb-command-copy small{{font:12px/1.7 Arial,'Yu Gothic',sans-serif}}
''')
id='clear-outline-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{padding:20px 18px;border:1px solid #b1c4b6;border-radius:0;background:#f5f8f3}}
{s} .wb-command-symbol{{width:28px;height:28px;background:none;border:0;border-radius:0;margin-bottom:14px}}
{s} .wb-launch-copy strong{{font:600 20px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .wb-command-launch{{min-height:46px;border:0;border-bottom:1px solid #86a38d;border-radius:0;background:none;padding:10px 0}}
{s} .wb-command-dialog{{border:1px solid #adbfaf;border-radius:0;background:#f5f8f3}}
{s} .wb-command-top{{border-bottom:1px solid #c1d0c3;padding:16px}}
{s} .wb-command-entry{{border:0;border-bottom:1px solid #9cb6a1;border-radius:0;background:#fff;padding:8px 16px}}
{s} .wb-command-option{{padding:12px 4px;border:0;border-bottom:1px solid #c4d2c6;border-radius:0;background:none;min-height:62px;gap:10px}}
{s} .wb-command-option[aria-selected=true]{{background:#e1ece0;box-shadow:inset 2px 0 #688b71}}
{s} .wb-command-copy strong{{font:600 15px/1.6 Arial,'Yu Gothic',sans-serif}}
{s} .wb-command-copy small{{font:12px/1.7 Arial,'Yu Gothic',sans-serif}}
''')
id='warm-project-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{padding:24px 20px;border:0;border-block:3px double #c1aa7d;border-radius:0;background:#fbf4e4}}
{s} .wb-command-symbol{{width:38px;height:38px;border:1px solid #b69c6c;border-radius:0;background:none}}
{s} .wb-launch-copy strong{{font:600 25px/1.4 Georgia,'Yu Mincho',serif}}
{s} .wb-command-launch{{border:1px solid #c4af84;background:#fffaf0;border-radius:0;min-height:50px}}
{s} .wb-command-dialog{{border:1px solid #c3ad80;border-radius:0;background:#fbf4e4}}
{s} .wb-command-top{{border-bottom:3px double #c9b68e}}
{s} .wb-command-entry{{padding:12px 18px;background:#fffaf1;border:0;border-bottom:1px solid #c6b28a;border-radius:0}}
{s} .wb-command-batch{{padding-bottom:14px;border-bottom:1px solid #cbb88e}}
{s} .wb-command-group{{font:600 16px/1.6 Georgia,'Yu Mincho',serif;color:#6b542f;border-inline-start:3px solid #b89a62;padding:6px 10px;margin-bottom:10px}}
{s} .wb-command-option{{padding:12px 8px;border:0;border-bottom:1px solid #decfae;border-radius:0;background:none;min-height:72px}}
{s} .wb-command-copy strong{{font:600 17px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-command-copy small{{font:12px/1.8 Arial,'Yu Gothic',sans-serif}}
{s} .wb-command-option[aria-selected=true]{{background:#eee0c0}}
''')
id='stepped-document-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{position:relative;isolation:isolate;padding:24px 20px 32px;background:#f3f5eb;border:1px solid #b4c0aa;border-radius:0;box-shadow:none}}
{s} .wb-context-target::before{{content:'';position:absolute;inset:8px 8px -6px;background:#d5dfca;border:1px solid #afbea4;z-index:-2;pointer-events:none}}
{s} .wb-context-target::after{{content:'';position:absolute;inset:0 0 3px;background:#f3f5eb;border-bottom:3px solid #c2cdb5;z-index:-1;pointer-events:none}}
{s} .wb-context-object{{background:#e0e8d5;border:1px solid #b8c8a9;border-radius:0;box-shadow:3px 3px #bdcda9;width:42px;height:56px}}
{s} .wb-context-open{{border:1px solid #b4c49f;border-radius:0;background:#e3ebd7}}
{s} .wb-context-panel{{border-radius:0;border:1px solid #b6c3a8;border-bottom:5px solid #acbd99;background:#f8faef;padding:14px}}
{s} .wb-menu-group{{border-top:2px solid #bfcdaf;background:#e8efdc;padding:8px;margin:12px 0 4px}}
''')
id='ledger-tools-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{padding:24px 18px;border:0;border-inline-start:4px solid #b9a174;border-radius:0;background:#fbf4e4;box-shadow:inset 10px 0 #e7d8b8}}
{s} .wb-context-object{{width:42px;height:56px;border:1px solid #bda67a;border-radius:0;background:repeating-linear-gradient(0deg,#f7edda 0 10px,#cdbb95 10px 11px);box-shadow:none}}
{s} .wb-context-object svg{{background:#f7edda}}
{s} .wb-context-open{{background:none;border:0;border-block:3px double #b59b6c;border-radius:0}}
{s} .wb-context-panel{{border:0;border-inline-start:5px solid #b49a68;border-radius:0;background:#fcf6e9;padding:16px}}
{s} .wb-context-subject{{font:600 18px/1.5 Georgia,'Yu Mincho',serif;border-bottom:3px double #c5b089;padding-bottom:12px}}
{s} .wb-context-items{{counter-reset:entry}}
{s} .wb-context-items [data-menu-action]{{counter-increment:entry;position:relative;padding-inline-start:28px;border:0;border-bottom:1px solid #d4c4a3;background:none}}
{s} .wb-context-items [data-menu-action]::before{{content:counter(entry,decimal-leading-zero);display:block;position:absolute;left:0;top:22px;width:auto;height:auto;background:none;color:#796343;font:11px/1.5 Consolas,monospace}}
{s}:dir(rtl) .wb-context-items [data-menu-action]::before{{left:auto;right:0}}
''')
id='stitched-file-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{padding:24px 18px;display:grid;grid-template-columns:40px minmax(0,1fr) 44px;gap:12px;min-height:160px;background:#f3eaf2;border:0;border-block:1px dashed #b99cb7;border-radius:0}}
{s} .wb-context-target::before,{s} .wb-context-target::after{{display:none}}
{s} .wb-context-object{{width:40px;height:56px;border:1px dashed #ab8eaa;border-radius:2px;background:#e7d7e8;transform:none!important;box-shadow:none}}
{s} .wb-context-object::before,{s} .wb-context-object::after{{display:none}}
{s} .wb-context-open{{position:relative;inset:auto;width:44px;height:44px;border:1px dashed #ab8eaa;border-radius:4px;background:#e7d7e8;margin:0;transform:none}}
{s} .wb-context-target-copy{{margin:0;padding:0;background:none}}
{s} .wb-context-panel{{padding:14px;border:1px dashed #b69bb5;border-radius:2px;background:#faf1f8;box-shadow:0 12px 32px #4f35432b}}
@container(max-width:280px){{{s} .wb-context-target{{grid-template-columns:40px minmax(0,1fr)}}{s} .wb-context-open{{grid-column:2;justify-self:end}}}}
''')
id='open-corner-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{position:relative;padding:24px 18px;grid-template-columns:42px minmax(0,1fr);gap:16px;background:#f0f4f5;border:0;border-radius:0}}
{s} .wb-context-target::before{{content:'';position:absolute;inset:6px 6px auto auto;width:45%;height:26px;border-top:2px solid #91acba;border-right:2px solid #91acba;pointer-events:none}}
{s} .wb-context-target::after{{content:'';position:absolute;inset:auto auto 6px 6px;width:45%;height:26px;border-bottom:2px solid #91acba;border-left:2px solid #91acba;pointer-events:none}}
{s} .wb-context-object{{width:42px;height:62px;background:#d8e5eb;border:0;border-top:2px solid #8eacbd;border-bottom:3px solid #aac3cf;border-radius:0}}
{s} .wb-context-open{{grid-column:2;justify-self:end;border:0;border-bottom:2px solid #8eacbd;border-radius:0;background:none}}
{s} .wb-context-panel{{padding:16px;border:0;border-inline:2px solid #9ab5c3;border-radius:0;background:#f1f6f8;box-shadow:0 14px 40px #21333c38}}
{s} .wb-context-subject{{border-bottom:1px solid #b4cad5;padding-bottom:12px}}
{s} .wb-context-items [data-menu-action]{{border:0;border-bottom:1px solid #c5d8df;background:none;border-radius:0}}
''')
id='index-pocket-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{position:relative;isolation:isolate;padding:28px 18px 24px;grid-template-columns:40px minmax(0,1fr) 44px;gap:12px;background:#e6dbc4;border:0;border-bottom:4px solid #b69d72;border-radius:0}}
{s} .wb-context-target::before{{content:'';position:absolute;inset:8px 12px 32px;background:#fff9eb;border:1px solid #c9b58c;z-index:-2;pointer-events:none}}
{s} .wb-context-target::after{{content:'';position:absolute;inset:auto 0 0;height:32px;background:#ddccaa;border-top:2px solid #f3e4c7;clip-path:polygon(0 0,38% 0,44% 8px,56% 8px,62% 0,100% 0,100% 100%,0 100%);z-index:-1;pointer-events:none}}
{s} .wb-context-object{{width:40px;height:54px;background:#f7edd8;border:1px solid #c7b188;border-radius:0;box-shadow:none}}
{s} .wb-context-target-copy{{padding-bottom:22px;background:none}}
{s} .wb-context-open{{border:1px solid #bfa77d;border-radius:0;background:#ebddbf;align-self:start}}
{s} .wb-context-panel{{padding:14px;border:1px solid #c8b187;border-bottom:6px solid #bda273;border-radius:0;background:#fff8e9}}
{s} .wb-context-subject{{margin:0 0 12px;padding:8px 12px;border:1px solid #c8b187;background:#ebdec4}}
''')
describe('B020',{
'bookplate-command':('commands','蔵書票の内枠へ検索と操作を収めるコマンドパレット。文字に迫る大きな斜めの切込みを外し、薄い紙縁と留めた検索帯に整理する。'),
'caption-command':('commands','大きな見出しから余白の注記へ読むコマンドパレット。グループを一本の注釈罫に沿わせ、操作名と補足を異なる活字の階層で組む。'),
'soft-action-command':('commands','用途のまとまりをカードで選ぶコマンドパレット。小さな起動アイコン、広い検索行、短い説明付き操作カードで構成する。'),
'clear-outline-command':('commands','操作を密度の整った一覧で選ぶコマンドパレット。検索と候補を罫線で直結し、選択位置を側線で示す。'),
'warm-project-command':('commands','プロジェクトの操作を見出しごとに読むコマンドパレット。章の側線と書類の二重罫で分類し、操作名と説明を順に読む。'),
'stepped-document-context':('contextmenus','薄い書類が二段の台へ載る操作面。角丸の大きな塊を廃し、紙・下敷き・選択した操作段の厚みを揃える。'),
'ledger-tools-context':('contextmenus','綴じた台帳と連番付き操作行を持つメニュー。書類の罫、分類見出し、実操作の番号を同じ記録欄として組む。'),
'stitched-file-context':('contextmenus','短い綴じ目で文書と操作を結ぶメニュー。長い斜め帯と離れた大きな丸ボタンを廃し、文書・名前・44pxの操作を近くに揃える。'),
'open-corner-context':('contextmenus','開いた支持枠に文書と独立した操作位置を置くメニュー。紙の上辺と下辺を対角の支えで受け、操作ボタンは下の余白に分ける。'),
'index-pocket-context':('contextmenus','索引紙を浅いポケットに差し込む操作面。紙の上端と前側の口を分け、中央の切欠きから紙が見える関係を作る。')},'B020 操作面と情報のまとまり')
