# Drafting Note Tags

一つのT横尺へ、両端を斜めに裁断した実名称の読む紙を渡す製図タグ。紙を囲むC支持・円の切欠きを廃し、幅16pxの縦尺と高さ16pxの横尺が交差する一つの開いた主形へ変える。紙の上辺は横尺の裏へ12px接触し、紙の斜めの自由端と尺の下端を別々に露出する。全文は左56px/上44pxの内側で読む。RTLでは物理的な輪郭を一度だけ鏡映する。狭幅は全文/件数・削除の二段にする。

図面の注記を上下の罫で結ぶ。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のDraftingNoteTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
