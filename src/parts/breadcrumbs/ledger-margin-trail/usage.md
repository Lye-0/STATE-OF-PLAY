# Ledger Margin Trail

帳簿の通し罫から、実階層の字下げへ短い受け罫を渡すパンくず。元の段階的な字下げを保持し、線が文字から離れる不整合を修正する。各12pxの字下げへ、同じ起点10pxから伸びる罫が文字の8px手前まで続く。細い二本の通し罫と一枚の読む紙で精度を作り、現在地は同じ紙の見出しとして読む。

台帳の欄外に階層の深さを刻む。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のLedgerMarginTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
