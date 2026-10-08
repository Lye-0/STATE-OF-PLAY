# B027 round-4 最終独立レビュー

**訂正：9 pass / 1 adjust（R374）。** R374の通常造形は合格だが、狭幅で金曜の数字が切断面へかかる。初回の全体幾何確認によるpassを撤回し、実画像の再確認に基づいて訂正。固定snapshotのみを検査し、正本・snapshot未編集。

## R373 folded-month-calendar — pass

六週それぞれの上下の大きい折返し面と斜めの肩が、実際の七日を載せる週の単位を形作る。見出し帯の色変更から離れ、日付列と折面を分けて読める。R222の三つの連続した本文面とは独立した週紙の反復で構造が異なる。 正本60hash不変の既合格6件として造形基準を維持し、今回native回帰も再実行した。

## R374 stone-grid-calendar — adjust

再設計を合格。42個の同形キーを廃し、平日5列の一体の上面と週末2列の深い切込みにより、一枚の異なる高さの採掘面を作る。14px/12pxの向かい合う切口と上下の受面が読み取れ、曜日の意味と大きい材料形が結び付いた。七列の文字とhitは固定し、狭幅・RTLでも5/2の境界が曜日と一致する。

## R375 folio-date-calendar — pass

再設計を合格。二葉/二腕を廃し、一枚の紙の六本のT形紙舌が露出した櫛状の背に噛み合う。42px週高、全252pxの背を実測。slot y9–33に対して紙舌の肩y7–35が上下2px裏へ入り、8pxの細い根元が紙面へ4px重なる。320/390/768のLTR/RTLで実寸を保持し、R275二票/二腕やR360環綴じ、R378糸綴じと接合原理が異なる。

## R376 perpetual-desk-calendar — pass

暦の読む紙と底の受面を左右の開いたA形の脚が支える。102pxの二脚と82px下方領域が全体外形を決め、元の色帯パネルから独立した卓上支持へ変わった。下方の不透明な無地面によって背後の別文字が構成に混入せず、狭幅・RTL・timeでも操作と支持を分けている。 正本60hash不変の既合格6件として造形基準を維持し、今回native回帰も再実行した。

## R377 orbit-date-calendar — pass

T保持。元の上弧と丸い選択を残し、3px弧・円形の実月送り・固定した月面へ曲率を整理。新しい複雑機構を課す対象ではなく、元の軽い輪郭を精密化する基準で合格。 正本60hash不変の既合格6件として造形基準を維持し、今回native回帰も再実行した。

## R378 stitched-planner — pass

調整を合格。42pxの各週紙と10pxの実gapに、上孔(8,8)/下孔(16,34)を通って次週の上孔へ続く一つの経路が揃う。最後の週は下孔で終端する。紙のmaskと糸を同時に鏡映し、RTLでも同じ側の二孔を通る。六週/三幅/両方向の幾何と実画像で前回の独立X・左右分離を解消した。

## R379 open-week-calendar — pass

再設計を合格。六つの独立Uを廃し、全六週の水平受面が左右交互の曲がりで一筆に繋がる24px厚/9pxの小口を持つ支持板になった。読む日付は各床へ固定し、上部の開放と外周の連続した曲がりが大きい固有形を作る。R373の独立紙折面とは、連続する一枚の支持板という構造が異なる。

## R380 letterpress-month — pass

T保持。セリフの数字と週の基線を残し、年月・日付・選択版面の比率を整理した。文字の位置を変えず実選択とhoverを読み取れ、元のタイポグラフィ主体の良さを壊していない。 正本60hash不変の既合格6件として造形基準を維持し、今回native回帰も再実行した。

## R381 index-month-calendar — pass

48pxの肩付き曜日札と直下の月面を結び、選択日と同じ曜日だけを照合色にする。単なる月名の小札から実情報を探す七索引へ変わり、R314の項目名タブとは月の七列全体を決める構造で区別できる。全七曜日をLTR/RTLで選択し、一つだけ正しい索引が着色することを独立確認。 正本60hash不変の既合格6件として造形基準を維持し、今回native回帰も再実行した。

## R382 rail-date-calendar — pass

実月送りを担う二つの台車が6pxレールに載り、16pxの二吊具が曜日面へ重なる。上の横支持と吊った読む紙が接続し、R372のドラム/曜日軸/選択キャリッジとは支持の向きと機構が違う。操作部・本文を固定したまま材料関係が読める。 正本60hash不変の既合格6件として造形基準を維持し、今回native回帰も再実行した。

## 今回の検証

- 固定round4正本100hashとreview-input-4.jsonが全一致、portable CSS10一致。既合格6件60hashがround2から不変。reviewer-extra-4/checks.json。
- 全10actual native date exportを独立再実行。keyboard/ARIA/focus復帰/FormData/minmax/disabled日/invalid draft/normalize/required/readonly/disabled/date/range/time/datetime/reset/open destroy、長文320390768/panel fit/day hit/RTL/forced/reducedすべて成功。reviewer-dates-4/checks.json。
- 全10件×4モード×LTR/RTLの80実表示を撮影・確認。背景の遮蔽、紙と支持の接点、実文字と操作面を照合。reviewer-materials-4。
- 全10件normal hover/leave/reenter各2回、350ms後のbutton/strong/weekday glyph矩形とfont固定。R381全7曜日×LTR/RTLの14条件で正しい索引一つだけが着色。reviewer-motion-4/checks.json。
- 変更4件×320390768×LTR/RTLの24条件で実row/grid/pseudoの寸法を記録。R375 grid252/row42、R378 row42/実pitch52を全条件で検証。reviewer-contacts-4/checks.json。
- 接点測定の最初の試行は開くアニメーション中100msで251.796pxを観測したため、通常アニメーション完了400msで再測定した。固定後の寸法assertは弱めず、全24条件成功。
- 前回指摘したR374素材構造、R375重複、R378経路とRTL、R379支持形を再評価し解消。主担当Reactログは補助参照であり、独立native再実行と区別。

## 限界

- Chromium Linuxおよびforced-colors/reduced-motionエミュレーション。実支援技術の読み上げや全ブラウザまでは未確認。
- React4形式を独立再起動していない。主担当ログは補助資料。
- 全730件の元監査・近似を参照したが、今回全730件を再操作したものではない。

## R374 追加指摘・判定訂正

一体5/2石面の通常造形は合格。ただし320pxで金曜の2桁数字の右端が14px切断面の色領域へ入り、無地の読む面を外れる。初回の全体幾何確認ではglyph Rangeと切断面の交差を見落としたため、画像を再拡大しpassからadjustへ訂正。

captures/reviewer-dates-4/stone-grid-calendar-narrow-320.png。金曜11/18/25の右側が5列面の端の14px切断面にかかる。

改善：5/2の間へ切断面専用の幅を予約し、曜日と全六週の同じ7semantic列へ反映する。320/390/768のLTR/RTLで数字の実Rangeと両切断面の境界を比較し、全glyphが平面内へ収まることを確認する。
