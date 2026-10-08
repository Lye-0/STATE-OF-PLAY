# Loop Label Tags

一つの実孔から吊る丸い始端のタグ。元の長い丸端の札を保持し、二重の輪郭を一つの読む素材へ揃える。孔の端21pxに対し本文とアイコンを36px内側へ予約し、左端の文字と孔の衝突を解消する。件数は同じ札の平らな部分に置き、選択しても孔の位置とnative操作の寸法は変えない。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。

輪を通したラベルを選択で張る。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のLoopLabelTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
