# Bracket Tags

一つの大きな開いた支持括弧へ、平らな読む板を差すタグ。両端に細い括弧の記号を足す構成を廃止し、幅50pxの成形されたC支持、24%の上下の折る腕、そこへ20px重なる読む板を組む。括弧の内側には本当の空隙を残し、native名称は56pxの内側に固定する。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。

開いた括弧が選択時に閉じる。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のBracketTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
