# Perforated Ballot

投票用紙を一列に連ねる。行のミシン目と右の票番号、丸い記入欄で一票だけ選ぶ関係を見せる。

票の左のミシン目が選択位置を囲む。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のPerforatedBallotを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
