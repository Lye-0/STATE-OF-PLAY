import json
from pathlib import Path
w=Path('docs/design-refinement-225');b=w/'batches/B019'
def r(id):return '.sop-wb.sop-'+id+'.sop-'+id
def add(cat,id,css):
 p=Path('src/parts')/cat/id/'styles.css';p.write_text(p.read_text()+'\n@media(forced-colors:none){\n'+css+'\n}\n')
id='radar-window-search';s=r(id);add('searchbars',id,f'''
{s} .wb-search-shell{{padding:24px 18px;border:0;background:#edf3f5}}
{s} .wb-search-field{{border:1px solid #9bb5c3;border-radius:3px;background:#f8fbfb;box-shadow:inset 0 3px #d9e6eb!important}}
{s} .wb-search-emblem{{position:relative;width:34px;min-width:34px;height:34px;border:1px solid #a3bdca;border-radius:50%;background:radial-gradient(circle,transparent 0 8px,#b7cdd5 8px 9px,transparent 9px)}}
{s} .wb-search-emblem svg{{width:16px;height:16px}}
{s} .wb-search-submit{{background:none;border-radius:0;border-inline-start:1px solid #b4cbd5}}
{s} .wb-results-caption{{align-items:center;border-block:1px solid #b8cdd6;padding:8px 0;margin-bottom:12px}}
{s} .wb-search-count{{display:grid;place-items:center;width:56px;min-width:56px;height:56px;border:1px solid #8caebb;border-radius:50%;box-shadow:inset 0 0 0 4px #edf3f5,inset 0 0 0 5px #b4cbd4;color:#375969;font-size:13px;background:#e2edf1}}
{s} .wb-results-list{{margin:0;padding:0;border:0}}
{s} .wb-results-list [role=option]{{padding:18px 12px 18px 32px;border-bottom:1px solid #bdcfd6}}
{s} .wb-results-list [role=option]::before{{inset-inline-start:6px;top:calc(50% - 8px);width:16px;height:16px;border:1px solid #91aebc;border-radius:50%;background:linear-gradient(#799cad,#799cad) center/1px 100% no-repeat,linear-gradient(90deg,#799cad,#799cad) center/100% 1px no-repeat}}
{s} .wb-results-list [aria-selected=true]::before{{border-color:#3b667a;background:radial-gradient(circle,#3b667a 0 2px,transparent 3px),linear-gradient(#799cad,#799cad) center/1px 100% no-repeat,linear-gradient(90deg,#799cad,#799cad) center/100% 1px no-repeat}}
{s}:dir(rtl) .wb-results-list [role=option]{{padding-inline:32px 12px}}
''')
id='slotted-mail-search';s=r(id);add('searchbars',id,f'''
{s} .wb-search-shell{{padding:24px 18px;background:#f4efe5;border:0}}
{s} .wb-search-field{{position:relative;border:1px solid #b8aa8e;border-top:8px solid #aa9778;border-radius:0;background:#fffbf1;padding:8px 8px 3px;box-shadow:inset 0 6px 0 #ded2bc!important}}
{s} .wb-search-field::before{{content:'';position:absolute;inset:-8px -1px auto;height:3px;background:#d8c7a9;border-top:1px solid #f2e6cf;pointer-events:none}}
{s} .wb-search-submit{{background:#e6d8bd;border-radius:0}}
{s} .wb-search-filters{{gap:8px;padding-top:12px;margin-top:0;border-top:1px solid #c7b492}}
{s} .wb-search-filters button{{border:0;border-bottom:1px solid #b8a17b;background:none}}
{s} .wb-search-filters [aria-pressed=true]{{background:#e9dcc3;border-bottom:2px solid #957650}}
{s} .wb-search-results{{margin-top:20px;padding-top:0;border:0}}
{s} .wb-results-list [role=option]{{padding:16px 12px;margin-bottom:10px;background:#fffaf0;border:1px solid #d0bea0;border-bottom:3px solid #c5b08c;box-shadow:none}}
{s} .wb-results-list [aria-selected=true]{{background:#f0e4cc;border-inline-start:3px solid #9c7c50;padding-inline-start:10px}}
{s} .wb-result-meta{{border-top:1px dashed #cbb997;padding-top:7px}}
''')
id='open-shelf-search';s=r(id);add('searchbars',id,f'''
{s} .wb-search-shell{{padding:24px 18px;background:#f6f0e5;border:0}}
{s} .wb-search-field{{border:0;border-bottom:5px solid #b49870;background:#fffcf4;padding:4px 8px 0}}
{s} .wb-search-submit{{border-radius:0;background:#ece0c9}}
{s} .wb-results-caption{{border:0;padding:0 0 10px;border-bottom:1px solid #cab89b}}
{s} .wb-results-list{{padding-inline:8px;border-inline:2px solid #cab390}}
{s} .wb-results-list [role=option]{{padding:20px 10px 18px;min-height:104px;border:0;border-bottom:5px solid #b79a73;background:#fffaf0;box-shadow:0 3px #e0cfb0;margin-bottom:17px}}
{s} .wb-results-list [role=option]::before{{content:'';position:absolute;inset:auto 4px -10px;height:5px;border-inline:4px solid #977d57;pointer-events:none}}
{s} .wb-results-list [aria-selected=true]{{background:#eadfc9}}
{s} .wb-result-copy strong{{font:600 18px/1.55 Georgia,'Yu Mincho',serif}}
''')
id='caption-line-search';s=r(id);add('searchbars',id,f'''
{s} .wb-search-shell{{padding:24px 18px;background:#f8f5ee;border:0;border-top:3px double #ab9d83}}
{s} .wb-label{{font:600 22px/1.4 Georgia,'Yu Mincho',serif;margin-bottom:14px}}
{s} .wb-search-field{{background:none;border:0;border-block:1px solid #c4b79e;padding:4px 0}}
{s} .wb-search-input{{font:18px/1.6 Georgia,'Yu Mincho',serif}}
{s} .wb-search-submit{{border-radius:0;border:0;background:none;border-inline-start:1px solid #c4b79e}}
{s} .wb-search-filters{{gap:8px 18px;margin-top:12px}}
{s} .wb-search-filters button{{border:0;border-bottom:1px solid transparent;padding:8px 0;background:none;font:13px/1.6 Georgia,'Yu Mincho',serif}}
{s} .wb-search-filters [aria-pressed=true]{{background:none;border-bottom-color:#826d4a}}
{s} .wb-results-list{{counter-reset:caption}}
{s} .wb-results-list [role=option]{{counter-increment:caption;padding:18px 8px 18px 28px;border:0;border-top:1px solid #c9bca3;background:none;grid-template-columns:minmax(0,1fr) auto;gap:8px}}
{s} .wb-results-list [role=option]::before{{content:counter(caption,decimal-leading-zero);position:absolute;left:0;top:22px;font:italic 11px/1.5 Georgia,serif;color:#79694f}}
{s} .wb-result-copy strong{{font:600 21px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-result-copy small{{font:13px/1.8 Georgia,'Yu Mincho',serif}}
{s} .wb-result-meta{{border:0;border-inline-start:1px solid #bdab8b;padding-inline-start:9px;font:11px/1.6 Consolas,monospace}}
{s} .wb-results-list [aria-selected=true]{{background:#eae4d6}}
{s}:dir(rtl) .wb-results-list [role=option]{{padding-inline:28px 8px}}
{s}:dir(rtl) .wb-results-list [role=option]::before{{left:auto;right:0}}
''')
id='soft-resource-search';s=r(id);add('searchbars',id,f'''
{s} .wb-search-shell{{padding:22px 18px;background:#fbf5fa;border:1px solid #d9c9d4;border-radius:12px}}
{s} .wb-search-field{{background:#fff;border:1px solid #cdb8c8;border-radius:8px}}
{s} .wb-search-submit{{border-radius:6px;min-height:44px}}
{s} .wb-search-filters{{gap:6px;flex-wrap:wrap}}
{s} .wb-search-filters button{{min-height:36px;padding:6px 10px;border-radius:16px;font-size:12px}}
{s} .wb-search-results{{padding:14px 0 0;margin-top:14px;background:none;border:0;border-top:1px solid #d8c7d3;border-radius:0}}
{s} .wb-results-list [role=option]{{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;padding:14px 10px;min-height:72px;background:#fffafd;border:1px solid #e3d6df;border-radius:7px;margin-bottom:8px}}
{s} .wb-result-copy strong{{font-size:15px;line-height:1.6}}
{s} .wb-result-copy small{{font-size:12px;line-height:1.7;display:block}}
{s} .wb-result-meta{{grid-column:1;grid-row:2;justify-self:start;font:11px/1.6 Consolas,monospace;border:1px solid #d2bfcb;border-radius:4px;padding:2px 6px;white-space:normal;overflow-wrap:anywhere}}
{s} .wb-result-enter{{grid-column:2;grid-row:1/3}}
{s} .wb-results-list [aria-selected=true]{{background:#eee0eb;border-color:#b896ae}}
''')
id='clear-line-search';s=r(id);add('searchbars',id,f'''
{s} .wb-search-shell{{padding:20px 16px;border:0;border-top:2px solid #96b3a1;background:#f3f7f2}}
{s} .wb-search-field{{border:0;border-bottom:1px solid #91ae9b;background:none;border-radius:0}}
{s} .wb-search-submit{{border-radius:0;background:none;border-inline-start:1px solid #b5cabb}}
{s} .wb-search-filters{{display:flex;flex-wrap:wrap;gap:4px 14px;border-bottom:1px solid #bed0c1;padding-bottom:8px}}
{s} .wb-search-filters button{{border:0;border-bottom:2px solid transparent;border-radius:0;background:none;min-height:36px;padding:6px 0;font-size:12px}}
{s} .wb-search-filters [aria-pressed=true]{{border-bottom-color:#53775f;background:none}}
{s} .wb-search-results{{padding:12px 0 0;margin-top:0;border:0;background:none;border-radius:0}}
{s} .wb-results-list [role=option]{{min-height:64px;padding:12px 0;border:0;border-bottom:1px solid #c1d2c4;border-radius:0;background:none;gap:6px 10px}}
{s} .wb-result-copy strong{{font-size:15px}}
{s} .wb-result-copy small{{font-size:12px;line-height:1.7}}
{s} .wb-result-meta{{font-size:11px;white-space:normal;overflow-wrap:anywhere}}
{s} .wb-results-list [aria-selected=true]{{background:#dfeade;box-shadow:inset 2px 0 #6d9478}}
''')
id='warm-library-search';s=r(id);add('searchbars',id,f'''
{s} .wb-search-shell{{padding:24px 18px;background:#fbf5e7;border:0;border-block:3px double #c8b38b;border-radius:0}}
{s} .wb-label{{font:600 21px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-search-field{{background:#fffdf6;border:1px solid #cbb78e;border-radius:0}}
{s} .wb-search-input{{font:16px/1.7 Georgia,'Yu Mincho',serif}}
{s} .wb-search-submit{{border-radius:0;background:#e8dbbc}}
{s} .wb-search-results{{border:0;border-top:1px solid #d2c29e;border-radius:0;background:none;padding:16px 0 0;margin-top:18px}}
{s} .wb-results-list [role=option]{{min-height:94px;padding:16px 10px 16px 18px;border:0;border-bottom:1px solid #d2c09a;border-inline-start:3px solid #c2a77b;border-radius:0;background:none;margin-bottom:8px}}
{s} .wb-result-copy strong{{font:600 18px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-result-copy small{{font:13px/1.8 Georgia,'Yu Mincho',serif}}
{s} .wb-result-meta{{font:11px/1.6 Consolas,monospace;white-space:normal;overflow-wrap:anywhere}}
{s} .wb-results-list [aria-selected=true]{{background:#efe3c9;border-inline-start-color:#8e7042}}
''')
id='optical-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{position:relative;padding:26px 22px;border:1px solid #b9c6d1;background:#edf2f6;border-radius:24px 4px 24px 4px}}
{s} .wb-command-symbol{{position:relative;width:74px;height:74px;border:1px solid #809eaf;border-radius:50%;background:radial-gradient(circle,transparent 0 24px,#adc3cf 24px 25px,transparent 25px);box-shadow:inset 0 0 0 6px #e0eaf0}}
{s} .wb-command-symbol::before{{content:'';position:absolute;inset:12px;border:1px solid #829fae;border-radius:50%;transform:rotateX(35deg);pointer-events:none}}
{s} .wb-command-launch{{border:1px solid #9bb3c0;border-radius:0;background:#f7fbfc;box-shadow:inset 0 3px #d3e1e8}}
{s} .wb-command-dialog{{border-radius:20px 4px 20px 4px;border:1px solid #a8bdca}}
{s} .wb-command-entry{{margin:0 18px;padding:12px 10px;background:#f9fcfd;border:1px solid #a7bdca;border-bottom:4px solid #a7bdca;border-radius:0}}
{s} .wb-command-list{{padding:18px}}
{s} .wb-command-option{{padding:16px 12px 16px 40px;grid-template-columns:minmax(0,1fr) auto;gap:8px;border-bottom:1px solid #bfd0d9}}
{s} .wb-command-icon{{position:absolute;left:6px;top:20px;width:24px;height:24px;border:1px solid #9eb6c3;border-radius:50%;background:#e3edf2}}
{s} .wb-command-icon svg{{width:14px;height:14px}}
{s} .wb-command-copy{{grid-column:1;grid-row:1/3}}
{s} .wb-command-option[aria-selected=true]{{background:#dce9f0}}
{s} .wb-command-option[aria-selected=true] .wb-command-icon{{outline:1px solid #5e8499;outline-offset:3px}}
{s}:dir(rtl) .wb-command-option{{padding-inline:40px 12px}}
{s}:dir(rtl) .wb-command-icon{{left:auto;right:6px}}
''')
id='ledger-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{padding:28px 22px;background:#f9f1e2;border:0;border-inline-start:4px solid #b59a6c;box-shadow:inset 12px 0 #ede0c6}}
{s} .wb-command-symbol{{width:40px;height:40px;border:0;border-bottom:3px double #b59969;background:none;border-radius:0}}
{s} .wb-command-launch{{border:0;border-block:3px double #b59969;background:#fffbf1;border-radius:0}}
{s} .wb-command-dialog{{border:0;border-inline-start:8px solid #b99e70;border-radius:0;background:#fcf6e9}}
{s} .wb-command-top{{border-bottom:3px double #c4b08c;margin-inline:18px;padding-inline:0}}
{s} .wb-command-entry{{background:#fffcf4;border:0;border-bottom:1px solid #c6b28e;padding:12px 18px}}
{s} .wb-command-list{{padding:12px 18px;counter-reset:ledger}}
{s} .wb-command-group{{font:italic 16px/1.5 Georgia,serif;padding:16px 0 8px}}
{s} .wb-command-option{{counter-increment:ledger;padding:16px 8px 16px 32px;grid-template-columns:24px minmax(0,1fr) auto;gap:8px;border-bottom:1px solid #cbbb9b;background:none}}
{s} .wb-command-option::before{{content:counter(ledger,decimal-leading-zero);display:block;position:absolute;left:0;top:19px;color:#7e6949;font:11px/1.6 Consolas,monospace;background:none;inset-inline-end:auto;width:auto;height:auto}}
{s} .wb-command-copy strong{{font:600 19px/1.5 Georgia,'Yu Mincho',serif}}
{s} .wb-command-icon{{width:24px;height:24px}}
{s} .wb-command-option[aria-selected=true]{{background:#eee1c9}}
{s}:dir(rtl) .wb-command-option{{padding-inline:32px 8px}}
{s}:dir(rtl) .wb-command-option::before{{left:auto;right:0}}
''')
id='index-drawer-command';s=r(id);add('commands',id,f'''
{s} .wb-command-launcher{{padding:24px 18px 18px;background:#ede5d6;border:1px solid #b9a789;border-bottom:6px solid #b5a07c;box-shadow:inset 0 5px #fcf6e9;border-radius:0}}
{s} .wb-command-symbol{{height:28px;width:58px;border:2px solid #ad9975;border-top:0;border-radius:0 0 5px 5px;background:#f5ebd8;box-shadow:0 2px #d8c7a7}}
{s} .wb-command-symbol svg{{width:20px;height:20px}}
{s} .wb-command-launch{{background:#fffaf0;border:1px solid #b9a789;border-bottom:4px solid #b9a789;border-radius:0}}
{s} .wb-command-dialog{{padding:8px;background:#bda988;border:1px solid #a08a67;border-radius:0;box-shadow:0 24px 70px #0005}}
{s} .wb-command-frame{{background:#fff9ed;border:1px solid #d7c5a4;box-shadow:inset 0 5px #eee0c8}}
{s} .wb-command-entry{{margin:0 14px;background:#fcf7ec;border:1px solid #c7b38f;border-bottom:3px solid #c7b38f;padding:12px}}
{s} .wb-command-list{{padding:14px 16px}}
{s} .wb-command-group{{display:table;padding:7px 12px;margin-top:12px;border:1px solid #cab694;border-bottom:0;background:#e8dabe;font:13px/1.6 Arial,sans-serif;border-radius:5px 5px 0 0}}
{s} .wb-command-option{{padding:14px 10px;border:1px solid #d3c2a3;border-bottom:2px solid #c5b18f;background:#fffbf1;margin-bottom:4px;gap:8px}}
{s} .wb-command-option[aria-selected=true]{{background:#eee0c6;border-inline-start:3px solid #a88854;padding-inline-start:8px}}
''')
descriptions={
'radar-window-search':('searchbars','照準と件数の読取り盤を持つ検索。検索窓から候補の照準へ同じ細線を使い、選択した行だけを中心点で示す。'),
'slotted-mail-search':('searchbars','薄い投函口から検索の紙面が出る検索欄。結果は差し込む紙札として分け、入力と候補を同じ素材の関係で読む。'),
'open-shelf-search':('searchbars','開いた棚に候補を載せる検索。左右の支柱、短い棚受け、薄い棚板が各結果の位置を支え、文字は平らな面に置く。'),
'caption-line-search':('searchbars','見出しと番号付き注釈で探す編集的な検索。大きな活字、余白の連番、細い補足罫を組み合わせ、候補を記事の注記として読む。'),
'soft-resource-search':('searchbars','資料の名前・説明・識別子を分けて読む検索。小さな候補カードとコード欄で、似た名前の資料を選びやすくする。'),
'clear-line-search':('searchbars','検索・絞込み・候補を短い罫線で揃える検索。低い行と広い本文列で、一覧を続けて読み取れる構成にする。'),
'warm-library-search':('searchbars','書名のように見出しを読む資料検索。明朝の名称、説明、補足コードを背の細線に沿わせ、読み物を選ぶ順序に整える。'),
'optical-command':('commands','同心の光学窓と候補の照準を持つコマンドパレット。起動面から実候補まで輪郭を対応させ、検索語と操作名は正面に固定する。'),
'ledger-command':('commands','綴じた操作台帳として読むコマンドパレット。実候補の連番を余白へ置き、グループ見出しと操作名を横罫に沿わせる。'),
'index-drawer-command':('commands','引出しの前板から索引紙を取り出すコマンドパレット。取手、引出しの内側、紙札の厚みを分け、検索と実行の面を一つにつなぐ。')}
for id,(cat,new) in descriptions.items():
 base=Path('src/parts')/cat/id;p=base/'meta.json';d=json.loads(p.read_text());old=d['description'];short=d['tagline'];d.update(description=new,tagline=new.split('。')[0]+'。');p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 for f in [base/'usage.md',base/'prompt.md',base/'styles.css',*list((base/'react').glob('*.tsx'))]:
  s=f.read_text().replace(old,new)
  if old!=short:s=s.replace(short,d['tagline'])
  f.write_text(s)
(b/'design.md').write_text('# B019 探す対象に結び付く構造\n\n'+''.join(f'- {id}：{v[1]}\n' for id,v in descriptions.items()))
