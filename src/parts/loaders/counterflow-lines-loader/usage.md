# Counterflow Lines Loader

仕切りのある二本の流路を小片が逆向きに進むローダー。移動方向の違いが一つのループを作る。

## 使用
Reactは`CounterflowLinesLoader`をimportして配置します。通常HTMLはmarkup.htmlとstyles.cssを置き、init(element, options)を呼びます。処理完了時は利用先がローダーを取り外すか非表示にしてください。実際の完了をライブラリが判断することはありません。
`content`でメッセージ、`paused`で動きを止めます。pauseは成功や完了を意味しません。loading対象領域のaria-busyは利用先で管理してください。

## 外観
固有の図形は `.x-composition` とその子要素で構成します。寸法・色は、この部品の `styles.css` で調整できます。状態を伝える文字は装飾から分離しています。

## 動きと破棄
CSSアニメーションです。毎フレームのJavaScriptループやタイマーは使いません。非表示タブ・画面外・pausedでは止まり、prefers-reduced-motionでは静止形を表示します。destroy()で監視を解除します。独立した複数配置ができます。

<!-- design-renewal -->
対向する二つの折返し路と三組の流れを保持し、軌道2px・光点22×4pxへ読む強さを磨く。二つの閉路とそれぞれ三つの等間隔の流れが同じ中央で交差し、反対の進行を灰砂と灰青で区別する。静止/強制色でも軌道と光点の接続を保つ。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->

<!-- round3-path -->
仕切りのある二本の流路を小片が逆向きに進むローダー。上下の通路と両端の境界を分け、互いの小片が重ならず流れる。
