# Looped Route Trail

一つの連続した二重のループ材が、実祖先の経路から現在の読む端子を保持するパンくず。普通のピンクのリンク列を廃し、64px幅の上下の本物の空隙と、現在の紙の裏へ12px入る60pxの渡りを作る。文字は76px内側へ置き、ループの輪郭と交点へ重ねない。値や階層を輪の進捗として捏造せず、全体の高さだけを実階層に合わせる。

輪で連結された階層ラベル。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のLoopedRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
