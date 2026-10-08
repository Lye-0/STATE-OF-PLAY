# Index Ribbon Choice

一枚の索引リボンを、各札の上下の通し口へ交互に通す単一選択。親の前面帯を廃止し、札の後ろに連続する布と、札の大きい縦の実抜きから前へ現れる同じ42pxの布を分ける。上下6pxは紙が布を覆い、中央の番号と留め縁は布の前に表示する。文字とnative点は固定する。

索引の帯が項目の下を貫く。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のIndexRibbonChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
