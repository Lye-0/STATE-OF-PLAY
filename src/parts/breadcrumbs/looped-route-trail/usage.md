# Looped Route Trail

連結するループを祖先の区切りにする。現在地の札は最後に固定し、タイル状配置を避ける。

輪で連結された階層ラベル。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のLoopedRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
