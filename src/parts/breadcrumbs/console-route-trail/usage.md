# Console Route Trail

一本の計器の導体へ、実祖先と現在の端子面を順に接合するパンくず。厚い片丸の箱と浮く小楕円を廃し、16pxの通し導体、側へ張り出す38pxの台形の端子脚、18px角を落とした平らな読む端子へ組む。端子脚は導体へ8px、読む面へ10px入る。紙や縫布に似せず、6pxの上面と10pxの成形された金属の下面を分ける。各実階層は任意の高さへ伸び、文字は24pxの内側で固定する。

コンソールの経路を一本の縦線で示す。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のConsoleRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
