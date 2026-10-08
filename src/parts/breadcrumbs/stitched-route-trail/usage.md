# Stitched Route Trail

一本の幅広い縫い帯へ、実階層を記す織布の読む片を通すパンくず。点線の下線を廃し、幅12pxの通し帯と、各布片の13pxの縫う切込み、その裏を回る28pxの折返しへ組み直す。帯は縦へ続き、布片の間の実空隙でも途切れない。縫合は文字から離れた32pxの余白で行い、現在も同じ布の読む面で示す。

縫った経路の節ごとに階層を置く。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のStitchedRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
