# Stone Step Pages

一体の石梁に、実表示順の踏面と蹴上げを切り出したページ送り。離れた石キーを全廃し、10pxずつ深く切込む実踏面、12pxの連続した蹴上げ、全高の側壁と下底が一つの断面を作る。省略区間も同じ石梁の続きとして保ち、狭幅でも隙間のない一列の階段を崩さない。番号とnative hitは実踏面に固定し、現在面だけが明瞭に変わる。

水平な石の段でページの尺度を保つ。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のStoneStepPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
