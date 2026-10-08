# Channel Fill Progress

深い上下二壁の溝へ、進んだ幅だけ充填する進捗表示。青い長方形と短い縦線を廃止し、76pxの溝・14/16pxの上下壁・左12pxの止壁と、三つの面を持つ44pxの充填体を作る。充填の端は実割合へ一致し、0%で充填なし、100%で全幅を満たす。

細い流路の内側に量が蓄積する。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のChannelFillProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
