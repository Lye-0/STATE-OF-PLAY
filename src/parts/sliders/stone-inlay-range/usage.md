# Stone Inlay Range

丸い石の台に、明るい小口を持つ濃い石のインレイを通すスライダー。元の溝と直線の操作面を残し、44px高の操作面を濃く、縁を明るくして埋もれを防ぐ。小口の3pxの厚みを主レールと同じ軸へ揃える。

石の切込みを充填した距離で量を示す。上限と下限の2ハンドルにも対応します。

## 組み込み

Reactは同梱のStoneInlayRangeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
