# Signpost Choice

札の遠い端を一本の支柱へ留め、手前へ実矢先を出す道標の単一選択。選択点を縦レールへつなぐ構成とは分け、12pxの柱を終端側へ置き、各札の背を12px高の留め面へ接続する。nativeの丸印と本文は柱のない側へ、22pxの矢先から離して固定する。

方向の先端を文字の右側に集約する。itemsの数と内容を自由に変更し、nameを指定するとフォームへ接続できます。

## 組み込み

Reactは同梱のSignpostChoiceを読み込み、value（外部制御）またはdefaultValue（内部制御）を指定します。onValueChangeで値を受け取り、controllerRefから公開APIを呼べます。
通常HTMLはmarkup.htmlとstyles.cssを配置しinit(element, options)で初期化します。onDataChangeで値を受け取り、destroy()でイベントとオーバーレイを解除します。

## 運用

入力・選択はローカルの状態です。通信・永続化・処理中表示を実際のアプリに接続してください。デモの日付・ラベル・候補・ページ数は利用先で差し替えてください。React版は外側のdivをReactが、内側の要素をcontrollerが管理する分離構成です。内側へReactのchildrenを挿入せず、公開props/APIから更新します。
