# Rolling Diamonds Loader

斜めの斜面を渡る六つの菱形。反転の瞬間に次の接地点へ受け渡す連続ループ。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
statusと読込メッセージを保持し、装飾はaria-hidden。停止は完了ではない。画面外、非表示タブ、reduced motion、pauseの停止を維持。固有のx-compositionはHTML・React・vanillaで共通。

<!-- design-renewal -->
正方形の直方体を廃し、長対角110px・短対角44pxの実菱形断面と100pxの奥行きが作る一つの鋭い角形ロールへ。前後二端面の鋭角・鈍角と同じ頂点を、実59.237pxの四側面で閉じて接合する。六面は共通の長軸で転がり、平行額縁や普通のcubeに見える輪郭を使わない。静止/forcedでも菱形端面と薄い厚みの関係を保つ。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
