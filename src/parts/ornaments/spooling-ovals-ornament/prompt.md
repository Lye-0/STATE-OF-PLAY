# Spooling Ovals Ornament

糸巻きの芯へ一本ずつ輪が巻かれる。縦の楕円を重ねるだけでなく、芯と巻き方向を見せる。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
意味を持たない装飾としてaria-hiddenを保ち、入力を受け取らない。pauseとreduced motionで静止する。

<!-- design-renewal -->
一本の実芯と六つの巻く楕円を保持し、芯18px・輪2px・25px間隔へ読みやすく磨く。密な極細線と下影を廃し、輪の傾きだけに位相差を持たせ、芯と巻きの接点を静止時にも明確にする。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
