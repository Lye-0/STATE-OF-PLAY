# Shallow Bowl Choice

浅い楕円の内皿を、全幅の厚い鉢の縁へ収める単一選択。単なる丸角カードを廃止し、30pxの端の楕円、内側の凹んだ5pxの縁、下12pxの曲がった支持面を作る。読む内容は凹面に固定、選択時は同じ凹面だけ明るくする。

器の内側の弧が選択面を支える。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のShallowBowlChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
