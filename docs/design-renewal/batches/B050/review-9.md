# B050 round 9 独立検査

**changes_requested — 2 adjust / 8 pass。再設計要求は解消。**

R682の読字面・状態時の実空隙、R685の全幅不整合を残件とする。

## R680 folio-register-table — pass

実列名・sort・resizeの連続折冠を保持。resizer原点をtop0へ修正し、LTR/RTLとも操作面bottom456.33がthead bottom480.33内に収まり、前版の本文40px侵入を解消。

最寄比較: R259, R163, R671原案

## R681 caption-register-table — pass

題字・説明・件数が三つの実読面を担い、横の三角小口と低い足へ連続する。狭幅では全幅の縦読みに移り、前版の62px題字幅を解消。単なる表全高の側札から離れており承認。

最寄比較: R621, R679, 汎用sidebar/table配置

## R682 blueprint-register-table — adjust

平坦な青い上罫から、実列名を載せる厚い上軸と実表示位置を載せる側軸へ変わり、本文との空隙・各実行の接点が主形を決める。機能追加だけだった前版との差を承認する。ただし読字遮蔽と状態背景による空隙消失が残り、完成判定は調整待ち。

最寄比較: R622, R582旧板案, R672, R677

- **R682-axis-over-reading**: 番号軸の縦::afterが「表示位置」の文字を貫通する。通常LTR/RTLに加えdark forced狭幅では白い縦材が同じ実文字へ重なる。
  改善方向: 疑似材を実読面の外端へ移し、各実行の横接点だけ空隙へ出す。forcedは必要に応じ装飾材を除き、実文字の前面へ線を通さない。長い列名/RTLでもRangeとの非交差を確認。
  証拠: captures/reviewer-material-9/blueprint-register-table-ltr-leave.png, captures/reviewer-extra-9/blueprint-register-table-selected-forced-dark.png

- **R682-actions-no-backplate**: actionsのthにはwb-th-contentがなく、上軸を透明化した後に「操作」だけ暗い展示背景へ暗字で残る。通常の実ラベルに不透明な読む材がない。
  改善方向: 実actions headingにも列名の上軸と同じ不透明な読面・断面を与える。rowActionsなしでは余分な軸や架空ラベルを残さない。
  証拠: captures/reviewer-material-9/blueprint-register-table-ltr-leave.png

- **R682-state-fills-air**: 通常leave時は番号側軸と本文間の20px空隙が見えるが、hover/selected時にtr全幅の背景がその空隙を塞ぐ。状態によって実構造が平坦な塗り列へ戻る。
  改善方向: hover/selected背景を各実読面へ限定し、trの全幅背景を使わない。接点と20px空隙をhover/leave/reenter/selected/解除で保持し、文字とhitは固定する。
  証拠: captures/reviewer-material-9/blueprint-register-table-ltr-hover.png, captures/reviewer-material-9/blueprint-register-table-ltr-selected.png

## R683 ribbon-register-table — pass

狭幅を実検索auto行→48pxの折面行→実選択auto行へ改め、前版の16px断絶を解消。非選択でも前面素材が残り、選択で文字/解除だけが現れる。wideの大きい半ひねりとnarrowの連続面を承認。

最寄比較: R283, R623, R613旧折面案

## R684 ceramic-register-table — pass

実action列を192pxへ確保し、44px操作2件を横並びで陶の溝内へ載せた。上端・全行・下曲面の連続を保持。actionなしでは溝なし、RTLでも接合・読字を保ち、前版承認の主形を維持。

最寄比較: R224, R476, R673旧C取手案, R604

## R685 receipt-register-table — adjust

実選択列80pxとtoolbar控えを一致させ、first-data固定を解除。query・状態名・badgeの遮蔽を解消し、selectable:falseで控えも消える。交互の紙肩の主形を保持。ただし幅の調整が表全体に未反映で、wideで大きい未使用の暗い矩形が残る。

最寄比較: R645, R665旧切離し票, R305

- **R685-table-frame-width-disconnect**: 幅900pxのtoolbar/footerとscrollportに対し実tableは718pxで終わり、右に182px×全行高の暗い空白が残る。RTL/selectable:falseでは表が640pxとなり反対側260pxが空く。材の自由端として設計された輪郭ではなく、寸法の不整合で大きい空き床ができる。
  改善方向: 80px選択列を固定し余剰幅を実data列へ配る、またはtableとtoolbar/footerの実全幅を揃える。狭幅は従来通り局所横scrollを許す。checkbox固定幅を崩して前版のsticky遮蔽を戻さず、selectable true/false・LTR/RTL両方で全体の読む幅と外形を一致させる。
  証拠: captures/reviewer-details-9/receipt-register-table-ltr.png, captures/reviewer-details-9/receipt-register-table-no-select.png, captures/reviewer-material-9/checks.json

## R694 rotary-gate-loader — pass

通常の開いた同心ゲートを保持。forcedでは欠け側のborder-styleを無効にして開口を維持し、前版の閉じた円化を解消。

最寄比較: 原版R694

## R695 spooling-ovals-ornament — pass

通常の芯と六つの巻く楕円を保持。forcedの内面透明化によって芯が実際に連続して見え、遮蔽を解消。

最寄比較: 原版R695

## R696 telescopic-stroke-loader — pass

前版承認のT主形と水平伸縮を保持。独立native通常3位相・pause・reduced・forced・cleanupを再実行し回帰なし。

最寄比較: 原版R696

## R698 lift-platform-loader — pass

各床と伸縮支柱に加え、forcedでも実borderの基床が見え、全支柱の下端と連続する。通常T形と動きを保持。

最寄比較: 原版R698

## 実施検査

- 固定9 author100hashとmanifest一致、配布CSS10一致、固定8から88ファイル不変。reviewer-hashes-9.json。作者/shared/snapshot無編集。
- 全6実portable native表のsort/query/IME/select/all/clear/actions/page/resize/controlled/empty/loading/error/disabled/所有focus/long320390768LTRRTL/forced/reduced/cleanupを再実行しPASS。reviewer-tables-9。
- 全6×18=108選択/全選択/解除の相対glyph/hit固定、hover/leave/reenter18条件を再実行。reviewer-table-geometry-9、reviewer-extra-9。固定幾何成功と素材状態の不整合は分けて判定。
- 全6narrow/wide dark/light forced選択済み実像を確認。R682番号軸のglyph侵入はforcedにも残る。reviewer-extra-9、reviewer-wideforced-9。
- 追加実操作: R680 resizer上下端、R683wide/narrow選択・非選択の材、R684 rowActionsなし、R685 selectableなし・RTLを撮影/測定。reviewer-details-9。
- rowNumbersのsort/filter/page後の1–4/5–8、manual page3/pageSize4の9/10、emptyの番号なし、rowNumbers:falseの列撤去を再確認。
- R682 hover/leave/selectedで真空隙を比較、R685全体幅を実測。reviewer-material-9。
- 全表の既定自然高化で初期4行が読めることを確認。R681前版三面造形を保持。motion4は作者40hash不変を確認し、固定8の実normal3位相/pause/forced/reduced/cleanupを継承。

## 限界

- React全形式/互換20件/恒久HTTP/type/contractsは主担当検証。独立は固定actual portable native表6件と実像・source/export照合。
- motion4は固定8から作者40hash同一で、前回の独立実操作と画像を継承。今回の動作再実行は表6件が対象。
- R682主形の変更は承認するが、名前や寸法採用を合格理由にはせず、実空隙・各実読面・状態での一貫性を根拠にした。残件を次の実像で確認する。
