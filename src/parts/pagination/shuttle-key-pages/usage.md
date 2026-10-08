# Shuttle Key Pages

丸い端のシャトルの左右を、実索引を渡る連続した軌道へ接続するページ送り。元の丸い前後端を保持し、別々の番号箱を廃止する。8pxの上下レールと丸い端、各実行の中央を渡る通しの路線へ番号の舟形を載せ、現在だけが同じ舟の材で変わる。

杼が細いレールの中を送る。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のShuttleKeyPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
