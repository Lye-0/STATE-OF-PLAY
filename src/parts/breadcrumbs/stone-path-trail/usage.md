# Stone Path Trail

縦の階層を、丸く磨耗した石の読む床へ一つずつ載せるパンくず。元の縦経路の明快さを保持し、普通の淡緑の矩形を34pxの対角の曲面と実上下面へ整える。幅6pxの通しの道と各16pxの渡りが石へ4px入って接合し、板状のファイルツリーに見立てない。文字は磨いた平底の22px内側で読む。

石の踏み場が順に下へ続く。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のStonePathTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
