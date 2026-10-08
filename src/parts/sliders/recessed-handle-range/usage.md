# Recessed Handle Range

上下の二つのずれた肩で溝縁を抱え、片側の深い指掛かりで動かすスライダー。二重の角丸のつまみをやめ、64pxの斜めの断面と28pxの低い指の面を持つ引き手へ変える。実溝は移動範囲の全幅にし、主軌道だけをnative中心の32px内側へ合わせ、最小/最大でも肩が溝縁へ接する。

くぼみの手掛かりが端に追従する。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のRecessedHandleRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
