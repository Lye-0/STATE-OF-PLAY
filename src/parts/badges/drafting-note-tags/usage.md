# Drafting Note Tags

図面の短い注記。文字と件数を線で揃え、選択した注記だけに下の計測線を伸ばす。

図面の注記を上下の罫で結ぶ。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のDraftingNoteTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
