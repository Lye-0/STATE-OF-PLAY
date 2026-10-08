# Signal Capsule Notice

左右の曲率と通知記号の環を揃えた、信号カプセルの通知。元の丸い左端を保持し、右端も同じ40pxの曲面へ接続する。内側の上下の薄い切面と、二つの丸い操作面を同じ密度へ整え、本文とnative操作を固定する。

信号の丸い窓と文章を一つの長いカプセルにまとめる。架空の保存処理はありません。

## 組み込み

Reactは同梱のSignalCapsuleNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
