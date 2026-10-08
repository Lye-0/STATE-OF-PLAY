# Bridge Saddle Range

一本の主レールを、橋脚型のnativeつまみで跨ぐスライダー。元の橋の輪郭を残し、強い6pxの主軌道と薄い1pxの上の補助線へ整理する。38pxつまみの中心と19px内側の軌道の端点を一致し、読む数字とnativeの操作を固定する。

橋の桁に沿って読み取る幅が伸びる。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のBridgeSaddleRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
