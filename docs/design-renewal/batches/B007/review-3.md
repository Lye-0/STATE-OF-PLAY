# B007 round-3 独立再検査

判定: **全10件 pass**。固定 `snapshot/round-3` のみを評価。正本実装の編集なし。

R111は左の一体の折返しから上下の口が連続し、書く紙が右へ18px出る構成で差込みが読める。上の唇だけが開き、文字・caret・clear/revealの安定を保つ。単なる斜めの積層面という前回指摘を解消した。短い唇という提案例に形を一致させることは要求せず、完成した接合と独立性を評価した。

R113は上下の送り孔から白・暗色それぞれの背景が見え、膜を抜く構造が成立。focus時3pxの送り、解除・再進入でも読取り窓は固定し、前回の素材と説明の不一致を解消した。

|番号|ID|最終判定|
|---|---|---|
|R101|linen-tab-accordion|pass|
|R102|ledger-gate-accordion|pass|
|R103|curved-header-accordion|pass|
|R104|recess-stack-accordion|pass|
|R105|vellum-ruler-accordion|pass|
|R109|warm-help-accordion|pass|
|R111|interleaf-entry|pass|
|R112|enamel-trough-field|pass|
|R113|microfilm-field|pass|
|R114|writing-saddle|pass|

## 実施した検査

- 固定round-3のsource100ファイルをreview-input-3.jsonのSHA-256と照合し全一致。round-2との差分はR111の5ファイルとR113/styles.cssのみ。残る8件の正本は不変。
- 全10件の配布native CSSと正本CSSをimport除外で照合し全一致。captures/reviewer-extra-3/checks.json。
- Chromiumで固定native版のfields4件を再操作。FormData、focus/fill/clear/error時の入力矩形・文字属性、選択範囲、合成CompositionEvent、clear/undo、readonly/disabled、320/390/768px長文、RTL、forced、reducedを実行し4件全成功。captures/reviewer-fields-3/checks.json（errors=[]）。
- fields4件にpassword＋prefix＋suffix＋clear＋revealを実挿入し、320px LTR/RTLの計8状態でreveal後の選択保持、領域分離、横overflowなしを確認。captures/reviewer-extra-3/*-password-*.png。
- R111/R113を独立に暗色/白背景、initial/focus/leave/reenter計16状態で撮影。R111上唇scaleY(.55)、R113送り孔7px→10pxの位相、解除時復帰と再進入をcomputedおよび画像で確認。captures/reviewer-material-3/checks.json と各PNG。
- R111の左折返しから上下口への接続、右へ出る紙、本文との非干渉を通常/狭幅/forced実画像で確認。R113孔の背景透過を白/暗色実画像で確認。前回の最寄比較を再評価し反復の懸念を解消。
- 合格済みaccordion6件の通常造形と操作はround-2の実操作記録を引継ぎ。T2件は曲率を維持した既合格基準を適用し、今回は入力操作も再検証。

## 範囲と限界

- 今回のブラウザはChromium。forced colors/reduced motionはPlaywrightによるメディアエミュレーション。
- IMEは合成CompositionEventによる検証で、実OS日本語IMEの再検証ではない。
- React各配布形式の実props検証は主担当ログを参照し、今回は独立再実行していない。独立実操作は固定native版。
- 既存730件の全件再操作は行わず、前回の監査画像・近似比較を引き継いだ。変更のないaccordion6件も今回は再操作していない。

各部品の評価・近似候補・解消した指摘キーは [review-3.json](review-3.json) に記録。未解決の指摘なし。
