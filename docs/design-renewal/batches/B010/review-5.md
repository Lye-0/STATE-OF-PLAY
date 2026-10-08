# B010 round-5 独立再検査

判定: **全10件 pass**。固定 `snapshot/round-5` を評価。正本実装の編集なし。round-4の中間検証とround-5の最終検証を本記録へまとめた。

|番号|ID|最終判定|
|---|---|---|
|R141|angle-bracket-link|pass|
|R142|corner-flight-link|pass|
|R143|rail-platform-link|pass|
|R144|notch-route-link|pass|
|R145|tailored-edge-link|pass|
|R151|binder-wing-tabs|pass|
|R152|sawtooth-index-tabs|pass|
|R153|hangtag-tabs|pass|
|R154|offset-rail-tabs|pass|
|R155|gabled-tabs|pass|

## R142 の解消根拠

二つの三角面の下で、外紙/内紙の上端を共に斜めに切り、背景へ抜ける空隙を作った。右48px側に接点を保ち、hover中も折翼の底辺は不動。白/暗色背景でも空隙が成立し、単なる屋根付き矩形から、支える接点と折面が見えるリンクへ変わった。本文/矢印/hitは固定し、Aとして合格。

## R151 の解消根拠

左右の別々の折翼を同じ紙の縁の軸で接続し、背の連続支持面・紙の通し口・右翼の返しへつなげた。平たい八角バッジから、前後の折面が紙を保持する主形態へ変わっている。横/縦とも翼は同寸で、closed/途中/openの上下両組の軸の隙間は実測0px。白/暗色で通し口の実透過を確認。文字と操作域に侵入せず、A合格。

## R153 の解消根拠

横の杆から上孔へ通る紐を保持し、縦では左の全高の杆から各札の左孔へ横の紐を通す構造へ変更。縦の全3札が杆へ接続し、孔が実際に抜ける。札の位置と選択文字を動かさず、A合格。

## R154 の解消根拠

横の保持片を上へ伸ばし固定レールを実際にまたぐ形へ修正。縦では左全高のレールへ横向きの保持片を設け、選択位置1/2/3の全てで紙とレールへ同じ接続が成立する。外側の溝/下の斜め接合と固定本文を保ち、A合格。

## 実施した検査

- 固定round-5のsource100ファイルをreview-input-5.jsonのSHA-256と照合し全一致。全10native配布CSSと正本CSSをimport除外で照合し全一致。captures/reviewer-extra-5/checks.json。
- round-3→4の変更はR142/R151/R153/R154のみ、round-4→5はR142/R151のみ。他6件は元の合格版の正本ハッシュが不変。round-4は中間検証として保存し最終レビューは本round-5へ統合。
- 全リンク5件を固定round-5のnative版で実Enter/href遷移、非キャンセルclick、hover/leave/reenterで文字/矢印/hit固定、320長文/RTL/forced/reducedまで再操作し全成功。captures/reviewer-links-5/checks.json。
- 全タブ5件を固定round-5で実本文/ARIA/hidden/ID/キー/manual/disabled/input値と選択保持/hidden focus/vertical/320390768長文/RTL/forced/reducedまで再操作し全成功。captures/reviewer-tabs-5/checks.json。
- R151/R153/R154を横/縦×選択1/2/3の18状態で独立撮影。R153の縦3札とR154の縦2/3番を含む全接点を実画像で確認。captures/reviewer-joints-5。
- R151の横/縦それぞれclosed/約100ms途中/openを実操作し、上下両組の左右翼の実測接点gapが全て0px。途中でも軸を維持し、紙の文字や入力を遮らない。captures/reviewer-joints-5/checks.json。
- R142/R151を暗色/白背景でinitial/hover/leave/reenterの16状態撮影。R142は斜めの実空隙と右接点、R151は紙と返しの通し口の透過を確認。captures/reviewer-material-5。
- round-4で全5タブのhover/leave/reenter/選択時に文字矩形/フォント/hit寸法の不変を追加確認し、forcedは400ms後の実文字色/背景を照合。round-5でも変更部品の長文forced実画像を確認。造形比較はround-3の最寄候補を継承し解消を判断。

## 限界

- 独立ブラウザはChromium。forced/reducedはPlaywrightのメディアエミュレーション。
- Reactの実items/props4配布形式は主担当の実行報告/ログを参照し独立再実行していない。独立実操作は固定native版。
- 730件の全件再操作は行わず、前回の監査画像/近似比較を継承した。

未解決の指摘なし。各解消キーと全10件の評価は [review-5.json](review-5.json) に記録。
