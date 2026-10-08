# Spool Dial Progress

一つの太い巻取り環と、固定した中央の数字窓を持つリール式進捗表示。元の同心リールを保持し、重複した細環と破線を撤去する。174pxの実割合環と112pxの淡い数字窓へ線幅と間隔を統一し、0%に着色量を残さず、100%で環全周を満たす。

糸巻きの巻取角で処理の進みを示す。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のSpoolDialProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
