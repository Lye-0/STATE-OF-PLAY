# Receipt Tags

分類の実ラベルと実件数を、小さな独立した受領紙へ配置するタグ。黄色い箱の下線を廃し、縦に読む紙の上段へ名称、下段へ実件数、8pxの真の切取り端を作る。デモの架空の総額や番号は追加せず、件数がない札は同じ紙の名前だけで成立する。選択は紙の色の密度で示し、文字やnative当たりを動かさない。

受領票のミシン目を選択欄に残す。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のReceiptTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
