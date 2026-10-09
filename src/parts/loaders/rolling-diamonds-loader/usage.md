# Rolling Diamonds Loader

斜めの斜面を渡る六つの菱形。反転の瞬間に次の接地点へ受け渡す連続ループ。

## 使用
Reactは`RollingDiamondsLoader`をimportして配置します。通常HTMLはmarkup.htmlとstyles.cssを置き、init(element, options)を呼びます。処理完了時は利用先がローダーを取り外すか非表示にしてください。実際の完了をライブラリが判断することはありません。
`content`でメッセージ、`paused`で動きを止めます。pauseは成功や完了を意味しません。loading対象領域のaria-busyは利用先で管理してください。

## 外観
固有の図形は `.x-composition` とその子要素で構成します。寸法・色は、この部品の `styles.css` で調整できます。状態を伝える文字は装飾から分離しています。

## 動きと破棄
CSSアニメーションです。毎フレームのJavaScriptループやタイマーは使いません。非表示タブ・画面外・pausedでは止まり、prefers-reduced-motionでは静止形を表示します。destroy()で監視を解除します。独立した複数配置ができます。

<!-- design-renewal -->
正方形の直方体を廃し、長対角110px・短対角44pxの実菱形断面と100pxの奥行きが作る一つの鋭い角形ロールへ。前後二端面の鋭角・鈍角と同じ頂点を、実59.237pxの四側面で閉じて接合する。六面は共通の長軸で転がり、平行額縁や普通のcubeに見える輪郭を使わない。静止/forcedでも菱形端面と薄い厚みの関係を保つ。

native状態通知、pause、reduced motion、forced colors、React/JS配布を保持します。動くのは装飾領域だけです。
<!-- /design-renewal -->
