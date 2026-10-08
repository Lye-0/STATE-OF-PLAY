# Canvas Bin Upload

二つの別々の中空の持ち手を、厚い布容器へ縫い留めるファイル選択。薄い黄色枠と四角い記号を撤去し、38px幅/112px高の二つの実持ち手と、82pxから始まる側折り12pxの容器を作る。持ち手は容器へ30px重なり、文字とnative操作を持ち手から離れた布面へ固定する。

布の箱の広い開口と個別のファイル札。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のCanvasBinUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
