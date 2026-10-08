# Feed Ballot Choice

両側の送り穴を持つ一枚の連続投票紙から選ぶ単一選択。右半券は廃止し、各票の四つの実矩形穴と、票の間を連続させる12pxの往復する折り目へ再設計する。穴は読む面自体を抜き、裏に紙を置かない。番号とnative選択点と文字は固定する。

票の左のミシン目が選択位置を囲む。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のPerforatedBallotを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
