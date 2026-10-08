# Station Label Trail

深い紺の駅名板の側柱へ、実祖先の停車目盛と現在の大きい終端表示を接続するパンくず。元の紺の縦経路を保持し、弱い小四角と極細線を38pxの実停車床/10pxの共通柱/明るい現在の表示面へまとめる。文字は停車床から離れた固定面へ置き、折返しても階層順と全文を保つ。

駅名板を一本の路線に接続する。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のStationLabelTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
