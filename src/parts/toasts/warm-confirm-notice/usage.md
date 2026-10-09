# Warm Confirm Notice

結果の見出しと説明を揃え、必要な次の操作を点線の下へ置く簡潔な通知。状態の意味は呼び出し側の内容に従う。

確認結果を読みやすい紙色で表示。架空の保存処理はありません。

## 組み込み

Reactは同梱のWarmConfirmNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
