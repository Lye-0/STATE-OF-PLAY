# Ceramic Count Number

確定量を器の縁の弧で読む陶製の数値操作。元の楕円の器と量の弧を保持し、左下へ偏る濃い影を廃し、器とnative押面を同じ釉薬の白と5px/8pxの成形面へ揃える。量の弧は器の外の14%の帯だけへ置き、数字と単位は32px内側の無地の平面で読む。反射や弧で文字/操作範囲を歪めない。

磁器の円盤に刻まれた一つの溝で数を追う。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のCeramicCountNumberを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

＋／−で値を変更した後は、入力欄へ自動的にフォーカスを移しません。続けて直接編集する場合は、数値欄を選択してください。
