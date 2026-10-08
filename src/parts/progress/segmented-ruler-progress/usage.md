# Segmented Ruler Progress

十の実区間と真っ直ぐな上下の基準を持つ、折尺の進捗表示。元の十区画を保持し、全体のskewを外して高さ42pxへ統一する。区画は固定した10%ごと、進行面は実割合の幅だけを満たし、部分到達の位置も見える。数字は定規の上へ固定する。

定規の区画を進捗量に沿って埋める。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のSegmentedRulerProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
