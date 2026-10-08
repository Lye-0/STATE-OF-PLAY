# Bookmark Route Trail

実祖先の傍らから下がる一本の栞を、現在地の紙の縦の実スリットへ通すパンくず。離れていた紙を栞の裏側まで48px戻し、紙だけに幅8px・高さ36pxの切込みを設け、一本の帯がそこから見える。現在の全文は60px内側に確保する。帯の尾は紙の下へ38px続き20pxのVで終わる。二孔の飾り札や反復する糸綴じへ置換せず、祖先の傍らの帯が現在の紙を保持する一つの構造にする。

栞を通した階層の札を縦に収める。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のBookmarkRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
