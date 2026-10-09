# Sliding Windows Loader

奥行きのある六枚の窓が順に開口を揃える。単なる一括移動ではなく、窓の重なりが変わる。

- Aタイプ。大胆な素材・形・状態変化を維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
statusと読込メッセージを保持し、装飾はaria-hidden。停止は完了ではない。画面外、非表示タブ、reduced motion、pauseの停止を維持。固有のx-compositionはHTML・React・vanillaで共通。

<!-- design-renewal -->
同寸の六つの縦窓が斜めにずれて横へ滑る元の主形を保持する。8pxの左の積層端・6px下端と3pxの読む辺で密度を整え、窓の内側を透かして層を数えられるようにする。R701の同心入れ子・視差回転とは異なり、同寸の積層と水平移動だけを使う。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
