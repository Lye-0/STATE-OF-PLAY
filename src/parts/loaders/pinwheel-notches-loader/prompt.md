# Pinwheel Notches Loader

描画領域を実際の機構寸法に合わせ、往復・回転の余白を確保。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
statusと読込メッセージを保持し、装飾はaria-hidden。停止は完了ではない。画面外、非表示タブ、reduced motion、pauseの停止を維持。固有のx-compositionはHTML・React・vanillaで共通。

<!-- design-renewal -->
六つの切欠き羽根と中央の抜けを保持し、20pxの実面・4pxの小口へ磨く。切欠きはclip-pathで本当に開き、六枚が一つの軸で回る。小さい線の束と羽根ごとの漂いを廃し、暖かい紙の面と鈍い裏面で回転を読む。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
