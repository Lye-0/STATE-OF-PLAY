# Stone Stack Mobile Ornament

積み石が釣り合いを保って開く。画面外・非表示・一時停止・reduced motionでは動きを止める。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
意味を持たない装飾としてaria-hiddenを保ち、入力を受け取らない。pauseとreduced motionで静止する。

<!-- design-renewal -->
大小の六つの不均一な積石を保持し、22pxの厚さを20pxの段へ重ねて下の石が上を受ける形へ磨く。4pxの暗い小口と灰・砂・薄紫のつや消し面で重みを示す。等間隔に浮く上下移動を廃し、微小な揺りだけを残す。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
