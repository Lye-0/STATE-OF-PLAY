# Folded Index Trail

実階層を一枚の折る索引紙へ記すパンくず。交互の全面折紙を廃止し、幅36pxの一つの縦折面、斜めに立ち上がる始端、現在地の下の36pxの返す紙端へ再設計する。祖先も省略も現在も同じ平らな読む面へ置き、48pxの内側に全文を確保する。素材の輪郭だけを折り、文字・当たり・順序は動かさない。RTLでは紙全体を一度鏡映する。

折った見出しが一段ずつ深い場所を示す。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のFoldedIndexTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
