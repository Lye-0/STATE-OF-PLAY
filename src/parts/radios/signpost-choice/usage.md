# Signpost Choice

分岐の道標を選択する。三つの矢印を同じ寸法で並べ、選択した先へ端の矢先だけを進める。

方向の先端を文字の右側に集約する。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のSignpostChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
