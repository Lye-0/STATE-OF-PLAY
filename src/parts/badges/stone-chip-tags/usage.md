# Stone Chip Tags

実ラベルの長さに合わせて伸びる、割れた石片のタグ。淡緑の角丸矩形を廃し、14pxの欠けた始端と左右で異なる斜めの破断、16pxの側断面、10pxの下の素材面へ変える。文字は破断面から28px内側の磨いた中央で読む。選択では素材の密度を変え、件数と値を石の割れへ重ねない。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。

石の一片を選択面として沈める。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のStoneChipTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
