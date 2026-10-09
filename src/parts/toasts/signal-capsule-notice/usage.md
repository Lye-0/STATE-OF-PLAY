# Signal Capsule Notice

丸い信号端子と薄い読み取り面を接続した通知。状態の記号を端子へ収め、本文と操作は無地の面へ置く。

信号の丸い窓と文章を一つの長いカプセルにまとめる。架空の保存処理はありません。

## 組み込み

Reactは同梱のSignalCapsuleNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
