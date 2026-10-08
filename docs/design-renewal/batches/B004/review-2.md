# B004 round 2 — pass

10件すべてpass。6件の主要指摘とR068の軽微な角丸不一致を解消。CSS詳細度修正後の実物を再評価し、R061もAとして合格。正本実装は変更していない。

## 個別判定

- **R053 sliding-signet-button — pass**: 切り落とした印面と下のガイドの水平移動がまとまり、既存C字金具や左右の足とは輪郭・運動が異なる。長文でも印面と本文の関係を維持する。 round-1の造形判定を維持し、round-2で操作回帰を確認。 最寄比較: R048, R051, R054。

- **R055 satin-runner-button — pass**: 両側の折り輪が巻き留めに接続し、中央帯と分離してしなる。R047の片側の革把手とは素材と構成が異なる。320px長文でも本文は帯の内側。 round-1の造形判定を維持し、round-2で操作回帰を確認。 最寄比較: R047, R049, R055。

- **R061 ceramic-inlay-scroll — pass**: 片側が直線、反対側が丸く膨らむ陶片と青灰の凹みが実寸で分かれる。釉薬の明るい面・暗い縁が溝に収まる厚みを示し、横では下に丸く張り出す。R072/R074の均一な細棒との差が形と素材で成立した。追加の装飾や再設計は不要。 最寄比較: R072, R074, R023。

- **R062 zip-seam-scroll — pass**: 金属の薄い引き手と穴、交互の歯、通過済みの継ぎ目が一続きの機構として読める。固有背景と端部形状が描画され、縦横RTLでも関係を維持。 最寄比較: R065, R068。

- **R063 spindle-guide-scroll — pass**: 端の銀フランジの内側に巻き線が現れ、芯と糸の役割が分かれた。縦横とも巻き方向が軸と整合し、R070の開いた曲面受けと明確に異なる。 最寄比較: R070, R071。

- **R064 reed-clasp-scroll — pass**: 細い緑の茎に、明るい乾いた面と暗い側面を持つ葦色の節が留まる。非対称の端と二つの節がR061の陶片、R071の鉛筆を分ける。 最寄比較: R061, R071。

- **R068 sightline-scroll — pass**: 固有の2px角丸が適用され、読取窓・主線・長短目盛りを維持。round-1の軽微な不一致は解消。 最寄比較: R062, R075。

- **R069 beaded-wire-scroll — pass**: 細い芯を通る三粒と中央銀・外側金の大小関係が明快。通常のつまみ輪郭を持たず、最小長でも粒を識別できる。 round-1の造形判定を維持し、round-2で操作回帰を確認。 最寄比較: R064, R065。

- **R070 spline-seat-scroll — pass**: 開口のある受けに濃淡と片側の大きい丸みが戻り、端の爪が二本のガイドを抱える。巻き枠R063とは断面、接続、質感が異なる。 最寄比較: R063, R067, R048。

- **R071 parallel-pencil-scroll — pass**: 縦横とも木軸の面分けが表示され、削った木口・暗い芯・銀の留めとつながる。細さを保ったままR065/R066の筆記片や針との構造差が読める。 最寄比較: R065, R066, R064。

## 実施検査

- round-2 sourceHashes100件一致。round-1からの変更は8スクロールのstyles.cssのみ。ボタン2件を含むその他sourceは不変。
- 10件のnative CSSとsource CSSはimportを除き同一。固定native実装をChromiumで再操作。
- 全8件へ実内容を注入。320px縦50%・Home/End・drag、横LTR/RTLのHome=0/End=100、広い32px hit領域端からdragで50→66を再確認。
- 縦横のcomputed背景と角丸をextra-checks.jsonに記録。R061非対称2/7px、R063repeating gradient、R0645/1px、R0682px、R0708/2px、R071木軸gradient/1pxが適用。実寸vertical-detail.pngとhorizontal-detail.png、個別画像で描画を照合。
- normal motionのhover/leave/reenter、forced native fallback、reduced transition0s/animationnoneを全8件再確認。
- 2ボタンEnter→busy、再実行抑止、解除後Spaceを再確認。本文相対矩形/色、button矩形、面色/opacityは初期とbusyで一致。320px長文でdocument幅320、forced/reduced確認。
- round-1の730件監査・カテゴリ画像・近似候補比較を引き継ぎ、修正後8スクロールを相互比較。R061は正常描画した非対称断面と素材差を根拠にA合格と判定。

## 制限

- Chromiumとmedia emulationでの検査。実機touch、他ブラウザは未実施。
- 全730件の再操作は行わず、round-1の既存監査と候補比較を引き継いだ。
