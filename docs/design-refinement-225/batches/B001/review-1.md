# B001 / round 1 独立検査

判定：**changes_required**（9件 pass、1件 changes_required）。

凍結portableと実galleryの著者hash一致を検査開始時に確認。round1凍結ソースのhashも照合済み。終了時には主担当がR089のround2修正を開始したため、現在の著者全件一致は主張しない。著者ファイルは編集していない。

## 修正が必要な一点

R089 outline-row-select の小さい補助文は、hover/activeで #a8b7c5 / #3b4e60、**4.19:1**。主ラベルは **7.27:1** へ改善したが、10pxの通常文字の4.5:1に未達。補助色またはactive面を微調整してほしい。デザインの主観ではなくcomputed色からの再現結果。

## 個別判定

- R024 vellum-accordion-case: **pass** — 上下の罫線はhoverでもskewせず、蛇腹のみ0.65→1へ補間する。入口・解除・再進入に途中値があり、本文移動0px。Aの紙面と収納の構造を維持。320px・長見出し・動き軽減・強制色も確認。非操作装飾なのでキーボード起動は対象外。
- R030 offset-diecut: **pass** — 旧矩形box-shadowは通常/hoverともnone。抜き型の面と下紙の回転は残り、入口・解除・再進入に途中値がある。本文移動0px。320pxの下紙の装飾上の張出しは本文を切らず、ページ横溢れなし。非操作装飾なのでキーボード起動は対象外。
- R089 outline-row-select: **changes_required** — 公開済みの主ラベルは旧1.07:1から7.27:1へ改善。320px・長ラベル・Enter選択とEscape・強制色は機能する。ただし10pxの補助文はhover/active背景で4.19:1となるため、通常文字4.5:1を満たす色調整が必要。
- R146 editorial-inline-link: **pass** — 矢印translateは入口40msで0と2pxの途中、hoverで2px/-2px、解除/再進入も途中値を通り復帰する。350msのtranslate transitionを実測。文字・クリック領域は固定。320px/長ラベル、キーボードfocus outline、reducedでanimationなし、forcedの可読性を確認。Bの既存の密度・形状を維持。
- R147 quiet-resource-link: **pass** — 矢印translateは入口40msで0と2pxの途中、hoverで2px/-2px、解除/再進入も途中値を通り復帰する。350msのtranslate transitionを実測。文字・クリック領域は固定。320px/長ラベル、キーボードfocus outline、reducedでanimationなし、forcedの可読性を確認。Bの既存の密度・形状を維持。
- R148 clear-destination-link: **pass** — 矢印translateは入口40msで0と2pxの途中、hoverで2px/-2px、解除/再進入も途中値を通り復帰する。350msのtranslate transitionを実測。文字・クリック領域は固定。320px/長ラベル、キーボードfocus outline、reducedでanimationなし、forcedの可読性を確認。Bの既存の密度・形状を維持。
- R149 compact-route-link: **pass** — 矢印translateは入口40msで0と2pxの途中、hoverで2px/-2px、解除/再進入も途中値を通り復帰する。350msのtranslate transitionを実測。文字・クリック領域は固定。320px/長ラベル、キーボードfocus outline、reducedでanimationなし、forcedの可読性を確認。Bの既存の密度・形状を維持。
- R150 reading-next-link: **pass** — 矢印translateは入口40msで0と2pxの途中、hoverで2px/-2px、解除/再進入も途中値を通り復帰する。350msのtranslate transitionを実測。文字・クリック領域は固定。320px/長ラベル、キーボードfocus outline、reducedでanimationなし、forcedの可読性を確認。Bの既存の密度・形状を維持。
- R182 ivory-notch-segments: **pass** — 未選択文字#eff2eeをhover/解除/再進入でも保持し、面#526870との比率5.21:1。320pxで各セルが等幅（portable102.5px、gallery75px）。長ラベルはセル内に折り返す。縦指定も全セル等幅・82px高で成立。矢印キー選択、reduced/forcedを確認。
- R422 station-label-trail: **pass** — 展開メニューObjectsはhoverでも#e6eff4を保持し、面#28485eとの比率8.27:1。下線で状態を示し文字移動0px。320px/長文/強制色を確認。Enterで開いてリンクへfocus、Escapeで閉じる。

## 証拠・範囲

20経路（10件×portable/gallery）の測定は measurements-complete-1.json。画像は evidence-1/。通常、hover入口/解除/再進入、狭幅、長文、強制色を視認し、動き軽減とkeyboardを実操作・computedで確認した。R182の縦指定も追加確認済み。

全入力・全ブラウザの無欠陥保証ではない。React固有の実行経路は今回は未実行。過去の合格は今回判定の根拠にしていない。
