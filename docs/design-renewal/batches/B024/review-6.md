# B024 round-6 独立レビュー

全10件 pass。R342の走査ヘッド端点clipを解消し、残件なし。通常造形は前回の合格基準を引き継ぐ。

## R325 letterfold-hint — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。下V封筒を撤去し、一枚の紙の上84px/下56pxの対角角を裏へ折り返す形になった。読む紙の外形と三角裏面が同じ斜め端点で接合し、大きい非対称の折返しが全輪郭を決める。R263の下の容器へ票を差す構造を反復せず、R293の左右三面とも異なる一枚紙の対角折返し。本文は中央へ固定され、長文/RTLでも重ならない。

## R331 odometer-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。元の計器ケースと数字窓の構成を保持し、重い暗外装を淡い成形縁へ整理した。固定の等幅数字と目盛り/送り帯の比率が整い、機能の読取りも明瞭。

## R333 stitched-meter-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。離れた二つの布片の実12px空隙へ、到達した幅だけ大きい交差糸を渡す。布色の通常バーと違い、進捗が二片の縫合そのものへ結び付く。0%は未縫合、1%の微小量から100%まで実到達幅で切られる。

## R335 book-spine-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。固定書背と量として増える紙束/表紙の通常造形を保持。不定状態は通常35%/reduced40%の中立表示へ変更し、animation/transformを止めた。通常モーション1.6秒観測でroot横超過0、前回の203px外逃げを解消。0/1/100・RTL・狭幅・forcedも回帰成功。

## R336 segmented-ruler-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。十区間を真っ直ぐな42px高へ揃え、10%ごとの固定境界と部分到達を同じ基準で読む構造が整った。元の良い定規の識別性を維持する調整として合格。

## R337 double-orbit-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。円と飾り楕円・別の点を撤去し、左右の軌道を順に一周する一本の8字経路へ再構成した。pathLength100、実経路長579.43、25%で左端(12,60)、50%で中心(120,60)、75%で右端(228,60)、100%で中心へ戻り、native割合と一つの経路量が対応する。別の点がないため遷移中も描いた経路の先端そのものが到達位置となる。初期DOM/empty native mountの同一SVGを実確認し、React render文字列も同じ経路。A独立性と前回の同期問題を解消。

## R338 caption-band-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。五段の元形と数値の階層を保持。20%ごとの固定面に実割合を流し、存在しない斜め終端の説明を訂正して実形と一致させた。元造形を維持する合格基準に沿う。

## R339 terraced-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。元監査T。五段の進行形を保持し、終端の暗いぼかしを除いて実量の境を明確にした。薄い境界と影のない面で読みやすく、元の段構造を精密化した。

## R341 channel-fill-progress — pass

round-5から正本10ファイルのハッシュ不変。合格判定を引き継ぐ。round-3から正本10ファイル不変。通常造形の合格を引き継ぐ。上下二壁・左の止壁が実76px溝を作り、三面を持つ充填体が内部の有効幅で増える。色付き横棒だけでなく支持の深さと充填断面が見え、0/1/100の量も止壁に隠れず一致する。

## R342 linear-radar-progress — pass

round-5の走査機構の合格造形を保持し、左右11pxの固定端座でヘッド半幅を予約した。320/768px×LTR/RTL×0/1/50/100の全16条件でhead22pxが全幅可視となり、外へ切れる部分は0。進行面は端座の間の有効幅で実割合に一致し、固定端座色により100%の未達領域とも混同しない。0%に進行面を残さず、1%も小量が見え、100%で有効域を満たす。forcedではhead/支持を外して正規の割合面へ整理。不定状態とnormal motionの文字固定も成功し、端点clipの残件を解消。

## 今回の検証範囲

- 固定round-6 canonical100ハッシュ一致、portable CSS10一致（import除外）。変更はR342 styles.css一つのみ、その他9件90ファイル不変。reviewer-extra-6/checks.json。
- R342の320/768×LTR/RTL×0/1/50/100全16条件でheadWidth=visibleHeadWidth=22px、outsideLeft/Right=0を実測。各実画像で上下ガイドの接合と固定端座を確認。reviewer-geometry-6/checks.json とscan PNG。
- 独立native進捗9件の0/1/25/50/72/99/100・native progress/表示・fill有効幅比、minmax/clamp/label、長文320390768、RTL、forced/reduced、indeterminateのvalue除去/中立表示、destroy回帰成功。reviewer-progress-6/checks.json、pageerror0。
- normal motion全9件hover→leave→reenter二周で可視heading/reading/steps矩形・font固定。不定状態100ms×16観測でroot横超過は全9ゼロ。reviewer-motion-6/checks.json。
- R337のSVG実量/empty mount同一性をgeometry6でも確認。R325hintはsource不変のためround-5の実native/UI/長文/RTL/forced検査を引き継ぎ、今回は再起動していない。
- 通常造形の全10合格基準を維持。今回の変更審査はR342端座/実量/接合とprogress9の機能回帰に限定。正本と固定snapshot変更なし。

## 限界

- Chromiumのみ。forced/reducedはエミュレーション。React全形式と不変hintの実操作は今回再実行せず、round-5までの記録を引き継ぐ。
- 全730近似比較・通常造形は前回までの正式レビューを引き継ぎ、全件再監査していない。
