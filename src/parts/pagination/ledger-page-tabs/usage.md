# Ledger Page Tabs

帳簿の厚い閉じ口へ、実ページを記す長い紙札を差し込むページ送り。番号下の短線を廃止し、62pxの読む紙札とその下の紙先（広幅20px、狭幅上段124px）、34pxの成形された閉じ口へ再構成する。現在札は同じ紙形のまま濃い実選択印を持ち、文字とnative hitを閉じ口の上に固定する。前後も帳簿の実左右の留め口へ揃える。

台帳の見出し札を下辺に揃える。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のLedgerPageTabsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
