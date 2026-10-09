# Paired Crescents Loader

描画領域を実際の機構寸法に合わせ、往復・回転の余白を確保。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
statusと読込メッセージを保持し、装飾はaria-hidden。停止は完了ではない。画面外、非表示タブ、reduced motion、pauseの停止を維持。固有のx-compositionはHTML・React・vanillaで共通。

<!-- design-renewal -->
六つの三日月が斜めへ重なる主形を保持し、直径64px・輪郭3px・16/12pxの段差へ磨く。外側と内側の弧を一つの薄線束にせず、各開口を残し、最小明度でも三日月を見失わない。forcedでも欠けを閉じない。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
