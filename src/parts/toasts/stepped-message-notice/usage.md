# Stepped Message Notice

見出し・補足・実操作の三段を、互いに12pxずつ進む低い石段へ印刷する通知。四角い記号と小さい線の案を廃止し、情報の三段それぞれに独立した面と小口を作る。段は実内容の高さに追随し、ボタンのない通知では三段目も出ない。文字や操作領域はhoverで動かさない。

段差を下に集約し文章の平面を確保。架空の保存処理はありません。

## 組み込み

Reactは同梱のSteppedMessageNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
