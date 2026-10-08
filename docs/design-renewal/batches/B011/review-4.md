# B011 round-4 独立検査

判定: **changes_requested — 6件 pass、R158/R160/R162/R164 adjust**。固定 `snapshot/round-4` を評価。正本実装の変更なし。R164の通常造形は合格、残件は縦配置のUI。

|番号|ID|判定|
|---|---|---|
|R156|copper-pin-tabs|pass|
|R157|stitched-folio-tabs|pass|
|R158|instrument-tabs|adjust|
|R159|floating-bookmark-tabs|pass|
|R160|negative-slot-tabs|adjust|
|R161|slanted-spine-tabs|pass|
|R162|rung-tabs|adjust|
|R163|embossed-archive-tabs|pass|
|R164|open-corner-tabs|adjust|
|R165|film-caption-tabs|pass|

## R156 copper-pin-tabs

6pxの銅棒が中空の留め片を通り、本文の背の全高支持へ接続する。縦では棒と留め片を向きごと変え、全ての紙を保持する。R151の二面の圧着翼、R153の紐とは剛体を通す機構で分かれる。文字と押し面を動かさず、Aとして合格。

近似比較: R151, R153, R156元監査

## R157 stitched-folio-tabs

紙の外側24pxの革へ実孔を抜き、連続した斜めの糸を孔中心に通す。白/暗色背景で孔が透過し、紙面上の縫い目模様ではなく背の縫合として読める。R031の織物、R096の機織り、R082の縫製帯とは素材と綴じ位置が異なる。A合格。

近似比較: R031, R082, R096

## R158 instrument-tabs

Tの目盛り/小番号/選択カーソルを保持し、文字位置は安定している。ただし三角の先端が本文へ届かず、元監査で求めた計器と本文の接続精度は修正が必要。

**R158-pointer-contact / major**

三角の先端と本文の間に3pxの隙間がある。目盛りの中に小さな三角が置かれるだけで、設計するカーソルから本文への連続した断面に届かない。

根拠: captures/reviewer-joints-4/instrument-tabs-horizontal.png と checks.json。tab y579.890高さ67、after top65高さ10で先端y654.890、panel top657.890。

改善方向: 三角の根元と見出しを固定したまま、指標の先端/目盛り領域の予約寸法を合わせ本文へ実際に到達させる。高さとbottomの調整後はoverflowで先端が切れないことも実画像で確認する。Tの計器の主題や番号は変更しない。

近似比較: R105, R135, R158元監査

## R159 floating-bookmark-tabs

TのV字の栞と静かな配色を保ち、6pxの差込み口へ帯の足を重ねて隙間を除いた。選択帯と本文を読める面として分けつつ接点を示す。R153の吊り札とは支持が異なり、元監査の精度基準で合格。

近似比較: R153, R159元監査

## R160 negative-slot-tabs

Tの下索引と論理順を保持し、選択足が口をまたぐ設計は適切。ただし実描画ではその足がスクロール領域でクリップされ、通常の下タブのままになっている。クリップと口の配置を修正したい。

**R160-slot-clipping / major**

実borderの6pxの口へ伸ばした選択足がtablistのクリップ範囲外になり、帯の上へ出ない。選択紙と本文が6pxの帯で分断され、説明する差込みの保持面が実際には描画されていない。

根拠: captures/reviewer-joints-4/negative-slot-before-overflow.png と -diagnostic-overflow-visible.png、slot-diagnostic.json。tablistはoverflow-x:auto/overflow-y:hidden、afterはtop:-6px。診断の一時DOM変更でoverflow:visibleにすると選択足の接合が現れる（source未変更）。

改善方向: 6pxの口をscrollport内の背景/予約paddingとして置き、選択足がその内側で口を越えられる構造へ変える。狭幅の横スクロールを壊す単純なoverflow全解除を最終修正にしない。DOMの論理順と下配置は保持する。

近似比較: R159, R160元監査

## R161 slanted-spine-tabs

Tの大きい索引番号を保ち、15pxの斜めの裁断面と本文の同幅の背を組んだ。字を斜めへ傾けず、番号をさらに拡大して装飾の代わりにしない。元監査の形の精度として合格。

近似比較: R138, R161元監査

## R162 rung-tabs

二本の桁と縦の三段、本文の上下支持という構造は元の普通の水平列から分かれている。R154の一本の案内溝とも異なる。ただし縦で本文下支持が桁から離れ、横でも段と桁に隙間が残る。構造自体を変えず接続を修正する必要がある。

**R162-ladder-contact / major**

縦桁がタブ列の自然高で終わる一方、下の支持片は本文の下端に付くため、本文が高いほど接点が離れる。短文でも離隔し、任意の長文で支持片が大きく下へ浮く。横配置も三つの段が上下の桁へ届いていない。

根拠: captures/reviewer-joints-4/rung-tabs-vertical.png、-vertical-tall.png、-horizontal.png と checks.json。縦第2選択: list y590.671高さ254→末端844.671、下支持y878.562〜881.562。横は5pxの桁に対し9pxのlist paddingで上下4px空く。

改善方向: 縦では二本の桁の高さを本文とタブ列の大きい方へ追従させ、下の受けが同じ桁へ接触するようgrid/listのstretchと装飾の基準を統一する。横では段と上下の桁の間の4pxを除き、横木が両桁へ接続する寸法へ揃える。本文/見出しを動かす演出や新しい意匠を追加する必要はない。

近似比較: R154, R143, R162元監査

## R163 embossed-archive-tabs

丸く返した章扉、型押しした番号窓、保存函の背、右の半円の指掛けを同じ材質へまとめた。右の抜きは内面に塞がれず白/暗色背景に透過。R121の木の留め継ぎと蝋、R104の陶の凹みとは収まり/切欠き/章の入口の関係で分かれ、A合格。

近似比較: R121, R104, R163元監査

## R164 open-corner-tabs

54×36px/48×34pxの実開角と12px離したL断面が、閉じた箱でない一体の石の面を作る。R141の全面が開いたアングル、R154のずらした案内溝と十分異なり、通常造形はA合格。ただし320px縦配置で見出しが切れるためUIの修正が必要。

**R164-vertical-label-clip / major**

横配置で右上の開口を避ける54pxの予約幅を縦列へ引き継いだため、320pxの縦配置で見出しが極端に細くなり、字が切れる。documentの横overflowが0でもラベルの可視範囲は正常ではない。

根拠: captures/reviewer-vertical-320/open-corner-tabs.png と checks.json。verticalでもlist padding-left:8px/right:54pxが残り、min96pxの列の実タブ幅は34px。番号と長いラベルが右側を切られ、一文字ずつの長い縦列になる。

改善方向: verticalでは本文の右上の開口のための余白をタブ列から外す。列の幅を見出し/番号へ確保し、長文でもラベル矩形が各hit内へ収まるようにする。本文側の開角/文字避けの余白と通常造形は維持する。

近似比較: R141, R154, R164元監査

## R165 film-caption-tabs

Tのフィルム帯/明るい本文面を保持し、14px帯の5px孔を実際に抜いて選択窓を本文へ接続した。暗い材質を本文まで広げず、孔は白/暗色で透過する。R113の二列入力窓とは一本の帯と三見出しの構造で分かれ、元監査Tとして合格。

近似比較: R113, R152, R165元監査

## 実施した検査

- 固定source100ファイルのSHA-256がreview-input-4.jsonと全一致。全10native配布CSSと正本CSSをimport除外で照合し全一致。captures/reviewer-extra-4/checks.json。
- 全10nativeタブを実本文で操作。ARIA/ID/hidden、方向キー/End、R162初期verticalのArrowDown、manual、disabled skip、input値とselection保持、hidden panelからのfocus移動、縦横、320390768長文、RTL、forced/reducedが全成功。captures/reviewer-tabs-4/checks.json。
- 全10のhover/leave/reenter/選択前後の文字矩形/フォント/hit不変を追加確認。forcedを400ms待ち、選択文字の白/非選択の黒と背景の区別をcomputed/実画像で照合。captures/reviewer-tabs-extra-4/checks.json、forced-contact.jpg。
- 全10を横/縦の選択2番で独立撮影し、pseudoと本文/列の位置を記録。R162へ任意の長文を追加し支持片と桁の乖離を再現。captures/reviewer-joints-4。
- R157/R163/R164/R165を白背景に変えて全レイヤーの孔/切欠きが塞がれないか実画像で確認。糸と孔、指掛け、開角、フィルム帯の透過が成立。
- 全10を320px×vertical×長い見出し×inputを持つ第3本文で追加撮影。document幅は全件320だが、R164で内部ラベルのクリップを発見。captures/reviewer-vertical-320。
- R160の表示クリップを一時DOMのoverflow変更で切り分けた。診断画像のみ保存し、正本/source/snapshotファイルは変更していない。
- baseline.jsonの全730監査とtabs-stageの既存形、既合格B001〜B010の支持/綴じ/孔/本文面を比較。R再設計5件とT保持5件を分け、Tへ根本再設計を追加要件にしていない。

## 限界

- 独立ブラウザはChromium。forced/reducedはPlaywrightのエミュレーション。
- React実items4配布形式は主担当ログを参照し独立再実行していない。独立操作は固定native版。
- 全730件の全状態を再操作したものではなく、元監査と近似画像/既合格記録を比較した。旧contact-stage.jpgのR164でなく固定round-4の独立画像を評価した。
