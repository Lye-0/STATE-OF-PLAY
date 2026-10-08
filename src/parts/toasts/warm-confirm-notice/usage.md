# Warm Confirm Notice

温かい確認色と抑えた影で、実操作の結果を示す汎用通知。既存の暖色と角丸を維持し、浮きすぎる下影を2px/8pxへ抑える。見出し14px・補足12px・操作の最小34pxで、長い通知も読みやすく表示する。

確認結果を読みやすい紙色で表示。架空の保存処理はありません。

## 組み込み

Reactは同梱のWarmConfirmNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
