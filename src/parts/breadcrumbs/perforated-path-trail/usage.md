# Perforated Path Trail

実祖先から現在までの券片を、切取り口と細い残し紙で連続させるパンくず。各ラベルの右点線を廃止し、両側6pxの切欠きと4pxの紙小口、次の券へ届く16pxの残し紙を組む。券間12pxの実空隙へ、中央の残し紙が4pxずつ券の裏へ入り、関係のない黄色い矩形列にしない。全文は切欠きから18px離す。

切取票の列が現在の場所まで続く。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のPerforatedPathTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
