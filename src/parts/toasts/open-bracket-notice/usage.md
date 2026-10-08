# Open Bracket Notice

四つの開いた角だけで、読む通知面を保持するデザイン。元の開いた枠を保持し、競合する記号下線を廃止する。角は28pxの長さ/5pxの太さへ揃え、紙を内側8pxに収める。本文の周りに長い枠線を足さず、文字とnative操作を固定する。

開いた括弧で通知の始まりと終わりを示す。架空の保存処理はありません。

## 組み込み

Reactは同梱のOpenBracketNoticeを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
