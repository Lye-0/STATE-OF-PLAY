# Stone Marker Notice

三つの切断面を持つ一つの石柱へ、通知の標石を留めるデザイン。丸いアイコンと角丸箱を廃止し、46pxの五角の石柱と、8px重なる横の標石、上4px/下6pxの小口を作る。通知記号は柱へ刻み、本文と操作は標石の面へ固定する。

石のマーカーを左右の平面で支える。架空の保存処理はありません。

## 組み込み

Reactは同梱のStoneMarkerNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
