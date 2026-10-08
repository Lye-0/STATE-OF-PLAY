# Status Rail Notice

一本の立体レールへ、I形の保持台車で読む通知板を接続するデザイン。左線を14pxの三面軸へ作り直し、通知記号を載せる36×40pxの台車と、上下に張る8pxの保持足を作る。通知板は台車へ6px重なり、レールの両端は開いたまま残す。本文・close・actionは固定する。

二本の状態レールを文章の上下に通す。架空の保存処理はありません。

## 組み込み

Reactは同梱のStatusRailNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
