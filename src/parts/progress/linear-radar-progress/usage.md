# Linear Radar Progress

上下の二つのガイドに接続した走査ヘッドが、実割合の位置へ進む進捗表示。固定格子や検出点を撤去し、108pxの紙送り場、10pxの上下ガイドと、それを受ける22px幅の実走査ヘッドへ再構築する。ヘッドの前に残る原稿の横線は、通過した側の静かな面に置き換わる。数値とヘッドの到達位置は一つのnative progressへ一致し、未確定状態ではヘッドを出さない。

走査線の読取位置を進行端に置く。indeterminateは割合不明の処理向けです。デモ用の自動進捗はありません。

## 組み込み

Reactは同梱のLinearRadarProgressを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
