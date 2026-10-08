# Paired Scale Progress

上下の固定レールに、実割合の位置へ進む一つの小さい指標を合わせる進捗表示。元の二レールを保持し、暗い太線とぼかしを抑え、3pxの基準線と12pxの一体指標へ統一する。指標の半幅6pxを両端に予約して、0/100でも全体がレール内へ収まる。

二本の尺度を分け、完成した区間を明快に示す。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のPairedScaleProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
