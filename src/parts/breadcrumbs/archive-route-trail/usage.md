# Archive Route Trail

一枚の収蔵票の上部へ祖先の経路を記し、罫を一つ越えて実現在地の大きな見出しへ降りるパンくず。元の別段の現在地を保持し、短い飾り線を廃して、6pxの紙束小口と9pxの貼り背、連続した祖先の斜線と一枚の紙面へ整える。省略階層の実メニューも同じ票の左背を持ち、長い見出しは全文を折り返す。

階層を本の背に沿って読む縦の索引。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のArchiveRouteTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
