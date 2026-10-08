# Ledger Quantity Number

縦の計量柱と数字の読み取り窓を並べ、赤い指標が上下の範囲内を移動する。

台帳の集計面の欄外目盛りが数とともに進む。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のLedgerQuantityNumberを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

＋／−で値を変更した後は、入力欄へ自動的にフォーカスを移しません。続けて直接編集する場合は、数値欄を選択してください。
