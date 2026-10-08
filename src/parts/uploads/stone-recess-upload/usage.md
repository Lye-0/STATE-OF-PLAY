# Stone Recess Upload

斜めの石板を切り込んだ、深い平底のファイル受面。淡緑の標準角丸枠を廃止し、34pxずれた四辺の実石板と、30/38pxの上下肉厚を残す内側の切込みへ変更する。内面は上の暗い切断面と下の淡い受面を持ち、中央の固定文字を斜めに変形させずに表示する。

石のくぼみに記号と案内を一緒に置く。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のStoneRecessUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
