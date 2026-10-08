# Shuttle Range

二つの爪が上下の細い案内線を抱え、中央の主レールを開けて跨ぐシャトルのスライダー。元の紺の台と明るい操作面を残し、普通の矩形を二つの実爪へ開く。上爪/下爪の端を案内線へ接し、中央の選択量は強い一本の軌道で読む。

杼が二本の経糸の間を渡る。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のShuttleRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
