# B007 round2 独立検査

8件 pass、R234/R237の2件 changes_required。

- R204 embossed-disc-check: **pass** — 放射状の刻みと静かな確認面を分けた円盤が明快。チェック/混在の読取りとnative操作を確認。

- R208 warm-option-check: **pass** — 説明を先に読み行末で選択する配置が用途に合う。長文・RTLでも文字とチェックが重ならない。

- R211 dispatch-sheet-dialog: **pass** — 穿孔と綴じ代、見出しの区切りと署名操作帯が一枚の確認書を構成し、内容の優先順位が明快。

- R217 console-bay-dialog: **pass** — 凹んだ画面と右操作ベイの役割が明確。狭幅では操作が下へ移り、短い画面でも到達できる。

- R221 stepped-corner-dialog: **pass** — 三段の切欠きが実際の輪郭になり、本文とボタンを内側へ確保。長文スクロールとキー操作を確認。

- R225 split-frame-dialog: **pass** — 対向する枠と分割された見出し/本文が独自性を持つ。狭幅で読む順の縦配置へ移る。

- R228 warm-message-dialog: **pass** — 中央の短い判断文と等幅のボタンに用途が明瞭。狭幅と長文でも行間・余白を保つ。

- R230 neutral-form-dialog: **pass** — 見出し・入力面・操作帯を分けたフォーム構成が実用的。閉じて再表示しても名前と複数行メモを保持。

- R234 stone-inlay-range: **changes_required** — 石の粒と切断面、溝と欠けたつまみの材質差は明快。設定変更後のresetで表示と実値が不一致になる。

- R237 wheel-guide-range: **changes_required** — 車輪のスポーク/軸が走行面へ接する構造を視認。設定変更後のresetで表示と実値が不一致になる。

rangeは初期62→min:-20/max:80/step:5/value:40へ更新→form.reset()で、表示62%に対しnativeとFormDataが60。dual切替でも不整合がある。shared core resetが現在のoptionsでinitialを正規化しないことが原因候補。reset-probe-2.jsonとsliders-measurements-2.json参照。

popup6件は通常/hover往復/320/長文/320×360/RTL/forced/reducedを画像視認し、Tab循環・Escapeとfocus/scroll lock復帰・R230入力保持が正常。checkbox2件はmixed/Space/disabled/FormData/reset/RTL/forcedを確認。全10件の造形は各構造の意味と操作の安定を保つ。

レビュー対象画像計16sheetsを全視認。作者ソースは変更していない。検査は記録した状態と環境に限定され、無欠陥保証ではない。

追加確定: R234の11px目盛り0%/STEP/100%は#606665対#dedbd3で4.233:1。粒状テクスチャのない明るい地でも4.5未満のため、補助インクの修正を要する。R237は4.666:1。
