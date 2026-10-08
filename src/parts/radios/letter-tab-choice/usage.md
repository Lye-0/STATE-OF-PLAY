# Letter Tab Choice

封筒の宛名札を三段に配置。丸い選択印を切手側に寄せ、選ばれた札の下辺を展開する。

便箋のタブが欄外から起き上がる。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のLetterTabChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
