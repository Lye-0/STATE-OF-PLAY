# B049 round 3 独立再検査

**changes_requested — 5 redesign / 5 adjust。**

選択時60px移動とforced選択文字の不可視は解消。実currentの長名・dialog・所有focusも改善した。一方、5件のA主形、R672の幅表示、R678列名遮蔽、全9のRTL値順序が残る。

## R665 receipt-index-navigation — redesign

実currentの横書き160px、実dialogへの反映、長名scrollと所有focusは解消。一方、一覧と下票を48pxの切離し隙＋右64pxの残し紙でつなぐ主構図が、既承認R645の切離し票を反復する。幅広い紙が返る構造という説明に対し、実像は二つの矩形と狭い橋である。

最寄比較: R645, R655, R661

- **R665-primary-shape-r3**: 実currentの横書き160px、実dialogへの反映、長名scrollと所有focusは解消。一方、一覧と下票を48pxの切離し隙＋右64pxの残し紙でつなぐ主構図が、既承認R645の切離し票を反復する。幅広い紙が返る構造という説明に対し、実像は二つの矩形と狭い橋である。
  改善方向: 2矩形＋片側の残し紙を廃する。returnを保つなら、一覧の終端全体が広い一つの曲面/折面として返り、その表裏の連続した両端が見える構造へ。現在地面を別札として追加せず同じ原紙の端そのものにする。細い接合を64→80へ増すだけ、R655舌/R661窓/R645切離し票への置換では不足。
  証拠: captures/reviewer-navigation-3/receipt-index-navigation-initial.png, captures/reviewer-navigation-3/receipt-index-navigation-mobile.png

## R671 archive-ledger-table — redesign

左/下の外枠は除去されたが、通常像は一枚の四角い表と大きいfooter矩形、上の8px線と下小口に留まる。実ページ範囲があることは正しいが、紙が開口へ入る前後関係が主形として読めず、一般的な太いfooterの域を出ていない。

最寄比較: R671固定1, R625, R297

- **R671-primary-shape-r3**: 左/下の外枠は除去されたが、通常像は一枚の四角い表と大きいfooter矩形、上の8px線と下小口に留まる。実ページ範囲があることは正しいが、紙が開口へ入る前後関係が主形として読めず、一般的な太いfooterの域を出ていない。
  改善方向: ページ送り面をただ高くせず、読む原紙の端が見える深い開口、前を覆う面、横から見える受けの断面を一つの形として設計する。実page summary/prev/nextをその前面の実用途として配置し、表と操作面が単に上下に接するだけの矩形を避ける。独立した開口の奥行きと紙の挿入を通常像で判別できることを優先する。
  証拠: captures/reviewer-tables-3/archive-ledger-table-initial.png

- **R671-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/archive-ledger-table.png

## R672 inspection-grid-table — adjust

対向する外顎を廃し、実theadと列幅操作を深い横桁へ集めた方向は表の機能を主形に結び付けている。通常主構造は受け入れられる。ただし実幅表示の配置/可読性と、表示値の意味に不整合がある。

最寄比較: R672固定1, R282旧案

- **R672-width-glyph-placement**: 新しい幅pxの::beforeは旧top:16px/left:5pxを残し、right:32px/bottom:8pxと競合してcomputed width:0px,height:104px。白い文字が下24px小口でなく薄い縦材の上へ出て、110px/106px等が境界に押され読みにくい。
  改善方向: insetを一旦全解除し、十分な幅の実下小口へ明示配置。normal/RTL/forcedで幅全桁を確認し、暗い面と明るい文字の関係を保つ。
  証拠: captures/reviewer-material-3/checks.json, captures/reviewer-material-3/inspection-grid-table-ltr.png, captures/reviewer-wideforced-3/inspection-grid-table-selected-forced-dark.png

- **R672-width-value-meaning**: 実描画name列は約251pxだが表示/aria-valuenowは190px、statusは約146pxに110px。tableが利用可能幅へ伸びるため、設定幅と描画幅が異なる。説明の「実幅px」ではない。
  改善方向: 設定/最小幅を表示するならそう明記するか、実描画幅を測った値へ契約を揃える。API設定値を黙って実寸と呼ばず、resize/viewport/RTLの変化で表示の意味を検証する。
  証拠: captures/reviewer-material-3/checks.json

- **R672-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/inspection-grid-table.png

## R673 folded-register-table — redesign

外周の小折角はなくなったが、現在は二つの平たい矩形を右の72×96pxのC字部材で接続した像。長い紙の内側の返しという主形ではなく、二面と側取手の組み合わせに見える。RTLではCの位置だけ移り物理radiusが右向きに残る。

最寄比較: R224, R476, R403

- **R673-primary-shape-r3**: 外周の小折角はなくなったが、現在は二つの平たい矩形を右の72×96pxのC字部材で接続した像。長い紙の内側の返しという主形ではなく、二面と側取手の組み合わせに見える。RTLではCの位置だけ移り物理radiusが右向きに残る。
  改善方向: C部材を拡大する修正ではなく、操作面と記録面の配置から再検討する。例えばwideでは実検索/選択を載せる十分に広い縦の背面を本文の隣へ置き、全高の一枚の返面を介して前紙へつなぐ。折面は実際に二つの読む領域の向きを決め、独立の取手にしない。narrowは同じ大きい返面を上側へ回し、nativeを変形せず読む幅を保つ。
  証拠: captures/reviewer-tables-3/folded-register-table-initial.png, captures/reviewer-material-3/folded-register-table-rtl.png

- **R673-rtl-return**: C部材のinsetとborder-inline-startは反転するが、物理border-radius:0 48px 48px 0が反転しないため、RTLは先端/曲面がLTRの鏡像にならず紙との接点も異なる。
  改善方向: 主形の再設計時に材だけを一度鏡映するか、論理側の曲率/輪郭を同時に切替える。native文字を反転しない。
  証拠: captures/reviewer-material-3/folded-register-table-rtl.png

- **R673-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/folded-register-table.png

## R674 stone-record-table — redesign

対角丸角は撤去したが、大きい上肩、左の短い欠け、通常の四角い表床という構成に留まる。96pxの欠けは上端だけで、本文全体の主形は依然として矩形パネル。採掘した一体の深い断面という説明を、通常像がまだ支えない。

最寄比較: R674固定1, R214, R564, R654

- **R674-primary-shape-r3**: 対角丸角は撤去したが、大きい上肩、左の短い欠け、通常の四角い表床という構成に留まる。96pxの欠けは上端だけで、本文全体の主形は依然として矩形パネル。採掘した一体の深い断面という説明を、通常像がまだ支えない。
  改善方向: 一隅の切欠きや左marginではなく、表全高を受ける素材の外形と断面から設計する。規則的なnative表は固定したまま、その外側の一体材を非対称の大きい傾斜面/長い割れ/連続した厚い切口へ作り、読む床がどこに収まるかを明確にする。実件数/検索/ページ送りを別の小石へ分けず、一枚の露頭の異なる実面に置く。既存R564凹壁/R654カット板の単純流用もしない。
  証拠: captures/reviewer-tables-3/stone-record-table-initial.png

- **R674-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/stone-record-table.png

## R675 letterpress-data-table — adjust

承認済みのT通常形を保持。選択時の60px移動とforcedの文字不可視は解消。残る共通RTL数値の向きのみ修正が必要。

最寄比較: R675原版

- **R675-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/letterpress-data-table.png

## R676 index-drawer-table — adjust

引出しの上蓋/明るい内床/前板の保持調整を承認継承。選択幾何/forced読字は改善。残る共通RTL数値の向きのみ修正が必要。

最寄比較: R676原版

- **R676-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/index-drawer-table.png

## R677 rail-dataset-table — redesign

外L枠は除いたものの、実像は第一列の青い背景＋24pxの太い列境界＋下罫である。実横スクロールを使うこと自体は標準機能であり、native scrollbarの配色を足しただけではAのクロススライドの主機構とは言えない。

最寄比較: R677固定1, R662, R239

- **R677-primary-shape-r3**: 外L枠は除いたものの、実像は第一列の青い背景＋24pxの太い列境界＋下罫である。実横スクロールを使うこと自体は標準機能であり、native scrollbarの配色を足しただけではAのクロススライドの主機構とは言えない。
  改善方向: 固定識別面と動く記録面の境界を太罫から実挿入/受けの断面へ作り直す。固定面に実際の長いキー状の端を作り、動く面がその受け溝へ重なる前後関係と、片側に露出する実端座を描く。native横scroll/列resizeがその実接点に対応するようにし、外周L枠や偽のスクロール目盛りは戻さない。文字面は同じ平面・同じ位置を維持。
  証拠: captures/reviewer-tables-3/rail-dataset-table-initial.png, captures/reviewer-tables-3/rail-dataset-table-scrolled-ltr-320.png

- **R677-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/rail-dataset-table.png

## R678 stitched-register-table — adjust

左背の模様を廃し、実columnの布帯が56pxの縫い代へ通る構成へ進んだ。孔は実mask、糸もその後方に置かれている。しかし最初のthだけが42px移動して隣の状態名を隠し、列対応と最初の孔/糸の整合を破っている。

最寄比較: R678固定1, R658, R672

- **R678-column-header-obscured**: thをposition:relativeへ変えたがfirst-columnのinset-inline-start:42pxが残る。wide LTRのname thは本来x141からx183へずれ、隣の状態名の左側を覆う。本文列と見出し・最初の孔/糸の位置も一致しない。RTLも逆方向にずれる。
  改善方向: sticky/relativeとlogical insetを明示的に整理し、実thの原点を列から動かさない。装飾のためにnative sticky headerを解除しない。state名の実TEXT_NODE Rangeを他列が覆わずhitできること、縦横scroll/RTL後も列/孔対応を確認する。
  証拠: captures/reviewer-material-3/checks.json, captures/reviewer-material-3/stitched-register-table-ltr.png, captures/reviewer-material-3/stitched-register-table-rtl.png

- **R678-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/stitched-register-table.png

## R679 open-sheet-table — adjust

軽いセリフ題字、下罫だけの検索、囲まない状態へ戻り、675の活版の太さと異なるTのよい個性を回復した。共通選択/forced修正も解消。残るRTL数値の向きのみ修正。

最寄比較: R679原版, R675

- **R679-rtl-numeric-order**: RTLでpage=1/pages=2、textContent="1 / 2"が見た目「2 / 1」になり、範囲"1–4 / 8"も「8 / 4–1」へ逆転する。全9の実footerで確認。操作ボタンのRTLと値の桁順は別契約である。
  改善方向: outputとpage-summaryの数値列だけdirection:ltr/unicode-bidi:isolateへ。実数値/範囲の並びを維持し、ボタンのRTL順序はそのままにする。両方向の実画像を確認。
  証拠: captures/reviewer-rtlvalues-3/checks.json, captures/reviewer-rtlvalues-3/open-sheet-table.png

## 実施した検査

- 固定3の作者100hash/manifest一致、配布CSS10一致。reviewer-hashes-3.json。固定2は未評価。
- 固定3actual portable tables9のsort/query/IME/select/all/clear/actions/page/resize/ownedfocus/live label/controlled/loading/error/empty/disabled/長文320390768LTRRTL/native scroll/44button/forced/reduced/cleanupを独立実行。全9成功、pageerrors=[]。reviewer-tables-3。
- 表9×18=162条件の選択/全選択/解除で相対glyph/hit固定を独立確認。前回の60px移動は解消。hover/leave/reenterも全27幅条件で固定。reviewer-table-geometry-3、reviewer-extra-3。
- 選択済みdark/light forcedの狭幅9件とwide9件を撮影・視認。前回の名前backplate不可視は解消し、wideの実数値/状態/操作文字も読める。reviewer-extra-3、reviewer-wideforced-3。
- receipt full native回帰成功/pageerrors=[]。actual current長名のLTR/RTL320390768でglyphが面内に収まり、重なり0。実mobile6条件で全文/End scroll/focus、schema update保持/unknown close退避/no-steal、desktop保持を確認。reviewer-longcurrent-3、reviewer-mobilecurrent-3、reviewer-readingfocus-3、reviewer-desktopreadingfocus-3。
- R672/673/677/678の実material LTR/RTL、th/resize/pseudo geometryとRangeを記録。R672 width表示とR678 header原点の問題はコード寸法だけでなく実描画と比較。reviewer-material-3。
- 全9実RTL footerの値をactual state/text/computed directionと実画像で照合。reviewer-rtlvalues-3。
- 元audit/固定1と、各近似既承認の主構図を比較。提案寸法の採用やnative全成功をA造形の合格理由にはしない。

## 範囲の限界

- React/既存Table20/Nav20の全配布互換性は主担当側検証。独立は今回actual portable native全10と固定作者/配布CSSを確認。
- receiptのEndキー初回は開く直後の描画/スクロール完了前を観測したため、2RAF後に所有focusを確認し、実scrollTop変化を待つassertで再検査。時間待ちだけで結果を合格にはしない。
- 通常形の判定は5 redesign、残る5は通常形を保持できるが、幅表示/見出し遮蔽/共通RTL値の修正が必要。
