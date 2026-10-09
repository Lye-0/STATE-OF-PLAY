# Soft Corner Trace Ornament

画面外では自動運動を停止し、表示中だけ動かす。

- Bタイプ。読みやすさ・実用性・組み込みやすさを維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
意味を持たない装飾としてaria-hiddenを保ち、入力を受け取らない。pauseとreduced motionで静止する。

<!-- design-renewal -->
Bの控えめな六つの角線という主形を保ち、20pxの角・2pxの線・54/50pxの余白で整える。呼吸の最低明度を.78へ上げ、暗背景でも消えず、情報や操作に見える余分なラベルや影を加えない。汎用の静かな装飾として使える小さい二段の配置を保つ。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
