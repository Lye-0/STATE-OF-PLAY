# B008 round-2 独立再検査

判定: **全10件 pass**。固定 `snapshot/round-2` を評価し、正本実装は変更していない。

R116の給紙孔は白/暗色背景へ実際に透過し、前回の塗り丸という指摘を解消。R121は四片の木の掘込みと、右下だけの注ぎ溜まりへ連続する蝋面へ変わり、前回の汎用角丸枠と短い筒という指摘を解消した。

|番号|ID|最終判定|
|---|---|---|
|R115|rail-clamp-input|pass|
|R116|carbon-copy-entry|pass|
|R117|engraved-label-field|pass|
|R118|ribbon-slot-entry|pass|
|R119|corner-scribe-field|pass|
|R120|counterweight-field|pass|
|R121|wax-tablet-input|pass|
|R122|folded-margin-entry|pass|
|R123|suspended-baseline-field|pass|
|R124|drafting-tray-field|pass|

## R116 の判定根拠

左17pxの共通給紙帯を実際に抜き、白/暗色それぞれの背景が孔から見える。原紙/カーボン/控えの下端は一つの給紙端へ連続し、focusで中のカーボンだけが2px出る。本文/clear/revealの位置は固定。R035の段状の広がりやR111の差込み口、R113の上下送りとは異なる記録紙の構造を保ち、素材の不一致を解消。Aとして合格。

## R121 の判定根拠

二本の丸棒と二重角丸を撤去し、斜めの留め継ぎを持つ四片の木の掘込みへ書く面を収めた。右下だけが丸い注ぎ溜まりへ開き、蝋が内面からそこへ一体で続く。木の端と蝋の端が異なる輪郭として読め、一般的な額縁入力から差が出た。focusは上の掘り口の陰だけを深め、読み面/clear/revealは固定。R104の開く陶の凹み、R112の琺瑯の曲面とは加工と外周が異なる。Aとして合格。

## 実施した検査

- 固定source100ファイルのSHA-256がreview-input-2.jsonと全一致。round-1差分はR116/styles.css、R121のmeta/prompt/React/styles/usageの計6ファイルのみ。他8件の正本が不変。
- 全10 native配布CSSと正本CSS（import除外）が一致。captures/reviewer-extra-2/checks.json。
- Chromiumの固定native版で全10件のフォーム送信値、入力矩形/文字属性、focus/fill/clear/error、選択、合成CompositionEvent、clear/undo、readonly/disabled、320/390/768px長文、RTL、forced/reducedを再操作。10件全成功、pageerrorsなし。captures/reviewer-fields-2/checks.json。
- 全10件のpassword＋prefix/suffix＋clear/revealを320px LTR/RTL計20状態で実操作。reveal時の選択[1,4]保持、本文とaction領域の分離、横overflowなしを再確認。captures/reviewer-extra-2。
- 全10件を暗色/白の背景、initial/focus/leave/reenter計80状態で再撮影。通常motionで解除/再進入を確認。captures/reviewer-material-2/checks.json と各PNG。
- R116の孔の実透過、三層の下端、カーボンだけの2px移動を白/暗色実画像とCSSで照合。R121の四片の留め継ぎ、右下の溜まりと本文の一体性、上の掘り口の焦点時変化を実画像で確認。
- R116/R121の320px長文RTL/forcedとclear/reveal併用画像を確認。残り8件はハッシュ不変による通常造形判定の継承と今回の全10操作回帰を区別。近似比較はround-1で確定した候補を用いて再評価。

## 範囲と限界

- Chromiumでの独立検査。forced/reducedはPlaywrightによるエミュレーション。IMEは合成CompositionEventで実OS IMEではない。
- React実props4配布形式は主担当ログを参照し、今回は独立再実行していない。独立実操作は固定native版。
- 730件の全件再操作は行わず、前回の監査画像と近似比較を継承した。

未解決の指摘なし。個別の近似候補と判定は [review-2.json](review-2.json) に記録。
