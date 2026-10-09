# Segment Orbit Loader

同心円スピナーを六つの浮いた弧へ分解。中心の空間を保って、波が軌道を一周する。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
statusと読込メッセージを保持し、装飾はaria-hidden。停止は完了ではない。画面外、非表示タブ、reduced motion、pauseの停止を維持。固有のx-compositionはHTML・React・vanillaで共通。

<!-- design-renewal -->
六つの円弧が同じ中心を囲む花軌道を保持し、48pxの弧と3pxの輪郭へ整える。鈍い灰青の交互の弧で連続する向きを読み、±8度の小さい位相差だけを残す。強制色でも閉じた輪にせず、弧の形を保つ。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
