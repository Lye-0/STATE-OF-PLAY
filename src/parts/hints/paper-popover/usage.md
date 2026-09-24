# Paper Popover

interactive=falseは説明用tooltip、trueは操作できるpopoverです。表示内容はcontentで変更します。

## 組み込み

Reactは同梱のPaperPopoverを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

## 展開面と長い内容（v4.13.2）

パネルの外枠は装飾のはみ出しをクリップし、表示した瞬間に余分なスクロールバーを出しません。長い本文・操作面は内側だけを縦にスクロールできます。ページや周囲の領域をスクロールしたらパネルは閉じます。
