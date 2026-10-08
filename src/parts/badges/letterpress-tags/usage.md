# Letterpress Tags

強い活字と小さな実件数を、薄い一枚の分類票へ整えるタグ。元の文字と罫の明快な関係を保持し、下端の黒い密度を2pxの素材の小口へ減らし、上の1pxの罫と右の件数の一線で読む面を分ける。選択で線を増やさず同じ面の密度を変える。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。

活版の印枠と文字を一つの票にする。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のLetterpressTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
