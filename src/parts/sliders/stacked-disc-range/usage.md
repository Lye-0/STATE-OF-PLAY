# Stacked Disc Range

三つの薄い円板の小口を、一本の軌道へ積むスライダー。元の積層のつまみを残し、横の単なる縞をやめる。各円板の楕円上面と左右の小さい段差を実際の外形へ合わせ、三つの断面の厚みを静かに読む。

円盤の側面を積層の目盛りとして露出。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のStackedDiscRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
