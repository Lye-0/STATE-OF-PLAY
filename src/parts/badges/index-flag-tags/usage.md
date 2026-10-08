# Index Flag Tags

選択札の始端を、一つの幅広い差込む旗へ整えるタグ。元の太い始端の分かりやすさを保持し、幅30pxの戻る旗と7pxの上面へ、14pxから始まる読む紙が16px入る。短い旗だけが貼られた矩形にせず、紙の6pxの小口と同じ差込みとして組む。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。

索引の旗の切欠きが選択を示す。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のIndexFlagTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
