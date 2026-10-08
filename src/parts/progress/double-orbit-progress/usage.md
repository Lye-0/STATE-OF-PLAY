# Double Orbit Progress

左右の二つの軌道を、一本の連続経路として順に辿る進捗表示。標準の円と装飾楕円、独立して動く到達点は撤去する。実割合0–50%で左の軌道、50–100%で右の軌道へ進み、描かれた経路の端がそのまま到達位置になる。二つの別データを表す環ではなく、一つの実進捗の全経路を100へ正規化する。未確定状態では固定した短い中立経路と省略記号を表示する。

二つの軌道で進捗の弧と完了範囲を分ける。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のDoubleOrbitProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
