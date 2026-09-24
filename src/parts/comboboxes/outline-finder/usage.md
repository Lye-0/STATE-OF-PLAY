# Outline Finder

検索して候補を選択します。候補はitemsから供給します。loading/errorは外部処理に合わせて明示します。IME変換中はEnterを確定操作に使いません。

## 組み込み

Reactは同梱のOutlineFinderを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。

## 候補一覧のスクロール

候補を開いている間も外枠やページにスクロールバーを出しません。候補が表示領域を超えたときは、候補一覧の内容面だけを縦方向にスクロールさせます。

## 候補パネルのスクロール（v4.13.1）

候補一覧の内側をスクロールする間はパネルが開いたままで、ページや周囲のスクロール領域を動かすと閉じます。閉じたら入力欄の `aria-expanded` も戻ります。候補の文言と説明は装飾に隠れないように表示します。
