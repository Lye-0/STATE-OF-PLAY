# Stapled Card Choice

三つのずれた紙の層を、一つの大きい綴じ金へ収める単一選択。小さいクリップだけの通常カードをやめ、上/左へ5pxずつ出る紙の実層と、全層を跨ぐ26×24pxの綴じ金へ変更する。綴じ金の両足を前の紙まで通し、文字とnative丸印を下の無地へ固定する。

二本の綴じ金具で選択面を留める。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のStapledCardChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
