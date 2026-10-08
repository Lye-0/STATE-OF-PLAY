# Sealed Envelope Notice

上から閉じた大きいV形の蓋を、中央の封緘で留める通知。丸いピンクの標準通知を廃止し、全幅64pxの三角の実蓋、中央40pxの押印、下の6pxの封筒の小口へ再設計する。本文は封緘の下で読む面へ固定し、native closeと操作を明示する。

封筒の重なりを下側の署名面に置く。架空の保存処理はありません。

## 組み込み

Reactは同梱のSealedEnvelopeNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
