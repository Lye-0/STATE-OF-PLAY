# B008 round-1 独立検査

判定: **changes_requested — 8件 pass、R116 adjust、R121 redesign**。固定 `snapshot/round-1` のみを評価し、正本実装は変更していない。

|番号|ID|判定|
|---|---|---|
|R115|rail-clamp-input|pass|
|R116|carbon-copy-entry|adjust|
|R117|engraved-label-field|pass|
|R118|ribbon-slot-entry|pass|
|R119|corner-scribe-field|pass|
|R120|counterweight-field|pass|
|R121|wax-tablet-input|redesign|
|R122|folded-margin-entry|pass|
|R123|suspended-baseline-field|pass|
|R124|drafting-tray-field|pass|

## R115 rail-clamp-input

下の7pxの実体レールと17×22pxの二つの締付け台がプレート下端をまたぐ。上顎の2px移動だけに入力時の変化を置き、レール/台/本文は固定。R048の左右C顎、R086の角帽子と異なる支持位置と輪郭を持つ。小さな機構だが下端の外形全体を作っており、Aとして合格。

近似比較: R048, R086, R637

## R116 carbon-copy-entry

原紙/紺のカーボン/黄の控えの三材質が下端へ露出し、focusでカーボンだけが2px出る構成は明快。R035の大きく広がる階段状の紙、R111の口へ挿す紙とは異なる。しかし左の送り孔が不透明な塗り丸のため、給紙端の素材表現には修正が必要。

**R116-feed-holes / major**

送り孔と説明する丸は紙に空いた穴でなく、不透明な暗い点の模様になっている。左帯が白背景でも暗色の点を保持し、紙の厚み/貫通という材質が成立しない。B007 R113で適用した孔の基準と同じく、濃色を背景に近づけるだけでは解決しない。

根拠: captures/reviewer-material-1/carbon-copy-entry-dark-initial.png と -white-initial.png。固定source/styles.cssのfx i4はradial-gradientの#514d42を紙の左帯へ塗っており、背景変更後も同じ暗色。

改善方向: 左の給紙端を原紙/カーボン/控えの共通の綴じ端として保ち、その帯の孔をmask等で全ての下層を含め実際に抜く。現在の三層の端、カーボンだけの2px移動、本文とaction固定は維持。白/暗色で孔の透過を再確認する。

近似比較: R035, R111, R113

## R117 engraved-label-field

二つの斜めに落とした角、上の刻印ラベルと浅い削り窓、左右の溝付きネジを一枚の真鍮板にまとめた。文字の前を光の模様が走らず、窓と板の厚みが分離する。R083の支点/楔、R085の引出し面とは固定加工面の構造で差がある。

近似比較: R083, R085, R117元監査

## R118 ribbon-slot-entry

片側の二つの切込みへ入る帯、間を返る帯、下へ出る燕尾の端を分けた。入力時に下の余りだけが張り、値の平面には入らない。R101の上棒へかける番号タブ、R123の両端支持の基線とは支持と読む位置が異なる。

近似比較: R101, R123, R709

## R119 corner-scribe-field

Tの既存の角の性格を保持し、左右の長いC字を四つの短い罫書き端へ分けた。長辺が開いており、focusの外輪郭は明確。形自体は簡潔だが、Aの新規機構を要件とせず、元監査のTとして端の整理とUI安定を評価して合格。

近似比較: R048, R119元監査

## R120 counterweight-field

二本の吊り糸が上の水平糸へ接続し、右の滑車の上/右の接線位置へ続く。錘の5px上昇と縦糸の5px短縮が一致し、本文は固定。R022の二本吊りの紙とは側方の滑車と釣合い錘が機構と外形を変え、R123の中央たわみとも異なる。

近似比較: R022, R098, R123

## R121 wax-tablet-input

読みやすさと木/蝋の配色は整うが、通常造形は汎用的な角丸の黄色い面を茶色い外枠で囲み、左へ二つの短い丸棒を付けた構成が中心。Aに必要な固有の支持・加工・入力との関係が弱く、再設計を要する。

**R121-wax-support / major**

木の受けと蝋の収まりを表す形が、色違いの二重角丸枠と浅い内影にほぼ集約されている。二本の筒は何を綴じるか/どこへ通るかが見えず、左に付けた短い装飾として残る。通常時も入力時も一般的な額縁入力との差が小さく、Aの固有の加工面と支持関係として不足。UIの安定だけではA合格にできない。

根拠: captures/reviewer-material-1/wax-tablet-input-dark-initial.png と -white-focus.png、captures/reviewer-fields-1/wax-tablet-input-rtl.png。i1はinset:-6pxの角丸矩形、i2は同形の黄面と上3pxの内影。i3/i4は19×9pxの丸棒で、focusによる固有形の変化はない。

改善方向: 一案として、木枠を四片の留め継ぎが見える浅い掘込みへ作り直し、蝋面をその掘込みへ流し込んだ一枚として収める。右下の一箇所だけに外周へ続く広めの丸い注ぎ口/溜まりを設け、木の切断面と蝋の端を輪郭で分ける。根拠のない左の二本の丸棒は撤去する。focusの素材変化は上端の掘込みの深さなど一箇所に限定し、本文/clear/revealは固定。木目の追加・金色への変更・枠の増加だけでは済ませない。名前の写実ではなく、形だけでも普通の角丸枠と分かれる収まりを求める。

近似比較: R112, R104, R117, R121元監査

## R122 folded-margin-entry

Tとして左23pxの折面を保ち、上下13pxの相補的な三角と中央面を同一の幅へ接続。浮いた飾り三角ではなく一枚の戻しとして読める。R091の多数の連続折山、R111の紙を挟む口とは異なる。本文とactionの予約幅も安定。

近似比較: R091, R111, R122元監査

## R123 suspended-baseline-field

両端の6pxの鋲、実際にたわんだSVGの一本の線、中央の小さな錘が接続する。focusで線の高さ14→4.2pxと錘の9px上昇が同期し、端の鋲と入力は固定。R118のリボンとは構造が完全に分かれ、R120の滑車とも同じ機構の反復ではない。

近似比較: R118, R120, R709

## R124 drafting-tray-field

Tの非対称3px/12pxの受けを維持し、両端4pxの切断面と薄い外周へ整理した。focusは同じ外周を置換し、下の光線/内影を増やさない。簡潔な枠であることをAの独自性の根拠にはしていない。元のTとして曲率と輪郭精度を評価し合格。

近似比較: R112, R114, R124元監査

## 実施した検査

- 固定source100ファイルのSHA-256とreview-input-1.jsonが全一致。全10 native配布CSSと正本CSS（import除外）が一致。captures/reviewer-extra-1/checks.json。
- Chromiumで全10 nativeを操作。フォーム送信値、focus/fill/clear/error時の入力矩形/文字属性、選択、合成CompositionEvent中のclear抑止、clear/undo、readonly/disabled、320/390/768px長文ラベル/説明、RTL、forced/reducedを実行。10件全成功、pageerrorsなし。review-b007-fields.mjs B008 1 と captures/reviewer-fields-1/checks.json。
- 全10件へpassword+prefix/suffix+clear/revealを実挿入して320pxのLTR/RTL計20状態を確認。選択[1,4]の保持、action/本文領域の分離、横overflowなし。captures/reviewer-extra-1/*-password-*.png。
- 固定native全10件を暗色/白の背景でinitial/focus/leave/reenter計80状態撮影し、通常motionの解除/再進入とcomputedを照合。captures/reviewer-material-1/checks.json とPNG。
- R115の下のレールと二つの締付台、R120の滑車接線/吊り線/錘、R123の鋲/基線/中央錘を通常/focus実画像とCSSで確認。R120の糸と錘が共に5px、R123の錘が9px上昇。本文は動かない。
- 全10件のforced/320px RTL長文の実画像を確認。captures/reviewer-fields-1/forced-contact.jpg と rtl-contact.jpg。本文・ラベル・補助文・clearが読める。
- baseline.json全730監査の名前/理由から近似を照合し、textboxes-stage.jpg、R637/R709 baseline個別画像、既合格R022/R035/R085/R112の実画像と比較。既合格B001〜7のレビュー記録も参照し、R118とR123、R120とR123の構造差を判定。TのR119/R122/R124にAの根本再設計基準を加えていない。

## 範囲と限界

- Chromiumでの独立検査。forced/reducedはPlaywrightによるエミュレーション。実OS日本語IMEでなく合成CompositionEvent。
- Reactの実props4形式と主担当のcategory/契約/typecheckは提供ログを参照し、独立再実行していない。独立実操作は固定native版。
- 730件を全て再操作したものではなく、元監査と近似画像を比較した。任意のアプリ背景/フォント/全入力属性の組合せを網羅したものではない。
