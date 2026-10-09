# Segmented Ruler Progress

折尺の五つの面を交互に起こした進捗表示。つながった節と目盛を残し、実値の充填が折れた面を横切る。数値は正面へ固定して読み取れる。

定規の区画を進捗量に沿って埋める。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のSegmentedRulerProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
