# Channelled Choice

逆方向に開いた二つの独立した溝へ、読む板を挿す単一選択。四辺の二重枠を廃止し、上は左に28px開いた三面のレール、下は右に28px開いた三面のレールを独立して作る。板はそれぞれの溝へ3px入り、左右の開口から紙端が露出する。本文・丸点・nativeヒットは固定する。

二本の流路が選択した行を連結する。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のChannelledChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
