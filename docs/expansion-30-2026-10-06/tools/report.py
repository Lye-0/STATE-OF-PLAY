"""Build the disposable local expansion review from canonical metadata and photos."""
from pathlib import Path
import json,html,collections
out=Path('docs/expansion-30-2026-10-06');root=Path('.')
specs=json.loads((out/'designs.json').read_text(encoding='utf-8'))
registry=json.loads(Path('src/catalog/registry.json').read_text(encoding='utf-8'))
parts=[json.loads((root/p/'meta.json').read_text(encoding='utf-8')) for p in registry]
counts={cat:{kind:sum(p['category']==cat and p['designType']==kind for p in parts) for kind in ['A','B']} for cat in sorted({p['category']for p in parts})}
(out/'counts.json').write_text(json.dumps(counts,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
rows='\n'.join('| '+cat+' | '+str(c['A'])+' | '+str(c['B'])+' | '+str(sum(c.values()))+' |' for cat,c in counts.items())
index=[]
for cat in counts:
 ds=[d for d in specs if d['category']==cat]
 if not ds:continue
 index.append('<section id="'+cat+'"><h2>'+cat+' <small>'+str(len(ds))+'点追加</small></h2><div class="grid">')
 for d in ds:
  meta=next(p for p in parts if p['id']==d['id']);id=d['id'];e=html.escape
  index.append('<article data-kind="'+meta['designType']+'"><header><b>'+e(meta['name'])+'</b><span>'+meta['designType']+'</span></header><a href="photos/'+id+'-stage.png"><img loading="lazy" src="photos/'+id+'-stage.png" alt="'+e(meta['name'])+' 通常状態"></a><p>'+e(meta['description'])+'</p><details><summary>操作後と展開状態</summary><a href="photos/'+id+'-state.png"><img loading="lazy" src="photos/'+id+'-state.png" alt="操作後"></a>')
  if (out/'photos'/(id+'-expanded.png')).exists():index.append('<a href="photos/'+id+'-expanded.png"><img loading="lazy" src="photos/'+id+'-expanded.png" alt="展開状態"></a>')
  index.append('</details><footer><code>'+id+'</code><a href="../../src/parts/'+cat+'/'+id+'/styles.css">正本CSS</a></footer></article>')
 index.append('</div></section>')
total=len(parts);a=sum(p['designType']=='A' for p in parts);b=total-a
htmltext='''<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>STATE OF PLAY — 30種類への拡張レビュー</title><style>
*{box-sizing:border-box}body{margin:0;background:#11151a;color:#e5ebe6;font:15px/1.8 Arial,"Yu Gothic",sans-serif}main{max-width:1500px;margin:auto;padding:32px}h1{font:36px/1.3 Georgia,serif}h2{margin:50px 0 18px;border-bottom:1px solid #65716e;padding-bottom:8px}h2 small{font:12px Arial;color:#b7c4bd}a{color:#b8d3cc}nav{display:flex;gap:8px;flex-wrap:wrap}nav a{padding:4px 10px;border:1px solid #54665c;border-radius:5px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:20px}article{background:#1b2228;border:1px solid #4c5b56;border-radius:8px;overflow:hidden}header{display:flex;justify-content:space-between;gap:12px;padding:14px 18px}header b{font:18px Georgia}header span{color:#bfd1c5}img{display:block;width:100%;height:auto}p,details,footer{padding:0 18px}footer{padding-block:14px;display:flex;gap:12px;flex-wrap:wrap;font-size:11px;color:#b5c6c1}summary{cursor:pointer;color:#cfdfd7}details img{margin:12px 0}button{font:inherit;color:inherit;background:#293a33;border:1px solid #758d7e;border-radius:5px;padding:7px 16px;cursor:pointer}button[aria-pressed=true]{background:#aecbc1;color:#122522}.stats{display:flex;gap:12px;flex-wrap:wrap}.stats span{padding:12px 20px;border:1px solid #6a8478;border-radius:4px}button:focus-visible,a:focus-visible,summary:focus-visible{outline:2px solid #dcefc4;outline-offset:3px}@media(max-width:600px){main{padding:18px}h1{font-size:27px}}
</style><main><h1>STATE OF PLAY<br>30種類への拡張レビュー</h1><p>各カテゴリの操作に合わせて追加した325パーツの写真と構成。画像を押すと原寸で確認できます。コマンド・コンテキストメニューなどは展開状態も掲載しています。</p><div class="stats"><span>37カテゴリ</span><span>'''+str(total)+'''パーツ</span><span>A '''+str(a)+''' / B '''+str(b)+'''</span><span>カテゴリごとに合計30以上・A/B各5以上</span></div><p><a href="README.md">件数表・調査と検証の記録</a></p><nav>'''+''.join('<a href="#'+cat+'">'+cat+'</a>'for cat in counts if any(d['category']==cat for d in specs))+'''</nav><p><button data-filter="all" aria-pressed="true">A+B</button> <button data-filter="A" aria-pressed="false">A</button> <button data-filter="B" aria-pressed="false">B</button></p>'''+''.join(index)+'''</main><script>document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('article').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.kind!==button.dataset.filter)}));</script></html>'''
(out/'index.html').write_text(htmltext,encoding='utf-8')
readme=f'''# 30種類への拡張

2026-10-06。正本は `src/parts` と `src/catalog/registry.json`。このディレクトリは写真・比較・集計・作業用スクリプトだけを含み、まとめて削除できます。製品の生成処理とパーツの検証は、この資料へ依存しません。検証は正本のメタデータを参照します。ブラウザー検証を再実行すると写真フォルダーは再作成されます。

[全325追加パーツの写真一覧](index.html) / [設計意図と一覧](designs.json) / [集計](counts.json)

既存795パーツへ325点を追加し、合計{total}点（A {a} / B {b}、約{a/b:.2f}:1）にしました。37カテゴリすべてでA+B合計30以上、A・Bそれぞれ5以上。ドロップダウンとスクロールバーは既存の35点を維持しています。以前整理した92点は再登録していません。

| カテゴリ | A | B | 合計 |
| --- | ---: | ---: | ---: |
{rows}

## 設計と比較

Aは用途と操作性を保ちながら形・面・素材・反応を個別に設計し、Bは読取り・操作・導入のしやすさを優先しました。状態管理など同カテゴリの既存処理は共有し、他カテゴリから視覚的なスキンを移植する仕組みは追加していません。追加パーツの正本は10ファイル構成です。

通常の展示写真325枚と操作後325枚を撮影し、カテゴリごとの構成と近い候補を比較しました。比較候補の絞り込みにグレースケールの画像ハッシュを使い、最終判断は写真・実装・展開した状態で行っています。ハッシュの低い距離や異なるCSSだけで独立したデザインと認定していません。

初回比較から[91点を個別に再調整](refined-parts.json)しました。特にコマンド、コンテキストメニュー、表、ウィザードは、外枠の違いに加えて項目の配置・番号・操作の入口・進行位置の表現を見直しました。閉じたメニューの比較だけでは内部の違いが分からないため、展開写真も併記しています。

| 比較した近い候補 | 調整・確認した違い |
| --- | --- |
| Label Pair Finder / Wide Label Finder | 名前と補足を横に読む候補と、大きい検索の区画・余白を持つ候補を分離。 |
| Braced Note Popover / Fact Note Popover | 両端のブレースと二列の大きな値／静かなラベルと値の説明表。 |
| Shelf Command / Description First Command | 棚に載った項目と低い入口／説明文を読みやすくする一列の候補。 |
| Groove Action Context / Thin Step Context | アイコンの独立した溝／段差を持つ操作列。展開状態で比較。 |
| Disc Tab Tag / Riveted Tag | 独立した円の印と細い下線／一体の金属札と留め具。 |
| Ticket Roll Pages / Upper Deck Pages / Cog Register Pages | 切り目の番号帯／上下に接続した札／歯止めの番号槽。 |
| Keycap Rating / Segmented Seal Rating | 押し込む角形のキー／区切り付きの円形シール。選択状態と数字の読取りを確認。 |
| 各テーブル | 書類の綴じ帯、独立した行、数値の読取領域、列ごとの区画、張った格子、明細の引出しなど、表内部まで分離。 |
| 各ウィザード | 左の進行線、装置の番号窓、大きい章番号、右の手順列、紙の記録、吊り札など、進行と本文の関係を分離。 |

色や文字の違いだけによる追加を避ける方針で確認していますが、類似度はデザイン上の判断を含みます。レビュー用の[カテゴリ別写真](sheets/)と[機械的な比較候補](similarity-shortlist.json)を残し、追加の評価や差し替えを行えるようにしています。

## 検証

検証の確定結果は [verification.json](verification.json) に記録します。全体の `npm run verify` を一括実行したという意味ではありません。

- 各カテゴリの最低数、物理フォルダーと登録の一致、削除済みIDの復活防止。
- 全325点の4形式（TSX / JSX / TS / JS）と2配置（portable / original）のソース、プロンプト、ライセンス、プレビュー、ZIP内容。
- Edgeで全325点の展示と代表操作。入力・選択・メニュー展開・表の検索／並べ替えなど。
- 実際のReact配布コード325点のStrictMode表示・解除、代表コールバック、320 / 390pxの横はみ出し、明るい面の選択文字のコントラスト。
- 一覧・詳細の色変更、プロンプトとZIPの同期、カラーポップオーバー、独自プルダウン、候補変更の回帰確認。

使用した過去の調査は `.test-output/research/REPORT.md` と [類似パーツ整理の記録](../similarity-audit-2026-10-06/README.md)。
'''
(out/'README.md').write_text(readme,encoding='utf-8')
print('report',total,a,b,len(specs))
