# B011 round6 独立検査

**pass — 10件合格、差戻し0件。**

作者全10件はround5とhash一致。共有変更はmountBadges内のみ。ページ送り4件を両環境で再操作。アップロード/カレンダー6件は既合格の画像・操作結果と不変照合で継承。

## R364 stepped-dock-upload — pass

左右の低い支柱と下段へ出る床で荷受け台を構成。旧二重線から支える構造へ進み、操作領域は安定している。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。 round5は作者ハッシュ不変を照合して合格を継承。 作者・依存対象外関数の不変を照合し、前回の画像・実操作結果を継承。今回の再操作対象は同バッチのページ送り4件。

証拠: [uploads-portable-base-sheet.jpg](evidence-2/uploads-portable-base-sheet.jpg), [uploads-gallery-base-sheet.jpg](evidence-2/uploads-gallery-base-sheet.jpg), [uploads-portable-files-sheet.jpg](evidence-2/uploads-portable-files-sheet.jpg), [uploads-gallery-files-sheet.jpg](evidence-2/uploads-gallery-files-sheet.jpg)

## R369 outline-document-upload — pass

forced-colorsでも3列と折返しを維持。222px RTLのroot内に幅44pxの削除ボタンが収まり、portable x77..121 / root49..271、gallery x63..107 / root35..257。長い名前は折返し、実クリック後API値は空配列。実gallery viewport画像でも確認。エラー・通常色の改善を維持。 作者・依存対象外関数の不変を照合し、前回の画像・実操作結果を継承。今回の再操作対象は同バッチのページ送り4件。

証拠: [uploads-portable-base-sheet.jpg](evidence-5/uploads-portable-base-sheet.jpg), [uploads-gallery-base-sheet.jpg](evidence-5/uploads-gallery-base-sheet.jpg), [outline-document-upload-portable-files-forced.png](evidence-5/outline-document-upload-portable-files-forced.png), [outline-document-upload-gallery-forced-viewport.png](evidence-5/outline-document-upload-gallery-forced-viewport.png), [measurements-uploads-5.json](measurements-uploads-5.json), [measurements-uploads-viewport-5.json](measurements-uploads-viewport-5.json)

## R370 warm-material-upload — pass

実エラーの文字は12px、実背景比6.241:1へ改善。ファイル追加/削除/drop/disabled/form/reset、狭幅長文、RTL、forced/reducedで重大な残存問題は確認しなかった。 round5は作者ハッシュ不変を照合して合格を継承。 作者・依存対象外関数の不変を照合し、前回の画像・実操作結果を継承。今回の再操作対象は同バッチのページ送り4件。

証拠: [uploads-portable-base-sheet.jpg](evidence-4/uploads-portable-base-sheet.jpg), [uploads-gallery-base-sheet.jpg](evidence-4/uploads-gallery-base-sheet.jpg), [uploads-portable-files-sheet.jpg](evidence-4/uploads-portable-files-sheet.jpg), [uploads-gallery-files-sheet.jpg](evidence-4/uploads-gallery-files-sheet.jpg)

## R377 orbit-date-calendar — pass

有効な隣月日付はopacity1となり、通常文字の最小比率4.799:1。軌道の構造を保ち、月遷移・日付選択・低height操作も維持。 round5は作者ハッシュ不変を照合して合格を継承。 作者・依存対象外関数の不変を照合し、前回の画像・実操作結果を継承。今回の再操作対象は同バッチのページ送り4件。

証拠: [datepickers-portable-base-sheet.jpg](evidence-4/datepickers-portable-base-sheet.jpg), [datepickers-gallery-base-sheet.jpg](evidence-4/datepickers-gallery-base-sheet.jpg), [datepickers-portable-months-sheet.jpg](evidence-4/datepickers-portable-months-sheet.jpg), [datepickers-gallery-months-sheet.jpg](evidence-4/datepickers-gallery-months-sheet.jpg)

## R379 open-week-calendar — pass

前後月日付はrgb(82,99,72)、opacity1。週棚面rgb(230,236,217)との実比率5.364:1へ改善。通常文字を含む測定最小値4.928:1。portable/gallery一致。隣月日付の実クリックで値を更新して閉じる動作、hover往復、320/RTL/forced/reduced、前後月遷移を維持。 作者・依存対象外関数の不変を照合し、前回の画像・実操作結果を継承。今回の再操作対象は同バッチのページ送り4件。

証拠: [datepickers-portable-base-sheet.jpg](evidence-5/datepickers-portable-base-sheet.jpg), [datepickers-gallery-base-sheet.jpg](evidence-5/datepickers-gallery-base-sheet.jpg), [measurements-outside-5.json](measurements-outside-5.json), [contrast-summary-5.json](contrast-summary-5.json)

## R383 petal-month-calendar — pass

二枚の花弁の縁と前後の重なりが月表示を受け止め、片側角丸の反復から独自の構造へ進んだ。通常/320/RTLで年月と矢印は明快。日付グリッドの読みやすさを維持し、文字の最小比率5.617:1。日付選択・月遷移・低heightスクロール操作も通過。 round5は作者ハッシュ不変を照合して合格を継承。 作者・依存対象外関数の不変を照合し、前回の画像・実操作結果を継承。今回の再操作対象は同バッチのページ送り4件。

証拠: [datepickers-portable-base-sheet.jpg](evidence-4/datepickers-portable-base-sheet.jpg), [datepickers-gallery-base-sheet.jpg](evidence-4/datepickers-gallery-base-sheet.jpg), [datepickers-portable-months-sheet.jpg](evidence-4/datepickers-portable-months-sheet.jpg), [datepickers-gallery-months-sheet.jpg](evidence-4/datepickers-gallery-months-sheet.jpg)

## R392 track-stop-pages — pass

連続した軌道と立ち上がる選択位置がページ移動の意味を支える。狭幅でも折り返さず選択を表示する。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。 round5は作者ハッシュ不変を照合して合格を継承。 共有依存更新後、portable/galleryで999選択→root222px縮小、API2、scale.75、Tab、LTR/RTLを再確認。選択/フォーカスは列内、外側scrollY不変。Enter3→前へ2、readonly/disabledも成立。

証拠: [pagination-portable-222-sheet.jpg](evidence-6/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-6/pagination-gallery-222-sheet.jpg), [measurements-pagination-222-6.json](measurements-pagination-222-6.json), [measurements-pagination-native-6.json](measurements-pagination-native-6.json)

## R395 ledger-page-tabs — pass

棚に立つ帳簿の背と選択色・高さの関係が明快。狭幅の連続性と選択表示も維持。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。 round5は作者ハッシュ不変を照合して合格を継承。 共有依存更新後、portable/galleryで999選択→root222px縮小、API2、scale.75、Tab、LTR/RTLを再確認。選択/フォーカスは列内、外側scrollY不変。Enter3→前へ2、readonly/disabledも成立。

証拠: [pagination-portable-222-sheet.jpg](evidence-6/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-6/pagination-gallery-222-sheet.jpg), [measurements-pagination-222-6.json](measurements-pagination-222-6.json), [measurements-pagination-native-6.json](measurements-pagination-native-6.json)

## R400 coin-stack-pages — pass

硬貨の縁と積層で現在位置を示し、行を分けずに視線を保つ。選択/フォーカス表示は縮小と RTL に追従。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。 round5は作者ハッシュ不変を照合して合格を継承。 共有依存更新後、portable/galleryで999選択→root222px縮小、API2、scale.75、Tab、LTR/RTLを再確認。選択/フォーカスは列内、外側scrollY不変。Enter3→前へ2、readonly/disabledも成立。

証拠: [pagination-portable-222-sheet.jpg](evidence-6/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-6/pagination-gallery-222-sheet.jpg), [measurements-pagination-222-6.json](measurements-pagination-222-6.json), [measurements-pagination-native-6.json](measurements-pagination-native-6.json)

## R402 shuttle-key-pages — pass

片側が細まるキーと細い進路で旧カプセルと区別できる。数値と操作位置を動かさず選択を示す。 round4は作者・共有navigationハッシュ不変を照合し、round2の合格を継承。 round5は作者ハッシュ不変を照合して合格を継承。 共有依存更新後、portable/galleryで999選択→root222px縮小、API2、scale.75、Tab、LTR/RTLを再確認。選択/フォーカスは列内、外側scrollY不変。Enter3→前へ2、readonly/disabledも成立。

証拠: [pagination-portable-222-sheet.jpg](evidence-6/pagination-portable-222-sheet.jpg), [pagination-gallery-222-sheet.jpg](evidence-6/pagination-gallery-222-sheet.jpg), [measurements-pagination-222-6.json](measurements-pagination-222-6.json), [measurements-pagination-native-6.json](measurements-pagination-native-6.json)

## 範囲と継承

今回の依存更新に対する限定再検査。造形/可読性等の既存結果は作者不変を条件にreview-5から継承。

旧合格の作者ファイル不変と、共有navigation.tsのmountBadges以外の不変を照合。実操作を再検証して依存更新を確認した。

全状態の無欠陥保証ではない。作者・共有ソースの編集は行っていない。
