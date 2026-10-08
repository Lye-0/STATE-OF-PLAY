# Archive Pocket Upload

一つの厚みのある収納ポケットへ、選んだファイルを収めるファイル選択。分離した二つの黄色い箱を撤去し、26pxの側面の蛇腹と96pxの前壁、中央が22px下がった実取り出し口へまとめる。読む操作は口の上に固定し、選択したファイルの一覧は前壁へ入り、件数に応じてポケットの下部が伸びる。

書庫のポケットから選択済みの索引がのぞく。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のArchivePocketUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
