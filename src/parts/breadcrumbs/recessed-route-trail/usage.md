# Recessed Route Trail

実階層を、両端が開いた一つの深い彫った溝へ置くパンくず。四辺の面取り枠を廃止し、左28pxと右52pxの異なる斜めの側壁が平らな読む床へ10px/16pxずつ入り、上端と下端を閉じない構造にする。右の広い斜面と外の端面が凹む深さを作り、祖先も現在も同じ床へ固定する。読む文字は左36px/右60pxの内側に確保し、RTLでは全溝を一度鏡映する。

くぼみの中に階層を順に刻む。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のRecessedRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
