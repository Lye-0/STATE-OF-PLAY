# B009 round-4 独立再検査

判定: **全10件 pass**。固定 `snapshot/round-4` を評価。正本実装の変更なし。

R138は凸の読む面・両端の楕円断面・二本の隆起バンド・下の紙束がつながり、前回の平たい本カードという指摘を解消した。本文/矢印/hitを動かさず、狭幅長文でも外周の構造を保持する。名前を写実的に再現することではなく、立体の接合とリンクの明瞭さを評価した。

|番号|ID|最終判定|
|---|---|---|
|R125|porcelain-lip-input|pass|
|R131|wayfinding-link|pass|
|R132|envelope-mouth-link|pass|
|R133|cantilever-arrow-link|pass|
|R134|archway-link|pass|
|R135|slide-rule-link|pass|
|R136|corded-pass-link|pass|
|R138|index-spine-link|pass|
|R139|signal-arm-link|pass|
|R140|rivet-bridge-link|pass|

## 検証範囲

- 固定source100ファイルをreview-input-4.jsonのSHA-256と照合し全一致。差分はR138のmeta/prompt/React/styles/usageの5ファイルのみ。他9件は不変。
- 全10件の配布native CSSと正本CSSをimport除外で照合し全一致。captures/reviewer-extra-4/checks.json。
- 全リンク9件を固定native版で再操作。Enterによるhref遷移/非キャンセルclick、hover/leave/reenter時の文字/矢印/hit固定、320px長文、RTL、forced/reducedが全成功。captures/reviewer-links-4/checks.json（errors=[]）。
- R138を通常motionでinitial/hover/leave/reenter/keyboard focusの5状態撮影し、長いeyebrow+custom SVGの320px LTR/RTL2状態も確認。両端の断面/二本のバンド/下の紙束が接続し、文字へ侵入しない。captures/reviewer-states-4/index-spine-link-*.png と checks.json。
- R138の長文・forced実画像を確認。文字と矢印が明瞭で、nativeリンクの下線を保持。R125は正本不変の前回操作検証を継承し、今回はpassword+prefix/suffix+clear/revealの320px LTR/RTL2状態を再確認。
- 残る9件の通常造形を再び条件変更せずround-3から継承。R138は前回の最寄比較と照合し、平たい本カードという指摘の解消を判定。

## 限界

- 独立ブラウザはChromium。forced/reducedはPlaywrightのメディアエミュレーション。
- React実props各配布形式は主担当ログを参照し、今回の独立操作は固定native版。R125の全項目操作はround-3を継承した。
- 730件の全件再操作は行わず、前回の監査画像/近似比較を継承した。

未解決の指摘なし。個別評価は [review-4.json](review-4.json) に記録。
