# Numbered Pocket Choice

紙の右端を、番号の付いた横差込みの整理箱へ収める単一選択。上の短線だけのカードをやめ、紙の24pxを74pxの実側ポケットへ重ね、入口の上下の返しと奥7pxの縫い止めで保持する。番号を箱の面へ固定し、読む内容とnative丸印は露出した紙の上へ置く。

番号のポケットが独立した区画として開く。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のNumberedPocketChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
