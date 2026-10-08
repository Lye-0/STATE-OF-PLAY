# B024 round-5 独立レビュー

9 pass / 1 adjust (R342)。前回の全指摘は解消。通常造形は全10件合格、走査ヘッドの両端clipだけ修正が必要。

## R325 letterfold-hint — pass

下V封筒を撤去し、一枚の紙の上84px/下56pxの対角角を裏へ折り返す形になった。読む紙の外形と三角裏面が同じ斜め端点で接合し、大きい非対称の折返しが全輪郭を決める。R263の下の容器へ票を差す構造を反復せず、R293の左右三面とも異なる一枚紙の対角折返し。本文は中央へ固定され、長文/RTLでも重ならない。

## R331 odometer-progress — pass

round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。元の計器ケースと数字窓の構成を保持し、重い暗外装を淡い成形縁へ整理した。固定の等幅数字と目盛り/送り帯の比率が整い、機能の読取りも明瞭。

## R333 stitched-meter-progress — pass

round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。離れた二つの布片の実12px空隙へ、到達した幅だけ大きい交差糸を渡す。布色の通常バーと違い、進捗が二片の縫合そのものへ結び付く。0%は未縫合、1%の微小量から100%まで実到達幅で切られる。

## R335 book-spine-progress — pass

固定書背と量として増える紙束/表紙の通常造形を保持。不定状態は通常35%/reduced40%の中立表示へ変更し、animation/transformを止めた。通常モーション1.6秒観測でroot横超過0、前回の203px外逃げを解消。0/1/100・RTL・狭幅・forcedも回帰成功。

## R336 segmented-ruler-progress — pass

round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。十区間を真っ直ぐな42px高へ揃え、10%ごとの固定境界と部分到達を同じ基準で読む構造が整った。元の良い定規の識別性を維持する調整として合格。

## R337 double-orbit-progress — pass

円と飾り楕円・別の点を撤去し、左右の軌道を順に一周する一本の8字経路へ再構成した。pathLength100、実経路長579.43、25%で左端(12,60)、50%で中心(120,60)、75%で右端(228,60)、100%で中心へ戻り、native割合と一つの経路量が対応する。別の点がないため遷移中も描いた経路の先端そのものが到達位置となる。初期DOM/empty native mountの同一SVGを実確認し、React render文字列も同じ経路。A独立性と前回の同期問題を解消。

## R338 caption-band-progress — pass

round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。五段の元形と数値の階層を保持。20%ごとの固定面に実割合を流し、存在しない斜め終端の説明を訂正して実形と一致させた。元造形を維持する合格基準に沿う。

## R339 terraced-progress — pass

round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。五段の進行形を保持し、終端の暗いぼかしを除いて実量の境を明確にした。薄い境界と影のない面で読みやすく、元の段構造を精密化した。

## R341 channel-fill-progress — pass

round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。上下二壁・左の止壁が実76px溝を作り、三面を持つ充填体が内部の有効幅で増える。色付き横棒だけでなく支持の深さと充填断面が見え、0/1/100の量も止壁に隠れず一致する。

## R342 linear-radar-progress — adjust

格子/固定点を撤去し、上下ガイドを受ける22px走査ヘッドを実割合端へ置き、その前の原稿横線と後の静かな面を分けた。実量に結び付く機構が主形となり、通常造形は合格。ただし両端でヘッドの半分がclipされ、0/100の機構が不完全になる。端点の有効軸のみ調整が必要。

- **B024-R342-clipped-scan-head (major/consistency)**
  - 根拠: captures/reviewer-geometry-5/checks.json / scan-320-ltr-0.png / scan-320-rtl-100.png。320/768×LTR/RTL、head22pxに対し0/100の可視幅は11px、1%も12.77/14.36px。
  - 問題: fill端を中心に±11pxのヘッドを置くため、0/100で半分がtrackのoverflow:hiddenに切られる。端ではガイドを受ける22pxの機構が細線へ変わり、左では止壁も重なる。
  - 改善: 両端へヘッド半幅11pxの端座を確保し、実割合をその間の有効軸へ正規化する。0/100で全22pxがガイド内へ入り、固定端座を未達の進捗と誤認させない。RTL/320/1%/不定/forcedも再確認する。

## 検証範囲

- 固定round-5 canonical100一致、portable CSS10一致。変更はR325/R335/R337/R342のみ、既合格6件60ファイル不変。reviewer-extra-5/checks.json。
- 独立native progress9の0/1/25/50/72/99/100/native値/表示値/有効fill比、minmax/clamp、長文320390768/RTL/forced/reduced/indeterminate/cleanupは成功。reviewer-progress-5/checks.json。
- normal motionの可視本文/数値は全9 hover二周固定。不定状態100ms×16観測で全9root横超過0。reviewer-motion-5/checks.json。
- R337 SVGを実測。empty mountで同じd/pathLength100/native50を確認。初期markup・native init・React renderの経路を照合。reviewer-geometry-5/checks.json。
- R342の320/768×LTR/RTL×0/1/50/100でhead位置と実可視幅を測定し、端の切断を再現。主量の割合一致と機構の完全表示を別に判定。
- R325固定nativeで実checkbox/値保持/Escape/focus/action/outside/disabled/任意form/local scroll/長文/RTL/forced/reduced/tooltip/cleanup成功。追加material画像で大きい実折返しと本文非干渉を確認。
- 通常造形は全10合格として固定し、残件はR342端点の機構表示のみ。正本と固定snapshot変更なし。

## 限界

- Chromiumのみ。forced/reducedはエミュレーション。React全形式の実起動は今回独立再実行せず、R337のSVG同一性をソースとnative empty mountで確認。
- 既合格6件と全730近似比較は以前の正式記録を引き継いだ。全件再監査ではない。
