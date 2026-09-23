# Botanical Range

スライダーの単位・上下限・刻み幅はpropsから変更できます。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のBotanicalRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。


## TRANSFORM edition
細い葉脈がつまみの周りでひらき、元の形へ戻る。
公開APIは維持しています。演出は値の変更を妨げず、停止後はJavaScriptの描画を止めます。必要な共有ファイルも同じ配布物に含まれます。
