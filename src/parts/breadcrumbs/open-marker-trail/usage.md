# Open Marker Trail

実経路の始端と現在地そのものを、反対向きに開いた大きな折返しの読むマーカーへ組むパンくず。外側へ浮く二つの台形を廃し、祖先のリンクが72pxの始端の平らな折面を、現在名が94pxの反対向きの終端を占める構造にする。中間の実階層だけが幅4pxの連続した導線に沿う。斜めの端は文字から24px以上離し、短い経路や一階層でも全文と当たりを保持する。

開いたマーカーで現在の段だけ囲む。末尾は現在地です。長い階層は途中をまとめて表示します。

## 組み込み

Reactは同梱のOpenMarkerTrailを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
