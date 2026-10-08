# Rail Clamp Input

帳簿のラベル列と書き込み行を分ける。行末の打刻位置が入力中の状態を示す。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
ネイティブinput/textareaのvalue・selection・IME・undo・form/resetを維持。入力内容やキャレットへ装飾の変形を掛けない。
