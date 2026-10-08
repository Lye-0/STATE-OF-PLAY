# Ribbon Count Number

上下に巻いたリボンの数値操作。元の縦に深い読む帯と巻く上下端を保持し、濃い紫の面を明るい織布へ、上下の材料を10px/12pxの同じ巻端へ揃える。送り線は上下14pxの巻く布だけに限定し、数字と単位へ通さない。押面も織布の同じ上面・下面で作り、紙の影や濃い箱を混ぜない。

巻取帯の流れを数量の上下で見せる。日本語変換中は加工しません。min/max/step/unitを指定できます。

## 組み込み

Reactは同梱のRibbonCountNumberを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

＋／−で値を変更した後は、入力欄へ自動的にフォーカスを移しません。続けて直接編集する場合は、数値欄を選択してください。
