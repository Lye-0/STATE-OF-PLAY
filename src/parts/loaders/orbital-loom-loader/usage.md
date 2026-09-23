# Orbital Loom / 4.8.0

異なる平面の三本の帯が空間を回り、中心の球を包む。

## 使用
Reactは`OrbitalLoomLoader`をimportして配置します。通常HTMLはmarkup.htmlとstyles.cssを置き、init(element, options)を呼びます。処理完了時は利用先がローダーを取り外すか非表示にしてください。実際の完了をライブラリが判断することはありません。
`content`でメッセージ、`paused`で動きを止めます。pauseは成功や完了を意味しません。loading対象領域のaria-busyは利用先で管理してください。

## 外観
`--ld-size`は112px（本体サイズ）、`--ld-accent`と`--ld-secondary`は色です。ギャラリーの上下の余白は部品のプレビュー用です。Bタイプはアプリ内の通常の小さい読込表示として使用できます。

## 動きと破棄
CSSアニメーションです。毎フレームのJavaScriptループやタイマーは使いません。非表示タブ・画面外・pausedでは止まり、prefers-reduced-motionでは静止形を表示します。destroy()で監視を解除します。独立した複数配置ができます。
