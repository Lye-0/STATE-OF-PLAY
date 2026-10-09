# Sliding Windows Loader

奥行きのある六枚の窓が順に開口を揃える。単なる一括移動ではなく、窓の重なりが変わる。

## 使用
Reactは`SlidingWindowsLoader`をimportして配置します。通常HTMLはmarkup.htmlとstyles.cssを置き、init(element, options)を呼びます。処理完了時は利用先がローダーを取り外すか非表示にしてください。実際の完了をライブラリが判断することはありません。
`content`でメッセージ、`paused`で動きを止めます。pauseは成功や完了を意味しません。loading対象領域のaria-busyは利用先で管理してください。

## 外観
固有の図形は `.x-composition` とその子要素で構成します。寸法・色は、この部品の `styles.css` で調整できます。状態を伝える文字は装飾から分離しています。

## 動きと破棄
CSSアニメーションです。毎フレームのJavaScriptループやタイマーは使いません。非表示タブ・画面外・pausedでは止まり、prefers-reduced-motionでは静止形を表示します。destroy()で監視を解除します。独立した複数配置ができます。

<!-- design-renewal -->
同寸の六つの縦窓が斜めにずれて横へ滑る元の主形を保持する。8pxの左の積層端・6px下端と3pxの読む辺で密度を整え、窓の内側を透かして層を数えられるようにする。R701の同心入れ子・視差回転とは異なり、同寸の積層と水平移動だけを使う。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
