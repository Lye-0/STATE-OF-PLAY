# Telescopic Stroke Loader

六段の筒が同じ軸上で伸縮する。角枠の回転ではなく、奥へ続く伸縮の順序を示す。

## 使用
Reactは`TelescopicStrokeLoader`をimportして配置します。通常HTMLはmarkup.htmlとstyles.cssを置き、init(element, options)を呼びます。処理完了時は利用先がローダーを取り外すか非表示にしてください。実際の完了をライブラリが判断することはありません。
`content`でメッセージ、`paused`で動きを止めます。pauseは成功や完了を意味しません。loading対象領域のaria-busyは利用先で管理してください。

## 外観
固有の図形は `.x-composition` とその子要素で構成します。寸法・色は、この部品の `styles.css` で調整できます。状態を伝える文字は装飾から分離しています。

## 動きと破棄
CSSアニメーションです。毎フレームのJavaScriptループやタイマーは使いません。非表示タブ・画面外・pausedでは止まり、prefers-reduced-motionでは静止形を表示します。destroy()で監視を解除します。独立した複数配置ができます。

<!-- design-renewal -->
六段の伸縮筒という元の主形を保持し、水平だけに伸縮する異なる長さの層へ整える。最小層を細い点にせず、段ごとの左の厚みと伸び差で一つの軸を示す。元の全体が上下に漂う動きは廃し、入れ子の面と実際の伸縮の方向を一致させる。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
