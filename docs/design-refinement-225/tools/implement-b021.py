from author import root as r,add,describe
id='ribbon-file-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{position:relative;isolation:isolate;padding:26px 18px;border:0;background:#fbf1f2;border-radius:0;grid-template-columns:44px minmax(0,1fr) 44px;gap:12px}}
{s} .wb-context-object{{position:relative;width:44px;height:64px;border:1px solid #c6a5ad;border-radius:0;background:#fff8f7;box-shadow:none;overflow:visible}}
{s} .wb-context-object::before{{content:'';position:absolute;inset:-9px 9px -12px;background:#c99fab;clip-path:polygon(0 0,100% 0,100% 100%,50% calc(100% - 8px),0 100%);z-index:-1;pointer-events:none}}
{s} .wb-context-object::after{{content:'';position:absolute;inset:12px 7px auto;height:28px;border-top:2px solid #b68594;border-bottom:2px solid #b68594;background:#ead1d7;z-index:-1;pointer-events:none}}
{s} .wb-context-object svg{{position:relative;width:24px;height:24px;color:#76505d}}
{s} .wb-context-open{{border-radius:0;border:1px solid #c3a0ac;background:#ead3da}}
{s} .wb-context-panel{{background:#fff6f5;border:0;border-inline-start:8px solid #c9a0ad;border-radius:0;padding:16px}}
{s} .wb-context-subject{{padding:8px 10px;border-block:1px solid #c9a0ad;background:#efdce1;font:600 16px/1.6 Georgia,'Yu Mincho',serif}}
{s} .wb-context-items [data-menu-action]{{border:0;border-bottom:1px solid #dbc3cb;background:none}}
@container(max-width:280px){{{s} .wb-context-target{{grid-template-columns:44px minmax(0,1fr)}}{s} .wb-context-open{{grid-column:2;justify-self:end}}}}
''')
id='soft-resource-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{display:grid;grid-template-columns:38px minmax(0,1fr);gap:12px;padding:20px 16px;min-height:130px;background:#fcf5fa;border:1px solid #d9c5d2;border-radius:10px}}
{s} .wb-context-object{{width:38px;height:48px;background:#eddde8;border:1px solid #ccb2c4;border-radius:5px;box-shadow:none;transform:none!important}}
{s} .wb-context-target-copy strong{{font:600 17px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .wb-context-target-copy small{{font:12px/1.7 Arial,'Yu Gothic',sans-serif}}
{s} .wb-context-open{{grid-column:2;justify-self:end;width:44px;height:44px;border:1px solid #ccb2c4;background:white;border-radius:6px}}
{s} .wb-context-panel{{border:1px solid #d0b9c9;border-radius:10px;background:#fcf5fa;padding:10px}}
{s} .wb-context-subject{{padding:10px;margin-bottom:8px;border-bottom:1px solid #dfced9;font:600 14px/1.6 Arial,'Yu Gothic',sans-serif}}
{s} .wb-context-items [data-menu-action]{{min-height:46px;padding:10px;border-radius:6px}}
{s} .wb-menu-copy strong{{font:600 14px/1.6 Arial,'Yu Gothic',sans-serif}}
{s} .wb-menu-copy small{{font:12px/1.7 Arial,'Yu Gothic',sans-serif}}
''')
id='clear-action-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{display:grid;grid-template-columns:26px minmax(0,1fr) 44px;gap:12px;padding:18px 14px;min-height:100px;border:0;border-block:1px solid #b4c6b9;border-radius:0;background:#f5f8f3}}
{s} .wb-context-object{{width:26px;height:32px;background:none;border:0;box-shadow:none;transform:none!important}}
{s} .wb-context-object svg{{width:24px;height:24px}}
{s} .wb-context-target-copy strong{{font:600 16px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .wb-context-target-copy small{{font:12px/1.7 Arial,'Yu Gothic',sans-serif}}
{s} .wb-context-open{{width:44px;height:44px;border:1px solid #adbfaf;border-radius:0;background:none}}
{s} .wb-context-panel{{border:1px solid #adbfaf;border-radius:0;background:#f5f8f3;padding:8px}}
{s} .wb-context-items [data-menu-action]{{min-height:44px;padding:10px 8px;border:0;border-bottom:1px solid #d1ddd1;border-radius:0}}
{s} .wb-menu-copy strong{{font:600 14px/1.6 Arial,'Yu Gothic',sans-serif}}
@container(max-width:240px){{{s} .wb-context-target{{grid-template-columns:26px minmax(0,1fr)}}{s} .wb-context-open{{grid-column:2;justify-self:end}}}}
''')
id='warm-project-context';s=r(id);add('contextmenus',id,f'''
{s} .wb-context-target{{display:grid;grid-template-columns:40px minmax(0,1fr) 44px;gap:12px;padding:26px 18px 20px;background:#fcf5e5;border:1px solid #cdb68a;border-top:4px solid #c4aa79;border-radius:0;position:relative;overflow:visible}}
{s} .wb-context-object{{width:40px;height:48px;border:1px solid #bfa474;border-radius:0;background:#e9d9b7;box-shadow:none;transform:none!important}}
{s} .wb-context-target-copy strong{{font:600 20px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-context-target-copy small{{font:12px/1.8 Arial,'Yu Gothic',sans-serif}}
{s} .wb-context-open{{width:44px;height:44px;border:1px solid #bfa474;background:#f8ecd4;border-radius:0}}
{s} .wb-context-panel{{padding:14px;border:0;border-block:3px double #c6ac7b;border-radius:0;background:#fcf5e5}}
{s} .wb-context-subject{{font:600 18px/1.5 Georgia,'Yu Mincho',serif;border-bottom:1px solid #d7c49e;padding:0 0 12px}}
{s} .wb-menu-group{{font:600 13px/1.6 Georgia,'Yu Mincho',serif;padding:8px;border-inline-start:3px solid #b99b65;background:#efe2c5}}
{s} .wb-context-items [data-menu-action]{{min-height:46px;border-bottom:1px solid #dfcfae;border-radius:0}}
@container(max-width:280px){{{s} .wb-context-target{{grid-template-columns:40px minmax(0,1fr)}}{s} .wb-context-open{{grid-column:2;justify-self:end}}}}
''')
id='letterhead-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{padding:8px 14px;background:#fcf8ee;border:0;border-top:3px double #aa8e62}}
{s} .wb-nav-brand{{position:relative;padding:22px 8px 24px;border-bottom:1px solid #cbb99a}}
{s} .wb-nav-brand strong{{font:400 34px/1.25 Georgia,'Yu Mincho',serif;letter-spacing:-.03em}}
{s} .wb-brand-glyph{{width:24px;height:32px;border:1px solid #ac9065;box-shadow:inset 0 0 0 3px #fcf8ee;background:#dcc9a7;border-radius:0}}
{s} .wb-nav-desktop,{s}[data-wb-layout=sidebar] .wb-nav-desktop{{padding:12px 8px 16px;margin:0}}
{s} .wb-nav-list{{grid-template-columns:repeat(2,minmax(0,1fr));gap:0 18px;counter-reset:section}}
{s} .wb-nav-list>li{{counter-increment:section;position:relative;border:0}}
{s} .wb-nav-list>li::before{{content:counter(section,decimal-leading-zero);display:block;color:#826b48;font:italic 12px/1.6 Georgia,serif;padding-top:12px;pointer-events:none}}
{s} .wb-nav-link,{s} .wb-nav-disclosure{{padding:8px 0 18px;min-height:64px;border-bottom:1px solid #c9b798}}
{s} .wb-nav-link strong{{font:600 17px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-nav-foot{{padding:16px 8px;border-top:3px double #baa17a}}
{s} .wb-nav-flyout{{background:#fcf8ee;border:1px solid #c5ad86;border-top:3px double #b4996e}}
{s} .wb-nav-dialog .wb-nav-list{{grid-template-columns:1fr}}
@container(max-width:280px){{{s} .wb-nav-list{{grid-template-columns:1fr}}}}
''')
id='stitched-map-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{background:#f7f1f8;border:1px solid #ccb7d2;border-radius:0;padding-bottom:12px}}
{s} .wb-nav-brand{{padding:22px 18px;border-bottom:1px dashed #b295bb}}
{s} .wb-nav-desktop,{s}[data-wb-layout=sidebar] .wb-nav-desktop{{padding:14px 18px 20px}}
{s} .wb-nav-list{{border-inline-start:1px dashed #b496be;padding-inline-start:12px}}
{s} .wb-nav-link{{position:relative;padding:14px 10px;border:0;border-bottom:1px dashed #c5aecf}}
{s} .wb-nav-link-icon{{border:1px solid #b79bc1;border-radius:50%;width:28px;min-width:28px;height:28px;background:#e8daef;display:grid;place-items:center}}
{s} .wb-nav-link-icon svg{{width:16px;height:16px}}
{s} .wb-nav-marker{{background:#e8ddef;border:1px dashed #b99bc4;border-radius:0}}
{s} .wb-nav-disclosure{{padding:14px 12px;min-height:68px;margin-top:14px;background:#e9dcef;border:1px dashed #b99bc4}}
{s} .wb-nav-flyout[data-nav-inline]{{padding:12px 0 10px 12px;background:none;border:0;border-inline-start:1px dashed #b99bc4}}
{s} .wb-nav-flyout[data-nav-inline]::before,{s} .wb-nav-flyout[data-nav-inline]::after{{display:none}}
{s} .wb-nav-flyout[data-nav-inline]>.wb-nav-list{{padding:10px;background:#fcf8fd;border:1px dashed #c4aecd}}
{s} .wb-nav-foot{{border-top:1px dashed #b69abe;background:#efe4f3;padding:14px 18px}}
''')
id='open-bracket-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{position:relative;isolation:isolate;padding:12px 12px 18px;background:#faf6ec;border:0}}
{s} .wb-navigation-frame::before{{content:'';position:absolute;inset:6px auto 30% 0;width:24px;border-inline-start:2px solid #a9895d;border-block:2px solid #a9895d;pointer-events:none}}
{s} .wb-navigation-frame::after{{content:'';position:absolute;inset:30% 0 6px auto;width:24px;border-inline-end:2px solid #a9895d;border-block:2px solid #a9895d;pointer-events:none}}
{s} .wb-nav-brand{{padding:20px 12px;border-bottom:0}}
{s} .wb-nav-desktop,{s}[data-wb-layout=sidebar] .wb-nav-desktop{{padding:6px 12px 12px}}
{s} .wb-nav-list{{display:flex;flex-direction:column;gap:8px}}
{s} .wb-nav-link,{s} .wb-nav-disclosure{{padding:16px 10px;min-height:60px;border-bottom:1px solid #d7c5a9}}
{s} .wb-nav-list>li:nth-child(2n){{margin-inline-start:12px}}
{s} .wb-nav-marker{{background:#ede2cd;box-shadow:inset 2px 0 #b49a70}}
{s} .wb-nav-foot{{margin-inline:12px;padding:14px 0;border-top:1px solid #bfab87}}
{s}:dir(rtl) .wb-navigation-frame::before{{left:auto;right:0}}
{s}:dir(rtl) .wb-navigation-frame::after{{left:0;right:auto}}
''')
id='book-jacket-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{position:relative;padding:0 0 16px 14px;background:#fcf4e4;border:0;border-inline-start:7px solid #b99b6c;box-shadow:inset 5px 0 #e4cfa9}}
{s} .wb-nav-brand{{padding:24px 18px;border-bottom:3px double #cfb58c}}
{s} .wb-nav-brand strong{{font:500 30px/1.3 Georgia,'Yu Mincho',serif}}
{s} .wb-nav-desktop,{s}[data-wb-layout=sidebar] .wb-nav-desktop{{padding:16px 18px 20px}}
{s} .wb-nav-link{{padding:16px 0;border-bottom:1px solid #dbc39d}}
{s} .wb-nav-list>li:has(>.wb-nav-disclosure){{padding:12px;margin-top:16px;background:#e8d4b1;border:1px solid #c6aa7b}}
{s} .wb-nav-disclosure{{min-height:60px;padding:8px 0;background:none}}
{s} .wb-nav-flyout[data-nav-inline]{{padding:10px 0 0 10px;margin:0;background:none;border:0;border-inline-start:2px solid #c3a474}}
{s} .wb-nav-flyout[data-nav-inline]::before,{s} .wb-nav-flyout[data-nav-inline]::after{{display:none}}
{s} .wb-nav-flyout[data-nav-inline]>.wb-nav-list{{padding:10px;background:#fff9ee;border-bottom:3px solid #c9b087}}
{s} .wb-nav-foot{{margin-inline:18px;padding:14px 0;border-top:1px solid #c9b087;background:none}}
{s}:dir(rtl) .wb-navigation-frame{{padding-inline:14px 0;box-shadow:inset -5px 0 #e4cfa9}}
''')
id='ceramic-dock-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{padding:8px 10px 16px;background:#ece8f4;border:0;border-top:3px solid #faf8ff;border-bottom:6px solid #b4aaca;border-radius:26px 10px 26px 10px}}
{s} .wb-nav-brand{{padding:22px 14px;border:0;background:none}}
{s} .wb-nav-desktop,{s}[data-wb-layout=sidebar] .wb-nav-desktop{{padding:10px 12px 20px;background:none}}
{s} .wb-nav-list{{gap:10px}}
{s} .wb-nav-link{{padding:16px 12px;border:0;border-bottom:2px solid #c2b8d5;border-radius:12px 4px;background:#f8f5fe}}
{s} .wb-nav-marker{{background:#dfd7ee;border:1px solid #c0b3d4;border-radius:12px 4px}}
{s} .wb-nav-disclosure{{min-height:66px;padding:16px 12px;margin-top:10px;background:#dcd3ea;border-radius:14px 4px;border:0;border-bottom:3px solid #baaccf}}
{s} .wb-nav-flyout[data-nav-inline]{{padding:12px 0 0;background:none;border:0}}
{s} .wb-nav-flyout[data-nav-inline]::before,{s} .wb-nav-flyout[data-nav-inline]::after{{display:none}}
{s} .wb-nav-flyout[data-nav-inline]>.wb-nav-list{{padding:12px;background:#f2ecfa;border:0;border-top:3px solid #fffaff;border-bottom:4px solid #c7bbdb;border-radius:18px 4px}}
{s} .wb-nav-foot{{margin-inline:12px;padding:14px 8px;border-top:1px solid #c4b9d5;background:none}}
''')
id='soft-section-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{padding:12px;background:#fcf5fa;border:1px solid #d9c3d2;border-radius:12px}}
{s} .wb-nav-brand{{padding:12px 10px 20px;border-bottom:1px solid #dfcdd9}}
{s} .wb-nav-desktop{{padding:12px 0 0}}
{s} .wb-nav-list{{gap:8px}}
{s} .wb-nav-link,{s} .wb-nav-disclosure{{padding:12px;min-height:52px;border:1px solid #e0cedb;background:#fffafd;border-radius:8px}}
{s} .wb-nav-link strong{{font:600 14px/1.6 Arial,'Yu Gothic',sans-serif}}
{s} .wb-nav-link small{{display:block;font:12px/1.7 Arial,'Yu Gothic',sans-serif}}
{s} .wb-nav-marker{{background:#ecdaE7;border:1px solid #c5a6bc;border-radius:8px}}
{s} .wb-nav-foot{{padding:14px 10px 4px;border-top:1px solid #dfcdd9;margin-top:14px}}
{s} .wb-nav-flyout{{padding:10px;border:1px solid #ceb3c5;border-radius:10px;background:#fcf5fa}}
''')
describe('B021',{
'ribbon-file-context':('contextmenus','短いリボンを紙の裏から通す操作面。丸い文書印を廃し、上下の通し口と二股の端で文書を留める構造を示す。'),
'soft-resource-context':('contextmenus','資料名と説明を読み、下の操作から開くコンパクトなメニュー。文書アイコンと内容を二列に揃え、操作の入口を分ける。'),
'clear-action-context':('contextmenus','一覧行のまま操作できる簡潔なメニュー。小さい文書記号、名前、44pxの操作入口を横に揃え、狭幅では操作を下へ回す。'),
'warm-project-context':('contextmenus','書類のまとまりと分類見出しで操作を読むメニュー。名称を大きな明朝体にし、メニュー内も分類の帯と短い行へ整理する。'),
'letterhead-navigation':('navigation','便箋の題字と番号付き目次を組むナビゲーション。大きなブランド文字、印のような小さな記号、実項目の番号を紙面の余白へ揃える。'),
'stitched-map-navigation':('navigation','縫い目が行先をつなぐナビゲーション。現在地の布片と開いた小さな地図を同じ細い綴じ線へ接続し、大きな無地の面を減らす。'),
'open-bracket-navigation':('navigation','対角の括弧が行先の列を支えるナビゲーション。二列の目次から少しずれた一列の道筋へ組み替え、現在地を薄い支持面で示す。'),
'book-jacket-navigation':('navigation','背と折返しを持つ本のカバーとして組むナビゲーション。主な行先を本文の目次、展開先を折返しの内側の紙面として扱う。'),
'ceramic-dock-navigation':('navigation','浅い陶の器に行先の読み取り面を載せるナビゲーション。離れた縦面を一つの器へつなぎ、縁・選択面・展開面の厚みを揃える。'),
'soft-section-navigation':('navigation','説明付きの区画を選ぶナビゲーション。行先ごとに小さな読み取り面を設け、名前・説明・現在地を続けて確認できる。')},'B021 文書と行先の構造')
