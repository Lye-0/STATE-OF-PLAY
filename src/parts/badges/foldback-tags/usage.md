# Foldback Tags

各札の終端だけを裏へ戻す折返しタグ。元の右の折面を保持し、狭幅で乱れる多方向の突出を一つの幅18pxの終端へ揃える。読む余白28pxの外へ8pxの上面と10pxずれる自由端を置き、全札の選択時にも寸法を変えない。RTLでは終端全体だけを鏡映する。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。

折返しの先端を選択で内側へ収める。onAction(value)で削除を通知します。controlledではitemsを親から更新してください。

## 組み込み

Reactは同梱のFoldbackTagsを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
