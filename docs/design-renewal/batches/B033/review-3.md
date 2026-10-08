# B033 round-3 独立検査

**4件合格、4件調整、2件再設計。** 固定round-3を評価。実装・snapshotは編集していない。

R453/R465は主構造を再設計。R458は狭幅の布形、R459/R460/R462は狭幅の支持接点を調整する。全10native APIは成功している。

|番号|部品|判定|
|---|---|---|
|R453|folded-tally-number|redesign|
|R454|stone-block-number|pass|
|R456|spool-count-number|pass|
|R458|stitched-count-number|adjust|
|R459|open-jaw-number|adjust|
|R460|bookend-counter|adjust|
|R462|rail-stop-number|adjust|
|R463|ribbon-count-number|pass|
|R464|ceramic-count-number|pass|
|R465|perforated-counter|redesign|

## R453 folded-tally-number

再設計。小紙片から大きくはなったが、実像は中央の明るい矩形を左右対称の斜角面で四辺閉じる面取り枠である。左右のnative増減を枠面へ置いただけでは、一枚紙の表裏・自由端・折る方向が主形に現れない。旧R403/旧R424の閉じた面取り枠に近い。

近似比較：旧R403, 旧R424, 413。

- **R453-closed-beveled-frame / design / major**：中央の数値矩形の周りを左右二つの50%台形が覆い、上下も対称の帯で閉じる。説明の大きな折面/読む谷という関係は色分けで示されるが、物理的に開いた紙端や表裏の切替がなく汎用枠に見える。
- 改善：四辺の閉鎖を廃し、一枚紙の折る向きと自由端が外形に表れる構造へ。例えば増減の二つの実押面を、片方は上へ返り、もう片方は下へ抜ける大きい非対称の操作折面へ置き、読む中央紙を開いた長辺へ渡す。R413の単一の長い縦折面を操作記号だけ交換して再利用せず、二つの実操作が異なる折面を担う固有の配置を作る。
- 根拠：captures/reviewer-numbers-3/folded-tally-number-initial.png、reviewer-materials-3/folded-tally-number-1000-ltr-dark.png。固定CSS stepper before/afterの左右対称台形と中央faceの全面背景。

## R454 stone-block-number

合格、T保持。元の大きい石のアーチと明るい数値窓を維持し、左右の操作を同じ丸い端石へ揃えた。10pxの土台断面と窓の奥行きが連続し、元の別素材の白い四角キーから統一された。狭幅では同じアーチの内部下段に操作石が収まり、長い単位/負数とも読む窓へ収まる。

近似比較：元R454, 319, 374。

## R456 spool-count-number

合格、T保持。元の巻き芯と円形操作を保持し、数字の背後に走っていた横罫を左右12pxの巻き幅へ分離した。木のフランジ12px/5px上端/8px下端と丸い操作の材質が一致する。round-3の濃い±により明るい木面でも記号を読める。狭幅でも芯の形・巻き幅・平らな数字面を維持。

近似比較：元R456, 233, 98。

## R458 stitched-count-number

広幅の主形は合格。二つの操作環の間を凹腰の一枚布がつなぎ、縫い目を外側へ分けるため、単なる紫の矩形から変わった。ただし狭幅では凹腰を廃し、一般的な八角外周＋角丸窓と下の丸キーになる。広幅で成立した布の支持関係を狭幅にも保持する調整が必要。

近似比較：333, 438, 398。

- **R458-narrow-sling-lost / consistency / major**：container<=280pxでbeforeの凹腰polygonを八角形へ置換し、縫い目も全非表示。320px実像は大きい角丸の数値窓を八角の板へ載せ、下に二つの丸キーを置いた形で、広幅の二環を結ぶ凹腰の布を失う。
- 改善：狭幅でも読む芯から実操作環へ広がる二つの肩と、布の凹む部分が同じ一枚の外形として残るように組む。必要なら布を縦に長くし、下の両環へ張る肩/襞を設ける。中央の無地の読字領域は確保しつつ、窓と丸キーの汎用パネルへの置換を避ける。
- 根拠：captures/reviewer-materials-3/stitched-count-number-1000-ltr.png と320-ltr.png、reviewer-numbers-3/stitched-count-number-long-rtl-320.png。narrow CSSの別polygon。

## R459 open-jaw-number

通常主形は合格、T保持。上下の顎を幅広い実操作の側材へ連続させ、元の孤立した括弧から保持機構へ整理した。しかし狭幅に追加した縦材の先が顎へ届かず、6pxの空隙が残る。

近似比較：元R459, 262, 439。

- **R459-narrow-support-gap / consistency / major**：320px LTR/RTLで顎の下端とボタン上の追加縦材との間に6pxの空隙。buttonのborder-top:6pxがabsolute pseudoの原点へ加算され、top:-16pxだけでは16pxの配置差を埋めない。
- 改善：ボタンの実border-boxを基準に縦材上端を決め、上border6pxも含めて顎へ少なくとも接する長さ/位置へ延ばす。接点に小さい重なりを持たせ、LTR/RTLで読む面・nativehitを動かさず確認する。
- 根拠：captures/reviewer-materials-3/checks.json：320の両方向でstem.top - face.bottom = 6。open-jaw-number-320-ltr.png/rtl.png、および長文画像。

## R460 bookend-counter

通常主形は合格、T保持。巨大な濃茶の押面を44pxの明るい本立てへ整理し、無地の紙束と0gapで接する広幅の関係は良好。狭幅では紙と二つの本立てを10px離し、保持の接点を失う。

近似比較：元R460, 320, 360。

- **R460-narrow-bookend-gap / consistency / major**：320px LTR/RTLで読む紙の下端と左右の本立て上端が10px離れる。narrow faceのmargin-bottom:10pxにより、支持と紙が別々に浮く。
- 改善：狭幅の本立てが紙の端を受けるよう、10pxの余白を接合部材で埋めるか紙と本立ての配置を接する位置へ揃える。広幅の0gapと文字/押面の固定を維持する。
- 根拠：captures/reviewer-materials-3/checks.json：320の両方向でbutton.top - face.bottom = 10。bookend-counter-320-ltr.png/rtl.png。

## R462 rail-stop-number

通常主形と値連動は合格、T保持。実目盛り床・5pxレール・22pxの赤いストップを同じ軸へ整理し、値に応じてレール内を移動する。狭幅の追加縦材には5pxの空隙があり、操作端への接続を最後まで満たしていない。

近似比較：元R462, 344, 392。

- **R462-narrow-rail-support-gap / consistency / major**：320px LTR/RTLでレール下端と追加縦材上端が5px離れる。buttonのborder-top:5pxの分だけ、top:-24pxの縦材が想定より下へ来る。
- 改善：absolute pseudoのborder-box起点を含めて位置/長さを直し、レール下端へ重なる上端にする。値に対応するストップと文字の配置はそのまま保持し、左右操作を動かさない。
- 根拠：captures/reviewer-materials-3/checks.json：320の両方向でstem.top - face.bottom = 5。rail-stop-number-320-ltr.png/rtl.png。

## R463 ribbon-count-number

合格、T保持。元の上下に巻く深い帯を残し、濃い紫と重い影を明るい織布へ整理した。10/12pxの上下端と、その内側14pxだけの織線が読む無地面から分離される。元の主題を別の形へ交換せず、数字/単位の読解と素材の密度を改善。狭幅も同じ巻端を保つ。

近似比較：元R463, 443, 283。

## R464 ceramic-count-number

合格、T保持。元の楕円の器と確定量の弧を維持し、局所的な濃い影を廃して操作ボタンと同じ釉薬の白・5/8pxの成形面へ揃えた。量の弧は外側の帯へ限定され、32px内側の数字と単位へ侵入しない。min/maxの実像で弧とnative値の即時更新、長い負数の全桁を確認。

近似比較：元R464, 215, 337。

## R465 perforated-counter

再設計。上下の送り孔は暗背景でも真に抜けており、歯車は確定値に応じて逆回転する。しかし孔は紙の上下端、歯車は中央左右に離れて置かれ、歯が孔へ一度も触れない。元監査の点穴が数値の操作へ結び付かない不足を、回る飾りの追加で置き換えている。

近似比較：116, 252, 385。

- **R465-feed-wheels-disconnected-from-holes / design / major**：固定native実像で上下の孔列と左右の歯車の間に大きい空白がある。紙面に二つの歯車を貼った関係で、孔へ歯を掛ける/紙を受ける構造がない。単に歯車を値で回しても、穴と駆動材の接点が成立しない。
- 改善：実孔列と送り輪を同じ接触帯へ配置する。例えば上下のnative送り輪へ紙の上下の孔列を渡すか、左右の孔列を操作輪へ寄せる。輪の歯と穴が出会う位置、紙が輪の前/後を通る層、固定して読む中央の領域を別々に示す。文字やhitを動かさず材料だけの値連動を保つ。紙へ小さい歯車を追加するだけの形は廃する。
- 根拠：captures/reviewer-materials-3/perforated-counter-1000-ltr-dark.png/320-ltr-dark.png、reviewer-numbers-3/perforated-counter-initial.png/min.png/max.png。固定CSSの上下8px孔列と中央44pxボタンの歯車。

## 実施範囲

- 固定source100 SHA-256とreview-input-3が一致。実portable CSS10もimport除去後に正本と一致。captures/reviewer-materials-3/checks.json。
- 2→3は98正本不変、spool-count-number/styles.cssとbookend-counter/styles.cssの記号色変更のみ。reviewer-materials-3/inheritance.json。
- 固定native10件を独立ブラウザ操作し全API検査成功。Arrow/Home/End/実ボタン、上下限/小数step、draft/Enter/invalid/Escape、編集中selection、IME中のEnter抑止、readOnly/disabled/controlled拒否、実FormData/reset/destroy。logs/reviewer-numbers-r3.log、captures/reviewer-numbers-3。
- 全10件で長い負数-12345.678/長い単位を320/390/768×LTR/RTLで実撮影。input/hintのLTR方向、実fontのCanvas字幅がinput内幅へ収まること、root overflowとnativehitを検証。forced/reducedも実操作/撮影。
- 全10件×1000/320px×LTR/RTLの40状態を追加実撮影。normal motionでhover/leave/reenter各2回、input/buttons/unitの部品全体を基準にした矩形/fontを比較して固定。min/maxの値素材表示はAPI検査でも撮影した。reviewer-materials-3。
- R453/R458/R465は40状態のうち該当12状態を暗背景でも追加撮影し、紙/布の層・自由端・真空隙・孔を確認。R465の孔は実在するが、送り輪への接続とは別に判定した。
- R459/R462の狭幅pseudo上端を親border幅を含めて算出し、顎/レールの下端から6px/5px離れることをLTR/RTLで実像と照合。R460はnative部材のborder-box間10pxを実測。
- 元監査10件のR/T理由とbefore画像、既承認の近似/旧棄却形を比較。T7件は元の形の強みを保持する精度基準で評価し、R3件には大きい主形と支持/操作の関係を要求した。

## 限界

- 独立操作はChromiumの固定native実配布。React4形式と共有基盤回帰は今回独立再実行しておらず主担当の成功報告と区別する。
- 730件全体を今回再操作したわけではない。元監査と対象/近似の画像・固定CSS・前回判定を用いた比較。
- 普通の文字列・選択/入力APIのテスト成功は、美的独立性や素材の接続の合格理由とは分離している。
