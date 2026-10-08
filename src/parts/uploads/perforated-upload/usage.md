# Perforated Upload

右の切取り片を、実際の14pxの隙間で切り離すファイル選択。下の点線を廃止し、紙の両側に相対する半円の穿孔を作り、読む紙面と細い切取り片を分ける。選択済みファイルも名前の紙とnative削除の切取り片へ分かれ、装飾の穿孔を削除操作の場所へ結び付ける。

切取線の上に案内を置き、受領票は下で分ける。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のPerforatedUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
