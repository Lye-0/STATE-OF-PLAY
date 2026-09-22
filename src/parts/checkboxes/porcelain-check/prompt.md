# Porcelain Check — 再現仕様
乳白色のふくらみに、青緑の印が浮かぶ。

ルート.sop-porcelain-checkとsop-check、input[type=checkbox]、装飾用のbox/tick/dash、ラベル・補足のレイヤー構造を維持。styles.cssとcheckbox-base.cssを正本とし、ベース色#e4e7df、本文#2e4541、アクセント#3f776cを維持する。磁器の、やさしさ。 チェック線は描き込むように現れ、mixedは水平線で区別する。CSSだけの演出をCanvasや常時RAFに置き換えない。

checked/unchecked/mixed、disabled、キーボードfocus、エラー属性、フォームのresetを確認する。標準inputとlabelの関連付けを残す。Spaceの切り替え・クリック・フォーム検証はブラウザーに任せ、二重イベントを追加しない。混合状態はindeterminateプロパティに設定する。JSでreadonlyの擬似チェックを作るのではなく、操作禁止にはdisabledを使う。

外観を維持してラベルと説明は用途へ合わせる。複数の独立選択や親子チェックの集計は利用先へ接続し、フォームに送信するname/valueを設定する。ラベル内に別のリンクやボタンを置かない。外部制御の拒否時にDOMが親状態と食い違わないこと、取り外しでイベントが解除されることを確認する。
