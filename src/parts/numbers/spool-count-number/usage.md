# Spool Count Number

糸巻きの数値操作。元の中央の巻いた素材と両端の丸い操作を保持し、横罫は12pxの左右の巻き幅だけへ移す。native数値と単位は線を一切通さない平らな同じ巻き芯へ置き、12pxの木のフランジと5px/8pxの端面を作る。丸い増減の押面も芯と同じ木の上面・下面へ揃え、紙貼りの数値と別素材のキーを廃する。

糸巻きの回転を数値の周囲で見る。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のSpoolCountNumberを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

＋／−で値を変更した後は、入力欄へ自動的にフォーカスを移しません。続けて直接編集する場合は、数値欄を選択してください。
