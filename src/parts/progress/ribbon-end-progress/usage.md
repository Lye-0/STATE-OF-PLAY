# Ribbon End Progress

細い縦の巻芯から、進んだ量だけ一枚の幅広いリボンを引き出す進捗表示。黄色い通常棒と小さい点を廃止し、14pxの三面巻芯と68px幅の布、実終端の大きい燕尾切りへ再構築する。紙面上の余分な飾りでなく、出た布の量そのものが実割合へ一致する。数値は布から離れた固定面に置く。

引き出したリボンの長さが完了量になる。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のRibbonEndProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
