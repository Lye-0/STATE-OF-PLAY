# Checkpoint Notice

上の検査レールへ、二つの厚い腕で記号の検査札を留める通知。元の吊り札を保持し、34×40pxの札と左右4pxの支持腕を、上の5pxレールへ実接続する。本文側の下線は2pxの小口へ抑え、文字とnativeボタンを固定する。

チェックポイントの縦軸を状態記号と揃える。架空の保存処理はありません。

## 組み込み

Reactは同梱のCheckpointNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
