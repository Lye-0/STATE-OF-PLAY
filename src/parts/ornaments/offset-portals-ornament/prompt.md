# Offset Portals Ornament

奥へ続く六つの門。遠近の大きさと開口をずらし、hoverで奥行きを開く。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
意味を持たない装飾としてaria-hiddenを保ち、入力を受け取らない。pauseとreduced motionで静止する。

<!-- design-renewal -->
六つの直角の門の入れ子を保ち、3pxの読む辺と6pxの側断面で前後を明確にする。奥の門の左右のずれだけが同じ軸で往復し、全体が拡大回転するhoverを廃した。鞍の曲面と区別し、直角・閉じた門・左右の視差を主形にする。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
