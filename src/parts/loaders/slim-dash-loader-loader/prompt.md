# Slim Dash Loader Loader

短い待機列に明るさが順に渡るコンパクトなローダー。外周の細い枠が六つの片をまとめ、読込状態の文言を固定して伝える。

- Bタイプ。読みやすさ・実用性・組み込みやすさを維持。
- 操作の値は直ちに確定。装飾だけを連続的に動かし、文字とクリック領域を安定させる。
- 色違いの既存品に置き換えない。正本CSSの構成、展開面、hover・focus・選択・無効状態を保つ。
- 標準API、キーボード、長い文言、狭幅、reduced motion、forced colors、複数配置と解除を保つ。

## 操作契約
statusと読込メッセージを保持し、装飾はaria-hidden。停止は完了ではない。画面外、非表示タブ、reduced motion、pauseの停止を維持。固有のx-compositionはHTML・React・vanillaで共通。
