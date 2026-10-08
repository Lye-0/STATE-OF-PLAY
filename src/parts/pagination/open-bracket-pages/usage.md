# Open Bracket Pages

高さを48pxずらした二つの開いた支持括弧が、一枚の実索引紙の上下を互い違いに受けるページ送り。34px幅/12px厚の曲げ材の両端が、26px内側にある読む紙へ各8px重なる。左上と右下が別の高さで受け、閉じた外枠を作らない。紙とnative番号は固定し、RTLでは曲げ材全体を一度だけ鏡映して内向きの受けを保つ。

左右の括弧でページの範囲を示す。hrefForPageを指定すると通常リンクになります。データの取得やルーターは利用先へ接続します。

## 組み込み

Reactは同梱のOpenBracketPagesを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
