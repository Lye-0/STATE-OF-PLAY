"""One-shot B019 follow-up after independent review release."""
from pathlib import Path
import json
w=Path('docs/design-refinement-225')
def s(id):return '.sop-wb.sop-'+id+'.sop-'+id
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n/* B019 independent review follow-up */\n'+css.rstrip()+'\n')
id='ledger-command';a=s(id);add('commands',id,f'''{a} .wb-command-option,{a} .wb-command-option[aria-selected=true]{{padding:16px 8px 16px 32px;padding-inline:32px 8px;border:0;border-bottom:1px solid #cbbb9b;border-inline-start:2px solid #c4b08b}}
@media(forced-colors:none){{{a}{{--muted:#62513e}}{a} .wb-command-option::before{{color:#62513e}}{a} .wb-command-option[aria-selected=true]{{border-inline-start-color:#926c42}}}}''')
id='open-shelf-search';a=s(id);add('searchbars',id,f'@media(forced-colors:none){{{a}{{--muted:#66523d}}}}')
id='radar-window-search';a=s(id);add('searchbars',id,f'''@media(forced-colors:none){{
{a} .wb-search-shell{{padding:22px 16px;background:#edf3f5;border:0}}
{a} .wb-search-results{{display:grid;grid-template-columns:76px minmax(0,1fr);gap:16px;margin-top:26px;padding:0;border:0}}
{a} .wb-results-caption{{display:flex;flex-direction:column;justify-content:start;align-items:center;gap:16px;padding:16px 0;border:0;border-top:2px solid #88a8b8;margin:0;background:#dce8ee;font:11px/1.6 Consolas,monospace}}
{a} .wb-search-count{{width:64px;min-width:64px;height:64px;background:#f0f6f7;border:1px solid #8cabb9;font-size:16px;box-shadow:inset 0 0 0 5px #edf3f5,inset 0 0 0 6px #9db8c5;position:relative}}
{a} .wb-search-count::after{{content:'';position:absolute;inset:9px;border:1px dashed #8cabb9;border-radius:50%;pointer-events:none}}
{a} .wb-results-list{{padding:0 4px 0 0;margin:0;border:0;max-height:420px}}
{a} .wb-results-list [role=option],{a}:dir(rtl) .wb-results-list [role=option]{{padding:18px 8px 18px 28px;padding-inline:28px 8px;margin:0 0 12px;border:0;border-inline-start:1px solid #aac2ce;background:#f8fbfc;box-shadow:0 2px 0 #c3d6de}}
{a} .wb-results-list [aria-selected=true]{{background:#d8e8ef}}
{a} .wb-results-list [role=option]::before{{inset-inline-start:5px;width:14px;height:14px;top:24px}}
{a} .wb-result-copy strong{{font-size:16px}}
{a} .wb-search-message{{grid-column:1/-1}}
@container(max-width:300px){{{a} .wb-search-results{{grid-template-columns:52px minmax(0,1fr);gap:10px}}{a} .wb-results-caption{{font-size:11px;padding:12px 0}}{a} .wb-search-count{{width:44px;min-width:44px;height:44px;font-size:13px;box-shadow:inset 0 0 0 3px #edf3f5,inset 0 0 0 4px #9db8c5}}{a} .wb-search-count::after{{inset:6px}}{a} .wb-results-list [role=option],{a}:dir(rtl) .wb-results-list [role=option]{{padding-inline:22px 6px;gap:8px 4px}}{a} .wb-results-list [role=option]::before{{width:12px;height:12px;inset-inline-start:4px}}}}
}}''')
id='slotted-mail-search';a=s(id);add('searchbars',id,f'''@media(forced-colors:none){{
{a} .wb-search-field{{border:0;border-inline:1px solid #a6906d;border-top:9px solid #8f7a5e;background:#fffaf0;box-shadow:inset 0 7px 0 #d2c1a2,inset 0 10px 4px #8a765433!important;padding-top:14px}}
{a} .wb-search-field::before{{inset:-10px -3px auto;height:7px;background:linear-gradient(#eee0c4 0 2px,#a88f67 3px 5px,#715d43 6px);border:0;box-shadow:0 2px 0 #62513b}}
{a} .wb-search-results{{padding:0;margin-top:26px;background:none}}
{a} .wb-results-caption{{margin-bottom:16px}}
{a} .wb-results-list{{padding:0 2px 8px;max-height:480px}}
{a} .wb-results-list [role=option],{a} .wb-results-list [aria-selected=true]{{padding:34px 12px 16px;padding-inline:12px;border:1px solid #cab794;border-bottom:3px solid #b69d73;border-inline-start-width:1px;margin-bottom:18px;background:#fffaf0;box-shadow:0 4px 0 #e2d3b8;isolation:isolate}}
{a} .wb-results-list [role=option]::before{{content:'';position:absolute;inset:0 0 auto;height:22px;width:auto;border:0;border-radius:0;background:linear-gradient(#d7c5a4,#f1e5cf);clip-path:polygon(0 0,100% 0,100% 5px,50% 100%,0 5px);pointer-events:none;z-index:-1}}
{a} .wb-results-list [role=option]::after{{content:'';position:absolute;inset:0 12px auto;height:2px;background:#aa9066;pointer-events:none}}
{a} .wb-results-list [aria-selected=true]{{background:#f0e4cc;border-color:#a78c60}}
{a} .wb-result-meta{{padding-top:10px;border-top:1px dashed #b9a27a}}
}}''')
id='caption-line-search';a=s(id);add('searchbars',id,f'''@media(forced-colors:none){{
{a}{{--muted:#65553e}}
{a} .wb-search-shell{{padding:24px 18px;background:#faf7ef}}
{a} .wb-results-caption{{border:0;border-block:3px double #ab9d83;padding:12px 0;margin-bottom:20px}}
{a} .wb-results-list{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px 18px;align-items:start;max-height:520px;padding:0 2px 8px;counter-reset:caption}}
{a} .wb-results-list [role=option],{a}:dir(rtl) .wb-results-list [role=option]{{display:grid;grid-template-columns:28px minmax(0,1fr);grid-template-rows:auto auto auto;gap:12px 9px;padding:16px 0 20px;padding-inline:0;margin:0;border:0;border-top:1px solid #aa997b;background:transparent;align-content:start;min-height:200px}}
{a} .wb-results-list [role=option]::before,{a}:dir(rtl) .wb-results-list [role=option]::before{{position:static;inset:auto;grid-column:1;grid-row:1;width:auto;height:auto;color:#65553e;font:italic 18px/1.5 Georgia,serif}}
{a} .wb-result-copy{{display:contents}}
{a} .wb-result-copy strong{{grid-column:2;grid-row:1;font:600 22px/1.45 Georgia,'Yu Mincho',serif}}
{a} .wb-result-copy small{{grid-column:2;grid-row:2;margin:0;font:13px/1.8 Georgia,'Yu Mincho',serif}}
{a} .wb-result-meta{{grid-column:1;grid-row:2/4;padding:6px 0 0;border:0;border-top:1px solid #aa997b;align-self:start;font-size:10px;overflow-wrap:anywhere}}
{a} .wb-result-enter{{grid-column:2;grid-row:3;justify-self:start;align-self:end;border-bottom:1px solid #aa997b;padding-bottom:5px}}
{a} .wb-results-list [aria-selected=true]{{background:#eae4d6}}
@container(max-width:350px){{{a} .wb-results-list{{grid-template-columns:minmax(0,1fr);gap:22px}}{a} .wb-results-list [role=option]{{grid-template-columns:40px minmax(0,1fr);min-height:0;gap:12px 16px}}{a} .wb-result-copy strong{{font-size:24px}}{a} .wb-results-list [role=option]::before{{font-size:24px}}}}
}}''')
for id in ['soft-resource-search','clear-line-search','warm-library-search']:
 a=s(id);add('searchbars',id,f'''{a} .wb-label,{a} .wb-search-message{{max-width:100%;min-width:0;white-space:normal;overflow-wrap:anywhere;word-break:normal}}''')
id='optical-command';a=s(id);add('commands',id,f'''@media(forced-colors:none){{
{a} .wb-command-launcher{{display:grid;grid-template-columns:56px minmax(0,1fr);gap:18px;padding:24px 18px;background:#eaf2f5;border:0;border-inline-start:6px solid #849eab}}
{a} .wb-command-symbol{{grid-column:1;grid-row:1;width:56px;height:56px;margin:0;align-self:start;border:2px solid #7895a6;border-radius:50%;background:#d5e4ec;box-shadow:inset 0 0 0 5px #edf5f8,inset 0 0 0 6px #9cb7c7}}
{a} .wb-launch-copy{{grid-column:2;grid-row:1;min-width:0}}
{a} .wb-launch-copy strong{{font-size:24px}}
{a} .wb-command-launch{{grid-column:1/3;margin:0}}
{a} .wb-command-dialog{{width:min(700px,calc(100vw - 32px));background:#c7d9e4;border:1px solid #88a5b8;padding:0}}
{a} .wb-command-frame{{display:grid;grid-template-columns:190px minmax(0,1fr);grid-template-rows:auto auto auto auto 1fr;grid-template-areas:'head head' 'path list' 'query list' 'status list' 'foot list';height:auto;max-height:none;background:#dce9f0;gap:0;position:relative}}
{a} .wb-command-top{{grid-area:head;padding:20px;border-bottom:1px solid #8faab9;background:#eef5f8;margin:0}}
{a} .wb-command-path{{grid-area:path;padding:14px 12px 0;font-size:12px}}
{a} .wb-command-entry{{grid-area:query;display:grid;grid-template-columns:22px minmax(0,1fr);gap:10px;margin:18px 12px;padding:14px 10px;border:1px solid #88a5b8;background:#f5fafc;align-self:start;min-height:100px;box-shadow:inset 0 3px #bed0dc}}
{a} .wb-command-entry>kbd{{grid-column:2;justify-self:start}}
{a} .wb-command-input{{width:100%;min-width:0;font-size:16px}}
{a} .wb-command-list{{grid-area:list;min-height:80px;max-height:min(60dvh,520px);overflow:auto;margin:18px 18px 18px 0;padding:14px;background:#f4f8fa;border:1px solid #a0b8c6;box-shadow:inset 0 0 0 5px #e0ebf1}}
{a} .wb-command-option{{margin:0 0 12px;padding:16px 12px;grid-template-columns:24px minmax(0,1fr);border:1px solid transparent;background:#edf3f6;gap:10px 12px}}
{a} .wb-command-copy{{grid-column:2;grid-row:1;min-width:0}}
{a} .wb-command-option>kbd,{a} .wb-command-next{{grid-column:2;grid-row:2;justify-self:start}}
{a} .wb-command-option[aria-selected=true]{{padding:16px 12px;background:#dceaf1;border:1px solid #809eaf}}
{a} .wb-command-status{{grid-area:status;padding:0 14px;overflow-wrap:anywhere}}
{a} .wb-command-foot{{grid-area:foot;display:flex;flex-direction:column;align-items:start;justify-content:start;padding:12px 14px;gap:12px;border:0;font-size:12px}}
{a} .wb-command-foot output{{margin:0;border-top:1px solid #8faab9;padding-top:10px}}
{a}:dir(rtl) .wb-command-list{{margin-inline:0 18px}}
@media(max-width:520px){{{a} .wb-command-frame{{display:block}}{a} .wb-command-entry{{grid-template-columns:22px minmax(0,1fr) auto;min-height:76px;margin:16px 12px}}{a} .wb-command-entry>kbd{{grid-column:3;grid-row:1}}{a} .wb-command-list,{a}:dir(rtl) .wb-command-list{{margin:16px 12px;max-height:min(46dvh,420px);padding:12px}}{a} .wb-command-foot{{flex-direction:row;flex-wrap:wrap;align-items:center;padding:14px 12px}}{a} .wb-command-foot output{{padding:0;border:0}}}}
}}''')
id='ledger-command';a=s(id);add('commands',id,f'''@media(forced-colors:none){{
{a} .wb-command-dialog{{border-inline-start:14px solid #94734a;background:#fbf4e6;box-shadow:inset 5px 0 #c8b18a,0 24px 80px #0005}}
{a} .wb-command-list{{padding:12px 18px 24px 28px;background:linear-gradient(90deg,#d6c3a0 0 1px,transparent 1px) 18px 0/1px 100% no-repeat}}
{a} .wb-command-group{{font:600 12px/1.6 Arial,'Yu Gothic',sans-serif;letter-spacing:.06em;padding:7px 12px;margin:12px 0 10px;width:max-content;max-width:100%;background:#e1ceaa;border:0;border-bottom:2px solid #a78b5e;overflow-wrap:anywhere}}
{a} .wb-command-option,{a} .wb-command-option[aria-selected=true]{{grid-template-columns:24px minmax(0,.9fr) minmax(0,1.1fr) auto;gap:10px;padding:18px 8px 18px 32px;padding-inline:32px 8px;min-height:98px;align-items:start}}
{a} .wb-command-copy{{display:contents}}
{a} .wb-command-copy strong{{grid-column:2;grid-row:1;min-width:0;font:600 18px/1.5 Georgia,'Yu Mincho',serif}}
{a} .wb-command-copy small{{grid-column:3;grid-row:1;margin:0;min-width:0;padding-inline-start:12px;border-inline-start:1px solid #c8b591;font:13px/1.8 Arial,'Yu Gothic',sans-serif}}
{a} .wb-command-icon{{grid-column:1;grid-row:1}}
{a} .wb-command-option>kbd,{a} .wb-command-next{{grid-column:4;grid-row:1;justify-self:end;align-self:start;max-width:70px}}
{a}:dir(rtl) .wb-command-list{{padding-inline:28px 18px;background-position:right 18px top}}
@media(max-width:520px){{{a} .wb-command-list{{padding-inline:22px 12px}}{a} .wb-command-option,{a} .wb-command-option[aria-selected=true]{{grid-template-columns:24px minmax(0,1fr);gap:12px;padding-inline:28px 6px}}{a} .wb-command-copy strong{{grid-column:2;grid-row:1}}{a} .wb-command-copy small{{grid-column:2;grid-row:2;padding:10px 0 0;border:0;border-top:1px solid #c8b591}}{a} .wb-command-option>kbd,{a} .wb-command-next{{grid-column:2;grid-row:3;justify-self:start;max-width:none}}{a}:dir(rtl) .wb-command-option{{padding-inline:28px 6px}}}}
}}''')
id='index-drawer-command';a=s(id);add('commands',id,f'''@media(forced-colors:none){{
{a} .wb-command-dialog{{padding:0;border:0;border-radius:0;background:transparent;box-shadow:0 24px 70px #0005}}
{a} .wb-command-frame{{position:relative;padding:0 16px;background:#bfa985;border:0;border-top:12px solid #ac9167;box-shadow:inset 7px 0 #e0cdb0,inset -7px 0 #947954}}
{a} .wb-command-top{{padding:16px 8px 20px;border:0;background:#d5c09c;margin:0}}
{a} .wb-command-top::before,{a} .wb-command-top::after{{display:none}}
{a} .wb-command-entry{{position:relative;z-index:2;margin:0;padding:12px;background:#fffaf0;border:1px solid #b59a70;border-bottom:4px solid #b59a70;box-shadow:0 7px 8px #65452126}}
{a} .wb-command-path{{background:#e0ccaa;padding:12px 8px}}
{a} .wb-command-list{{position:relative;margin:0;padding:20px 10px 30px;background:#e7dac0;border:0;border-inline:1px solid #a38c67;box-shadow:inset 0 10px 10px #73553125;max-height:min(48dvh,440px)}}
{a} .wb-command-group{{position:relative;z-index:1;display:table;margin:14px 0 0;padding:8px 12px;border:1px solid #bca37b;border-bottom:0;border-radius:6px 6px 0 0;background:#f8edda;box-shadow:0 -3px 0 #d0bc96;font-size:12px;max-width:100%;overflow-wrap:anywhere}}
{a} .wb-command-option,{a} .wb-command-option[aria-selected=true]{{position:relative;margin:0 0 10px;padding:18px 12px;border:1px solid #c5ae87;border-inline-start-width:1px;border-bottom:3px solid #ad956e;background:#fffbf1;box-shadow:0 4px 0 #d0bd98;gap:10px}}
{a} .wb-command-option[aria-selected=true]{{background:#eddfc4;border-color:#987746}}
{a} .wb-command-foot{{position:relative;z-index:3;margin:0 -16px;padding:34px 18px 16px;background:linear-gradient(#c9b089,#b79a6e);border:1px solid #8e7046;border-top:5px solid #e2cdaa;box-shadow:0 -8px 12px #60462233;color:#493c2b}}
{a} .wb-command-foot::before{{content:'';position:absolute;left:calc(50% - 38px);top:8px;width:76px;height:14px;border:2px solid #72583a;border-top:0;border-radius:0 0 6px 6px;background:#e1caa3;box-shadow:0 2px #9e7e50;pointer-events:none}}
{a} .wb-command-foot :is(kbd,output,span){{color:#493c2b}}
{a} .wb-command-status{{background:#f5e8cf;padding-inline:12px;margin:0}}
{a} .wb-command-launcher{{padding-bottom:22px;border-inline:8px solid #b59a70;box-shadow:inset 0 8px #e9d8b9;border-bottom:18px solid #a58a60}}
}}''')

updates={
'radar-window-search':'実件数を読む計数盤と候補の測定面を分ける検索。左の固定した計数列と右の照準付き候補札で、入力後の対象数と選択位置を同時に追える。',
'slotted-mail-search':'検索の投函口と折返し付きの返答紙を組む検索欄。口の上下の厚みと各紙の折れた上端を分け、検索する面と届いた候補の関係を示す。',
'caption-line-search':'候補を編集索引の紙面に組む検索。余白の番号・分類欄と見出し・注記を分け、通常幅では二列、狭幅では同じ情報単位の一列で読む。'}
updates.update({
'optical-command':'検索する計器面と候補を読むフォーカス面を分けたコマンドパレット。通常幅では二面を横に、狭幅では縦に接続し、入力と選択位置を安定した照準で結ぶ。',
'ledger-command':'名称・説明・キーを台帳の別欄へ記録するコマンドパレット。綴じ面から実連番を追い、狭幅では各記録の欄を順序通りに折りたたむ。',
'index-drawer-command':'側壁の奥に索引紙を重ね、手前の取手付き前板で受けるコマンドパレット。検索口・紙札・引出しの前面を異なる深さへ分け、文字と操作位置は固定する。'
})
for id,new in updates.items():
 d=Path('src/parts')/('commands' if id.endswith('command') else 'searchbars')/id;p=d/'meta.json';m=json.loads(p.read_text());old=m['description'];m['description']=new;p.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 for p in [d/'prompt.md',d/'usage.md',*list((d/'react').glob('*.tsx'))]:p.write_text(p.read_text().replace(old,new))
with (w/'batches/B019/design.md').open('a') as f:f.write('\n独立review差戻し：592計数盤/照準候補の別列、596投函口/折返し紙、601編集索引の余白/本文と二列紙面へ構造化。599/601/615の選択時補助文字を濃くし、615のselected border/paddingを揃えてhoverの文字移動を防いだ。\n')
print('B019 review follow-up applied')
