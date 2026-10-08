# Bridge Control Number

固定したnative数字窓の下で、左右の操作支点を結ぶ梁が確定値に応じて傾く数値操作。元の天秤の関係を保持し、梁を数字面から切り離して実操作支柱の中心間へ渡す。12px梁の中央は下から52px、30pxの支えの頂点も同じ52pxへ揃える。最大±6度の両端は高さ72pxの固定操作支柱へ入る。狭幅は数字窓を全幅上段へ、操作柱と梁を下段へ分ける。数字・caret・値の確定は材の動きを待たない。

橋脚を結ぶ下側の測定軸が値に追従する。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のBridgeControlNumberを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

＋／−で値を変更した後は、入力欄へ自動的にフォーカスを移しません。続けて直接編集する場合は、数値欄を選択してください。
