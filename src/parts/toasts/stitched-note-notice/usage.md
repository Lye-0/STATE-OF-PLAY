# Stitched Note Notice

対角の丸みを持つ二枚の布を、ずらして縫い合わせた通知。細いステッチ線だけの箱を廃止し、上布を左上、下布を右下へ20/18pxずらす。上布の6pxの折返し・四辺の実縫い代と、下布の露出した織り目を分け、記号とcloseを布の丸い留め位置へ揃える。読む文字とnative操作は上布へ固定する。

縫い目は外周、本文は無地に分ける。架空の保存処理はありません。

## 組み込み

Reactは同梱のStitchedNoteNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
