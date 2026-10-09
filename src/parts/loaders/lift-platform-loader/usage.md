# Lift Platform Loader

中央の昇降台へ段が上がり、次の段へ受け渡される。小さい横棒を同じ高さに並べない。

## 使用
Reactは`LiftPlatformLoader`をimportして配置します。通常HTMLはmarkup.htmlとstyles.cssを置き、init(element, options)を呼びます。処理完了時は利用先がローダーを取り外すか非表示にしてください。実際の完了をライブラリが判断することはありません。
`content`でメッセージ、`paused`で動きを止めます。pauseは成功や完了を意味しません。loading対象領域のaria-busyは利用先で管理してください。

## 外観
固有の図形は `.x-composition` とその子要素で構成します。寸法・色は、この部品の `styles.css` で調整できます。状態を伝える文字は装飾から分離しています。

## 動きと破棄
CSSアニメーションです。毎フレームのJavaScriptループやタイマーは使いません。非表示タブ・画面外・pausedでは止まり、prefers-reduced-motionでは静止形を表示します。destroy()で監視を解除します。独立した複数配置ができます。

<!-- design-renewal -->
六つの昇降床の元の波を保持し、各床を実際の伸縮支柱で一つの基床へ接続する。床を上下させる高さと支柱の長さを同じCSS変数で駆動し、上下動のどの瞬間にも基床へ届く。小箱の波だけに見えない接続と、灰青の平たい床の厚みを磨く。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
