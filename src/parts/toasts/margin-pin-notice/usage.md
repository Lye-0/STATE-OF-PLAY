# Margin Pin Notice

余白の二つの切込みへ、大きいC形の留め線を通す通知。元の左のクリップを保持し、全高に応じる38px幅・4pxの留め線と、読む紙の二つの実横穴へ接続する。通知記号は留め具から離して本文の意味として表示し、本文と操作を固定する。

留めたピンの余白を本文から独立。架空の保存処理はありません。

## 組み込み

Reactは同梱のMarginPinNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
