# B011 round4 独立再検査

**changes_required — 8件 pass / 2件差戻し。**

変更5件を凍結版portableと実galleryで再操作・再撮影。既合格5件と共有navigationはround2からハッシュ不変を照合し継承。検査担当による作者変更はない。

## R364 stepped-dock-upload — pass

左右の低い支柱と下段へ出る床で荷受け台を構成。旧二重線から支える構造へ進み、操作領域は安定している。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。


証拠: [uploads-portable-base-sheet.jpg](evidence-2/uploads-portable-base-sheet.jpg), [uploads-gallery-base-sheet.jpg](evidence-2/uploads-gallery-base-sheet.jpg), [uploads-portable-files-sheet.jpg](evidence-2/uploads-portable-files-sheet.jpg), [uploads-gallery-files-sheet.jpg](evidence-2/uploads-gallery-files-sheet.jpg)

## R369 outline-document-upload — changes_required

通常色の長い名前は折返し、RTL222pxと実galleryで削除ボタンまで収まる。実クリック後APIは空配列。エラー文字は12px・実背景比6.417:1へ改善。ただしforced-colorsでレイアウト修正が失われる。

- **overflow_forced_colors**: forced-colors active + RTL + 長いファイル名では旧はみ出しが残る。portable222pxのroot x49..271に対し名前x-188、削除ボタンx-228/幅30px。galleryでも名前x-189/削除x-229。通常色では解消している。 改善案: forced-colorsでも3列、min-width:0、折返し、削除列の確保を維持する。色や装飾のリセットからレイアウト制約を分離する。

証拠: [uploads-portable-base-sheet.jpg](evidence-4/uploads-portable-base-sheet.jpg), [uploads-gallery-base-sheet.jpg](evidence-4/uploads-gallery-base-sheet.jpg), [uploads-portable-files-sheet.jpg](evidence-4/uploads-portable-files-sheet.jpg), [uploads-gallery-files-sheet.jpg](evidence-4/uploads-gallery-files-sheet.jpg), [outline-document-upload-gallery-files-long-rtl-222.png](evidence-4/outline-document-upload-gallery-files-long-rtl-222.png), [measurements-uploads-222-4.json](measurements-uploads-222-4.json)

## R370 warm-material-upload — pass

実エラーの文字は12px、実背景比6.241:1へ改善。ファイル追加/削除/drop/disabled/form/reset、狭幅長文、RTL、forced/reducedで重大な残存問題は確認しなかった。


証拠: [uploads-portable-base-sheet.jpg](evidence-4/uploads-portable-base-sheet.jpg), [uploads-gallery-base-sheet.jpg](evidence-4/uploads-gallery-base-sheet.jpg), [uploads-portable-files-sheet.jpg](evidence-4/uploads-portable-files-sheet.jpg), [uploads-gallery-files-sheet.jpg](evidence-4/uploads-gallery-files-sheet.jpg)

## R377 orbit-date-calendar — pass

有効な隣月日付はopacity1となり、通常文字の最小比率4.799:1。軌道の構造を保ち、月遷移・日付選択・低height操作も維持。


証拠: [datepickers-portable-base-sheet.jpg](evidence-4/datepickers-portable-base-sheet.jpg), [datepickers-gallery-base-sheet.jpg](evidence-4/datepickers-gallery-base-sheet.jpg), [datepickers-portable-months-sheet.jpg](evidence-4/datepickers-portable-months-sheet.jpg), [datepickers-gallery-months-sheet.jpg](evidence-4/datepickers-gallery-months-sheet.jpg)

## R379 open-week-calendar — changes_required

opacity1へ改善したが、前後月日付の文字と週棚面の組合せで4.298:1が残る。

- **contrast**: 有効な前後月日付は13px、rgb(99,113,90)、opacity1。実際の週棚面rgb(230,236,217)との比率4.297969:1。portable/gallery同値。実クリックで値を更新できる有効操作のため、無効状態の例外にはできない。 改善案: 週棚面を背景として、隣月文字を4.5:1以上へ暗くする。

証拠: [datepickers-portable-base-sheet.jpg](evidence-4/datepickers-portable-base-sheet.jpg), [datepickers-gallery-base-sheet.jpg](evidence-4/datepickers-gallery-base-sheet.jpg), [datepickers-portable-months-sheet.jpg](evidence-4/datepickers-portable-months-sheet.jpg), [datepickers-gallery-months-sheet.jpg](evidence-4/datepickers-gallery-months-sheet.jpg)

## R383 petal-month-calendar — pass

二枚の花弁の縁と前後の重なりが月表示を受け止め、片側角丸の反復から独自の構造へ進んだ。通常/320/RTLで年月と矢印は明快。日付グリッドの読みやすさを維持し、文字の最小比率5.617:1。日付選択・月遷移・低heightスクロール操作も通過。


証拠: [datepickers-portable-base-sheet.jpg](evidence-4/datepickers-portable-base-sheet.jpg), [datepickers-gallery-base-sheet.jpg](evidence-4/datepickers-gallery-base-sheet.jpg), [datepickers-portable-months-sheet.jpg](evidence-4/datepickers-portable-months-sheet.jpg), [datepickers-gallery-months-sheet.jpg](evidence-4/datepickers-gallery-months-sheet.jpg)

## R392 track-stop-pages — pass

連続した軌道と立ち上がる選択位置がページ移動の意味を支える。狭幅でも折り返さず選択を表示する。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-strip-sheet.jpg](evidence-2/pagination-portable-strip-sheet.jpg), [pagination-gallery-strip-sheet.jpg](evidence-2/pagination-gallery-strip-sheet.jpg)

## R395 ledger-page-tabs — pass

棚に立つ帳簿の背と選択色・高さの関係が明快。狭幅の連続性と選択表示も維持。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-strip-sheet.jpg](evidence-2/pagination-portable-strip-sheet.jpg), [pagination-gallery-strip-sheet.jpg](evidence-2/pagination-gallery-strip-sheet.jpg)

## R400 coin-stack-pages — pass

硬貨の縁と積層で現在位置を示し、行を分けずに視線を保つ。選択/フォーカス表示は縮小と RTL に追従。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-strip-sheet.jpg](evidence-2/pagination-portable-strip-sheet.jpg), [pagination-gallery-strip-sheet.jpg](evidence-2/pagination-gallery-strip-sheet.jpg)

## R402 shuttle-key-pages — pass

片側が細まるキーと細い進路で旧カプセルと区別できる。数値と操作位置を動かさず選択を示す。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。


証拠: [pagination-portable-base-sheet.jpg](evidence-2/pagination-portable-base-sheet.jpg), [pagination-gallery-base-sheet.jpg](evidence-2/pagination-gallery-base-sheet.jpg), [pagination-portable-strip-sheet.jpg](evidence-2/pagination-portable-strip-sheet.jpg), [pagination-gallery-strip-sheet.jpg](evidence-2/pagination-gallery-strip-sheet.jpg)

検査した状態・操作と数値は review-4.json / measurements-*.json に記録。8枚の比較画像を視認。RTLレイアウト、hover出入り再進入、forced/reduced、実ファイル/FormData/reset、calendar各月/閏年/キーボード/低heightを確認。全状態の無欠陥保証ではない。
