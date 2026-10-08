# Ribbon End Tags

両端を巻いて保持する短い織リボンのタグ。元の両端の巻込みと平らな読む帯を保持し、細すぎた端を幅12pxの曲がる面へ、上下面を4pxの織る小口へ揃える。選択は巻いた材料だけが少し張り、文字とnative操作の当たりは固定する。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。

帯の終端を選択面から伸ばす。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のRibbonEndTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
