# Slatted Pages

二本の縦の胴縁に、実ページの広い羽目板を取り付けるページ送り。54pxの板面、12pxの上木口と10pxの下木口、板間4pxの空隙を組む。幅10pxの胴縁へ各板の両端を4px重ね、支持から離れた板にしない。番号は実板へ固定し、省略区間の隙間では胴縁だけが続く。前後も同じ板材を持つ。

すのこの区画をページの位置に対応。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のSlattedPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
