# Document Slot Upload

中空の横長挿入口へ、実際の選択操作を載せた書類面を差すファイル選択。薄い上線を撤去し、58px高の開いた受け口と、42pxから始まる書類面を接続する。書類が下の受唇へ10px重なり、空いた入口と読む面を明確に分ける。全書類面をnativeファイル選択の同じ操作範囲へ接続し、表示用の偽ボタンを置かない。

投入口の下に選択した書類が積み重なる。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のDocumentSlotUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
