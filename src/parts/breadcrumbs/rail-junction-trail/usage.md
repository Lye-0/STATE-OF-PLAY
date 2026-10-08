# Rail Junction Trail

祖先の駅を二本の連続した縦の線路へ載せ、省略階層の実操作だけが分岐線へ出るパンくず。バラバラの下線と丸い現在地を廃止し、全高へ続く二線、24pxの実停車床、途中階層へ分かれる実分岐、最後の広い終端ホームへ作り直す。階層順はnative DOMと上から下で一致させ、長い駅名もホームの内側で全文を読める。

駅をつなぐ線に階層を等間隔で置く。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のRailJunctionTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
