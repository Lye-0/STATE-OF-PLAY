# Odometer Progress

軽い計器ケースと大きい数字窓の比率を揃える、送り式の進捗表示。元の計器と横の送り帯を保持し、暗い全周枠を淡い6–9pxの成形縁へ抑える。数字窓は48pxの等幅活字、送り帯は20px/20px間隔の固定した目盛りへ揃え、数字を主役にする。

走行計のドラム目盛りが現在の百分率に同期。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のOdometerProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
