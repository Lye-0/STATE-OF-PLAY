# B046 round11 独立最終検査

**全10件 pass。round9の読字改善を維持し、共有Contextの互換修正後も固定配布9件の操作回帰は成功。**

## R625 receipt-command — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 実queryを載せる平面、実件数の幅広端面、暗い開口と前唇、その下へ入る一枚の候補紙が主形になった。旧カプセル入力から離れ、実countを持つ送り部と紙の前後が読める。R605の一体プリンターやR295の左装置とは配置・断面が異なり、独立したAとして合格。

## R631 file-jacket-context — pass

round9の合格造形を著者10ファイル不変で継承。 全幅の実subject起点面から支持軸と実groupへの分岐が続く主形。320pxで実読字幅260px、768pxで360pxとなり、長い実対象名を通常の行で読める。匿名群は偽見出しなし、実親へ進むとsubjectも一致する。旧ポケット構成からの独立性と接続を保ち、残件を解消。

## R632 inspection-card-context — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 白丸付き行の反復を廃し、一つの深いglyph溝と連続する不透明な読む面へ再構成。実checkedの小面だけが溝を渡るため状態と形の関係が明瞭。暗い背後文字を置いてもgroup/disabledの実名称・説明は紙面上に保たれ、旧遮蔽問題を解消。

## R633 folding-dossier-context — pass

round9の合格造形を著者10ファイル不変で継承。 実Backの受けと大きい一枚の折面／現在紙は維持し、親見出しの全行を不透明rgb(226,199,218)の紙面へ載せた。320/768 LTR/RTLで暗い受け材の侵入による低コントラストを解消。強制色でも文字の下地を保持。通常主形と実階層操作が一致する。

## R634 stepped-document-context — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 round 5の合格造形を、対象10ファイル不変で継承。round 8実exportで操作・長文LTR/RTL・hover固定・dark/light forcedの回帰を再確認。 Tの書類台の段を保持し、通常行の過剰な白札を減らして実選択と分類の階層へ集約した。17px名称/14px説明とnative44px操作を保つ改善として合格。

## R635 ledger-tools-context — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 round 5の合格造形を、対象10ファイル不変で継承。round 8実exportで操作・長文LTR/RTL・hover固定・dark/light forcedの回帰を再確認。 Tの左罫を読む起点として保ち、グループと選択の競合を弱めた。操作行の密度と罫の強さを整理する元監査の課題に対応。

## R636 slipcase-context — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 round 5の合格造形を、対象10ファイル不変で継承。round 8実exportで操作・長文LTR/RTL・hover固定・dark/light forcedの回帰を再確認。 四辺の二重枠を廃し、片側64pxのケース口と12px入る読む紙へ分離した。24pxの斜め開口と前後の小口、ケース端の実起動ボタンにより、単なる右の色線から主形を変えている。長文RTLでも片側支持と読む面を保持。

## R637 rail-clamp-context — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 round 5の合格造形を、対象10ファイル不変で継承。round 8実exportで操作・長文LTR/RTL・hover固定・dark/light forcedの回帰を再確認。 Tの細いrailと読む紙の距離を保ち、分類ごとの過密なclampを見出しの一つへ集約した。実状態の淡い面と通常行の余白を分離する改善として合格。

## R638 stitched-file-context — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 大アーチと短い縫線から、実More／Backを置く軸と非平行の二つの広い支持片へ変更。軸・読む面・実操作の関係が大きな形を作り、R476/R441の弓の反復を解消。長見出しでも支持が実header高さに追従し、開閉で動くのは材のみ。

## R639 open-corner-context — pass

round9の合格造形を著者10ファイル不変で継承。 round8から対象10著者ファイルと配布JS不変のため、独立検査の合格を継承。 round 5の合格造形を、対象10ファイル不変で継承。round 8実exportで操作・長文LTR/RTL・hover固定・dark/light forcedの回帰を再確認。 Tの開いた余白と暖かい見出し面を保ち、長い孤立線を96pxと40pxの一つの開角へまとめた。通常行を囲わず元の軽さを保持している。

## 今回の検証範囲

- 固定round11の著者100hash・配布CSS10すべて一致。round9から著者100ファイル完全不変。captures/reviewer-hashes-11.json。
- 固定round11 actual portable Context9件のnative全protocolを独立再実行して全成功。keyboard/checkbox/radio/disabled/controlled、labels/path/focus/dead reset/empty/error、320390768 LTR RTL、forced/reduced、cleanup。captures/reviewer-contexts-11/checks.json。
- R631/R633はround11で長い実対象/親名、実group/匿名群、下位階層、背後の強い文字と縞、320/768 LTR/RTL、dark/light forcedをさらに操作撮影。round9の読字改善が保たれる。captures/reviewer-material-11/checks.jsonと同ディレクトリ画像。
- 固定11でnamed group→anonymous→named groupの実候補にdata-menu-flat-indexが2/3/4/6と付くことをassert。元の見出し/区切りを含む平坦位置を保持し、実group意味を崩さない。
- 共有ContextのflatIndexとbase.cssの旧thin-step-context限定規則を読んだ。主担当の実HTTP恒久回帰は旧位置2→7px、3→14px、他0と実subjectを検証しPASS（logs/workbench-permanent11.log）。この旧skin HTTP試験は独立再実行ではなく主担当ログ照合。
- R625は共有Context互換修正の対象外で著者10ファイル不変。round8の独立Command全操作・round9の造形継承を維持。
- 通常造形の元監査/近似比較と10件の判断はformal-review-8/9に記録済み。今回の名称や寸法説明だけで再判定せず、固定実画像と不変性により継承。

## 限界

- React4形式と旧thin-stepのHTTP恒久回帰は今回独立再実行していない。主担当のログを参照したことと、独立actual portable操作を区別した。
- 共有runtimeは著者100hashの外。今回の変更はsource確認と固定配布Context9実操作を組み合わせて検査。Commandの全操作再実行はround8を継承。
