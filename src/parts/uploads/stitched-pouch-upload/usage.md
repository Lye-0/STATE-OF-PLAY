# Stitched Pouch Upload

開いた布袋の楕円の口を、横の引き紐で締めるファイル選択。紫の角丸面と細かい縫い目を廃止し、68pxの実開口、9pxの返し布と、左右へ抜ける紐を通す横面へ組み直す。袋本体は口の下14pxに重なり、文字とnative選択は袋の読む面へ固定する。

縫い袋を開く面と、中身の札を同じ布でまとめる。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のStitchedPouchUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
