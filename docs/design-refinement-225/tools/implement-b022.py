from author import root as r,add,describe
id='clear-line-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{padding:0 18px;background:#f5f8f3;border:0;border-inline-start:2px solid #71927a}}
{s} .wb-nav-brand{{padding:20px 0;border-bottom:1px solid #c3d1c2}}
{s} .wb-nav-brand strong{{font:600 18px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .wb-nav-desktop,{s}[data-wb-layout=sidebar] .wb-nav-desktop{{padding:12px 0}}
{s} .wb-nav-list{{display:flex;flex-direction:column;gap:0}}
{s} .wb-nav-link{{padding:12px 8px;min-height:54px;border:0;border-bottom:1px solid #d4ded2}}
{s} .wb-nav-link strong{{font:600 14px/1.6 Arial,'Yu Gothic',sans-serif}}
{s} .wb-nav-link small,{s}[data-wb-layout=sidebar] .wb-nav-link small{{font:12px/1.6 Arial,'Yu Gothic',sans-serif;margin-top:3px}}
{s} .wb-nav-link-icon{{width:20px;min-width:20px}}
{s} .wb-nav-marker{{background:#e5ece1;border-radius:0;border-inline-start:2px solid #648569}}
{s} .wb-nav-foot{{padding:14px 0;border-top:1px solid #c3d1c2}}
{s} .wb-nav-disclosure{{min-height:50px;padding:12px 8px}}
{s} .wb-nav-dialog .wb-nav-link{{padding:12px 8px;min-height:54px}}
''')
id='warm-editorial-navigation';s=r(id);add('navigation',id,f'''
{s} .wb-navigation-frame{{background:#fff7e9;padding:8px 18px;border:0;border-block:3px double #b69b6e}}
{s} .wb-nav-brand{{padding:22px 0 20px;border-bottom:1px solid #d8c7a7}}
{s} .wb-nav-brand strong{{font:500 26px/1.4 Georgia,'Yu Mincho',serif}}
{s} .wb-nav-desktop,{s}[data-wb-layout=sidebar] .wb-nav-desktop{{padding:8px 0}}
{s} .wb-nav-list{{counter-reset:chapter;gap:0}}
{s} .wb-nav-list>li{{counter-increment:chapter}}
{s} .wb-nav-link{{display:grid;grid-template-columns:28px minmax(0,1fr);padding:16px 0;border:0;border-bottom:1px solid #e0d1b5;gap:6px 12px}}
{s} .wb-nav-link::before{{content:counter(chapter,decimal-leading-zero);grid-column:1;grid-row:1;font:italic 20px/1.5 Georgia,serif;color:#806b49}}
{s} .wb-nav-link-icon{{display:none}}
{s} .wb-nav-link-copy{{grid-column:2;grid-row:1}}
{s} .wb-nav-link strong{{font:600 17px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-nav-link small,{s}[data-wb-layout=sidebar] .wb-nav-link small{{font:12px/1.8 Arial,'Yu Gothic',sans-serif;margin-top:4px}}
{s} .wb-nav-badge{{grid-column:2}}
{s} .wb-nav-marker{{background:#f0e5cf;border-radius:0}}
{s} .wb-nav-foot{{padding:16px 0;border-top:1px solid #cdb890}}
{s} .wb-nav-dialog .wb-nav-link{{grid-template-columns:28px minmax(0,1fr);padding:16px 0}}
''')
id='folded-register-table';s=r(id);add('tables',id,f'''
{s} .wb-data-frame{{display:block;background:#fff7fa;border:1px solid #ccb2c2}}
{s} .wb-data-heading{{border:0;border-bottom:1px solid #d3bdcc;padding:22px 20px}}
{s} .wb-data-toolbar{{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;gap:12px;padding:16px 20px;margin:0 0 12px;position:relative;background:#ead7e2}}
{s} .wb-data-toolbar::after{{content:'';position:absolute;inset:100% 0 auto;width:auto;height:12px;background:linear-gradient(#b794ac,#c6a8bb);clip-path:polygon(0 0,100% 0,calc(100% - 12px) 100%,12px 100%);transform:none}}
{s} .wb-table-search{{flex:1 1 220px;max-width:400px}}
{s} .wb-data-selection{{min-width:0;flex:0 1 auto;width:auto;min-height:44px}}
{s} .wb-table-scroll{{border:0;border-inline:12px solid #ead7e2}}
{s} th{{background:#f0e1ea;border-bottom:2px solid #bea1b5}}
{s} td{{padding-block:16px}}
{s} .wb-data-status{{padding:14px 20px 0}}
{s} .wb-data-footer{{padding:14px 20px 20px;border-bottom:4px solid #c2a5b8}}
{s}:dir(rtl) .wb-data-toolbar::after{{background:linear-gradient(#b794ac,#c6a8bb);transform:none}}
''')
id='open-sheet-table';s=r(id);add('tables',id,f'''
{s} .wb-data-frame{{position:relative;isolation:isolate;padding:0 12px 12px;background:#f8f4e9;border:0}}
{s} .wb-data-frame::before,{s} .wb-data-frame::after{{content:'';position:absolute;pointer-events:none;width:34px;height:34px;border:0;z-index:-1}}
{s} .wb-data-frame::before{{inset:0 auto auto 0;border-block-start:2px solid #aa916b;border-inline-start:2px solid #aa916b}}
{s} .wb-data-frame::after{{inset:auto 0 0 auto;border-block-end:2px solid #aa916b;border-inline-end:2px solid #aa916b}}
{s} .wb-data-heading{{display:grid;grid-template-columns:minmax(0,1fr) auto;padding:26px 14px 20px;border:0}}
{s} .wb-data-heading h3{{font:500 30px/1.35 Georgia,'Yu Mincho',serif}}
{s} .wb-data-toolbar{{padding:14px;border-block:1px solid #cbb99a;background:none;gap:12px}}
{s} .wb-table-scroll{{border:0;margin-top:14px}}
{s} th{{background:#eee4cf;border:0;border-block:1px solid #b8a078;font:600 12px/1.7 Consolas,monospace}}
{s} td{{background:#fffbf1;padding-block:18px;border-bottom:1px solid #dbc9a8}}
{s} .wb-data-status,{s} .wb-data-footer{{padding-inline:14px;background:none;border:0}}
{s}:dir(rtl) .wb-data-frame::before{{left:auto;right:0}}{s}:dir(rtl) .wb-data-frame::after{{right:auto;left:0}}
''')
id='ribbon-register-table';s=r(id);add('tables',id,f'''
{s} .wb-data-frame{{display:block;background:#fcf5f8;padding:0 16px;border:0;border-inline-start:10px solid #bb97ac}}
{s} .wb-data-heading{{padding:24px 12px 18px;border:0}}
{s} .wb-data-toolbar{{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:12px;padding:14px 12px;margin:0;background:#ead8e2;border:0;border-block:1px solid #cdb3c2;position:relative}}
{s} .wb-data-toolbar::before,{s} .wb-data-toolbar::after{{display:none}}
{s} .wb-data-selection{{position:relative;margin:0;flex:0 1 auto;min-width:0;min-height:44px;padding:8px 14px;background:#e0c5d5;border:1px solid #ba94aa;border-radius:0}}
{s} .wb-data-selection::after{{content:'';position:absolute;inset:auto 8px -9px;width:18px;height:9px;background:#ae839b;clip-path:polygon(0 0,100% 0,100% 100%);pointer-events:none}}
{s} .wb-data-selection[hidden]{{visibility:hidden!important}}
{s} .wb-table-search{{flex:1 1 200px;max-width:400px}}
{s} .wb-table-scroll{{margin-top:16px;border:0}}
{s} th{{background:#e6cfdd;border:0;border-bottom:2px solid #b58ca5}}
{s} td{{padding-block:16px;border-bottom:1px solid #d4b9c9}}
{s} .wb-data-footer{{padding:18px 12px;border-block:1px solid #d4b9c9;background:none}}
''')
id='ceramic-register-table';s=r(id);add('tables',id,f'''
{s} .wb-data-frame{{background:#e8efec;border:1px solid #acc1b9;border-top:3px solid #f9fffc;border-bottom:5px solid #95afa4;border-radius:24px;padding:8px 12px 12px;overflow:hidden}}
{s} .wb-data-heading{{background:none;border:0;padding:22px 14px 18px}}
{s} .wb-data-toolbar{{padding:14px;background:#dce7e0;border:1px solid #aec4b7;border-radius:12px;gap:12px}}
{s} .wb-table-scroll{{margin-top:18px;border:1px solid #afc3b8;border-radius:12px}}
{s} th{{padding:16px;background:#d5e2d9;border:0;border-bottom:2px solid #a3bcad}}
{s} td{{padding:16px;background:#f4f8f2;border-bottom:1px solid #bacfc0}}
{s} .wb-row-actions-heading,{s} .wb-row-actions{{width:112px;min-width:112px;border-inline:0;padding:12px;border-radius:0;background:#e4ece1}}
{s} .wb-row-actions-heading{{border-top:0;border-bottom:2px solid #a3bcad}}
{s} tbody tr[data-row]:last-child .wb-row-actions{{border-bottom:0;border-radius:0}}
{s} .wb-row-actions>div{{gap:4px;flex-wrap:nowrap}}
{s} .wb-row-actions button{{border:1px solid #b0c5b5;border-radius:8px;background:#fbfff8}}
{s} .wb-data-status{{padding:14px 14px 0}}
{s} .wb-data-footer{{padding:14px;border:0;background:none}}
''')
id='soft-project-table';s=r(id);add('tables',id,f'''
{s} .wb-data-frame{{background:#fcf5fa;border:1px solid #d6bfd1;border-radius:12px;overflow:hidden}}
{s} .wb-data-heading{{padding:24px 20px 16px;border:0}}
{s} .wb-data-heading h3{{font:600 23px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .wb-data-toolbar{{padding:12px 20px 20px;gap:12px;border:0}}
{s} th{{font:600 12px/1.7 Arial,'Yu Gothic',sans-serif;background:#eadce7;padding-block:12px;border-bottom:1px solid #cbb1c5}}
{s} td{{padding-block:20px;background:#fffafd;border-bottom:1px solid #e1cfdb}}
{s} .wb-cell-badge{{border-radius:5px;padding:5px 8px}}
{s} .wb-cell-progress>span{{height:6px;border-radius:3px;background:#e6d5e0}}
{s} .wb-cell-progress i{{border-radius:3px;background:#99748e}}
{s} .wb-data-footer{{padding:16px 20px;border-top:1px solid #d6bfd1;font:13px/1.6 Arial,'Yu Gothic',sans-serif}}
''')
id='clear-grid-table';s=r(id);add('tables',id,f'''
{s} .wb-data-frame{{background:#f8faf4;border:1px solid #bdcbb8;border-radius:0}}
{s} .wb-data-heading{{padding:18px 16px;border-bottom:1px solid #bdcbb8}}
{s} .wb-data-heading h3{{font:600 20px/1.5 Arial,'Yu Gothic',sans-serif}}
{s} .wb-data-toolbar{{padding:12px 16px;gap:12px}}
{s} th{{padding:12px;font:600 12px/1.6 Arial,'Yu Gothic',sans-serif;background:#e6eddf;border-inline-end:1px solid #c0ceb9;border-block:1px solid #b6c5af}}
{s} td{{padding:12px;background:#fcfdf8;border-inline-end:1px solid #d3ddcc;border-bottom:1px solid #ccd8c4}}
{s} .wb-cell-badge{{padding:3px 6px;border-radius:0;border:1px solid #aec29f;background:#edf2e6}}
{s} .wb-row-actions button{{border-radius:0}}
{s} .wb-data-footer{{padding:12px 16px;border-top:1px solid #c0ceb9;font:13px/1.6 Arial,'Yu Gothic',sans-serif}}
''')
id='warm-library-table';s=r(id);add('tables',id,f'''
{s} .wb-data-frame{{background:#fff8e9;border:0;border-block:3px double #bca272}}
{s} .wb-data-heading{{padding:26px 22px 20px;border-bottom:1px solid #d8c39c}}
{s} .wb-data-heading h3{{font:500 27px/1.4 Georgia,'Yu Mincho',serif}}
{s} .wb-data-toolbar{{padding:14px 22px;border-bottom:1px solid #d8c39c}}
{s} th{{background:#eee1c8;font:600 12px/1.7 Georgia,'Yu Mincho',serif;border-bottom:1px solid #bba173;padding:14px 18px}}
{s} td{{padding:18px;background:#fffbf0;border-bottom:1px solid #decdae;font:14px/1.8 Georgia,'Yu Mincho',serif}}
{s} td[data-first-column] .wb-cell-text{{font:600 16px/1.6 Georgia,'Yu Mincho',serif}}
{s} .wb-cell-badge{{font:12px/1.7 Arial,'Yu Gothic',sans-serif;padding:3px 6px;border:1px solid #c9b288;border-radius:0;background:#f1e5cd}}
{s} .wb-data-footer{{padding:18px 22px;font:13px/1.7 Georgia,'Yu Mincho',serif;border-top:1px solid #ccb58c}}
''')
id='telescopic-stroke-loader';s='.sop-foundation.sop-'+id+'.sop-'+id
add('loaders',id,f'''
{s} .x-composition{{width:180px;height:180px}}
{s} .x-composition::before{{content:'';position:absolute;left:8px;top:38px;width:16px;height:104px;border:1px solid #a79dac;border-radius:3px;background:#37303c}}
{s} .x-composition i{{left:calc(20px + var(--i)*20px);top:calc(55px + var(--i)*5px);width:44px;height:calc(70px - var(--i)*10px);border:2px solid #ccbed1;border-inline-start:0;border-radius:0 3px 3px 0;background:#222029;transform:none;transform-origin:left center;translate:none;scale:none;animation:sop-refine-telescopic 3.6s cubic-bezier(.45,0,.55,1) infinite;animation-delay:0;z-index:calc(6 - var(--i))}}
@keyframes sop-refine-telescopic{{0%,100%{{translate:calc(var(--i)*-14px) 0}}50%{{translate:0 0}}}}
''')
describe('B022',{
'clear-line-navigation':('navigation','コンパクトな側線と短い説明で移動先を読むナビゲーション。44px以上の操作を保ち、区切りと現在地を細い罫に揃える。'),
'warm-editorial-navigation':('navigation','章番号と見出しで読む編集目次。アイコンの代わりに実項目の連番を置き、短い説明と章の順序で移動先を選ぶ。'),
'folded-register-table':('tables','検索帯から12pxの折り返しでデータ面へ続く台帳。大きな空の折り面を外し、操作帯と表を薄い紙の前後関係で結ぶ。'),
'open-sheet-table':('tables','対角の支えに広げた一枚の記録紙。開いた外縁と活字の見出し、列の罫線が情報を支え、装飾をデータの余白へ分ける。'),
'ribbon-register-table':('tables','綴じ帯と選択枚数の短い札を持つ台帳。表は連続して読み、選択中の操作だけを小さな折り返し札へ集める。'),
'ceramic-register-table':('tables','薄い縁と凹面の操作帯を持つ陶器の記録面。表、操作列、下部を一つの皿へ収め、材質の厚みを小さく揃える。'),
'soft-project-table':('tables','状態と進捗をまとめて追うプロジェクト表。広い行間、短い状態札、細い進捗線により案件を見比べる。'),
'clear-grid-table':('tables','列境界を明確にした密度の高いデータ表。細い縦罫とコンパクトな行で値を照合し、選択と操作は44pxの領域を維持する。'),
'warm-library-table':('tables','書名を見出しの活字として読む蔵書台帳。書名と補足の階層、細い紙罫、独立した管理札で情報を分類する。'),
 'telescopic-stroke-loader':('loaders','固定した基部から六段の筒が伸び縮みするローダー。前段が次段を包み、共通の伸縮位相でつながりを保つ。')},'B022 目次・記録面・伸縮機構')
