# Telegram Note

一つの電報の出力口から、切断した伝送帯を出す通知。切手に似た半円の紙端と点線を廃止し、60pxの角形の出力機と、深い6pxの出口へ4px重なる読む帯を作る。右の自由端は全高14pxの一つの斜め切断で示し、見出しの固定活字と本文と操作を帯へ載せる。

電文の行間と切取線で情報を整理。架空の保存処理はありません。

## 組み込み

Reactは同梱のTelegramNoteを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
