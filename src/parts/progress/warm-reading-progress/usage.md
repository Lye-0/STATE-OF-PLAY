# Warm Reading Progress

本文に添える細い進捗線と端の数値。見出しと段階名を読み物の組版へ揃え、広い計器面を持ち込まない。


本文に添える細い進捗線と端の数値。見出しと段階名を読み物の組版へ揃え、広い計器面を持ち込まない。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のWarmReadingProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
