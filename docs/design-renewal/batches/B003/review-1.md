# B003 round 1 検査

**6件pass、2件adjust、2件redesign。overall: changes_requested。**

全10件でキーボード・busy抑止・本文/押し面の安定・320px長文を確認。主な残課題は造形で、R049/R050は再設計、R041/R052は形と線の調整が必要。金具系4件は接続と動きの差が成立しており、一括したフレーム反復とはしない。強制色スピナーの切れ目消失は10件共通の軽微なUI指摘。

## R041 guilloche-button — adjust

彫刻を上下へ分離し文字を安定させた点は良い。旧版より模様は見えるが、小さな線片と山形が混ざり、精密な連続彫刻としての仕上げが不足する。

- **major / engraving-continuity**: 上下11pxの帯に、曲線の途中で途切れた短線・斜線が反復し、二本の曲線が編み合う連続性を追いにくい。細線の傷という旧指摘を密度増加だけで完全には解消できていない。 根拠: captures/reviewer/guilloche-button-initial.png / -hover.png、固定styles.cssの二つのrepeating-radial-gradientと32px周期。 改善: 周期の端で接線がつながる二本の曲線を設計し、途切れた線片を減らす。例えばSVG等で連続する経路を定義して、線の太さ・交差・端の収まりを揃える。ラベル外の彫刻帯という構成は維持し、模様をさらに増やさない。
- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R041旧版、R055 Satin Runner Button、R034 Terminal Foil（B002 round-2）。

## R042 hinged-escutcheon-button — pass

固定した押し面と左右の翼を節のある軸で接続し、翼だけが奥行き方向に回る。C型の顎や下から支える脚とは支持方法と動きが異なる。busyでも明るい面と文字を維持し、Aとして合格。

- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R048 Reframed Key Button、R051 Bookend Button、R032 Pivot Corner Case（B002 round-2）。

## R044 closure-tab-button — pass

右へ張り出すタブ、折返し線、銅の留めが押し面の縁をまたぎ、非対称な封緘構造が読める。hoverでタブが傾いても文字とクリック領域は固定される。単なる色付き側帯ではない。

- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R047 Stitched Loop Button、R050 Braille Edge Button、R298 Sealed Envelope Notice。

## R045 ratchet-face-button — pass

三つの銅の歯と連続した受けレール、外側の支持柱が接続する。hover時の下方向への噛合いはR051の両端の寄せと異なり、色違いのフレーム反復とは判断しない。busy時も面とラベルが沈まず、旧指摘を解消。

- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R051 Bookend Button、R048 Reframed Key Button、R013 Comb Contact Toggle（B001）。

## R047 stitched-loop-button — pass

穴のある革のループ、縫い目、上下の留めが独立しながら面につながっている。片側の輪郭としなりで差が成立し、長文でも留め位置と読み面を保つ。既存の細い輪付きラベル類より構造が明確。

- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R253 Loop Label Choice、R436 Loop Label Tags、R199 Saddle Loop Check。

## R048 reframed-key-button — pass

左右のC型の顎が一枚の読み面を挟む形が明確。軸回転のR042、歯を下へ噛ませるR045、外へ足を張るR051とは接合と動きが異なる。busyで面を分割せず、全体のまとまりも保てている。

- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R042 Hinged Escutcheon Button、R051 Bookend Button、R258 Clasp Band Choice、R637 Rail Clamp Context。

## R049 ivory-gasket-button — redesign

非対称な端部と材質の明暗は整理されたが、主要な差はD字に近い押し面と厚い外枠に留まる。Bとしての端正さをAの独立性の根拠にはできない。

- **major / gasket-structure**: 見た目は象牙色の丸いボタンを太い青灰の輪郭で囲んだ構成。周囲の6%圧縮も枠全体の拡縮に見え、支持輪が押し面をどう受けるかを示す固有の機構に至らない。旧版の汎用カプセルからの差が角丸・枠幅・色に偏る。 根拠: captures/reviewer/ivory-gasket-button-initial.png / -hover.png。固定styles.css: 外周5px/左8pxのborder、hoverでscaleY(.94)と角丸変更。 改善: 押し面の外で、局所的に圧縮する弾性部とそれを受ける保持部の関係を見える形へ再設計する。例えば切れ目や張り出しを持つ露出した弾性部分を設け、押すとその部分がたわむ構成にする。文字面は固定し、外枠の太線化や角丸変更だけで終えない。
- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R043 Offset Porcelain Button、R059 Quiet Confirm Button、R049旧版。

## R050 braille-edge-button — redesign

五つの鋲は個別の丸い実体になり、旧版の横縞との説明不一致は解消。ただし留め板と押し面の接続が弱く、Aとしては依然として側帯への点の追加に近い。

- **major / fastener-connection**: 鋲がすべて側板の内側にあり、押し面と金具をつなぐ箇所へ視線が導かれない。紙面との重なりも主に2pxに留まり、点列の動きは横2pxだけ。二色の矩形を並べて片方へ点を置いた構成から抜け切れていない。点字の字義的再現ではなく、部品の独立した形が不足する問題。 根拠: captures/reviewer/braille-edge-button-initial.png / -hover.png、固定styles.css。側板幅26px、押し面開始24px、鋲はleft10px/幅5px。 改善: 押し面の切欠きや受けへ実際にかかる留め板を作り、鋲がどの面を保持しているか分かる重なりと輪郭を設計する。板の端部や押し面との接合を主役にし、点の拡大・追加だけで対応しない。
- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R044 Closure Tab Button、R197 Bookplate Check、R475 Bookplate Profile、R021旧版とB001改善版。

## R051 bookend-button — pass

左右の細い支持材と外へ出る足、下の紙束がL字の支持として読める。上顎を持つC型クランプや連続した歯付きレールとは輪郭が異なる。両端の移動と固定本文の関係も明確で合格。

- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R045 Ratchet Face Button、R048 Reframed Key Button、R460 Bookend Counter、R029 Canal Bridge Panel（B002）。

## R052 inverted-ridge-button — adjust

二つの折返し要素は実装され、hover時の中央の小さな開きも確認できる。ただし通常サイズでは二色の下帯という印象がまだ強く、稜を持つ形の見せ場が弱い。

- **major / ridge-silhouette**: 中央の稜が細い色の継ぎ目に見え、両面の大半は一段の浅い台形の底帯へ縮退している。hoverでも小さな中央の割れ目が増える程度で、旧指摘の「下辺の色帯以外は一般的なボタン」からの構造差が弱い。 根拠: captures/reviewer/inverted-ridge-button-initial.png / -hover.png。押し面下の折返しは高さ16px、正面の下端はbottom13px。 改善: 中央の稜と両側の傾斜面が、陰影だけでなく外周の高低として読めるように接続を組み直す。正面の押し面を固定したまま、折返しの勾配・中央の奥行き・端の収まりを明確にする。帯を単に厚くする、二色差を強めるだけの変更は避ける。
- **minor / forced-colors-spinner-gap**: スピナーのtransparentな右辺も強制色で描かれ、切れ目のない円になる。回転していても視覚的な変化が分からず、通常時よりbusyの手掛かりが弱い。aria-busyと再実行抑止は正常。 根拠: captures/reviewer/forced-busy.png。Chromium forced-colors:activeで全10件をbusyにして実描画。 改善: 強制色でもスピナーの切れ目を色以外の形で残す。例えば右辺のborder-style:noneなどを適用し、リングの寸法とラベル位置は変えない。

近似比較: R054 Folded Fin Button、R046 Prismatic Cut Button、R035 Terraced Paper Panel（B002）。

## 実施した検査

- UI-DIRECTION.mdと既存検査基準を継続適用。B003/design.md、全10件の固定CSS/markup、共通action-button controller/base CSSを確認。正本ハッシュ100/100一致。
- portable native CSSは@importの再配置パスのみ正規化して全10件が正本と一致。固定snapshotをVite+Chromiumで独立起動。
- 全10件へ正規のclickリスナーを追加し、Enterで1回実行→setLoading(true)→busy中のEnter/Space/programmatic clickがすべて抑止→loading解除→Spaceで2回目実行、を確認。
- 全10件でbusy前後のボタン幅/高さ、ラベルの部品内矩形/色、押し面の背景色、art/rootのopacityが完全一致。busyでもaria-disabled以外で押し面を沈ませない。
- 全10件で通常モーションhover→120ms→leave→100ms→reenterを実操作し、中間transform/background-position、初期/hover/busy画像を保存。
- 320pxで全10件へ長い日本語ラベルを投入し、全件scrollWidth=320。折返しと装飾/文字の分離を画像で確認。
- 全10件のbusy状態をforced-colorsで実描画。スピナーの切れ目消失を共通の軽微な指摘として記録。reduced-motion時は装飾/スピナーのtransition0s、animation none。ページエラー0。
- baseline.jsonの全730件から近似主題・機構を検索。buttons/checkboxesカテゴリ一覧、R191/R199/R253/R258/R436/R460/R637等の画像とB001/B002合格20件の記録・画像を比較。
- R042/R045/R048/R051は金属色と中央の固定矩形を共有するが、蝶番の回転・歯と受け・C顎・L脚の接続と動きが異なるため、同じフレームの色替えとは判定しない。

追加証拠: `captures/reviewer/`。スクリプト: `tools/review-b003.mjs`。正本実装は編集していない。

## 限界

- 全730件の画像を等倍率で精査し全操作を繰り返したわけではない。全件メタデータ検索と近似候補の画像比較。
- React/StrictMode/全配布形式/複数配置の実行はメインの検証範囲。本検査は固定portable native JSの動作とCSS一致を独立確認。
- 実機タッチ、OS実高コントラスト、スクリーンリーダー読み上げは未実施。

再検査では指摘解消と回帰を確認し、合格6件の通常造形に新しい好みを追加しない。
