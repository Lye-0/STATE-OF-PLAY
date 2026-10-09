# B009 round 3 独立検査

10件中7件 pass、3件 changes_required。R316はAの造形判断、R329/R330は長い連続文字の実再現クリッピングとして区別する。作者ファイルは変更していない。

## R292 signal-capsule-notice — pass

丸い信号端子の厚みと横へ接続する薄い読取り面が分かれ、以前の二重枠カプセルより固有の構造を持つ。狭幅長文でも端子と本文が重ならない。


証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/toasts-portable-sheet.jpg](evidence-3/toasts-portable-sheet.jpg), [evidence-3/toasts-gallery-sheet.jpg](evidence-3/toasts-gallery-sheet.jpg), [evidence-3/gallery-sample-fired-sheet.jpg](evidence-3/gallery-sample-fired-sheet.jpg)

## R293 folded-message-notice — pass

細い左右の折り目を残し本文の無地面を確保。320pxと長文RTLでも文字が折り目の濃い面へ出ない。


証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/toasts-portable-sheet.jpg](evidence-3/toasts-portable-sheet.jpg), [evidence-3/toasts-gallery-sheet.jpg](evidence-3/toasts-gallery-sheet.jpg), [evidence-3/gallery-sample-fired-sheet.jpg](evidence-3/gallery-sample-fired-sheet.jpg)

## R297 console-line-notice — pass

展示にもff-notice-copyの凹んだ明るい面が現れ、実発火との欠落差を解消。説明文字も実背景上5.491:1以上。下の操作行が情報表示と分かれる。


証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/toasts-portable-sheet.jpg](evidence-3/toasts-portable-sheet.jpg), [evidence-3/toasts-gallery-sheet.jpg](evidence-3/toasts-gallery-sheet.jpg), [evidence-3/gallery-sample-fired-sheet.jpg](evidence-3/gallery-sample-fired-sheet.jpg)

## R301 open-bracket-notice — pass

離れた四隅から長短の連続した左右支柱へ変更され、開いた括弧で読み面を支える構造が成立。本文面は連続し、周縁の空隙と文字は分かれる。


証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/toasts-portable-sheet.jpg](evidence-3/toasts-portable-sheet.jpg), [evidence-3/toasts-gallery-sheet.jpg](evidence-3/toasts-gallery-sheet.jpg), [evidence-3/gallery-sample-fired-sheet.jpg](evidence-3/gallery-sample-fired-sheet.jpg)

## R310 warm-confirm-notice — pass

結果見出しと説明を揃え、追加操作を点線下の行へ分離。色替えに留まらず、結果を読んでから次の操作へ進むBの用途を示す。


証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/toasts-portable-sheet.jpg](evidence-3/toasts-portable-sheet.jpg), [evidence-3/toasts-gallery-sheet.jpg](evidence-3/toasts-gallery-sheet.jpg), [evidence-3/gallery-sample-fired-sheet.jpg](evidence-3/gallery-sample-fired-sheet.jpg)

## R316 margin-bracket-hint — changes_required

機能・可読性は成立するが、現状の固有差は左太線と内側細線が中心。本文→仕様→チェック→下線操作の構成がR330と近く、綴じ側という意図を伝える紙面や支持の構造が弱い。Aとして再設計を要求する。

- 機能・可読性は成立するが、現状の固有差は左太線と内側細線が中心。本文→仕様→チェック→下線操作の構成がR330と近く、綴じ側という意図を伝える紙面や支持の構造が弱い。Aとして再設計を要求する。 改善案：単に罫線を増やさず、綴じる接点・紙面の前後・注釈を置く独立した余白など、構造そのものが用途を説明する形へ。本文列を保ちながらR330との構成差を作る。

証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/hints-portable-sheet.jpg](evidence-3/hints-portable-sheet.jpg), [evidence-3/hints-gallery-sheet.jpg](evidence-3/hints-gallery-sheet.jpg), [measurements-keyboard-3.json](measurements-keyboard-3.json), [evidence-3/short-portable-sheet.jpg](evidence-3/short-portable-sheet.jpg), [evidence-3/short-gallery-sheet.jpg](evidence-3/short-gallery-sheet.jpg)

## R324 recessed-spec-hint — pass

仕様面の間にも不透明なケースの下地があり、背後の文字が混ざる問題を解消。本文の読み面と段差を持つ仕様欄が一体のケースに収まる。


証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/hints-portable-sheet.jpg](evidence-3/hints-portable-sheet.jpg), [evidence-3/hints-gallery-sheet.jpg](evidence-3/hints-gallery-sheet.jpg), [measurements-keyboard-3.json](measurements-keyboard-3.json), [evidence-3/short-portable-sheet.jpg](evidence-3/short-portable-sheet.jpg), [evidence-3/short-gallery-sheet.jpg](evidence-3/short-gallery-sheet.jpg)

## R329 neutral-detail-hint — changes_required

項目と値の二列、項目側の面、明確な設定操作は比較用途に適する。ただし320pxの長い連続文字が本文スクロール領域で切れる。

- 320px viewportで本文へLongUnbrokenProjectIdentifier1234567890を含めると折返しされず、inner領域から30.84px切れる（panel外へは9.84px）。LTR右／RTL左、portable/gallery双方。innerはoverflow-x:hiddenなので末尾を水平スクロールで読めない。 改善案：本文へoverflow-wrap:anywhere等を適用し、日本語・連続識別子・URLの折返しと320px/RTLを確認する。

証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/hints-portable-sheet.jpg](evidence-3/hints-portable-sheet.jpg), [evidence-3/hints-gallery-sheet.jpg](evidence-3/hints-gallery-sheet.jpg), [measurements-focused-3.json](measurements-focused-3.json), [measurements-keyboard-3.json](measurements-keyboard-3.json), [evidence-3/short-portable-sheet.jpg](evidence-3/short-portable-sheet.jpg), [evidence-3/short-gallery-sheet.jpg](evidence-3/short-gallery-sheet.jpg)

## R330 warm-reading-hint — changes_required

明朝の本文と広い行間、控えめな仕様・操作で読む用途を優先し、R329との違いは成立。ただし320pxの長い連続文字が大きく切れる。

- 320px viewportで本文へLongUnbrokenProjectIdentifier1234567890を含めると折返しされず、inner領域から101.59px切れる（panel外へは76.59px）。LTR右／RTL左、portable/gallery双方。innerはoverflow-x:hiddenなので末尾を水平スクロールで読めない。 改善案：本文へoverflow-wrap:anywhere等を適用し、日本語・連続識別子・URLの折返しと320px/RTLを確認する。

証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/hints-portable-sheet.jpg](evidence-3/hints-portable-sheet.jpg), [evidence-3/hints-gallery-sheet.jpg](evidence-3/hints-gallery-sheet.jpg), [measurements-focused-3.json](measurements-focused-3.json), [measurements-keyboard-3.json](measurements-keyboard-3.json), [evidence-3/short-portable-sheet.jpg](evidence-3/short-portable-sheet.jpg), [evidence-3/short-gallery-sheet.jpg](evidence-3/short-gallery-sheet.jpg)

## R332 orbital-mark-progress — pass

傾いた軌道面と正面の数値が分かれ、弧の終点で進捗を表現。0/25/100で表示と実値を確認し、割合不明では数値が…、native value属性なし、終点非表示となる。


証拠：[measurements-final-3.json](measurements-final-3.json), [motion-summary-3.json](motion-summary-3.json), [contrast-summary-3.json](contrast-summary-3.json), [evidence-3/progress-portable-sheet.jpg](evidence-3/progress-portable-sheet.jpg), [evidence-3/progress-gallery-sheet.jpg](evidence-3/progress-gallery-sheet.jpg), [measurements-focused-3.json](measurements-focused-3.json), [evidence-3/orbital-mark-progress-portable-unknown.png](evidence-3/orbital-mark-progress-portable-unknown.png), [evidence-3/orbital-mark-progress-gallery-unknown.png](evidence-3/orbital-mark-progress-gallery-unknown.png)

## 検査範囲

全20経路でhover文字矩形差0px。定常文字contrast最小5.059:1以上。ヒント8経路でチェック/Space/Escape/適用/フォーカス復帰成功。9枚のcontact sheetと個別画像を視認。

特定状態・ターゲットの検査で無欠陥保証ではない。実gallery通知は実発火、長文やduration0/API probeでは同一hashの凍結initをgallery CSS環境の複製rootへ使用。初回のupdate API誤記はretryの成功結果で置換。forced切替直後のfocus疑義は通常媒体の独立keyboard probeで棄却。setData(null)は0へ正規化されるためunknown確認はupdateFoundationの専用probeを根拠とする。
