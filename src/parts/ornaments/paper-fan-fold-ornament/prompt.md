# Paper Fan Fold Ornament

扇の骨が支点から扇状に展開。画面外・非表示・一時停止・reduced motionでは動きを止める。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
意味を持たない装飾としてaria-hiddenを保ち、入力を受け取らない。pauseとreduced motionで静止する。

<!-- design-renewal -->
独立した縦の短冊を廃し、六つの紙骨が一つの実支点で開閉する扇へ再構成する。幅20pxの折紙の面が8〜22度の共通開角で連動し、交互の裏面と一本の支点が静止時にも扇を読ませる。支点は動かず、上下の漂い・hover別回転を廃した。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
