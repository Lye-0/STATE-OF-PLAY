# Recessed Chip Tags

始端の大きい指の切欠きから、凹む読む床へつながる成形チップ。普通の淡青の角丸札と数値の箱を廃し、半径18pxの真の切欠き、奥へ下がる6px/7pxの壁と、異なる24px/34pxの終端曲面を作る。読む文字は36px内側の平床へ置き、選択時も床の輪郭を変えない。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。

くぼんだチップの中で状態を読む。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のRecessedChipTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
