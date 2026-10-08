# B033 round-5 最終独立検査

**全10件合格。** 固定round-5のみを評価し、実装・snapshotは編集していない。

R453/R465の主構造再設計、R458の狭幅の布形、R459/R460/R462の実接点を確認。前回の全6指摘を解消した。

|番号|部品|判定|
|---|---|---|
|R453|folded-tally-number|pass|
|R454|stone-block-number|pass|
|R456|spool-count-number|pass|
|R458|stitched-count-number|pass|
|R459|open-jaw-number|pass|
|R460|bookend-counter|pass|
|R462|rail-stop-number|pass|
|R463|ribbon-count-number|pass|
|R464|ceramic-count-number|pass|
|R465|perforated-counter|pass|

## R453 folded-tally-number

合格。左右対称の閉枠を廃し、片側52pxの操作列で、減らす上の裏折面と増やす下のL字の自由端を別々に読む一枚紙へ連続させた。上折面は読む紙の裏へ16px入り、二つの操作の間には下層で塞がれない実空隙がある。R413の一つの長い縦折面とは異なり、二つの実操作が表裏の折面を担って外形を作る。狭幅/長文/RTLでも同じ構造を維持し、入力/caret/nativehitは固定。

近似比較：旧R403, 旧R424, 413。

## R454 stone-block-number

合格、T保持。元の大きい石のアーチと明るい数値窓を維持し、左右の操作を同じ丸い端石へ揃えた。10pxの土台断面と窓の奥行きが連続し、元の別素材の白い四角キーから統一された。狭幅では同じアーチの内部下段に操作石が収まり、長い単位/負数とも読む窓へ収まる。

近似比較：元R454, 319, 374。

## R456 spool-count-number

合格、T保持。元の巻き芯と円形操作を保持し、数字の背後に走っていた横罫を左右12pxの巻き幅へ分離した。木のフランジ12px/5px上端/8px下端と丸い操作の材質が一致する。round-3の濃い±により明るい木面でも記号を読める。狭幅でも芯の形・巻き幅・平らな数字面を維持。

近似比較：元R456, 233, 98。

## R458 stitched-count-number

合格。狭幅の八角外周への置換と別の角丸窓を廃し、48pxの凹む腰と二つの操作環をつなぐ一枚の織布へ揃えた。数字と単位は同じ布上の無地に近い平らな領域へ固定される。狭幅でも上下の肩と凹部が実外形に残り、縫い目は文字を横切る主線にならず外端へ分かれる。広幅/狭幅が同じ支持関係として読める。

近似比較：333, 438, 398。

## R459 open-jaw-number

合格、T保持。狭幅の縦材上端へbutton border-topの6pxを含め、顎の下端との6px空隙を解消。1000/320pxのLTR/RTL実像で接続を確認し、320pxの両方向でstem.top-face.bottom=0px。元の上下の開いた顎と広幅の操作側材は保持され、文字や操作範囲を動かさない。

近似比較：元R459, 262, 439。

## R460 bookend-counter

合格、T保持。狭幅の読む紙のmargin-bottomを除き、紙下端と両本立て上端がLTR/RTLとも0pxで接する。広幅の紙束/44px本立ての関係、明るい木と濃い±、無地の数字面を保持。長い単位/負数でも支持と本文を分離できる。

近似比較：元R460, 320, 360。

## R462 rail-stop-number

合格、T保持。狭幅の縦材にbutton border-topの5pxを含め、レール下端との5px空隙を解消。320pxの両方向でstem.top-face.bottom=0px。赤い実量ストップは同じレール内を動き、native値/文字/hitは途中遷移でも固定される。

近似比較：元R462, 344, 392。

## R463 ribbon-count-number

合格、T保持。元の上下に巻く深い帯を残し、濃い紫と重い影を明るい織布へ整理した。10/12pxの上下端と、その内側14pxだけの織線が読む無地面から分離される。元の主題を別の形へ交換せず、数字/単位の読解と素材の密度を改善。狭幅も同じ巻端を保つ。

近似比較：元R463, 443, 283。

## R464 ceramic-count-number

合格、T保持。元の楕円の器と確定量の弧を維持し、局所的な濃い影を廃して操作ボタンと同じ釉薬の白・5/8pxの成形面へ揃えた。量の弧は外側の帯へ限定され、32px内側の数字と単位へ侵入しない。min/maxの実像で弧とnative値の即時更新、長い負数の全桁を確認。

近似比較：元R464, 215, 337。

## R465 perforated-counter

合格。紙の中央に離れていた歯車を紙の上へ移し、左右の実送り輪の中心に合わせて上の孔列を配置した。紙は一つの読む面として連続し、二つのhalfは孔の位相を合わせるmaskとして働く。暗背景でも孔は実空隙で、描画された78px外歯面が少なくとも一つの孔へ接する。二輪の逆回転と固定44pxのnative面を分け、数値/単位/当たりは動かさない。R116/R252の単なる送り紙とは、実増減の輪と孔列の接点が形を決める点で異なる。

近似比較：116, 252, 385。

## 実施範囲

- 固定source100 SHA-256とreview-input-5が一致。実portable CSS10もimport除去後に正本と一致。reviewer-materials-5/checks.json。3→5で86正本ファイル不変、既合格4件の40ファイルはすべて不変。inheritance.jsonへ保存。
- 全10固定native実配布を独立再操作し成功。Arrow/Home/End/実ボタン、上下限/小数step、draft/Enter/invalid/Escape、編集中selection、IME中のEnter抑止、readOnly/disabled/controlled拒否、実FormData/reset/destroy。logs/reviewer-numbers-r5.log。
- 全10で長い負数-12345.678/長い単位を320/390/768×LTR/RTL実撮影。input/hintのLTR、実font Canvas字幅<=native入力内幅、root overflow/nativehit、forced/reducedを再確認。captures/reviewer-numbers-5。
- 全10×1000/320px×LTR/RTLの40状態を追加撮影しnormal hover/leave/reenter各2回でinput/button/unitの部品全体基準の矩形/font固定。R453/R458/R465は該当12状態を暗背景でも追加撮影。reviewer-materials-5。
- R459/462は親のborder幅を含む疑似材の実上端と顎/レール下端が320px両方向で0px差。R460は紙と本立てのborder-box間が両方向0px。実像と数値を照合した。reviewer-materials-5/checks.json。
- R465の0/1/25/50/72/99/100×1000/320px×LTR/RTLの28状態で、実CSS78px歯面のpolygon/transformと位相を揃えた孔列を計測。両輪とも少なくとも一つの孔への最短距離が透明半径6.86px未満、最大6.691231px。0/50/72/100は暗背景画像も保存。reviewer-gears-5。
- 歯/孔の計測はpolygonとcircleの実CSS幾何による接触検査で、機械的な送りの全物理シミュレーションではない。代表画像で層と接点も照合し、数式の成功だけで造形を合格にしていない。
- R465/R462/R464で0→100の更新途中を1000px LTRと320px RTLで各3回撮影（待機60/100/300msの順）。確定値100を即時保持、入力/button/unit矩形/font固定。歯車とストップは素材だけが移動し、弧も字面から離れている。reviewer-motion-5/checks.jsonと18画像。
- R453は開いた紙の表裏/自由端、R458は凹腰の布の一貫性、R465は駆動輪と孔の接点を新主形として再審査。その他7件のT保持基準は動かさず、元監査/近似比較を継承した。

## 限界

- 独立操作はChromiumの固定native実配布。React4形式と共有基盤回帰は今回独立再実行しておらず主担当の成功報告と区別する。
- 730件全体を今回再操作したわけではない。元監査と対象/近似の画像・固定CSS・前回判定を用いた比較。
- 普通の文字列・選択/入力APIのテスト成功は、美的独立性や素材の接続の合格理由とは分離している。
