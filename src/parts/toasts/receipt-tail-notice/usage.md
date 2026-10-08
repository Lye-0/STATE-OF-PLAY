# Receipt Tail Notice

ゆとりのある紙端と、発行見出しの階層を持つレシート通知。元の下の紙端を保持し、抜きは24px間隔の3pxへ抑える。上の発行口の二重線、固定した見出しと補足、操作前の14pxの空間を揃え、細かいギザギザと窮屈さを整理する。

レシートの切取部を本文の下に独立。架空の保存処理はありません。

## 組み込み

Reactは同梱のReceiptTailNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
