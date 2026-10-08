# Console Pages

成形された操作卓へ、実表示ページごとのキーと前後の二本のレバーを取り付けるページ送り。青い番号面と濃い矩形矢印を廃止し、18pxの切った肩と12/10/16pxの筐体小口、三面の実番号キー、64pxの実前後レバーと中空の軸受へ作り直す。数字と矢印は静止し、現在キーの実色だけが変わる。

計器の読取窓に現在位置を入れる。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のConsolePagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
