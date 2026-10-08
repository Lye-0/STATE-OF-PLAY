# Stepped Tile Choice

低い段に載る選択タイル。各行を同じ高さに保ち、選択した段の支えだけを広げる。

階段状の台座が選択面の下に現れる。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のSteppedTileChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
