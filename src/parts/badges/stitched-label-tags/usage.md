# Stitched Label Tags

一枚の織布を、長い上辺の立ち上がった開いた縫い代と、平らに垂れる読む布へ組むタグ。端の孔・裏のC帯を廃止する。38pxの長い袖の断面には高さ10pxの実空隙があり、下の読む布へ6px続く。読む布の下は片方だけ10px切れた生の布端と8pxの縫った小口。全文は縫い代から48px下へ置き、選択では同じ布の密度だけを変える。狭幅は全文/件数・削除の二段にする。

縫い目と平面の文字札を分ける。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のStitchedLabelTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
