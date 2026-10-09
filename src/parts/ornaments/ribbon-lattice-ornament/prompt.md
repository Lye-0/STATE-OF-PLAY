# Ribbon Lattice Ornament

縦三本と横三本の帯を交差させた織り。反対方向の波が交点を渡る。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
意味を持たない装飾としてaria-hiddenを保ち、入力を受け取らない。pauseとreduced motionで静止する。

<!-- design-renewal -->
三本の縦帯と三本の横帯の格子を保ち、交点ごとに上を通る帯を交互に変える。横帯の透明な下通りが実縦帯を見せ、加算合成や単純な半透明ではなく実重なりで織りを読む。18pxの端を揃え、交差がずれる別位相の平行移動を廃した。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
