# Stitched Count Number

数値の平らな読む芯を、左右の実増減の押環へ渡す織布のスリング。細長い矩形と上下線を廃し、24pxの凹む腰、広い左右の肩、8px/10pxの織った素材端で一枚の布が押環の裏へ続く形にする。縫い目は布の曲がる外の端だけへ置く。native値/単位/当たりは布の張りで変形させず、狭幅は布の下の両環へ操作を分ける。

縫った円の節が数値とともに進む。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のStitchedCountNumberを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

＋／−で値を変更した後は、入力欄へ自動的にフォーカスを移しません。続けて直接編集する場合は、数値欄を選択してください。
