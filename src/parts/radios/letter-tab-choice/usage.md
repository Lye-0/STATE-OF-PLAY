# Envelope Letter Choice

開いたV形の封筒へ、読む便箋を収める単一選択。番号タブと角切りのファイル案を廃止し、左右から48pxの高さで立ち上がり中央が23px低く開く実前蓋と、上へ出た便箋を作る。本文は開口の上へ固定、番号は封筒の前蓋、選択点は便箋に置く。

便箋のタブが欄外から起き上がる。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のLetterTabChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
