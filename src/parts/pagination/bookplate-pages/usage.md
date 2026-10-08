# Bookplate Pages

一枚の書票の読む面へ実索引をまとめ、重い二重の番号枠を取り除くページ送り。元の紙票の精度を保持し、左右7pxの貼り代、18pxの隅の留め、細い一線の紙端へ線量を絞る。番号は紙の内面へ置き、現在だけが同じ票へ濃く印刷される。前後の実操作にも一線の紙端だけを残す。

蔵書票の余白に現在値を刻む。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のBookplatePagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
