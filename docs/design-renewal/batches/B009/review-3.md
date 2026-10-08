# B009 round-3 独立検査

判定: **changes_requested — 9件 pass、R138 redesign**。固定 `snapshot/round-3` のみを評価。正本実装の編集なし。

|番号|ID|判定|
|---|---|---|
|R125|porcelain-lip-input|pass|
|R131|wayfinding-link|pass|
|R132|envelope-mouth-link|pass|
|R133|cantilever-arrow-link|pass|
|R134|archway-link|pass|
|R135|slide-rule-link|pass|
|R136|corded-pass-link|pass|
|R138|index-spine-link|redesign|
|R139|signal-arm-link|pass|
|R140|rivet-bridge-link|pass|

## R125 porcelain-lip-input

Tの非対称の口縁と曲率を保ち、上の3pxの浅い返しへ材質を集めた。focusを同じ外周へ置換し、下線を追加せず入力/clearの座標を保持。R112の琺瑯、R124の左右切断面と配置が異なる。元監査のTとして精度を評価し合格。

近似比較: R112, R124, R125元監査

## R131 wayfinding-link

左の折込み、先端のV字の実空隙、下へ返る折面が読む面へ接続する。通常の一枚の矢印標識から、負の空間と下の切断面が見える金属翼へ変わった。hoverは下の折面のみを広げ、native矢印と文字を動かさない。狭幅長文でも先端が文字を削らず、Aとして合格。

近似比較: R131元監査, R052, R144

## R132 envelope-mouth-link

Tの封筒の関係を保ち、下18pxの浅い折山と右の差込み口へ厚みを絞った。紙の下端が返しへ重なり、口だけが開く。R111の上下の口とは支持が下/右で異なる。通常・長文とも本文と矢印が紙面に残り合格。

近似比較: R111, R132元監査

## R133 cantilever-arrow-link

左柱・固定足・梁へ届く斜めの補強が一体で片持ちを作る。元のスライダー風の棒を脱し、右自由端が行先の矢印へ続く。補強の張りだけが変わり文字とクリック面は固定。R140の両端支持とR029の水路の天板とは外形/支持位置が異なる。

近似比較: R029, R140, R133元監査

## R134 archway-link

Tとして上のアーチを保ち、内壁と敷居の曲率/厚みを揃えた。固定px半径で長文時の高さにも適応し、曲線に文字が入らない。元の大きい上余白と低い文字位置も整理され、同じ主題の精度改善として合格。

近似比較: R104, R134元監査

## R135 slide-rule-link

上下の固定尺、中央の滑尺、側端の受けを実体で分けた。hoverで中板だけが-3pxから3pxへ動き、文字/矢印/押し面は固定。つまみや数値入力を作らず、一つのnativeリンクで進む方向を示す。R105の縦定規/顎やR068のスクロールthumbとは構造と操作対象が異なる。

近似比較: R105, R068, R135元監査

## R136 corded-pass-link

Tの左の丸い通し孔を実際に抜き、上のコード輪と孔をまたぐ結び目が接続する。白背景でも孔が透過。右の点線円を除き、標準矢印と競合しない。hoverでは輪だけが張り、札と文字は固定して合格。

近似比較: R113, R118, R136元監査

## R138 index-spine-link

操作は安定し、ページの小口と小栞は識別できる。しかし主な読む面は左の色帯を付けた平たい本形矩形で、説明する横向きの丸めた背の構造が外形に十分現れない。Aとして再設計が必要。

**R138-spine-structure / major**

読む面の構造は色帯付きの平たい本カードで、上にページ線と小栞を付けた状態が支配的。説明する「丸めた横向きの背」は上下の長辺に巻込みや背から紙束への接点がなく、既存の黄土色の本/紙カードに対する独立性がまだ弱い。長文ではさらに普通の本形矩形へ見え、リンクの行先を載せる固有の背という構造が薄れる。書籍らしい記号が識別できることだけではA合格にできない。

根拠: captures/reviewer-links-3/index-spine-link-initial.png、-long.png、captures/reviewer-states-3/index-spine-link-eyebrow-rtl.png。固定source/styles.cssのi1は13px/4pxの角丸矩形と左8px/右3pxの色帯、i2は上10pxの平行線、i3は下4pxの帯、i4は13pxの栞。hoverは栞の4px移動のみ。

改善方向: 具体案は、読む面を上下の長辺が巻き込む一体の背の帯として再構成し、両端にその巻込みが終わる断面を見せる構造。上の紙束は背の後ろへ入る接点と段を持たせ、下の表紙の返しも同じ背へ連続させる。左だけの太い色帯は撤去し、栞は紙束の間から出す。外形を変えるのは読む面の外の巻込み/小口/返しに限定し、文字・矢印・hitは固定する。長文320pxでも単なる表紙矩形へ戻らない、固定幅の断面を保つ。R021の開く左表紙やR102の蝶番/扉は反復しない。色変更、ページ線増量、大きい本の記号だけで済ませない。

近似比較: R021, R102, R335, R475, R138元監査

## R139 signal-arm-link

左の柱、切欠き、下の足、行先台への接続片が独立した非対称の外形を作る。54pxの腕は同じ実軸の中心で回転し、白い反射端が上がっても行先/矢印を遮らない。小さい付属棒から支持を伴う信号腕へ変わり、R014の横移動する戸やR010の中心回転子とも異なる。

近似比較: R010, R014, R139元監査

## R140 rivet-bridge-link

二つの端板と四つの鋲が梁/両端の支持へ接続し、34pxの一体の支持を切り抜いた中央開口を持つ。R029の独立した小脚と水面の構造より、広い両端の支持面と端板が外形を支配する。R133の一本柱/自由端とも異なる。hoverの薄い折面拡張中も文字は固定で合格。

近似比較: R029, R133, R140元監査

## 実施した検査

- 固定source100ファイルのSHA-256をreview-input-3.jsonと照合し全一致。全10配布native CSSと正本CSS（import除外）は一致。captures/reviewer-extra-3/checks.json。
- リンク9件をChromiumで実操作。native hrefを持つA、Enterによるhash遷移、非キャンセルclick、role追加なしを確認。hover/leave/reenterでも文字/矢印/hit矩形と色/opacityが固定。320px長文・RTL・forced/reducedを確認し9件全成功、pageerrorsなし。captures/reviewer-links-3/checks.json。
- 別実行でリンク9件のinitial/hover/leave/reenter/keyboard focusを450ms超待って45状態撮影し、computed transformを記録。長いeyebrow+custom SVGを320px LTR/RTLへ追加して18状態も撮影、横overflowなし。captures/reviewer-states-3/checks.json と各PNG。
- R131のV字空隙、R136の通し孔を白背景へ切り替えて実際の抜きとして確認。R133の補強/柱/梁、R139の実軸と接続台、R140の鋲/端板/開口を実画像とCSSで照合。
- R125入力1件のnative FormData/選択/合成CompositionEvent/clear/undo/readonly/disabled/error/320/390/768px長文/RTL/forced/reducedを実操作し成功。password+prefix/suffix+clear/revealの320px LTR/RTL2状態も確認。captures/reviewer-fields-3 と reviewer-extra-3。
- 全9リンクの長文/forced実画像を確認。captures/reviewer-links-3/long-contact.jpg と forced-contact.jpg。R125のforced実画像も確認し本文/ラベル/説明/clearの視認を確認。
- 全730元監査のbaseline.jsonで支持/書籍/橋/定規の候補を比較。links-stage.jpg、R335/R475 baseline画像、既合格R029の実画像、B001〜B008のレビューと既知の近似構造を参照。T4件の通常造形は元監査の整理基準を適用。

## 範囲と限界

- 独立ブラウザはChromium。forced/reducedはPlaywrightのメディアエミュレーション。R125のIMEは合成イベントで実OS IMEではない。
- React実props4配布形式や全体typecheck/契約は主担当ログを参照し、独立再実行していない。独立操作は固定native版。
- 全730件の再操作は行わず元監査と近似画像を比較した。親担当contact-stage.jpgのR139は旧造形のため最終判定には用いず、固定round-3で独立撮影した像を使用。
