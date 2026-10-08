# Track Stop Pages

二本の線路へ実ページの停車床を並べ、現在の駅だけを中空のアーチへ納めるページ送り。無地の青い番号列を廃止し、72pxの駅の段、10pxの停車床、二本の連続した路線と64pxの現在駅のアーチへ組み直す。番号とnative hitは固定し、前後の実操作も同じ路線の受面へ揃える。

停車位置を下の軌道へつなぐ。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のTrackStopPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
