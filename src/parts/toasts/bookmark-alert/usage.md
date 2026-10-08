# Bookmark Alert

通知用紙の二つの切口へ、厚い細幅の栞を通すデザイン。元の左の栞を保持し、上と下へ出る22pxの布、二つの24×4pxの紙の実切口、下の割れた尾を揃える。本文に布を重ねず、通知記号を読む面の上へ固定する。

栞の通知は上の帯と本文を明確に分ける。架空の保存処理はありません。

## 組み込み

Reactは同梱のBookmarkAlertを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
