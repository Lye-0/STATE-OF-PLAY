# Folded Paper Range

二つの折面と中心の折返しが、一本の軌道を跨ぐ紙のスライダー。元の折紙のつまみを残し、左の明るい面と右の厚い影の面を別の折れ方向へ合わせる。中心の細い返しと下端の折れを接点へ置き、文字とnativeの操作を固定する。

折り目の束が進んだ区間だけ開く。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のFoldedPaperRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
