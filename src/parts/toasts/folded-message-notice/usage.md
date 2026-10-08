# Folded Message Notice

一枚の紙を三面に折り、左の翼で通知記号、中央で本文、右の翼で閉じる操作を受けるデザイン。面取りの二重額縁を廃止し、左右34pxの翼と中央の紙を、16pxの全高の斜めの返しで連続させる。読む面を囲う枠は置かず、文字とnativeヒットを水平に固定する。

折った頭紙と本文の位置をずらして分ける。架空の保存処理はありません。

## 組み込み

Reactは同梱のFoldedMessageNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
