# Lift Platform Loader

中央の昇降台へ段が上がり、次の段へ受け渡される。小さい横棒を同じ高さに並べない。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
statusと読込メッセージを保持し、装飾はaria-hidden。停止は完了ではない。画面外、非表示タブ、reduced motion、pauseの停止を維持。固有のx-compositionはHTML・React・vanillaで共通。

<!-- design-renewal -->
六つの昇降床の元の波を保持し、各床を実際の伸縮支柱で一つの基床へ接続する。床を上下させる高さと支柱の長さを同じCSS変数で駆動し、上下動のどの瞬間にも基床へ届く。小箱の波だけに見えない接続と、灰青の平たい床の厚みを磨く。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
