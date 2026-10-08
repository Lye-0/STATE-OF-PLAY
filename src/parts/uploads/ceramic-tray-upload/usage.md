# Ceramic Tray Upload

広い平底と手前の浅い曲面が、選んだ書類を一つの器で受ける陶製ファイル選択。切れた角丸の四辺枠と小脚を撤去し、投入面からファイル一覧まで連続した底面を作る。手前64pxは上の受唇・曲面・10pxの接地面で構成し、件数が増えると器全体が伸びる。文字とnative削除は曲面から離れた底面へ固定する。

磁器の皿にファイルを置き、個別の小皿で受領を見せる。送信先・送信処理は利用先で実装してください。accept・サイズ確認はクライアント側の補助で、サーバー側検証の代わりではありません。

## 組み込み

Reactは同梱のCeramicTrayUploadを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
