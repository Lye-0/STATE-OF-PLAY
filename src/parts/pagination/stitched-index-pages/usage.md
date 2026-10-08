# Stitched Index Pages

一枚の織布の上下を大きく折り返し、縫合の孔と折返しの小口で実索引を支えるページ送り。点線の番号枠を廃し、30pxの丸く張った上下の布返し、16pxピッチの孔へ通る32px周期の一本の縫い糸、横糸の読む面へ再構成する。数字は一枚の布の内側へ固定し、狭幅では三列にして長い番号を縫う端へ寄せない。前後の実操作も同じ布返しの小口を持つ。

布の索引を縫い目の中央に置く。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のStitchedIndexPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
