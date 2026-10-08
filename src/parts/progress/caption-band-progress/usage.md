# Caption Band Progress

大きい数値と、五つの階段状の通過面を持つ進捗表示。元の五階段を維持し、面の高さと進行方向の対応をそのまま残す。20%ごとの固定区切りに対し、充填は実割合で進む。説明は実際の階段形へ一致させ、存在しない斜め終端の説明を外す。

字幕帯の下を進行量の帯が送られる。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のCaptionBandProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
