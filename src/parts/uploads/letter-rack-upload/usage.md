# Letter Rack Upload

開いた前柵の三桟を、実書類の下の予約領域へ残すラック型のファイル選択。空の投入面とファイル一覧を同じ収納床へ置き、下110pxを84pxの中空前柵と10pxの接地面に確保する。書類が増えても三桟が底へ接続したまま残り、実名前とnative削除は柵の上へ固定する。

便箋立ての背と紙の受領面を分ける。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のLetterRackUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
