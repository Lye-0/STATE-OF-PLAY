# Stone Block Number

アーチの数値窓を持つ石の数量操作。元の大きいアーチと明るい窓を保持し、左右のnative押面も同じ石の曲がる端石に揃える。土台の10pxの断面、窓の6pxの奥の面、押面の7pxの下面を分け、尖った白い矩形キーを置かない。長い数値と単位は彫った平らな窓へ置き、狭幅は同じアーチの下へ二つの操作石を揃える。

切断した石の三つの段が数値の足元でずれる。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のStoneBlockNumberを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

＋／−で値を変更した後は、入力欄へ自動的にフォーカスを移しません。続けて直接編集する場合は、数値欄を選択してください。
