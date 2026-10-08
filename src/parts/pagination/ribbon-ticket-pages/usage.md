# Ribbon Ticket Pages

現在ページのリボン札と実前後操作を、同じ切れた尾と平たい織面へ揃えるページ送り。元のリボンの印を保持し、丸角の矢印を廃止する。現在札は9px、前後札は7pxの尾を持ち、読む数字と矢印は同じ固定面から動かさない。

切符の一片を現在位置として挟む。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のRibbonTicketPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
