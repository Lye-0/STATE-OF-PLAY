# Instrument Tags

実件数を独立した計器面として読むタグ。元の数値面の区別を保持し、極細の下線と立体数値の不整合を一つの成形された読む床へ揃える。全札に4pxの上面と7pxの下の素材面を揃え、件数欄は厚さ2pxの実隔壁で分ける。名称も件数も同じ材料の平面に固定し、任意の長さを折返せる。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。

計器の札を二つの括弧に収める。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のInstrumentTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
