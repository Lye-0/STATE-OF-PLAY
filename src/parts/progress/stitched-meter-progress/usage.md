# Stitched Meter Progress

離れた上下の布片を、進んだ割合だけ縫い合わせる進捗表示。普通の横棒と細かい縫い目を廃止し、12px離れた二つの布片へ、40px高の大きい交差糸を渡す。糸の届く幅が実割合へ一致し、未達側は布の開いた隙間が残る。数値は固定した読面で明確に表示する。

縫い目が進捗とともに完成する。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のStitchedMeterProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
