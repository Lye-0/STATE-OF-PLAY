# Console Line Notice

出力面と実操作の台面を別の実flowへ置く、制御卓の通知。固定66pxの台面を廃し、上の読面は見出しと本文のgrid行へ、台面は実actionボタンの全高へ追従させる。長い操作名でも台面が同じ高さへ伸び、上の面へ食い込まない。actionがない通知は読面だけにして、本文とnative操作を固定する。

コンソールの状態行を太い下線と結ぶ。架空の保存処理はありません。

## 組み込み

Reactは同梱のConsoleLineNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
